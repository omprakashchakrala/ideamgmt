import { GlideRecord, GlideDateTime } from '@servicenow/glide'

// Task state values inherited from base task: 1=Open, 2=Work in Progress, 3=Closed Complete,
// 7=Closed Skipped. Idea state values: see idea-guard-transitions.ts.
export function onTaskAfterUpdate(
    current: GlideRecord<'x_prna_idea_mgmt_task'>,
    previous: GlideRecord<'x_prna_idea_mgmt_task'>
) {
    const taskType = current.getValue('task_type')
    const justOpened = current.getValue('state') === '1' && previous.getValue('state') !== '1'
    const justClosedComplete = current.getValue('state') === '3' && previous.getValue('state') !== '3'

    if (!justOpened && !justClosedComplete) {
        return
    }

    const idea = new GlideRecord('x_prna_idea_mgmt_idea')
    if (!idea.get('sys_id', current.getValue('parent'))) {
        return
    }

    if (justOpened && taskType === 'testing') {
        idea.setValue('state', '7') // Testing in Progress
        idea.update()
        return
    }

    if (!justClosedComplete) {
        return
    }

    // --- Copy task-type-specific outcomes to the Idea rollup fields ---
    if (taskType === 'ootb_app_check') {
        idea.setValue('ootb_solution_exists', current.getValue('ootb_exists'))
    } else if (taskType === 'solution_design_effort_estimation') {
        idea.setValue('estimated_effort', current.getValue('estimated_effort'))
        idea.setValue('estimated_timeline_weeks', current.getValue('estimated_timeline_weeks'))
    } else if (taskType === 'cost_benefit_analysis') {
        idea.setValue('estimated_cost', current.getValue('estimated_cost'))
        idea.setValue('estimated_benefit_value', current.getValue('estimated_benefit_value'))
    } else if (taskType === 'deploy_marketplace') {
        idea.setValue('marketplace_listing_url', current.getValue('marketplace_listing_url'))
        idea.setValue('certification_status', current.getValue('certification_status'))
    }

    // --- OOTB gate: if OOTB App Check closes with an OOTB solution already available,
    // skip the remaining assessment tasks and reject the Idea. ---
    if (taskType === 'ootb_app_check' && current.getValue('ootb_exists') === '1') {
        const sibling = new GlideRecord('x_prna_idea_mgmt_task')
        sibling.addQuery('parent', idea.getUniqueValue())
        sibling.addQuery('phase', 'assessment')
        sibling.addQuery('sequence', '>', current.getValue('sequence'))
        sibling.query()
        while (sibling.next()) {
            sibling.setValue('state', '7') // Closed Skipped
            sibling.update()
        }

        idea.setValue('state', '4') // Rejected
        idea.setValue('rejection_reason', 'OOTB solution already exists — no further assessment required.')
        idea.update()
        recalculatePercentComplete(idea)
        return
    }

    // --- Sequence activation: open the next task in the same phase, or advance the Idea
    // when the phase's last task has closed. ---
    const nextTask = new GlideRecord('x_prna_idea_mgmt_task')
    nextTask.addQuery('parent', idea.getUniqueValue())
    nextTask.addQuery('phase', current.getValue('phase'))
    nextTask.addQuery('sequence', String(parseInt(current.getValue('sequence'), 10) + 1))
    nextTask.query()

    if (nextTask.next()) {
        nextTask.setValue('state', '1') // Open
        nextTask.update()
    } else if (current.getValue('phase') === 'assessment') {
        idea.setValue('state', '3') // IA Completed
        idea.setValue('sub_state', 'pending_approval')
        idea.setValue('assessment_recommendation', 'recommend')
        idea.setValue('assessment_completed_date', new GlideDateTime().getDisplayValue())
    } else if (current.getValue('phase') === 'delivery' && taskType === 'deploy_marketplace') {
        if (current.getValue('certification_status') === 'certified') {
            idea.setValue('state', '8') // Deployed
        }
    }

    idea.update()
    recalculatePercentComplete(idea)
}

function recalculatePercentComplete(idea: GlideRecord<'x_prna_idea_mgmt_idea'>) {
    const allTasks = new GlideRecord('x_prna_idea_mgmt_task')
    allTasks.addQuery('parent', idea.getUniqueValue())
    allTasks.query()

    let total = 0
    let closed = 0
    while (allTasks.next()) {
        total++
        const state = allTasks.getValue('state')
        if (state === '3' || state === '7') {
            closed++
        }
    }

    if (total > 0) {
        idea.setValue('percent_complete', String(Math.round((closed / total) * 100)))
        idea.update()
    }
}

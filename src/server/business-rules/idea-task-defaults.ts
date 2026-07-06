import { GlideRecord } from '@servicenow/glide'

const TASK_TYPE_LABELS: { [taskType: string]: string } = {
    ootb_app_check: 'OOTB App Check',
    solution_design_effort_estimation: 'Solution Design & Effort Estimation',
    cost_benefit_analysis: 'Cost Benefit Analysis',
    build_ut: 'Build & UT',
    testing: 'Testing',
    deploy_marketplace: 'Deploy to ServiceNow Marketplace',
}

// Before Insert — safe to set fields on `current` directly, no extra update() needed.
export function setTaskDefaults(current: GlideRecord<'x_prna_idea_mgmt_task'>) {
    const taskType = current.getValue('task_type')

    if (current.short_description.nil() && TASK_TYPE_LABELS[taskType]) {
        current.setValue('short_description', TASK_TYPE_LABELS[taskType])
    }

    if (current.assignment_group.nil()) {
        const groupName = current.getValue('phase') === 'assessment' ? 'Solutions Team' : 'Delivery Team'
        const group = new GlideRecord('sys_user_group')
        group.addQuery('name', groupName)
        group.query()
        if (group.next()) {
            current.setValue('assignment_group', group.getUniqueValue())
        }
    }
}

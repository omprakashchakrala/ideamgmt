import { gs, GlideRecord } from '@servicenow/glide'

// Task state values inherited from base task: 1=Open, 2=Work in Progress, 3=Closed Complete
export function validateTaskClose(
    current: GlideRecord<'x_prna_idea_mgmt_task'>,
    previous: GlideRecord<'x_prna_idea_mgmt_task'>
) {
    const closingNow = current.getValue('state') === '3' && previous.getValue('state') !== '3'
    if (!closingNow) {
        return
    }

    const taskType = current.getValue('task_type')

    if (taskType === 'ootb_app_check' && current.ootb_exists.nil()) {
        fail('OOTB Solution Exists must be set before closing this task.')
    } else if (taskType === 'solution_design_effort_estimation') {
        if (current.estimated_effort.nil() || current.estimated_timeline_weeks.nil()) {
            fail('Estimated Effort and Estimated Timeline are required before closing this task.')
        }
    } else if (taskType === 'cost_benefit_analysis') {
        if (current.estimated_cost.nil() || current.estimated_benefit_value.nil()) {
            fail('Estimated Cost and Estimated Benefit Value are required before closing this task.')
        }
    } else if (taskType === 'build_ut') {
        if (current.unit_test_result.nil() || current.getValue('unit_test_result') === 'not_run') {
            fail('Unit Test Result must be Pass or Fail before closing this task.')
        }
    } else if (taskType === 'testing') {
        if (current.test_result.nil()) {
            fail('Test Result is required before closing this task.')
        }
    } else if (taskType === 'deploy_marketplace') {
        if (current.certification_status.nil() || current.getValue('certification_status') === 'not_submitted') {
            fail('Certification Status must be Submitted, Certified, or Rejected before closing this task.')
        }
    }

    function fail(message: string) {
        current.setAbortAction(true)
        gs.addErrorMessage(message)
    }
}

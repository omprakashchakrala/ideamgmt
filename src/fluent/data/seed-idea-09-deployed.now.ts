import { Record } from '@servicenow/sdk/core'
import { demoRequestor, demoApprover } from './seed-users.now'

export const seedIdea09 = Record({
    $id: Now.ID['seed_idea_09'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Automated SLA breach early-warning notifications',
        opened_by: demoRequestor,
        state: 8, // Deployed
        category: 'itsm_accelerator',
        business_problem: 'Teams find out about SLA breaches only after they happen.',
        expected_benefit: 'Earlier intervention on at-risk SLAs, fewer breaches.',
        ootb_solution_exists: false,
        estimated_cost: 6000,
        estimated_timeline_weeks: 3,
        estimated_effort: 10,
        estimated_benefit_value: 18000,
        assessment_recommendation: 'recommend',
        assessment_completed_date: '2026-04-10',
        approved_by: demoApprover,
        approval_date: '2026-04-15',
        approval_decision: 'approved',
        implementation_status: 'complete',
        target_start_date: '2026-04-18',
        target_end_date: '2026-05-15',
        actual_start_date: '2026-04-18',
        actual_end_date: '2026-05-12',
        percent_complete: 100,
        marketplace_listing_url: 'https://store.servicenow.com/sn_appstore_store.do#!/store/application/example-sla-early-warning',
        certification_status: 'certified',
    },
})

Record({
    $id: Now.ID['seed_idea_09_task_1'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: { parent: Now.ref('task', 'seed_idea_09'), task_type: 'ootb_app_check', phase: 'assessment', sequence: 1, state: 3, ootb_exists: false },
})

Record({
    $id: Now.ID['seed_idea_09_task_2'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_09'),
        task_type: 'solution_design_effort_estimation',
        phase: 'assessment',
        sequence: 2,
        state: 3,
        estimated_effort: 10,
        estimated_timeline_weeks: 3,
    },
})

Record({
    $id: Now.ID['seed_idea_09_task_3'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_09'),
        task_type: 'cost_benefit_analysis',
        phase: 'assessment',
        sequence: 3,
        state: 3,
        estimated_cost: 6000,
        estimated_benefit_value: 18000,
    },
})

Record({
    $id: Now.ID['seed_idea_09_task_4'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_09'),
        task_type: 'build_ut',
        phase: 'delivery',
        sequence: 4,
        state: 3,
        build_notes: 'SLA percentage timer flow with escalation notification built.',
        unit_test_result: 'pass',
    },
})

Record({
    $id: Now.ID['seed_idea_09_task_5'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_09'),
        task_type: 'testing',
        phase: 'delivery',
        sequence: 5,
        state: 3,
        test_notes: 'Verified 50/75/100 percent SLA notifications on sample incidents.',
        test_result: 'pass',
        defect_count: 0,
    },
})

Record({
    $id: Now.ID['seed_idea_09_task_6'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_09'),
        task_type: 'deploy_marketplace',
        phase: 'delivery',
        sequence: 6,
        state: 3,
        marketplace_listing_url: 'https://store.servicenow.com/sn_appstore_store.do#!/store/application/example-sla-early-warning',
        certification_status: 'certified',
        deployment_notes: 'Certified and published to the ServiceNow Marketplace.',
    },
})

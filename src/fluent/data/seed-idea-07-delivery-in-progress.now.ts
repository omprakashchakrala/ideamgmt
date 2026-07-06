import { Record } from '@servicenow/sdk/core'
import { demoRequestor, demoApprover } from './seed-users.now'

export const seedIdea07 = Record({
    $id: Now.ID['seed_idea_07'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Bulk CMDB reconciliation accelerator',
        opened_by: demoRequestor,
        state: 6, // Delivery in Progress
        category: 'itom_observability',
        business_problem: 'CMDB reconciliation across discovery sources requires manual review of duplicates.',
        expected_benefit: 'Faster, more consistent CMDB data quality.',
        ootb_solution_exists: false,
        estimated_cost: 14000,
        estimated_timeline_weeks: 7,
        estimated_effort: 25,
        estimated_benefit_value: 50000,
        assessment_recommendation: 'recommend',
        assessment_completed_date: '2026-06-10',
        approved_by: demoApprover,
        approval_date: '2026-06-15',
        approval_decision: 'approved',
        implementation_status: 'in_progress',
        target_start_date: '2026-06-20',
        target_end_date: '2026-08-01',
        actual_start_date: '2026-06-22',
    },
})

Record({
    $id: Now.ID['seed_idea_07_task_4'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_07'),
        task_type: 'build_ut',
        phase: 'delivery',
        sequence: 4,
        state: 1, // Open
        build_notes: 'Duplicate-detection script include is in progress; UI action for manual merge pending.',
    },
})

Record({
    $id: Now.ID['seed_idea_07_task_5'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_07'),
        task_type: 'testing',
        phase: 'delivery',
        sequence: 5,
        state: -5, // Pending
    },
})

Record({
    $id: Now.ID['seed_idea_07_task_6'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_07'),
        task_type: 'deploy_marketplace',
        phase: 'delivery',
        sequence: 6,
        state: -5, // Pending
    },
})

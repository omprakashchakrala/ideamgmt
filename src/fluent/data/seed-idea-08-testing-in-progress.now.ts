import { Record } from '@servicenow/sdk/core'
import { demoRequestor, demoApprover } from './seed-users.now'

export const seedIdea08 = Record({
    $id: Now.ID['seed_idea_08'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Employee onboarding checklist automation',
        opened_by: demoRequestor,
        state: 7, // Testing in Progress
        category: 'portal_ux',
        business_problem: 'New hire onboarding tasks are tracked manually across several teams.',
        expected_benefit: 'Consistent onboarding experience and fewer missed steps.',
        ootb_solution_exists: false,
        estimated_cost: 8000,
        estimated_timeline_weeks: 4,
        estimated_effort: 14,
        estimated_benefit_value: 22000,
        assessment_recommendation: 'recommend',
        assessment_completed_date: '2026-05-20',
        approved_by: demoApprover,
        approval_date: '2026-05-25',
        approval_decision: 'approved',
        implementation_status: 'in_progress',
        target_start_date: '2026-05-28',
        target_end_date: '2026-07-01',
        actual_start_date: '2026-05-29',
    },
})

Record({
    $id: Now.ID['seed_idea_08_task_4'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_08'),
        task_type: 'build_ut',
        phase: 'delivery',
        sequence: 4,
        state: 3, // Closed Complete
        build_notes: 'Onboarding checklist flow and Employee Center widget built.',
        unit_test_result: 'pass',
    },
})

Record({
    $id: Now.ID['seed_idea_08_task_5'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_08'),
        task_type: 'testing',
        phase: 'delivery',
        sequence: 5,
        state: 3, // Closed Complete
        test_notes: 'Full onboarding flow tested end to end with three sample new-hire profiles.',
        test_result: 'pass',
        defect_count: 0,
    },
})

Record({
    $id: Now.ID['seed_idea_08_task_6'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_08'),
        task_type: 'deploy_marketplace',
        phase: 'delivery',
        sequence: 6,
        state: 1, // Open
    },
})

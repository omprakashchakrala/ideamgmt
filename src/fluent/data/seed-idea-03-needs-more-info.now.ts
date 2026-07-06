import { Record } from '@servicenow/sdk/core'
import { demoRequestor } from './seed-users.now'

export const seedIdea03 = Record({
    $id: Now.ID['seed_idea_03'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Unified observability dashboard for platform health',
        opened_by: demoRequestor,
        state: 2, // IA In Progress
        sub_state: 'needs_more_info',
        category: 'itom_observability',
        business_problem: 'Platform health signals are spread across several dashboards with no single view.',
        expected_benefit: 'Reduced mean time to detect platform-wide issues.',
    },
})

Record({
    $id: Now.ID['seed_idea_03_task_1'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_03'),
        task_type: 'ootb_app_check',
        phase: 'assessment',
        sequence: 1,
        state: 1, // Open — Solutions Team is waiting on more detail from the requestor
        ootb_notes: 'Need clarification on which specific data sources should be included before checking for an OOTB fit.',
    },
})

Record({
    $id: Now.ID['seed_idea_03_task_2'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_03'),
        task_type: 'solution_design_effort_estimation',
        phase: 'assessment',
        sequence: 2,
        state: -5, // Pending
    },
})

Record({
    $id: Now.ID['seed_idea_03_task_3'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_03'),
        task_type: 'cost_benefit_analysis',
        phase: 'assessment',
        sequence: 3,
        state: -5, // Pending
    },
})

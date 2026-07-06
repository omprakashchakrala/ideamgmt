import { Record } from '@servicenow/sdk/core'
import { demoRequestor } from './seed-users.now'

export const seedIdea05 = Record({
    $id: Now.ID['seed_idea_05'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Custom approval routing for change requests',
        opened_by: demoRequestor,
        state: 4, // Rejected
        category: 'itsm_accelerator',
        business_problem: 'Change approvals do not route based on CI risk tier.',
        expected_benefit: 'Faster approvals for low-risk changes.',
        ootb_solution_exists: true,
        rejection_reason: 'OOTB solution already exists — no further assessment required.',
    },
})

Record({
    $id: Now.ID['seed_idea_05_task_1'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_05'),
        task_type: 'ootb_app_check',
        phase: 'assessment',
        sequence: 1,
        state: 3, // Closed Complete
        ootb_exists: true,
        ootb_notes: 'OOTB Change Management already supports risk-based approval policies — use Change Risk Calculator.',
    },
})

Record({
    $id: Now.ID['seed_idea_05_task_2'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_05'),
        task_type: 'solution_design_effort_estimation',
        phase: 'assessment',
        sequence: 2,
        state: 7, // Closed Skipped
    },
})

Record({
    $id: Now.ID['seed_idea_05_task_3'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_05'),
        task_type: 'cost_benefit_analysis',
        phase: 'assessment',
        sequence: 3,
        state: 7, // Closed Skipped
    },
})

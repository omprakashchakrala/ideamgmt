import { Record } from '@servicenow/sdk/core'
import { demoRequestor } from './seed-users.now'

export const seedIdea02 = Record({
    $id: Now.ID['seed_idea_02'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Predictive CSA scoring for case escalation',
        opened_by: demoRequestor,
        state: 2, // IA In Progress
        category: 'csm_accelerator',
        business_problem: 'Cases likely to trigger a low CSAT score are not identified until after the customer responds.',
        expected_benefit: 'Proactive escalation of at-risk cases before customer satisfaction drops.',
    },
})

Record({
    $id: Now.ID['seed_idea_02_task_1'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_02'),
        task_type: 'ootb_app_check',
        phase: 'assessment',
        sequence: 1,
        state: 3, // Closed Complete
        ootb_exists: false,
        ootb_notes: 'No OOTB predictive scoring available for CSM cases.',
    },
})

Record({
    $id: Now.ID['seed_idea_02_task_2'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_02'),
        task_type: 'solution_design_effort_estimation',
        phase: 'assessment',
        sequence: 2,
        state: 3, // Closed Complete
        estimated_effort: 15,
        estimated_timeline_weeks: 4,
        solution_design_notes: 'Use a scripted REST call to an existing ML scoring endpoint plus a business rule to flag cases.',
    },
})

Record({
    $id: Now.ID['seed_idea_02_task_3'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_02'),
        task_type: 'cost_benefit_analysis',
        phase: 'assessment',
        sequence: 3,
        state: 1, // Open
    },
})

import { Record } from '@servicenow/sdk/core'
import { demoRequestor } from './seed-users.now'

export const seedIdea04 = Record({
    $id: Now.ID['seed_idea_04'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] AI-assisted knowledge article drafting from resolved cases',
        opened_by: demoRequestor,
        state: 3, // IA Completed
        sub_state: 'pending_approval',
        category: 'ai_agentic',
        business_problem: 'Knowledge articles lag behind newly resolved case patterns.',
        expected_benefit: 'Faster knowledge base growth and reduced repeat case volume.',
        ootb_solution_exists: false,
        estimated_cost: 12000,
        estimated_timeline_weeks: 6,
        estimated_effort: 20,
        estimated_benefit_value: 45000,
        assessment_recommendation: 'recommend',
        assessment_completed_date: '2026-06-20',
    },
})

Record({
    $id: Now.ID['seed_idea_04_task_1'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_04'),
        task_type: 'ootb_app_check',
        phase: 'assessment',
        sequence: 1,
        state: 3,
        ootb_exists: false,
        ootb_notes: 'No OOTB generative drafting flow for knowledge from case data.',
    },
})

Record({
    $id: Now.ID['seed_idea_04_task_2'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_04'),
        task_type: 'solution_design_effort_estimation',
        phase: 'assessment',
        sequence: 2,
        state: 3,
        estimated_effort: 20,
        estimated_timeline_weeks: 6,
        solution_design_notes: 'Use Now Assist skill to draft article content from closed case work notes for review.',
    },
})

Record({
    $id: Now.ID['seed_idea_04_task_3'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_task',
    data: {
        parent: Now.ref('task', 'seed_idea_04'),
        task_type: 'cost_benefit_analysis',
        phase: 'assessment',
        sequence: 3,
        state: 3,
        estimated_cost: 12000,
        estimated_benefit_value: 45000,
        cost_benefit_notes: 'Benefit estimated from reduced repeat case handling time.',
    },
})

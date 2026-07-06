import { Record } from '@servicenow/sdk/core'
import { demoRequestor, demoApprover } from './seed-users.now'

// Just approved — delivery tasks have not been generated yet, matching the real system's
// behavior in the instant after approval and before the Create Idea Delivery Tasks flow runs.
export const seedIdea06 = Record({
    $id: Now.ID['seed_idea_06'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Self-service integration health checker',
        opened_by: demoRequestor,
        state: 5, // Selected
        category: 'integration',
        business_problem: 'Integration failures are discovered by end users before the integration team notices.',
        expected_benefit: 'Faster detection and self-service diagnosis of integration issues.',
        ootb_solution_exists: false,
        estimated_cost: 9000,
        estimated_timeline_weeks: 5,
        estimated_effort: 18,
        estimated_benefit_value: 30000,
        assessment_recommendation: 'recommend',
        assessment_completed_date: '2026-06-25',
        approved_by: demoApprover,
        approval_date: '2026-06-30',
        approval_decision: 'approved',
    },
})

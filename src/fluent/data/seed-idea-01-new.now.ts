import { Record } from '@servicenow/sdk/core'
import { demoRequestor } from './seed-users.now'

export const seedIdea01 = Record({
    $id: Now.ID['seed_idea_01'],
    $meta: { installMethod: 'demo' },
    table: 'x_prna_idea_mgmt_idea',
    data: {
        short_description: '[DEMO] Auto-triage low-priority catalog requests',
        opened_by: demoRequestor,
        state: 1, // New
        category: 'itsm_accelerator',
        business_problem: 'Low-priority catalog requests sit in a shared queue for days before anyone triages them.',
        expected_benefit: 'Faster initial response time and less manual queue management.',
    },
})

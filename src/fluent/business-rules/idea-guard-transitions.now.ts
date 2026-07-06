import { BusinessRule } from '@servicenow/sdk/core'
import { guardIdeaStateTransition } from '../../server/business-rules/idea-guard-transitions'

BusinessRule({
    $id: Now.ID['br_idea_guard_transitions'],
    name: 'Guard Idea State Transitions',
    table: 'x_prna_idea_mgmt_idea',
    when: 'before',
    action: ['update'],
    order: 100,
    script: guardIdeaStateTransition,
})

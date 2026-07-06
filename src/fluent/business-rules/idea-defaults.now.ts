import { BusinessRule } from '@servicenow/sdk/core'
import { stampIdeaDefaults } from '../../server/business-rules/idea-defaults'

BusinessRule({
    $id: Now.ID['br_idea_defaults'],
    name: 'Stamp Idea Defaults',
    table: 'x_prna_idea_mgmt_idea',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: stampIdeaDefaults,
})

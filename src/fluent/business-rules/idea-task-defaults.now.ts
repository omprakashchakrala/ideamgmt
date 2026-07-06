import { BusinessRule } from '@servicenow/sdk/core'
import { setTaskDefaults } from '../../server/business-rules/idea-task-defaults'

BusinessRule({
    $id: Now.ID['br_idea_task_defaults'],
    name: 'Set Idea Delivery Task Defaults',
    table: 'x_prna_idea_mgmt_task',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: setTaskDefaults,
})

import { BusinessRule } from '@servicenow/sdk/core'
import { onTaskAfterUpdate } from '../../server/business-rules/idea-task-after-update'

BusinessRule({
    $id: Now.ID['br_idea_task_after_update'],
    name: 'Idea Delivery Task After Update',
    table: 'x_prna_idea_mgmt_task',
    when: 'after',
    action: ['update'],
    order: 100,
    script: onTaskAfterUpdate,
})

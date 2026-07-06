import { BusinessRule } from '@servicenow/sdk/core'
import { onTaskAfterInsert } from '../../server/business-rules/idea-task-after-insert'

BusinessRule({
    $id: Now.ID['br_idea_task_after_insert'],
    name: 'Idea Delivery Task After Insert',
    table: 'x_prna_idea_mgmt_task',
    when: 'after',
    action: ['insert'],
    order: 100,
    script: onTaskAfterInsert,
})

import { BusinessRule } from '@servicenow/sdk/core'
import { validateTaskClose } from '../../server/business-rules/idea-task-validate-close'

BusinessRule({
    $id: Now.ID['br_idea_task_validate_close'],
    name: 'Validate Idea Delivery Task Close',
    table: 'x_prna_idea_mgmt_task',
    when: 'before',
    action: ['update'],
    order: 100,
    script: validateTaskClose,
})

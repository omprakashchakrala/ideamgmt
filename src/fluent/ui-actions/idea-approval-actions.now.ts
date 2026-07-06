import { UiAction } from '@servicenow/sdk/core'
import { approverRole } from '../roles/roles.now'
import { approveIdea, rejectIdea } from '../../server/ui-actions/idea-approval-actions'

UiAction({
    $id: Now.ID['ui_action_approve_idea'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Approve Idea',
    actionName: 'approve_idea',
    condition: "current.state == '3'",
    showUpdate: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [approverRole],
    script: approveIdea,
    order: 100,
})

UiAction({
    $id: Now.ID['ui_action_reject_idea'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Reject Idea',
    actionName: 'reject_idea',
    condition: "current.state == '3'",
    showUpdate: true,
    form: {
        showButton: true,
        style: 'destructive',
    },
    roles: [approverRole],
    script: rejectIdea,
    order: 200,
})

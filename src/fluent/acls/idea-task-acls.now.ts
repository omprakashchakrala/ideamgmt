import { Acl } from '@servicenow/sdk/core'
import { requestorRole, approverRole, solutionDesignerRole, implementerRole, adminRole } from '../roles/roles.now'
import { isOwnIdeaTask, isAssessmentTaskEditable, isDeliveryTaskEditable } from '../../server/acls/idea-acl-scripts'

// --- Admin: unrestricted CRUD ---

Acl({
    $id: Now.ID['idea_task_acl_admin_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'read',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_task_acl_admin_write'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_task_acl_admin_create'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_task_acl_admin_delete'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'delete',
    roles: [adminRole],
})

// --- Requestor: read-only view of their own Idea's tasks. Task-type outcome field
// visibility for the requestor is additionally restricted via UI Policy. ---

Acl({
    $id: Now.ID['idea_task_acl_requestor_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'read',
    roles: [requestorRole],
    script: isOwnIdeaTask,
})

// --- Solutions Team: write while phase=assessment and state in (Open, Work in Progress) ---

Acl({
    $id: Now.ID['idea_task_acl_solution_designer_write'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'write',
    roles: [solutionDesignerRole],
    script: isAssessmentTaskEditable,
})

// --- Delivery Team: write while phase=delivery and state in (Open, Work in Progress) ---

Acl({
    $id: Now.ID['idea_task_acl_implementer_write'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'write',
    roles: [implementerRole],
    script: isDeliveryTaskEditable,
})

// --- General read for the working teams + approver (read-only oversight) + admin ---

Acl({
    $id: Now.ID['idea_task_acl_team_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_task',
    operation: 'read',
    roles: [solutionDesignerRole, implementerRole, approverRole, adminRole],
})

import { Acl } from '@servicenow/sdk/core'
import { requestorRole, approverRole, solutionDesignerRole, implementerRole, adminRole } from '../roles/roles.now'
import { isOwnIdea, isIntakeEditable, isApprovalEditable } from '../../server/acls/idea-acl-scripts'

// --- Admin: unrestricted CRUD ---

Acl({
    $id: Now.ID['idea_acl_admin_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'read',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_acl_admin_write'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_acl_admin_create'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['idea_acl_admin_delete'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'delete',
    roles: [adminRole],
})

// --- Requestor: own records only ---

Acl({
    $id: Now.ID['idea_acl_requestor_read_own'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'read',
    roles: [requestorRole],
    script: isOwnIdea,
})

Acl({
    $id: Now.ID['idea_acl_requestor_create'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'create',
    roles: [requestorRole],
})

// Intake fields — requestor-editable only while state=New(1) or sub_state=Needs More Info

Acl({
    $id: Now.ID['idea_acl_requestor_write_short_description'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'short_description',
    operation: 'write',
    roles: [requestorRole],
    script: isIntakeEditable,
})

Acl({
    $id: Now.ID['idea_acl_requestor_write_category'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'category',
    operation: 'write',
    roles: [requestorRole],
    script: isIntakeEditable,
})

Acl({
    $id: Now.ID['idea_acl_requestor_write_business_problem'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'business_problem',
    operation: 'write',
    roles: [requestorRole],
    script: isIntakeEditable,
})

Acl({
    $id: Now.ID['idea_acl_requestor_write_expected_benefit'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'expected_benefit',
    operation: 'write',
    roles: [requestorRole],
    script: isIntakeEditable,
})

Acl({
    $id: Now.ID['idea_acl_requestor_write_comments'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'comments',
    operation: 'write',
    roles: [requestorRole],
    script: isIntakeEditable,
})

// --- Approver: approval fields while state=IA Completed(3) ---

Acl({
    $id: Now.ID['idea_acl_approver_write_decision'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'approval_decision',
    operation: 'write',
    roles: [approverRole],
    script: isApprovalEditable,
})

Acl({
    $id: Now.ID['idea_acl_approver_write_comments'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'approval_comments',
    operation: 'write',
    roles: [approverRole],
    script: isApprovalEditable,
})

Acl({
    $id: Now.ID['idea_acl_approver_write_rejection_reason'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'rejection_reason',
    operation: 'write',
    roles: [approverRole],
    script: isApprovalEditable,
})

// --- Read access for the working teams (Solutions/Leadership/Delivery) and admin ---

Acl({
    $id: Now.ID['idea_acl_team_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    operation: 'read',
    roles: [solutionDesignerRole, approverRole, implementerRole, adminRole],
})

// --- work_notes: never visible to requestor (allow-list excludes requestorRole) ---

Acl({
    $id: Now.ID['idea_acl_work_notes_read'],
    type: 'record',
    table: 'x_prna_idea_mgmt_idea',
    field: 'work_notes',
    operation: 'read',
    roles: [solutionDesignerRole, approverRole, implementerRole, adminRole],
})

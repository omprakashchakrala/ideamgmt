import { Role } from '@servicenow/sdk/core'

export const requestorRole = Role({
    name: 'x_prna_idea_mgmt.requestor',
    description: 'Every employee — can submit and track their own Ideas via Employee Center',
})

export const solutionDesignerRole = Role({
    name: 'x_prna_idea_mgmt.solution_designer',
    description: 'Solutions Team — owns Impact Assessment tasks (OOTB App Check, Solution Design & Effort Estimation, Cost Benefit Analysis)',
})

export const approverRole = Role({
    name: 'x_prna_idea_mgmt.approver',
    description: 'Leadership Group — reviews assessment package and approves/rejects Ideas',
})

export const implementerRole = Role({
    name: 'x_prna_idea_mgmt.implementer',
    description: 'Delivery Team — owns Build & UT, Testing, and Marketplace deployment liaison tasks',
})

export const adminRole = Role({
    name: 'x_prna_idea_mgmt.admin',
    description: 'Idea Management application administrator — unrestricted access',
    containsRoles: [requestorRole, solutionDesignerRole, approverRole, implementerRole],
})

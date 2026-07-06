import { Record } from '@servicenow/sdk/core'
import { requestorRole, solutionDesignerRole, approverRole, implementerRole } from '../roles/roles.now'
import { solutionsTeamGroup, leadershipGroupGroup, deliveryTeamGroup } from '../roles/groups.now'

// Demo users for exercising each persona's ACLs and dashboards. Clearly named/prefixed so
// they're easy to identify and purge before a production deployment.

export const demoRequestor = Record({
    $id: Now.ID['demo_user_requestor'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user',
    data: {
        user_name: 'idea.demo.requestor',
        first_name: 'Demo',
        last_name: 'Requestor',
        email: 'idea.demo.requestor@example.com',
        active: true,
    },
})

export const demoSolutionDesigner = Record({
    $id: Now.ID['demo_user_solution_designer'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user',
    data: {
        user_name: 'idea.demo.solutiondesigner',
        first_name: 'Demo',
        last_name: 'SolutionDesigner',
        email: 'idea.demo.solutiondesigner@example.com',
        active: true,
    },
})

export const demoApprover = Record({
    $id: Now.ID['demo_user_approver'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user',
    data: {
        user_name: 'idea.demo.approver',
        first_name: 'Demo',
        last_name: 'Approver',
        email: 'idea.demo.approver@example.com',
        active: true,
    },
})

export const demoImplementer = Record({
    $id: Now.ID['demo_user_implementer'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user',
    data: {
        user_name: 'idea.demo.implementer',
        first_name: 'Demo',
        last_name: 'Implementer',
        email: 'idea.demo.implementer@example.com',
        active: true,
    },
})

// --- Role grants ---

Record({
    $id: Now.ID['demo_user_requestor_role'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_has_role',
    data: { user: demoRequestor, role: requestorRole },
})

Record({
    $id: Now.ID['demo_user_solution_designer_role'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_has_role',
    data: { user: demoSolutionDesigner, role: solutionDesignerRole },
})

Record({
    $id: Now.ID['demo_user_approver_role'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_has_role',
    data: { user: demoApprover, role: approverRole },
})

Record({
    $id: Now.ID['demo_user_implementer_role'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_has_role',
    data: { user: demoImplementer, role: implementerRole },
})

// --- Group memberships ---

Record({
    $id: Now.ID['demo_user_solution_designer_group'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_grmember',
    data: { user: demoSolutionDesigner, group: solutionsTeamGroup },
})

Record({
    $id: Now.ID['demo_user_approver_group'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_grmember',
    data: { user: demoApprover, group: leadershipGroupGroup },
})

Record({
    $id: Now.ID['demo_user_implementer_group'],
    $meta: { installMethod: 'demo' },
    table: 'sys_user_grmember',
    data: { user: demoImplementer, group: deliveryTeamGroup },
})

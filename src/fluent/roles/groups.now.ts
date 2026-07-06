import { Record } from '@servicenow/sdk/core'
import { solutionDesignerRole, approverRole, implementerRole } from './roles.now'

// Groups confirmed not to already exist on the instance — created net-new.
// sys_user_group / sys_group_has_role have no dedicated Fluent API, so the generic
// Record API is used (per record-api guidance: use as fallback with no specific API).

export const solutionsTeamGroup = Record({
    $id: Now.ID['solutions_team_group'],
    table: 'sys_user_group',
    data: {
        name: 'Solutions Team',
        description: 'Owns Idea Impact Assessment: OOTB App Check, Solution Design & Effort Estimation, Cost Benefit Analysis',
        active: true,
    },
})

export const leadershipGroupGroup = Record({
    $id: Now.ID['leadership_group_group'],
    table: 'sys_user_group',
    data: {
        name: 'Leadership Group',
        description: 'Reviews Idea assessment packages and approves/rejects Ideas',
        active: true,
    },
})

export const deliveryTeamGroup = Record({
    $id: Now.ID['delivery_team_group'],
    table: 'sys_user_group',
    data: {
        name: 'Delivery Team',
        description: 'Owns Idea Build & UT, Testing, and ServiceNow Marketplace deployment liaison',
        active: true,
    },
})

Record({
    $id: Now.ID['solutions_team_role_grant'],
    table: 'sys_group_has_role',
    data: {
        group: solutionsTeamGroup,
        role: solutionDesignerRole,
    },
})

Record({
    $id: Now.ID['leadership_group_role_grant'],
    table: 'sys_group_has_role',
    data: {
        group: leadershipGroupGroup,
        role: approverRole,
    },
})

Record({
    $id: Now.ID['delivery_team_role_grant'],
    table: 'sys_group_has_role',
    data: {
        group: deliveryTeamGroup,
        role: implementerRole,
    },
})

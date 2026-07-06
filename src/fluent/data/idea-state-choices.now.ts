import { Record } from '@servicenow/sdk/core'

// Table-scoped sys_choice values for x_prna_idea_mgmt_idea.state — replaces task's
// default state choices for this extended table only (per-table choice scoping).
// OverrideColumn does not support `choices`, so these are declared directly against sys_choice.

Record({
    $id: Now.ID['idea_state_choice_1'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '1', label: 'New', sequence: 100, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_2'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '2', label: 'IA In Progress', sequence: 200, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_3'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '3', label: 'IA Completed', sequence: 300, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_4'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '4', label: 'Rejected', sequence: 400, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_5'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '5', label: 'Selected', sequence: 500, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_6'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '6', label: 'Delivery in Progress', sequence: 600, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_7'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '7', label: 'Testing in Progress', sequence: 700, inactive: false },
})

Record({
    $id: Now.ID['idea_state_choice_8'],
    table: 'sys_choice',
    data: { name: 'x_prna_idea_mgmt_idea', element: 'state', value: '8', label: 'Deployed', sequence: 800, inactive: false },
})

// Note: sub_state is a net-new field (not inherited), so its choices are declared inline
// on the StringColumn in idea.now.ts and do not need a manual sys_choice record here.

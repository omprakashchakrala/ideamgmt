import { gs, GlideRecord } from '@servicenow/glide'

// Idea state model — see design: New(1) -> IA In Progress(2) -> IA Completed(3) -> Selected(5)
// -> Delivery in Progress(6) -> Testing in Progress(7) -> Deployed(8), with Rejected(4) reachable
// from IA In Progress or IA Completed. Rejected and Deployed are terminal.
const ALLOWED_TRANSITIONS: { [state: string]: string[] } = {
    '1': ['1', '2'],
    '2': ['2', '3', '4'],
    '3': ['3', '4', '5'],
    '4': ['4'],
    '5': ['5', '6'],
    '6': ['6', '7'],
    '7': ['7', '8'],
    '8': ['8'],
}

export function guardIdeaStateTransition(
    current: GlideRecord<'x_prna_idea_mgmt_idea'>,
    previous: GlideRecord<'x_prna_idea_mgmt_idea'>
) {
    if (gs.hasRole('x_prna_idea_mgmt.admin')) {
        return
    }

    const previousState = previous.getValue('state')
    const newState = current.getValue('state')
    if (previousState === newState) {
        return
    }

    const allowed = ALLOWED_TRANSITIONS[previousState] || []
    if (allowed.indexOf(newState) === -1) {
        current.setAbortAction(true)
        gs.addErrorMessage('Invalid Idea state transition from ' + previousState + ' to ' + newState + '.')
    }
}

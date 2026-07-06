import { gs } from '@servicenow/glide'

function isAdmin(): boolean {
    return gs.hasRole('x_prna_idea_mgmt.admin')
}

export function isOwnIdea(current: any): boolean {
    if (isAdmin()) return true
    return current.getValue('opened_by') === gs.getUserID()
}

export function isIntakeEditable(current: any): boolean {
    if (isAdmin()) return true
    return current.getValue('state') === '1' || current.getValue('sub_state') === 'needs_more_info'
}

export function isApprovalEditable(current: any): boolean {
    if (isAdmin()) return true
    return current.getValue('state') === '3'
}

export function isOwnIdeaTask(current: any): boolean {
    if (isAdmin()) return true
    const idea = current.parent.getRefRecord()
    return idea.getValue('opened_by') === gs.getUserID()
}

export function isAssessmentTaskEditable(current: any): boolean {
    if (isAdmin()) return true
    const state = current.getValue('state')
    return current.getValue('phase') === 'assessment' && (state === '1' || state === '2')
}

export function isDeliveryTaskEditable(current: any): boolean {
    if (isAdmin()) return true
    const state = current.getValue('state')
    return current.getValue('phase') === 'delivery' && (state === '1' || state === '2')
}

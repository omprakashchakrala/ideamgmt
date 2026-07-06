import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

export function approveIdea(current: GlideRecord<'x_prna_idea_mgmt_idea'>) {
    current.setValue('approval_decision', 'approved')
    current.setValue('approved_by', gs.getUserID())
    current.setValue('approval_date', new GlideDateTime().getDisplayValue())
    current.setValue('state', '5') // Selected
    current.update()
}

export function rejectIdea(current: GlideRecord<'x_prna_idea_mgmt_idea'>) {
    if (current.rejection_reason.nil()) {
        gs.addErrorMessage('Rejection Reason is required before rejecting this Idea.')
        return
    }

    current.setValue('approval_decision', 'rejected')
    current.setValue('approved_by', gs.getUserID())
    current.setValue('approval_date', new GlideDateTime().getDisplayValue())
    current.setValue('state', '4') // Rejected
    current.update()
}

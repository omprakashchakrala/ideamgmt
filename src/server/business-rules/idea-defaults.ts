import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

export function stampIdeaDefaults(current: GlideRecord<'x_prna_idea_mgmt_idea'>) {
    if (current.opened_by.nil()) {
        current.setValue('opened_by', gs.getUserID())
    }
    if (current.opened_at.nil()) {
        current.setValue('opened_at', new GlideDateTime().getDisplayValue())
    }

    const requestor = new GlideRecord('sys_user')
    if (requestor.get('sys_id', current.getValue('opened_by'))) {
        current.setValue('requestor_department', requestor.getValue('department'))
    }
}

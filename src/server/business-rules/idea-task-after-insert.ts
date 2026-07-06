import { GlideRecord } from '@servicenow/glide'

// After Insert — Task 4 (Build & UT) is created already Open by the "Create Idea Delivery
// Tasks" flow; that is the signal that delivery work has begun on the parent Idea.
export function onTaskAfterInsert(current: GlideRecord<'x_prna_idea_mgmt_task'>) {
    if (current.getValue('task_type') !== 'build_ut' || current.getValue('state') !== '1') {
        return
    }

    const idea = new GlideRecord('x_prna_idea_mgmt_idea')
    if (idea.get('sys_id', current.getValue('parent'))) {
        idea.setValue('state', '6') // Delivery in Progress
        idea.update()
    }
}

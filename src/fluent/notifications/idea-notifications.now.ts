import { EmailNotification } from '@servicenow/sdk/core'
import { leadershipGroupGroup, deliveryTeamGroup } from '../roles/groups.now'

EmailNotification({
    $id: Now.ID['notification_idea_submitted'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Submitted',
    description: 'Confirms to the requestor that their Idea was submitted',
    active: true,
    triggerConditions: {
        onRecordInsert: true,
    },
    recipientDetails: {
        recipientFields: ['opened_by'],
    },
    emailContent: {
        subject: 'Idea ${number} submitted: ${short_description}',
        messageHtml: '<p>Your Idea <b>${number}</b> has been submitted and is awaiting Impact Assessment.</p>',
    },
})

EmailNotification({
    $id: Now.ID['notification_idea_routed_for_approval'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Routed for Approval',
    description: 'Notifies the Leadership Group that an Idea is ready for their decision',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'state=3^sub_state=pending_approval',
    },
    recipientDetails: {
        recipientGroups: [leadershipGroupGroup],
        sendToCreator: false,
    },
    emailContent: {
        subject: 'Idea ${number} ready for approval: ${short_description}',
        messageHtml: '<p>Idea <b>${number}</b> has completed Impact Assessment and is awaiting your decision.</p>',
        importance: 'high',
    },
})

EmailNotification({
    $id: Now.ID['notification_idea_needs_more_info'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Needs More Info',
    description: 'Notifies the requestor that the Solutions Team needs more detail',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'sub_state=needs_more_info',
    },
    recipientDetails: {
        recipientFields: ['opened_by'],
    },
    emailContent: {
        subject: 'More information needed on Idea ${number}',
        messageHtml: '<p>The Solutions Team needs more information on your Idea <b>${number}</b>. Please add details via comments.</p>',
    },
})

EmailNotification({
    $id: Now.ID['notification_idea_approved'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Approved',
    description: 'Notifies the requestor that their Idea was approved and selected for delivery',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'state=5',
    },
    recipientDetails: {
        recipientFields: ['opened_by'],
    },
    emailContent: {
        subject: 'Idea ${number} approved',
        messageHtml: '<p>Good news — your Idea <b>${number}</b> has been approved and selected for delivery.</p>',
    },
})

EmailNotification({
    $id: Now.ID['notification_idea_rejected'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Rejected',
    description: 'Notifies the requestor that their Idea was rejected',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'state=4',
    },
    recipientDetails: {
        recipientFields: ['opened_by'],
    },
    emailContent: {
        subject: 'Idea ${number} was not selected',
        messageHtml: '<p>Your Idea <b>${number}</b> was not selected to move forward. Reason: ${rejection_reason}</p>',
    },
})

EmailNotification({
    $id: Now.ID['notification_idea_deployed'],
    table: 'x_prna_idea_mgmt_idea',
    name: 'Idea Deployed',
    description: 'Notifies the requestor and Delivery Team that the Idea shipped to the ServiceNow Marketplace',
    active: true,
    triggerConditions: {
        onRecordUpdate: true,
        condition: 'state=8',
    },
    recipientDetails: {
        recipientFields: ['opened_by'],
        recipientGroups: [deliveryTeamGroup],
    },
    emailContent: {
        subject: 'Idea ${number} deployed to the ServiceNow Marketplace',
        messageHtml: '<p>Idea <b>${number}</b> has been deployed. Marketplace listing: ${marketplace_listing_url}</p>',
    },
})

import {
    Table,
    OverrideColumn,
    StringColumn,
    ReferenceColumn,
    HtmlColumn,
    BooleanColumn,
    DecimalColumn,
    IntegerColumn,
    DateColumn,
    MultiLineTextColumn,
    UrlColumn,
} from '@servicenow/sdk/core'

export const x_prna_idea_mgmt_idea = Table({
    name: 'x_prna_idea_mgmt_idea',
    label: 'Idea',
    extends: 'task',
    schema: {
        // Custom lifecycle values are added as table-scoped sys_choice records
        // (see src/fluent/data/idea-state-choices.now.ts) — OverrideColumn does not support `choices`.
        state: OverrideColumn({
            baseTable: 'task',
            mandatory: true,
            default: '1',
        }),

        category: StringColumn({
            label: 'Category',
            mandatory: true,
            choices: {
                itsm_accelerator: 'ITSM Accelerator',
                csm_accelerator: 'CSM Accelerator',
                itom_observability: 'ITOM/Observability',
                ai_agentic: 'AI & Agentic',
                portal_ux: 'Portal/UX',
                integration: 'Integration',
            },
        }),

        requestor_department: ReferenceColumn({
            label: 'Requestor Department',
            referenceTable: 'cmn_department',
        }),

        business_problem: HtmlColumn({
            label: 'Business Problem',
            mandatory: true,
        }),

        expected_benefit: HtmlColumn({
            label: 'Expected Benefit',
        }),

        sub_state: StringColumn({
            label: 'Sub-state',
            choices: {
                needs_more_info: 'Needs More Info',
                pending_approval: 'Pending Approval',
            },
        }),

        // Assessment rollup — populated by business rule from Idea Delivery Task records
        ootb_solution_exists: BooleanColumn({
            label: 'OOTB Solution Exists',
            readOnly: true,
        }),
        estimated_cost: DecimalColumn({
            label: 'Estimated Cost',
            readOnly: true,
        }),
        estimated_timeline_weeks: IntegerColumn({
            label: 'Estimated Timeline (Weeks)',
            readOnly: true,
        }),
        estimated_effort: IntegerColumn({
            label: 'Estimated Effort (Person-Days)',
            readOnly: true,
        }),
        estimated_benefit_value: DecimalColumn({
            label: 'Estimated Benefit Value',
            readOnly: true,
        }),
        assessment_recommendation: StringColumn({
            label: 'Assessment Recommendation',
            readOnly: true,
            choices: {
                recommend: 'Recommend',
                not_recommended: 'Not Recommended',
            },
        }),
        assessment_completed_date: DateColumn({
            label: 'Assessment Completed Date',
            readOnly: true,
        }),

        // Approval — set by Leadership Group
        approved_by: ReferenceColumn({
            label: 'Approved By',
            referenceTable: 'sys_user',
        }),
        approval_date: DateColumn({
            label: 'Approval Date',
        }),
        approval_decision: StringColumn({
            label: 'Approval Decision',
            choices: {
                approved: 'Approved',
                rejected: 'Rejected',
            },
        }),
        approval_comments: MultiLineTextColumn({
            label: 'Approval Comments',
        }),
        rejection_reason: MultiLineTextColumn({
            label: 'Rejection Reason',
        }),

        // Delivery rollup — populated by business rule from Idea Delivery Task records
        implementation_status: StringColumn({
            label: 'Implementation Status',
            readOnly: true,
            choices: {
                not_started: 'Not Started',
                in_progress: 'In Progress',
                blocked: 'Blocked',
                complete: 'Complete',
            },
        }),
        percent_complete: IntegerColumn({
            label: 'Percent Complete',
            readOnly: true,
        }),
        target_start_date: DateColumn({ label: 'Target Start Date' }),
        target_end_date: DateColumn({ label: 'Target End Date' }),
        actual_start_date: DateColumn({ label: 'Actual Start Date' }),
        actual_end_date: DateColumn({ label: 'Actual End Date' }),
        marketplace_listing_url: UrlColumn({ label: 'Marketplace Listing URL' }),
        certification_status: StringColumn({
            label: 'Certification Status',
            choices: {
                not_submitted: 'Not Submitted',
                submitted: 'Submitted',
                certified: 'Certified',
                rejected: 'Rejected',
            },
        }),
    },

    autoNumber: {
        prefix: 'IDEA',
        number: 1,
        numberOfDigits: 7,
    },
})

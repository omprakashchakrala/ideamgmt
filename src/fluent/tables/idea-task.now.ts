import {
    Table,
    StringColumn,
    IntegerColumn,
    BooleanColumn,
    MultiLineTextColumn,
    DecimalColumn,
    ReferenceColumn,
    UrlColumn,
} from '@servicenow/sdk/core'

export const x_prna_idea_mgmt_task = Table({
    name: 'x_prna_idea_mgmt_task',
    label: 'Idea Delivery Task',
    extends: 'task',
    schema: {
        task_type: StringColumn({
            label: 'Task Type',
            mandatory: true,
            choices: {
                ootb_app_check: 'OOTB App Check',
                solution_design_effort_estimation: 'Solution Design & Effort Estimation',
                cost_benefit_analysis: 'Cost Benefit Analysis',
                build_ut: 'Build & UT',
                testing: 'Testing',
                deploy_marketplace: 'Deploy to ServiceNow Marketplace',
            },
        }),
        sequence: IntegerColumn({
            label: 'Sequence',
        }),
        phase: StringColumn({
            label: 'Phase',
            choices: {
                assessment: 'Assessment',
                delivery: 'Delivery',
            },
        }),

        // OOTB App Check
        ootb_exists: BooleanColumn({ label: 'OOTB Solution Exists' }),
        ootb_notes: MultiLineTextColumn({ label: 'OOTB Notes' }),

        // Solution Design & Effort Estimation
        estimated_effort: IntegerColumn({ label: 'Estimated Effort (Person-Days)' }),
        estimated_timeline_weeks: IntegerColumn({ label: 'Estimated Timeline (Weeks)' }),
        solution_design_notes: MultiLineTextColumn({ label: 'Solution Design Notes' }),

        // Cost Benefit Analysis
        estimated_cost: DecimalColumn({ label: 'Estimated Cost' }),
        estimated_benefit_value: DecimalColumn({ label: 'Estimated Benefit Value' }),
        cost_benefit_notes: MultiLineTextColumn({ label: 'Cost Benefit Notes' }),

        // Build & UT
        build_notes: MultiLineTextColumn({ label: 'Build Notes' }),
        unit_test_result: StringColumn({
            label: 'Unit Test Result',
            choices: {
                pass: 'Pass',
                fail: 'Fail',
                not_run: 'Not Run',
            },
        }),

        // Testing
        test_notes: MultiLineTextColumn({ label: 'Test Notes' }),
        test_result: StringColumn({
            label: 'Test Result',
            choices: {
                pass: 'Pass',
                fail: 'Fail',
                blocked: 'Blocked',
            },
        }),
        defect_count: IntegerColumn({ label: 'Defect Count' }),

        // Deploy to ServiceNow Marketplace
        servicenow_liaison_contact: ReferenceColumn({
            label: 'ServiceNow Liaison Contact',
            referenceTable: 'sys_user',
        }),
        marketplace_listing_url: UrlColumn({ label: 'Marketplace Listing URL' }),
        deployment_notes: MultiLineTextColumn({ label: 'Deployment Notes' }),
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
        prefix: 'IDTASK',
        number: 1,
        numberOfDigits: 7,
    },
})

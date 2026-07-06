import { Test } from '@servicenow/sdk/core'
import { demoRequestor, demoApprover } from '../data/seed-users.now'

export const tc07LeadershipApproval = Test(
    {
        $id: Now.ID['tc07_leadership_approval'],
        name: 'TC07 - Leadership approval',
        description: 'Approver sets approval_decision=Approved on an Idea in IA Completed; assert state becomes Selected',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc07_impersonate_requestor'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc07_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC07 approval test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 3,
                sub_state: 'pending_approval',
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.impersonate({ $id: Now.ID['tc07_impersonate_approver'], user: demoApprover })

        atf.server.recordUpdate({
            $id: Now.ID['tc07_approve'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { approval_decision: 'approved', state: 5 },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc07_validate_selected'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=5',
            assert: 'record_validated',
        })
    }
)

export const tc08LeadershipRejection = Test(
    {
        $id: Now.ID['tc08_leadership_rejection'],
        name: 'TC08 - Leadership rejection',
        description: 'Approver sets approval_decision=Rejected with a rejection_reason; assert state becomes Rejected',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc08_impersonate_requestor'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc08_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC08 rejection test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 3,
                sub_state: 'pending_approval',
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.impersonate({ $id: Now.ID['tc08_impersonate_approver'], user: demoApprover })

        atf.server.recordUpdate({
            $id: Now.ID['tc08_reject'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: {
                approval_decision: 'rejected',
                rejection_reason: 'Overlaps with an existing roadmap item.',
                state: 4,
            },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc08_validate_rejected'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=4',
            assert: 'record_validated',
        })
    }
)

export const tc09DeliveryTasksAutoCreate = Test(
    {
        $id: Now.ID['tc09_delivery_tasks_auto_create'],
        name: 'TC09 - Delivery tasks auto-create',
        description: 'Advancing an Idea to Selected creates the 3 delivery tasks and auto-transitions the Idea to Delivery in Progress',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc09_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc09_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC09 delivery auto-create test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 3,
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc09_advance_to_selected'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { state: 5 },
            assert: 'record_successfully_updated',
        })

        const task4 = atf.server.recordQuery({
            $id: Now.ID['tc09_query_task4'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=build_ut`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc09_validate_task4_open'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task4.first_record,
            fieldValues: 'state=1^phase=delivery',
            assert: 'record_validated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc09_validate_idea_delivery_in_progress'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=6',
            assert: 'record_validated',
        })
    }
)

export const tc10DeliveryToTestingTransition = Test(
    {
        $id: Now.ID['tc10_delivery_to_testing_transition'],
        name: 'TC10 - Delivery to Testing transition',
        description: 'Closing the Build & UT task activates Testing and moves the Idea to Testing in Progress',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc10_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc10_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC10 delivery-to-testing test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 6,
            },
            assert: 'record_successfully_inserted',
        })

        const task4 = atf.server.recordInsert({
            $id: Now.ID['tc10_create_task4'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'build_ut', phase: 'delivery', sequence: 4, state: 1 },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordInsert({
            $id: Now.ID['tc10_create_task5'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'testing', phase: 'delivery', sequence: 5, state: -5 },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc10_close_task4'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task4.record_id,
            fieldValues: { state: 3, unit_test_result: 'pass' },
            assert: 'record_successfully_updated',
        })

        const task5 = atf.server.recordQuery({
            $id: Now.ID['tc10_query_task5'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=testing`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc10_validate_task5_open'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task5.first_record,
            fieldValues: 'state=1',
            assert: 'record_validated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc10_validate_idea_testing'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=7',
            assert: 'record_validated',
        })
    }
)

export const tc11MarketplaceDeploymentCompletion = Test(
    {
        $id: Now.ID['tc11_marketplace_deployment_completion'],
        name: 'TC11 - Marketplace deployment completion',
        description: 'Closing the Deploy to Marketplace task with Certified status moves the Idea to Deployed',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc11_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc11_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC11 deployment completion test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 7,
            },
            assert: 'record_successfully_inserted',
        })

        const task6 = atf.server.recordInsert({
            $id: Now.ID['tc11_create_task6'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'deploy_marketplace', phase: 'delivery', sequence: 6, state: 1 },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc11_close_task6'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task6.record_id,
            fieldValues: {
                state: 3,
                certification_status: 'certified',
                marketplace_listing_url: 'https://store.servicenow.com/sn_appstore_store.do#!/store/application/atf-test-listing',
            },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc11_validate_deployed'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=8',
            assert: 'record_validated',
        })
    }
)

export const tc12AclEnforcement = Test(
    {
        $id: Now.ID['tc12_acl_enforcement'],
        name: 'TC12 - ACL enforcement (negative test)',
        description: 'Requestor cannot write assessment fields or read work_notes on their own Idea',
        active: true,
        failOnServerError: false,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc12_impersonate_requestor'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc12_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC12 ACL enforcement test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc12_attempt_write_estimated_cost'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { estimated_cost: 99999 },
            assert: 'record_not_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc12_validate_work_notes_hidden'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'work_notesISEMPTY',
            assert: 'record_validated',
        })
    }
)

export const tc13PercentCompleteRollup = Test(
    {
        $id: Now.ID['tc13_percent_complete_rollup'],
        name: 'TC13 - percent_complete rollup',
        description: 'percent_complete on the Idea recalculates correctly as each delivery task closes',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc13_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc13_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC13 percent complete test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 6,
            },
            assert: 'record_successfully_inserted',
        })

        const task4 = atf.server.recordInsert({
            $id: Now.ID['tc13_create_task4'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'build_ut', phase: 'delivery', sequence: 4, state: 1 },
            assert: 'record_successfully_inserted',
        })
        atf.server.recordInsert({
            $id: Now.ID['tc13_create_task5'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'testing', phase: 'delivery', sequence: 5, state: -5 },
            assert: 'record_successfully_inserted',
        })
        atf.server.recordInsert({
            $id: Now.ID['tc13_create_task6'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: { parent: idea.record_id as any, task_type: 'deploy_marketplace', phase: 'delivery', sequence: 6, state: -5 },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc13_close_task4'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task4.record_id,
            fieldValues: { state: 3, unit_test_result: 'pass' },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc13_validate_one_third'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'percent_complete=33',
            assert: 'record_validated',
        })
    }
)

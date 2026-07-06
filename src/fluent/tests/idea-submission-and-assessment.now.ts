import { Test } from '@servicenow/sdk/core'
import { demoRequestor } from '../data/seed-users.now'

// NOTE ON SCOPE: Fluent has no `TestSuite` API (confirmed via `sdk explain` — only `Test`
// exists), so these 13 test cases are authored as standalone, self-contained sys_atf_test
// records rather than steps of one grouped suite. Grouping them into a named
// "Idea Management – End to End" ATF Test Suite is a manual post-deploy step — do this in
// the ATF UI after install (Automated Test Framework -> Test Suites -> New).
//
// Cross-record child-task lookups (TC02-04, 09-10) reference a prior step's record_id
// inside a template-literal encoded query (`parent=${result.record_id}`), mirroring the
// confirmed Flow Designer pattern for embedding dynamic references in string parameters.
// This is not a Test-API example verified against a live instance — spot check these
// specific steps in the ATF UI after first install.

export const tc01IdeaSubmission = Test(
    {
        $id: Now.ID['tc01_idea_submission'],
        name: 'TC01 - Idea submission',
        description: 'Requestor submits an Idea; assert it is created in New state with no child tasks yet',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc01_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc01_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC01 submission test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc01_validate_idea'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=1',
            assert: 'record_validated',
        })

        atf.server.recordQuery({
            $id: Now.ID['tc01_query_no_tasks'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}`,
        })
    }
)

export const tc02AssessmentTasksAutoCreate = Test(
    {
        $id: Now.ID['tc02_assessment_tasks_auto_create'],
        name: 'TC02 - Assessment tasks auto-create',
        description: 'Advancing an Idea to IA In Progress creates the 3 assessment tasks via the Create Idea Assessment Tasks flow',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc02_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc02_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC02 assessment auto-create test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc02_advance_state'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { state: 2 },
            assert: 'record_successfully_updated',
        })

        const task1 = atf.server.recordQuery({
            $id: Now.ID['tc02_query_task1'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=ootb_app_check`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc02_validate_task1'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task1.first_record,
            fieldValues: 'state=1^sequence=1^phase=assessment',
            assert: 'record_validated',
        })

        const task2 = atf.server.recordQuery({
            $id: Now.ID['tc02_query_task2'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=solution_design_effort_estimation`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc02_validate_task2'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task2.first_record,
            fieldValues: 'state=-5^sequence=2',
            assert: 'record_validated',
        })
    }
)

export const tc03OotbGateRejection = Test(
    {
        $id: Now.ID['tc03_ootb_gate_rejection'],
        name: 'TC03 - OOTB gate rejection',
        description: 'Closing the OOTB App Check task with ootb_exists=true skips remaining assessment tasks and rejects the Idea',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc03_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc03_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC03 OOTB gate test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 2,
            },
            assert: 'record_successfully_inserted',
        })

        const task1 = atf.server.recordQuery({
            $id: Now.ID['tc03_query_task1'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=ootb_app_check`,
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc03_close_task1'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task1.first_record,
            fieldValues: { state: 3, ootb_exists: true },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc03_validate_idea_rejected'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=4',
            assert: 'record_validated',
        })

        const task2 = atf.server.recordQuery({
            $id: Now.ID['tc03_query_task2'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=solution_design_effort_estimation`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc03_validate_task2_skipped'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task2.first_record,
            fieldValues: 'state=7',
            assert: 'record_validated',
        })
    }
)

export const tc04SequentialTaskActivation = Test(
    {
        $id: Now.ID['tc04_sequential_task_activation'],
        name: 'TC04 - Sequential task activation',
        description: 'Closing the OOTB App Check task with ootb_exists=false auto-activates the next assessment task',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc04_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc04_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC04 sequential activation test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 2,
            },
            assert: 'record_successfully_inserted',
        })

        const task1 = atf.server.recordQuery({
            $id: Now.ID['tc04_query_task1'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=ootb_app_check`,
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc04_close_task1'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task1.first_record,
            fieldValues: { state: 3, ootb_exists: false },
            assert: 'record_successfully_updated',
        })

        const task2 = atf.server.recordQuery({
            $id: Now.ID['tc04_query_task2'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=solution_design_effort_estimation`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc04_validate_task2_open'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task2.first_record,
            fieldValues: 'state=1',
            assert: 'record_validated',
        })

        const task3 = atf.server.recordQuery({
            $id: Now.ID['tc04_query_task3'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=cost_benefit_analysis`,
        })

        atf.server.recordValidation({
            $id: Now.ID['tc04_validate_task3_pending'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task3.first_record,
            fieldValues: 'state=-5',
            assert: 'record_validated',
        })
    }
)

export const tc05AssessmentCompletion = Test(
    {
        $id: Now.ID['tc05_assessment_completion'],
        name: 'TC05 - Assessment completion to Pending Approval',
        description: 'Closing all 3 assessment tasks with a Recommend outcome moves the Idea to IA Completed / Pending Approval',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc05_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc05_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC05 assessment completion test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 2,
            },
            assert: 'record_successfully_inserted',
        })

        const task1 = atf.server.recordQuery({
            $id: Now.ID['tc05_query_task1'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=ootb_app_check`,
        })
        atf.server.recordUpdate({
            $id: Now.ID['tc05_close_task1'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task1.first_record,
            fieldValues: { state: 3, ootb_exists: false },
            assert: 'record_successfully_updated',
        })

        const task2 = atf.server.recordQuery({
            $id: Now.ID['tc05_query_task2'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=solution_design_effort_estimation`,
        })
        atf.server.recordUpdate({
            $id: Now.ID['tc05_close_task2'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task2.first_record,
            fieldValues: { state: 3, estimated_effort: 10, estimated_timeline_weeks: 3 },
            assert: 'record_successfully_updated',
        })

        const task3 = atf.server.recordQuery({
            $id: Now.ID['tc05_query_task3'],
            table: 'x_prna_idea_mgmt_task',
            fieldValues: `parent=${idea.record_id}^task_type=cost_benefit_analysis`,
        })
        atf.server.recordUpdate({
            $id: Now.ID['tc05_close_task3'],
            table: 'x_prna_idea_mgmt_task',
            recordId: task3.first_record,
            fieldValues: { state: 3, estimated_cost: 5000, estimated_benefit_value: 15000 },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc05_validate_idea_pending_approval'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=3^sub_state=pending_approval',
            assert: 'record_validated',
        })
    }
)

export const tc06NeedsMoreInfoLoop = Test(
    {
        $id: Now.ID['tc06_needs_more_info_loop'],
        name: 'TC06 - Needs More Info loop',
        description: 'Setting sub_state to Needs More Info keeps the Idea in IA In Progress and re-opens comments to the requestor',
        active: true,
        failOnServerError: true,
    },
    (atf) => {
        atf.server.impersonate({ $id: Now.ID['tc06_impersonate'], user: demoRequestor })

        const idea = atf.server.recordInsert({
            $id: Now.ID['tc06_create_idea'],
            table: 'x_prna_idea_mgmt_idea',
            fieldValues: {
                short_description: '[ATF] TC06 needs more info test',
                category: 'itsm_accelerator',
                business_problem: 'ATF test problem statement.',
                opened_by: demoRequestor,
                state: 2,
            },
            assert: 'record_successfully_inserted',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc06_set_needs_more_info'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { sub_state: 'needs_more_info' },
            assert: 'record_successfully_updated',
        })

        atf.server.recordValidation({
            $id: Now.ID['tc06_validate_still_in_progress'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: 'state=2^sub_state=needs_more_info',
            assert: 'record_validated',
        })

        atf.server.recordUpdate({
            $id: Now.ID['tc06_requestor_adds_comment'],
            table: 'x_prna_idea_mgmt_idea',
            recordId: idea.record_id,
            fieldValues: { comments: 'Additional detail added by requestor per Solutions Team request.' },
            assert: 'record_successfully_updated',
        })
    }
)

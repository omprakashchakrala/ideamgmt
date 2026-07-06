import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c9d436f3c6a8460f84969a490f56fa4b'
                    }
                    br_idea_defaults: {
                        table: 'sys_script'
                        id: 'd35da72409c54f55a9267906042ee792'
                    }
                    br_idea_guard_transitions: {
                        table: 'sys_script'
                        id: '00a3d27bedc24a5b9c694ce2d1f59184'
                    }
                    br_idea_task_after_insert: {
                        table: 'sys_script'
                        id: '72b74889f1384bd6b5c6504f321039d4'
                    }
                    br_idea_task_after_update: {
                        table: 'sys_script'
                        id: '72f05654c3e34ea0bb99e2870f1f6e90'
                    }
                    br_idea_task_defaults: {
                        table: 'sys_script'
                        id: '56c8f58db92b46948618e449657850f1'
                    }
                    br_idea_task_validate_close: {
                        table: 'sys_script'
                        id: '4e8bd26b6b7c4db5a6c39d9ec81717d1'
                    }
                    create_build_ut_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '29e31eb6838f49e785e4056e5dcb8f98'
                    }
                    create_cost_benefit_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9ae77d5ba581439f900e7c93292718ea'
                    }
                    create_deploy_marketplace_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a8ecd07b6bb8461b85fa0f2f4eee7994'
                    }
                    create_ootb_app_check_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a9ba7a51793c4bb9b098effd31c5ae4c'
                    }
                    create_solution_design_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '73023456005e4fbf9338bbc2716739f7'
                    }
                    create_testing_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6f6d1ce8cea54e219ca669a628a2d03b'
                    }
                    dashboard_admin_funnel: {
                        table: 'par_dashboard'
                        id: 'f2b721f60ea04bc09fc29a78d3576f41'
                    }
                    dashboard_admin_funnel_tab: {
                        table: 'par_dashboard_tab'
                        id: '20bdfa68e6b04a8b84f1f4c6989c1b0f'
                    }
                    dashboard_admin_funnel_widget: {
                        table: 'par_dashboard_widget'
                        id: '9d1f7cd9f686482fa59b47896d9dcd33'
                    }
                    dashboard_admin_funnel_widget_by_category: {
                        table: 'par_dashboard_widget'
                        id: '178ec03173944d2ab0045902d4b413d7'
                    }
                    dashboard_delivery_team: {
                        table: 'par_dashboard'
                        id: '74776b6fbf8743adb4a8324cde61107d'
                    }
                    dashboard_delivery_team_tab: {
                        table: 'par_dashboard_tab'
                        id: 'c50c0ec63d664efd8dcc972a0f46aedc'
                    }
                    dashboard_delivery_team_widget_by_status: {
                        table: 'par_dashboard_widget'
                        id: '1d6b19f8f59e44f8a2af4a7fc04a4ddb'
                    }
                    dashboard_delivery_team_widget_open: {
                        table: 'par_dashboard_widget'
                        id: 'f9d95b474a484d8ea61041341bed81c6'
                    }
                    dashboard_leadership: {
                        table: 'par_dashboard'
                        id: '8e91159f3e074d418ac40bab91d7dd55'
                    }
                    dashboard_leadership_tab: {
                        table: 'par_dashboard_tab'
                        id: '50972c287fb046a191d679c0c88e7a81'
                    }
                    dashboard_leadership_widget_by_category: {
                        table: 'par_dashboard_widget'
                        id: 'a11ca2ae1afd409d854fafeb50e11967'
                    }
                    dashboard_leadership_widget_pending: {
                        table: 'par_dashboard_widget'
                        id: '54ccd07f0886415ea2374eaff15d9f2a'
                    }
                    dashboard_requestor: {
                        table: 'par_dashboard'
                        id: 'e66bf12030d049d4bcceec437b503846'
                    }
                    dashboard_requestor_tab: {
                        table: 'par_dashboard_tab'
                        id: 'ac340bdfcb3b4f10a1e6e1b8fd5526cc'
                    }
                    dashboard_requestor_widget_by_state: {
                        table: 'par_dashboard_widget'
                        id: '23739cb29a054e14be0aac7a94b0ff12'
                    }
                    dashboard_requestor_widget_count: {
                        table: 'par_dashboard_widget'
                        id: '354e85cc2e5245cab7c4e5b0b4b14ef0'
                    }
                    dashboard_solutions_team: {
                        table: 'par_dashboard'
                        id: 'd9580a9faa5a4cc796300748b92a8142'
                    }
                    dashboard_solutions_team_tab: {
                        table: 'par_dashboard_tab'
                        id: '3afaa1c6dbf040178207f05fc14a11d0'
                    }
                    dashboard_solutions_team_widget_by_type: {
                        table: 'par_dashboard_widget'
                        id: '6f9af0ccb3fa4d7bb4f971e02ed9a4da'
                    }
                    dashboard_solutions_team_widget_open: {
                        table: 'par_dashboard_widget'
                        id: 'bf8826a6782c48e28814556df9e054bc'
                    }
                    delivery_team_group: {
                        table: 'sys_user_group'
                        id: '998b7cc507a349489d8ecd57668cb17e'
                    }
                    delivery_team_role_grant: {
                        table: 'sys_group_has_role'
                        id: 'e79d115d41454fd6b81447fbbee00eb5'
                    }
                    demo_user_approver: {
                        table: 'sys_user'
                        id: '9546df2c88df472392e12b3c5a081095'
                    }
                    demo_user_approver_group: {
                        table: 'sys_user_grmember'
                        id: '0a98fe7707e6456ebf9129fad60eb60c'
                    }
                    demo_user_approver_role: {
                        table: 'sys_user_has_role'
                        id: '462740361af3405b8979b47918ad7c45'
                    }
                    demo_user_implementer: {
                        table: 'sys_user'
                        id: '5520a1ffa8874e8d9d236dc1e5a2a619'
                    }
                    demo_user_implementer_group: {
                        table: 'sys_user_grmember'
                        id: '50d0587e7f8845259f504999cad7839b'
                    }
                    demo_user_implementer_role: {
                        table: 'sys_user_has_role'
                        id: 'e2666d0aba1f4163830e0c16547056a0'
                    }
                    demo_user_requestor: {
                        table: 'sys_user'
                        id: '0afa13709ae84a49a675ad9354c8a13b'
                    }
                    demo_user_requestor_role: {
                        table: 'sys_user_has_role'
                        id: 'd23ac27974134d37b3d9c7671453d601'
                    }
                    demo_user_solution_designer: {
                        table: 'sys_user'
                        id: '3ec273a9288e4429b5411665ac09cac0'
                    }
                    demo_user_solution_designer_group: {
                        table: 'sys_user_grmember'
                        id: '839a0d80722d482ca4d78544ec2db6b9'
                    }
                    demo_user_solution_designer_role: {
                        table: 'sys_user_has_role'
                        id: '8d7050d5c40e4147865be592531f30e1'
                    }
                    flow_create_idea_assessment_tasks: {
                        table: 'sys_hub_flow'
                        id: '08e6573d7a6f45d0874533ce5ec540c7'
                    }
                    flow_create_idea_assessment_tasks_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '105cd45fe2db46a9903eabe71f4c0d0c'
                    }
                    flow_create_idea_delivery_tasks: {
                        table: 'sys_hub_flow'
                        id: '202eb981841042e6840879573dbd4974'
                    }
                    flow_create_idea_delivery_tasks_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '20df226041fd4702a889af9b94c4123f'
                    }
                    idea_acl_admin_create: {
                        table: 'sys_security_acl'
                        id: '0eba389f8b3d4c11b40a3dfd8e0f219b'
                    }
                    idea_acl_admin_delete: {
                        table: 'sys_security_acl'
                        id: 'b50cb62fdfa44958a9675c54f6429d42'
                    }
                    idea_acl_admin_read: {
                        table: 'sys_security_acl'
                        id: '53d3777550204c8b9bcef53e626738d7'
                    }
                    idea_acl_admin_write: {
                        table: 'sys_security_acl'
                        id: 'edc17771ce184b9fbd2d59b50ff55bad'
                    }
                    idea_acl_approver_write_comments: {
                        table: 'sys_security_acl'
                        id: '1f843af0876447c191cdc0597b6475e5'
                    }
                    idea_acl_approver_write_decision: {
                        table: 'sys_security_acl'
                        id: 'c47e255293e546bf9bef0c7668bfd68b'
                    }
                    idea_acl_approver_write_rejection_reason: {
                        table: 'sys_security_acl'
                        id: 'f53b204e617d458aa2bb26a661afa4ce'
                    }
                    idea_acl_requestor_create: {
                        table: 'sys_security_acl'
                        id: 'dc550a891e0040558abc72806fa9cd41'
                    }
                    idea_acl_requestor_read_own: {
                        table: 'sys_security_acl'
                        id: '86d17e20edc74529ae206b9afaee2643'
                    }
                    idea_acl_requestor_write_business_problem: {
                        table: 'sys_security_acl'
                        id: '109a79fff6ed47f693fbbc4b3e08f961'
                    }
                    idea_acl_requestor_write_category: {
                        table: 'sys_security_acl'
                        id: '255fc2b387f345bd9ae1c52bfb0b0832'
                    }
                    idea_acl_requestor_write_comments: {
                        table: 'sys_security_acl'
                        id: '9c74213cf5454114ab19e1b076004a99'
                    }
                    idea_acl_requestor_write_expected_benefit: {
                        table: 'sys_security_acl'
                        id: 'f2a70aff0e644e7fbb31a9dcda0dfcd7'
                    }
                    idea_acl_requestor_write_short_description: {
                        table: 'sys_security_acl'
                        id: 'e7bd55a1fee14d2191638275bd045573'
                    }
                    idea_acl_team_read: {
                        table: 'sys_security_acl'
                        id: '58881beeb6d744c3b72880017ad398da'
                    }
                    idea_acl_work_notes_read: {
                        table: 'sys_security_acl'
                        id: '7403c65e6de24e24adbe96f1cffc46ed'
                    }
                    idea_task_acl_admin_create: {
                        table: 'sys_security_acl'
                        id: '4b6ff99d2aa74492bfd63155bbd5d05a'
                    }
                    idea_task_acl_admin_delete: {
                        table: 'sys_security_acl'
                        id: 'ff8547b9ab5f41b3a118fda2e17fc51d'
                    }
                    idea_task_acl_admin_read: {
                        table: 'sys_security_acl'
                        id: '22a7225e62b24a3c9381c2e37e0eb576'
                    }
                    idea_task_acl_admin_write: {
                        table: 'sys_security_acl'
                        id: '0c47a34a9994420389661b214370984b'
                    }
                    idea_task_acl_implementer_write: {
                        table: 'sys_security_acl'
                        id: 'a93e9869770646e2b66da34891ac9fdc'
                    }
                    idea_task_acl_requestor_read: {
                        table: 'sys_security_acl'
                        id: 'ad5fb445bcb84d238ac06eaa7542d836'
                    }
                    idea_task_acl_solution_designer_write: {
                        table: 'sys_security_acl'
                        id: 'c21a2ec941774d688581fafb60530ba9'
                    }
                    idea_task_acl_team_read: {
                        table: 'sys_security_acl'
                        id: 'b0a0613b96dc43c984d398473ab20146'
                    }
                    leadership_group_group: {
                        table: 'sys_user_group'
                        id: 'c51c38b152fd40d38af8641bf31e0585'
                    }
                    leadership_group_role_grant: {
                        table: 'sys_group_has_role'
                        id: 'ea4c2bb9dda5440bbb56bf808b8102b8'
                    }
                    notification_idea_approved: {
                        table: 'sysevent_email_action'
                        id: '23ae1da839764d2aa0f42113b435e816'
                    }
                    notification_idea_deployed: {
                        table: 'sysevent_email_action'
                        id: '4b1c3db6ba4c4cb69b0555fe4ec23a6b'
                    }
                    notification_idea_needs_more_info: {
                        table: 'sysevent_email_action'
                        id: '6f0a1da75a17466598e6827848254e98'
                    }
                    notification_idea_rejected: {
                        table: 'sysevent_email_action'
                        id: '3baaa5fa4dcf49ef821963f0a92cad54'
                    }
                    notification_idea_routed_for_approval: {
                        table: 'sysevent_email_action'
                        id: 'e2ab94f243c64de697811573776d16a7'
                    }
                    notification_idea_submitted: {
                        table: 'sysevent_email_action'
                        id: '11875353c7ad43638511c60d3c785d80'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3c72f6b106e147fc8fa0601486aa0458'
                    }
                    seed_idea_01: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: 'f872b9f926bf4ba1bf38eca419703585'
                    }
                    seed_idea_02: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: 'b53a73f3f8344a8da3694e5529aede20'
                    }
                    seed_idea_02_task_1: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '68a8ce60856b4adfbdf808a6543588a5'
                    }
                    seed_idea_02_task_2: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'e6695f5ef201492fa9a3b577685bf3b9'
                    }
                    seed_idea_02_task_3: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'd3e725e651a94cbca3cbb2f9c3a6a3a1'
                    }
                    seed_idea_03: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: '6f8e3b0c116c4a09ae5edfae71d1b501'
                    }
                    seed_idea_03_task_1: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'd8bbd740790441a69fd11339018cfdfd'
                    }
                    seed_idea_03_task_2: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '3d4ef58da0894e54992aaeb133bdd939'
                    }
                    seed_idea_03_task_3: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '04d29c4fab594ce4a40ea2c922b0e716'
                    }
                    seed_idea_04: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: '0ae84a42106c4df495ab0f5f0a73f4b1'
                    }
                    seed_idea_04_task_1: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '621c3cd6e2344755ac7acbe7fce11daf'
                    }
                    seed_idea_04_task_2: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '40c41bc3795145329c16da34c2f15f19'
                    }
                    seed_idea_04_task_3: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'e6db2631512f44139db2b50d2e171b05'
                    }
                    seed_idea_05: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: 'fd551842d67e429d83b2f4495b01c0c9'
                    }
                    seed_idea_05_task_1: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '441e52cf714f43488500f4c9274ed464'
                    }
                    seed_idea_05_task_2: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '0e9157c9c1f54434ac3c76ed6dce4bae'
                    }
                    seed_idea_05_task_3: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '752ffa1b981f41f4bfadea8db1dc6110'
                    }
                    seed_idea_06: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: 'af7363aaf46f49d48dd4658b3662222e'
                    }
                    seed_idea_07: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: '4a4afd922d65478a94c09ae1eba5e92c'
                    }
                    seed_idea_07_task_4: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'e5a27be43b5046288357d160d4e00471'
                    }
                    seed_idea_07_task_5: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '7e633e124a0440d5ba326c68402e3683'
                    }
                    seed_idea_07_task_6: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '8093aebf506c421f8c51565ee7689a78'
                    }
                    seed_idea_08: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: '25f73f5567eb482abe64b2f3c0e9d72b'
                    }
                    seed_idea_08_task_4: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '90c257f7090949a792ca94eaebc30bd8'
                    }
                    seed_idea_08_task_5: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '5b7e0d5e9fe646f1a8b3b13d2697c1a8'
                    }
                    seed_idea_08_task_6: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'b56ecb73d7d04921a9f2f0bfe72d6629'
                    }
                    seed_idea_09: {
                        table: 'x_prna_idea_mgmt_idea'
                        id: '017237fa593b4862b0038902b6f166f0'
                    }
                    seed_idea_09_task_1: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '2898883fb2674c2585230fb98c342c05'
                    }
                    seed_idea_09_task_2: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'cba39b5b945d425080028651696cbdc8'
                    }
                    seed_idea_09_task_3: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '5e4b57d1ebbe47caa8b376c75b95742e'
                    }
                    seed_idea_09_task_4: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '9e5b0be4591749f6904f7cb8c95386c1'
                    }
                    seed_idea_09_task_5: {
                        table: 'x_prna_idea_mgmt_task'
                        id: 'b8903f69dfdb476d91256fe98b14fdeb'
                    }
                    seed_idea_09_task_6: {
                        table: 'x_prna_idea_mgmt_task'
                        id: '28aaaedc13184932bd2100995c14a9a6'
                    }
                    solutions_team_group: {
                        table: 'sys_user_group'
                        id: '9037fe0ae8f44c3dacbfaf60b423aecc'
                    }
                    solutions_team_role_grant: {
                        table: 'sys_group_has_role'
                        id: '56206ea8d8ab42c8b88c9a0a651e0a0d'
                    }
                    'src_server_acls_idea-acl-scripts_ts': {
                        table: 'sys_module'
                        id: '4cff7bab7f8f4fedb4cf7c84e00d6fb0'
                    }
                    'src_server_business-rules_idea-defaults_ts': {
                        table: 'sys_module'
                        id: '693ce766ee7b47bcabb677047e0b7a99'
                    }
                    'src_server_business-rules_idea-guard-transitions_ts': {
                        table: 'sys_module'
                        id: '468f5015e1f0400aafbede5f3de37592'
                    }
                    'src_server_business-rules_idea-task-after-insert_ts': {
                        table: 'sys_module'
                        id: '6fb602fbe1a34d99b1099d0529ceedf4'
                    }
                    'src_server_business-rules_idea-task-after-update_ts': {
                        table: 'sys_module'
                        id: '8099963db658492a80f6d8ca3c2041f2'
                    }
                    'src_server_business-rules_idea-task-defaults_ts': {
                        table: 'sys_module'
                        id: 'e09c09a113534c12af89e6d5736bcd7c'
                    }
                    'src_server_business-rules_idea-task-validate-close_ts': {
                        table: 'sys_module'
                        id: 'b657379dadfe4145be8e25058adb2973'
                    }
                    'src_server_ui-actions_idea-approval-actions_ts': {
                        table: 'sys_module'
                        id: '8fb7c23cd779424d9e16feed813bb139'
                    }
                    submit_idea_record_producer: {
                        table: 'sc_cat_item_producer'
                        id: '015fb2cb6c8444a68caad530ff34faf4'
                    }
                    tc01_create_idea: {
                        table: 'sys_atf_step'
                        id: '5fb13c2d8da64129b484d897f44bdbb3'
                    }
                    tc01_idea_submission: {
                        table: 'sys_atf_test'
                        id: '4ee6dcb0bff24b48a7012fbd9f062c1c'
                    }
                    tc01_impersonate: {
                        table: 'sys_atf_step'
                        id: 'fb30a1b18b504368a15a96783e12fa18'
                    }
                    tc01_query_no_tasks: {
                        table: 'sys_atf_step'
                        id: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                    }
                    tc01_validate_idea: {
                        table: 'sys_atf_step'
                        id: '047235f54d5347afa293eee53f02b712'
                    }
                    tc02_advance_state: {
                        table: 'sys_atf_step'
                        id: '2ece1fde31df41acb51fc2cdc6893bbb'
                    }
                    tc02_assessment_tasks_auto_create: {
                        table: 'sys_atf_test'
                        id: '0622a92b7b27455f834e4542fad8eb79'
                    }
                    tc02_create_idea: {
                        table: 'sys_atf_step'
                        id: 'e5b6b5445a6649459c0c38a63caa381b'
                    }
                    tc02_impersonate: {
                        table: 'sys_atf_step'
                        id: 'f1cb7ced400e444e8a6cd9df06e9e4b7'
                    }
                    tc02_query_task1: {
                        table: 'sys_atf_step'
                        id: 'ba596ebb9daa415faa127b6e65822f60'
                    }
                    tc02_query_task2: {
                        table: 'sys_atf_step'
                        id: '31765e125a5a416cb83a79109a617661'
                    }
                    tc02_validate_task1: {
                        table: 'sys_atf_step'
                        id: '48a126da96064443896a0d1eff4dcd59'
                    }
                    tc02_validate_task2: {
                        table: 'sys_atf_step'
                        id: '092dbf604ccc4d0ea324cda04abf030b'
                    }
                    tc03_close_task1: {
                        table: 'sys_atf_step'
                        id: '2df0f6b70c4e4fa1a125177f56303020'
                    }
                    tc03_create_idea: {
                        table: 'sys_atf_step'
                        id: 'e2705fb350794a21aa0f634e59ae7b4a'
                    }
                    tc03_impersonate: {
                        table: 'sys_atf_step'
                        id: '05854634a99e4e8795fa0a62ac6d7422'
                    }
                    tc03_ootb_gate_rejection: {
                        table: 'sys_atf_test'
                        id: '8199d48bf3284b2f81675a97b829bcd8'
                    }
                    tc03_query_task1: {
                        table: 'sys_atf_step'
                        id: 'e8ffeb80a7604277ae4942334be1adf5'
                    }
                    tc03_query_task2: {
                        table: 'sys_atf_step'
                        id: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                    }
                    tc03_validate_idea_rejected: {
                        table: 'sys_atf_step'
                        id: '6f6f8dd93d454242aa38e2938bdad324'
                    }
                    tc03_validate_task2_skipped: {
                        table: 'sys_atf_step'
                        id: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                    }
                    tc04_close_task1: {
                        table: 'sys_atf_step'
                        id: 'fddab2c2f0244f9ba2d04cb9692203f4'
                    }
                    tc04_create_idea: {
                        table: 'sys_atf_step'
                        id: 'd505145a0dcc451ebc76c7b46b8879a7'
                    }
                    tc04_impersonate: {
                        table: 'sys_atf_step'
                        id: '9cdfba721dec414da12edfa36372588d'
                    }
                    tc04_query_task1: {
                        table: 'sys_atf_step'
                        id: '79403d48294b4711b88a6a47b7060254'
                    }
                    tc04_query_task2: {
                        table: 'sys_atf_step'
                        id: '5de6f621bd984fd78d51a68ce1a83a63'
                    }
                    tc04_query_task3: {
                        table: 'sys_atf_step'
                        id: 'f86c55bb214d49268e712b916b5b55be'
                    }
                    tc04_sequential_task_activation: {
                        table: 'sys_atf_test'
                        id: '8cd35553ee454a598b6d002039a5c880'
                    }
                    tc04_validate_task2_open: {
                        table: 'sys_atf_step'
                        id: 'e0bedb957b764115a7ae8743633e3d92'
                    }
                    tc04_validate_task3_pending: {
                        table: 'sys_atf_step'
                        id: '819fe25a9cf748e48266b48fe40c68ab'
                    }
                    tc05_assessment_completion: {
                        table: 'sys_atf_test'
                        id: 'db4e8e3cce6846e185eb0119b2689e2b'
                    }
                    tc05_close_task1: {
                        table: 'sys_atf_step'
                        id: '2e7374a5b6ad42f3b9572417aa7ce554'
                    }
                    tc05_close_task2: {
                        table: 'sys_atf_step'
                        id: '87780a8ca929478280f6fbd378d1a9e4'
                    }
                    tc05_close_task3: {
                        table: 'sys_atf_step'
                        id: 'e9cbfea841d94e8e9970246a2c255031'
                    }
                    tc05_create_idea: {
                        table: 'sys_atf_step'
                        id: 'f1af6fd1358e45c1b460ce4d7cae1e94'
                    }
                    tc05_impersonate: {
                        table: 'sys_atf_step'
                        id: '99f20943bc7045c4a4dff0eadfc2a1ad'
                    }
                    tc05_query_task1: {
                        table: 'sys_atf_step'
                        id: 'd26b2b5741664e0da96285514a65f139'
                    }
                    tc05_query_task2: {
                        table: 'sys_atf_step'
                        id: '8e0d1465df724a3eba9e084fefb09733'
                    }
                    tc05_query_task3: {
                        table: 'sys_atf_step'
                        id: '52715a7f78f44a078c49683460cd67f9'
                    }
                    tc05_validate_idea_pending_approval: {
                        table: 'sys_atf_step'
                        id: '9756cc21db66483c825fc56f3e59bc16'
                    }
                    tc06_create_idea: {
                        table: 'sys_atf_step'
                        id: 'f869b41ee39449168b9ad4aa0e04c816'
                    }
                    tc06_impersonate: {
                        table: 'sys_atf_step'
                        id: '0ea005210de54d2fb46795b8fcd333e2'
                    }
                    tc06_needs_more_info_loop: {
                        table: 'sys_atf_test'
                        id: '80dcbad2a5fd41d3a2286f961f53a5d5'
                    }
                    tc06_requestor_adds_comment: {
                        table: 'sys_atf_step'
                        id: '9e50cec1802f4ae1a8195737d7b56b45'
                    }
                    tc06_set_needs_more_info: {
                        table: 'sys_atf_step'
                        id: 'd36af966c3ae441689c50f6194d266fe'
                    }
                    tc06_validate_still_in_progress: {
                        table: 'sys_atf_step'
                        id: '1ae5af8b88ba43c0b41cefc91ba10b52'
                    }
                    tc07_approve: {
                        table: 'sys_atf_step'
                        id: '7e1b5cace541446394d95b4d81b09e5b'
                    }
                    tc07_create_idea: {
                        table: 'sys_atf_step'
                        id: 'ec2dce43b2c0423c9ce768fae45675f3'
                    }
                    tc07_impersonate_approver: {
                        table: 'sys_atf_step'
                        id: '9e4e7059097d439c83d7ac5f0400e230'
                    }
                    tc07_impersonate_requestor: {
                        table: 'sys_atf_step'
                        id: 'f8f751f6f69d42f1a79e779f1dcbe90e'
                    }
                    tc07_leadership_approval: {
                        table: 'sys_atf_test'
                        id: '37cd7b5f44b24c6f977b26886c742725'
                    }
                    tc07_validate_selected: {
                        table: 'sys_atf_step'
                        id: '7813d60e57de4a45803e1273c724c110'
                    }
                    tc08_create_idea: {
                        table: 'sys_atf_step'
                        id: 'c7abc7f248c54d4c84b75b1c93ba2a85'
                    }
                    tc08_impersonate_approver: {
                        table: 'sys_atf_step'
                        id: 'fa0a86293a26405990f2ad2a0718e514'
                    }
                    tc08_impersonate_requestor: {
                        table: 'sys_atf_step'
                        id: '7808472bdbd34de5b6abe561e484d6d0'
                    }
                    tc08_leadership_rejection: {
                        table: 'sys_atf_test'
                        id: '1ac2d093c3f04118b6c3e48658c76b70'
                    }
                    tc08_reject: {
                        table: 'sys_atf_step'
                        id: '8a333c5712214ef8bd35847df3f5cae2'
                    }
                    tc08_validate_rejected: {
                        table: 'sys_atf_step'
                        id: '0a2fbcb06ed94492ba3509a673266f39'
                    }
                    tc09_advance_to_selected: {
                        table: 'sys_atf_step'
                        id: 'ed0a4984b1a547cbbc369e9c90576dd2'
                    }
                    tc09_create_idea: {
                        table: 'sys_atf_step'
                        id: 'da9fe55f38c041ecabdbdbe9d80bad02'
                    }
                    tc09_delivery_tasks_auto_create: {
                        table: 'sys_atf_test'
                        id: 'e9ef3a1c36574c2da987513ae47a5839'
                    }
                    tc09_impersonate: {
                        table: 'sys_atf_step'
                        id: '2e0f93620e154fc69a88e771b60bc5a1'
                    }
                    tc09_query_task4: {
                        table: 'sys_atf_step'
                        id: '03021cbd6d9e4f13962b9dd6fcdd0960'
                    }
                    tc09_validate_idea_delivery_in_progress: {
                        table: 'sys_atf_step'
                        id: 'b19f6a90102f4d7084ae3f4c5e94168d'
                    }
                    tc09_validate_task4_open: {
                        table: 'sys_atf_step'
                        id: '2b252aabb09d41959a28c930836bbeea'
                    }
                    tc10_close_task4: {
                        table: 'sys_atf_step'
                        id: '05b3197a35894e7d8be2a0c3d2d036be'
                    }
                    tc10_create_idea: {
                        table: 'sys_atf_step'
                        id: 'c8358c217a6e4b6fa42b4603756b888f'
                    }
                    tc10_create_task4: {
                        table: 'sys_atf_step'
                        id: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                    }
                    tc10_create_task5: {
                        table: 'sys_atf_step'
                        id: '97c54fa4a0254656a23380ee3e08cd53'
                    }
                    tc10_delivery_to_testing_transition: {
                        table: 'sys_atf_test'
                        id: '7684d34be2ec433a8965d3e5df2d0c48'
                    }
                    tc10_impersonate: {
                        table: 'sys_atf_step'
                        id: 'e76da26d9e4747a49d1e47461af4a501'
                    }
                    tc10_query_task5: {
                        table: 'sys_atf_step'
                        id: '2e8e0e4ee554495090ab42c6df2bbb95'
                    }
                    tc10_validate_idea_testing: {
                        table: 'sys_atf_step'
                        id: '8ac02286aec448dca4e24c496019d8fa'
                    }
                    tc10_validate_task5_open: {
                        table: 'sys_atf_step'
                        id: '32de3b770857420cbd516c56e8495380'
                    }
                    tc11_close_task6: {
                        table: 'sys_atf_step'
                        id: '9371567c7e194d4a919b230f6770425c'
                    }
                    tc11_create_idea: {
                        table: 'sys_atf_step'
                        id: 'f66c8a0707f340a4be5b6c706a0bbf13'
                    }
                    tc11_create_task6: {
                        table: 'sys_atf_step'
                        id: '75aa6df1fb1f48fbac1312f267e9f949'
                    }
                    tc11_impersonate: {
                        table: 'sys_atf_step'
                        id: '2b8448ee6a47418b8be8f09f4f0f0add'
                    }
                    tc11_marketplace_deployment_completion: {
                        table: 'sys_atf_test'
                        id: '856fe886a241409fac4e6eca6b11fcc4'
                    }
                    tc11_validate_deployed: {
                        table: 'sys_atf_step'
                        id: '6ba430b9aa3e475da7cb2f3a429656a5'
                    }
                    tc12_acl_enforcement: {
                        table: 'sys_atf_test'
                        id: 'd29dde676f734eea9fe63064d407929a'
                    }
                    tc12_attempt_write_estimated_cost: {
                        table: 'sys_atf_step'
                        id: 'c750ecc6796344e0a5eb6f2183bd06e6'
                    }
                    tc12_create_idea: {
                        table: 'sys_atf_step'
                        id: '12fa1ee91faf41d3abe24b26a34138d8'
                    }
                    tc12_impersonate_requestor: {
                        table: 'sys_atf_step'
                        id: 'eb6a78b6fbc54b2ab7e0d7ecfeb3b05e'
                    }
                    tc12_validate_work_notes_hidden: {
                        table: 'sys_atf_step'
                        id: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                    }
                    tc13_close_task4: {
                        table: 'sys_atf_step'
                        id: '4cb8bfa7adb04194b2c710d4148efad6'
                    }
                    tc13_create_idea: {
                        table: 'sys_atf_step'
                        id: 'f1086f88a77f4423993d988fad395ee4'
                    }
                    tc13_create_task4: {
                        table: 'sys_atf_step'
                        id: 'a4c595c6ff10486b80f1ca55ad0c20af'
                    }
                    tc13_create_task5: {
                        table: 'sys_atf_step'
                        id: '9098f19721d349998a827d76b3ab667f'
                    }
                    tc13_create_task6: {
                        table: 'sys_atf_step'
                        id: 'cf75798513a7428797251d53598aa03b'
                    }
                    tc13_impersonate: {
                        table: 'sys_atf_step'
                        id: 'af29221d67cd4465bcce6475ab397e08'
                    }
                    tc13_percent_complete_rollup: {
                        table: 'sys_atf_test'
                        id: 'fb1ba739c85743aa8255221238375e2e'
                    }
                    tc13_validate_one_third: {
                        table: 'sys_atf_step'
                        id: '375ac6830efa4973a6e9dd7d1c164dc4'
                    }
                    ui_action_approve_idea: {
                        table: 'sys_ui_action'
                        id: '761a274e3d6c4932ada38d6c7a1b556d'
                    }
                    ui_action_reject_idea: {
                        table: 'sys_ui_action'
                        id: 'bc7f342a5729440eb28b91aadbba3a55'
                    }
                }
                composite: [
                    {
                        table: 'sys_variable_value'
                        id: '0072acf663a34f03a803c314e836998f'
                        key: {
                            document_key: '9756cc21db66483c825fc56f3e59bc16'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00917b47bfa74b99a22467fbe3253647'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'target_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '00ba263fba6146269c01ed93e40f5ec2'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'percent_complete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '01358df6cf0b40a98cbafcda2599d965'
                        key: {
                            document_key: 'c750ecc6796344e0a5eb6f2183bd06e6'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0295dace6226495d95fd998190ab7aa2'
                        key: {
                            document_key: '8a333c5712214ef8bd35847df3f5cae2'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0301bdeb937843979618466c59c87daf'
                        key: {
                            field: 'record_id'
                            id: 'e0bedb957b764115a7ae8743633e3d92'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '035d99fd87224955aeec7574757d313b'
                        key: {
                            field: 'field_values'
                            id: '8e0d1465df724a3eba9e084fefb09733'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '038c9c570b094d4f9e02678164f88516'
                        key: {
                            field: 'record_id'
                            id: 'ed0a4984b1a547cbbc369e9c90576dd2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0452a13248d6423caf1cb74c14dc2980'
                        key: {
                            document_key: '2e8e0e4ee554495090ab42c6df2bbb95'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '04d4e6c2064d434db875be7711d83d09'
                        key: {
                            cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                            variable_set: 'NULL'
                            name: 'business_problem'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0556286c85c64cf29fc8facada9eded8'
                        key: {
                            document_key: '7813d60e57de4a45803e1273c724c110'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0584db796e4e4a92a0975bab11e6591f'
                        key: {
                            document_key: '2b252aabb09d41959a28c930836bbeea'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '06300a078a36416a8bd5380185b8fc7c'
                        key: {
                            dashboard: 'f2b721f60ea04bc09fc29a78d3576f41'
                            dashboard_tab: '20bdfa68e6b04a8b84f1f4c6989c1b0f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '06a275e81d4c4ad5a43f100acd6fee84'
                        key: {
                            document_key: '1ae5af8b88ba43c0b41cefc91ba10b52'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06a672e4d2b0454aa2af5ec119c06042'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'actual_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07214750e8474eb1ab5597eeaf5a30b8'
                        key: {
                            document_key: '2ece1fde31df41acb51fc2cdc6893bbb'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '076fc8bb63c246cd9885812950e59658'
                        key: {
                            document_key: 'f8f751f6f69d42f1a79e779f1dcbe90e'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07b4347377cd4cdc9f577e65146370be'
                        key: {
                            document_key: '8ac02286aec448dca4e24c496019d8fa'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '080efc8d3155440a8b19f5fc6bc043ed'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'ootb_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '086da17b16344d0c8417cbc245c514da'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '09b4a1e6f2224b98ab44a80cfa7cbaaf'
                        key: {
                            sys_security_acl: 'c47e255293e546bf9bef0c7668bfd68b'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '09c3e285116945628ba741641ef3483f'
                        key: {
                            document_key: 'ec2dce43b2c0423c9ce768fae45675f3'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '09d280e6707447ab9c4c00ca54e46ce1'
                        key: {
                            document_key: 'f66c8a0707f340a4be5b6c706a0bbf13'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09e753fe6216495abf85a341330460d8'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_timeline_weeks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0a09d5a521264a9c88862525b52023da'
                        key: {
                            field: 'record_id'
                            id: '7e1b5cace541446394d95b4d81b09e5b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a7e7cc1136a4121b0a97ce0db2a69c7'
                        key: {
                            document_key: '4cb8bfa7adb04194b2c710d4148efad6'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0a9d588739504cce8377287d7ab32b6d'
                        key: {
                            field: 'record_id'
                            id: '7813d60e57de4a45803e1273c724c110'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0af144ef0b474b53bb011854f23ed7c3'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0af6aa2059a447fab3fbe87798acd8bb'
                        key: {
                            field: 'record_id'
                            id: '8a333c5712214ef8bd35847df3f5cae2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0b3a7ef2f4174abcab41faab5404a73c'
                        key: {
                            document_key: '32de3b770857420cbd516c56e8495380'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b6a9c16cc7048099ce518bbfb8fc184'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0bda5aaf09ae449aa9d26922155c74fe'
                        key: {
                            document_key: '48a126da96064443896a0d1eff4dcd59'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0c4b0b67b8c148109277484e2ad7730c'
                        key: {
                            document_key: '2df0f6b70c4e4fa1a125177f56303020'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c99d0310666477b8be4bd3c317eeb40'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'cost_benefit_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cbbac33c1e8428fa58dafcf6119a45a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0d46b0064d5d4727be67f4de6109dffb'
                        key: {
                            field: 'record_id'
                            id: '819fe25a9cf748e48266b48fe40c68ab'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0d7de391fef54bada6b31e6e2b5eec40'
                        key: {
                            document_key: 'fddab2c2f0244f9ba2d04cb9692203f4'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0da06a495df54a67ac972ef15d36c256'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0e838778baa34193a84c8913d9c3caf8'
                        key: {
                            cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                            variable_set: 'NULL'
                            name: 'short_description'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0f582303b55f4db5909c0b1969b6f955'
                        key: {
                            document_key: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10d29c92b02e46c685dbf12723d0be49'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_benefit_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '113ae2d0e36247878be36c6bb80fd32a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '11dc7bc9708c4ddaa0ca1556994d7ba8'
                        key: {
                            document_key: '99f20943bc7045c4a4dff0eadfc2a1ad'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '11f33a8a4eb04ba99d8ac24475c6033a'
                        key: {
                            document_key: '8a333c5712214ef8bd35847df3f5cae2'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '121ecd0debf84d3a87ee239e53d5edcb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'ootb_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '12b511b8906941b4ac53dd93c1325e62'
                        key: {
                            field: 'record_id'
                            id: '9371567c7e194d4a919b230f6770425c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1398e34b20744d1dac3cd3eccbc3bbb3'
                        key: {
                            field: 'record_id'
                            id: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '13c4590cdbfa4073b6e5821fe8392b6c'
                        key: {
                            document_key: '7813d60e57de4a45803e1273c724c110'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: '13d8470e9e074f9fb2d2f36835df2446'
                        key: {
                            dashboard: 'f2b721f60ea04bc09fc29a78d3576f41'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_prna_idea_mgmt.admin'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1538588c269e4d7eac4519d3a66685a6'
                        key: {
                            document_key: '7813d60e57de4a45803e1273c724c110'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '153b614348c54bb4a3c1be565b87860b'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '15909bd12f4a401aa7467e82dc308375'
                        key: {
                            name: 'x_prna_idea_mgmt.admin'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '15d5791fbf5441cf9aeab5fd6295d85a'
                        key: {
                            document_key: '8ac02286aec448dca4e24c496019d8fa'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16e9069716894544a6e3190487286501'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                            value: 'blocked'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1749eb0df7a14bc78efc43cc812644f2'
                        key: {
                            document_key: '75aa6df1fb1f48fbac1312f267e9f949'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '17718674ff1a4993a75be21f27fea4a5'
                        key: {
                            field: 'record_id'
                            id: '4cb8bfa7adb04194b2c710d4148efad6'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '17bb478816494567b4d133111444d655'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'ai_agentic'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '18278b5388994fbbbe0a5ba21c28a739'
                        key: {
                            document_key: 'b19f6a90102f4d7084ae3f4c5e94168d'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1853764216c44898bbd149510cb9b57c'
                        key: {
                            field: 'field_values'
                            id: '97c54fa4a0254656a23380ee3e08cd53'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '18a54aefb0ec44bca518447266e8878b'
                        key: {
                            document_key: '6ba430b9aa3e475da7cb2f3a429656a5'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '18aad6fd64954473b38551861927af3e'
                        key: {
                            document_key: '4cb8bfa7adb04194b2c710d4148efad6'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18ef424989c44c0398c5171a28d3345c'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1934d5fa555a40aea73b934acae50f9b'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
                            value: 'needs_more_info'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '194ade75fc1641bb92ad38a8c72c65bc'
                        key: {
                            document_key: '0a2fbcb06ed94492ba3509a673266f39'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '19ccc4f4a6cd400ca86f7ae39e7b950e'
                        key: {
                            sys_security_acl: '58881beeb6d744c3b72880017ad398da'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a61a9900c1c41f99130191180ccb47b'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1b11daa3324f4bcd8bfadf8e422f5da5'
                        key: {
                            sys_security_acl: '7403c65e6de24e24adbe96f1cffc46ed'
                            sys_user_role: {
                                id: 'b79ad99785fb4f66bb926312b0da7e83'
                                key: {
                                    name: 'x_prna_idea_mgmt.implementer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1bb61fdd72fb4bf9a13bb22a75d2f65e'
                        key: {
                            field: 'field_values'
                            id: '9098f19721d349998a827d76b3ab667f'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c294a2f2cad42ed82f28f97f154812b'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'build_ut'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c581d11cdcd4193ae265ef9f23ee403'
                        key: {
                            sys_security_acl: '22a7225e62b24a3c9381c2e37e0eb576'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1cf18ad6a7324a7e9ad48cf3a553996a'
                        key: {
                            sys_security_acl: '1f843af0876447c191cdc0597b6475e5'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e0c3dbb2ad6498381057b583d5f2e4a'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'marketplace_listing_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1e6f8b4caf08469e96687abdcdc2a92b'
                        key: {
                            document_key: '8ac02286aec448dca4e24c496019d8fa'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1ea433afd0274af8bf3f9a729abc56d0'
                        key: {
                            document_key: '2b252aabb09d41959a28c930836bbeea'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1eea19ef205e40f6b19c83fc1c82165d'
                        key: {
                            cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                            variable_set: 'NULL'
                            name: 'expected_benefit'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1fdd6d9d15fc408c81489bd978046381'
                        key: {
                            document_key: '092dbf604ccc4d0ea324cda04abf030b'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2047ea23d4f34730bc9fa03ebe36cdd7'
                        key: {
                            document_key: '047235f54d5347afa293eee53f02b712'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '204e5e00eb3642709c468e3ee3699456'
                        key: {
                            document_key: '4cb8bfa7adb04194b2c710d4148efad6'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20fef4adb3a142f2a664057742339c3e'
                        key: {
                            document_key: 'c7abc7f248c54d4c84b75b1c93ba2a85'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2160cc1fa0c24bc184c31d7c55ff7215'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'target_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '22145ebfe3dd43adaee16a9191990b69'
                        key: {
                            document_key: 'a4c595c6ff10486b80f1ca55ad0c20af'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2286181001c24ccf8a68d08515016698'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'solution_design_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2363485efe9b4728a6397ece24d0b5c0'
                        key: {
                            sys_security_acl: 'b0a0613b96dc43c984d398473ab20146'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '242277b3a780446d967f6573701fe535'
                        key: {
                            document_key: '6ba430b9aa3e475da7cb2f3a429656a5'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '24a89e28b90243a79ed7bf80c98f9975'
                        key: {
                            document_key: '2df0f6b70c4e4fa1a125177f56303020'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '24c5d492c0e64f11a71fda802becc432'
                        key: {
                            document_key: '79403d48294b4711b88a6a47b7060254'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '26795a264ffb4e2eb01a2e5e59157f40'
                        key: {
                            document_key: 'e0bedb957b764115a7ae8743633e3d92'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '267f065180244898907215466c5c2d9f'
                        key: {
                            document_key: 'e0bedb957b764115a7ae8743633e3d92'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '268bc7c4682e456282409d9545532907'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26bdf5c58db0478cbd295816bb390941'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '27011658e5b8461e9c01489112934116'
                        key: {
                            sys_security_acl: 'ff8547b9ab5f41b3a118fda2e17fc51d'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '27015ba27ed54bbb9afe878d64d42bde'
                        key: {
                            name: 'x_prna_idea_mgmt.requestor'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2708a8528ce54f5e81a94f53c666b6d9'
                        key: {
                            document_key: '7e1b5cace541446394d95b4d81b09e5b'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '2729a653696e42c0a17d0f75e64c3509'
                        key: {
                            dashboard: '8e91159f3e074d418ac40bab91d7dd55'
                            dashboard_tab: '50972c287fb046a191d679c0c88e7a81'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '275c9e9cdd364e4c9bd470bf5f894b24'
                        key: {
                            document_key: '9e50cec1802f4ae1a8195737d7b56b45'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '27994e22a63e4fcf9919cc39a9cc3216'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'integration'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '28152b453a054ac68a2aeb922b77aa63'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '282439451cde4591989473efa7dabb1a'
                        key: {
                            document_key: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '28a9b38079de4b7491ba29fefbdb0729'
                        key: {
                            document_key: 'f1af6fd1358e45c1b460ce4d7cae1e94'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2906774d8b1f44938b22350c6670101c'
                        key: {
                            document_key: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '29568839c4874ad7833ed18b7a448cbf'
                        key: {
                            name: 'x_prna_idea_mgmt.approver'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '29d10111606e45279d41438e92382aea'
                        key: {
                            document_key: 'd505145a0dcc451ebc76c7b46b8879a7'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2afef79823ad44a1a156a8ef1f897de1'
                        key: {
                            document_key: '7813d60e57de4a45803e1273c724c110'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b36a9edcba7490ea9b1708f2b12fba5'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2b7ed56347844104a1019bd015455dcf'
                        key: {
                            document_key: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c1b9516e3a74422a81d53137d8452ee'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_effort'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c3692e4a3484e7fbbae48551a4ffce2'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c95df668b6b472aa9c9868f841818ba'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'rejection_reason'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2cdc5cb10ed448b89b5f9e32a961bd14'
                        key: {
                            document_key: '819fe25a9cf748e48266b48fe40c68ab'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2cef5afe6c9b45e89ba8cc967d4e3c35'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            value: 'not_submitted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d24e3a58d2047a48a3e74aba0333ce1'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'ai_agentic'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2d4a172ae52d4c2dbcb42e12d19a13b4'
                        key: {
                            document_key: 'd36af966c3ae441689c50f6194d266fe'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2d4f52a1c9234e9a89f0d4af5333ad54'
                        key: {
                            document_key: 'd505145a0dcc451ebc76c7b46b8879a7'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e0071740f8544ce99ad2db21efc925b'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_comments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2e85e9483aca4d05996351788d469bfc'
                        key: {
                            document_key: '8e0d1465df724a3eba9e084fefb09733'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2effea635ff34df5aae88c6b955f8f44'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'ootb_exists'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2fece7f2a7c843c781c0aba6d2c65a80'
                        key: {
                            document_key: '75aa6df1fb1f48fbac1312f267e9f949'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3048487532a141ed85502b61f6b68707'
                        key: {
                            document_key: 'fddab2c2f0244f9ba2d04cb9692203f4'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '30e90dadc0804e0aa6911b61139f3302'
                        key: {
                            document_key: '4cb8bfa7adb04194b2c710d4148efad6'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '31eaa2fe3bc84fe2abe40ae6e61b42f2'
                        key: {
                            role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                            contains: {
                                id: 'b79ad99785fb4f66bb926312b0da7e83'
                                key: {
                                    name: 'x_prna_idea_mgmt.implementer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '325b5105766e488e82c487e30f24045f'
                        key: {
                            sys_security_acl: '53d3777550204c8b9bcef53e626738d7'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '325c4e830d0a4e2aa8189b0a2ea15f80'
                        key: {
                            field: 'record_id'
                            id: 'd36af966c3ae441689c50f6194d266fe'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '327233adde1341a2bd910cf076ab5295'
                        key: {
                            document_key: 'f1086f88a77f4423993d988fad395ee4'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '329464f4b42345c88a661db891f14a7f'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'defect_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '32da0fad08744a35b1e55b13357f0d6b'
                        key: {
                            document_key: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3384066a1017415da39a2c4b0ee6e7af'
                        key: {
                            document_key: 'e9cbfea841d94e8e9970246a2c255031'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3392de3cfab241d49e905e82168ff97b'
                        key: {
                            sys_security_acl: 'e7bd55a1fee14d2191638275bd045573'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '340e03415cd546c6903c38d96068f538'
                        key: {
                            document_key: '2e7374a5b6ad42f3b9572417aa7ce554'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '34989e545d8e4b90a4d5796825ffe887'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'actual_start_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '349d1657c3484aac9478135bb7f85a6d'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'itom_observability'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '34f0171fa3984c76b533d2b0ef587c00'
                        key: {
                            document_key: '48a126da96064443896a0d1eff4dcd59'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3571413c2cd548feaa4cb26fa4a0eec9'
                        key: {
                            document_key: '03021cbd6d9e4f13962b9dd6fcdd0960'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '357615a327884851b132015d2cdd7f06'
                        key: {
                            document_key: 'e5b6b5445a6649459c0c38a63caa381b'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35c451f9a4be4ea591f5c18c06fb0900'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'testing'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3669a47a92604661a21999180939a809'
                        key: {
                            document_key: '6f6f8dd93d454242aa38e2938bdad324'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '36846d4cc4bc48d38317ef978de9af24'
                        key: {
                            field: 'record_id'
                            id: '2e7374a5b6ad42f3b9572417aa7ce554'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36c9b0a88fc84dd0a17467af70ebd6a4'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36df636b06484ec7bb22a82890fe970a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'business_problem'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '376c928d2abe4805b3b30022e3661644'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'csm_accelerator'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3887fbcc84a7421688177714992535f5'
                        key: {
                            sys_security_acl: '7403c65e6de24e24adbe96f1cffc46ed'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '38940f8f1aca4e858b2d788b63191e3b'
                        key: {
                            document_key: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '38e4319ece664f5b8d6345156fa4a265'
                        key: {
                            document_key: 'cf75798513a7428797251d53598aa03b'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3a313eeeef304b4faa7cf69f3418f455'
                        key: {
                            field: 'record_id'
                            id: '047235f54d5347afa293eee53f02b712'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3a4096269a754acb8be15bed1833fe19'
                        key: {
                            document_key: '7e1b5cace541446394d95b4d81b09e5b'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ab6766d33a8450fb15af8d3890ec997'
                        key: {
                            document_key: '87780a8ca929478280f6fbd378d1a9e4'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3ad5277f528b4191b4ee6d2e20874065'
                        key: {
                            document_key: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b0d09b435dc4ab48919b442747fdfa0'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'build_notes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3b2c7d6477f147f09354f03c16845054'
                        key: {
                            document_key: 'c7abc7f248c54d4c84b75b1c93ba2a85'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d220b631f18493eb1bc586cdc0aa71c'
                        key: {
                            document_key: '092dbf604ccc4d0ea324cda04abf030b'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d9f422247104bf895cb97c7f032d21d'
                        key: {
                            document_key: 'ed0a4984b1a547cbbc369e9c90576dd2'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3e98d2ddadae4e479512c58991873371'
                        key: {
                            document_key: '97c54fa4a0254656a23380ee3e08cd53'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '3eebddde23834363801118e803e960fe'
                        key: {
                            dashboard: 'e66bf12030d049d4bcceec437b503846'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3fe385b73cd5499da55efa8b05157b07'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'target_end_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '400534e8a9614f15909ed2f81cdb9955'
                        key: {
                            document_key: '375ac6830efa4973a6e9dd7d1c164dc4'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '40b131fb6b1949339eae489081c022a4'
                        key: {
                            sys_security_acl: 'dc550a891e0040558abc72806fa9cd41'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4117b8c196194baca7fd6b4dcfc6809c'
                        key: {
                            sys_security_acl: '7403c65e6de24e24adbe96f1cffc46ed'
                            sys_user_role: {
                                id: 'd44c763da63144c5ab676b22dae26d1a'
                                key: {
                                    name: 'x_prna_idea_mgmt.solution_designer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '41d9386d34e441358451035c2964c74f'
                        key: {
                            document_key: '7808472bdbd34de5b6abe561e484d6d0'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4392c49610b8475384dc2228bf03bb2a'
                        key: {
                            field: 'record_id'
                            id: '0a2fbcb06ed94492ba3509a673266f39'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43af4947ac224d8c9eb14b86d245a501'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '43d34ac3938d47cb883b9b91bbe98ddd'
                        key: {
                            field: 'field_values'
                            id: 'cf75798513a7428797251d53598aa03b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '43f3b66dd86547feb4d140bc420f8c46'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'deploy_marketplace'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4470f03de7a14d9689213dd71e3a0140'
                        key: {
                            document_key: 'd26b2b5741664e0da96285514a65f139'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '44e9a9b7671e4b76b1be4dce4aabd89b'
                        key: {
                            document_key: 'ec2dce43b2c0423c9ce768fae45675f3'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4584dee723f741148c7aab59d52e0957'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '459be6a6fd5345eab8fa5a7e89ed62a2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_timeline_weeks'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '45d2a2569f284e4e96cdd56ac34f794e'
                        key: {
                            dashboard: '74776b6fbf8743adb4a8324cde61107d'
                            dashboard_tab: 'c50c0ec63d664efd8dcc972a0f46aedc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4643906ca99348b9b357d3072e2ce6d3'
                        key: {
                            document_key: 'e5b6b5445a6649459c0c38a63caa381b'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4656ca8ed4154368befe96134c58e860'
                        key: {
                            document_key: '87780a8ca929478280f6fbd378d1a9e4'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '465fb2a1a65e49988b5c9a184f1d9693'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'cost_benefit_analysis'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '46cd6fbfb9c44a748faef2daf0cdddf1'
                        key: {
                            document_key: '2df0f6b70c4e4fa1a125177f56303020'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '47195fe8bd4e48b5a554399e13799cdd'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '47ce04d14277445595266251401a199e'
                        key: {
                            document_key: '8a333c5712214ef8bd35847df3f5cae2'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4836c5561d2d4079b4527b769bf4b2ce'
                        key: {
                            document_key: 'cf75798513a7428797251d53598aa03b'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '48798447e7f7457791040bc2dfa1b641'
                        key: {
                            document_key: 'd26b2b5741664e0da96285514a65f139'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4891b9c6cf804db6afb41d5195b2e1b7'
                        key: {
                            document_key: '12fa1ee91faf41d3abe24b26a34138d8'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4892b783dd284006b9684a1ab70eb94c'
                        key: {
                            document_key: '092dbf604ccc4d0ea324cda04abf030b'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '48c551dd9fe14b348ef3a9de60c543c3'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4999d612304f46338ea333e45541db1f'
                        key: {
                            field: 'field_values'
                            id: '2e8e0e4ee554495090ab42c6df2bbb95'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49e297bad7df452ca01e44bae4eb3226'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '49fd1b5adffc4fa4919507edcf597dc9'
                        key: {
                            document_key: '0a2fbcb06ed94492ba3509a673266f39'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4a08a5ae031d496f83c663518e976db8'
                        key: {
                            document_key: 'c750ecc6796344e0a5eb6f2183bd06e6'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4a0ca1780bc045b787b2a86715a891f8'
                        key: {
                            document_key: '8e0d1465df724a3eba9e084fefb09733'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4a9adc16120049b2abb279e1aa81cd18'
                        key: {
                            document_key: '97c54fa4a0254656a23380ee3e08cd53'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b9aaa4db8b141a98bbb4cf0034a5cf3'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_timeline_weeks'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4bbc7d5bbae84b41b87162dea9e92663'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4bbf456b94574506bae7a74a5c25b835'
                        key: {
                            document_key: '819fe25a9cf748e48266b48fe40c68ab'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4c2ea916e63c41899f284488a32d67cd'
                        key: {
                            document_key: '12fa1ee91faf41d3abe24b26a34138d8'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4c3599ef2a1149a6827525de9d3d2d1b'
                        key: {
                            document_key: 'e8ffeb80a7604277ae4942334be1adf5'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cadd782098140a6b2664183d0064682'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d572df978ca45248e4ac29189818077'
                        key: {
                            document_key: 'f869b41ee39449168b9ad4aa0e04c816'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d6b549d02da4e84889c49071201e237'
                        key: {
                            document_key: 'a4c595c6ff10486b80f1ca55ad0c20af'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d805d4771f84344a77b2c46dabe5105'
                        key: {
                            document_key: '047235f54d5347afa293eee53f02b712'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4e01b28cef7144d887454fc521315b25'
                        key: {
                            document_key: 'b19f6a90102f4d7084ae3f4c5e94168d'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '4e2deef1bbd242948fbdccc1bb2b4d3f'
                        key: {
                            dashboard: '8e91159f3e074d418ac40bab91d7dd55'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4e3fc4889b7e46a688956054b8de3bbc'
                        key: {
                            field: 'field_values'
                            id: 'd26b2b5741664e0da96285514a65f139'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e4c14c53cec412fb3580960d4287c5e'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'cost_benefit_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ee5901f4b8b408087798b0822cb8d13'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'marketplace_listing_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4f1181c946184fba8f2bba88e6de3338'
                        key: {
                            document_key: '6f6f8dd93d454242aa38e2938bdad324'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f3c9f872918467681151c9817945b8c'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4f93c13cb54842b185654b61f7661b17'
                        key: {
                            sys_security_acl: '58881beeb6d744c3b72880017ad398da'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '4fe56ef6706040d69696f0999fad876e'
                        key: {
                            dashboard: 'f2b721f60ea04bc09fc29a78d3576f41'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5002a1228e8544c697fa50b0b3e568b7'
                        key: {
                            document_key: '5de6f621bd984fd78d51a68ce1a83a63'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '503ac4566aca4016bbd37afde9d15c6c'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_comments'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '50c8ee1a82ef4d298a7620489531a810'
                        key: {
                            document_key: '8e0d1465df724a3eba9e084fefb09733'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '50d023700fb947bca479ad4759ccf9e0'
                        key: {
                            document_key: '2e8e0e4ee554495090ab42c6df2bbb95'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '515b235045c54e5a8a839b7ffb3baa58'
                        key: {
                            document_key: '5de6f621bd984fd78d51a68ce1a83a63'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52864cc920cf459e8f5d8eed3fa3f320'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '52db7fc6c01e4fc590e50e5b556b375f'
                        key: {
                            document_key: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52eb92d9a0944d5ab6b2b1bade695550'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'defect_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53e3184ffa9b4524afc50fb5069b1832'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'servicenow_liaison_contact'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '546c60a82d744390bdca23007231236f'
                        key: {
                            document_key: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5605c01a616a4fc4a6aa1a1a4a51b991'
                        key: {
                            document_key: '1ae5af8b88ba43c0b41cefc91ba10b52'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '562bf44780134b4bac709ba9aef76cae'
                        key: {
                            document_key: '9371567c7e194d4a919b230f6770425c'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5673bc8c0b3a4a73aae3b03940d371c0'
                        key: {
                            document_key: 'cf75798513a7428797251d53598aa03b'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '56d36bf1107046d7b839430cf72e43e9'
                        key: {
                            document_key: 'd36af966c3ae441689c50f6194d266fe'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '574eb6ac01464e3096cd63c042f02c11'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '58234a037e2d4d9a9bf8f4faa401bd5f'
                        key: {
                            document_key: 'f66c8a0707f340a4be5b6c706a0bbf13'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '58c5d99fe92e4aa78fa9b400b538c9bd'
                        key: {
                            document_key: '2b252aabb09d41959a28c930836bbeea'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '594e3156bab0463d97de11a1f2607dee'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'itsm_accelerator'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '59de183603054e748e4cf204887db66f'
                        key: {
                            document_key: '03021cbd6d9e4f13962b9dd6fcdd0960'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5a3b53a0f93d45558684375ec0cf7162'
                        key: {
                            document_key: '9756cc21db66483c825fc56f3e59bc16'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5a6803e465ab4f56b6b083a717045e4b'
                        key: {
                            document_key: 'f1086f88a77f4423993d988fad395ee4'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5a71e24ff9e8401196a9f4b6c4890a59'
                        key: {
                            document_key: '092dbf604ccc4d0ea324cda04abf030b'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5a81347ed42144aa95b913e43cf0e5b6'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'deployment_notes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5baecf6997624516ac5955e66b0bd0b1'
                        key: {
                            document_key: '9098f19721d349998a827d76b3ab667f'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5cef75f0b58f488e84035693103f2ead'
                        key: {
                            sys_security_acl: 'edc17771ce184b9fbd2d59b50ff55bad'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5fc0f28420a94e53b6c26b6d464f3afb'
                        key: {
                            document_key: 'ec2dce43b2c0423c9ce768fae45675f3'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5fc61b7a10db422e850116cbff561e90'
                        key: {
                            field: 'field_values'
                            id: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6059a6fc906a4db688b1691dfa1dafab'
                        key: {
                            sys_security_acl: 'f2a70aff0e644e7fbb31a9dcda0dfcd7'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6107f36ab0704cb18fdf0548489e693b'
                        key: {
                            document_key: '9371567c7e194d4a919b230f6770425c'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '613b30628812421a8c13b951797d7f42'
                        key: {
                            document_key: '9098f19721d349998a827d76b3ab667f'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '614b70ce661148faaeef7101f718577e'
                        key: {
                            sys_security_acl: '255fc2b387f345bd9ae1c52bfb0b0832'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '617fd5536c1a401799f185be00f97995'
                        key: {
                            document_key: 'd26b2b5741664e0da96285514a65f139'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '61beeb2d4eee4989a32454b795589b3e'
                        key: {
                            sys_security_acl: 'ad5fb445bcb84d238ac06eaa7542d836'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '620851668cb14129934a9a2c5d718515'
                        key: {
                            document_key: 'ba596ebb9daa415faa127b6e65822f60'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '659989e75ae249d0bf3c1e4ffe8db936'
                        key: {
                            document_key: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '65b9ba95a15e4406b8b9d914a55d632f'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '65bdf4d48a5e4c93ba0749ffd6fec8ae'
                        key: {
                            field: 'field_values'
                            id: 'e8ffeb80a7604277ae4942334be1adf5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '65f08a350cff446c96f15ea40f6f645e'
                        key: {
                            document_key: '9756cc21db66483c825fc56f3e59bc16'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66054e37c5fd4734aef680f9152e7a56'
                        key: {
                            document_key: 'f1086f88a77f4423993d988fad395ee4'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '664115aaaed84f508d4022010605d195'
                        key: {
                            sys_security_acl: 'b0a0613b96dc43c984d398473ab20146'
                            sys_user_role: {
                                id: 'd44c763da63144c5ab676b22dae26d1a'
                                key: {
                                    name: 'x_prna_idea_mgmt.solution_designer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66b93bc891d9430aa9ebfd99af016a51'
                        key: {
                            document_key: 'e9cbfea841d94e8e9970246a2c255031'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66bbe5c0ce9342d4a971fec36ceb906c'
                        key: {
                            document_key: 'ed0a4984b1a547cbbc369e9c90576dd2'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '66d82a23b01d4c099d37c4bc1bdbf133'
                        key: {
                            document_key: '5de6f621bd984fd78d51a68ce1a83a63'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66f52e463ba64ec7bbab001f9d6ed4b3'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'deployment_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '671284571f774bcd8979af7624da1a1d'
                        key: {
                            document_key: 'f86c55bb214d49268e712b916b5b55be'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6745fb97c45d4b479a57278cd2630b0f'
                        key: {
                            field: 'record_id'
                            id: '1ae5af8b88ba43c0b41cefc91ba10b52'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '677166b83d4e4328a568ca77ae3958bd'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '67a80026c72b448f99113241f40c46f1'
                        key: {
                            sys_ui_action: '761a274e3d6c4932ada38d6c7a1b556d'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '67c11a668da14f98b251efc3e946f302'
                        key: {
                            document_key: 'f1af6fd1358e45c1b460ce4d7cae1e94'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '68679ed8094d46b3a4a5cd0c5d99dfbb'
                        key: {
                            sys_security_acl: 'b50cb62fdfa44958a9675c54f6429d42'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68ddf357e53345d2b4a75153261a2b9a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '69fe5cec212a455780ba128a97bbb37b'
                        key: {
                            document_key: '0a2fbcb06ed94492ba3509a673266f39'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a22b79138db49f188aebc5a23f29d02'
                        key: {
                            document_key: '05b3197a35894e7d8be2a0c3d2d036be'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6a4205d6db184de5a8af07ee78a059ca'
                        key: {
                            document_key: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6a7ba01a84c7480bb1c991128b96d0e3'
                        key: {
                            field: 'record_id'
                            id: '32de3b770857420cbd516c56e8495380'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6adcc74182a44e6783f0f27316039902'
                        key: {
                            document_key: 'd36af966c3ae441689c50f6194d266fe'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6b469bfb2efb4853b650a58cd01e13cd'
                        key: {
                            document_key: 'c750ecc6796344e0a5eb6f2183bd06e6'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cf591900cc04021a31d55be9caf5285'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6d438c581a374a86b1f9ddef6ddbe0f5'
                        key: {
                            document_key: '03021cbd6d9e4f13962b9dd6fcdd0960'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d9f40363bb7443b931a9bf2bce5cea2'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6def8cdfd4a74337ad878d1325c547e5'
                        key: {
                            sys_security_acl: 'f53b204e617d458aa2bb26a661afa4ce'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6ea736761eb340c6baf1bfc75c18d887'
                        key: {
                            field: 'field_values'
                            id: '31765e125a5a416cb83a79109a617661'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6eef46a954504d848a169aacd20762fa'
                        key: {
                            document_key: 'fddab2c2f0244f9ba2d04cb9692203f4'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6fdb2268fa094ef3a4705c614e2e3066'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'solution_design_effort_estimation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7034245b9a68454c90e7690c77657749'
                        key: {
                            document_key: 'e0bedb957b764115a7ae8743633e3d92'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '71192f5760414e16aaede65074093550'
                        key: {
                            document_key: '9098f19721d349998a827d76b3ab667f'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '71a036407db042848097fcf095b9a477'
                        key: {
                            document_key: 'e2ab1a66ada54ee28d1dd5a5b1ae6740'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '71ada48e785b4727ae0e7978f1796d8a'
                        key: {
                            document_key: 'a4c595c6ff10486b80f1ca55ad0c20af'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '71c645d0024c49eea2422d5084644b0b'
                        key: {
                            document_key: '9e50cec1802f4ae1a8195737d7b56b45'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '72b267c0cff3433b9bf7177bb7b2156b'
                        key: {
                            field: 'record_id'
                            id: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '72ba124ff38746afb099fb858e314401'
                        key: {
                            document_key: '9cdfba721dec414da12edfa36372588d'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_dictionary_override'
                        id: '7337a23acd60481a99c3d9df12185a0d'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '739e19cda7dc4af5a3dbeb33634e0932'
                        key: {
                            document_key: '48a126da96064443896a0d1eff4dcd59'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '767a15aa75ff43f2b0b4248f364dedbd'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'itsm_accelerator'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '77d9fbda48b14631a1edda78bf14787f'
                        key: {
                            document_key: 'fddab2c2f0244f9ba2d04cb9692203f4'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78220470486e4ba082730b5da8a236f0'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
                            value: 'delivery'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '782db48d53e747b7b6a28e1ab6be8cc9'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7872b81771914e46a53e461c08e0ff7a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7872e315d9664b46ad374cefd2be1b9a'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'ootb_app_check'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '787be6d2cb8f4d8e9f032178b50fc659'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'marketplace_listing_url'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '78f423530f224996ab9da05cd79e0bee'
                        key: {
                            document_key: '0ea005210de54d2fb46795b8fcd333e2'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '794eb3784e5b496386b647a8be6587d5'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7985fbffb6db4371a848bfc90b76ebe1'
                        key: {
                            document_key: '092dbf604ccc4d0ea324cda04abf030b'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '79a89e3b1610412c9310a557b4c4fe0c'
                        key: {
                            sys_security_acl: 'a93e9869770646e2b66da34891ac9fdc'
                            sys_user_role: {
                                id: 'b79ad99785fb4f66bb926312b0da7e83'
                                key: {
                                    name: 'x_prna_idea_mgmt.implementer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '79bd05c2edae4a298ddfaaa2f4713c56'
                        key: {
                            field: 'record_id'
                            id: '48a126da96064443896a0d1eff4dcd59'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7bb8eba8a11049c7a0cad0c1d42f12eb'
                        key: {
                            sys_security_acl: '86d17e20edc74529ae206b9afaee2643'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '7bd105b245e34b24b335b5f1385b442d'
                        key: {
                            dashboard: 'd9580a9faa5a4cc796300748b92a8142'
                            dashboard_tab: '3afaa1c6dbf040178207f05fc14a11d0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bd1df33956a4edb975a0ac6583cae11'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7bd400b5db034aad835f7b412781ede6'
                        key: {
                            document_key: '0a2fbcb06ed94492ba3509a673266f39'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c7d31e561f745ab9fe69cc774bde08d'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7ccee97c3e0f4e5c965037ceafd98a93'
                        key: {
                            document_key: '819fe25a9cf748e48266b48fe40c68ab'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7de482a26dcb466b95e3dd69ae419335'
                        key: {
                            document_key: 'e0bedb957b764115a7ae8743633e3d92'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7dfe42b6dc534b9ba41aba7b2723f889'
                        key: {
                            field: 'record_id'
                            id: '6f6f8dd93d454242aa38e2938bdad324'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81402c6d54534107aeace88510adb4a2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                            value: 'fail'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '827486231e514c179e3de2b5c1182767'
                        key: {
                            document_key: '05b3197a35894e7d8be2a0c3d2d036be'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '828baa76fe0340fb8e0b1c9532913a10'
                        key: {
                            document_key: '7e1b5cace541446394d95b4d81b09e5b'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '829407a68aaa42a994e897b21f156c34'
                        key: {
                            document_key: 'ba596ebb9daa415faa127b6e65822f60'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '82ae80e6b0334c27b51b51d5ce477f99'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '831f7874bd59482cb9d6aaecd7f20ba6'
                        key: {
                            document_key: '4cb8bfa7adb04194b2c710d4148efad6'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8380a79128234409a6f0fb8ed4030998'
                        key: {
                            category: 'x_prna_idea_mgmt_task'
                            prefix: 'IDTASK'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '845b3b48ec3549eaaaa02668debd6197'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'integration'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8495d26e13964ca584697da53bd108ef'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8569e150350740a4857b934baebe5a44'
                        key: {
                            document_key: '32de3b770857420cbd516c56e8495380'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '867b8e0965a5482d91004abd1a40bee0'
                        key: {
                            document_key: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '872d0bf908de49d6b85e7b1a8ff78a17'
                        key: {
                            document_key: '05b3197a35894e7d8be2a0c3d2d036be'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '878502f6f7754183965992c2c51ae1f7'
                        key: {
                            document_key: '31765e125a5a416cb83a79109a617661'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '882137aaeafa480f9219325498d874a9'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                            value: 'pass'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '88fc2d7b325d48a6bee8202bed6e7ff2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8931a73a0ef04a1fb69aa7d9f7ba1228'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a23e0226db344058904d84605f58cfa'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_effort'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8a680e587a86410e82f2da97a177c538'
                        key: {
                            role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                            contains: {
                                id: 'd44c763da63144c5ab676b22dae26d1a'
                                key: {
                                    name: 'x_prna_idea_mgmt.solution_designer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b018405f07949ee9a95c7ccafec33e5'
                        key: {
                            document_key: '819fe25a9cf748e48266b48fe40c68ab'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b4a1dcd6b6c44548b6bfeb8af97c51f'
                        key: {
                            document_key: '9e50cec1802f4ae1a8195737d7b56b45'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b4f3f2e02884074b4f65e158544f449'
                        key: {
                            document_key: '97c54fa4a0254656a23380ee3e08cd53'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8b930669f09840dc8120970fc05be8ce'
                        key: {
                            field: 'field_values'
                            id: 'ba596ebb9daa415faa127b6e65822f60'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8bdf6834a93e4c01b918a7de7e722967'
                        key: {
                            field: 'field_values'
                            id: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cd578921bba4e67a87054b6dd2230bb'
                        key: {
                            document_key: '48a126da96064443896a0d1eff4dcd59'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8cd8be1946bd473ba680333285f90e42'
                        key: {
                            document_key: 'f66c8a0707f340a4be5b6c706a0bbf13'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: '8df0413b1e514068803969db61ac6489'
                        key: {
                            dashboard: 'd9580a9faa5a4cc796300748b92a8142'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_prna_idea_mgmt.solution_designer'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8e79fdf4344b476c80d1f0125cb32cf5'
                        key: {
                            field: 'field_values'
                            id: '75aa6df1fb1f48fbac1312f267e9f949'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8e98cdd507bd4ed09f383fbfc019ce0b'
                        key: {
                            document_key: '05854634a99e4e8795fa0a62ac6d7422'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8ef27efc5657403b8d0bbc77eb08b0f1'
                        key: {
                            document_key: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f29d2e171e54277a7581f451aa12a4a'
                        key: {
                            document_key: 'da9fe55f38c041ecabdbdbe9d80bad02'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8fb8db08b9b244e194c1c4abfa02e7e1'
                        key: {
                            document_key: 'f1af6fd1358e45c1b460ce4d7cae1e94'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '90630a1f0d8c47778f76a7a47304434f'
                        key: {
                            document_key: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90e088a933394058b346c12277aef8c8'
                        key: {
                            sys_security_acl: '58881beeb6d744c3b72880017ad398da'
                            sys_user_role: {
                                id: 'd44c763da63144c5ab676b22dae26d1a'
                                key: {
                                    name: 'x_prna_idea_mgmt.solution_designer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '916117dae35e419d86b506623a6ce2fe'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9219e937af8e438bbdf84e8a1217b41a'
                        key: {
                            field: 'field_values'
                            id: '03021cbd6d9e4f13962b9dd6fcdd0960'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '92503aa55f384697842942694f28aa40'
                        key: {
                            document_key: '6ba430b9aa3e475da7cb2f3a429656a5'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '92d3443211a9473a8f48a1536a74cacd'
                        key: {
                            document_key: '52715a7f78f44a078c49683460cd67f9'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92fa6665e3f748329090bad8b50a4398'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '932f044df3a7404db5d6cc88cacdb061'
                        key: {
                            document_key: '375ac6830efa4973a6e9dd7d1c164dc4'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93640a0f1eb544d5b7bb5123d07f23ea'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '947ca3dd61734c5498e55156bdaa2c22'
                        key: {
                            document_key: 'da9fe55f38c041ecabdbdbe9d80bad02'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94f0379cc3b9484b86aac6512d19ce30'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '951cb3093a4941cbb8f76342778a69ed'
                        key: {
                            field: 'field_values'
                            id: '79403d48294b4711b88a6a47b7060254'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '95f2bc80eb3349588a8530831150a067'
                        key: {
                            document_key: '9098f19721d349998a827d76b3ab667f'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '95fc5aa643014e99ac72d6b038e4d53c'
                        key: {
                            document_key: 'e9cbfea841d94e8e9970246a2c255031'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96a2e6d6e0f4400288d342f1b50a6765'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'ootb_solution_exists'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '96aebf504ea148e39d133c994533be54'
                        key: {
                            document_key: '0a2fbcb06ed94492ba3509a673266f39'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '96c0beeaed7047c68ef8f6b3e8a334f0'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'requestor_department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '983fc3d5ab234fdba46484b6bb72f38d'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'solution_design_notes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '987e5db796f945bea7d81f7764766d1a'
                        key: {
                            document_key: 'e5b6b5445a6649459c0c38a63caa381b'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98a5ec10e016416393664ecfb78288e7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9929fba5c3d644a4b146a07a01fc52d0'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_completed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9958462db2c3432d9ced240c801d7514'
                        key: {
                            document_key: '87780a8ca929478280f6fbd378d1a9e4'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99ccc9a26a8e4e89a3086871442ef6c6'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'ootb_exists'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99db7b7711f8484a937e82bff552ee06'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9aa03666f35646868627cd877d71206e'
                        key: {
                            document_key: 'c8358c217a6e4b6fa42b4603756b888f'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9abf0fcd6c484382a54f19d9a05d84f7'
                        key: {
                            document_key: 'e2705fb350794a21aa0f634e59ae7b4a'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9b2af4f89ae74a22944528563319f27d'
                        key: {
                            document_key: '6f6f8dd93d454242aa38e2938bdad324'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9b82f8f9c6b843dd9d3a5cc7e19c96fb'
                        key: {
                            document_key: 'f1cb7ced400e444e8a6cd9df06e9e4b7'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b8d2a586c784dc29410c0f391c1d435'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c4cd8508fa34f91971c1e3d5fe30330'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                            value: 'recommend'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c81e4d34add482881063350c5af4b3a'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                            value: 'not_recommended'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9cb96dc03dca44c6ab36e54c4a4893a5'
                        key: {
                            document_key: 'e2705fb350794a21aa0f634e59ae7b4a'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d1f203842094e2a91613e0105e2066b'
                        key: {
                            document_key: 'f869b41ee39449168b9ad4aa0e04c816'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d7375661351482fae7b883805fedf87'
                        key: {
                            document_key: '5fb13c2d8da64129b484d897f44bdbb3'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9de0d4605e874e6fb33c1fa419d65e3f'
                        key: {
                            document_key: '1ae5af8b88ba43c0b41cefc91ba10b52'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f019f6f00a04072878301992e2a6834'
                        key: {
                            document_key: 'f869b41ee39449168b9ad4aa0e04c816'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f0ea1c489194ed1a14dd419fbadbcc2'
                        key: {
                            document_key: '9756cc21db66483c825fc56f3e59bc16'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f738e4ab79541f592d275ecf9b28d75'
                        key: {
                            document_key: '5de6f621bd984fd78d51a68ce1a83a63'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f900ab984f84e6087d554a44fc365a1'
                        key: {
                            document_key: 'e9cbfea841d94e8e9970246a2c255031'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0df575d06ab48a0a596db27a70ffd6d'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a10c57ea6bcb49a385896bf76aa6a110'
                        key: {
                            document_key: '2ece1fde31df41acb51fc2cdc6893bbb'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a11205eeeced468e9ee8f52d3a76fdcc'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_timeline_weeks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a18e30ae5399491d822900b7534aa44e'
                        key: {
                            sys_security_acl: '9c74213cf5454114ab19e1b076004a99'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a1d3df7cf48948309a13517f82f9e506'
                        key: {
                            document_key: '32de3b770857420cbd516c56e8495380'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3413358385c42469138dc3b147ad9bb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_benefit_value'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a3dd0ed13af44a619446fb06499b72d7'
                        key: {
                            field: 'field_values'
                            id: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a40c216f22f0438dbe4da9cf6be4d4c3'
                        key: {
                            document_key: 'd26b2b5741664e0da96285514a65f139'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4674459682f4c838279bbab5e1719d5'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a48204b711814f94b1845fd2d26a6917'
                        key: {
                            document_key: '2e7374a5b6ad42f3b9572417aa7ce554'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a491c08501774473ade37d5221afc0bd'
                        key: {
                            document_key: '375ac6830efa4973a6e9dd7d1c164dc4'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a4c33ff5fe12486aacb79e8756dfed72'
                        key: {
                            document_key: 'c750ecc6796344e0a5eb6f2183bd06e6'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a69daa86ab134253a21a5945d4be75bb'
                        key: {
                            document_key: 'b19f6a90102f4d7084ae3f4c5e94168d'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a8251c8aa31a4507b3daef676766dc9b'
                        key: {
                            document_key: '97c54fa4a0254656a23380ee3e08cd53'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a847ec9214774db58929f3aac8977e3e'
                        key: {
                            document_key: 'af29221d67cd4465bcce6475ab397e08'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a84946a60ec34864b52a6b10fad2b4bf'
                        key: {
                            document_key: 'b19f6a90102f4d7084ae3f4c5e94168d'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'a8706daa070a4d83b21bbbf4a61e5620'
                        key: {
                            sys_ui_action: 'bc7f342a5729440eb28b91aadbba3a55'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a90df1cf6d044679a04b8fcea016cbdb'
                        key: {
                            field: 'record_id'
                            id: '05b3197a35894e7d8be2a0c3d2d036be'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a93d38fd49ae417ebdafcfc98cbd4476'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'actual_end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a961a249a83f4954a65647f6fd8c14fc'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_benefit_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a97def86176e40ca8a33d9e93970d686'
                        key: {
                            field: 'field_values'
                            id: 'a4c595c6ff10486b80f1ca55ad0c20af'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9bd22fca46e4f368f7450fe8b294537'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'expected_benefit'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aa3d563ab0b2439cb7fda518e9afaf0d'
                        key: {
                            document_key: 'fa0a86293a26405990f2ad2a0718e514'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'aab60b1a185e426e93709e62148a2a0b'
                        key: {
                            dashboard: 'e66bf12030d049d4bcceec437b503846'
                            dashboard_tab: 'ac340bdfcb3b4f10a1e6e1b8fd5526cc'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'aac920c7977040f3b877872cf932097b'
                        key: {
                            document_key: '12fa1ee91faf41d3abe24b26a34138d8'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aaefd34118a34cd6abdc20491670218d'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'actual_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ab61ecec5220434da4ad2c6f0a4aafd2'
                        key: {
                            document_key: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ab650ed120254dd9a573c138ae1624fa'
                        key: {
                            field: 'record_id'
                            id: '2ece1fde31df41acb51fc2cdc6893bbb'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'abbea90be36542daba2302977e62fcf1'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'abda2000c61e48019866ee2e6c672ae3'
                        key: {
                            document_key: 'e8ffeb80a7604277ae4942334be1adf5'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'acfe0c552e294f008cfc1ac679df66b8'
                        key: {
                            document_key: 'ec2dce43b2c0423c9ce768fae45675f3'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad147a798be0486f8143a319a0498074'
                        key: {
                            document_key: '5fb13c2d8da64129b484d897f44bdbb3'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad1e9797b85f4216b0b86d90a72e301e'
                        key: {
                            document_key: '12fa1ee91faf41d3abe24b26a34138d8'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad2f89e36ed2403980a90774ba1a1b34'
                        key: {
                            document_key: '047235f54d5347afa293eee53f02b712'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ad404b32f07f402391b017abfa98ee42'
                        key: {
                            document_key: '05b3197a35894e7d8be2a0c3d2d036be'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad76d45dea9042cb87c70376d0fa80fc'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'rejection_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'adec43dec160476a8efcbcfb29437b0c'
                        key: {
                            document_key: 'c7abc7f248c54d4c84b75b1c93ba2a85'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ae9c1aad8ed940e48ee3e81d37bb43a1'
                        key: {
                            document_key: '2b8448ee6a47418b8be8f09f4f0f0add'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'af024e76fee14b2895260965b6f63d91'
                        key: {
                            document_key: '9756cc21db66483c825fc56f3e59bc16'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'af20a273db184c0ba0d9b21fa5ba612f'
                        key: {
                            document_key: 'da9fe55f38c041ecabdbdbe9d80bad02'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: 'af6c249140cd46ef8eb4aadb16886ddb'
                        key: {
                            dashboard: '8e91159f3e074d418ac40bab91d7dd55'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_prna_idea_mgmt.approver'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'afe2704e6138483ebdbfcda8bc8efffd'
                        key: {
                            sys_security_acl: '0eba389f8b3d4c11b40a3dfd8e0f219b'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'afe65277e3914a8eb0d526ba9f34c4a6'
                        key: {
                            document_key: 'c8358c217a6e4b6fa42b4603756b888f'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b01199e8a03e4cdd9bb9b4c27b348801'
                        key: {
                            document_key: 'd4fbd108644a42dfbf6cd4a7d7da93ea'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b046d5f997394228b2bd4fb2e6b9201b'
                        key: {
                            field: 'record_id'
                            id: 'fddab2c2f0244f9ba2d04cb9692203f4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b0bf7609cf6b4bafb0c273c7081db06c'
                        key: {
                            document_key: '2e8e0e4ee554495090ab42c6df2bbb95'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b2bab1d9e11e49c983791b302560538f'
                        key: {
                            document_key: '9371567c7e194d4a919b230f6770425c'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b2c30e3849ea4052955b97193f5d4b46'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b30d2698a2f54e3dbc5d675bcc50d7e7'
                        key: {
                            document_key: '5bab9c76ffe843e7a9f7b2d1720a13e3'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b3290ab3a31d4756a20191086c222432'
                        key: {
                            document_key: '7e1b5cace541446394d95b4d81b09e5b'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b3d5145f33d84b82baa973c90fb860a1'
                        key: {
                            sys_security_acl: '109a79fff6ed47f693fbbc4b3e08f961'
                            sys_user_role: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b3fd575e18ee40c185555a3327ba8ebc'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'itom_observability'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b454d0f28fa143099bc0268703ebb8be'
                        key: {
                            document_key: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b46ec488c1d24fc8b05886b3efaeeb3d'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                            value: 'not_run'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b478eced74074d72a4bc74184e3a3df4'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b4b3e59f3aaf413d96c30972e5d20993'
                        key: {
                            document_key: '2e8e0e4ee554495090ab42c6df2bbb95'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: 'b528209ea8c74dd0a9ead6954e810c31'
                        key: {
                            dashboard: 'e66bf12030d049d4bcceec437b503846'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_prna_idea_mgmt.requestor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b57b64f57177417280e0c49d297952b7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b5976ef5c23d471792d2579e265b9a64'
                        key: {
                            document_key: '5fb13c2d8da64129b484d897f44bdbb3'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5d7f42d105a4af4a488566c22bd2913'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_effort'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b70f50d3ec3e4c88947d1cc6310f2a80'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'business_problem'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b748f98173794c5aa52e1f054e96a166'
                        key: {
                            document_key: '31765e125a5a416cb83a79109a617661'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b777df928d254639bb728bf0b8e9b972'
                        key: {
                            document_key: '375ac6830efa4973a6e9dd7d1c164dc4'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b79ad99785fb4f66bb926312b0da7e83'
                        key: {
                            name: 'x_prna_idea_mgmt.implementer'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b9f454fbd21d4c1e96033bf0b03ad9c2'
                        key: {
                            document_key: '2df0f6b70c4e4fa1a125177f56303020'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ba0b2c25c68b47d6adaf0fcff2dfe02f'
                        key: {
                            document_key: '32de3b770857420cbd516c56e8495380'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba3ffdafa4ab407f8a65bb3ad1aa7b3c'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'bad5f478bb974fcc83711c085eb5e565'
                        key: {
                            dashboard: 'd9580a9faa5a4cc796300748b92a8142'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bae729cabf254653baa8f3567d900462'
                        key: {
                            document_key: 'f869b41ee39449168b9ad4aa0e04c816'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc4cbf8562f94d568cfb6f814760fccb'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'requestor_department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc8339afce2c45808c68eac4705ff3db'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd63aa6f2b25460ab0e490d98ec82dfd'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'servicenow_liaison_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd73cf19dc5a4b00a019b739c8e408a7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bf4de3d816bc40cc9e07cbf35d297933'
                        key: {
                            field: 'record_id'
                            id: 'b19f6a90102f4d7084ae3f4c5e94168d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf7d0f130dd945739879f34a411b4730'
                        key: {
                            document_key: '2ece1fde31df41acb51fc2cdc6893bbb'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0193f9996f54a1bbf3b6b3e8ccc1336'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_completed_date'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c0700d6c27f7449b8c234f727ca47cd4'
                        key: {
                            document_key: 'ed0a4984b1a547cbbc369e9c90576dd2'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2186c9b1d4743ef9d2b3c015ef2920b'
                        key: {
                            document_key: 'fddab2c2f0244f9ba2d04cb9692203f4'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c2c0fbf82110426785cbda3a48b2556a'
                        key: {
                            document_key: 'e8ffeb80a7604277ae4942334be1adf5'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c442a600ad4243398d59f8dff510f82e'
                        key: {
                            document_key: 'ed0a4984b1a547cbbc369e9c90576dd2'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c624bf9d4c874056bd80a2af1bbc0dbc'
                        key: {
                            field: 'record_id'
                            id: '6ba430b9aa3e475da7cb2f3a429656a5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c669b79343514a0d9faf8d96780a9e18'
                        key: {
                            document_key: '79403d48294b4711b88a6a47b7060254'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c735fbcf382a43b5bf921ff665af3084'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'percent_complete'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c82a9fe23f424dd59c2ce0b48b7e4894'
                        key: {
                            document_key: '6ba430b9aa3e475da7cb2f3a429656a5'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: 'c86494418a7e44538fcf88195ebe2b06'
                        key: {
                            dashboard: '74776b6fbf8743adb4a8324cde61107d'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_prna_idea_mgmt.implementer'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c86786d771854d86a80c1cc4c25bcda3'
                        key: {
                            document_key: '7813d60e57de4a45803e1273c724c110'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c8c32ca0c5604df6aece967f1be3be89'
                        key: {
                            document_key: 'c8358c217a6e4b6fa42b4603756b888f'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cad367eab48a43e99a59a52f6cb2f824'
                        key: {
                            document_key: '819fe25a9cf748e48266b48fe40c68ab'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cadc7e34039a42e3872019f78d47191c'
                        key: {
                            document_key: '047235f54d5347afa293eee53f02b712'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb24747dbb7a4284b62839a98f573954'
                        key: {
                            document_key: '05b3197a35894e7d8be2a0c3d2d036be'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cb5ad28da7ba408b8c3ef610bbce4261'
                        key: {
                            field: 'field_values'
                            id: '52715a7f78f44a078c49683460cd67f9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cb8c518019244b0b8e85fdc81d135210'
                        key: {
                            document_key: '9371567c7e194d4a919b230f6770425c'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cbb710b2bbcc42bab22e806ec6a24868'
                        key: {
                            field: 'record_id'
                            id: '87780a8ca929478280f6fbd378d1a9e4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cbbd50542b0647aab37c0d725ca296b0'
                        key: {
                            document_key: '79403d48294b4711b88a6a47b7060254'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cbcd130a5d6044b99ac419122894cf34'
                        key: {
                            document_key: 'd36af966c3ae441689c50f6194d266fe'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cc28424d76984ccc8e8b605b2f8eb7e2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cc56eb2b21204f259bb30fbbea35653e'
                        key: {
                            document_key: '87780a8ca929478280f6fbd378d1a9e4'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce38ecf3a38f4fcd89e25db74a36ce89'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ceb9fd5d572a4b209574bef91d6abf63'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'ootb_solution_exists'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cf996409a8eb41c28b8eee25d595bbe2'
                        key: {
                            document_key: '03021cbd6d9e4f13962b9dd6fcdd0960'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd09833483ead42b0b46fc0b37cd81add'
                        key: {
                            document_key: 'b19f6a90102f4d7084ae3f4c5e94168d'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd0c299f4a38b4f96a47b916bed14ed5a'
                        key: {
                            document_key: '375ac6830efa4973a6e9dd7d1c164dc4'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd0edd8258e1c4eabbefba9812a4c8d46'
                        key: {
                            document_key: '6f6f8dd93d454242aa38e2938bdad324'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd15fa7c2fad64df1b45e16c299087310'
                        key: {
                            document_key: 'eb9a4c51e1af47d7bd1912a760bb20ad'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd1732470e795413baaa8986000305b70'
                        key: {
                            document_key: '8ac02286aec448dca4e24c496019d8fa'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd1e954f9d27c4a3abebb7075ea0dfc78'
                        key: {
                            document_key: '8a333c5712214ef8bd35847df3f5cae2'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd2478df27bfd47c4a55398e5db322dbb'
                        key: {
                            document_key: 'e5b6b5445a6649459c0c38a63caa381b'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd24d57b0567b481a8380755b2acf7c41'
                        key: {
                            sys_security_acl: '7403c65e6de24e24adbe96f1cffc46ed'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd2dbf9a61d1d4657a5936389369ff754'
                        key: {
                            document_key: 'c750ecc6796344e0a5eb6f2183bd06e6'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd2e3e051b00545958cca7ce70f3920cf'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd2fa4017def9480ba5d696481a515123'
                        key: {
                            document_key: 'a4c595c6ff10486b80f1ca55ad0c20af'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'd3a6edf1cde847308795e719016d4264'
                        key: {
                            dashboard: '74776b6fbf8743adb4a8324cde61107d'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd3f4bba32e7940a294507561141ee207'
                        key: {
                            field: 'record_id'
                            id: '375ac6830efa4973a6e9dd7d1c164dc4'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd44c763da63144c5ab676b22dae26d1a'
                        key: {
                            name: 'x_prna_idea_mgmt.solution_designer'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd4ed70ea00094d1fa90d7fef89053343'
                        key: {
                            question: {
                                id: 'e894e143c0dc4c7b90529ae2acf91b68'
                                key: {
                                    cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                                    variable_set: 'NULL'
                                    name: 'category'
                                }
                            }
                            value: 'portal_ux'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd534f0daa9b84a94bdb843706db29359'
                        key: {
                            document_key: '8e0d1465df724a3eba9e084fefb09733'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd6de095737b745a29cdfbcd989d11dcf'
                        key: {
                            document_key: 'e9cbfea841d94e8e9970246a2c255031'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd70c4abf61c54dee989f66435cdc1ebd'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'expected_benefit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7763f2f4ff048679700b266eefb6d45'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_effort'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd7d485a337ee45778f702ddb6b70b3d1'
                        key: {
                            document_key: '31765e125a5a416cb83a79109a617661'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7de6c82717c499294b72072f7c2b2db'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            value: 'blocked'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd8dafbb069c54b849f9f65ee93615261'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                            value: 'not_submitted'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd8f01af0535d4556bea8ae24242efbc0'
                        key: {
                            document_key: 'eb6a78b6fbc54b2ab7e0d7ecfeb3b05e'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd9e67ab58a7840f78def847c961e5193'
                        key: {
                            document_key: '48a126da96064443896a0d1eff4dcd59'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'da66cd696bf645d9b9e0c5724a202483'
                        key: {
                            document_key: 'e0bedb957b764115a7ae8743633e3d92'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'da9ef427527f471eaca53e34aab4335e'
                        key: {
                            sys_security_acl: 'c21a2ec941774d688581fafb60530ba9'
                            sys_user_role: {
                                id: 'd44c763da63144c5ab676b22dae26d1a'
                                key: {
                                    name: 'x_prna_idea_mgmt.solution_designer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dafc8e8ff02b4e919f2fe5a3545ee271'
                        key: {
                            sys_security_acl: '58881beeb6d744c3b72880017ad398da'
                            sys_user_role: {
                                id: 'b79ad99785fb4f66bb926312b0da7e83'
                                key: {
                                    name: 'x_prna_idea_mgmt.implementer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dafceac8926447ed85481952882a315d'
                        key: {
                            document_key: 'e2705fb350794a21aa0f634e59ae7b4a'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db1bb775e0074350a5341cae03bb3ec6'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
                            value: 'assessment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db4c5a8f93de4387a4bfc2d9fc6ad3eb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dc3f4e76143c4ef0b374a6b8284abbbd'
                        key: {
                            document_key: '2b252aabb09d41959a28c930836bbeea'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dca7405c287c43eaa476779edc3e276b'
                        key: {
                            document_key: '2e7374a5b6ad42f3b9572417aa7ce554'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dd3d6682b4a449fd9dc64fc44c6f35d4'
                        key: {
                            field: 'record_id'
                            id: 'c750ecc6796344e0a5eb6f2183bd06e6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd4d6c241f0c41179bf765e13d9092fc'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            value: 'not_started'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dd77777963ea452a8f89e9dbc8a387be'
                        key: {
                            document_key: '1ae5af8b88ba43c0b41cefc91ba10b52'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddc2686f4e094928b21e3d5efce98520'
                        key: {
                            document_key: '1ae5af8b88ba43c0b41cefc91ba10b52'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddc57dc27ce14c219b8ea8b08a6b7d65'
                        key: {
                            document_key: '79403d48294b4711b88a6a47b7060254'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ddc666c8452b47e39063c6dca948dceb'
                        key: {
                            document_key: '2e7374a5b6ad42f3b9572417aa7ce554'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ddc94dc5641042b3b1f07d719448eefb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                            value: 'pass'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'de0933c0eaff41d894f406b562c350e6'
                        key: {
                            category: 'x_prna_idea_mgmt_idea'
                            prefix: 'IDEA'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'df27a8b4c4c0495881bbf623c11f0e9c'
                        key: {
                            document_key: '2ece1fde31df41acb51fc2cdc6893bbb'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'df58aaddb7664a4db7d0ff61836ef432'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'dfffd9affb0f412f8dc23c6b5ee86c1f'
                        key: {
                            role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                            contains: {
                                id: '27015ba27ed54bbb9afe878d64d42bde'
                                key: {
                                    name: 'x_prna_idea_mgmt.requestor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e00ee9e0f92c4499902a3251a9d60efa'
                        key: {
                            field: 'record_id'
                            id: '8ac02286aec448dca4e24c496019d8fa'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e08f5ddf6e894339875e0772bc33f9cf'
                        key: {
                            document_key: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e0bfc3d8e93c471f88a5bfb10d66c8cd'
                        key: {
                            document_key: 'da9fe55f38c041ecabdbdbe9d80bad02'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e141c056345e47c4bdab0b3f5c5a30d3'
                        key: {
                            document_key: '5fb13c2d8da64129b484d897f44bdbb3'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e17feca74e684e9db52af1dfa1bb922d'
                        key: {
                            document_key: 'd505145a0dcc451ebc76c7b46b8879a7'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e197fff746534988a64644ad3c0fce59'
                        key: {
                            document_key: 'f66c8a0707f340a4be5b6c706a0bbf13'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e19b62896a574dc5a0b54c180948f2ad'
                        key: {
                            sys_security_acl: 'b0a0613b96dc43c984d398473ab20146'
                            sys_user_role: {
                                id: 'b79ad99785fb4f66bb926312b0da7e83'
                                key: {
                                    name: 'x_prna_idea_mgmt.implementer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e2881c5334fe4403810b8ce30dc15f3b'
                        key: {
                            document_key: '2df0f6b70c4e4fa1a125177f56303020'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e320cfcacf91467b916ba18bcc721bd9'
                        key: {
                            document_key: 'c7abc7f248c54d4c84b75b1c93ba2a85'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e41220d0a5af4910913b53b9a644d2b3'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e42e772efd4f46e99d6c150d4d87c8b2'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e448294150cd4632b12783fa7df77353'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                            value: 'fail'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e47cb0d7fb544b8fb9f5d4f3ce2061e6'
                        key: {
                            field: 'record_id'
                            id: '2b252aabb09d41959a28c930836bbeea'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5d2d260eeae400d91874f74c34b5e6f'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'build_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e5d5b87ae9994a22902125cba79ad53b'
                        key: {
                            document_key: 'ba596ebb9daa415faa127b6e65822f60'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e65d17910e9447e993f2e3a6b1485a96'
                        key: {
                            sys_security_acl: '0c47a34a9994420389661b214370984b'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e67e80fb469a44a7bd0bcd94ef6b8b6d'
                        key: {
                            document_key: '9e50cec1802f4ae1a8195737d7b56b45'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e69ea310d623490286a598aa83cb5cd5'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e727b1b360bd44d786392a415d53e9e9'
                        key: {
                            document_key: 'f1086f88a77f4423993d988fad395ee4'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7fcbb130ec044d39e35d094697ac4d9'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            value: 'certified'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e81cba6c1cd74002990c48313bc6867c'
                        key: {
                            document_key: 'f1af6fd1358e45c1b460ce4d7cae1e94'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e87e440893ec428facb42ceb65881179'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'marketplace_listing_url'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e894e143c0dc4c7b90529ae2acf91b68'
                        key: {
                            cat_item: '015fb2cb6c8444a68caad530ff34faf4'
                            variable_set: 'NULL'
                            name: 'category'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e8aa217a8d6048aa93fc706c2f1b8ed9'
                        key: {
                            document_key: '8a333c5712214ef8bd35847df3f5cae2'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8b0fc5b624242d1a56d298cf5fea89f'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'csm_accelerator'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e9efc949d24e422e8d94428c30aaf9bf'
                        key: {
                            field: 'field_values'
                            id: '5de6f621bd984fd78d51a68ce1a83a63'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eabd1872d8b440288115d071d1de48dc'
                        key: {
                            document_key: '9e50cec1802f4ae1a8195737d7b56b45'
                            variable: '501c8f535320220002c6435723dc34da'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eac1f75499834983baec7707e0104b7f'
                        key: {
                            document_key: '75aa6df1fb1f48fbac1312f267e9f949'
                            variable: 'e6e3c7535320220002c6435723dc3496'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ecc7f33e54f04d1a92c71a225e1ce53f'
                        key: {
                            document_key: 'e8ffeb80a7604277ae4942334be1adf5'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ecf881d032074c1abdfa404a798b791c'
                        key: {
                            role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                            contains: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eda7620a463a447ea040187c3da13f28'
                        key: {
                            document_key: '2e0f93620e154fc69a88e771b60bc5a1'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eece344799b54ed787a4333416aa0f90'
                        key: {
                            document_key: 'c8358c217a6e4b6fa42b4603756b888f'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eee84d4487544d7ba418b05ce5ce5093'
                        key: {
                            document_key: 'f86c55bb214d49268e712b916b5b55be'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef5db1a5393544c79725bf3e2757b489'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f08f3fb3eb534c5ab7d4ce7511b1c5be'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_benefit_value'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0af073024bd4de79b68045d20c05aa6'
                        key: {
                            document_key: 'e76da26d9e4747a49d1e47461af4a501'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0ba0d102fa54a87932d946600cf770d'
                        key: {
                            document_key: 'ed0a4984b1a547cbbc369e9c90576dd2'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f104d7d7b7ef4b559968881857770f47'
                        key: {
                            document_key: '75aa6df1fb1f48fbac1312f267e9f949'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f16804731eb44e4cbcc5990465272441'
                        key: {
                            document_key: 'e2705fb350794a21aa0f634e59ae7b4a'
                            variable: 'dd54cf535320220002c6435723dc34fd'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f1745edc5dce48368dbad8cee7257e31'
                        key: {
                            document_key: '047235f54d5347afa293eee53f02b712'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f1eab6a12cd449e1adb69448d68d4afe'
                        key: {
                            field: 'record_id'
                            id: '2df0f6b70c4e4fa1a125177f56303020'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f247bd8bf9034628a0f568e584315a32'
                        key: {
                            document_key: 'f86c55bb214d49268e712b916b5b55be'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f24c3193fb5b4563b0c3dbd25425c70e'
                        key: {
                            document_key: '87780a8ca929478280f6fbd378d1a9e4'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3ae6c14a89f4fd2a12d6f01d6566bd1'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f42095fb611f4154a819dcfb24a2d9c0'
                        key: {
                            document_key: '8ac02286aec448dca4e24c496019d8fa'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f44c455f120944e4bbf37efb697ab1d7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f4c88008d2a24ccdbbfc37db3745d8f7'
                        key: {
                            field: 'record_id'
                            id: '9756cc21db66483c825fc56f3e59bc16'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f565e51d446c44b0bda575a94991dfad'
                        key: {
                            document_key: '2ece1fde31df41acb51fc2cdc6893bbb'
                            variable: 'bc4c43935320220002c6435723dc34a2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f59cebf3d9364cf98a5a21664a6f0dfe'
                        key: {
                            document_key: 'dd8cdb08bcec4b9f98d6df14eb290cb6'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f629485aab3b4379a50b536cfada6f2b'
                        key: {
                            document_key: '2e7374a5b6ad42f3b9572417aa7ce554'
                            variable: '334b7bb7675003007ba405225685ef72'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f62d4d89c69c42aab9c3b83362d9b994'
                        key: {
                            document_key: 'ba596ebb9daa415faa127b6e65822f60'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6688b65a3dc48abac99ebe86c7eb3d6'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f6f2d2b848ae49128af47d2409285c73'
                        key: {
                            document_key: '52715a7f78f44a078c49683460cd67f9'
                            variable: 'b86c0427531000109e02ddeeff7b1227'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f6f95044d7e445888507ea5a367547d4'
                        key: {
                            sys_security_acl: 'b0a0613b96dc43c984d398473ab20146'
                            sys_user_role: {
                                id: '29568839c4874ad7833ed18b7a448cbf'
                                key: {
                                    name: 'x_prna_idea_mgmt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f7657d0164a04c78b9590acda986b187'
                        key: {
                            document_key: '6f6f8dd93d454242aa38e2938bdad324'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f7acfbdaf3434865ba99d42f7fd8c535'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f7ad73a42aea47e6bb6420b885f26f86'
                        key: {
                            document_key: '9e4e7059097d439c83d7ac5f0400e230'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f803a1f4f5014173a9741df9c61d29c4'
                        key: {
                            field: 'record_id'
                            id: 'e9cbfea841d94e8e9970246a2c255031'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f804122873224b25aebd9c1889c9f7b0'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'category'
                            value: 'portal_ux'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f8145d5d3b2e401cbfc96b9a77279d71'
                        key: {
                            document_key: '31765e125a5a416cb83a79109a617661'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f81ae734685d4b14936ab6e26069d24b'
                        key: {
                            document_key: '6ba430b9aa3e475da7cb2f3a429656a5'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f92024f9e86544c1a5eac768c842b200'
                        key: {
                            field: 'record_id'
                            id: '092dbf604ccc4d0ea324cda04abf030b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f94e1617480b42baa0b6ba3b50bfc818'
                        key: {
                            document_key: '52715a7f78f44a078c49683460cd67f9'
                            variable: '915990ab531000109e02ddeeff7b12f8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f9ee0c2f874e4b4a8f67b25e8259d3ee'
                        key: {
                            document_key: '9371567c7e194d4a919b230f6770425c'
                            variable: '46dbcb535320220002c6435723dc3409'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fb11b9f5c17047488975e03767255b96'
                        key: {
                            field: 'field_values'
                            id: 'f86c55bb214d49268e712b916b5b55be'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fb3695b8d3224eb49fd7fda92af70e23'
                        key: {
                            document_key: '52715a7f78f44a078c49683460cd67f9'
                            variable: '78b8d86b531000109e02ddeeff7b12f3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbf19d2ed7984828a18b5a44efa12bbf'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'target_start_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fc70074e34ee4586a904ec7d8cb569d7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fcd3d124dff44f3da54cde748744b1ab'
                        key: {
                            document_key: '32de3b770857420cbd516c56e8495380'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fd39493a88d643629cdafc22ff85a320'
                        key: {
                            document_key: 'd505145a0dcc451ebc76c7b46b8879a7'
                            variable: '9024a37f671003007ba405225685efe5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fd5b86a4e277455382ca1df2cf8c59f1'
                        key: {
                            document_key: '7e1b5cace541446394d95b4d81b09e5b'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fd6cc5cb05ed4b619fc50d554697d741'
                        key: {
                            document_key: 'f86c55bb214d49268e712b916b5b55be'
                            variable: '02fb0027531000109e02ddeeff7b120b'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fe1c104e705c4d408dc9375984b9d597'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fe39a7403d204df389eabf95f454a804'
                        key: {
                            document_key: 'd36af966c3ae441689c50f6194d266fe'
                            variable: '53fb0f535320220002c6435723dc34ec'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fe83844ab2174447a82cb8b21d812eba'
                        key: {
                            document_key: 'cf75798513a7428797251d53598aa03b'
                            variable: '90144b535320220002c6435723dc3488'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fedd12647bff46a5a46f3b583040613e'
                        key: {
                            sys_security_acl: '4b6ff99d2aa74492bfd63155bbd5d05a'
                            sys_user_role: {
                                id: '15909bd12f4a401aa7467e82dc308375'
                                key: {
                                    name: 'x_prna_idea_mgmt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ff184c43b3264add8392908092ca9285'
                        key: {
                            document_key: 'fb30a1b18b504368a15a96783e12fa18'
                            variable: '586e2c4253e0220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ff46c764c0144987a258a1365d8f2073'
                        key: {
                            field: 'record_id'
                            id: '9e50cec1802f4ae1a8195737d7b56b45'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ff67d1e7ff3a4b0f9fae0862e99db8d6'
                        key: {
                            document_key: '2b252aabb09d41959a28c930836bbeea'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ffe8411f0ca44438b9d15071db3fe153'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
                            value: 'certified'
                        }
                    },
                ]
            }
        }
    }
}

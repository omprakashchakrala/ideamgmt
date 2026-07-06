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
                    delivery_team_group: {
                        table: 'sys_user_group'
                        id: '998b7cc507a349489d8ecd57668cb17e'
                    }
                    delivery_team_role_grant: {
                        table: 'sys_group_has_role'
                        id: 'e79d115d41454fd6b81447fbbee00eb5'
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
                    package_json: {
                        table: 'sys_module'
                        id: '3c72f6b106e147fc8fa0601486aa0458'
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
                        table: 'sys_documentation'
                        id: '06a672e4d2b0454aa2af5ec119c06042'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'actual_end_date'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '09e753fe6216495abf85a341330460d8'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'estimated_timeline_weeks'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '0b6a9c16cc7048099ce518bbfb8fc184'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'NULL'
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
                        table: 'sys_choice'
                        id: '0da06a495df54a67ac972ef15d36c256'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
                            value: 'rejected'
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
                        table: 'sys_documentation'
                        id: '121ecd0debf84d3a87ee239e53d5edcb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'ootb_notes'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '16e9069716894544a6e3190487286501'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
                            value: 'blocked'
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
                        table: 'sys_documentation'
                        id: '2160cc1fa0c24bc184c31d7c55ff7215'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'target_end_date'
                            language: 'en'
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
                        table: 'sys_choice_set'
                        id: '28152b453a054ac68a2aeb922b77aa63'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
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
                        table: 'sys_documentation'
                        id: '2b36a9edcba7490ea9b1708f2b12fba5'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '2e0071740f8544ce99ad2db21efc925b'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_comments'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '329464f4b42345c88a661db891f14a7f'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'defect_count'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '35c451f9a4be4ea591f5c18c06fb0900'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'testing'
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
                        table: 'sys_dictionary'
                        id: '3b0d09b435dc4ab48919b442747fdfa0'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'build_notes'
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
                        table: 'sys_documentation'
                        id: '43af4947ac224d8c9eb14b86d245a501'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'sequence'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '465fb2a1a65e49988b5c9a184f1d9693'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'cost_benefit_analysis'
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
                        table: 'ua_table_licensing_config'
                        id: '48c551dd9fe14b348ef3a9de60c543c3'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
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
                        table: 'sys_documentation'
                        id: '4cadd782098140a6b2664183d0064682'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '503ac4566aca4016bbd37afde9d15c6c'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_comments'
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
                        table: 'sys_dictionary'
                        id: '574eb6ac01464e3096cd63c042f02c11'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
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
                        table: 'sys_dictionary'
                        id: '5a81347ed42144aa95b913e43cf0e5b6'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'deployment_notes'
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
                        table: 'sys_choice'
                        id: '65b9ba95a15e4406b8b9d914a55d632f'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            value: 'rejected'
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
                        table: 'sys_documentation'
                        id: '66f52e463ba64ec7bbab001f9d6ed4b3'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'deployment_notes'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '6cf591900cc04021a31d55be9caf5285'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
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
                        table: 'sys_choice'
                        id: '6fdb2268fa094ef3a4705c614e2e3066'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
                            value: 'solution_design_effort_estimation'
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
                        table: 'sys_documentation'
                        id: '794eb3784e5b496386b647a8be6587d5'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_notes'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '7bd1df33956a4edb975a0ac6583cae11'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '81402c6d54534107aeace88510adb4a2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'unit_test_result'
                            value: 'fail'
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
                        table: 'sys_dictionary'
                        id: '92fa6665e3f748329090bad8b50a4398'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'sub_state'
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
                        table: 'sys_choice'
                        id: '94f0379cc3b9484b86aac6512d19ce30'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '4'
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
                        table: 'sys_dictionary'
                        id: 'a0df575d06ab48a0a596db27a70ffd6d'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'test_result'
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
                        table: 'sys_dictionary'
                        id: 'a3413358385c42469138dc3b147ad9bb'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'estimated_benefit_value'
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
                        table: 'sys_dictionary'
                        id: 'a9bd22fca46e4f368f7450fe8b294537'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'expected_benefit'
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
                        table: 'sys_choice_set'
                        id: 'abbea90be36542daba2302977e62fcf1'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
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
                        table: 'sys_choice_set'
                        id: 'b2c30e3849ea4052955b97193f5d4b46'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
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
                        table: 'sys_choice'
                        id: 'b57b64f57177417280e0c49d297952b7'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '6'
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
                        table: 'sys_user_role'
                        id: 'b79ad99785fb4f66bb926312b0da7e83'
                        key: {
                            name: 'x_prna_idea_mgmt.implementer'
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
                        table: 'sys_dictionary'
                        id: 'c0193f9996f54a1bbf3b6b3e8ccc1336'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_completed_date'
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
                        table: 'sys_choice_set'
                        id: 'cc28424d76984ccc8e8b605b2f8eb7e2'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'certification_status'
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
                        table: 'ua_table_licensing_config'
                        id: 'd2e3e051b00545958cca7ce70f3920cf'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
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
                        table: 'sys_choice'
                        id: 'dd4d6c241f0c41179bf765e13d9092fc'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'implementation_status'
                            value: 'not_started'
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
                        table: 'sys_documentation'
                        id: 'e5d2d260eeae400d91874f74c34b5e6f'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'build_notes'
                            language: 'en'
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
                        table: 'sys_choice_set'
                        id: 'e69ea310d623490286a598aa83cb5cd5'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'assessment_recommendation'
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
                        table: 'sys_dictionary'
                        id: 'e87e440893ec428facb42ceb65881179'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'marketplace_listing_url'
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
                        table: 'sys_choice'
                        id: 'f3ae6c14a89f4fd2a12d6f01d6566bd1'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '8'
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
                        table: 'sys_choice'
                        id: 'f6688b65a3dc48abac99ebe86c7eb3d6'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '1'
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
                        table: 'sys_choice'
                        id: 'f7acfbdaf3434865ba99d42f7fd8c535'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'state'
                            value: '3'
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
                        table: 'sys_db_object'
                        id: 'fe1c104e705c4d408dc9375984b9d597'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
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

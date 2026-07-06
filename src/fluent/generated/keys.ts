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
                    package_json: {
                        table: 'sys_module'
                        id: '3c72f6b106e147fc8fa0601486aa0458'
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
                        table: 'sys_dictionary'
                        id: '1a61a9900c1c41f99130191180ccb47b'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'task_type'
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
                        table: 'sys_choice_set'
                        id: '28152b453a054ac68a2aeb922b77aa63'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'phase'
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
                        table: 'sys_documentation'
                        id: '329464f4b42345c88a661db891f14a7f'
                        key: {
                            name: 'x_prna_idea_mgmt_task'
                            element: 'defect_count'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '65b9ba95a15e4406b8b9d914a55d632f'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'approval_decision'
                            value: 'rejected'
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
                        table: 'sys_choice_set'
                        id: 'b2c30e3849ea4052955b97193f5d4b46'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
                            element: 'certification_status'
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
                        table: 'ua_table_licensing_config'
                        id: 'd2e3e051b00545958cca7ce70f3920cf'
                        key: {
                            name: 'x_prna_idea_mgmt_idea'
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

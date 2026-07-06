import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['flow_create_idea_delivery_tasks'],
        name: 'Create Idea Delivery Tasks',
        description: 'Creates the three delivery tasks when an Idea is Selected',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow_create_idea_delivery_tasks_trigger'] },
        {
            table: 'x_prna_idea_mgmt_idea',
            condition: "state=5",
            run_flow_in: 'background',
            trigger_strategy: 'unique_changes',
        }
    ),
    (params) => {
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_build_ut_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'build_ut',
                    phase: 'delivery',
                    sequence: 4,
                    state: '1', // Open
                }),
            }
        )

        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_testing_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'testing',
                    phase: 'delivery',
                    sequence: 5,
                    state: '-5', // Pending
                }),
            }
        )

        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_deploy_marketplace_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'deploy_marketplace',
                    phase: 'delivery',
                    sequence: 6,
                    state: '-5', // Pending
                }),
            }
        )
    }
)

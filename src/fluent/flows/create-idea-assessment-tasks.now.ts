import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['flow_create_idea_assessment_tasks'],
        name: 'Create Idea Assessment Tasks',
        description: 'Creates the three Impact Assessment tasks when an Idea enters IA In Progress',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow_create_idea_assessment_tasks_trigger'] },
        {
            table: 'x_prna_idea_mgmt_idea',
            condition: "state=2",
            run_flow_in: 'background',
            trigger_strategy: 'unique_changes',
        }
    ),
    (params) => {
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_ootb_app_check_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'ootb_app_check',
                    phase: 'assessment',
                    sequence: 1,
                    state: '1', // Open
                }),
            }
        )

        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_solution_design_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'solution_design_effort_estimation',
                    phase: 'assessment',
                    sequence: 2,
                    state: '-5', // Pending
                }),
            }
        )

        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['create_cost_benefit_task'] },
            {
                table_name: 'x_prna_idea_mgmt_task',
                values: TemplateValue({
                    parent: wfa.dataPill(params.trigger.current, 'reference'),
                    task_type: 'cost_benefit_analysis',
                    phase: 'assessment',
                    sequence: 3,
                    state: '-5', // Pending
                }),
            }
        )
    }
)

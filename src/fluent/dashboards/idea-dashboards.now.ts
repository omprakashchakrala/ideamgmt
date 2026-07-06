import { Dashboard } from '@servicenow/sdk/core'

Dashboard({
    $id: Now.ID['dashboard_requestor'],
    name: 'My Ideas',
    permissions: [
        {
            $id: Now.ID['dashboard_requestor_perm'],
            role: 'x_prna_idea_mgmt.requestor',
            canRead: true,
        },
    ],
    tabs: [
        {
            $id: Now.ID['dashboard_requestor_tab'],
            name: 'Overview',
            widgets: [
                {
                    $id: Now.ID['dashboard_requestor_widget_count'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'My Open Ideas',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: 'active=true',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['dashboard_requestor_widget_by_state'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'My Ideas by State',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: '',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'state' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 24, y: 0 },
                },
            ],
        },
    ],
    visibilities: [],
})

Dashboard({
    $id: Now.ID['dashboard_solutions_team'],
    name: 'Solutions Team Dashboard',
    permissions: [
        {
            $id: Now.ID['dashboard_solutions_team_perm'],
            role: 'x_prna_idea_mgmt.solution_designer',
            canRead: true,
        },
    ],
    tabs: [
        {
            $id: Now.ID['dashboard_solutions_team_tab'],
            name: 'Assessment Queue',
            widgets: [
                {
                    $id: Now.ID['dashboard_solutions_team_widget_open'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Open Assessment Tasks',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea Delivery Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_task',
                                filterQuery: 'phase=assessment^stateIN-5,1,2',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['dashboard_solutions_team_widget_by_type'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Assessment Tasks by Type',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea Delivery Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_task',
                                filterQuery: 'phase=assessment',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'task_type' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 24, y: 0 },
                },
            ],
        },
    ],
    visibilities: [],
})

Dashboard({
    $id: Now.ID['dashboard_leadership'],
    name: 'Leadership Dashboard',
    permissions: [
        {
            $id: Now.ID['dashboard_leadership_perm'],
            role: 'x_prna_idea_mgmt.approver',
            canRead: true,
        },
    ],
    tabs: [
        {
            $id: Now.ID['dashboard_leadership_tab'],
            name: 'Approval Queue',
            widgets: [
                {
                    $id: Now.ID['dashboard_leadership_widget_pending'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Ideas Pending Approval',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: 'state=3^sub_state=pending_approval',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['dashboard_leadership_widget_by_category'],
                    component: 'donut',
                    componentProps: {
                        headerTitle: 'Ideas by Category',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: '',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'category' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 24, y: 0 },
                },
            ],
        },
    ],
    visibilities: [],
})

Dashboard({
    $id: Now.ID['dashboard_delivery_team'],
    name: 'Delivery Team Dashboard',
    permissions: [
        {
            $id: Now.ID['dashboard_delivery_team_perm'],
            role: 'x_prna_idea_mgmt.implementer',
            canRead: true,
        },
    ],
    tabs: [
        {
            $id: Now.ID['dashboard_delivery_team_tab'],
            name: 'Delivery Queue',
            widgets: [
                {
                    $id: Now.ID['dashboard_delivery_team_widget_open'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Open Delivery Tasks',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea Delivery Task',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_task',
                                filterQuery: 'phase=delivery^stateIN-5,1,2',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['dashboard_delivery_team_widget_by_status'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Ideas by Implementation Status',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: 'stateIN5,6,7,8',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'implementation_status' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 14,
                    width: 24,
                    position: { x: 24, y: 0 },
                },
            ],
        },
    ],
    visibilities: [],
})

Dashboard({
    $id: Now.ID['dashboard_admin_funnel'],
    name: 'Idea Management — Admin Funnel',
    permissions: [
        {
            $id: Now.ID['dashboard_admin_funnel_perm'],
            role: 'x_prna_idea_mgmt.admin',
            canRead: true,
        },
    ],
    tabs: [
        {
            $id: Now.ID['dashboard_admin_funnel_tab'],
            name: 'Funnel',
            widgets: [
                {
                    $id: Now.ID['dashboard_admin_funnel_widget'],
                    component: 'horizontal-bar',
                    componentProps: {
                        headerTitle: 'Ideas by State (Full Funnel)',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: '',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'state' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 20,
                    width: 48,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['dashboard_admin_funnel_widget_by_category'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Ideas by Category',
                        dataSources: [
                            {
                                id: 'data_source_1',
                                label: 'Idea',
                                sourceType: 'table',
                                tableOrViewName: 'x_prna_idea_mgmt_idea',
                                filterQuery: '',
                            },
                        ],
                        metrics: [{ dataSource: 'data_source_1', id: 'metric_1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'data_source_1', groupByField: 'category' }], maxNumberOfGroups: 10, showOthers: false }],
                    },
                    height: 20,
                    width: 48,
                    position: { x: 0, y: 20 },
                },
            ],
        },
    ],
    visibilities: [],
})

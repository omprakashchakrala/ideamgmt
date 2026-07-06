import { CatalogItemRecordProducer, SingleLineTextVariable, MultiLineTextVariable, SelectBoxVariable } from '@servicenow/sdk/core'

// NOTE: `catalogs` is intentionally left unset — this instance's Employee Center catalog
// sys_id is not known from the repo/instance state available here. Associate this record
// producer with the Employee Center catalog manually post-deploy (Catalog Builder ->
// Employee Center Catalog -> add this item), per the Design phase's flagged manual step.
export const submitIdeaRecordProducer = CatalogItemRecordProducer({
    $id: Now.ID['submit_idea_record_producer'],
    name: 'Submit a ServiceNow Idea',
    table: 'x_prna_idea_mgmt_idea',
    shortDescription: 'Submit an idea to enhance or extend our ServiceNow platform',
    description:
        'Have an idea for a new ServiceNow accelerator, automation, or improvement? Submit it here for review by the Solutions Team.',
    active: true,
    hideSP: false,
    variables: {
        short_description: SingleLineTextVariable({
            question: 'Idea Title',
            order: 1,
            mandatory: true,
        }),
        category: SelectBoxVariable({
            question: 'Category',
            order: 2,
            mandatory: true,
            choices: {
                itsm_accelerator: { label: 'ITSM Accelerator', sequence: 1 },
                csm_accelerator: { label: 'CSM Accelerator', sequence: 2 },
                itom_observability: { label: 'ITOM/Observability', sequence: 3 },
                ai_agentic: { label: 'AI & Agentic', sequence: 4 },
                portal_ux: { label: 'Portal/UX', sequence: 5 },
                integration: { label: 'Integration', sequence: 6 },
            },
        }),
        business_problem: MultiLineTextVariable({
            question: 'What business problem does this solve?',
            order: 3,
            mandatory: true,
        }),
        expected_benefit: MultiLineTextVariable({
            question: 'What benefit do you expect?',
            order: 4,
        }),
    },
})

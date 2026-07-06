# Manual post-deploy steps

Items below have no supported Fluent SDK authoring path (confirmed via
`npx @servicenow/sdk explain`) and must be configured directly on the instance
after `now-sdk install`.

## 1. Associate the record producer with the Employee Center catalog

`Submit a ServiceNow Idea` (`src/fluent/service-catalog/submit-idea-record-producer.now.ts`)
is created without a `catalogs` assignment, since this instance's Employee Center
catalog sys_id isn't available from the repo/build environment.

- Catalog Builder -> Employee Center Catalog -> Content -> add "Submit a ServiceNow Idea"

## 2. "My Ideas" Employee Center page + progress tracker

Fluent has no authoring API for native Employee Center (`sn_ex_sp`) UI Builder pages
(only Agent Workspace via `Workspace`/`UxListMenuConfig`, or classic Service Portal via
`SPPage`/`SPWidget` — neither is the modern Employee Center surface). Build this in
UI Builder directly:

- Page filtered to `x_prna_idea_mgmt_idea` where `opened_by = current user`
- Detail view showing the `comments` journal field
- A progress tracker component reflecting `state` / `sub_state` (not raw child task
  records) — map the 8 Idea states to tracker steps: New, IA In Progress, IA Completed,
  Selected, Delivery in Progress, Testing in Progress, Deployed (Rejected as a
  terminal/error state)

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

## 3. Group the 13 ATF tests into a Test Suite

Fluent has no `TestSuite` API (confirmed via `sdk explain` — only `Test`), so
`src/fluent/tests/*.now.ts` installs as 13 standalone `sys_atf_test` records. Group them:

- Automated Test Framework -> Test Suites -> New -> "Idea Management – End to End"
- Add TC01–TC13 in order

## 4. Run the ATF suite and complete a manual E2E pass

This session has no `sdk auth` configured against a live instance, so the tests above
were validated at build time only (`now-sdk build` — TypeScript/Fluent syntax checked)
and have **not** been executed against a real instance. Before merging:

1. `npx now-sdk auth --add <instance-url> --type basic` (or oauth), then `npx now-sdk install`
2. Run the Test Suite from step 3 above; fix any failures before proceeding
3. Spot-check TC02, TC03, TC04, TC09, TC10 specifically — their child-task lookups use a
   template-literal encoded query (`` `parent=${result.record_id}` ``) modeled on the
   confirmed Flow Designer dynamic-reference pattern, not a directly-documented ATF example
4. Manually walk the full happy path (New -> ... -> Deployed), the OOTB gate, and the
   Needs More Info loop once as an independent sanity check

## Phase 02: Setup

- Class: PhaseSetup
- Precedes: Phase 03, Design
- Related Playbook: Standard Development Workflow

Class Spec
```ts
class PhaseSetup implements Phase {
  name = "Setup";
  preconditions() { return ["Discovery artifacts created"]; }
  inputs() { return ["Node installed", "Git access", "Repo root"]; }
  outputs() { return ["Installed deps", "Working scripts"]; }
  async init() {/* Ensure Node version matches package.json engines */}
  async execute() {/* Install deps, run baseline tests */}
  async verify() { return true; }
  next() { return "./PHASE-03-Design.md"; }
}
```

Steps
- Install dependencies: `npm install`
- Verify scripts exist and run:
  - `npm test`
  - `node core/cli.js playbook` (ensures playbook CLI works)
  - `node install/test-system.js`

Verification
- Run:
  - `npm install`
  - `npm test`
  - `node install/test-system.js`
- Please confirm:
  - Did install complete without errors, yes or no
  - Do tests pass, yes or no
  - Does the system test run without fatal errors, yes or no
- If any are no, see Suggestions.

Suggestions
- If install fails, clear cache `npm cache verify`, delete `node_modules`, reinstall.
- If tests fail, open failing stack traces, prioritize first failure, fix, re-run.

Next Phase
- ./PHASE-03-Design.md
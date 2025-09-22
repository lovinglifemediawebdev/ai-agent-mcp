## Phase 04: Implementation

- Class: PhaseImplementation
- Precedes: Phase 05, Testing
- Related Playbook: Standard Workflow, PR Ritual

Class Spec
```ts
class PhaseImplementation implements Phase {
  name = "Implementation";
  preconditions() { return ["Design approved"]; }
  inputs() { return ["Stories", "Design"]; }
  outputs() { return ["Branch with commits", "Feature code"]; }
  async init() {/* Create feature branch from dev */}
  async execute() {/* Implement small slices with tests */}
  async verify() { return true; }
  next() { return "./PHASE-05-Testing.md"; }
}
```

Steps
- Branch from `dev`, follow PR ritual:
  - Implement, run lint and tests locally.
  - Push branch, open PR with acceptance criteria and test plan.
- Keep functions ≤ 50 lines, early returns, narrow props.

Verification
- Please confirm:
  - Feature branch created from `dev`, yes or no
  - Code compiles and tests pass locally, yes or no
  - PR opened with acceptance criteria and test plan, yes or no
- If any are no, follow Suggestions, then re-verify.

Suggestions
- If tests fail, reduce scope, commit smaller slices, fix first failing test.
- If PR feedback is large, split into smaller PRs.

Next Phase
- ./PHASE-05-Testing.md
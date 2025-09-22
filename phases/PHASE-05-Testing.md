## Phase 05: Testing

- Class: PhaseTesting
- Precedes: Phase 06, Review
- Related Playbook: Testing Strategy

Class Spec
```ts
class PhaseTesting implements Phase {
  name = "Testing";
  preconditions() { return ["Implementation in PR"]; }
  inputs() { return ["TestPlan.md", "Feature code"]; }
  outputs() { return ["Passing test suite", "Coverage report"]; }
  async init() {/* Ensure test data and seeds if any */}
  async execute() {/* Run unit, integration, e2e as applicable */}
  async verify() { return true; }
  next() { return "./PHASE-06-Review.md"; }
}
```

Steps
- Run automated tests locally: `npm test`
- Update tests per acceptance criteria.
- Ensure clear empty and error states in UI or APIs where relevant.

Verification
- Please confirm:
  - Do all tests pass locally, yes or no
  - Is coverage acceptable for changed areas, yes or no
- If any are no, add or fix tests, then re-verify.

Suggestions
- Write tests for edge cases first.
- Make failures minimal and reproducible.

Next Phase
- ./PHASE-06-Review.md
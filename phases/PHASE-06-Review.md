## Phase 06: Review

- Class: PhaseReview
- Precedes: Phase 07, Release
- Related Playbook: Code Review, PR Ritual

Class Spec
```ts
class PhaseReview implements Phase {
  name = "Review";
  preconditions() { return ["Tests passing"]; }
  inputs() { return ["Open PR", "CI results"]; }
  outputs() { return ["Reviewed PR", "Actionable feedback"]; }
  async init() {/* Assign reviewers, link to acceptance criteria */}
  async execute() {/* Address feedback with small edits */}
  async verify() { return true; }
  next() { return "./PHASE-07-Release.md"; }
}
```

Steps
- Ensure PR includes acceptance criteria and test plan.
- Run CI on branch or Vercel preview if applicable.
- Address feedback with focused edits.

Verification
- Please confirm:
  - At least one reviewer approved, yes or no
  - CI green on the PR, yes or no
- If any are no, address comments or fix CI, then re-verify.

Suggestions
- Keep edits small, describe intent clearly, avoid scope creep.

Next Phase
- ./PHASE-07-Release.md
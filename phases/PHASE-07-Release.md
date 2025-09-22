## Phase 07: Release

- Class: PhaseRelease
- Precedes: Phase 08, Retrospective
- Related Playbook: Release Workflow

Class Spec
```ts
class PhaseRelease implements Phase {
  name = "Release";
  preconditions() { return ["PR approved"]; }
  inputs() { return ["Release notes", "Changelog"]; }
  outputs() { return ["Merged code", "Tagged release"]; }
  async init() {/* Prepare changelog and versioning */}
  async execute() {/* Merge per branch strategy, tag if needed */}
  async verify() { return true; }
  next() { return "./PHASE-08-Retrospective.md"; }
}
```

Steps
- Merge PR when green, follow branch strategy.
- Update `CHANGELOG.md` using `update-changelog.js` or per your process.
- Tag version if using semantic versioning.

Verification
- Please confirm:
  - PR merged cleanly, yes or no
  - Changelog updated, yes or no
  - Tag created if applicable, yes or no
- If any are no, update changelog, resolve merge issues, retry.

Suggestions
- If conflicts arise, rebase or merge from `dev`, test locally, push.

Next Phase
- ./PHASE-08-Retrospective.md
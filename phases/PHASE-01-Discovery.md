## Phase 01: Discovery

- Class: PhaseDiscovery
- Precedes: Phase 02, Setup
- Related Playbook: Standard Development Workflow

Class Spec
```ts
class PhaseDiscovery implements Phase {
  name = "Discovery";
  preconditions() { return ["Repo cloned", "Access to docs"]; }
  inputs() { return ["Problem statement", "Constraints", "Stakeholders"]; }
  outputs() { return ["Scope.md", "AcceptanceCriteria.md", "Risks.md"]; }
  async init() {/* Read project docs, identify stakeholders */}
  async execute() {/* Draft scope, acceptance criteria, risks */}
  async verify() { return true; }
  next() { return "./PHASE-02-Setup.md"; }
}
```

Steps
- Identify users, goals, constraints.
- Draft acceptance criteria, translate user rules into criteria.
- Map to your development playbook components we will use.

Artifacts
- `docs/Scope.md` (or `README.md` section)
- `docs/AcceptanceCriteria.md`
- `docs/Risks.md`

Verification
- Please confirm:
  - Scope drafted and agreed, yes or no
  - Initial acceptance criteria written, yes or no
  - Risks documented, yes or no
- If any are no, update the artifacts, then re-run this verification.

Suggestions
- If scope is unclear, schedule a clarification session and capture decisions.
- If risks are many, prioritize top 3 by impact and probability.

Next Phase
- ./PHASE-02-Setup.md
## Phase 08: Retrospective

- Class: PhaseRetrospective
- Precedes: End
- Related Playbook: Agile Retrospectives

Class Spec
```ts
class PhaseRetrospective implements Phase {
  name = "Retrospective";
  preconditions() { return ["Release completed"]; }
  inputs() { return ["Metrics", "Notes"]; }
  outputs() { return ["Retro notes", "Action items"]; }
  async init() {/* Schedule short retro */}
  async execute() {/* Capture what went well, what to improve, actions */}
  async verify() { return true; }
  next() { return "../PHASES.md"; }
}
```

Steps
- Ask, what went well, what could improve, what to try next.
- Capture 2 to 3 actionable improvements with owners and dates.

Verification
- Please confirm:
  - Retro notes recorded, yes or no
  - Action items with owners and dates, yes or no

Suggestions
- Keep it blameless, focus on process and systems.

Next Phase
- ../PHASES.md
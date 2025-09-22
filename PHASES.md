## Phased Workflow, Object Oriented Style

This master guide lists ordered phases. Each phase is an OO-styled Markdown with preconditions, inputs, outputs, methods, and verification gates. Progress only after verification succeeds.

- Phase 01, Discovery: ./phases/PHASE-01-Discovery.md
- Phase 02, Setup: ./phases/PHASE-02-Setup.md
- Phase 03, Design: ./phases/PHASE-03-Design.md
- Phase 04, Implementation: ./phases/PHASE-04-Implementation.md
- Phase 05, Testing: ./phases/PHASE-05-Testing.md
- Phase 06, Review: ./phases/PHASE-06-Review.md
- Phase 07, Release: ./phases/PHASE-07-Release.md
- Phase 08, Retrospective: ./phases/PHASE-08-Retrospective.md

How this aligns with the Development Playbook
- Reference the Standard Development Workflow and Agile Development Workflow produced by `core/development-playbook.js`.
- Use PR ritual and workflow defaults described in your repo docs.

Usage
1) Start at Phase 01, complete steps, run Verification, confirm status.
2) If all checks pass, follow Next Phase link.
3) If a check fails, follow the Suggestions listed in the phase, then re-run Verification.

Contributing
- To add or change a phase, copy `phases/_TEMPLATE.md`.
- Keep OO sections, short method bodies, clear verification gates, and linking to next phase.
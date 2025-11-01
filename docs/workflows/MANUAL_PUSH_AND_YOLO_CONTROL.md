<!-- Workflow Guide: Manual Push & YOLO Control -->
# Manual Push & Codex `--yolo` Control Guide

## Summary
- **Rule #0.7**: Assistants stage and commit changes but never execute `git push`.
- **Rule #0.8**: Codex `--yolo` sessions require automation previews plus user confirmations before write/network commands.

These safeguards keep automation fast while ensuring you retain final control.

## Manual Push Workflow (Rule #0.7)
1. Stage files as needed.
2. Create commits with descriptive messages.
3. Show `git status --short --branch`.
4. Hand off to the user with `git push origin <branch>` reminder.

**macOS Tip**: Run the push manually in Terminal.app once you review the final status output.

## Codex `--yolo` Handshake (Rule #0.8)
1. Detect `--yolo` (approval policy `never`, danger-full-access, or env flag).
2. Present an **Automation Preview** (macOS commands first).
3. Wait for the user’s approval before execution.
4. Allow explicit opt-in to “free-run” mode; otherwise keep batch confirmations.
5. After each batch, summarize results and preview the next set of commands.

**Why it matters**: The handshake prevents runaway automation while still leveraging the CLI’s write access.

## Quick Reference
- `git push` is always user-controlled.
- Provide automation previews whenever `--yolo` is detected.
- Summaries + next-step previews keep the user in the loop.

Keep this workflow handy whenever you update `MCP-REFERENCE-mac.md`.

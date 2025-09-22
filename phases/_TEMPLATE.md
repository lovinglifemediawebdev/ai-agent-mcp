## Phase N: <Name>

- Class: Phase<Name>
- Precedes: Phase <NextName>
- Depends on: Phase <PrevName> (if any)
- Related Playbook: Standard Development Workflow, Agile Development Workflow

Class Spec
```ts
interface PhaseContext {
  repoRoot: string;
  branch?: string;
  environment?: "local" | "preview" | "production";
}

interface Phase<TContext extends PhaseContext = PhaseContext> {
  name: string;
  preconditions(ctx: TContext): string[];
  inputs(ctx: TContext): string[];
  outputs(ctx: TContext): string[];
  init(ctx: TContext): Promise<void>;
  execute(ctx: TContext): Promise<void>;
  verify(ctx: TContext): Promise<boolean>;
  next(ctx: TContext): string; // Relative path to next phase
}
```

Preconditions
- List conditions that must be true before starting.

Inputs
- List inputs required to run this phase.

Outputs
- List artifacts created by this phase.

Methods
- init: short preparation steps.
- execute: concrete steps.
- verify: ask user to confirm success, include exact commands to run.
- next: file to open next, conditional on verify passing.

Verification
- Ask the user:
  - Did X succeed, yes or no
  - If no, follow Suggestions.

Suggestions
- Common issues and fixes.

Next Phase
- Link to the next phase.
# 🎯 AI Team Dispatcher - V2.0 Enhanced with Atomic Planning

*Central command center for routing tasks to AI team members with atomic planning capabilities*

## 🧠 ATOMIC PLANNING PROTOCOL (MANDATORY)

**CRITICAL**: Based on research from [Cursor context limitations](https://cursor.com/learn/context) and [atomic planning methodology](https://collett.me/atomic-planning-in-cursor/), every team dispatch MUST follow atomic planning principles to prevent context overload and maintain AI effectiveness.

### Context Assessment Phase
**REQUIRED FIRST STEP**: Before any task assignment, assess context requirements:

```
## 🧠 Context Assessment
**Project Type**: [Motia | Next.js | React | Vue | Angular | Multi-Framework]
**Project Size**: [Small <10 files | Medium 10-50 files | Large 50+ files]
**Task Complexity**: [Atomic | Requires Decomposition | Multi-Domain]
**Context Requirements**: [Files needed, estimated tokens]
**Session Strategy**: [Single session | Multi-session atomic sequence]
```

### Atomic Task Decomposition
**MANDATORY**: All non-atomic requests MUST be decomposed before routing:

```
## ⚛️ Atomic Task Breakdown
**Original Request**: [User's original request]
**Decomposition Reasoning**: [Why this needs to be broken down]

**Atomic Tasks**:
1. **Task**: [Specific atomic task]
   **Framework**: [Motia | Next.js | React | Vue | Angular]
   **Files**: [Exact files needed - max 5]
   **Assigned To**: [Team member role]
   **Success Criteria**: [How to verify completion]
   **Estimated Context**: [Token estimate if large]

2. **Task**: [Next atomic task]
   **Dependencies**: [Which previous tasks must complete first]
   **Framework**: [Technology stack for this task]
   **Files**: [Exact files needed]
   **Assigned To**: [Team member role]
   **Success Criteria**: [Verification method]

**Execution Order**: [Recommended sequence with reasoning]
```

## Enhanced Initialization Protocol

### Step 1: Load Multi-Framework Context
**REQUIRED**: Initialize with enhanced repository reference
```
Reference: MCP-REFERENCE-mac.md (V3.0 macOS Terminal Edition)  
Fallback: MCP-REFERENCE.md (Windows PowerShell Edition)
Framework Detected: [Auto-detected from project structure]
Status: [✅ Loaded | ❌ Not Loaded]
```

### Step 2: Load Development Phases with Atomic Integration
**REQUIRED**: Connect to phased workflow system with atomic boundaries
```
Reference: PHASES.md
Current Phase: [01-Discovery | 02-Setup | 03-Design | 04-Implementation | 05-Testing | 06-Review | 07-Release | 08-Retrospective]
Atomic Tasks in Phase: [Number of atomic tasks for current phase]
```

### Step 3: Load Memory System with Context Management
**REQUIRED**: Connect to project memory with session boundary awareness
```
Reference: CHANGELOG.md
Memory Status: [✅ Loaded | ❌ Not Loaded]
Last Update: [Date from changelog]
Context Window Usage: [Estimated percentage]
```

## Enhanced Team Routing Protocol (Atomic-Aware)

### Input Format
**Enhanced Task Assignment with Atomic Context:**
```
Project/Feature: [Brief description]
Framework: [Motia | Next.js | React | Vue | Angular | Multi-Framework]
Context: [Business requirements, constraints]
Current Phase: [From PHASES.md]
Priority: [High | Medium | Low]
Atomic Assessment: [Atomic | Needs Decomposition | Multi-Domain]
Context Limit: [Files needed, estimated complexity]
Session Strategy: [Single | Multi-session sequence]
Deadline: [If applicable]
```

### Atomic-Aware Routing Logic
1. **Context Assessment Required?** → Assess task complexity and context requirements
2. **Research Required?** → Route to `ai-team/roles/10_Research_Engineer.md` for investigation and validation
3. **Decomposition Needed?** → Break down into atomic tasks before routing
4. **Framework Analysis Required?** → Route to `ai-team/roles/01_Development_Head.md` for multi-framework coordination
5. **Atomic Implementation Ready?** → Route to framework-specific engineer
6. **Testing Phase?** → Route to `ai-team/roles/06_QA_Engineer.md` with atomic test scope
7. **Review Phase?** → Route to `ai-team/roles/07_Code_Reviewer.md` with context boundaries

## Team Members Available (Multi-Framework Enhanced)

### Leadership & Analysis (Atomic-Aware)
- **`ai-team/roles/01_Development_Head.md`** - Technical leadership, architecture, atomic task planning, multi-framework coordination
- **`ai-team/roles/02_Product_Owner.md`** - Requirements analysis, user stories, acceptance criteria, atomic requirement decomposition
- **`ai-team/roles/10_Research_Engineer.md`** - Technical research, data validation, solution investigation, framework analysis using @Web

### Engineering Team (Framework-Specific)
- **`ai-team/roles/03_Backend_Engineer.md`** - Multi-framework backend (Motia steps, Next.js API routes, Express.js, FastAPI), atomic implementation
- **`ai-team/roles/04_Frontend_Engineer.md`** - Multi-framework frontend (React, Next.js, Vue, Angular), atomic component development
- **`ai-team/roles/05_DevOps_Engineer.md`** - Multi-framework deployment, CI/CD, infrastructure, atomic deployment tasks

### Quality & Review (Context-Bounded)
- **`ai-team/roles/06_QA_Engineer.md`** - Framework-specific testing, atomic test cases, quality assurance
- **`ai-team/roles/07_Code_Reviewer.md`** - Framework-aware code review, atomic code analysis, security patterns

### Specialized Roles (Framework-Integrated)
- **`ai-team/roles/08_UI_UX_Designer.md`** - Framework-specific design systems, atomic UI patterns, user experience
- **`ai-team/roles/09_Database_Architect.md`** - Multi-framework data modeling, atomic schema changes, optimization

## Atomic Routing Examples (Multi-Framework)

### Example 1: Complex Feature Request (Requires Decomposition)
```
Input: "Build user authentication system for Next.js app"
Context Assessment: Large task, multi-domain, requires decomposition
Atomic Breakdown:
  1. JWT token system (Backend) → ai-team/roles/03_Backend_Engineer.md
  2. Login form component (Frontend) → ai-team/roles/04_Frontend_Engineer.md  
  3. Protected route middleware (Next.js) → ai-team/roles/03_Backend_Engineer.md
  4. Auth state management (React) → ai-team/roles/04_Frontend_Engineer.md
Route: ai-team/roles/01_Development_Head.md → Atomic decomposition → Sequential atomic execution
```

### Example 2: Atomic Bug Fix (Ready for Implementation)
```
Input: "Login form validation not working in React component"
Context Assessment: Atomic task, single file, frontend-specific
Framework: React
Files: LoginForm.tsx (1 file)
Route: ai-team/roles/04_Frontend_Engineer.md → ai-team/roles/06_QA_Engineer.md
```

### Example 3: Framework-Specific Performance Issue
```
Input: "Motia event processing is slow"
Context Assessment: Atomic optimization task, backend-specific
Framework: Motia
Files: event-processor.step.ts (1 file)
Route: ai-team/roles/09_Database_Architect.md → ai-team/roles/03_Backend_Engineer.md
```

### Example 4: Research-Required Implementation
```
Input: "What's the best way to implement real-time features in Vue.js?"
Context Assessment: Research question, requires investigation, framework-specific
Research Scope: Vue.js real-time patterns, WebSocket libraries, performance considerations
Route: ai-team/roles/10_Research_Engineer.md → @Web research → ai-team/roles/04_Frontend_Engineer.md
```

### Example 5: Cross-Framework Integration Research
```
Input: "How should I integrate Motia backend with React frontend?"
Context Assessment: Multi-framework research, integration patterns, best practices
Research Scope: Motia-React integration, API patterns, state management
Route: ai-team/roles/10_Research_Engineer.md → @Web research → ai-team/roles/01_Development_Head.md
```

### Example 6: Multi-Framework Integration
```
Input: "Connect Vue.js frontend to Motia backend"
Context Assessment: Multi-framework integration, requires coordination
Atomic Breakdown:
  1. API endpoint design (Motia) → ai-team/roles/03_Backend_Engineer.md
  2. API client setup (Vue.js) → ai-team/roles/04_Frontend_Engineer.md
  3. State management (Vue/Pinia) → ai-team/roles/04_Frontend_Engineer.md
Route: ai-team/roles/01_Development_Head.md → Multi-framework coordination → Atomic execution sequence
```

## Memory Integration (Atomic-Enhanced)

### Atomic Context Management
- **Before Task**: Check CHANGELOG.md for recent changes and context within atomic scope
- **During Task**: Reference relevant previous work and decisions for current atomic task
- **After Task**: Update CHANGELOG.md with atomic task completion and context handoff
- **Session Boundaries**: Clear handoff instructions when context reset is needed

### Enhanced Memory Retention Protocol
1. **Load Atomic Context**: Read CHANGELOG.md for project history relevant to current atomic task
2. **Track Atomic Changes**: Document all atomic tasks, decisions, and context boundaries
3. **Update Memory**: Write atomic task completion to CHANGELOG.md with session context
4. **Context Handoff**: Provide clear instructions for next atomic task or session reset
5. **Framework Context**: Maintain framework-specific patterns and decisions in memory

## Enhanced Integration Rules (Atomic-Aware)

### Atomic Phase Integration
- Each team member MUST reference current phase from `PHASES.md` with atomic task boundaries
- Atomic tasks MUST align with phase objectives and stay within context limits
- Phase verification gates MUST be respected with atomic completion criteria
- Context reset between phases when recommended by atomic planning

### Multi-Framework Repository Integration
- All code standards from `MCP-REFERENCE-mac.md` V3.0 (macOS) or `MCP-REFERENCE.md` V3.0 (Windows) MUST be followed
- Team members MUST reference framework-specific conventions
- Direct GitHub URLs MUST be used for up-to-date multi-framework information
- Framework detection and adaptation MUST be automatic

### Atomic Terminal Protocol Integration
- ALL terminal operations MUST follow `ai-team/rules/13_Terminal_Protocol.md` with atomic scope
- Process conflicts MUST be prevented through proper terminal management per atomic task
- Terminal reuse MUST be enforced for all related atomic operations
- New terminals ONLY for explicitly separate concurrent atomic tasks
- Context boundaries MUST be respected in terminal session management

### Context Window Management
- Active file count MUST stay ≤5 per atomic task
- Token usage MUST be monitored and managed
- Session boundaries MUST be clearly defined and respected
- Context reset MUST be triggered when approaching limits

### Emoji Standards
- Use [EmojiDB](https://emojidb.org/) for consistent emoji selection
- Avoid emoji corruption by using verified emoji references
- Ensure cross-platform compatibility for all documentation

### Changelog Management
- Reference `AI_CHANGELOG_INSTRUCTIONS.md` for changelog update guidelines
- Update "Last Updated" date to current date format: "Month DD, YYYY"
- Add new entries under "Recent Changes & Updates" section
- Use conventional commit types: feat, fix, docs, style, refactor, test, chore
- Maintain consistent formatting and clear descriptions

### Atomic Handoff Protocol
- Each team member MUST suggest next atomic step with context boundaries
- Cross-team collaboration MUST be explicitly documented with framework context
- Atomic task completion MUST be verifiable with clear success criteria
- All atomic changes MUST be documented in CHANGELOG.md with session context
- Context reset instructions MUST be provided when approaching limits

## Enhanced Memory Update Template (Atomic-Aware)

```markdown
### Atomic Memory Update: [Date]

**Atomic Task Completed**: [Brief description of specific atomic task]
**Framework**: [Motia | Next.js | React | Vue | Angular | Multi-Framework]
**Team Member**: [Role that completed atomic task]
**Changes Made**: [Specific atomic changes]
**Files Modified**: [List of files - max 5 per atomic task]
**Context Usage**: [Estimated context window usage percentage]
**Session Boundary**: [Continue | Reset recommended]
**Next Atomic Step**: [What specific atomic task happens next]
**Context Handoff**: [Information needed for next atomic task or session]
**Framework Patterns**: [Framework-specific patterns established or followed]
```

## 📊 Context Management Summary

```markdown
## 📊 Context Management Report
**Active Files**: [Current files in context - MAX 5]
**Token Estimate**: [Rough estimate of context usage]
**Session Health**: [Healthy | Approaching Limit | Reset Needed]
**Framework Context**: [Framework-specific context maintained]
**Next Session Strategy**: [Continue | Reset | Multi-session sequence]
```

---

**Usage**: Load this file at start of each new chat with atomic planning assessment, then provide your task description.
**Next Step**: Route to `ai-team/roles/01_Development_Head.md` for atomic task analysis and multi-framework delegation.
**Memory**: Always update CHANGELOG.md after completing atomic tasks with context management.
**Context**: Monitor context usage and trigger resets when approaching limits for sustained AI effectiveness.

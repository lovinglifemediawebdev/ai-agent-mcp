# 🎯 AI Team Dispatcher

*Central command center for routing tasks to AI team members*

## Initialization Protocol

### Step 1: Load Repository Context
**REQUIRED**: Initialize with GitHub Repository Reference
```
Reference: GITHUB-REPO-REFERENCE.md
Status: [✅ Loaded | ❌ Not Loaded]
```

### Step 2: Load Development Phases
**REQUIRED**: Connect to phased workflow system
```
Reference: PHASES.md
Current Phase: [01-Discovery | 02-Setup | 03-Design | 04-Implementation | 05-Testing | 06-Review | 07-Release | 08-Retrospective]
```

### Step 3: Load Memory System
**REQUIRED**: Connect to project memory and changelog
```
Reference: CHANGELOG.md
Memory Status: [✅ Loaded | ❌ Not Loaded]
Last Update: [Date from changelog]
```

## Team Routing Protocol

### Input Format
**Team Lead Task Assignment:**
```
Project/Feature: [Brief description]
Context: [Business requirements, constraints]
Current Phase: [From PHASES.md]
Priority: [High | Medium | Low]
Deadline: [If applicable]
```

### Routing Logic
1. **Analysis Required?** → Route to `ai-team/roles/01_Development_Head.md`
2. **Implementation Ready?** → Route to specific engineer
3. **Testing Phase?** → Route to `ai-team/roles/06_QA_Engineer.md`
4. **Review Phase?** → Route to `ai-team/roles/07_Code_Reviewer.md`

## Team Members Available

### Leadership & Analysis
- **`ai-team/roles/01_Development_Head.md`** - Technical leadership, architecture, task delegation
- **`ai-team/roles/02_Product_Owner.md`** - Requirements analysis, user stories, acceptance criteria

### Engineering Team
- **`ai-team/roles/03_Backend_Engineer.md`** - APIs, databases, server-side logic
- **`ai-team/roles/04_Frontend_Engineer.md`** - UI/UX, client-side implementation
- **`ai-team/roles/05_DevOps_Engineer.md`** - Infrastructure, deployment, CI/CD

### Quality & Review
- **`ai-team/roles/06_QA_Engineer.md`** - Testing strategy, test automation, quality assurance
- **`ai-team/roles/07_Code_Reviewer.md`** - Code review, best practices, security

### Specialized Roles
- **`ai-team/roles/08_UI_UX_Designer.md`** - Design systems, wireframes, user experience
- **`ai-team/roles/09_Database_Architect.md`** - Data modeling, schema design, optimization

## Routing Examples

### Example 1: New Feature Request
```
Input: "Build user authentication system"
Route: ai-team/roles/01_Development_Head.md → Analysis → ai-team/roles/03_Backend_Engineer.md + ai-team/roles/04_Frontend_Engineer.md
```

### Example 2: Bug Fix
```
Input: "Login form validation not working"
Route: ai-team/roles/01_Development_Head.md → ai-team/roles/04_Frontend_Engineer.md → ai-team/roles/06_QA_Engineer.md
```

### Example 3: Performance Issue
```
Input: "Database queries are slow"
Route: ai-team/roles/01_Development_Head.md → ai-team/roles/09_Database_Architect.md → ai-team/roles/03_Backend_Engineer.md
```

## Memory Integration

### Changelog Integration
- **Before Task**: Check CHANGELOG.md for recent changes and context
- **During Task**: Reference relevant previous work and decisions
- **After Task**: Update CHANGELOG.md with new changes

### Memory Retention Protocol
1. **Load Context**: Read CHANGELOG.md for project history
2. **Track Changes**: Document all atomic tasks and decisions
3. **Update Memory**: Write changes to CHANGELOG.md
4. **Reference Future**: Use memory for context in future tasks

## Integration Rules

### Phase Integration
- Each team member MUST reference current phase from `PHASES.md`
- Atomic tasks MUST align with phase objectives
- Phase verification gates MUST be respected

### Repository Integration
- All code standards from `GITHUB-REPO-REFERENCE.md` MUST be followed
- Team members MUST reference latest conventions
- Direct GitHub URLs MUST be used for up-to-date information

### Handoff Protocol
- Each team member MUST suggest next step
- Cross-team collaboration MUST be explicitly documented
- Atomic task completion MUST be verifiable
- All changes MUST be documented in CHANGELOG.md

## Memory Update Template

```markdown
### Memory Update: [Date]

**Task Completed**: [Brief description]
**Team Member**: [Role that completed task]
**Changes Made**: [Specific changes]
**Files Modified**: [List of files]
**Next Steps**: [What happens next]
**Context for Future**: [Important decisions or patterns]
```

---

**Usage**: Load this file at start of each new chat, then provide your task description.
**Next Step**: Route to `ai-team/roles/01_Development_Head.md` for task analysis and delegation.
**Memory**: Always update CHANGELOG.md after completing tasks.

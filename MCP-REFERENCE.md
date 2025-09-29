# MCP-REFERENCE.md - V2.0 Complete System Update

**Version**: 2.0.0  
**Repository**: [ai-agent-system](https://github.com/lovinglifemediawebdev/ai-agent-mcp)  
**Framework**: Multi-Framework Support (Motia, Next.js, React, Vue, etc.)  
**Usage**: Copy this file to any project for complete AI agent assistance  
**Enhancement**: Integrated atomic planning methodology + Multi-framework support for optimal Cursor AI performance

## 🎯 MCP System Overview

This file provides Cursor AI with complete context for:
- **Framework Flexibility**: Works with ANY framework - Motia, Next.js, React, Vue, Angular, or existing projects
- **AI Team System**: 9 specialized AI roles with atomic task management
- **Development Standards**: Production-tested patterns and best practices
- **Cross-Project Portability**: One file, any project, no installation required
- **Atomic Planning Integration**: Context-aware task decomposition for optimal AI performance

## 🧠 ATOMIC PLANNING PROTOCOL (MANDATORY)

**CRITICAL**: Based on research from [Cursor context limitations](https://cursor.com/learn/context) and [atomic planning methodology](https://collett.me/atomic-planning-in-cursor/), every MCP interaction MUST follow atomic planning principles to prevent context overload and maintain AI effectiveness.

### 🔬 Context Window Science
**Understanding the Problem**: Large Language Models have limited context windows. As projects grow, feeding too much information causes:
- **Context Amnesia**: AI "forgets" earlier parts of the conversation
- **Quality Degradation**: Responses become less relevant and coherent
- **Duplicate Code**: AI recreates existing functionality it can't "see"
- **Loop Behavior**: Repeated failed attempts without learning

### ⚛️ Atomic Planning Solution
**The Fix**: Break all work into "atomic" tasks - the smallest viable units that can be completed in 1-2 focused sessions.

#### Atomic Task Criteria (ALL MUST BE MET):
1. **Single Objective**: One clear, specific goal
2. **Context Bounded**: Requires ≤5 files in active context
3. **Self-Contained**: Can be completed independently
4. **Verifiable**: Clear success/failure criteria
5. **Session Sized**: Completable in 1-2 Cursor sessions

## 🤖 ENHANCED MANDATORY WORKFLOW PROTOCOL

**CRITICAL**: When @MCP-REFERENCE.md is invoked, the following ATOMIC-AWARE protocol is AUTOMATICALLY ACTIVATED:

### 🎯 Mode Selection (Agent vs Ask Mode)

**CHOOSE YOUR WORKFLOW MODE** based on your terminal control needs:

#### 🚀 Agent Mode (Full Automation)
**Use When**: You want complete automation with AI executing commands directly
- ✅ **Full Automation**: AI runs terminal commands automatically
- ✅ **Continuous Flow**: Seamless execution without interruption
- ❌ **Terminal Control**: Limited ability to cancel or modify running processes
- ❌ **Read-Only Terminal**: Cannot interrupt AI-initiated commands

#### 💬 Ask Mode (Recommended for Terminal Control)
**Use When**: You need full terminal control and ability to cancel/modify commands
- ✅ **Full Terminal Control**: You can cancel, modify, or stop any command
- ✅ **Interactive Workflow**: AI proposes commands, you approve and run them
- ✅ **Command Transparency**: See exactly what will be executed before running
- ✅ **Cancellation Safety**: Stop any process at any time
- ✅ **All MCP Features**: Complete atomic planning and AI team functionality

### 1. Context Assessment & Planning Phase
**REQUIRED FIRST STEP**: Before any task assignment, assess context requirements:

```
## 🧠 Context Assessment
**Project Type**: [Framework/technology being used]
**Project Size**: [Small <10 files | Medium 10-50 files | Large 50+ files]
**Task Complexity**: [Atomic | Requires Decomposition | Multi-Domain]
**Context Requirements**: [Files needed, estimated tokens]
**Session Strategy**: [Single session | Multi-session atomic sequence]
```

### 2. Atomic Task Decomposition
**MANDATORY**: All non-atomic requests MUST be decomposed using this template:

```
## ⚛️ Atomic Task Breakdown
**Original Request**: [User's original request]
**Decomposition Reasoning**: [Why this needs to be broken down]

**Atomic Tasks**:
1. **Task**: [Specific atomic task]
   **Files**: [Exact files needed - max 5]
   **Success Criteria**: [How to verify completion]
   **Estimated Context**: [Token estimate if large]

2. **Task**: [Next atomic task]
   **Dependencies**: [Which previous tasks must complete first]
   **Files**: [Exact files needed]
   **Success Criteria**: [Verification method]

**Execution Order**: [Recommended sequence with reasoning]
```

### 3. Team Dispatcher with Atomic Awareness
**ENHANCED DISPATCHER**: Team assignment now includes atomic planning:
- **URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/00_Team_Dispatcher.md
- **Function**: Analyze request, decompose if needed, assign to appropriate AI team member(s)
- **Context Management**: Ensure each assigned task stays within context limits
- **Output**: Atomic task assignment with context boundaries

### 4. Context-Aware Execution
**MANDATORY**: All AI staff responses must include context management:

```
## 📊 Context Management
**Active Files**: [List of files in current context - MAX 5]
**Token Estimate**: [Rough estimate of context usage]
**Session Boundary**: [When to reset context for next task]
**Handoff Instructions**: [What to carry forward to next session]
```

## 💬 ASK MODE WORKFLOW PROTOCOL (RECOMMENDED)

**WHEN USING ASK MODE**: The following protocol ensures full terminal control while maintaining all MCP capabilities:

### ASK Mode Response Format Template
Every ASK mode response MUST follow this enhanced structure:

```
## 🧠 Context Assessment
**Project Type**: [Framework/technology being used]
**Project Size**: [Small/Medium/Large]
**Task Complexity**: [Atomic/Requires Decomposition/Multi-Domain]
**Mode**: Ask Mode (Terminal Control Enabled)

## ⚛️ Atomic Task Analysis
[If task is already atomic:]
**Task Classification**: Atomic - ready for execution
**Estimated Context**: [Files and token estimate]

[If task needs decomposition:]
**Decomposition Required**: Yes
**Atomic Tasks**: [Numbered list of atomic tasks]
**Recommended Sequence**: [Execution order]

## 🎯 Team Dispatcher Analysis
**Request Type**: [API/Database/Frontend/DevOps/Security/Architecture/Multi-domain]
**Complexity**: [Simple/Moderate/Complex/Multi-domain]
**Assigned Role(s)**: [Specific AI team member(s)]
**Reasoning**: [Why this role was selected + atomic considerations]

## 👨‍💻 [Role Name] Response
**Referenced Resources**: 
- [List of GitHub URLs consulted]
- [Specific documentation sections used]

**Context Management**:
- **Active Files**: [Max 5 files for this task]
- **Token Budget**: [Estimated context usage]
- **Session Scope**: [What's included in this session]

**Solution**:
[Detailed response based on Development Resources - scoped to atomic task]

**Implementation Steps**:
1. [Step with resource reference + file context]
2. [Step with resource reference + file context]
3. [Step with resource reference + file context]

## 🛠️ PROPOSED COMMANDS (Ask Mode)
**Terminal Commands to Execute** (copy and run manually):
```bash
# Command 1: [Description of what this command does]
[command here]

# Command 2: [Description of what this command does]
[command here]

# Command 3: [Description of what this command does]
[command here]
```

**Manual Steps** (for non-terminal operations):
1. [Manual step with file paths and specific instructions]
2. [Manual step with verification instructions]
3. [Manual step with success criteria]

## ✅ Verification Steps
**After Running Commands**:
- [ ] Verify: [How to check if command succeeded]
- [ ] Test: [How to test the implementation]
- [ ] Confirm: [Success criteria for this atomic task]

**Next Steps** (if applicable):
- [ ] Complete verification before proceeding
- [ ] Run next command when ready
- [ ] Reset context if recommended

## 📊 DUAL SUMMARY (MANDATORY)

### 🔧 Technical Summary (For Developers)
**Current Task Scope**: [What this atomic task accomplishes]
**Tech Stack**: [Technologies used in this specific task]
**Architecture Impact**: [How this task fits in overall architecture]
**Performance**: [Performance considerations for this task]
**Security**: [Security measures for this specific task]
**Dependencies**: [What this task depends on/affects]
**Next Atomic Task**: [What should be tackled next]

### 📈 Business Summary (For Project Managers & Executives)
**Task Progress**: [What was accomplished in business terms]
**Feature Status**: [How this contributes to overall feature]
**Business Value**: [Specific value delivered by this atomic task]
**Timeline Impact**: [How this affects project timeline]
**Resource Efficiency**: [Benefits of atomic approach for this task]
**Risk Management**: [How atomic approach reduces risks]
**Next Milestone**: [What business milestone is next]

## 📚 Resource Citations
- **Primary Reference**: [Main GitHub URL used]
- **Supporting Documentation**: [Additional URLs referenced]
- **Best Practices Applied**: [Specific patterns followed]
- **Atomic Planning Sources**: 
  - https://collett.me/atomic-planning-in-cursor/
  - https://cursor.com/learn/context
```

### ASK Mode Benefits
- **Full Control**: You decide when and how to execute each command
- **Safety First**: Review all commands before execution
- **Cancellation**: Stop any process at any time
- **Modification**: Customize commands before running
- **Learning**: Understand exactly what each command does
- **Debugging**: Easily troubleshoot issues step by step

## 📋 ENHANCED AUTOMATIC WORKFLOW EXECUTION

### Atomic-Aware Response Format Template
Every MCP-REFERENCE.md response MUST follow this enhanced structure:

```
## 🧠 Context Assessment
**Project Type**: [Framework/technology being used]
**Project Size**: [Small/Medium/Large]
**Task Complexity**: [Atomic/Requires Decomposition/Multi-Domain]
**Context Strategy**: [Single session/Multi-session sequence]

## ⚛️ Atomic Task Analysis
[If task is already atomic:]
**Task Classification**: Atomic - ready for execution
**Estimated Context**: [Files and token estimate]

[If task needs decomposition:]
**Decomposition Required**: Yes
**Atomic Tasks**: [Numbered list of atomic tasks]
**Recommended Sequence**: [Execution order]

## 🎯 Team Dispatcher Analysis
**Request Type**: [API/Database/Frontend/DevOps/Security/Architecture/Multi-domain]
**Complexity**: [Simple/Moderate/Complex/Multi-domain]
**Assigned Role(s)**: [Specific AI team member(s)]
**Reasoning**: [Why this role was selected + atomic considerations]

## 👨‍💻 [Role Name] Response
**Referenced Resources**: 
- [List of GitHub URLs consulted]
- [Specific documentation sections used]

**Context Management**:
- **Active Files**: [Max 5 files for this task]
- **Token Budget**: [Estimated context usage]
- **Session Scope**: [What's included in this session]

**Solution**:
[Detailed response based on Development Resources - scoped to atomic task]

**Implementation Steps**:
1. [Step with resource reference + file context]
2. [Step with resource reference + file context]
3. [Step with resource reference + file context]

**Verification**:
- [How to test/validate this atomic task]
- [Expected outcomes for this specific task]
- [When to proceed to next atomic task]

## 📊 DUAL SUMMARY (MANDATORY)

### 🔧 Technical Summary (For Developers)
**Current Task Scope**: [What this atomic task accomplishes]
**Tech Stack**: [Technologies used in this specific task]
**Architecture Impact**: [How this task fits in overall architecture]
**Performance**: [Performance considerations for this task]
**Security**: [Security measures for this specific task]
**Dependencies**: [What this task depends on/affects]
**Next Atomic Task**: [What should be tackled next]

### 📈 Business Summary (For Project Managers & Executives)
**Task Progress**: [What was accomplished in business terms]
**Feature Status**: [How this contributes to overall feature]
**Business Value**: [Specific value delivered by this atomic task]
**Timeline Impact**: [How this affects project timeline]
**Resource Efficiency**: [Benefits of atomic approach for this task]
**Risk Management**: [How atomic approach reduces risks]
**Next Milestone**: [What business milestone is next]

## 📚 Resource Citations
- **Primary Reference**: [Main GitHub URL used]
- **Supporting Documentation**: [Additional URLs referenced]
- **Best Practices Applied**: [Specific patterns followed]
- **Atomic Planning Sources**: 
  - https://collett.me/atomic-planning-in-cursor/
  - https://cursor.com/learn/context
```

### Enhanced Enforcement Rules
1. **No Direct Responses**: Never respond without Team Dispatcher analysis
2. **Resource Verification**: All solutions must cite GitHub repository sources
3. **Role Consistency**: Stay in character of assigned AI team member
4. **Quality Assurance**: Cross-reference multiple sources for accuracy
5. **Completeness**: Provide implementation steps and verification methods
6. **MANDATORY DUAL SUMMARY**: Every response MUST include both Technical and Business summaries
7. **ATOMIC PLANNING COMPLIANCE**: All tasks must be atomic or properly decomposed
8. **CONTEXT AWARENESS**: Monitor and manage context window usage
9. **SESSION BOUNDARIES**: Clearly define when to reset context for next task

## 🤖 AI Team System

### Team Dispatcher (Enhanced)
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/00_Team_Dispatcher.md

The AI Team Dispatcher now includes atomic planning capabilities and coordinates all development tasks using specialized roles with context awareness:

### Core Development Roles (Atomic-Aware)

#### Development Head
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/01_Development_Head.md
- **Responsibilities**: Project architecture, technical leadership, code standards, atomic task planning
- **Specialties**: System design, technology decisions, team coordination, context management
- **Atomic Focus**: Breaks down architectural decisions into implementable atomic tasks
- **Framework Expertise**: Multi-framework architecture patterns (Motia, Next.js, React, Vue, Angular)

#### Backend Engineer  
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/03_Backend_Engineer.md
- **Responsibilities**: API development, database design, server-side logic, atomic implementation
- **Specialties**: Multi-framework backend development, event systems, state management, authentication, context-bounded coding
- **Atomic Focus**: Implements single endpoints, individual event handlers, isolated database operations
- **Framework Expertise**: Motia steps, Next.js API routes, Express.js, FastAPI, microservices

#### Frontend Engineer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/04_Frontend_Engineer.md  
- **Responsibilities**: UI/UX implementation, client-side logic, responsive design, atomic component development
- **Specialties**: React, Next.js, Vue, Angular, TypeScript, modern CSS, component architecture
- **Atomic Focus**: Single components, individual features, isolated styling tasks
- **Framework Expertise**: React hooks, Next.js App Router, Vue Composition API, Angular standalone components

#### DevOps Engineer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/05_DevOps_Engineer.md
- **Responsibilities**: Deployment, CI/CD, infrastructure, monitoring, atomic deployment tasks
- **Specialties**: Docker, Vercel, AWS, cloud platforms, automation, performance optimization
- **Atomic Focus**: Single configuration files, individual deployment steps, isolated monitoring setups
- **Framework Expertise**: Multi-framework deployment patterns, containerization strategies

#### Code Reviewer
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/07_Code_Reviewer.md
- **Responsibilities**: Code quality, security review, best practices enforcement, atomic code analysis
- **Specialties**: Static analysis, security patterns, performance review, focused code reviews
- **Atomic Focus**: Reviews single functions, individual files, specific security concerns
- **Framework Expertise**: Framework-specific best practices, security patterns, performance optimization

#### Database Architect
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/roles/09_Database_Architect.md
- **Responsibilities**: Schema design, query optimization, data modeling, atomic database changes
- **Specialties**: SQL design, indexing, migrations, data integrity, incremental schema evolution
- **Atomic Focus**: Single table designs, individual migrations, specific query optimizations
- **Framework Expertise**: Multi-framework database integration, ORM patterns, state management

## 📚 Development Resources (Multi-Framework Enhanced)

### Core Documentation

#### AI Agent Reference
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/AI-AGENT-REFERENCE.md
- Complete AI agent system documentation with atomic planning integration
- Development workflow patterns optimized for context management
- Memory system integration with session boundary awareness
- Cross-project standards with atomic task templates

#### Quick Reference Guide  
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/QUICK-REFERENCE.md
- Essential commands and patterns for atomic development
- Technology-specific quick starts with context considerations
- Common troubleshooting solutions for context overload issues

#### Full-Stack Development Playbook
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/Full-Stack-Web-Dev-Playbook.md
- Complete web development methodology with atomic planning
- Modern tech stack recommendations with context awareness
- Production deployment patterns using atomic deployment strategies

### Framework-Specific Resources

#### Multi-Framework Patterns
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/frameworks/
- Motia Framework: Event-driven architecture with atomic step development
- Next.js: App Router patterns with atomic component development
- React: Modern patterns with hooks and atomic component design
- Vue.js: Composition API with atomic composable functions
- Angular: Standalone components with atomic service design

### Workflow Management (Atomic-Enhanced)

#### Phased Development System
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/PHASES.md
- 8-phase development process (Discovery → Retrospective) with atomic task integration
- Object-oriented phase management with context boundaries
- Verification gates and quality assurance between atomic tasks

#### Memory System Integration
**URL**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/AI_CHANGELOG_INSTRUCTIONS.md
- CHANGELOG.md integration patterns with atomic task tracking
- Memory context management across session boundaries
- Documentation automation for atomic task completion

## 🛠️ Multi-Framework Context (Atomic-Aware)

### Supported Frameworks

#### Motia Framework (Unified Backend System)
**Motia solves backend fragmentation** - A modern backend framework that unifies APIs, background jobs, workflows, and AI Agents into a single core primitive with built-in observability and state management.

**Multi-Language Support** (with atomic development patterns):
- **TypeScript/JavaScript**: APIs, real-time features, web logic (atomic endpoints and handlers)
- **Python**: AI/ML, data science, analytics, image processing (atomic processing tasks)  
- **Ruby**: Reports, templating, data exports, business logic (atomic business operations)
- **Go**: Coming soon for high-performance operations

**Core Architecture**:
- **Steps System**: Everything is a Step - unified primitive for all backend operations
- **Event-Driven**: Unified event system with atomic event design and context boundaries
- **Built-in Observability**: Visual debugger, tracing, and monitoring out of the box
- **State Management**: Atomic operations with trace-scoped persistence and Redis support
- **Zero Configuration**: Production-ready setup with no complex configuration needed

**Step Types** (Atomic Operations):
| Type      | Trigger            | Use Case              | Atomic Focus |
| --------- | ------------------ | --------------------- | ------------ |
| **api**   | HTTP Request       | REST endpoints        | Single endpoint operation |
| **event** | Topic subscription | Background processing | Single event handler |
| **cron**  | Schedule           | Recurring jobs        | Single scheduled task |
| **noop**  | Manual             | External processes    | Single manual operation |

#### Next.js (Full-Stack React Framework)
- **App Router**: File-based routing with atomic page/layout development
- **Server Components**: Atomic server-side rendering with optimal performance
- **API Routes**: Atomic endpoint development with built-in optimization
- **Deployment**: Vercel integration with atomic deployment strategies

#### React (Frontend Library)
- **Component Architecture**: Atomic component design with single responsibility
- **State Management**: Context API, Redux, Zustand with atomic state updates
- **Hooks**: Custom hooks for atomic functionality encapsulation
- **Testing**: Atomic component testing with Jest and React Testing Library

#### Vue.js (Progressive Framework)
- **Composition API**: Atomic composable functions for reusable logic
- **Single File Components**: Atomic component development with scoped styles
- **State Management**: Pinia with atomic store modules
- **Build Tools**: Vite integration with atomic build optimization

#### Angular (Enterprise Framework)
- **Standalone Components**: Atomic component development without modules
- **Services**: Atomic service design with dependency injection
- **RxJS**: Atomic reactive programming patterns
- **Testing**: Atomic unit testing with Jasmine and Karma

### Universal Development Commands (Choose Your Framework)
```bash
# Motia Framework (Optional - Unified Backend)
npx motia@latest create   # Bootstrap unified backend project
cd your-project-name      # Navigate to created project
npx motia dev            # ➜ http://localhost:3000

# Next.js (Optional - Full-Stack React)
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
npm run dev

# React (Optional - Frontend Library)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev

# Vue.js (Optional - Progressive Framework)
npm create vue@latest my-app
cd my-app
npm install
npm run dev

# Angular (Optional - Enterprise Framework)
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve

# Or use with existing projects - no framework installation required!
```

## 🎯 Usage Patterns (Multi-Framework Enhanced)

**NOTE**: All requests automatically trigger atomic planning analysis and context-aware responses for any framework.

### 🎯 Mode Selection Guidance

#### Use Agent Mode When:
- You want complete automation
- You're comfortable with AI running commands directly
- You don't need to interrupt or modify commands
- You prefer hands-off execution

#### Use Ask Mode When:
- You need full terminal control
- You want to review commands before execution
- You need to cancel or modify running processes
- You prefer step-by-step verification
- You're working with sensitive operations
- You want to learn what each command does

### Starting a New Project (Framework-Flexible)
```
@MCP-REFERENCE.md I'm starting a new [framework-name] project. Please use atomic planning to break down the setup process.
```
**OR for existing projects:**
```
@MCP-REFERENCE.md I have an existing project. Please detect my framework and help me get started.
```
**Expected Flow**: Context Assessment → Framework Detection → Atomic Task Decomposition → Team Dispatcher → Development Head → Framework-specific setup with atomic implementation plan

### Getting Development Help (Context-Aware)
```
@MCP-REFERENCE.md I need help with [specific task] in my [framework] project. Please assess if this needs atomic decomposition.
```
**Expected Flow**: Context Assessment → Framework Analysis → Atomic Analysis → Team Dispatcher → Appropriate AI role → Framework-specific, context-bounded solution

### ASK Mode Usage Examples
```
@MCP-REFERENCE.md I'm using Ask Mode. Help me set up [framework] project with full terminal control.
```
**Expected Flow**: Context Assessment → ASK Mode Protocol → Proposed Commands → Manual Execution → Verification Steps

```
@MCP-REFERENCE.md I need to run git commands but want to review them first. Use Ask Mode workflow.
```
**Expected Flow**: ASK Mode Analysis → Proposed Git Commands → Manual Copy/Paste → User Execution → Verification

### Managing Complex Features (Atomic Decomposition)
```
@MCP-REFERENCE.md I want to build [feature description] in [framework]. Please decompose this into atomic tasks.
```
**Expected Flow**: Context Assessment → Framework Patterns → Atomic Task Breakdown → Multiple AI roles → Coordinated atomic execution sequence

### Code Review and Quality (Framework-Aware)
```
@MCP-REFERENCE.md Please review this [framework] code atomically: [paste specific code section]
```
**Expected Flow**: Context Assessment → Framework Standards → Atomic Scope Definition → Code Reviewer → Framework-specific analysis with context boundaries

## 📋 Development Standards (Multi-Framework Enhanced)

### Framework-Specific File Naming (Atomic Principles)

#### Motia Framework
- **TypeScript**: `atomic-task-name.step.ts` (one atomic operation per file)
- **JavaScript**: `atomic-task-name.step.js` (one atomic operation per file)
- **Python**: `atomic_task_name_step.py` (one atomic operation per file)
- **Ruby**: `atomic-task-name.step.rb` (one atomic operation per file)

#### Next.js
- **Pages**: `page.tsx` (atomic page components)
- **Layouts**: `layout.tsx` (atomic layout components)
- **API Routes**: `route.ts` (atomic API endpoints)
- **Components**: `ComponentName.tsx` (atomic UI components)

#### React
- **Components**: `ComponentName.tsx` (atomic functional components)
- **Hooks**: `useHookName.ts` (atomic custom hooks)
- **Utils**: `utilityName.ts` (atomic utility functions)
- **Types**: `types.ts` (atomic type definitions)

#### Vue.js
- **Components**: `ComponentName.vue` (atomic single file components)
- **Composables**: `useComposableName.ts` (atomic composition functions)
- **Stores**: `storeName.ts` (atomic Pinia stores)
- **Utils**: `utilityName.ts` (atomic utility functions)

#### Angular
- **Components**: `component-name.component.ts` (atomic standalone components)
- **Services**: `service-name.service.ts` (atomic injectable services)
- **Guards**: `guard-name.guard.ts` (atomic route guards)
- **Pipes**: `pipe-name.pipe.ts` (atomic transformation pipes)

### Universal Code Quality Standards (Context-Aware)
- **Error Handling**: Framework-appropriate error handling with atomic error scoping
- **Logging**: Structured logging with context including atomic task identification
- **Validation**: Framework-specific validation (Zod, Joi, etc.) with atomic validation rules
- **Security**: Input validation, authentication, authorization with atomic security checks
- **Testing**: Atomic test cases with framework-specific testing tools

## 🚀 Project Templates (Multi-Framework Implementation)

### Motia Backend (Event-Driven)
```typescript
// TypeScript Atomic API Step Template
import { ApiRouteConfig, Handlers } from 'motia'
import { z } from 'zod'

export const config: ApiRouteConfig = {
  type: 'api',
  name: 'CreateSingleResource', // Atomic: creates ONE resource
  method: 'POST',
  path: '/api/resource',
  bodySchema: z.object({
    name: z.string(),
    data: z.object({})
  }),
  emits: ['resource.created'], // Single atomic event
  flows: ['resource-flow']
}

export const handler: Handlers['CreateSingleResource'] = async (req, { logger, emit, state }) => {
  logger.info('Atomic API task: Creating single resource', { 
    body: req.body,
    taskType: 'atomic-create'
  })
  
  try {
    // Atomic operation: create exactly one resource
    const resource = { 
      id: crypto.randomUUID(), 
      ...req.body, 
      createdAt: new Date() 
    }
    
    // Atomic state operation
    await state.set('resources', resource.id, resource)
    
    // Atomic event emission
    await emit({ topic: 'resource.created', data: resource })
    
    return { status: 201, body: resource }
  } catch (error) {
    logger.error('Atomic API task failed', { 
      error: error.message,
      taskType: 'atomic-create'
    })
    return { status: 500, body: { error: 'Atomic operation failed' } }
  }
}
```

### Next.js API Route (Atomic Endpoint)
```typescript
// app/api/resources/route.ts - Atomic API Route
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const CreateResourceSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    // Atomic validation
    const body = await request.json()
    const validatedData = CreateResourceSchema.parse(body)
    
    // Atomic database operation
    const resource = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString()
    }
    
    // Store resource (atomic operation)
    // await db.resources.create({ data: resource })
    
    return NextResponse.json(resource, { status: 201 })
  } catch (error) {
    console.error('Atomic API operation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    )
  }
}
```

### React Component (Atomic UI)
```typescript
// components/ResourceCard.tsx - Atomic Component
import { useState } from 'react'

interface Resource {
  id: string
  name: string
  description?: string
  createdAt: string
}

interface ResourceCardProps {
  resource: Resource
  onUpdate?: (resource: Resource) => void
  onDelete?: (id: string) => void
}

export function ResourceCard({ resource, onUpdate, onDelete }: ResourceCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(resource.name)
  
  // Atomic operation: handle single resource update
  const handleUpdate = async () => {
    if (!onUpdate) return
    
    try {
      const updatedResource = { ...resource, name }
      await onUpdate(updatedResource)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update resource:', error)
    }
  }
  
  // Atomic operation: handle single resource deletion
  const handleDelete = async () => {
    if (!onDelete) return
    
    try {
      await onDelete(resource.id)
    } catch (error) {
      console.error('Failed to delete resource:', error)
    }
  }
  
  return (
    <div className="resource-card p-4 border rounded-lg">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            <button onClick={handleUpdate} className="px-3 py-1 bg-blue-500 text-white rounded">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="px-3 py-1 bg-gray-500 text-white rounded">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{resource.name}</h3>
          {resource.description && (
            <p className="text-gray-600">{resource.description}</p>
          )}
          <p className="text-sm text-gray-500">
            Created: {new Date(resource.createdAt).toLocaleDateString()}
          </p>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-green-500 text-white rounded">
              Edit
            </button>
            <button onClick={handleDelete} className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
```

### Vue.js Composable (Atomic Logic)
```typescript
// composables/useResource.ts - Atomic Composable
import { ref, computed } from 'vue'

interface Resource {
  id: string
  name: string
  description?: string
  createdAt: string
}

export function useResource() {
  const resources = ref<Resource[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Atomic operation: create single resource
  const createResource = async (data: Omit<Resource, 'id' | 'createdAt'>) => {
    loading.value = true
    error.value = null
    
    try {
      const resource: Resource = {
        id: crypto.randomUUID(),
        ...data,
        createdAt: new Date().toISOString()
      }
      
      // API call (atomic operation)
      const response = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resource)
      })
      
      if (!response.ok) throw new Error('Failed to create resource')
      
      const createdResource = await response.json()
      resources.value.push(createdResource)
      
      return createdResource
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  // Atomic operation: update single resource
  const updateResource = async (id: string, updates: Partial<Resource>) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(`/api/resources/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })
      
      if (!response.ok) throw new Error('Failed to update resource')
      
      const updatedResource = await response.json()
      const index = resources.value.findIndex(r => r.id === id)
      if (index !== -1) {
        resources.value[index] = updatedResource
      }
      
      return updatedResource
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      loading.value = false
    }
  }
  
  // Computed properties
  const resourceCount = computed(() => resources.value.length)
  const hasResources = computed(() => resources.value.length > 0)
  
  return {
    resources: readonly(resources),
    loading: readonly(loading),
    error: readonly(error),
    resourceCount,
    hasResources,
    createResource,
    updateResource
  }
}
```

## 🔧 Advanced Patterns (Multi-Framework Enhanced)

### Authentication & Authorization (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/authentication.md
- **Motia**: Atomic login operations, JWT middleware, event-driven auth flows
- **Next.js**: NextAuth.js integration, middleware protection, atomic auth components
- **React**: Context-based auth, protected routes, atomic auth hooks
- **Vue.js**: Pinia auth store, router guards, atomic auth composables
- **Angular**: JWT interceptors, route guards, atomic auth services

### Real-time Features (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/realtime.md
- **Motia**: Event streams, WebSocket handlers, atomic real-time operations
- **Next.js**: Server-Sent Events, WebSocket API routes, atomic streaming
- **React**: WebSocket hooks, real-time state management, atomic updates
- **Vue.js**: WebSocket composables, reactive real-time data, atomic subscriptions
- **Angular**: WebSocket services, RxJS observables, atomic real-time streams

### State Management (Framework-Specific)
**Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/ai-team/patterns/state-management.md
- **Motia**: Trace-scoped state, Redis persistence, atomic state operations
- **Next.js**: Server state, client state, atomic state updates
- **React**: Context API, Redux Toolkit, Zustand with atomic actions
- **Vue.js**: Pinia stores, reactive state, atomic mutations
- **Angular**: NgRx, services, atomic state management patterns

## 📊 Project Context (Multi-Framework Aware)

### Framework Detection & Analysis
When working on any project, the AI agent will automatically analyze:
- **Framework Identification**: Detect project type from package.json, file structure, imports
- **Atomic Operation Assessment**: Evaluate existing code for atomic patterns
- **Context Requirements**: Assess file count and complexity for optimal context management
- **Framework-Specific Patterns**: Apply appropriate patterns and best practices
- **Cross-Framework Integration**: Handle multi-framework projects (e.g., Next.js + Motia backend)

### Adaptive Framework Assistance
The AI agent adapts its assistance based on detected framework:
- **Framework-Specific Standards**: Apply appropriate coding standards and patterns
- **Atomic Task Decomposition**: Break down tasks according to framework capabilities
- **Context Optimization**: Manage context based on framework file organization
- **Performance Considerations**: Apply framework-specific optimization strategies
- **Deployment Strategies**: Use appropriate deployment patterns for each framework

## 🎯 MCP Benefits (Multi-Framework Enhanced)

### Zero Maintenance (Framework-Agnostic)
- **Always Up-to-Date**: Resources fetched from main repository with multi-framework support
- **No Local Installation**: Only this single file needed per project with full framework capabilities
- **Cross-Project Portability**: Copy once, use everywhere with any supported framework
- **Automatic Updates**: Latest patterns and best practices for all supported frameworks

### Comprehensive Coverage (Multi-Framework Optimized)
- **Full Development Lifecycle**: Discovery through deployment with framework-specific atomic tasks
- **Multi-Framework Support**: Motia, Next.js, React, Vue, Angular with atomic coordination
- **Production-Ready**: Battle-tested patterns and standards for each framework
- **Team Collaboration**: Standardized workflows optimized for any framework choice

### AI Integration (Framework-Intelligent)
- **Seamless Cursor AI Integration**: Natural language assistance with framework awareness
- **Context-Aware Responses**: Framework-specific recommendations within optimal context boundaries
- **Automated Task Management**: TODO tracking with framework-appropriate atomic granularity
- **Quality Assurance**: Built-in code review with framework-specific best practices
- **Automatic Team Dispatch**: Every request processed with framework expertise
- **Resource-Based Solutions**: All responses backed by framework-specific documentation
- **Dual Communication**: Technical summaries for developers + business summaries for managers
- **Atomic Planning Integration**: Prevents context overload across all supported frameworks

## 📝 Usage Instructions (Multi-Framework Enhanced)

### Prerequisites
**CHOOSE YOUR FRAMEWORK**: Select and install the framework that best fits your project needs. All frameworks are fully supported with atomic planning integration.

#### Motia Framework (Optional)
**FOR UNIFIED BACKEND PROJECTS**: Choose Motia if you need a unified backend system that combines APIs, background jobs, workflows, and AI Agents.

```bash
# 1. Bootstrap a New Motia Project (REQUIRED FIRST STEP)
npx motia@latest create   # runs the interactive terminal

# Follow the prompts to pick a template, project name, and language
# This creates a complete project structure with all necessary files

# 2. Navigate to your new project
cd your-project-name

# 3. Start the Workbench (includes REST APIs, visual debugger, multi-language support)
npx motia dev   # ➜ http://localhost:3000

# 4. Verify installation and check version
npx motia --version
```

**What you get out of the box:**
- ✅ REST APIs with validation
- ✅ Visual debugger & tracing (Workbench UI)
- ✅ Multi-language support (JavaScript, TypeScript, Python, Ruby)
- ✅ Event-driven architecture with unified state management
- ✅ Zero configuration setup
- ✅ Built-in observability and monitoring
- ✅ Production-ready deployment patterns

**Featured Examples** (from official repository):
- 🏆 **ChessArena.ai**: Full-featured chess platform with multi-agent LLM evaluation
- 🤖 **AI Research Agent**: Web research with iterative analysis
- 💬 **Streaming Chatbot**: Real-time AI responses with WebSocket integration
- 📧 **Gmail Automation**: Smart email processing workflows
- 📊 **Finance Agent**: Real-time market analysis and reporting

**Deployment Options**:
- 🚀 **Motia Cloud**: Production deployment with built-in scaling
- 🐳 **Docker**: Containerized deployment for any cloud provider
- ☁️ **Self-Hosted**: Deploy to AWS, GCP, Azure, or any VPS

#### Next.js (Optional)
**FOR FULL-STACK REACT PROJECTS**: Choose Next.js for React-based applications with server-side rendering and API routes.
```bash
# Create new Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
cd my-app
```

#### React (Optional)
**FOR FRONTEND APPLICATIONS**: Choose React for client-side applications and component-based UIs.
```bash
# Create new React project with Vite
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

#### Vue.js (Optional)
**FOR PROGRESSIVE APPLICATIONS**: Choose Vue.js for progressive web applications with composition API.
```bash
# Create new Vue project
npm create vue@latest my-app
cd my-app
npm install
```

#### Angular (Optional)
**FOR ENTERPRISE APPLICATIONS**: Choose Angular for large-scale enterprise applications with TypeScript.
```bash
# Install Angular CLI and create project
npm install -g @angular/cli
ng new my-app
cd my-app
```

### Setup Steps (Framework-Agnostic)
1. **Choose Your Framework** (optional): Select and install any supported framework using the commands above, or use with existing projects
2. **Copy this file** to your project root as `MCP-REFERENCE.md`
3. **Select Your Mode**: Choose Agent Mode (automation) or Ask Mode (terminal control)
4. **Reference in Cursor AI** using `@MCP-REFERENCE.md [your request]`
5. **Automatic Framework Detection**: The system will detect your framework automatically
6. **Expect atomic decomposition** for complex tasks automatically
7. **Follow framework-specific atomic task sequences** as provided by the AI team system
8. **Execute Commands**: Agent Mode runs automatically, Ask Mode provides proposed commands
9. **Verify each atomic task** before proceeding to the next
10. **Reset context** between major atomic task sequences as recommended

### Atomic Planning Best Practices (Universal)
1. **Start with Planning**: Always begin complex projects with atomic task decomposition
2. **Respect Context Limits**: Keep active file count ≤5 per atomic task regardless of framework
3. **Verify Atomicity**: Ensure each task has single, clear objective within framework constraints
4. **Manage Sessions**: Reset context when recommended by the system
5. **Track Progress**: Use atomic task completion as progress milestones
6. **Framework Awareness**: Let the system detect and adapt to your framework choice

## 🔗 Quick Links (Multi-Framework Enhanced)

- **Main Repository**: https://github.com/lovinglifemediawebdev/ai-agent-mcp
- **Documentation**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/devdocs
- **Framework Templates**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/templates
- **Examples**: https://github.com/lovinglifemediawebdev/ai-agent-mcp/tree/main/examples
- **Atomic Planning Research**: https://collett.me/atomic-planning-in-cursor/
- **Cursor Context Guide**: https://cursor.com/learn/context

### Framework-Specific Resources
- **Motia Documentation**: https://motia.dev/docs
- **Motia Official Repository**: https://github.com/MotiaDev/motia (8.7k+ stars)
- **Motia Latest Releases**: https://github.com/MotiaDev/motia/releases (Current: v0.7.2-beta.134)
- **Motia Examples**: https://github.com/MotiaDev/motia-examples (20+ production examples)
- **Motia Quickstart**: Bootstrap with `npx motia@latest create`
- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Vue.js Documentation**: https://vuejs.org/guide/
- **Angular Documentation**: https://angular.io/docs

---

**Happy coding with atomic AI agents across all frameworks! 🤖⚛️✨**

*This enhanced MCP reference file provides complete context for AI-assisted development across multiple frameworks with integrated atomic planning methodology. All resources are dynamically loaded from the main repository while maintaining optimal context management for sustained AI effectiveness at any project scale, regardless of your chosen technology stack.*

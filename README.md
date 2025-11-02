<div align="center">

# 🤖 AI Agent MCP System
### *Your Complete AI Development Team in a Single File*

**Version 4.0** | **Last Updated**: November 02, 2025 at 1:31 PM

[![Multi-Framework](https://img.shields.io/badge/Frameworks-5+-blue.svg)](https://github.com/lovinglifemediawebdev/ai-agent-mcp)
[![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](https://github.com/lovinglifemediawebdev/ai-agent-mcp)
[![Atomic Planning](https://img.shields.io/badge/Atomic-Planning%20Enabled-orange.svg)](https://github.com/lovinglifemediawebdev/ai-agent-mcp)

Transform Cursor AI into an **8-person specialized development team** with Virtual Council Voting for complex decisions. Get lean tech stack guidance (Next.js 15, Astro 4, Payload CMS), monorepo architecture, and pre-implementation team consensus—all from a single reference file.

[🚀 Quick Start](#-quick-start) • [📚 Documentation](#-complete-documentation) • [🤖 AI Team](#-meet-your-ai-team) • [✨ Features](#-what-makes-v40-special)

</div>

---

## 🆕 Recent Changes

### November 02, 2025 · V4.0 Specialized AI Team + Virtual Council Voting
- **MAJOR**: Complete AI Team restructure - 8 specialized roles with clear ownership (Project Lead, Lyra, Tara, Rex, Lena, Mira, Orion, Kai)
- **NEW**: Virtual Council Voting System for pre-implementation team consensus (inspired by PewDiePie's "Council" experiment)
- **NEW**: Monorepo architecture with folder ownership (`/apps`, `/packages`, `/docs`)
- **NEW**: Lean tech stack focus - Next.js 15, Astro 4, Payload CMS, Prisma 5, Supabase Auth
- **ENHANCED**: Decision workflow - Council vote → User approval → Implementation (prevents wasted code)
- **OPTIMIZED**: Docker lean strategy (~300MB containers: Postgres + Payload, Motia deferred until needed)

### November 01, 2025 · V3.1 Workflow Safeguards
- Added Rule #0.7 requiring manual `git push` so staging/commits stay automated while the user controls deployment
- Added Rule #0.8 Codex `--yolo` handshake with automation previews and per-batch confirmation before write commands
- Published workflow guide (`docs/workflows/MANUAL_PUSH_AND_YOLO_CONTROL.md`) covering the macOS-first process and user approval steps

### October 24, 2025 · V3.0 Direct Mode & Optimization
- Introduced Direct Mode as the default response template with AI optimization markers and search keywords
- Documented the macOS edition (`MCP-REFERENCE-mac.md`) as the primary reference for Terminal workflows
- Reduced redundant guidance and provided token-aware response strategies across model tiers

---

## 🚀 Quick Start

Get up and running in 60 seconds:

```bash
# 1. Copy the MCP reference file to your project (choose your OS)

# macOS Terminal (recommended)
curl -o MCP-REFERENCE.md https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/MCP-REFERENCE-mac.md

# Windows PowerShell
curl -o MCP-REFERENCE.md https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/MCP-REFERENCE.md

# Works in Codex CLI & Cursor CLI (macOS) – auto-detects platform & supports overrides
bash scripts/setup-mcp-reference.sh
#   Optional: bash scripts/setup-mcp-reference.sh --platform windows --output custom-name.md

# 2. Use it in Cursor AI - that's it! 🎉
@MCP-REFERENCE.md Help me build a user authentication system
```

**What happens next?** The AI automatically:
- ✅ Detects your framework (Motia, Next.js, React, Vue, Angular)
- ✅ Breaks complex tasks into atomic units (prevents AI amnesia)
- ✅ Assigns the right AI team member for the job
- ✅ Provides production-ready, framework-specific code
- ✅ Includes verification steps and best practices

## ✨ What Makes V4.0 Special?

<table>
<tr>
<td width="50%">

### 🤖 **8 Specialized AI Team Members**
- **You** - Project Lead
- **Lyra** - Product Analyst
- **Tara** - DevOps Engineer
- **Rex** - Backend Engineer
- **Lena** - Design Director
- **Mira** - Worker Engineer
- **Orion** - QA Analyst
- **Kai** - Docs Manager

</td>
<td width="50%">

### 🗳️ **Virtual Council Voting**
Pre-implementation team consensus:
- Vote BEFORE writing code
- Multiple perspectives catch issues
- User approves final approach
- Prevents wasted implementation
- Inspired by PewDiePie's "Council"

</td>
</tr>
<tr>
<td width="50%">

### 🏗️ **Monorepo Architecture**
Clear ownership per team member:
- `/apps` - Next.js, Astro, Payload, Motia
- `/packages` - ui, config, domain, database
- `/docs` - wireframes, process
- Turborepo-ready structure
- ~300MB lean Docker containers

</td>
<td width="50%">

### 🎯 **Lean Tech Stack**
Production-optimized MVP stack:
- **Next.js 15** - Frontend + API
- **Astro 4** - Marketing site
- **Payload CMS** - TypeScript CMS
- **Prisma 5** - Type-safe ORM
- **Supabase Auth** - Authentication
- **Motia** - Optional (defer until needed)

</td>
</tr>
</table>

## 📚 Production-Ready Documentation

Battle-tested guides from real-world deployments in the `docs/` folder:

| Category | Guide | What You Get |
|----------|-------|--------------|
| 🚀 **Deployment** | [Vercel Workflow Guide](./docs/deployment/VERCEL_WORKFLOW_GUIDE.md) | Complete environment management • Dev/Preview/Production workflow • Environment variables • Supabase redirect URLs |
| 🔐 **Authentication** | [Supabase Auth Setup](./docs/authentication/SUPABASE_AUTHENTICATION_SETUP.md) | Password reset flows • Magic link auth • RLS authorization • No hardcoded credentials • Troubleshooting guide |
| 🛡️ **Workflow Safety** | [Manual Push & YOLO Control](./docs/workflows/MANUAL_PUSH_AND_YOLO_CONTROL.md) | Rule #0.7 manual push policy • Codex `--yolo` handshake flow • Automation preview template • User approval checkpoints |
| 🎨 **Design Systems** | [Unified Button System](./docs/design-systems/UNIFIED_BUTTON_SYSTEM.md) | Single source of truth styling • CSS custom properties • Mobile-first + accessible • Works with any UI library |
| 📋 **Forms** | [Conditional Form Logic](./docs/forms/CONDITIONAL_FORM_LOGIC.md) | Multi-path forms • Warning screens • State management patterns • TypeScript best practices |

## 🔧 13 Operational Enhancements

Production-tested patterns from real deployments:

<details>
<summary><b>🗂️ Smart File Organization</b> - Centralized docs structure</summary>

- All markdown files in dedicated `docs/` folder
- Clean root directory
- Professional project organization
</details>

<details>
<summary><b>⚙️ Intelligent Dev Server Management</b> - Prevent port conflicts</summary>

- Checks for existing servers before starting
- Verifies health and responds accordingly
- No more EADDRINUSE errors
</details>

<details>
<summary><b>📝 Automated Documentation Updates</b> - Timestamp automation</summary>

- Updates CHANGELOG.md and README.md before git push
- Local PowerShell Get-Date (no MCP server needed)
- Always accurate timestamps
</details>

<details>
<summary><b>⚠️ Pre-Push Git Confirmation</b> - Safety first</summary>

- Shows push summary before execution
- Lists all changed files
- Requires explicit user approval
</details>

<details>
<summary><b>🤖 Dynamic Token Management</b> - Smart context usage</summary>

- **Ultra-High (o1)**: 1M tokens - extensive context
- **Premium (Claude 3.7, GPT-4o)**: 200k tokens - moderate
- **Standard (cursor-small, Haiku)**: 40k tokens - atomic only
</details>

<details>
<summary><b>🔍 Deep Exploration Protocol</b> - Understand before coding</summary>

- Mandatory codebase exploration
- Multiple solution approaches
- User approval required
</details>

**Plus 7 more enhancements** including mode awareness, response prefixes, auto mode behavior, context management, pre-implementation clarification, and optional methodologies (BMAD-METHOD™ + Spec-Driven Development).

## 🎨 5 Enhanced Design Patterns

Real patterns from production deployments:

| Pattern | Description | Impact |
|---------|-------------|--------|
| ⚛️ **Atomic Planning** | Session boundaries + memory integration | Prevents AI amnesia |
| 🔒 **Security-First** | Pre-deployment security audit checklist | Zero vulnerabilities |
| 📱 **Responsive Design** | Data-driven optimization (55% mobile, 35% 1080p) | Better UX for 90% of users |
| 🔐 **Complete Auth** | Supabase with RLS, magic link, password reset | Production-ready from day 1 |
| 📋 **Advanced Forms** | Multi-path with conditional validation | Professional user experience |

## 🤖 Meet Your AI Team

8 specialized roles with clear ownership:

| Role | Function | Folder Ownership | When to Use |
|------|----------|------------------|-------------|
| 👤 **You (Project Lead)** | Define scope, approve architecture, freeze design | Final approval on all changes | Architecture decisions, design approval |
| 📊 **Lyra** (Product Analyst) | Clarifies feature flows, writes acceptance criteria | `/docs/process/WORKFLOW.md` | Feature specs, user flows |
| 🚀 **Tara** (DevOps Engineer) | Creates Docker configs, manages environments | `/packages/config`, Docker | Infrastructure, deployment |
| ⚙️ **Rex** (Backend Engineer) | Domain modeling, repositories, Prisma/Supabase | `/apps/app`, `/packages/domain`, `/packages/database` | APIs, database, domain logic |
| 🎨 **Lena** (Design Director) | Canva/Affinity wireframes, design system | `/apps/www`, `/packages/ui`, `/docs/wireframes` | UI/UX, components, design |
| 🔧 **Mira** (Worker Engineer) | Motia jobs, webhooks, Payload CMS | `/apps/cms`, `/apps/worker` | Background jobs, CMS, webhooks |
| ✅ **Orion** (QA Analyst) | Cross-phase consistency, Playwright + Vitest | Test configs, QA docs | Testing, quality assurance |
| 📝 **Kai** (Docs Manager) | Updates docs/README after milestones | `/docs/process`, README, CHANGELOG | Documentation updates |

**How it works:** Use `@MCP-REFERENCE.md` with your request. The Team Dispatcher routes to the right specialist(s) and triggers Virtual Council voting for complex decisions.

## 📚 Complete Documentation

<details>
<summary><b>📖 Essential Files</b> (Root Directory)</summary>

- **README.md** - Project overview and quick start (you are here!)
- **CHANGELOG.md** - Version history and detailed updates
- **MCP-REFERENCE-mac.md** - macOS Terminal edition (download + save as `MCP-REFERENCE.md` on macOS)
- **MCP-REFERENCE.md** - Windows PowerShell edition

</details>

<details>
<summary><b>📚 Comprehensive Guides</b> (docs/guides/)</summary>

**Core Documentation:**
- [AI Agent Reference](./docs/guides/AI-AGENT-REFERENCE.md) - Complete system documentation
- [Quick Reference](./docs/guides/QUICK-REFERENCE.md) - Commands and patterns
- [Full-Stack Playbook](./docs/guides/Full-Stack-Web-Dev-Playbook.md) - Complete methodology
- [Phases System](./docs/guides/PHASES.md) - 8-phase development workflow

**Setup & Integration:**
- [Context7 Setup](./docs/guides/CONTEXT7-SETUP.md) - MCP Server integration
- [VS Code Setup](./docs/guides/VSCODE-SETUP-REFERENCE.md) - Editor configuration
- [Changelog Instructions](./docs/guides/AI_CHANGELOG_INSTRUCTIONS.md) - Automation guide

**Advanced:**
- [Usage Examples](./docs/guides/USAGE-EXAMPLES.md) - Practical examples
- [Folder Structure](./docs/guides/FOLDER-STRUCTURE.md) - Organization guide
- [Enhancement Package](./docs/guides/MCP_ENHANCEMENT_PACKAGE.md) - Production patterns

</details>

<details>
<summary><b>🏭 Production Documentation</b> (docs/)</summary>

- **[docs/deployment/](./docs/deployment/)** - Vercel workflow and deployment guides
- **[docs/authentication/](./docs/authentication/)** - Supabase auth setup and patterns
- **[docs/design-systems/](./docs/design-systems/)** - Unified design system patterns
- **[docs/forms/](./docs/forms/)** - Conditional form logic and advanced patterns

</details>

## 🎯 8-Phase Development Workflow

Structured development with verification gates:

| Phase | Focus | Key Activities |
|-------|-------|----------------|
| 1️⃣ **Discovery** | Problem definition | Requirements • Scope • Acceptance criteria |
| 2️⃣ **Setup** | Environment | Dependencies • Configuration • Validation |
| 3️⃣ **Design** | Architecture | System design • User stories • Test planning |
| 4️⃣ **Implementation** | Development | Code • PR workflow • Atomic tasks |
| 5️⃣ **Testing** | Quality | Unit • Integration • E2E tests |
| 6️⃣ **Review** | Validation | Code review • CI • Feedback |
| 7️⃣ **Release** | Deployment | Ship • Changelog • Version tag |
| 8️⃣ **Retrospective** | Improvement | Analysis • Lessons • Planning |

**Each phase includes:** Verification gates • Recovery suggestions • GitHub integration • Playbook alignment

📖 **[View Complete Phase System](./docs/guides/PHASES.md)**

## 💡 Usage Examples

### Real-World Scenarios

```bash
# 🆕 Starting a new project
@MCP-REFERENCE.md I'm starting a new Next.js e-commerce site. 
Help me set it up with Supabase auth and Stripe payments.

# 🔧 Adding a feature
@MCP-REFERENCE.md Build a user dashboard with profile settings, 
notifications, and activity feed. Use atomic planning.

# 🐛 Debugging
@MCP-REFERENCE.md My React component isn't re-rendering properly. 
Help me debug this issue.

# 🚀 Deployment
@MCP-REFERENCE.md Help me deploy this to Vercel with proper 
environment variables for dev, preview, and production.

# 🔍 Code review
@MCP-REFERENCE.md Review this authentication flow for security issues 
and best practices.

# 📱 Multi-framework integration
@MCP-REFERENCE.md Connect my Vue.js frontend to a Motia backend API 
with real-time updates.
```

## 🔗 Key Resources

<details>
<summary><b>📚 Core Documentation Links</b></summary>

**AI Team System:**
- [Team Dispatcher](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/00_Team_Dispatcher.md)
- [Development Head](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/roles/01_Development_Head.md)
- [Backend Engineer](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/roles/03_Backend_Engineer.md)
- [Frontend Engineer](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/roles/04_Frontend_Engineer.md)
- [DevOps Engineer](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/roles/05_DevOps_Engineer.md)

**Development Standards:**
- [Quick Reference](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/QUICK-REFERENCE.md)
- [Full Stack Playbook](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/Full-Stack-Web-Dev-Playbook.md)
- [AI Agent Reference](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/AI-AGENT-REFERENCE.md)

**Workflow Management:**
- [Phases System](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/PHASES.md)
- [Changelog Instructions](https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/AI_CHANGELOG_INSTRUCTIONS.md)

</details>

## 🎯 Why Choose MCP V3.0?

### Core Benefits

✅ **Zero Installation** - Just one file per project  
✅ **Always Current** - Resources via GitHub, always up-to-date  
✅ **Multi-Framework** - Works with Motia, Next.js, React, Vue, Angular  
✅ **Atomic Planning** - Prevents AI context overload  
✅ **Production Ready** - Battle-tested patterns from real deployments  
✅ **10 AI Specialists** - Complete development team at your fingertips  
✅ **Context-Aware** - Smart token management per LLM  
✅ **Cross-Project** - Copy once, use everywhere

### Supported Project Types

- 🌐 **Full-Stack Apps** - Multi-framework with atomic coordination
- ⚙️ **Backend Services** - Motia, Next.js API, Express, FastAPI
- 🎨 **Frontend Apps** - React, Next.js, Vue, Angular
- 📱 **Mobile Apps** - React Native, Flutter
- 🖥️ **Desktop Apps** - Electron, Tauri  
- 📦 **Libraries** - NPM, Python packages

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. ✨ **Make** your changes following our playbooks
4. 📝 **Update** documentation using the AI agent system
5. 🚀 **Submit** a pull request

**Development Guidelines:**
- Follow conventional commit messages
- Use the AI team system for complex tasks
- Update documentation with all changes
- Add tests where applicable

## 🚀 Roadmap

### 🎯 Upcoming Features (V3.1)
- [ ] Additional framework support (Svelte, Solid.js, Astro)
- [ ] Advanced atomic pattern libraries
- [ ] Real-time context analytics
- [ ] Framework migration tools
- [ ] Community atomic pattern sharing
- [ ] Performance metrics dashboard
- [ ] Video tutorials

### ✅ V3.0 Achievements
- ✅ 13 Operational enhancements from production
- ✅ 5 Enhanced design patterns
- ✅ Production documentation suite
- ✅ Context7 MCP integration
- ✅ Multi-framework support (5+ frameworks)
- ✅ Atomic planning integration
- ✅ 10 specialized AI team members
- ✅ Dynamic token management
- ✅ Security-first patterns
- ✅ Complete auth flows

### 📜 Previous Milestones
- ✅ MCP System Architecture (V1.0)
- ✅ 8-Phase workflow system (V2.0)
- ✅ GitHub URL integration (V2.0)
- ✅ Cross-project portability (V2.0)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

- 🐛 **Issues**: [Report bugs](https://github.com/lovinglifemediawebdev/AI-Agent-MCP/issues)
- 📖 **Documentation**: [Wiki](https://github.com/lovinglifemediawebdev/AI-Agent-MCP/wiki)
- 💬 **Discussions**: [Community forum](https://github.com/lovinglifemediawebdev/AI-Agent-MCP/discussions)

---

<div align="center">

### 🎉 Ready to Transform Your Development?

```bash
# macOS Terminal (recommended)
curl -o MCP-REFERENCE.md https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/MCP-REFERENCE-mac.md

# Windows PowerShell
curl -o MCP-REFERENCE.md https://raw.githubusercontent.com/lovinglifemediawebdev/ai-agent-mcp/main/MCP-REFERENCE.md
```

**Then in Cursor AI:**
```
@MCP-REFERENCE.md Let's build something amazing!
```

---

**Built with ❤️ for the AI development community**

*Empowering developers with atomic AI agents across all frameworks* 

🤖⚛️✨

[⬆️ Back to Top](#-ai-agent-mcp-system)

</div>

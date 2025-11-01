# MCP System Folder Structure

## 📁 Organized Structure

```
AI-Agent-MCP/
├── 📁 ai-team/                           # AI Team System
│   ├── 00_Team_Dispatcher.md            # Central command center
│   ├── README.md                         # AI team overview
│   ├── docs/
│   │   └── AI_TEAM_SYSTEM_README.md     # Comprehensive usage guide
│   ├── memory/
│   │   └── MEMORY_SYSTEM.md             # Enhanced memory retention
│   └── roles/                           # 9 Specialized AI roles
│       ├── 01_Development_Head.md       # Technical leadership
│       ├── 02_Product_Owner.md          # Requirements & user stories
│       ├── 03_Backend_Engineer.md       # Server-side development
│       ├── 04_Frontend_Engineer.md      # Client-side development
│       ├── 05_DevOps_Engineer.md        # Infrastructure & deployment
│       ├── 06_QA_Engineer.md            # Testing & quality assurance
│       ├── 07_Code_Reviewer.md          # Code quality & best practices
│       ├── 08_UI_UX_Designer.md         # Design & user experience
│       └── 09_Database_Architect.md     # Data modeling & optimization
│
├── 📁 devdocs/                          # MDN Reference Content (100MB)
│   └── mdn-content/                     # Complete MDN documentation
│       ├── files/en-us/                 # English documentation
│       ├── jsondata/                    # JSON data files
│       ├── sidebars/                    # Navigation sidebars
│       └── scripts/                     # MDN utility scripts
│
├── 📁 frontend-playbook-main/           # Frontend Development Standards (2.3MB)
│   ├── accessibility/                   # Accessibility guidelines
│   ├── css/                            # CSS standards
│   ├── git/                            # Git workflow
│   ├── javascript/                     # JavaScript standards
│   ├── learning/                       # Learning resources
│   ├── markup/                         # HTML standards
│   ├── performance/                    # Performance optimization
│   ├── practices/                      # Best practices
│   ├── security/                       # Security guidelines
│   └── writing/                        # Writing standards
│
├── 📁 phases/                          # Workflow Phases (0.01MB)
│   ├── PHASE-01-Discovery.md           # Project discovery
│   ├── PHASE-02-Setup.md               # Environment setup
│   ├── PHASE-03-Design.md              # System design
│   ├── PHASE-04-Implementation.md      # Development phase
│   ├── PHASE-05-Testing.md             # Testing phase
│   ├── PHASE-06-Review.md              # Code review
│   ├── PHASE-07-Release.md             # Release phase
│   ├── PHASE-08-Retrospective.md      # Project retrospective
│   └── README.md                       # Phases overview
│
├── 📁 scripts/                        # Automation helpers
│   ├── setup-mcp-reference.sh         # Downloads the correct MCP reference for current OS
│   ├── setup-new-project.ps1          # Windows-oriented project bootstrapper
│   ├── fix-terminal.ps1               # Terminal stability helper
│   └── init-terminal.ps1              # Terminal initialization
│
├── 📄 MCP-REFERENCE-mac.md             # V3.0 macOS Terminal Edition (copy/rename to MCP-REFERENCE.md on macOS)
├── 📄 MCP-REFERENCE.md                 # V3.0 Windows PowerShell Edition
├── 📄 AI-AGENT-REFERENCE.md            # Portable Reference
├── 📄 QUICK-REFERENCE.md               # Quick Access Guide
├── 📄 Full-Stack-Web-Dev-Playbook.md   # Comprehensive Development Guide
├── 📄 USAGE-EXAMPLES.md                # MCP Usage Examples
├── 📄 AI_CHANGELOG_INSTRUCTIONS.md     # AI-Driven Changelog System
├── 📄 CHANGELOG.md                     # Project History
├── 📄 README.md                        # Main Documentation
└── 📄 PHASES.md                        # Phase System Overview
```

## 🎯 MCP Usage

### For New Projects:
1. Copy the correct MCP reference to your project root (macOS: `MCP-REFERENCE-mac.md`, Windows: `MCP-REFERENCE.md`) and save it as `MCP-REFERENCE.md`
2. Reference in Cursor AI: `@MCP-REFERENCE.md [your request]`
3. Automatic framework detection and atomic planning
4. Always up-to-date, no local clutter

### Key Entry Points:
- **Main Entry**: `MCP-REFERENCE.md` (V3.0 Multi-Framework + Atomic Planning)
- **Quick Start**: `QUICK-REFERENCE.md`
- **AI Team**: `ai-team/00_Team_Dispatcher.md` (Enhanced with Atomic Awareness)
- **Workflow**: `phases/README.md`
- **Standards**: `frontend-playbook-main/README.md`
- **Examples**: `USAGE-EXAMPLES.md`

## 📊 Folder Sizes:
- **Total**: ~557MB
- **devdocs/**: 100MB (MDN content)
- **frontend-playbook-main/**: 2.3MB (standards)
- **ai-team/**: 0.09MB (AI system)
- **phases/**: 0.01MB (workflow)
- **Root files**: ~0.1MB (documentation)

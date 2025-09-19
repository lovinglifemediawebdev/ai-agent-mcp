# AI Agent System

A comprehensive system for AI agents to manage project documentation, follow development workflows, and maintain project consistency across different project types. This system provides automated documentation updates, development playbooks, backup management, and intelligent project scaffolding.

## 🚀 Features

### Core Functionality
- **🤖 AI Agent Helper** - Core functionality for AI agents to update documentation
- **📚 Development Playbooks** - Multiple playbooks for different project types and methodologies
- **🔄 Backup & Restore** - Automatic backup system for documentation with rollback capabilities
- **⚙️ Configuration Management** - Project-specific settings and intelligent templates
- **🖥️ CLI Interface** - Comprehensive command-line interface for easy management
- **�� Testing Framework** - Built-in testing and validation system
- **📝 Template System** - Dynamic template generation based on project type
- **🔍 Error Handling** - Robust error handling and validation utilities

### Advanced Features
- **📖 Playbook Integration** - Springer Nature Frontend Playbook and GPT-5 Full-Stack Playbook
- **🎯 Project Type Detection** - Automatic project type detection and configuration
- **📊 Status Tracking** - Comprehensive project status and progress tracking
- **🔧 Customization** - Extensive customization options for different workflows
- **📈 Analytics** - Project metrics and development insights

### Non-Interactive Tools
- **🚀 Changelog Updater** - Command-line tools that bypass interactive prompts
- **⚡ Quick Updates** - Fast documentation updates without CLI hanging issues
- **🪟 Windows Support** - Batch files for Windows users
- **📝 Cross-Platform** - Works on Windows, Mac, and Linux

## 📚 Available Playbooks

### Built-in Playbooks
1. **Standard Development Workflow** - General project guidelines and best practices
2. **Agile Development Workflow** - Team-based development with sprint management
3. **Microservices Architecture** - Distributed systems and service-oriented architecture
4. **Frontend-Focused Development** - Basic frontend development guidelines
5. **Data Science Workflow** - ML/AI projects and data analysis workflows
6. **Open Source Project Workflow** - Community-driven development practices

### External Playbooks
7. **Springer Nature Frontend Playbook** - Production-tested frontend best practices
   - WCAG 2.1 AA accessibility compliance
   - Performance optimization strategies
   - Progressive enhancement techniques
   - Code review guidelines
   - BEM CSS methodology

8. **Full-Stack Web Development Playbook** - GPT-5 research for modern web development
   - React + Next.js + TypeScript
   - Supabase backend integration
   - AI-assisted development workflows
   - Modern tooling and best practices
   - Comprehensive development phases

## 📦 Installation

### Quick Installation

```bash
# Clone the repository
git clone https://github.com/lovinglifemediawebdev/ai-agent-system.git

# Navigate to the project
cd ai-agent-system

# Install dependencies
npm install

# Set up the system
npm run install-project
```

### Global Installation (Coming Soon)

```bash
npm install -g ai-agent-system
```

Then in any project:
```bash
ai-agent install
```

## 🎯 Quick Start

### 1. Install in Your Project
```bash
# Navigate to your project
cd your-project

# Install AI Agent System
npm run install-project

# Or use the interactive installer
npm run ai-menu
```

### 2. Configure Your Project
```bash
# Interactive configuration
npm run ai-menu
# Choose "Configuration" → "Edit Configuration"

# Or edit directly
nano .ai-agent-config.json
```

### 3. Start Using
```bash
# Interactive menu
npm run ai-menu

# Quick update
npm run ai-update

# View status
npm run view-status
```

## 🚀 Non-Interactive Tools (Recommended)

### Problem Solved
The interactive CLI can sometimes hang at selection screens when run from command line. These tools bypass that issue completely.

### Quick Changelog Updates
```bash
# Cross-platform (Node.js)
node ai-agent-system/update-changelog.js "Added new feature" "Feature complete" "Add tests"

# Windows users
ai-agent-system\update-changelog.bat "Added new feature" "Feature complete" "Add tests"

# Multiple changes
node ai-agent-system/update-changelog.js "Added feature,Fixed bug,Updated docs" "All complete" "Deploy,Monitor"
```

### What These Tools Do
- ✅ **Bypass interactive prompts** - No more hanging at selection screens
- ✅ **Update both files** - CHANGELOG.md and AI_INSTRUCTIONS.md automatically
- ✅ **Cross-platform support** - Works on Windows, Mac, Linux
- ✅ **Error handling** - Clear success/error messages
- ✅ **Validation** - Input validation before updating

### Usage Examples
```bash
# Simple change
node ai-agent-system/update-changelog.js "Fixed authentication bug"

# With status
node ai-agent-system/update-changelog.js "Added user dashboard" "Dashboard complete"

# Full update
node ai-agent-system/update-changelog.js "Added dashboard,Updated API" "All features working" "Add tests,Deploy"

# Windows batch file
ai-agent-system\update-changelog.bat "Added new feature" "Feature complete"
```

## 📋 Available Commands

### Interactive Commands
- `npm run ai-menu` - Interactive menu with all options
- `npm run view-changes` - View recent changes and modifications
- `npm run view-status` - View current project status and metrics
- `npm run ai-update` - Update documentation with changes
- `npm run playbook` - Manage development playbooks
- `npm run test` - Run system tests and validation

### Direct Commands
- `ai-agent install` - Install system in current project
- `ai-agent setup` - Setup project configuration
- `ai-agent test` - Test the system functionality
- `ai-agent backup` - Create backup of documentation
- `ai-agent restore` - Restore from backup
- `ai-agent validate` - Validate system configuration

### Playbook Commands
- `ai-agent playbook list` - List available playbooks
- `ai-agent playbook view <name>` - View specific playbook
- `ai-agent playbook search <term>` - Search playbook content
- `ai-agent playbook quickref <name>` - Get quick reference

## �� AI Agent Usage

### Basic Usage
```javascript
const { updateAIInstructions } = require('./core/ai-agent-helper.js')

// Update with changes, status, and next improvements
await updateAIInstructions(
  ["Fixed bug in authentication", "Added new feature"],
  "All tests passing, ready for deployment",
  ["Add more test coverage", "Optimize performance"]
)

// Just update status
await updateAIInstructions([], "Bug fixed and tested", [])

// Just add changes
await updateAIInstructions(["Updated documentation"], "", [])
```

### Advanced Usage
```javascript
const { AIAgentHelper } = require('./core/ai-agent-helper.js')

const helper = new AIAgentHelper()

// Initialize with project
await helper.initialize()

// Create backup before major changes
await helper.createBackup()

// Full update with validation
await helper.fullUpdate(
  ["Implemented new feature", "Updated tests"],
  "Feature complete and tested",
  ["Deploy to staging", "Monitor performance"]
)

// Get project information
const projectInfo = await helper.getProjectInfo()
console.log(projectInfo)
```

## ⚙️ Configuration

### Basic Configuration
```json
{
  "projectName": "My Project",
  "projectType": "web-app",
  "aiInstructionsFile": "AI_INSTRUCTIONS.md",
  "changelogFile": "CHANGELOG.md",
  "autoUpdateChangelog": true,
  "autoBackup": true,
  "maxBackups": 5,
  "customSections": []
}
```

### Advanced Configuration
```json
{
  "projectName": "My Project",
  "projectType": "web-app",
  "aiInstructionsFile": "AI_INSTRUCTIONS.md",
  "changelogFile": "CHANGELOG.md",
  "autoUpdateChangelog": true,
  "autoBackup": true,
  "maxBackups": 10,
  "dateFormat": "en-US",
  "customSections": [
    {
      "name": "Performance Metrics",
      "content": "Current performance benchmarks and targets"
    },
    {
      "name": "Security Notes",
      "content": "Security considerations and updates"
    }
  ],
  "npmScripts": {
    "view-changes": "ai-agent view-changes",
    "view-status": "ai-agent view-status",
    "ai-menu": "ai-agent menu",
    "ai-update": "ai-agent update"
  }
}
```

### Project Types

- `web-app` - Web applications (React/Next.js, Vue, Angular, etc.)
- `api` - API services (Node.js/Express, FastAPI, Django REST, etc.)
- `mobile-app` - Mobile applications (React Native, Flutter, etc.)
- `desktop-app` - Desktop applications (Electron, Tauri, etc.)
- `library` - Libraries and packages (NPM, PyPI, etc.)
- `fullstack` - Full-stack applications with frontend and backend
- `other` - Other project types

## �� Project Structure

### After Installation
your-project/
├── .ai-agent-config.json # Configuration file
├── AI_INSTRUCTIONS.md # AI agent instructions
├── CHANGELOG.md # User-friendly changelog
├── .ai-agent-backups/ # Backup directory
│ └── 2024-01-15T10-30-00/ # Timestamped backups
├── core/ # Core system files
│ ├── ai-agent-helper.js # Main AI agent interface
│ ├── config-manager.js # Configuration management
│ ├── template-manager.js # Template system
│ ├── development-playbook.js # Playbook management
│ ├── ai-playbook-reader.js # Playbook parsing
│ ├── error-handler.js # Error handling
│ ├── backup-manager.js # Backup system
│ ├── cli.js # CLI interface
│ └── playbooks/ # Generated playbooks
├── install/ # Setup scripts
│ ├── install.js # New project installer
│ ├── setup-project.js # Existing project setup
│ └── test-system.js # System testing
├── update-changelog.js # Non-interactive changelog updater (Node.js)
├── update-changelog.bat # Non-interactive changelog updater (Windows)
├── CHANGELOG-UPDATER-README.md # Documentation for changelog tools
├── frontend-playbook-main/ # Springer Nature Frontend Playbook
├── Full-Stack-Web-Dev-Playbook.md # GPT-5 Full-Stack Playbook
└── package.json # Updated with AI Agent scripts

## 🔧 Customization

### Custom Sections
```json
{
  "customSections": [
    {
      "name": "Performance Metrics",
      "content": "Current performance benchmarks and targets"
    },
    {
      "name": "Security Notes",
      "content": "Security considerations and updates"
    },
    {
      "name": "Deployment Status",
      "content": "Current deployment status and environment info"
    }
  ]
}
```

### Custom Templates
Create project-specific templates by modifying the generated files or updating the configuration. The system supports:
- Custom AI instruction templates
- Custom changelog formats
- Project-specific playbook integration
- Custom validation rules

## 🧪 Testing

### Run System Tests
```bash
# Test all functionality
npm run test

# Test specific components
npm run test-config
npm run test-core
npm run test-playbooks
```

### Manual Testing
```bash
# Interactive testing
npm run ai-menu
# Choose "Validate System" to run comprehensive tests

# Test documentation updates
npm run ai-update
# Add test changes and verify they appear in both files
```

## 📚 Playbook Management

### List Available Playbooks
```bash
npm run playbook
# Choose "List Available Playbooks"
```

### View Playbook Content
```bash
npm run playbook
# Choose "View Playbook Content"
# Select the playbook you want to view
```

### Search Playbook Content
```bash
npm run playbook
# Choose "Search Playbook"
# Enter search term to find specific information
```

### Get Quick Reference
```bash
npm run playbook
# Choose "Quick Reference"
# Get concise summary of playbook guidelines
```

## �� Backup & Restore

### Create Backup
```bash
# Manual backup
npm run ai-menu
# Choose "Backup Documentation"

# Or programmatically
const { AIAgentHelper } = require('./core/ai-agent-helper.js')
const helper = new AIAgentHelper()
await helper.createBackup()
```

### Restore from Backup
```bash
# Interactive restore
npm run ai-menu
# Choose "Restore Documentation"
# Select backup to restore

# Or programmatically
await helper.restoreBackup('2024-01-15T10-30-00')
```

### Backup Management
```bash
# List backups
await helper.listBackups()

# Delete old backup
await helper.deleteBackup('2024-01-15T10-30-00')

# Get backup statistics
await helper.getBackupStats()
```

## 🎯 Use Cases

### Web Development
- **React/Next.js Projects** - Use Full-Stack Web Development Playbook
- **Frontend Projects** - Use Springer Nature Frontend Playbook
- **API Development** - Use Standard Development Workflow

### Team Development
- **Agile Teams** - Use Agile Development Workflow
- **Open Source** - Use Open Source Project Workflow
- **Microservices** - Use Microservices Architecture Playbook

### AI-Assisted Development
- **AI Pair Programming** - Use Full-Stack Web Development Playbook
- **Documentation Automation** - Use built-in AI agent helper
- **Project Scaffolding** - Use template system for new projects

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** following the development playbooks
4. **Add tests** if applicable
5. **Update documentation** using the AI agent system
6. **Submit a pull request**

### Development Guidelines
- Follow the Standard Development Workflow
- Use the built-in testing framework
- Update documentation with changes
- Follow conventional commit messages
- Ensure all tests pass

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/lovinglifemediawebdev/ai-agent-system/issues)
- **Documentation**: [Wiki](https://github.com/lovinglifemediawebdev/ai-agent-system/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/lovinglifemediawebdev/ai-agent-system/discussions)

## �� Examples

### Web Application Setup
```bash
cd my-react-app
npm run install-project
# Choose "Web Application" when prompted
# Select "Full-Stack Web Development Playbook"
# Customize the generated templates
```

### API Service Setup
```bash
cd my-api-service
npm run install-project
# Choose "API Service" when prompted
# Select "Standard Development Workflow"
# Configure for your API framework
```

### Frontend Project Setup
```bash
cd my-frontend-app
npm run install-project
# Choose "Web Application" when prompted
# Select "Springer Nature Frontend Playbook"
# Configure for accessibility and performance
```

### Mobile App Setup
```bash
cd my-mobile-app
npm run install-project
# Choose "Mobile App" when prompted
# Select "Standard Development Workflow"
# Configure for your mobile platform
```

## 🚀 Roadmap

### Upcoming Features
- [ ] **Git Integration** - Automatic commit messages and branch tracking
- [ ] **Schema Validation** - Configuration file validation
- [ ] **Unit Tests** - Comprehensive test coverage
- [ ] **Plugin System** - Extensible functionality
- [ ] **Web Dashboard** - Browser-based interface
- [ ] **Team Collaboration** - Multi-user support
- [ ] **Analytics Dashboard** - Project metrics and insights

### Recent Updates
- ✅ **Non-Interactive Changelog Tools** - Bypass CLI hanging issues with direct command-line tools
- ✅ **Cross-Platform Support** - Windows batch files and Node.js scripts for all platforms
- ✅ **Comprehensive Playbook System** - Multiple development methodologies
- ✅ **Springer Nature Frontend Playbook** - Production-tested frontend guidelines
- ✅ **GPT-5 Full-Stack Playbook** - Modern web development practices
- ✅ **Backup & Restore System** - Document versioning and rollback
- ✅ **Advanced CLI Interface** - Comprehensive command-line tools
- ✅ **Error Handling & Validation** - Robust error management
- ✅ **Template Management** - Dynamic template generation

---

**Happy coding with AI agents! 🤖✨**

*Built with ❤️ for the AI development community*

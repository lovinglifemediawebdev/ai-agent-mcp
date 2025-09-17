# AI Agent System

A reusable system for automatic project documentation updates by AI agents. This system allows AI agents to automatically maintain project documentation, changelogs, and status updates across multiple projects.

## 🚀 Features

- **Automatic Documentation Updates** - AI agents can update project docs automatically
- **Multi-Project Support** - Use the same system across different projects
- **Configurable** - Customize for different project types and needs
- **Easy Installation** - Simple setup in any project
- **Interactive Interface** - User-friendly menu system
- **Changelog Management** - Automatic changelog generation and updates
- **Status Tracking** - Keep track of project status and improvements

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g ai-agent-system
```

Then in any project:
```bash
ai-agent install
```

### Local Installation

```bash
git clone https://github.com/yourusername/ai-agent-system.git
cd ai-agent-system
npm install
```

Then copy to your project:
```bash
cp -r ai-agent-system /path/to/your/project/
cd /path/to/your/project/
npm run install-project
```

## 🎯 Quick Start

1. **Install the system:**
   ```bash
   ai-agent install
   ```

2. **Customize your project:**
   - Edit `AI_INSTRUCTIONS.md` with your project details
   - Update `CHANGELOG.md` with your project overview

3. **Start using:**
   ```bash
   npm run ai-menu
   ```

## 📋 Available Commands

### Interactive Commands
- `npm run ai-menu` - Interactive menu with all options
- `npm run view-changes` - View recent changes
- `npm run view-status` - View current project status
- `npm run ai-update` - Update documentation

### Direct Commands
- `ai-agent install` - Install system in current project
- `ai-agent setup` - Setup project configuration
- `ai-agent test` - Test the system

## 🤖 AI Agent Usage

AI agents can use this system to automatically update project documentation:

```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

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

## ⚙️ Configuration

The system uses `.ai-agent-config.json` for project-specific configuration:

```json
{
  "projectName": "My Project",
  "projectType": "web-app",
  "aiInstructionsFile": "AI_INSTRUCTIONS.md",
  "changelogFile": "CHANGELOG.md",
  "autoUpdateChangelog": true,
  "customSections": []
}
```

### Project Types

- `web-app` - Web applications (React/Next.js, Vue, etc.)
- `api` - API services (Node.js/Express, FastAPI, etc.)
- `mobile-app` - Mobile applications (React Native, Flutter, etc.)
- `desktop-app` - Desktop applications (Electron, Tauri, etc.)
- `library` - Libraries and packages (NPM, PyPI, etc.)
- `other` - Other project types

## 📁 Project Structure

After installation, your project will have:

```
your-project/
├── .ai-agent-config.json     # Configuration file
├── AI_INSTRUCTIONS.md        # AI agent instructions
├── CHANGELOG.md              # User-friendly changelog
├── scripts/
│   └── ai-agent/             # AI Agent system files
│       ├── ai-agent-helper.js
│       ├── auto-update-ai.js
│       ├── changelog-updater.js
│       └── config-manager.js
└── package.json              # Updated with AI Agent scripts
```

## 🔧 Customization

### Custom Sections

Add custom sections to your documentation:

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
    }
  ]
}
```

### Custom Templates

Create project-specific templates by modifying the generated files or updating the configuration.

## 🧪 Testing

Test the system in your project:

```bash
npm run ai-menu
# Choose option 2 (Detailed Update)
# Add test changes and verify they appear in both files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-agent-system/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/ai-agent-system/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ai-agent-system/discussions)

## 🎉 Examples

### Web Application
```bash
cd my-react-app
ai-agent install
# Choose "Web Application" when prompted
# Customize the generated templates
```

### API Service
```bash
cd my-api-service
ai-agent install
# Choose "API Service" when prompted
# Update with your API-specific details
```

### Mobile App
```bash
cd my-mobile-app
ai-agent install
# Choose "Mobile App" when prompted
# Configure for your mobile platform
```

---

**Happy coding with AI agents! 🤖✨**

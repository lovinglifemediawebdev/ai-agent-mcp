# AI Agent System - Quick Start Guide

Get up and running with the AI Agent system in under 5 minutes!

## 🚀 Installation

### Option 1: Global Installation (Recommended)
```bash
npm install -g ai-agent-system
cd your-project
ai-agent install
```

### Option 2: Local Installation
```bash
git clone https://github.com/yourusername/ai-agent-system.git
cd ai-agent-system
npm install
cp -r . /path/to/your/project/ai-agent-system/
cd /path/to/your/project/
npm run install-project
```

## ⚡ Quick Setup

1. **Run the installer:**
   ```bash
   ai-agent install
   ```

2. **Answer the prompts:**
   - Project name: `My Awesome Project`
   - Project type: `Web Application`

3. **Customize your files:**
   - Edit `AI_INSTRUCTIONS.md` with your project details
   - Update `CHANGELOG.md` with your project overview

4. **Test the system:**
   ```bash
   npm run ai-menu
   ```

## 🎯 Basic Usage

### For Users
```bash
# View recent changes
npm run view-changes

# View current status
npm run view-status

# Interactive menu
npm run ai-menu
```

### For AI Agents
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// Update documentation
await updateAIInstructions(
  ["Fixed authentication bug", "Added new dashboard"],
  "All tests passing, ready for deployment",
  ["Add more test coverage", "Optimize performance"]
)
```

## 📋 What Gets Created

After installation, you'll have:

```
your-project/
├── .ai-agent-config.json     # Configuration
├── AI_INSTRUCTIONS.md        # AI agent instructions
├── CHANGELOG.md              # User-friendly changelog
├── scripts/ai-agent/         # AI Agent system
└── package.json              # Updated with new scripts
```

## 🔧 Configuration

The system creates a `.ai-agent-config.json` file:

```json
{
  "projectName": "My Awesome Project",
  "projectType": "web-app",
  "aiInstructionsFile": "AI_INSTRUCTIONS.md",
  "changelogFile": "CHANGELOG.md",
  "autoUpdateChangelog": true
}
```

## 🧪 Test It Out

1. **Make a test update:**
   ```bash
   npm run ai-menu
   # Choose option 2 (Detailed Update)
   # Add: "Tested AI Agent system"
   # Status: "System working perfectly"
   # Next: "Add more features"
   ```

2. **View the results:**
   ```bash
   npm run view-changes
   ```

3. **Check both files:**
   - `AI_INSTRUCTIONS.md` - Technical documentation
   - `CHANGELOG.md` - User-friendly changes

## 🎉 You're Done!

Your AI Agent system is now ready to use! AI agents can automatically update your project documentation, and you can easily view changes using the provided commands.

## 🆘 Need Help?

- **Full Documentation**: [README.md](README.md)
- **Examples**: [EXAMPLES.md](EXAMPLES.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-agent-system/issues)

---

**Happy coding with AI agents! 🤖✨**

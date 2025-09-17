# AI Agent System - Examples

Real-world examples of how to use the AI Agent system across different project types.

## 🌐 Web Application Example

### Project Setup
```bash
cd my-react-app
ai-agent install
# Choose "Web Application" when prompted
```

### AI Agent Usage
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// After fixing a bug
await updateAIInstructions(
  ["Fixed memory leak in component rendering", "Optimized bundle size"],
  "Bug fixed, performance improved by 30%",
  ["Add performance monitoring", "Implement lazy loading"]
)

// After adding a feature
await updateAIInstructions(
  ["Added dark mode toggle", "Created theme context", "Updated all components"],
  "Dark mode feature complete and tested",
  ["Add theme persistence", "Create theme preview"]
)

// After deployment
await updateAIInstructions(
  ["Deployed to production", "Updated CDN configuration"],
  "Successfully deployed to production, all systems operational",
  ["Monitor performance metrics", "Set up error tracking"]
)
```

## 🔌 API Service Example

### Project Setup
```bash
cd my-api-service
ai-agent install
# Choose "API Service" when prompted
```

### AI Agent Usage
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// After adding new endpoints
await updateAIInstructions(
  ["Added /users endpoint", "Implemented JWT authentication", "Created user validation"],
  "New user management API complete",
  ["Add rate limiting", "Create API documentation"]
)

// After fixing security issues
await updateAIInstructions(
  ["Fixed SQL injection vulnerability", "Added input sanitization", "Updated security headers"],
  "Security vulnerabilities patched, all tests passing",
  ["Conduct security audit", "Add automated security testing"]
)

// After performance optimization
await updateAIInstructions(
  ["Added Redis caching", "Optimized database queries", "Implemented connection pooling"],
  "API response time improved by 60%",
  ["Add performance monitoring", "Implement caching strategies"]
)
```

## 📱 Mobile App Example

### Project Setup
```bash
cd my-mobile-app
ai-agent install
# Choose "Mobile App" when prompted
```

### AI Agent Usage
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// After adding new screens
await updateAIInstructions(
  ["Added profile screen", "Implemented navigation", "Created user settings"],
  "New user interface screens complete",
  ["Add animations", "Implement offline support"]
)

// After fixing bugs
await updateAIInstructions(
  ["Fixed crash on Android 12", "Resolved memory issues", "Updated dependencies"],
  "App stable across all platforms",
  ["Add crash reporting", "Implement error boundaries"]
)

// After adding features
await updateAIInstructions(
  ["Added push notifications", "Implemented biometric auth", "Created offline mode"],
  "New features ready for testing",
  ["Test on multiple devices", "Add analytics tracking"]
)
```

## 📚 Library/Package Example

### Project Setup
```bash
cd my-npm-package
ai-agent install
# Choose "Library/Package" when prompted
```

### AI Agent Usage
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// After releasing new version
await updateAIInstructions(
  ["Released v2.0.0", "Added TypeScript support", "Breaking changes documented"],
  "Major release complete, all tests passing",
  ["Update documentation", "Create migration guide"]
)

// After fixing issues
await updateAIInstructions(
  ["Fixed memory leak in v1.9.1", "Added error handling", "Improved performance"],
  "Patch release ready, backward compatible",
  ["Monitor usage metrics", "Plan next major version"]
)

// After adding features
await updateAIInstructions(
  ["Added new utility functions", "Created helper methods", "Updated examples"],
  "New features added, documentation updated",
  ["Write unit tests", "Create usage examples"]
)
```

## 🖥️ Desktop App Example

### Project Setup
```bash
cd my-desktop-app
ai-agent install
# Choose "Desktop App" when prompted
```

### AI Agent Usage
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

// After adding features
await updateAIInstructions(
  ["Added file manager", "Implemented drag and drop", "Created context menus"],
  "New file management features complete",
  ["Add keyboard shortcuts", "Implement file preview"]
)

// After fixing issues
await updateAIInstructions(
  ["Fixed window resizing bug", "Resolved memory leaks", "Updated Electron version"],
  "App stable and performant",
  ["Add automated testing", "Implement auto-updater"]
)

// After UI improvements
await updateAIInstructions(
  ["Redesigned main interface", "Added dark theme", "Improved accessibility"],
  "UI overhaul complete, user feedback positive",
  ["Add more themes", "Implement custom layouts"]
)
```

## 🔧 Custom Configuration Examples

### Advanced Configuration
```json
{
  "projectName": "My Complex Project",
  "projectType": "web-app",
  "aiInstructionsFile": "docs/AI_INSTRUCTIONS.md",
  "changelogFile": "docs/CHANGELOG.md",
  "autoUpdateChangelog": true,
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
  ],
  "npmScripts": {
    "ai-menu": "node scripts/ai-agent/ai-agent-helper.js menu",
    "view-changes": "node scripts/ai-agent/ai-agent-helper.js view-changes",
    "view-status": "node scripts/ai-agent/ai-agent-helper.js view-status",
    "ai-update": "node scripts/ai-agent/ai-agent-helper.js update"
  }
}
```

### Project-Specific Templates
```javascript
// Custom template for a specific project
const customTemplate = {
  projectOverview: 'This is a specialized e-commerce platform with advanced features.',
  keyFeatures: [
    'Multi-tenant architecture',
    'Advanced inventory management',
    'Real-time analytics',
    'Mobile-responsive design'
  ],
  technicalStack: [
    'Next.js 14 with App Router',
    'TypeScript',
    'PostgreSQL with Prisma',
    'Redis for caching',
    'Stripe for payments'
  ]
}
```

## 🧪 Testing Examples

### Test the System
```bash
# Test basic functionality
npm run ai-menu
# Choose option 2 (Detailed Update)
# Add test changes and verify

# Test viewing changes
npm run view-changes

# Test status viewing
npm run view-status
```

### Automated Testing
```javascript
// Test script for CI/CD
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')

async function testAIAgent() {
  try {
    await updateAIInstructions(
      ["Test update from CI/CD"],
      "Automated test successful",
      ["Add more automated tests"]
    )
    console.log('✅ AI Agent system working correctly')
  } catch (error) {
    console.error('❌ AI Agent system test failed:', error)
    process.exit(1)
  }
}

testAIAgent()
```

## 🎯 Best Practices

### For AI Agents
1. **Be Specific**: Use clear, descriptive change messages
2. **Include Context**: Explain why changes were made
3. **Update Status**: Always provide current project status
4. **Plan Ahead**: Include next steps and improvements

### For Users
1. **Regular Updates**: Check changes regularly using `npm run view-changes`
2. **Customize Templates**: Update templates for your specific project
3. **Monitor Status**: Keep track of project status and improvements
4. **Backup Config**: Keep your `.ai-agent-config.json` in version control

## 🚀 Advanced Usage

### Custom Scripts
```json
{
  "scripts": {
    "ai-menu": "node scripts/ai-agent/ai-agent-helper.js menu",
    "ai-status": "node scripts/ai-agent/ai-agent-helper.js view-status",
    "ai-changes": "node scripts/ai-agent/ai-agent-helper.js view-changes",
    "ai-update": "node scripts/ai-agent/ai-agent-helper.js update",
    "ai-test": "node scripts/ai-agent/ai-agent-helper.js test"
  }
}
```

### Integration with CI/CD
```yaml
# GitHub Actions example
- name: Update AI Documentation
  run: |
    npm run ai-update
    git add AI_INSTRUCTIONS.md CHANGELOG.md
    git commit -m "Update AI documentation"
    git push
```

---

**These examples should help you get started with the AI Agent system in your projects! 🚀**

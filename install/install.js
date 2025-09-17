#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ConfigManager } = require('../core/config-manager.js')
const { TemplateManager } = require('../core/template-manager.js')
const chalk = require('chalk')
const inquirer = require('inquirer')

/**
 * AI Agent System Installer
 * Installs the AI Agent system into a project
 */

class AIAgentInstaller {
  constructor() {
    this.projectRoot = process.cwd()
    this.configManager = new ConfigManager(this.projectRoot)
  }

  async install() {
    console.log(chalk.blue.bold('\n🤖 AI Agent System Installer\n'))
    console.log(chalk.gray('This will set up automatic AI documentation updates for your project.\n'))

    try {
      // Check if already installed
      if (await fs.pathExists(path.join(this.projectRoot, '.ai-agent-config.json'))) {
        const { overwrite } = await inquirer.prompt([{
          type: 'confirm',
          name: 'overwrite',
          message: 'AI Agent system already installed. Overwrite existing configuration?',
          default: false
        }])

        if (!overwrite) {
          console.log(chalk.yellow('Installation cancelled.'))
          return
        }
      }

      // Get project information
      const projectInfo = await this.getProjectInfo()
      
      // Initialize configuration
      await this.configManager.initializeProject(projectInfo.name, projectInfo.type)
      
      // Copy core files
      await this.copyCoreFiles()
      
      // Create templates
      await this.createTemplates(projectInfo)
      
      // Update package.json
      await this.updatePackageJson()
      
      // Create npm scripts
      await this.createNpmScripts()
      
      console.log(chalk.green.bold('\n✅ AI Agent System installed successfully!\n'))
      console.log(chalk.blue('Available commands:'))
      console.log(chalk.gray('  npm run ai-menu      - Interactive menu'))
      console.log(chalk.gray('  npm run view-changes - View recent changes'))
      console.log(chalk.gray('  npm run view-status  - View project status'))
      console.log(chalk.gray('  npm run ai-update    - Update documentation\n'))
      
      console.log(chalk.yellow('Next steps:'))
      console.log(chalk.gray('1. Customize AI_INSTRUCTIONS.md with your project details'))
      console.log(chalk.gray('2. Update CHANGELOG.md with your project overview'))
      console.log(chalk.gray('3. Start using the AI agent system!\n'))

    } catch (error) {
      console.error(chalk.red('❌ Installation failed:'), error.message)
      process.exit(1)
    }
  }

  async getProjectInfo() {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: this.getProjectNameFromPackageJson() || 'My Project',
        validate: (input) => input.length > 0 || 'Project name is required'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Project type:',
        choices: [
          { name: 'Web Application (React/Next.js)', value: 'web-app' },
          { name: 'API Service (Node.js/Express)', value: 'api' },
          { name: 'Mobile App (React Native/Flutter)', value: 'mobile-app' },
          { name: 'Desktop App (Electron/Tauri)', value: 'desktop-app' },
          { name: 'Library/Package (NPM)', value: 'library' },
          { name: 'Other', value: 'other' }
        ],
        default: 'web-app'
      }
    ]

    return await inquirer.prompt(questions)
  }

  getProjectNameFromPackageJson() {
    try {
      const packageJson = fs.readJsonSync(path.join(this.projectRoot, 'package.json'))
      return packageJson.name
    } catch {
      return null
    }
  }

  async copyCoreFiles() {
    const coreFiles = [
      'ai-agent-helper.js',
      'auto-update-ai.js',
      'changelog-updater.js',
      'config-manager.js'
    ]

    const scriptsDir = path.join(this.projectRoot, 'scripts', 'ai-agent')
    await fs.ensureDir(scriptsDir)

    for (const file of coreFiles) {
      const sourcePath = path.join(__dirname, '..', 'core', file)
      const destPath = path.join(scriptsDir, file)
      
      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, destPath)
        console.log(chalk.gray(`  ✓ Copied ${file}`))
      }
    }
  }

  async createTemplates(projectInfo) {
    const templateManager = new TemplateManager(this.projectRoot)
    
    // Create AI_INSTRUCTIONS.md template
    const aiInstructionsTemplate = templateManager.generateAIInstructionsTemplate(projectInfo.type, projectInfo)
    await fs.writeFile(
      path.join(this.projectRoot, 'AI_INSTRUCTIONS.md'),
      aiInstructionsTemplate
    )
    console.log(chalk.gray('  ✓ Created AI_INSTRUCTIONS.md'))

    // Create CHANGELOG.md template
    const changelogTemplate = templateManager.generateChangelogTemplate(projectInfo.type, projectInfo)
    await fs.writeFile(
      path.join(this.projectRoot, 'CHANGELOG.md'),
      changelogTemplate
    )
    console.log(chalk.gray('  ✓ Created CHANGELOG.md'))
  }


  async updatePackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json')
    
    if (await fs.pathExists(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath)
      
      // Add AI Agent scripts if not already present
      const aiAgentScripts = {
        'ai-menu': 'node scripts/ai-agent/ai-agent-helper.js menu',
        'view-changes': 'node scripts/ai-agent/ai-agent-helper.js view-changes',
        'view-status': 'node scripts/ai-agent/ai-agent-helper.js view-status',
        'ai-update': 'node scripts/ai-agent/ai-agent-helper.js update'
      }

      packageJson.scripts = { ...packageJson.scripts, ...aiAgentScripts }
      
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 })
      console.log(chalk.gray('  ✓ Updated package.json with AI Agent scripts'))
    }
  }

  async createNpmScripts() {
    // This is handled by updatePackageJson
    console.log(chalk.gray('  ✓ Created npm scripts'))
  }
}

// Run installer if called directly
if (require.main === module) {
  const installer = new AIAgentInstaller()
  installer.install().catch(console.error)
}

module.exports = { AIAgentInstaller }

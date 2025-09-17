#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { ConfigManager } = require('../core/config-manager.js')
const { TemplateManager } = require('../core/template-manager.js')
const { ErrorHandler } = require('../core/error-handler.js')

/**
 * AI Agent System Project Setup
 * Interactive setup for existing projects
 */

class ProjectSetup {
  constructor() {
    this.projectRoot = process.cwd()
    this.configManager = new ConfigManager(this.projectRoot)
  }

  async setup() {
    console.log(chalk.blue.bold('\n🔧 AI Agent System - Project Setup\n'))
    console.log(chalk.gray('This will help you configure the AI Agent system for your existing project.\n'))

    try {
      // Check if system is already installed
      const configExists = await fs.pathExists(path.join(this.projectRoot, '.ai-agent-config.json'))
      const scriptsDir = path.join(this.projectRoot, 'scripts', 'ai-agent')
      const scriptsExist = await fs.pathExists(scriptsDir)

      if (configExists || scriptsExist) {
        const { action } = await inquirer.prompt([{
          type: 'list',
          name: 'action',
          message: 'AI Agent system appears to be already installed. What would you like to do?',
          choices: [
            { name: 'Reconfigure existing installation', value: 'reconfigure' },
            { name: 'Update to latest version', value: 'update' },
            { name: 'Reset to defaults', value: 'reset' },
            { name: 'Cancel setup', value: 'cancel' }
          ]
        }])

        if (action === 'cancel') {
          console.log(chalk.yellow('Setup cancelled.'))
          return
        }

        await this.handleExistingInstallation(action)
      } else {
        await this.newProjectSetup()
      }

    } catch (error) {
      const errorInfo = ErrorHandler.handle(error, { operation: 'setup' })
      process.exit(errorInfo.exitCode)
    }
  }

  async handleExistingInstallation(action) {
    switch (action) {
      case 'reconfigure':
        await this.reconfigureProject()
        break
      case 'update':
        await this.updateProject()
        break
      case 'reset':
        await this.resetProject()
        break
    }
  }

  async newProjectSetup() {
    console.log(chalk.blue('Setting up AI Agent system for new project...\n'))

    // Get project information
    const projectInfo = await this.getProjectInfo()
    
    // Initialize configuration
    await this.configManager.initializeProject(projectInfo.name, projectInfo.type)
    console.log(chalk.green('✓ Configuration initialized'))
    
    // Copy core files
    await this.copyCoreFiles()
    
    // Create templates
    await this.createTemplates(projectInfo)
    
    // Update package.json
    await this.updatePackageJson()
    
    console.log(chalk.green.bold('\n✅ AI Agent System setup complete!\n'))
    this.showNextSteps()
  }

  async reconfigureProject() {
    console.log(chalk.blue('Reconfiguring existing AI Agent installation...\n'))

    const currentConfig = await this.configManager.loadConfig()
    console.log(chalk.gray(`Current project: ${currentConfig.projectName} (${currentConfig.projectType})`))

    // Get updated project information
    const projectInfo = await this.getProjectInfo(currentConfig)
    
    // Update configuration
    await this.configManager.updateConfig({
      projectName: projectInfo.name,
      projectType: projectInfo.type,
      lastUpdated: new Date().toISOString()
    })
    
    console.log(chalk.green('✓ Configuration updated'))
    
    // Update templates if requested
    const { updateTemplates } = await inquirer.prompt([{
      type: 'confirm',
      name: 'updateTemplates',
      message: 'Update project templates with new configuration?',
      default: false
    }])

    if (updateTemplates) {
      await this.createTemplates(projectInfo)
      console.log(chalk.green('✓ Templates updated'))
    }

    console.log(chalk.green.bold('\n✅ Project reconfiguration complete!\n'))
  }

  async updateProject() {
    console.log(chalk.blue('Updating AI Agent system...\n'))

    // Copy latest core files
    await this.copyCoreFiles()
    console.log(chalk.green('✓ Core files updated'))

    // Update package.json scripts
    await this.updatePackageJson()
    console.log(chalk.green('✓ Package.json updated'))

    console.log(chalk.green.bold('\n✅ AI Agent system updated!\n'))
  }

  async resetProject() {
    const { confirm } = await inquirer.prompt([{
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to reset to defaults? This will overwrite your current configuration.',
      default: false
    }])

    if (!confirm) {
      console.log(chalk.yellow('Reset cancelled.'))
      return
    }

    console.log(chalk.blue('Resetting AI Agent system to defaults...\n'))

    // Get fresh project info
    const projectInfo = await this.getProjectInfo()
    
    // Reinitialize everything
    await this.configManager.initializeProject(projectInfo.name, projectInfo.type)
    await this.copyCoreFiles()
    await this.createTemplates(projectInfo)
    await this.updatePackageJson()

    console.log(chalk.green.bold('\n✅ AI Agent system reset complete!\n'))
  }

  async getProjectInfo(currentConfig = null) {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: currentConfig?.projectName || this.getProjectNameFromPackageJson() || 'My Project',
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
        default: currentConfig?.projectType || 'web-app'
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
      'config-manager.js',
      'error-handler.js'
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
    console.log(chalk.gray('  ✓ Created/updated AI_INSTRUCTIONS.md'))

    // Create CHANGELOG.md template
    const changelogTemplate = templateManager.generateChangelogTemplate(projectInfo.type, projectInfo)
    await fs.writeFile(
      path.join(this.projectRoot, 'CHANGELOG.md'),
      changelogTemplate
    )
    console.log(chalk.gray('  ✓ Created/updated CHANGELOG.md'))
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

  showNextSteps() {
    console.log(chalk.blue('Available commands:'))
    console.log(chalk.gray('  npm run ai-menu      - Interactive menu'))
    console.log(chalk.gray('  npm run view-changes - View recent changes'))
    console.log(chalk.gray('  npm run view-status  - View project status'))
    console.log(chalk.gray('  npm run ai-update    - Update documentation\n'))
    
    console.log(chalk.yellow('Next steps:'))
    console.log(chalk.gray('1. Customize AI_INSTRUCTIONS.md with your project details'))
    console.log(chalk.gray('2. Update CHANGELOG.md with your project overview'))
    console.log(chalk.gray('3. Start using the AI agent system!\n'))
  }
}

// Run setup if called directly
if (require.main === module) {
  const setup = new ProjectSetup()
  setup.setup().catch(console.error)
}

module.exports = { ProjectSetup }

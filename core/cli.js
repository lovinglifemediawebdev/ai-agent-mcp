#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { AIAgentHelper } = require('./ai-agent-helper.js')
const { ConfigManager } = require('./config-manager.js')
const { ErrorHandler } = require('./error-handler.js')
const { DevelopmentPlaybook } = require('./development-playbook.js')
const { AIPlaybookReader } = require('./ai-playbook-reader.js')

/**
 * AI Agent System CLI Interface
 * Comprehensive command-line interface for the AI Agent system
 */

class AIAgentCLI {
  constructor() {
    this.projectRoot = process.cwd()
    this.helper = new AIAgentHelper(this.projectRoot)
    this.configManager = new ConfigManager(this.projectRoot)
    this.playbookManager = new DevelopmentPlaybook(this.projectRoot)
    this.playbookReader = new AIPlaybookReader(this.projectRoot)
  }

  async run() {
    const args = process.argv.slice(2)
    const command = args[0]

    try {
      switch (command) {
        case 'menu':
        case undefined:
          await this.showMenu()
          break
        case 'update':
          await this.updateCommand(args.slice(1))
          break
        case 'view-changes':
          await this.viewChanges()
          break
        case 'view-status':
          await this.viewStatus()
          break
        case 'config':
          await this.configCommand(args.slice(1))
          break
        case 'validate':
          await this.validateCommand()
          break
        case 'backup':
          await this.backupCommand()
          break
        case 'restore':
          await this.restoreCommand(args.slice(1))
          break
        case 'playbook':
          await this.playbookCommand(args.slice(1))
          break
        case 'help':
          this.showHelp()
          break
        default:
          console.log(chalk.red(`Unknown command: ${command}`))
          this.showHelp()
          process.exit(1)
      }
    } catch (error) {
      const errorInfo = ErrorHandler.handle(error, { command, args })
      process.exit(errorInfo.exitCode)
    }
  }

  async showMenu() {
    console.log(chalk.blue.bold('\n🤖 AI Agent System - Main Menu\n'))

    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { name: '📝 Update Documentation', value: 'update' },
        { name: '👀 View Recent Changes', value: 'view-changes' },
        { name: '📊 View Project Status', value: 'view-status' },
        { name: '⚙️  Configuration', value: 'config' },
        { name: '🔍 Validate System', value: 'validate' },
        { name: '💾 Backup Documentation', value: 'backup' },
        { name: '🔄 Restore Documentation', value: 'restore' },
        { name: '📚 Development Playbooks', value: 'playbook' },
        { name: '❓ Help', value: 'help' },
        { name: '🚪 Exit', value: 'exit' }
      ]
    }])

    if (action === 'exit') {
      console.log(chalk.gray('Goodbye! 👋'))
      return
    }

    // Execute the selected action
    await this.executeMenuAction(action)
  }

  async executeMenuAction(action) {
    switch (action) {
      case 'update':
        await this.updateCommand()
        break
      case 'view-changes':
        await this.viewChanges()
        break
      case 'view-status':
        await this.viewStatus()
        break
      case 'config':
        await this.configCommand()
        break
      case 'validate':
        await this.validateCommand()
        break
      case 'backup':
        await this.backupCommand()
        break
      case 'restore':
        await this.restoreCommand()
        break
      case 'playbook':
        await this.playbookCommand()
        break
      case 'help':
        this.showHelp()
        break
    }

    // Return to menu
    const { returnToMenu } = await inquirer.prompt([{
      type: 'confirm',
      name: 'returnToMenu',
      message: 'Return to main menu?',
      default: true
    }])

    if (returnToMenu) {
      await this.showMenu()
    }
  }

  async updateCommand(args = []) {
    console.log(chalk.blue.bold('\n📝 Update Documentation\n'))

    // Check if quick update mode (from command line args)
    if (args.length >= 2) {
      const changes = args[0].split(',').map(c => c.trim())
      const status = args[1]
      const next = args[2] ? args[2].split(',').map(n => n.trim()) : []

      await this.helper.initialize()
      const result = await this.helper.updateAIInstructions(changes, status, next)
      
      if (result) {
        console.log(chalk.green('✅ Documentation updated successfully!'))
      } else {
        console.log(chalk.red('❌ Failed to update documentation'))
      }
      return
    }

    // Interactive update mode
    const { updateType } = await inquirer.prompt([{
      type: 'list',
      name: 'updateType',
      message: 'What type of update would you like to make?',
      choices: [
        { name: '📋 Full Update (Changes + Status + Next)', value: 'full' },
        { name: '📝 Changes Only', value: 'changes' },
        { name: '📊 Status Only', value: 'status' },
        { name: '🔮 Next Improvements Only', value: 'next' }
      ]
    }])

    switch (updateType) {
      case 'full':
        await this.fullUpdate()
        break
      case 'changes':
        await this.changesOnlyUpdate()
        break
      case 'status':
        await this.statusOnlyUpdate()
        break
      case 'next':
        await this.nextOnlyUpdate()
        break
    }
  }

  async fullUpdate() {
    const questions = [
      {
        type: 'input',
        name: 'changes',
        message: 'Enter changes (comma-separated):',
        validate: (input) => input.trim().length > 0 || 'Changes are required'
      },
      {
        type: 'input',
        name: 'status',
        message: 'Enter current project status:',
        validate: (input) => input.trim().length > 0 || 'Status is required'
      },
      {
        type: 'input',
        name: 'next',
        message: 'Enter next improvements (comma-separated, optional):'
      }
    ]

    const answers = await inquirer.prompt(questions)
    
    const changes = answers.changes.split(',').map(c => c.trim()).filter(c => c.length > 0)
    const status = answers.status
    const next = answers.next ? answers.next.split(',').map(n => n.trim()).filter(n => n.length > 0) : []

    await this.helper.initialize()
    const result = await this.helper.fullUpdate(changes, status, next)
    
    if (result) {
      console.log(chalk.green('✅ Full update completed successfully!'))
    } else {
      console.log(chalk.red('❌ Failed to complete full update'))
    }
  }

  async changesOnlyUpdate() {
    const { changes } = await inquirer.prompt([{
      type: 'input',
      name: 'changes',
      message: 'Enter changes (comma-separated):',
      validate: (input) => input.trim().length > 0 || 'Changes are required'
    }])

    const changesArray = changes.split(',').map(c => c.trim()).filter(c => c.length > 0)
    
    await this.helper.initialize()
    const result = await this.helper.addChanges(changesArray)
    
    if (result) {
      console.log(chalk.green('✅ Changes added successfully!'))
    } else {
      console.log(chalk.red('❌ Failed to add changes'))
    }
  }

  async statusOnlyUpdate() {
    const { status } = await inquirer.prompt([{
      type: 'input',
      name: 'status',
      message: 'Enter current project status:',
      validate: (input) => input.trim().length > 0 || 'Status is required'
    }])

    await this.helper.initialize()
    const result = await this.helper.updateStatus(status)
    
    if (result) {
      console.log(chalk.green('✅ Status updated successfully!'))
    } else {
      console.log(chalk.red('❌ Failed to update status'))
    }
  }

  async nextOnlyUpdate() {
    const { next } = await inquirer.prompt([{
      type: 'input',
      name: 'next',
      message: 'Enter next improvements (comma-separated):',
      validate: (input) => input.trim().length > 0 || 'Next improvements are required'
    }])

    const nextArray = next.split(',').map(n => n.trim()).filter(n => n.length > 0)
    
    await this.helper.initialize()
    const result = await this.helper.updateAIInstructions([], '', nextArray)
    
    if (result) {
      console.log(chalk.green('✅ Next improvements updated successfully!'))
    } else {
      console.log(chalk.red('❌ Failed to update next improvements'))
    }
  }

  async viewChanges() {
    console.log(chalk.blue.bold('\n👀 Recent Changes\n'))

    try {
      await this.helper.initialize()
      const aiInstructionsPath = path.join(this.projectRoot, 'AI_INSTRUCTIONS.md')
      
      if (await fs.pathExists(aiInstructionsPath)) {
        const content = await fs.readFile(aiInstructionsPath, 'utf8')
        
        // Extract changes section
        const changesMatch = content.match(/\*\*Recent Modifications:\*\*\s*\n((?:- .+\n?)*)/)
        const statusMatch = content.match(/\*\*Current Status:\*\*\s*\n- (.+)/)
        const nextMatch = content.match(/\*\*Next Planned Improvements:\*\*\s*\n((?:- .+\n?)*)/)
        
        if (changesMatch && changesMatch[1]) {
          console.log(chalk.yellow('📝 Recent Modifications:'))
          console.log(chalk.gray(changesMatch[1].trim()))
        } else {
          console.log(chalk.gray('No recent changes documented'))
        }
        
        if (statusMatch && statusMatch[1]) {
          console.log(chalk.blue('\n📊 Current Status:'))
          console.log(chalk.gray(`- ${statusMatch[1]}`))
        }
        
        if (nextMatch && nextMatch[1]) {
          console.log(chalk.green('\n🔮 Next Planned Improvements:'))
          console.log(chalk.gray(nextMatch[1].trim()))
        }
      } else {
        console.log(chalk.red('AI_INSTRUCTIONS.md not found. Run setup first.'))
      }
    } catch (error) {
      console.log(chalk.red('Failed to read changes:', error.message))
    }
  }

  async viewStatus() {
    console.log(chalk.blue.bold('\n📊 Project Status\n'))

    try {
      await this.helper.initialize()
      const config = await this.configManager.loadConfig()
      const projectInfo = await this.helper.getProjectInfo()
      
      console.log(chalk.blue('Project Information:'))
      console.log(chalk.gray(`  Name: ${projectInfo.projectName}`))
      console.log(chalk.gray(`  Type: ${projectInfo.projectType}`))
      console.log(chalk.gray(`  AI Instructions: ${config.aiInstructionsFile}`))
      console.log(chalk.gray(`  Changelog: ${config.changelogFile}`))
      console.log(chalk.gray(`  Auto-update Changelog: ${config.autoUpdateChangelog ? 'Yes' : 'No'}`))
      
      // Show current status from AI instructions
      await this.viewChanges()
      
    } catch (error) {
      console.log(chalk.red('Failed to get project status:', error.message))
    }
  }

  async configCommand(args = []) {
    console.log(chalk.blue.bold('\n⚙️  Configuration\n'))

    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'Configuration action:',
      choices: [
        { name: '👀 View Current Config', value: 'view' },
        { name: '✏️  Edit Configuration', value: 'edit' },
        { name: '🔄 Reset to Defaults', value: 'reset' }
      ]
    }])

    switch (action) {
      case 'view':
        await this.viewConfig()
        break
      case 'edit':
        await this.editConfig()
        break
      case 'reset':
        await this.resetConfig()
        break
    }
  }

  async viewConfig() {
    try {
      const config = await this.configManager.loadConfig()
      console.log(chalk.blue('\nCurrent Configuration:'))
      console.log(JSON.stringify(config, null, 2))
    } catch (error) {
      console.log(chalk.red('Failed to load configuration:', error.message))
    }
  }

  async editConfig() {
    try {
      const config = await this.configManager.loadConfig()
      
      const questions = [
        {
          type: 'input',
          name: 'projectName',
          message: 'Project name:',
          default: config.projectName
        },
        {
          type: 'list',
          name: 'projectType',
          message: 'Project type:',
          choices: [
            { name: 'Web Application', value: 'web-app' },
            { name: 'API Service', value: 'api' },
            { name: 'Mobile App', value: 'mobile-app' },
            { name: 'Desktop App', value: 'desktop-app' },
            { name: 'Library/Package', value: 'library' },
            { name: 'Other', value: 'other' }
          ],
          default: config.projectType
        },
        {
          type: 'input',
          name: 'aiInstructionsFile',
          message: 'AI Instructions file:',
          default: config.aiInstructionsFile
        },
        {
          type: 'input',
          name: 'changelogFile',
          message: 'Changelog file:',
          default: config.changelogFile
        },
        {
          type: 'confirm',
          name: 'autoUpdateChangelog',
          message: 'Auto-update changelog?',
          default: config.autoUpdateChangelog
        }
      ]

      const answers = await inquirer.prompt(questions)
      
      await this.configManager.updateConfig(answers)
      console.log(chalk.green('✅ Configuration updated successfully!'))
      
    } catch (error) {
      console.log(chalk.red('Failed to update configuration:', error.message))
    }
  }

  async resetConfig() {
    const { confirm } = await inquirer.prompt([{
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to reset configuration to defaults?',
      default: false
    }])

    if (confirm) {
      try {
        const config = await this.configManager.loadConfig()
        await this.configManager.initializeProject(config.projectName, config.projectType)
        console.log(chalk.green('✅ Configuration reset to defaults!'))
      } catch (error) {
        console.log(chalk.red('Failed to reset configuration:', error.message))
      }
    }
  }

  async validateCommand() {
    console.log(chalk.blue.bold('\n🔍 System Validation\n'))

    try {
      const { SystemTester } = require('../install/test-system.js')
      const tester = new SystemTester()
      await tester.runTests()
    } catch (error) {
      console.log(chalk.red('Validation failed:', error.message))
    }
  }

  async backupCommand() {
    console.log(chalk.blue.bold('\n💾 Backup Documentation\n'))

    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const backupDir = path.join(this.projectRoot, '.ai-agent-backups', timestamp)
      
      await fs.ensureDir(backupDir)
      
      const config = await this.configManager.loadConfig()
      const aiInstructionsPath = path.join(this.projectRoot, config.aiInstructionsFile)
      const changelogPath = path.join(this.projectRoot, config.changelogFile)
      
      if (await fs.pathExists(aiInstructionsPath)) {
        await fs.copy(aiInstructionsPath, path.join(backupDir, 'AI_INSTRUCTIONS.md'))
      }
      
      if (await fs.pathExists(changelogPath)) {
        await fs.copy(changelogPath, path.join(backupDir, 'CHANGELOG.md'))
      }
      
      console.log(chalk.green(`✅ Backup created at: ${backupDir}`))
      
    } catch (error) {
      console.log(chalk.red('Failed to create backup:', error.message))
    }
  }

  async restoreCommand(args = []) {
    console.log(chalk.blue.bold('\n🔄 Restore Documentation\n'))

    try {
      const backupsDir = path.join(this.projectRoot, '.ai-agent-backups')
      
      if (!await fs.pathExists(backupsDir)) {
        console.log(chalk.red('No backups found'))
        return
      }
      
      const backups = await fs.readdir(backupsDir)
      const backupChoices = backups.map(backup => ({
        name: backup.replace(/-/g, ':').replace(/T/, ' ').substring(0, 19),
        value: backup
      }))
      
      if (backupChoices.length === 0) {
        console.log(chalk.red('No backups found'))
        return
      }
      
      const { selectedBackup } = await inquirer.prompt([{
        type: 'list',
        name: 'selectedBackup',
        message: 'Select backup to restore:',
        choices: backupChoices
      }])
      
      const backupPath = path.join(backupsDir, selectedBackup)
      const config = await this.configManager.loadConfig()
      
      const aiInstructionsBackup = path.join(backupPath, 'AI_INSTRUCTIONS.md')
      const changelogBackup = path.join(backupPath, 'CHANGELOG.md')
      
      if (await fs.pathExists(aiInstructionsBackup)) {
        await fs.copy(aiInstructionsBackup, path.join(this.projectRoot, config.aiInstructionsFile))
        console.log(chalk.green('✅ AI_INSTRUCTIONS.md restored'))
      }
      
      if (await fs.pathExists(changelogBackup)) {
        await fs.copy(changelogBackup, path.join(this.projectRoot, config.changelogFile))
        console.log(chalk.green('✅ CHANGELOG.md restored'))
      }
      
    } catch (error) {
      console.log(chalk.red('Failed to restore backup:', error.message))
    }
  }

  async playbookCommand(args = []) {
    console.log(chalk.blue.bold('\n📚 Development Playbooks\n'))

    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'Playbook action:',
      choices: [
        { name: '📋 List Available Playbooks', value: 'list' },
        { name: '👀 View Playbook Content', value: 'view' },
        { name: '🔍 Search Playbook', value: 'search' },
        { name: '⚡ Quick Reference', value: 'quickref' },
        { name: '🔄 Generate All Playbooks', value: 'generate' }
      ]
    }])

    switch (action) {
      case 'list':
        await this.listPlaybooks()
        break
      case 'view':
        await this.viewPlaybook()
        break
      case 'search':
        await this.searchPlaybook()
        break
      case 'quickref':
        await this.showQuickReference()
        break
      case 'generate':
        await this.generatePlaybooks()
        break
    }
  }

  async listPlaybooks() {
    try {
      const playbooks = await this.playbookManager.listPlaybooks()
      
      console.log(chalk.blue('\nAvailable Development Playbooks:\n'))
      
      for (const playbook of playbooks) {
        const status = playbook.exists ? chalk.green('✓') : chalk.red('✗')
        console.log(`${status} ${chalk.bold(playbook.name)}`)
        console.log(chalk.gray(`   ${playbook.description}`))
        console.log(chalk.gray(`   Categories: ${playbook.categories.join(', ')}`))
        console.log(chalk.gray(`   File: ${playbook.file}`))
        console.log('')
      }
    } catch (error) {
      console.log(chalk.red('Failed to list playbooks:', error.message))
    }
  }

  async viewPlaybook() {
    try {
      const playbooks = await this.playbookManager.listPlaybooks()
      const availablePlaybooks = playbooks.filter(p => p.exists)
      
      if (availablePlaybooks.length === 0) {
        console.log(chalk.yellow('No playbooks available. Generate them first.'))
        return
      }

      const { selectedPlaybook } = await inquirer.prompt([{
        type: 'list',
        name: 'selectedPlaybook',
        message: 'Select playbook to view:',
        choices: availablePlaybooks.map(p => ({
          name: p.name,
          value: p.key
        }))
      }])

      const content = await this.playbookManager.getPlaybook(selectedPlaybook)
      
      console.log(chalk.blue(`\n📖 ${availablePlaybooks.find(p => p.key === selectedPlaybook)?.name}\n`))
      console.log(content)
      
    } catch (error) {
      console.log(chalk.red('Failed to view playbook:', error.message))
    }
  }

  async searchPlaybook() {
    try {
      const playbooks = await this.playbookManager.listPlaybooks()
      const availablePlaybooks = playbooks.filter(p => p.exists)
      
      if (availablePlaybooks.length === 0) {
        console.log(chalk.yellow('No playbooks available. Generate them first.'))
        return
      }

      const { selectedPlaybook, searchTerm } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedPlaybook',
          message: 'Select playbook to search:',
          choices: availablePlaybooks.map(p => ({
            name: p.name,
            value: p.key
          }))
        },
        {
          type: 'input',
          name: 'searchTerm',
          message: 'Search term:',
          validate: (input) => input.trim().length > 0 || 'Search term is required'
        }
      ])

      const results = await this.playbookReader.searchPlaybook(selectedPlaybook, searchTerm)
      
      console.log(chalk.blue(`\n🔍 Search Results for "${searchTerm}" in ${availablePlaybooks.find(p => p.key === selectedPlaybook)?.name}\n`))
      
      if (results.length === 0) {
        console.log(chalk.yellow('No results found.'))
        return
      }

      for (const result of results) {
        console.log(chalk.gray(`Line ${result.line}:`))
        console.log(chalk.white(result.content))
        console.log(chalk.gray('---'))
      }
      
    } catch (error) {
      console.log(chalk.red('Failed to search playbook:', error.message))
    }
  }

  async showQuickReference() {
    try {
      const playbooks = await this.playbookManager.listPlaybooks()
      const availablePlaybooks = playbooks.filter(p => p.exists)
      
      if (availablePlaybooks.length === 0) {
        console.log(chalk.yellow('No playbooks available. Generate them first.'))
        return
      }

      const { selectedPlaybook } = await inquirer.prompt([{
        type: 'list',
        name: 'selectedPlaybook',
        message: 'Select playbook for quick reference:',
        choices: availablePlaybooks.map(p => ({
          name: p.name,
          value: p.key
        }))
      }])

      const quickRef = await this.playbookReader.getQuickReference(selectedPlaybook)
      
      console.log(chalk.blue(`\n⚡ Quick Reference - ${availablePlaybooks.find(p => p.key === selectedPlaybook)?.name}\n`))
      
      if (quickRef.projectStructure) {
        console.log(chalk.yellow('📁 Project Structure:'))
        console.log(chalk.gray(quickRef.projectStructure))
        console.log('')
      }
      
      if (quickRef.fileNaming) {
        console.log(chalk.yellow('📝 File Naming Conventions:'))
        Object.entries(quickRef.fileNaming).forEach(([type, convention]) => {
          console.log(chalk.gray(`  ${type}: ${convention}`))
        })
        console.log('')
      }
      
      if (quickRef.workflows) {
        console.log(chalk.yellow('🔄 Development Workflows:'))
        quickRef.workflows.forEach(workflow => {
          console.log(chalk.gray(`  - ${workflow}`))
        })
        console.log('')
      }
      
      if (quickRef.standards) {
        console.log(chalk.yellow('📋 Code Standards:'))
        quickRef.standards.forEach(standard => {
          console.log(chalk.gray(`  - ${standard}`))
        })
        console.log('')
      }
      
      if (quickRef.guidelines) {
        console.log(chalk.yellow('🤖 AI Agent Guidelines:'))
        quickRef.guidelines.forEach(guideline => {
          console.log(chalk.gray(`  - ${guideline}`))
        })
      }
      
    } catch (error) {
      console.log(chalk.red('Failed to show quick reference:', error.message))
    }
  }

  async generatePlaybooks() {
    try {
      console.log(chalk.blue('Generating all development playbooks...\n'))
      
      const generated = await this.playbookManager.generateAllPlaybooks()
      
      console.log(chalk.green('✅ Generated playbooks:'))
      generated.forEach(playbook => {
        console.log(chalk.gray(`  ✓ ${playbook.name} - ${playbook.path}`))
      })
      
    } catch (error) {
      console.log(chalk.red('Failed to generate playbooks:', error.message))
    }
  }

  showHelp() {
    console.log(chalk.blue.bold('\n❓ AI Agent System Help\n'))
    
    console.log(chalk.yellow('Available Commands:'))
    console.log(chalk.gray('  ai-agent                    - Show interactive menu'))
    console.log(chalk.gray('  ai-agent menu              - Show interactive menu'))
    console.log(chalk.gray('  ai-agent update [args]     - Update documentation'))
    console.log(chalk.gray('  ai-agent view-changes      - View recent changes'))
    console.log(chalk.gray('  ai-agent view-status       - View project status'))
    console.log(chalk.gray('  ai-agent config            - Configuration management'))
    console.log(chalk.gray('  ai-agent validate          - Validate system'))
    console.log(chalk.gray('  ai-agent backup            - Backup documentation'))
    console.log(chalk.gray('  ai-agent restore           - Restore documentation'))
    console.log(chalk.gray('  ai-agent playbook          - Development playbooks'))
    console.log(chalk.gray('  ai-agent help              - Show this help'))
    
    console.log(chalk.yellow('\nQuick Update Examples:'))
    console.log(chalk.gray('  ai-agent update "Fixed bug,Added feature" "All tests passing" "Add more tests"'))
    console.log(chalk.gray('  ai-agent update "Deployed to production" "Live and stable"'))
    
    console.log(chalk.yellow('\nNPM Scripts:'))
    console.log(chalk.gray('  npm run ai-menu            - Interactive menu'))
    console.log(chalk.gray('  npm run view-changes       - View recent changes'))
    console.log(chalk.gray('  npm run view-status        - View project status'))
    console.log(chalk.gray('  npm run ai-update          - Update documentation'))
    
    console.log(chalk.yellow('\nFor more information, visit:'))
    console.log(chalk.gray('  https://github.com/yourusername/ai-agent-system'))
  }
}

// Run CLI if called directly
if (require.main === module) {
  const cli = new AIAgentCLI()
  cli.run().catch(console.error)
}

module.exports = { AIAgentCLI }

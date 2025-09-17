#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { AIAgentHelper } = require('../core/ai-agent-helper.js')
const { ConfigManager } = require('../core/config-manager.js')
const { ErrorHandler } = require('../core/error-handler.js')

/**
 * AI Agent System Test Suite
 * Comprehensive testing for the AI Agent system
 */

class SystemTester {
  constructor() {
    this.projectRoot = process.cwd()
    this.testResults = {
      passed: 0,
      failed: 0,
      total: 0,
      errors: []
    }
  }

  async runTests() {
    console.log(chalk.blue.bold('\n🧪 AI Agent System Test Suite\n'))
    console.log(chalk.gray('Running comprehensive tests to verify system functionality...\n'))

    try {
      // Check if system is installed
      const configExists = await fs.pathExists(path.join(this.projectRoot, '.ai-agent-config.json'))
      const scriptsDir = path.join(this.projectRoot, 'scripts', 'ai-agent')
      const scriptsExist = await fs.pathExists(scriptsDir)

      if (!configExists || !scriptsExist) {
        console.log(chalk.red('❌ AI Agent system not installed. Run "npm run install-project" first.'))
        process.exit(1)
      }

      // Run test suite
      await this.testConfiguration()
      await this.testCoreFiles()
      await this.testHelperFunctions()
      await this.testFileOperations()
      await this.testValidation()
      await this.testErrorHandling()

      // Display results
      this.displayResults()

    } catch (error) {
      const errorInfo = ErrorHandler.handle(error, { operation: 'testSystem' })
      process.exit(errorInfo.exitCode)
    }
  }

  async testConfiguration() {
    this.logTest('Configuration Management')

    try {
      const configManager = new ConfigManager(this.projectRoot)
      const config = await configManager.loadConfig()

      // Test basic config structure
      this.assert(config.projectName, 'Project name should exist')
      this.assert(config.projectType, 'Project type should exist')
      this.assert(config.aiInstructionsFile, 'AI instructions file should exist')
      this.assert(config.changelogFile, 'Changelog file should exist')
      this.assert(typeof config.autoUpdateChangelog === 'boolean', 'Auto update changelog should be boolean')

      // Test config validation
      const invalidConfig = { projectName: '', projectType: 'invalid' }
      const validationErrors = require('../core/error-handler.js').ValidationUtils.validateConfig(invalidConfig)
      this.assert(validationErrors.length > 0, 'Should detect invalid configuration')

      this.logPass('Configuration management working correctly')

    } catch (error) {
      this.logFail('Configuration management failed', error)
    }
  }

  async testCoreFiles() {
    this.logTest('Core Files')

    try {
      const coreFiles = [
        'ai-agent-helper.js',
        'auto-update-ai.js',
        'changelog-updater.js',
        'config-manager.js',
        'error-handler.js'
      ]

      for (const file of coreFiles) {
        const filePath = path.join(this.projectRoot, 'scripts', 'ai-agent', file)
        const exists = await fs.pathExists(filePath)
        this.assert(exists, `Core file ${file} should exist`)
      }

      this.logPass('All core files present')

    } catch (error) {
      this.logFail('Core files test failed', error)
    }
  }

  async testHelperFunctions() {
    this.logTest('Helper Functions')

    try {
      const helper = new AIAgentHelper(this.projectRoot)
      await helper.initialize()

      // Test basic functionality
      const projectInfo = await helper.getProjectInfo()
      this.assert(projectInfo.projectName, 'Should get project name')
      this.assert(projectInfo.projectType, 'Should get project type')

      // Test update functions with valid data
      const testChanges = ['Test change 1', 'Test change 2']
      const testStatus = 'Test status'
      const testNext = ['Test improvement 1']

      // Create backup of original files
      const aiInstructionsPath = path.join(this.projectRoot, 'AI_INSTRUCTIONS.md')
      const changelogPath = path.join(this.projectRoot, 'CHANGELOG.md')
      
      const aiInstructionsBackup = await fs.readFile(aiInstructionsPath, 'utf8')
      const changelogBackup = await fs.readFile(changelogPath, 'utf8')

      try {
        // Test update function
        const result = await helper.updateAIInstructions(testChanges, testStatus, testNext)
        this.assert(result === true, 'Update should succeed')

        // Verify files were updated
        const updatedAIInstructions = await fs.readFile(aiInstructionsPath, 'utf8')
        const updatedChangelog = await fs.readFile(changelogPath, 'utf8')

        this.assert(updatedAIInstructions.includes('Test change 1'), 'AI instructions should contain test change')
        this.assert(updatedChangelog.includes('Test change 1'), 'Changelog should contain test change')

      } finally {
        // Restore original files
        await fs.writeFile(aiInstructionsPath, aiInstructionsBackup)
        await fs.writeFile(changelogPath, changelogBackup)
      }

      this.logPass('Helper functions working correctly')

    } catch (error) {
      this.logFail('Helper functions test failed', error)
    }
  }

  async testFileOperations() {
    this.logTest('File Operations')

    try {
      const aiInstructionsPath = path.join(this.projectRoot, 'AI_INSTRUCTIONS.md')
      const changelogPath = path.join(this.projectRoot, 'CHANGELOG.md')

      // Test file existence
      this.assert(await fs.pathExists(aiInstructionsPath), 'AI_INSTRUCTIONS.md should exist')
      this.assert(await fs.pathExists(changelogPath), 'CHANGELOG.md should exist')

      // Test file content structure
      const aiContent = await fs.readFile(aiInstructionsPath, 'utf8')
      const changelogContent = await fs.readFile(changelogPath, 'utf8')

      this.assert(aiContent.includes('## Recent Changes & Updates'), 'AI instructions should have updates section')
      this.assert(changelogContent.includes('## Recent Changes & Updates'), 'Changelog should have updates section')

      this.logPass('File operations working correctly')

    } catch (error) {
      this.logFail('File operations test failed', error)
    }
  }

  async testValidation() {
    this.logTest('Input Validation')

    try {
      const { ValidationUtils } = require('../core/error-handler.js')

      // Test valid inputs
      const validChanges = ['Valid change']
      const validStatus = 'Valid status'
      const validNext = ['Valid improvement']

      const changeErrors = ValidationUtils.validateChanges(validChanges)
      const statusErrors = ValidationUtils.validateStatus(validStatus)
      const nextErrors = ValidationUtils.validateNextImprovements(validNext)

      this.assert(changeErrors.length === 0, 'Valid changes should pass validation')
      this.assert(statusErrors.length === 0, 'Valid status should pass validation')
      this.assert(nextErrors.length === 0, 'Valid next improvements should pass validation')

      // Test invalid inputs
      const invalidChanges = ['', null, undefined]
      const invalidChangeErrors = ValidationUtils.validateChanges(invalidChanges)
      this.assert(invalidChangeErrors.length > 0, 'Invalid changes should fail validation')

      this.logPass('Input validation working correctly')

    } catch (error) {
      this.logFail('Input validation test failed', error)
    }
  }

  async testErrorHandling() {
    this.logTest('Error Handling')

    try {
      const { ErrorHandler, ValidationError, FileSystemError } = require('../core/error-handler.js')

      // Test error creation
      const validationError = new ValidationError('Test error', 'testField', 'testValue')
      this.assert(validationError instanceof ValidationError, 'Should create validation error')
      this.assert(validationError.code === 'VALIDATION_ERROR', 'Should have correct error code')

      // Test error handling
      const errorInfo = ErrorHandler.handle(validationError, { test: 'context' })
      this.assert(errorInfo.message, 'Should return error message')
      this.assert(errorInfo.code === 'VALIDATION_ERROR', 'Should preserve error code')

      this.logPass('Error handling working correctly')

    } catch (error) {
      this.logFail('Error handling test failed', error)
    }
  }

  assert(condition, message) {
    this.testResults.total++
    if (condition) {
      this.testResults.passed++
    } else {
      this.testResults.failed++
      this.testResults.errors.push(message)
      throw new Error(`Assertion failed: ${message}`)
    }
  }

  logTest(testName) {
    console.log(chalk.blue(`\n📋 Testing: ${testName}`))
  }

  logPass(message) {
    console.log(chalk.green(`  ✅ ${message}`))
  }

  logFail(message, error) {
    console.log(chalk.red(`  ❌ ${message}`))
    if (error) {
      console.log(chalk.gray(`     ${error.message}`))
    }
  }

  displayResults() {
    console.log(chalk.blue.bold('\n📊 Test Results Summary\n'))
    
    const successRate = ((this.testResults.passed / this.testResults.total) * 100).toFixed(1)
    
    console.log(chalk.green(`✅ Passed: ${this.testResults.passed}`))
    console.log(chalk.red(`❌ Failed: ${this.testResults.failed}`))
    console.log(chalk.blue(`📊 Total: ${this.testResults.total}`))
    console.log(chalk.blue(`📈 Success Rate: ${successRate}%\n`))

    if (this.testResults.failed === 0) {
      console.log(chalk.green.bold('🎉 All tests passed! AI Agent system is working correctly.\n'))
      console.log(chalk.yellow('Next steps:'))
      console.log(chalk.gray('• Try: npm run ai-menu'))
      console.log(chalk.gray('• Try: npm run view-changes'))
      console.log(chalk.gray('• Try: npm run view-status\n'))
    } else {
      console.log(chalk.red.bold('⚠️  Some tests failed. Please check the errors above.\n'))
      console.log(chalk.yellow('Failed tests:'))
      this.testResults.errors.forEach(error => {
        console.log(chalk.gray(`  • ${error}`))
      })
      console.log('')
    }
  }
}

// Run tests if called directly
if (require.main === module) {
  const tester = new SystemTester()
  tester.runTests().catch(console.error)
}

module.exports = { SystemTester }

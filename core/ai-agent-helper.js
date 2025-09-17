#!/usr/bin/env node

const { autoUpdateAIInstructions } = require('./auto-update-ai.js')
const { updateChangelog } = require('./changelog-updater.js')
const { ConfigManager } = require('./config-manager.js')
const { ValidationUtils, ErrorHandler } = require('./error-handler.js')
const { BackupManager } = require('./backup-manager.js')

/**
 * AI Agent Helper Functions (Reusable Version)
 * These functions make it easy for AI agents to update both AI_INSTRUCTIONS.md and CHANGELOG.md
 * across different projects with project-specific configuration.
 */

class AIAgentHelper {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.configManager = new ConfigManager(projectRoot)
    this.backupManager = new BackupManager(projectRoot)
    this.config = null
  }

  /**
   * Initialize the helper with project configuration
   */
  async initialize() {
    this.config = await this.configManager.loadConfig()
    return this.config
  }

  /**
   * Quick update for AI agents - just changes
   * @param {string|string[]} changes - Single change or array of changes
   * @param {string} status - Current project status
   * @param {string|string[]} next - Next improvements (optional)
   */
  async updateAIInstructions(changes, status, next = []) {
    try {
      if (!this.config) await this.initialize()
      
      const changesArray = Array.isArray(changes) ? changes : [changes]
      const nextArray = Array.isArray(next) ? next : (next ? [next] : [])
      
      // Validate inputs
      const changeErrors = ValidationUtils.validateChanges(changesArray)
      const statusErrors = ValidationUtils.validateStatus(status)
      const nextErrors = ValidationUtils.validateNextImprovements(nextArray)
      
      const allErrors = [...changeErrors, ...statusErrors, ...nextErrors]
      if (allErrors.length > 0) {
        const errorMessages = allErrors.map(err => err.message).join(', ')
        throw new Error(`Validation failed: ${errorMessages}`)
      }
      
      // Create auto-backup if enabled
      await this.backupManager.autoBackup(this.config)
      
      // Update both AI instructions and changelog
      const aiResult = await autoUpdateAIInstructions(changesArray, status, nextArray, this.config)
      const changelogResult = this.config.autoUpdateChangelog ? 
        await updateChangelog(changesArray, status, nextArray, this.config) : true
      
      return aiResult && changelogResult
    } catch (error) {
      const errorInfo = ErrorHandler.handle(error, { 
        operation: 'updateAIInstructions', 
        changes: Array.isArray(changes) ? changes : [changes],
        status,
        next: Array.isArray(next) ? next : [next]
      })
      throw error
    }
  }

  /**
   * Update with just a status change
   * @param {string} status - New project status
   */
  async updateStatus(status) {
    if (!this.config) await this.initialize()
    
    const aiResult = await autoUpdateAIInstructions([], status, [], this.config)
    const changelogResult = this.config.autoUpdateChangelog ? 
      await updateChangelog([], status, [], this.config) : true
    
    return aiResult && changelogResult
  }

  /**
   * Add changes without updating status
   * @param {string|string[]} changes - Changes to add
   */
  async addChanges(changes) {
    if (!this.config) await this.initialize()
    
    const changesArray = Array.isArray(changes) ? changes : [changes]
    const aiResult = await autoUpdateAIInstructions(changesArray, '', [], this.config)
    const changelogResult = this.config.autoUpdateChangelog ? 
      await updateChangelog(changesArray, '', [], this.config) : true
    
    return aiResult && changelogResult
  }

  /**
   * Update everything at once
   * @param {string|string[]} changes - Changes made
   * @param {string} status - Current status
   * @param {string|string[]} next - Next improvements
   */
  async fullUpdate(changes, status, next) {
    if (!this.config) await this.initialize()
    
    const changesArray = Array.isArray(changes) ? changes : [changes]
    const nextArray = Array.isArray(next) ? next : (next ? [next] : [])
    
    const aiResult = await autoUpdateAIInstructions(changesArray, status, nextArray, this.config)
    const changelogResult = this.config.autoUpdateChangelog ? 
      await updateChangelog(changesArray, status, nextArray, this.config) : true
    
    return aiResult && changelogResult
  }

  /**
   * Get project information
   */
  async getProjectInfo() {
    if (!this.config) await this.initialize()
    
    return {
      projectName: this.config.projectName,
      projectType: this.config.projectType,
      files: this.configManager.getFilePaths(),
      templates: this.configManager.getTemplates()
    }
  }

  /**
   * Update project configuration
   */
  async updateConfig(updates) {
    return await this.configManager.updateConfig(updates)
  }

  /**
   * Create a backup of current documentation
   */
  async createBackup(options = {}) {
    if (!this.config) await this.initialize()
    return await this.backupManager.createBackup(this.config, options)
  }

  /**
   * Restore documentation from backup
   */
  async restoreBackup(backupTimestamp, options = {}) {
    if (!this.config) await this.initialize()
    return await this.backupManager.restoreBackup(backupTimestamp, this.config, options)
  }

  /**
   * List available backups
   */
  async listBackups() {
    return await this.backupManager.listBackups()
  }

  /**
   * Delete a backup
   */
  async deleteBackup(backupTimestamp) {
    return await this.backupManager.deleteBackup(backupTimestamp)
  }

  /**
   * Get backup statistics
   */
  async getBackupStats() {
    return await this.backupManager.getBackupStats()
  }
}

// Create singleton instance
const aiAgentHelper = new AIAgentHelper()

// Export both class and instance for flexibility
module.exports = {
  AIAgentHelper,
  // Convenience functions for backward compatibility
  updateAIInstructions: (...args) => aiAgentHelper.updateAIInstructions(...args),
  updateStatus: (...args) => aiAgentHelper.updateStatus(...args),
  addChanges: (...args) => aiAgentHelper.addChanges(...args),
  fullUpdate: (...args) => aiAgentHelper.fullUpdate(...args),
  autoUpdateAIInstructions: require('./auto-update-ai.js').autoUpdateAIInstructions
}

// If run directly, launch CLI interface
if (require.main === module) {
  const { AIAgentCLI } = require('./cli.js')
  const cli = new AIAgentCLI()
  cli.run().catch(console.error)
}

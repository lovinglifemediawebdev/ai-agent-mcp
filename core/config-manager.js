#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ValidationUtils, ConfigurationError, FileSystemError, ErrorHandler } = require('./error-handler.js')
const { TemplateManager } = require('./template-manager.js')

/**
 * Configuration Manager
 * Handles project-specific configuration for the AI Agent system
 */

class ConfigManager {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.configPath = path.join(projectRoot, '.ai-agent-config.json')
    this.config = null
    this.defaultConfig = {
      projectName: 'My Project',
      projectType: 'web-app',
      aiInstructionsFile: 'AI_INSTRUCTIONS.md',
      changelogFile: 'CHANGELOG.md',
      updateSection: '## Recent Changes & Updates',
      statusSection: '**Current Status:**',
      changesSection: '**Recent Modifications:**',
      nextSection: '**Next Planned Improvements:**',
      dateFormat: 'en-US',
      autoUpdateChangelog: true,
      customSections: [],
      npmScripts: {
        'view-changes': 'ai-agent view-changes',
        'view-status': 'ai-agent view-status',
        'ai-menu': 'ai-agent menu',
        'ai-update': 'ai-agent update'
      }
    }
  }

  /**
   * Load configuration from file or create default
   */
  async loadConfig() {
    try {
      if (await fs.pathExists(this.configPath)) {
        const config = await fs.readJson(this.configPath)
        const mergedConfig = { ...this.defaultConfig, ...config }
        
        // Validate configuration
        const validationErrors = ValidationUtils.validateConfig(mergedConfig)
        if (validationErrors.length > 0) {
          const errorMessages = validationErrors.map(err => err.message).join(', ')
          throw new ConfigurationError(`Configuration validation failed: ${errorMessages}`, this.configPath)
        }
        
        this.config = mergedConfig
        return mergedConfig
      }
      this.config = this.defaultConfig
      return this.defaultConfig
    } catch (error) {
      if (error instanceof ConfigurationError) {
        throw error
      }
      console.warn('⚠️  Could not load config, using defaults:', error.message)
      this.config = this.defaultConfig
      return this.defaultConfig
    }
  }

  /**
   * Save configuration to file
   */
  async saveConfig(config) {
    try {
      // Validate configuration before saving
      const validationErrors = ValidationUtils.validateConfig(config)
      if (validationErrors.length > 0) {
        const errorMessages = validationErrors.map(err => err.message).join(', ')
        throw new ConfigurationError(`Cannot save invalid configuration: ${errorMessages}`, this.configPath)
      }
      
      // Ensure directory exists
      await fs.ensureDir(path.dirname(this.configPath))
      
      await fs.writeJson(this.configPath, config, { spaces: 2 })
      this.config = config
      return true
    } catch (error) {
      if (error instanceof ConfigurationError) {
        throw error
      }
      throw new FileSystemError(`Failed to save configuration: ${error.message}`, this.configPath, 'write')
    }
  }

  /**
   * Initialize configuration for a new project
   */
  async initializeProject(projectName, projectType = 'web-app') {
    const config = {
      ...this.defaultConfig,
      projectName,
      projectType,
      initializedAt: new Date().toISOString()
    }
    
    await this.saveConfig(config)
    this.config = config
    return config
  }

  /**
   * Get file paths based on configuration
   */
  getFilePaths() {
    return {
      aiInstructions: path.join(this.projectRoot, (this.config || this.defaultConfig).aiInstructionsFile),
      changelog: path.join(this.projectRoot, (this.config || this.defaultConfig).changelogFile),
      config: this.configPath
    }
  }

  /**
   * Update configuration
   */
  async updateConfig(updates) {
    const currentConfig = await this.loadConfig()
    const newConfig = { ...currentConfig, ...updates }
    return await this.saveConfig(newConfig)
  }

  /**
   * Get project-specific templates
   */
  getTemplates() {
    const templateManager = new TemplateManager(this.projectRoot)
    return templateManager.getTemplate(this.config?.projectType || 'web-app')
  }
}

module.exports = { ConfigManager }

#!/usr/bin/env node

/**
 * Error Handler and Validation Utilities
 * Provides comprehensive error handling and validation for the AI Agent system
 */

class AIAgentError extends Error {
  constructor(message, code, details = {}) {
    super(message)
    this.name = 'AIAgentError'
    this.code = code
    this.details = details
    this.timestamp = new Date().toISOString()
  }
}

class ValidationError extends AIAgentError {
  constructor(message, field, value) {
    super(message, 'VALIDATION_ERROR', { field, value })
    this.name = 'ValidationError'
  }
}

class FileSystemError extends AIAgentError {
  constructor(message, path, operation) {
    super(message, 'FILE_SYSTEM_ERROR', { path, operation })
    this.name = 'FileSystemError'
  }
}

class ConfigurationError extends AIAgentError {
  constructor(message, configPath) {
    super(message, 'CONFIGURATION_ERROR', { configPath })
    this.name = 'ConfigurationError'
  }
}

class ValidationUtils {
  /**
   * Validate project configuration
   */
  static validateConfig(config) {
    const errors = []
    
    // Required fields
    const requiredFields = ['projectName', 'projectType', 'aiInstructionsFile', 'changelogFile']
    for (const field of requiredFields) {
      if (!config[field]) {
        errors.push(new ValidationError(`Missing required field: ${field}`, field, config[field]))
      }
    }
    
    // Validate project name
    if (config.projectName && (typeof config.projectName !== 'string' || config.projectName.trim().length === 0)) {
      errors.push(new ValidationError('Project name must be a non-empty string', 'projectName', config.projectName))
    }
    
    // Validate project type
    const validProjectTypes = ['web-app', 'api', 'mobile-app', 'desktop-app', 'library', 'other']
    if (config.projectType && !validProjectTypes.includes(config.projectType)) {
      errors.push(new ValidationError(`Invalid project type. Must be one of: ${validProjectTypes.join(', ')}`, 'projectType', config.projectType))
    }
    
    // Validate file names
    if (config.aiInstructionsFile && !this.isValidFileName(config.aiInstructionsFile)) {
      errors.push(new ValidationError('Invalid AI instructions file name', 'aiInstructionsFile', config.aiInstructionsFile))
    }
    
    if (config.changelogFile && !this.isValidFileName(config.changelogFile)) {
      errors.push(new ValidationError('Invalid changelog file name', 'changelogFile', config.changelogFile))
    }
    
    // Validate date format
    if (config.dateFormat && typeof config.dateFormat !== 'string') {
      errors.push(new ValidationError('Date format must be a string', 'dateFormat', config.dateFormat))
    }
    
    // Validate boolean fields
    if (config.autoUpdateChangelog !== undefined && typeof config.autoUpdateChangelog !== 'boolean') {
      errors.push(new ValidationError('autoUpdateChangelog must be a boolean', 'autoUpdateChangelog', config.autoUpdateChangelog))
    }
    
    return errors
  }
  
  /**
   * Validate file name
   */
  static isValidFileName(fileName) {
    if (typeof fileName !== 'string' || fileName.trim().length === 0) {
      return false
    }
    
    // Check for invalid characters
    const invalidChars = /[<>:"|?*\x00-\x1f]/
    if (invalidChars.test(fileName)) {
      return false
    }
    
    // Check for reserved names (Windows)
    const reservedNames = ['CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9']
    const baseName = fileName.split('.')[0].toUpperCase()
    if (reservedNames.includes(baseName)) {
      return false
    }
    
    return true
  }
  
  /**
   * Validate changes array
   */
  static validateChanges(changes) {
    const errors = []
    
    if (!Array.isArray(changes)) {
      errors.push(new ValidationError('Changes must be an array', 'changes', changes))
      return errors
    }
    
    changes.forEach((change, index) => {
      if (typeof change !== 'string' || change.trim().length === 0) {
        errors.push(new ValidationError(`Change at index ${index} must be a non-empty string`, `changes[${index}]`, change))
      }
    })
    
    return errors
  }
  
  /**
   * Validate status string
   */
  static validateStatus(status) {
    const errors = []
    
    if (status !== undefined && status !== null && typeof status !== 'string') {
      errors.push(new ValidationError('Status must be a string', 'status', status))
    }
    
    return errors
  }
  
  /**
   * Validate next improvements array
   */
  static validateNextImprovements(next) {
    const errors = []
    
    if (!Array.isArray(next)) {
      errors.push(new ValidationError('Next improvements must be an array', 'next', next))
      return errors
    }
    
    next.forEach((improvement, index) => {
      if (typeof improvement !== 'string' || improvement.trim().length === 0) {
        errors.push(new ValidationError(`Improvement at index ${index} must be a non-empty string`, `next[${index}]`, improvement))
      }
    })
    
    return errors
  }
}

class ErrorHandler {
  /**
   * Handle errors with proper logging and user feedback
   */
  static handle(error, context = {}) {
    let errorMessage = ''
    let exitCode = 1
    
    if (error instanceof AIAgentError) {
      errorMessage = this.formatAIAgentError(error, context)
    } else if (error instanceof Error) {
      errorMessage = this.formatGenericError(error, context)
    } else {
      errorMessage = this.formatUnknownError(error, context)
    }
    
    // Log error details
    console.error('\n❌ Error:', errorMessage)
    
    if (process.env.NODE_ENV === 'development' && error.stack) {
      console.error('\nStack trace:', error.stack)
    }
    
    // Return structured error info
    return {
      message: errorMessage,
      code: error.code || 'UNKNOWN_ERROR',
      exitCode,
      timestamp: new Date().toISOString(),
      context
    }
  }
  
  /**
   * Format AI Agent specific errors
   */
  static formatAIAgentError(error, context) {
    let message = `${error.name}: ${error.message}`
    
    if (error.details) {
      const details = Object.entries(error.details)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ')
      message += ` (${details})`
    }
    
    return message
  }
  
  /**
   * Format generic errors
   */
  static formatGenericError(error, context) {
    return `Unexpected error: ${error.message}`
  }
  
  /**
   * Format unknown errors
   */
  static formatUnknownError(error, context) {
    return `Unknown error: ${String(error)}`
  }
  
  /**
   * Handle async operations with error catching
   */
  static async safeAsync(operation, context = {}) {
    try {
      return await operation()
    } catch (error) {
      return this.handle(error, context)
    }
  }
  
  /**
   * Handle sync operations with error catching
   */
  static safeSync(operation, context = {}) {
    try {
      return operation()
    } catch (error) {
      return this.handle(error, context)
    }
  }
}

module.exports = {
  AIAgentError,
  ValidationError,
  FileSystemError,
  ConfigurationError,
  ValidationUtils,
  ErrorHandler
}

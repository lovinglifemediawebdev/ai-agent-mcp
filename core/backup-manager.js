#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ErrorHandler, FileSystemError } = require('./error-handler.js')

/**
 * Backup Manager
 * Handles backup and restore functionality for AI Agent documentation
 */

class BackupManager {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.backupDir = path.join(projectRoot, '.ai-agent-backups')
  }

  /**
   * Create a backup of current documentation
   */
  async createBackup(config, options = {}) {
    try {
      const timestamp = options.timestamp || new Date().toISOString().replace(/[:.]/g, '-')
      const backupPath = path.join(this.backupDir, timestamp)
      
      await fs.ensureDir(backupPath)
      
      const backupInfo = {
        timestamp: new Date().toISOString(),
        projectName: config.projectName,
        projectType: config.projectType,
        files: []
      }
      
      // Backup AI instructions
      const aiInstructionsPath = path.join(this.projectRoot, config.aiInstructionsFile)
      if (await fs.pathExists(aiInstructionsPath)) {
        const backupAIInstructionsPath = path.join(backupPath, 'AI_INSTRUCTIONS.md')
        await fs.copy(aiInstructionsPath, backupAIInstructionsPath)
        backupInfo.files.push({
          original: config.aiInstructionsFile,
          backup: 'AI_INSTRUCTIONS.md'
        })
      }
      
      // Backup changelog
      const changelogPath = path.join(this.projectRoot, config.changelogFile)
      if (await fs.pathExists(changelogPath)) {
        const backupChangelogPath = path.join(backupPath, 'CHANGELOG.md')
        await fs.copy(changelogPath, backupChangelogPath)
        backupInfo.files.push({
          original: config.changelogFile,
          backup: 'CHANGELOG.md'
        })
      }
      
      // Backup configuration
      const configPath = path.join(this.projectRoot, '.ai-agent-config.json')
      if (await fs.pathExists(configPath)) {
        const backupConfigPath = path.join(backupPath, 'config.json')
        await fs.copy(configPath, backupConfigPath)
        backupInfo.files.push({
          original: '.ai-agent-config.json',
          backup: 'config.json'
        })
      }
      
      // Save backup metadata
      await fs.writeJson(path.join(backupPath, 'backup-info.json'), backupInfo, { spaces: 2 })
      
      // Clean old backups if limit is set
      if (options.maxBackups && options.maxBackups > 0) {
        await this.cleanOldBackups(options.maxBackups)
      }
      
      return {
        success: true,
        backupPath,
        timestamp,
        filesBackedUp: backupInfo.files.length
      }
      
    } catch (error) {
      throw new FileSystemError(`Failed to create backup: ${error.message}`, this.backupDir, 'backup')
    }
  }

  /**
   * Restore documentation from backup
   */
  async restoreBackup(backupTimestamp, config, options = {}) {
    try {
      const backupPath = path.join(this.backupDir, backupTimestamp)
      
      if (!await fs.pathExists(backupPath)) {
        throw new FileSystemError(`Backup not found: ${backupTimestamp}`, backupPath, 'restore')
      }
      
      const backupInfoPath = path.join(backupPath, 'backup-info.json')
      let backupInfo = null
      
      if (await fs.pathExists(backupInfoPath)) {
        backupInfo = await fs.readJson(backupInfoPath)
      }
      
      const restoredFiles = []
      
      // Restore AI instructions
      const backupAIInstructionsPath = path.join(backupPath, 'AI_INSTRUCTIONS.md')
      if (await fs.pathExists(backupAIInstructionsPath)) {
        const aiInstructionsPath = path.join(this.projectRoot, config.aiInstructionsFile)
        await fs.copy(backupAIInstructionsPath, aiInstructionsPath)
        restoredFiles.push(config.aiInstructionsFile)
      }
      
      // Restore changelog
      const backupChangelogPath = path.join(backupPath, 'CHANGELOG.md')
      if (await fs.pathExists(backupChangelogPath)) {
        const changelogPath = path.join(this.projectRoot, config.changelogFile)
        await fs.copy(backupChangelogPath, changelogPath)
        restoredFiles.push(config.changelogFile)
      }
      
      // Restore configuration if requested
      if (options.restoreConfig) {
        const backupConfigPath = path.join(backupPath, 'config.json')
        if (await fs.pathExists(backupConfigPath)) {
          const configPath = path.join(this.projectRoot, '.ai-agent-config.json')
          await fs.copy(backupConfigPath, configPath)
          restoredFiles.push('.ai-agent-config.json')
        }
      }
      
      return {
        success: true,
        backupTimestamp,
        restoredFiles,
        backupInfo
      }
      
    } catch (error) {
      throw new FileSystemError(`Failed to restore backup: ${error.message}`, backupPath, 'restore')
    }
  }

  /**
   * List available backups
   */
  async listBackups() {
    try {
      if (!await fs.pathExists(this.backupDir)) {
        return []
      }
      
      const backups = await fs.readdir(this.backupDir)
      const backupList = []
      
      for (const backup of backups) {
        const backupPath = path.join(this.backupDir, backup)
        const backupInfoPath = path.join(backupPath, 'backup-info.json')
        
        let backupInfo = null
        if (await fs.pathExists(backupInfoPath)) {
          backupInfo = await fs.readJson(backupInfoPath)
        }
        
        backupList.push({
          timestamp: backup,
          created: backupInfo?.timestamp || null,
          projectName: backupInfo?.projectName || null,
          filesCount: backupInfo?.files?.length || 0,
          path: backupPath
        })
      }
      
      // Sort by timestamp (newest first)
      backupList.sort((a, b) => b.timestamp.localeCompare(a.timestamp))
      
      return backupList
      
    } catch (error) {
      throw new FileSystemError(`Failed to list backups: ${error.message}`, this.backupDir, 'list')
    }
  }

  /**
   * Delete a specific backup
   */
  async deleteBackup(backupTimestamp) {
    try {
      const backupPath = path.join(this.backupDir, backupTimestamp)
      
      if (!await fs.pathExists(backupPath)) {
        throw new FileSystemError(`Backup not found: ${backupTimestamp}`, backupPath, 'delete')
      }
      
      await fs.remove(backupPath)
      
      return {
        success: true,
        deletedBackup: backupTimestamp
      }
      
    } catch (error) {
      throw new FileSystemError(`Failed to delete backup: ${error.message}`, backupPath, 'delete')
    }
  }

  /**
   * Clean old backups, keeping only the specified number
   */
  async cleanOldBackups(maxBackups = 10) {
    try {
      const backups = await this.listBackups()
      
      if (backups.length <= maxBackups) {
        return { success: true, deletedCount: 0 }
      }
      
      const backupsToDelete = backups.slice(maxBackups)
      let deletedCount = 0
      
      for (const backup of backupsToDelete) {
        try {
          await fs.remove(backup.path)
          deletedCount++
        } catch (error) {
          console.warn(`Failed to delete backup ${backup.timestamp}: ${error.message}`)
        }
      }
      
      return {
        success: true,
        deletedCount,
        keptBackups: maxBackups
      }
      
    } catch (error) {
      throw new FileSystemError(`Failed to clean old backups: ${error.message}`, this.backupDir, 'clean')
    }
  }

  /**
   * Get backup statistics
   */
  async getBackupStats() {
    try {
      const backups = await this.listBackups()
      
      if (backups.length === 0) {
        return {
          totalBackups: 0,
          totalSize: 0,
          oldestBackup: null,
          newestBackup: null
        }
      }
      
      let totalSize = 0
      
      for (const backup of backups) {
        try {
          const stats = await fs.stat(backup.path)
          totalSize += stats.size
        } catch (error) {
          // Ignore errors for individual backups
        }
      }
      
      return {
        totalBackups: backups.length,
        totalSize,
        oldestBackup: backups[backups.length - 1]?.timestamp || null,
        newestBackup: backups[0]?.timestamp || null
      }
      
    } catch (error) {
      throw new FileSystemError(`Failed to get backup stats: ${error.message}`, this.backupDir, 'stats')
    }
  }

  /**
   * Auto-backup before updates (if enabled)
   */
  async autoBackup(config, options = {}) {
    try {
      const autoBackupEnabled = config.autoBackup || false
      const maxBackups = config.maxBackups || 5
      
      if (!autoBackupEnabled) {
        return { success: true, skipped: true, reason: 'Auto-backup disabled' }
      }
      
      const result = await this.createBackup(config, {
        maxBackups,
        ...options
      })
      
      return {
        success: true,
        autoBackup: true,
        ...result
      }
      
    } catch (error) {
      // Don't fail the main operation if auto-backup fails
      console.warn(`Auto-backup failed: ${error.message}`)
      return {
        success: false,
        error: error.message
      }
    }
  }
}

module.exports = { BackupManager }

#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')

/**
 * Changelog Updater (Reusable Version)
 * Updates the user-friendly CHANGELOG.md file with project-specific configuration
 */

async function updateChangelog(changes = [], status = '', nextImprovements = [], config = null) {
  // Load default config if not provided
  if (!config) {
    const { ConfigManager } = require('./config-manager.js')
    const configManager = new ConfigManager()
    config = await configManager.loadConfig()
  }

  const CHANGELOG_PATH = path.join(process.cwd(), config.changelogFile)
  
  try {
    // Read current changelog
    let content = await fs.readFile(CHANGELOG_PATH, 'utf8')
    
    // Get current date
    const now = new Date()
    const dateStr = now.toLocaleDateString(config.dateFormat, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    // Update last updated date
    content = content.replace(
      /### Last Updated: .*/,
      `### Last Updated: ${dateStr}`
    )
    
    // Update recent modifications if changes provided
    if (changes.length > 0) {
      const changesList = changes.map(change => `- ${change}`).join('\n')
      const changesSection = `**Recent Modifications:**\n${changesList}`
      
      content = content.replace(
        /\*\*Recent Modifications:\*\*\s*\n(?:- .+\n?)*/,
        changesSection
      )
    }
    
    // Update current status if provided
    if (status) {
      content = content.replace(
        /\*\*Current Status:\*\*\s*\n- .*/,
        `**Current Status:**\n- ${status}`
      )
    }
    
    // Update next improvements if provided
    if (nextImprovements.length > 0) {
      const nextList = nextImprovements.map(improvement => `- ${improvement}`).join('\n')
      const nextSection = `**Next Planned Improvements:**\n${nextList}`
      
      content = content.replace(
        /\*\*Next Planned Improvements:\*\*\s*\n(?:- .+\n?)*/,
        nextSection
      )
    }
    
    // Write updated content
    await fs.writeFile(CHANGELOG_PATH, content)
    
    console.log(`✅ ${config.changelogFile} updated successfully`)
    return true
    
  } catch (error) {
    console.error(`❌ Error updating ${config.changelogFile}:`, error.message)
    return false
  }
}

module.exports = { updateChangelog }

// If run directly, show usage
if (require.main === module) {
  console.log('📝 Changelog Updater (Reusable)')
  console.log('Usage: updateChangelog(changes, status, nextImprovements, config)')
  console.log('')
  console.log('Example:')
  console.log('await updateChangelog(["Fixed bug", "Added feature"], "All tests passing", ["Add more tests"])')
}

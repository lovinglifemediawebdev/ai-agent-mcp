#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { updateChangelog } = require('./changelog-updater.js')

/**
 * Auto-update AI Instructions (Reusable Version)
 * This function is called by AI agents to automatically update both AI_INSTRUCTIONS.md and CHANGELOG.md
 * when they make changes to the project. Works with project-specific configuration.
 */

async function autoUpdateAIInstructions(changes, status, nextImprovements, config = null) {
  // Load default config if not provided
  if (!config) {
    const { ConfigManager } = require('./config-manager.js')
    const configManager = new ConfigManager()
    config = await configManager.loadConfig()
  }

  const AI_INSTRUCTIONS_PATH = path.join(process.cwd(), config.aiInstructionsFile)
  
  try {
    let content = await fs.readFile(AI_INSTRUCTIONS_PATH, 'utf8')
    
    // Get current date
    const currentDate = new Date().toLocaleDateString(config.dateFormat, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    // Find and replace the update section
    const updateSectionRegex = new RegExp(`${config.updateSection}[\\s\\S]*?(?=## AI Agent Instructions|## Contact|$)`)
    
    const newUpdateSection = `${config.updateSection}

*This section should be updated after each modification to track project evolution*

### Last Updated: ${currentDate}

${config.changesSection}
${changes.length > 0 ? changes.map(change => `- ${change}`).join('\n') : '- [No recent changes documented]'}

${config.statusSection}
- ${status || 'Project status not updated'}

${config.nextSection}
${nextImprovements.length > 0 ? nextImprovements.map(improvement => `- ${improvement}`).join('\n') : '- [No planned improvements documented]'}
`

    // Replace the update section
    content = content.replace(updateSectionRegex, newUpdateSection)
    
    // Write back to file
    await fs.writeFile(AI_INSTRUCTIONS_PATH, content)
    
    // Also update the changelog if enabled
    let changelogResult = true
    if (config.autoUpdateChangelog) {
      changelogResult = await updateChangelog(changes, status, nextImprovements, config)
    }
    
    console.log(`✅ ${config.aiInstructionsFile} auto-updated successfully`)
    if (config.autoUpdateChangelog && changelogResult) {
      console.log(`✅ ${config.changelogFile} auto-updated successfully`)
    }
    console.log(`📅 Updated date: ${currentDate}`)
    console.log(`📝 Changes logged: ${changes.length}`)
    
    return true
  } catch (error) {
    console.error(`❌ Error auto-updating ${config.aiInstructionsFile}:`, error)
    return false
  }
}

// Export for use by AI agents
module.exports = { autoUpdateAIInstructions }

// If run directly, show usage
if (require.main === module) {
  console.log('🤖 AI Auto-Update Instructions (Reusable)')
  console.log('This script is designed to be called by AI agents.')
  console.log('Usage: const { autoUpdateAIInstructions } = require("./auto-update-ai.js")')
  console.log('await autoUpdateAIInstructions(changes, status, nextImprovements, config)')
}

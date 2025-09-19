#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { updateChangelog } = require('./changelog-updater.js')

/**
 * Auto-update AI Instructions
 * This function is called by AI agents to automatically update both AI_INSTRUCTIONS.md and CHANGELOG.md
 * when they make changes to the project.
 */

function autoUpdateAIInstructions(changes, status, nextImprovements) {
  const AI_INSTRUCTIONS_PATH = path.join(process.cwd(), 'AI_INSTRUCTIONS.md')
  
  try {
    let content = fs.readFileSync(AI_INSTRUCTIONS_PATH, 'utf8')
    
    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    // Find and replace the update section
    const updateSectionRegex = /## Recent Changes & Updates[\s\S]*?(?=## AI Agent Instructions)/
    
    const newUpdateSection = `## Recent Changes & Updates

*This section should be updated after each modification to track project evolution*

### Last Updated: ${currentDate}

**Recent Modifications:**
${changes.length > 0 ? changes.map(change => `- ${change}`).join('\n') : '- [No recent changes documented]'}

**Current Status:**
- ${status || 'Project status not updated'}

**Next Planned Improvements:**
${nextImprovements.length > 0 ? nextImprovements.map(improvement => `- ${improvement}`).join('\n') : '- [No planned improvements documented]'}
`

    // Replace the update section
    content = content.replace(updateSectionRegex, newUpdateSection)
    
    // Write back to file
    fs.writeFileSync(AI_INSTRUCTIONS_PATH, content)
    
    // Also update the changelog
    const changelogResult = updateChangelog(changes, status, nextImprovements)
    
    console.log('✅ AI_INSTRUCTIONS.md auto-updated successfully')
    if (changelogResult) {
      console.log('✅ CHANGELOG.md auto-updated successfully')
    }
    console.log(`📅 Updated date: ${currentDate}`)
    console.log(`📝 Changes logged: ${changes.length}`)
    
    return true
  } catch (error) {
    console.error('❌ Error auto-updating AI_INSTRUCTIONS.md:', error)
    return false
  }
}

// Export for use by AI agents
module.exports = { autoUpdateAIInstructions }

// If run directly, show usage
if (require.main === module) {
  console.log('🤖 AI Auto-Update Instructions')
  console.log('This script is designed to be called by AI agents.')
  console.log('Usage: const { autoUpdateAIInstructions } = require("./scripts/auto-update-ai.js")')
  console.log('autoUpdateAIInstructions(changes, status, nextImprovements)')
}

#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * Changelog Updater
 * Updates the user-friendly CHANGELOG.md file
 */

function updateChangelog(changes = [], status = '', nextImprovements = []) {
  const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md')
  
  try {
    // Read current changelog
    let content = fs.readFileSync(CHANGELOG_PATH, 'utf8')
    
    // Get current date
    const now = new Date()
    const dateStr = now.toLocaleDateString('en-US', {
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
    fs.writeFileSync(CHANGELOG_PATH, content)
    
    console.log('✅ CHANGELOG.md updated successfully')
    return true
    
  } catch (error) {
    console.error('❌ Error updating CHANGELOG.md:', error.message)
    return false
  }
}

module.exports = { updateChangelog }

// If run directly, show usage
if (require.main === module) {
  console.log('📝 Changelog Updater')
  console.log('Usage: updateChangelog(changes, status, nextImprovements)')
  console.log('')
  console.log('Example:')
  console.log('updateChangelog(["Fixed bug", "Added feature"], "All tests passing", ["Add more tests"])')
}


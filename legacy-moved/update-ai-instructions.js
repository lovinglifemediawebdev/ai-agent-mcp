#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function updateAIInstructions(changes = [], status = '', nextImprovements = []) {
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
    
    console.log('✅ AI_INSTRUCTIONS.md updated successfully')
    console.log(`📅 Updated date: ${currentDate}`)
    console.log(`📝 Changes logged: ${changes.length}`)
    
  } catch (error) {
    console.error('❌ Error updating AI_INSTRUCTIONS.md:', error)
    process.exit(1)
  }
}

// If run directly, update with example data
if (require.main === module) {
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.log('Usage: node scripts/update-ai-instructions.js "Change 1" "Change 2" --status "Status message" --next "Next improvement 1" "Next improvement 2"')
    console.log('Example: node scripts/update-ai-instructions.js "Fixed pricing bug" "Added new feature" --status "All tests passing" --next "Add more tests" "Improve performance"')
    process.exit(0)
  }
  
  // Parse arguments
  const changes = []
  const nextImprovements = []
  let status = ''
  let parsingStatus = false
  let parsingNext = false
  
  for (const arg of args) {
    if (arg === '--status') {
      parsingStatus = true
      parsingNext = false
    } else if (arg === '--next') {
      parsingStatus = false
      parsingNext = true
    } else if (parsingStatus) {
      status = arg
    } else if (parsingNext) {
      nextImprovements.push(arg)
    } else {
      changes.push(arg)
    }
  }
  
  updateAIInstructions(changes, status, nextImprovements)
}

module.exports = { updateAIInstructions }

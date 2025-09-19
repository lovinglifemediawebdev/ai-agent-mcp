#!/usr/bin/env node

/**
 * Simple Changelog Updater
 * Bypasses the interactive CLI to directly update documentation
 */

const { AIAgentHelper } = require('./core/ai-agent-helper.js')

async function updateChangelog(changes, status = '', next = []) {
  try {
    const helper = new AIAgentHelper()
    await helper.initialize()
    
    const result = await helper.updateAIInstructions(changes, status, next)
    
    if (result) {
      console.log('✅ Changelog updated successfully!')
      console.log(`📝 Changes logged: ${Array.isArray(changes) ? changes.length : 1}`)
    } else {
      console.log('❌ Failed to update changelog')
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Error updating changelog:', error.message)
    process.exit(1)
  }
}

// Get command line arguments
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log('Usage: node update-changelog.js "Change description" [status] [next]')
  console.log('Example: node update-changelog.js "Added new feature" "Feature complete" "Add tests"')
  process.exit(1)
}

const changes = args[0].split(',').map(c => c.trim()).filter(c => c.length > 0)
const status = args[1] || ''
const next = args[2] ? args[2].split(',').map(n => n.trim()).filter(n => n.length > 0) : []

updateChangelog(changes, status, next)

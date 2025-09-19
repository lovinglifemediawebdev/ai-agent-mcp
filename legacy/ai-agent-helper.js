#!/usr/bin/env node

const { autoUpdateAIInstructions } = require('./auto-update-ai.js')
const { updateChangelog } = require('./changelog-updater.js')

/**
 * AI Agent Helper Functions
 * These functions make it easy for AI agents to update both AI_INSTRUCTIONS.md and CHANGELOG.md
 */

/**
 * Quick update for AI agents - just changes
 * @param {string|string[]} changes - Single change or array of changes
 * @param {string} status - Current project status
 * @param {string|string[]} next - Next improvements (optional)
 */
function updateAIInstructions(changes, status, next = []) {
  const changesArray = Array.isArray(changes) ? changes : [changes]
  const nextArray = Array.isArray(next) ? next : (next ? [next] : [])
  
  // Update both AI instructions and changelog
  const aiResult = autoUpdateAIInstructions(changesArray, status, nextArray)
  const changelogResult = updateChangelog(changesArray, status, nextArray)
  
  return aiResult && changelogResult
}

/**
 * Update with just a status change
 * @param {string} status - New project status
 */
function updateStatus(status) {
  const aiResult = autoUpdateAIInstructions([], status, [])
  const changelogResult = updateChangelog([], status, [])
  return aiResult && changelogResult
}

/**
 * Add changes without updating status
 * @param {string|string[]} changes - Changes to add
 */
function addChanges(changes) {
  const changesArray = Array.isArray(changes) ? changes : [changes]
  const aiResult = autoUpdateAIInstructions(changesArray, '', [])
  const changelogResult = updateChangelog(changesArray, '', [])
  return aiResult && changelogResult
}

/**
 * Update everything at once
 * @param {string|string[]} changes - Changes made
 * @param {string} status - Current status
 * @param {string|string[]} next - Next improvements
 */
function fullUpdate(changes, status, next) {
  const changesArray = Array.isArray(changes) ? changes : [changes]
  const nextArray = Array.isArray(next) ? next : (next ? [next] : [])
  
  const aiResult = autoUpdateAIInstructions(changesArray, status, nextArray)
  const changelogResult = updateChangelog(changesArray, status, nextArray)
  return aiResult && changelogResult
}

// Export functions for AI agents
module.exports = {
  updateAIInstructions,
  updateStatus,
  addChanges,
  fullUpdate,
  autoUpdateAIInstructions
}

// If run directly, show usage
if (require.main === module) {
  console.log('🤖 AI Agent Helper Functions')
  console.log('Available functions:')
  console.log('- updateAIInstructions(changes, status, next)')
  console.log('- updateStatus(status)')
  console.log('- addChanges(changes)')
  console.log('- fullUpdate(changes, status, next)')
  console.log('')
  console.log('Example usage:')
  console.log('const { updateAIInstructions } = require("./scripts/ai-agent-helper.js")')
  console.log('updateAIInstructions("Fixed bug", "All tests passing", "Add more tests")')
}

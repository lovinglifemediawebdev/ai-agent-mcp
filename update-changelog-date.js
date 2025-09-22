#!/usr/bin/env node

/**
 * Update Changelog Date Script
 * Updates the "Last Updated" date in CHANGELOG.md with current date and timezone
 * 
 * Usage:
 *   node update-changelog-date.js [changelog-path]
 * 
 * Examples:
 *   node update-changelog-date.js
 *   node update-changelog-date.js ./CHANGELOG.md
 *   node update-changelog-date.js ./docs/CHANGELOG.md
 */

const path = require('path');
const fs = require('fs');
const { updateChangelogDate, getTimezoneInfo, validateChangelogDate } = require('./core/date-utils');

// Command line arguments
const args = process.argv.slice(2);
const changelogPath = args[0] || './CHANGELOG.md';

// Display script information
console.log('🕐 AI Agent MCP - Changelog Date Updater');
console.log('==========================================');
console.log('');

// Get timezone information
const timezoneInfo = getTimezoneInfo();
console.log('📍 Timezone Information:');
console.log(`   Detected: ${timezoneInfo.detected}`);
console.log(`   Offset: ${timezoneInfo.offset}`);
console.log(`   Local Time: ${timezoneInfo.localTime}`);
console.log('');

// Validate current changelog date format
console.log('🔍 Validating current changelog date...');
const validation = validateChangelogDate(changelogPath);

if (!validation.valid) {
  console.log(`⚠️  Warning: ${validation.error}`);
  if (validation.dateString) {
    console.log(`   Current date: "${validation.dateString}"`);
  }
  console.log('');
}

// Update changelog date
console.log('📝 Updating changelog date...');
const success = updateChangelogDate(changelogPath);

if (success) {
  console.log('');
  console.log('✅ Changelog date updated successfully!');
  console.log('');
  
  // Verify the update
  console.log('🔍 Verifying update...');
  const newValidation = validateChangelogDate(changelogPath);
  
  if (newValidation.valid) {
    console.log(`✅ Verification passed: "${newValidation.dateString}"`);
  } else {
    console.log(`❌ Verification failed: ${newValidation.error}`);
    process.exit(1);
  }
  
  console.log('');
  console.log('🎉 Date update completed successfully!');
} else {
  console.log('');
  console.log('❌ Failed to update changelog date');
  process.exit(1);
}

#!/usr/bin/env node

/**
 * Update CHANGELOG.md with current date
 * Automatically detects user's timezone and updates the changelog
 */

const DateUtils = require('./core/date-utils');
const fs = require('fs-extra');
const path = require('path');

async function updateChangelog() {
  console.log('🕐 Updating CHANGELOG.md with current date...');
  
  const dateUtils = new DateUtils();
  
  // Show timezone information
  const timezoneInfo = dateUtils.getTimezoneInfo();
  console.log(`📍 Detected timezone: ${timezoneInfo.timezone}`);
  console.log(`🌍 Detected locale: ${timezoneInfo.locale}`);
  console.log(`📅 Current date: ${timezoneInfo.currentDate}`);
  
  // Update the changelog
  const result = await dateUtils.updateChangelogDate();
  
  if (result.success) {
    console.log('✅ CHANGELOG.md successfully updated!');
    console.log(`📝 Updated with date: ${result.date}`);
    console.log(`🕐 Timezone: ${result.timezone}`);
    console.log(`🌍 Locale: ${result.locale}`);
  } else {
    console.error('❌ Failed to update CHANGELOG.md');
    console.error(`Error: ${result.error}`);
    process.exit(1);
  }
}

// Run the update
if (require.main === module) {
  updateChangelog().catch(error => {
    console.error('❌ Script error:', error.message);
    process.exit(1);
  });
}

module.exports = { updateChangelog };

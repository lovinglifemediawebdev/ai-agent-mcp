/**
 * Date/Time Utilities for AI Agent MCP System
 * Provides timezone detection and date formatting for changelog management
 */

const fs = require('fs');
const path = require('path');

/**
 * Get current date and time with timezone detection
 * @returns {Object} Date information with timezone
 */
function getCurrentDateInfo() {
  const now = new Date();
  
  // Get timezone offset in minutes
  const timezoneOffset = now.getTimezoneOffset();
  const timezoneHours = Math.abs(timezoneOffset) / 60;
  const timezoneMinutes = Math.abs(timezoneOffset) % 60;
  const timezoneSign = timezoneOffset <= 0 ? '+' : '-';
  
  // Format timezone string
  const timezoneString = `${timezoneSign}${timezoneHours.toString().padStart(2, '0')}:${timezoneMinutes.toString().padStart(2, '0')}`;
  
  // Get timezone name (fallback to offset if not available)
  let timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC${timezoneString}`;
  
  return {
    date: now,
    year: now.getFullYear(),
    month: now.getMonth() + 1, // 0-based to 1-based
    day: now.getDate(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    timezone: timezoneName,
    timezoneOffset: timezoneString,
    timestamp: now.getTime(),
    isoString: now.toISOString(),
    localString: now.toLocaleString(),
    formattedDate: formatDateForChangelog(now),
    formattedTime: formatTimeForChangelog(now)
  };
}

/**
 * Format date for changelog (Month DD, YYYY format)
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
function formatDateForChangelog(date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

/**
 * Format time for changelog (HH:MM AM/PM format)
 * @param {Date} date - Date to format
 * @returns {string} Formatted time string
 */
function formatTimeForChangelog(date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Update changelog date in CHANGELOG.md
 * @param {string} changelogPath - Path to CHANGELOG.md file
 * @returns {boolean} Success status
 */
function updateChangelogDate(changelogPath = './CHANGELOG.md') {
  try {
    // Check if changelog file exists
    if (!fs.existsSync(changelogPath)) {
      console.error(`Changelog file not found: ${changelogPath}`);
      return false;
    }
    
    // Read current changelog content
    let content = fs.readFileSync(changelogPath, 'utf8');
    
    // Get current date info
    const dateInfo = getCurrentDateInfo();
    
    // Update the "Last Updated" line
    const lastUpdatedRegex = /### Last Updated: .*/;
    const newLastUpdated = `### Last Updated: ${dateInfo.formattedDate} at ${dateInfo.formattedTime}`;
    
    if (lastUpdatedRegex.test(content)) {
      content = content.replace(lastUpdatedRegex, newLastUpdated);
    } else {
      // If no "Last Updated" line found, add it after the header
      const headerRegex = /(## Recent Changes & Updates\s*\n\s*\*This section should be updated after each modification to track project evolution\*\s*\n)/;
      if (headerRegex.test(content)) {
        content = content.replace(headerRegex, `$1\n${newLastUpdated}\n`);
      }
    }
    
    // Write updated content back to file
    fs.writeFileSync(changelogPath, content, 'utf8');
    
    console.log(`✅ Changelog updated to: ${dateInfo.formattedDate} at ${dateInfo.formattedTime}`);
    console.log(`📍 Timezone: ${dateInfo.timezone} (${dateInfo.timezoneOffset})`);
    
    return true;
  } catch (error) {
    console.error('❌ Error updating changelog date:', error.message);
    return false;
  }
}

/**
 * Get timezone information for debugging
 * @returns {Object} Detailed timezone information
 */
function getTimezoneInfo() {
  const dateInfo = getCurrentDateInfo();
  
  return {
    detected: dateInfo.timezone,
    offset: dateInfo.timezoneOffset,
    localTime: dateInfo.localString,
    utcTime: dateInfo.isoString,
    formatted: dateInfo.formattedDate,
    timestamp: dateInfo.timestamp
  };
}

/**
 * Validate date format in changelog
 * @param {string} changelogPath - Path to CHANGELOG.md file
 * @returns {Object} Validation result
 */
function validateChangelogDate(changelogPath = './CHANGELOG.md') {
  try {
    if (!fs.existsSync(changelogPath)) {
      return { valid: false, error: 'Changelog file not found' };
    }
    
    const content = fs.readFileSync(changelogPath, 'utf8');
    const lastUpdatedMatch = content.match(/### Last Updated: (.+)/);
    
    if (!lastUpdatedMatch) {
      return { valid: false, error: 'No "Last Updated" line found' };
    }
    
    const dateString = lastUpdatedMatch[1];
    const dateRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}( at \d{1,2}:\d{2} [AP]M)?$/;
    
    return {
      valid: dateRegex.test(dateString),
      dateString: dateString,
      error: dateRegex.test(dateString) ? null : 'Invalid date format'
    };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

// Export functions for use in other scripts
module.exports = {
  getCurrentDateInfo,
  formatDateForChangelog,
  formatTimeForChangelog,
  updateChangelogDate,
  getTimezoneInfo,
  validateChangelogDate
};

// If run directly, update changelog date
if (require.main === module) {
  const success = updateChangelogDate();
  process.exit(success ? 0 : 1);
}

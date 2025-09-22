#!/usr/bin/env node

/**
 * Date Utilities for AI Agent System
 * Provides dynamic date/time formatting based on user location
 */

const fs = require('fs-extra');
const path = require('path');

class DateUtils {
  constructor() {
    this.timezone = this.detectTimezone();
    this.locale = this.detectLocale();
  }

  /**
   * Detect user's timezone
   */
  detectTimezone() {
    try {
      // Try to get timezone from system
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return timezone || 'UTC';
    } catch (error) {
      console.warn('Could not detect timezone, using UTC');
      return 'UTC';
    }
  }

  /**
   * Detect user's locale
   */
  detectLocale() {
    try {
      // Try to get locale from system
      const locale = Intl.DateTimeFormat().resolvedOptions().locale;
      return locale || 'en-US';
    } catch (error) {
      console.warn('Could not detect locale, using en-US');
      return 'en-US';
    }
  }

  /**
   * Get current date in user's timezone
   */
  getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString(this.locale, {
      timeZone: this.timezone,
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Get current date and time in user's timezone
   */
  getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString(this.locale, {
      timeZone: this.timezone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }

  /**
   * Get current date in ISO format
   */
  getCurrentISODate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }

  /**
   * Format date for changelog
   */
  getChangelogDate() {
    return this.getCurrentDate();
  }

  /**
   * Update CHANGELOG.md with current date
   */
  async updateChangelogDate(changelogPath = 'CHANGELOG.md') {
    try {
      const changelogContent = await fs.readFile(changelogPath, 'utf8');
      const currentDate = this.getChangelogDate();
      
      // Update the "Last Updated" line
      const updatedContent = changelogContent.replace(
        /### Last Updated: .*/,
        `### Last Updated: ${currentDate}`
      );

      await fs.writeFile(changelogPath, updatedContent, 'utf8');
      console.log(`✅ CHANGELOG.md updated with current date: ${currentDate}`);
      
      return {
        success: true,
        date: currentDate,
        timezone: this.timezone,
        locale: this.locale
      };
    } catch (error) {
      console.error('❌ Error updating CHANGELOG.md:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get timezone information
   */
  getTimezoneInfo() {
    return {
      timezone: this.timezone,
      locale: this.locale,
      currentDate: this.getCurrentDate(),
      currentDateTime: this.getCurrentDateTime(),
      isoDate: this.getCurrentISODate()
    };
  }
}

// CLI usage
if (require.main === module) {
  const dateUtils = new DateUtils();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'update-changelog':
      dateUtils.updateChangelogDate()
        .then(result => {
          if (result.success) {
            console.log(`Changelog updated with date: ${result.date}`);
            process.exit(0);
          } else {
            console.error(`Error: ${result.error}`);
            process.exit(1);
          }
        });
      break;
      
    case 'info':
      console.log('Timezone Information:');
      console.log(JSON.stringify(dateUtils.getTimezoneInfo(), null, 2));
      break;
      
    default:
      console.log('Usage:');
      console.log('  node date-utils.js update-changelog  - Update CHANGELOG.md with current date');
      console.log('  node date-utils.js info              - Show timezone information');
      break;
  }
}

module.exports = DateUtils;

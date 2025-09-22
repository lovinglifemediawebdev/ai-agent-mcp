# 🕐 Dynamic Date/Time System

*Automatic date/time detection and formatting based on user's location*

## Overview

The AI Agent System now includes a dynamic date/time system that automatically detects your timezone and updates the CHANGELOG.md with the correct date based on your location.

## Features

### 🌍 Automatic Timezone Detection
- **System Detection**: Automatically detects your system's timezone
- **Fallback Support**: Falls back to UTC if detection fails
- **Locale Support**: Detects your system's locale for proper date formatting

### 📅 Dynamic Date Formatting
- **User-Friendly Format**: Displays dates in your local format (e.g., "September 22, 2025")
- **ISO Support**: Provides ISO date format when needed
- **Timezone Information**: Shows timezone and locale information

### 🔄 Automatic Updates
- **CHANGELOG.md**: Automatically updates the "Last Updated" field
- **Real-Time**: Updates with current date/time when scripts are run
- **Consistent**: Maintains consistent date formatting across the system

## Usage

### Quick Date Update
```bash
# Update CHANGELOG.md with current date
npm run update-date

# Or run directly
node update-changelog-date.js
```

### Windows Users
```bash
# Double-click or run from command prompt
update-changelog-date.bat
```

### Programmatic Usage
```javascript
const DateUtils = require('./core/date-utils');

const dateUtils = new DateUtils();

// Get current date in your timezone
const currentDate = dateUtils.getCurrentDate();
console.log(currentDate); // "September 22, 2025"

// Get timezone information
const info = dateUtils.getTimezoneInfo();
console.log(info);
// {
//   timezone: "Asia/Manila",
//   locale: "en-US",
//   currentDate: "September 22, 2025",
//   currentDateTime: "September 22, 2025, 10:32:45 AM GMT+8",
//   isoDate: "2025-09-22"
// }

// Update CHANGELOG.md
await dateUtils.updateChangelogDate();
```

## API Reference

### DateUtils Class

#### Constructor
```javascript
const dateUtils = new DateUtils();
```
Creates a new DateUtils instance with automatic timezone and locale detection.

#### Methods

##### `getCurrentDate()`
Returns the current date in your local format.
```javascript
const date = dateUtils.getCurrentDate();
// "September 22, 2025"
```

##### `getCurrentDateTime()`
Returns the current date and time in your local format.
```javascript
const dateTime = dateUtils.getCurrentDateTime();
// "September 22, 2025, 10:32:45 AM GMT+8"
```

##### `getCurrentISODate()`
Returns the current date in ISO format.
```javascript
const isoDate = dateUtils.getCurrentISODate();
// "2025-09-22"
```

##### `getChangelogDate()`
Returns the date formatted for CHANGELOG.md.
```javascript
const changelogDate = dateUtils.getChangelogDate();
// "September 22, 2025"
```

##### `updateChangelogDate(changelogPath)`
Updates CHANGELOG.md with the current date.
```javascript
const result = await dateUtils.updateChangelogDate();
// { success: true, date: "September 22, 2025", timezone: "Asia/Manila", locale: "en-US" }
```

##### `getTimezoneInfo()`
Returns comprehensive timezone and date information.
```javascript
const info = dateUtils.getTimezoneInfo();
// Returns object with timezone, locale, currentDate, currentDateTime, isoDate
```

## Integration

### With Existing Changelog Updater
The existing `update-changelog.js` script now automatically includes timezone detection:

```bash
# This now includes automatic date updates
node update-changelog.js "Added new feature" "All tests passing" "Add more tests"
```

### With AI Team System
The date system integrates seamlessly with the AI team system:

```markdown
### Memory Update: [Auto-detected date]

**Task Completed**: [Brief description]
**Team Member**: [Role that completed task]
**Technical Decisions**: [Important decisions made]
**Context for Future**: [Important information for future tasks]
```

## Configuration

### Timezone Detection
The system automatically detects your timezone using:
1. `Intl.DateTimeFormat().resolvedOptions().timeZone`
2. Falls back to 'UTC' if detection fails

### Locale Detection
The system automatically detects your locale using:
1. `Intl.DateTimeFormat().resolvedOptions().locale`
2. Falls back to 'en-US' if detection fails

### Custom Timezone (if needed)
You can modify the `DateUtils` class to use a specific timezone:

```javascript
// In core/date-utils.js
detectTimezone() {
  // Force a specific timezone
  return 'America/New_York';
}
```

## Error Handling

The system includes comprehensive error handling:
- **Detection Failures**: Falls back to UTC and en-US
- **File Errors**: Provides clear error messages
- **Validation**: Ensures dates are properly formatted

## Examples

### Basic Usage
```bash
# Update changelog with current date
npm run update-date
```

### Advanced Usage
```javascript
const DateUtils = require('./core/date-utils');

async function updateProject() {
  const dateUtils = new DateUtils();
  
  // Show timezone info
  console.log('Timezone:', dateUtils.getTimezoneInfo());
  
  // Update changelog
  const result = await dateUtils.updateChangelogDate();
  
  if (result.success) {
    console.log('Updated with date:', result.date);
  }
}
```

### CLI Usage
```bash
# Show timezone information
node core/date-utils.js info

# Update changelog
node core/date-utils.js update-changelog
```

---

**Ready to use**: Run `npm run update-date` to update your CHANGELOG.md with the current date!
**Automatic**: The system detects your timezone and formats dates appropriately
**Integrated**: Works seamlessly with existing AI team system and changelog updater

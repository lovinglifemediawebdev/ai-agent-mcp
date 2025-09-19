# Changelog Updater Tools

Simple, non-interactive tools to update the project changelog without dealing with the interactive CLI.

## Problem Solved

The original AI agent CLI gets stuck at interactive prompts when run from command line. These tools bypass that issue.

## Usage

### Method 1: Node.js Script (Cross-platform)
```bash
node update-changelog.js "Change description" [status] [next]
```

**Examples:**
```bash
# Simple change
node update-changelog.js "Added new feature"

# With status
node update-changelog.js "Fixed bug" "Bug resolved"

# Full update
node update-changelog.js "Added feature,Fixed bug" "All tests passing" "Add more tests,Improve performance"
```

### Method 2: Windows Batch File
```cmd
.\update-changelog.bat "Change description" [status] [next]
```

**Examples:**
```cmd
.\update-changelog.bat "Added new feature"
.\update-changelog.bat "Fixed bug" "Bug resolved"
.\update-changelog.bat "Added feature,Fixed bug" "All tests passing" "Add more tests"
```

## What It Updates

- ✅ `CHANGELOG.md` - User-friendly changelog
- ✅ `AI_INSTRUCTIONS.md` - AI agent instructions
- ✅ Automatic date stamping
- ✅ Proper formatting and validation

## Multiple Changes

Use commas to separate multiple changes:
```bash
node update-changelog.js "Added feature,Fixed bug,Updated docs" "All complete" "Add tests,Deploy"
```

## Error Handling

- Validates input before updating
- Shows clear success/error messages
- Exits with proper error codes

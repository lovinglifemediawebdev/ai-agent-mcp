# AI Instructions Update Guide

## Quick Start

### 🚀 Run the Interactive Menu
```bash
npm run ai-menu
```

This will open an interactive menu with numbered options:

```
============================================================
🤖 AI Instructions Update Menu
HVAC Estimator Project
============================================================

📋 Available Options:
1. 📅 Quick Date Update (just update timestamp)
2. 📝 Detailed Update (with specific changes)
3. 🔍 View Current Status
4. 📖 View Recent Changes
5. 🛠️  Manual Edit Mode
6. ❌ Exit

Choose an option (1-6):
```

## Menu Options Explained

### 1. 📅 Quick Date Update
- Just updates the "Last Updated" timestamp
- Perfect for minor changes or when you just want to refresh the date

### 2. 📝 Detailed Update
- Add specific changes you made
- Update current project status
- Add planned improvements
- Example prompts:
  - Changes: "Fixed pricing bug, Added new feature"
  - Status: "All tests passing, ready for deployment"
  - Next: "Add more tests, Improve performance"

### 3. 🔍 View Current Status
- Shows the current project status
- Displays last updated date
- Quick overview of where the project stands

### 4. 📖 View Recent Changes
- Lists all recent modifications
- Shows what has been changed recently
- Good for reviewing project history

### 5. 🛠️ Manual Edit Mode
- Opens the AI_INSTRUCTIONS.md file in your default editor
- Allows you to make detailed manual changes
- Useful for complex updates

### 6. ❌ Exit
- Closes the menu
- Returns to terminal

## Alternative Commands

### Quick Date Update Only
```bash
npm run update-ai-docs
```

### Direct Detailed Update
```bash
npm run update-instructions "Change 1" "Change 2" --status "Current status" --next "Next improvement 1" "Next improvement 2"
```

## Files Created

- `AI_INSTRUCTIONS.md` - Main instruction file
- `scripts/ai-update-menu.js` - Interactive menu script
- `scripts/ai-update.bat` - Windows batch file
- `scripts/ai-update.sh` - Unix/Linux/Mac shell script
- `scripts/update-ai-instructions.js` - Direct update script
- `scripts/update-instructions.sh` - Quick date update script
- `AI_INSTRUCTIONS_UPDATE.md` - Detailed documentation
- `AI_UPDATE_GUIDE.md` - This guide

## Best Practices

1. **Update after each significant change** to the project
2. **Be specific** about what was modified
3. **Include the reason** for changes when relevant
4. **Keep the status current** and accurate
5. **Document both completed work** and future plans
6. **Use the interactive menu** for most updates
7. **Test the changes** after updating

## Troubleshooting

### Menu doesn't start
- Make sure you're in the project root directory
- Ensure Node.js is installed
- Check that AI_INSTRUCTIONS.md exists

### Quick update fails
- Try the detailed update option instead
- Check file permissions
- Ensure the file isn't open in another editor

### Manual edit doesn't open
- The script tries to use your default editor
- You can manually open AI_INSTRUCTIONS.md in any text editor
- Make sure to save changes after editing

## Examples

### After fixing a bug:
1. Run `npm run ai-menu`
2. Choose option 2 (Detailed Update)
3. Enter: "Fixed pricing calculation bug"
4. Enter status: "Bug fixed, tested, ready for deployment"
5. Enter next: "Add more test coverage"

### After adding a feature:
1. Run `npm run ai-menu`
2. Choose option 2 (Detailed Update)
3. Enter: "Added new package tier, Updated pricing logic"
4. Enter status: "New feature implemented and tested"
5. Enter next: "Add user feedback collection"

### Just updating timestamp:
1. Run `npm run ai-menu`
2. Choose option 1 (Quick Date Update)
3. Done!

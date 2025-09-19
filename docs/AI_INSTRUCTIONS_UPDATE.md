# AI Instructions Update System

This document explains how to keep the AI_INSTRUCTIONS.md file updated after making changes to the project.

## Quick Update

After making changes to the project, run:

```bash
npm run update-ai-docs
```

This will update the "Last Updated" date in the AI_INSTRUCTIONS.md file.

## Detailed Update

For more detailed updates with specific changes, use:

```bash
npm run update-instructions "Change 1" "Change 2" --status "Current status" --next "Next improvement 1" "Next improvement 2"
```

Or directly with Node.js:

```bash
node scripts/update-ai-instructions.js "Change 1" "Change 2" --status "Current status" --next "Next improvement 1" "Next improvement 2"
```

## Manual Update

You can also manually edit the "Recent Changes & Updates" section in AI_INSTRUCTIONS.md:

1. Update the "Last Updated" date
2. Add your changes to "Recent Modifications"
3. Update "Current Status"
4. Add any planned improvements to "Next Planned Improvements"

## Best Practices

- Update after each significant change
- Be specific about what was modified
- Include the reason for changes when relevant
- Keep the status current and accurate
- Document both completed work and future plans

## File Structure

- `AI_INSTRUCTIONS.md` - Main instruction file
- `scripts/update-ai-instructions.js` - Node.js update script
- `scripts/update-instructions.sh` - Bash update script
- `AI_INSTRUCTIONS_UPDATE.md` - This documentation

## Examples

### Quick Date Update
```bash
npm run update-ai-docs
```

### Detailed Update with Changes
```bash
npm run update-instructions "Fixed pricing calculation bug" "Added new package tier" --status "All tests passing, ready for deployment" --next "Add more test coverage" "Implement advanced analytics"
```

### Manual Update
Edit the file directly and update the "Recent Changes & Updates" section with your specific changes.

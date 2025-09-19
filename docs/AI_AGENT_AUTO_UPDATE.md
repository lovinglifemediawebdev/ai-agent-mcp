# AI Agent Auto-Update Instructions

## For AI Agents Working on This Project

When you make changes to this HVAC Estimator project, you should automatically update the `AI_INSTRUCTIONS.md` file to document what you've done.

## Quick Update Commands

### 1. Full Update (Recommended)
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent-helper.js')
updateAIInstructions(
  ["Fixed pricing bug", "Added new feature"], 
  "All tests passing, ready for deployment", 
  ["Add more tests", "Improve performance"]
)
```

### 2. Just Status Update
```javascript
const { updateStatus } = require('./scripts/ai-agent-helper.js')
updateStatus("Bug fixed and tested")
```

### 3. Just Add Changes
```javascript
const { addChanges } = require('./scripts/ai-agent-helper.js')
addChanges("Updated pricing logic")
```

## When to Update

Update the AI instructions when you:
- ✅ Fix bugs or issues
- ✅ Add new features
- ✅ Modify existing functionality
- ✅ Update documentation
- ✅ Change project structure
- ✅ Improve performance
- ✅ Add new dependencies
- ✅ Update configurations

## Update Guidelines

### Changes Description
- Be specific about what was modified
- Use clear, concise language
- Include the reason for the change when relevant
- Use present tense ("Fixed bug" not "Fixed a bug")

### Status Description
- Describe the current state of the project
- Include any important notes about functionality
- Mention if anything is broken or needs attention
- Keep it concise but informative

### Next Improvements
- List what should be done next
- Include both immediate and long-term goals
- Be realistic about priorities
- Consider the Edmond market context

## Examples

### After Fixing a Bug
```javascript
updateAIInstructions(
  "Fixed pricing calculation error in data-service.ts",
  "Pricing bug resolved, all calculations now accurate",
  "Add unit tests for pricing calculations"
)
```

### After Adding a Feature
```javascript
updateAIInstructions(
  ["Added new package tier", "Updated pricing logic", "Created new UI components"],
  "New package tier implemented and tested, ready for user testing",
  ["Gather user feedback", "Add analytics tracking", "Optimize mobile layout"]
)
```

### After Documentation Updates
```javascript
updateAIInstructions(
  "Updated AI_INSTRUCTIONS.md with new auto-update system",
  "Documentation current and comprehensive",
  "Integrate with git hooks for automatic updates"
)
```

## File Structure

- `scripts/auto-update-ai.js` - Core auto-update functionality
- `scripts/ai-agent-helper.js` - Helper functions for AI agents
- `AI_AGENT_AUTO_UPDATE.md` - This instruction file
- `AI_INSTRUCTIONS.md` - Main project documentation (auto-updated)

## Important Notes

1. **Always update after making changes** - This keeps the project documentation current
2. **Be specific** - Vague descriptions don't help future AI agents
3. **Consider the Edmond market** - Reference local market data when relevant
4. **Test your changes** - Make sure the update actually works
5. **Keep it professional** - This documentation is for business use

## Quick Reference

```javascript
// Import the helper
const { updateAIInstructions } = require('./scripts/ai-agent-helper.js')

// Update with changes, status, and next steps
updateAIInstructions(
  "Your changes here",
  "Current project status",
  "Next improvements"
)

// Or just update status
const { updateStatus } = require('./scripts/ai-agent-helper.js')
updateStatus("New status here")
```

Remember: The goal is to keep the AI_INSTRUCTIONS.md file current so that any AI agent working on this project has accurate, up-to-date information about what has been done and what needs to be done next.

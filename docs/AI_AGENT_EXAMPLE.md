# AI Agent Usage Example

## How AI Agents Should Update AI Instructions

Here's an example of how I (as an AI agent) would automatically update the AI instructions after making changes:

### Example 1: After Fixing a Bug
```javascript
const { updateAIInstructions } = require('./scripts/ai-agent-helper.js')

// When I fix a bug, I automatically update the instructions
updateAIInstructions(
  "Fixed pricing calculation error in estimate wizard",
  "Pricing bug resolved, all calculations now accurate and tested",
  "Add unit tests for pricing edge cases"
)
```

### Example 2: After Adding a Feature
```javascript
// When I add a new feature, I document it
updateAIInstructions(
  ["Added new package tier option", "Updated pricing logic for new tier", "Created new UI components"],
  "New package tier implemented and tested, ready for user feedback",
  ["Gather user feedback on new tier", "Add analytics for tier selection", "Optimize mobile layout"]
)
```

### Example 3: After Documentation Updates
```javascript
// When I update documentation, I track it
updateAIInstructions(
  "Updated AI_INSTRUCTIONS.md with latest project status",
  "Documentation current and comprehensive, all features documented",
  "Integrate with git hooks for automatic updates"
)
```

## What This Achieves

1. **Automatic Documentation** - No manual intervention needed
2. **Current Status** - Always know what's been done recently
3. **Future Planning** - Track what needs to be done next
4. **AI Agent Context** - Other AI agents have current information
5. **Project History** - Complete record of changes over time

## The Result

After running these updates, the `AI_INSTRUCTIONS.md` file will automatically contain:

- ✅ Current date and time
- ✅ List of recent changes made
- ✅ Current project status
- ✅ Next planned improvements
- ✅ Complete project context for future AI agents

## For Future AI Agents

When you work on this project:
1. Make your changes
2. Use the auto-update system to document them
3. Keep the AI_INSTRUCTIONS.md file current
4. This helps the next AI agent understand what's been done

The system is now ready for automatic use by any AI agent working on this project!

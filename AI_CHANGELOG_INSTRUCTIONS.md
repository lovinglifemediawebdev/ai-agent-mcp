# AI Changelog Update Instructions

## Overview
This file provides instructions for AI to update changelogs without requiring installation or complex systems.

## Changelog Update Process

### When to Update Changelog
- After completing any significant changes
- When adding new features
- When fixing bugs
- When updating documentation
- When making any project improvements

### How to Update Changelog

#### 1. Update the "Last Updated" Date
```markdown
### Last Updated: [Current Date in format: Month DD, YYYY]
```

#### 2. Add New Entries
Add new entries under "## Recent Changes & Updates" section:

```markdown
- **NEW**: [Description of new feature]
- **FIX**: [Description of bug fix]
- **UPDATE**: [Description of update]
- **IMPROVE**: [Description of improvement]
- **DOCS**: [Description of documentation change]
```

#### 3. Use Conventional Commit Types
- **feat**: New features
- **fix**: Bug fixes
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Example Changelog Entry
```markdown
## Recent Changes & Updates

### Last Updated: September 22, 2025

- **NEW**: Added EmojiDB reference (https://emojidb.org/) to prevent emoji corruption issues
- **FIX**: Fixed missing rocket emoji in DevOps Engineer role
- **UPDATE**: Consolidated Cursor rules for better organization
- **IMPROVE**: Enhanced AI team system with better task routing
- **DOCS**: Updated README with clearer usage instructions
```

### Date Format
- Use format: "Month DD, YYYY" (e.g., "September 22, 2025")
- Use full month names
- Use 2-digit day format
- Use 4-digit year format

### AI Instructions
When updating the changelog:
1. Always update the "Last Updated" date to current date
2. Add new entries at the top of the "Recent Changes & Updates" section
3. Use clear, descriptive language
4. Group related changes together
5. Use appropriate prefixes (NEW, FIX, UPDATE, IMPROVE, DOCS)
6. Keep entries concise but informative
7. Maintain consistent formatting

### Integration with AI Team System
- Use the DevOps Engineer role for changelog updates
- Reference this file when updating changelogs
- Follow the established patterns in CHANGELOG.md
- Ensure all changes are properly documented

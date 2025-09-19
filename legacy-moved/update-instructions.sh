#!/bin/bash

# Update AI Instructions Script
# Run this after making significant changes to the project

echo "🔄 Updating AI_INSTRUCTIONS.md..."

# Get current date
CURRENT_DATE=$(date +"%B %d, %Y")

# Read the current content
CONTENT=$(cat AI_INSTRUCTIONS.md)

# Create a backup
cp AI_INSTRUCTIONS.md AI_INSTRUCTIONS.md.backup

# Update the last modified date
sed -i "s/### Last Updated: .*/### Last Updated: $CURRENT_DATE/" AI_INSTRUCTIONS.md

echo "✅ AI_INSTRUCTIONS.md updated with current date: $CURRENT_DATE"
echo "📝 Remember to manually update the 'Recent Modifications' section with your changes"
echo "💾 Backup created as AI_INSTRUCTIONS.md.backup"

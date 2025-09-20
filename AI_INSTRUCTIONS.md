# AI Agent Instructions

*This file contains specific instructions for AI agents working on this project.*

## Recent Changes & Updates

*This section should be updated after each modification to track project evolution*

### Last Updated: September 20, 2025

**Recent Modifications:**
- Created initial CHANGELOG.md and AI_INSTRUCTIONS.md files
- Updated development playbook with comprehensive MDN integration
- Added DevDocs integration playbook
- Enhanced project structure documentation
- Added comprehensive development workflow playbooks

**Current Status:**
- Initial project documentation setup complete

**Next Planned Improvements:**
- Continue improving documentation
- Add more playbook examples
- Enhance AI agent integration features
## AI Agent Instructions

### Project Overview
This is an AI Agent System designed to automatically manage project documentation, changelogs, and development workflows.

### Key Components
- **Development Playbooks**: Comprehensive guides for different development scenarios
- **Changelog Management**: Automated changelog updates and maintenance
- **Documentation Integration**: MDN Web Docs and DevDocs.io integration
- **Configuration Management**: Project-specific settings and templates

### Available Playbooks
1. **Standard Development Workflow**: General-purpose development process
2. **DevDocs Integration**: Offline documentation access strategies
3. **MDN Web Docs Integration**: Comprehensive web development reference
4. **Agile Development**: Team-based development methodologies
5. **Frontend-Focused**: UI/UX development workflows
6. **Data Science**: ML and analytics project workflows
7. **Open Source**: Community-driven project management

### File Structure
```
ai-agent-system/
├── core/                    # Core functionality
│   ├── ai-agent-helper.js   # Main AI agent interface
│   ├── changelog-updater.js # Changelog management
│   ├── config-manager.js    # Configuration handling
│   └── development-playbook.js # Playbook management
├── devdocs/                 # Documentation content
├── docs/                    # Project documentation
└── install/                 # Installation scripts
```

### Usage Guidelines

#### For AI Agents:
1. **Always update documentation** when making changes
2. **Use the changelog updater** to track modifications
3. **Follow established playbooks** for consistency
4. **Leverage integrated documentation** (MDN, DevDocs)
5. **Maintain configuration** for project-specific needs

#### Changelog Updates:
```bash
# Simple update
node update-changelog.js "Description of changes"

# Full update with status and next steps
node update-changelog.js "Changes" "Current status" "Next improvements"
```

#### Configuration:
- Configuration is managed in `.ai-agent-config.json`
- Default settings work for most projects
- Customize templates and file paths as needed

### Development Standards
- **TypeScript**: Use for type safety where applicable
- **Testing**: Include tests for new functionality
- **Documentation**: Keep docs in sync with code
- **Version Control**: Follow conventional commit messages

### Integration Points
- **MDN Web Docs**: Local content repository for web development reference
- **DevDocs.io**: Offline documentation access and API integration
- **Git Integration**: Automated changelog and documentation updates
- **CI/CD**: Automated testing and deployment workflows

### Troubleshooting
- Check configuration files for proper setup
- Verify file paths and permissions
- Use the test system to validate installation
- Check logs for detailed error information

---

*These instructions should be updated as the project evolves. Use the automated tools to maintain consistency.*

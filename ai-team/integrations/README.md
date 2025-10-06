# AI Team Integrations

This directory contains integration guides for external services that enhance the AI Agent MCP system.

## 🎯 Available Integrations

### Context7 MCP Server
**Status**: ✅ Ready for Implementation  
**Purpose**: Up-to-date library documentation for AI Staff  
**Documentation**: 
- [Integration Guide](./context7-integration.md) - Complete setup and integration details
- [Usage Guide](./context7-usage-guide.md) - Step-by-step workflow for AI team members

**Quick Start**:
1. Get API key from https://context7.com/dashboard
2. Configure MCP server using `config/context7-config.json.example`
3. Follow [Usage Guide](./context7-usage-guide.md) for AI team workflow

## 📚 Integration Overview

### Context7 Integration
Enhances AI Staff workflow with factual, up-to-date library documentation through the Context7 MCP Server (32.7k+ GitHub stars).

**Enhanced Workflow**:
```
1. User assigns task
2. Team Dispatcher assigns to AI Team Member
3. AI Team Member applies playbooks for best practices
4. AI Team Member queries Context7 for current library docs
5. AI Team Member implements with playbook + Context7 guidance
6. Task completed with verified, current code
```

**Benefits**:
- ✅ Access to up-to-date library documentation
- ✅ Dual verification (playbooks + Context7)
- ✅ Current implementation patterns
- ✅ Reduced technical debt
- ✅ Faster development

## 🚀 Getting Started

### Prerequisites
- AI Agent MCP system installed
- Cursor AI or Claude Desktop with MCP support
- Context7 API key (get from https://context7.com/dashboard)

### Setup Steps
1. **Get Context7 API Key**:
   - Visit https://context7.com/dashboard
   - Create account or sign in
   - Generate API key

2. **Configure MCP Server**:
   ```bash
   # Copy example configuration
   cp config/context7-config.json.example config/context7-config.json
   
   # Edit config with your API key
   # Replace YOUR_CONTEXT7_API_KEY_HERE with your actual key
   ```

3. **Set Environment Variables**:
   ```bash
   # Copy example environment file
   cp .env.example .env
   
   # Edit .env with your API key
   # CONTEXT7_API_KEY=your_api_key_here
   ```

4. **Configure in Cursor/Claude**:
   - Add MCP server configuration to Cursor settings
   - Or follow Context7 setup guide for your AI editor
   - Restart editor to load MCP server

5. **Verify Installation**:
   ```bash
   # Test Context7 MCP server
   npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
   ```

## 📖 Usage

### For AI Agents
When processing development tasks:

1. **Apply Playbooks**: Use existing playbook guidance
2. **Query Context7**: Get current library documentation
3. **Combine Knowledge**: Merge playbook + Context7 data
4. **Implement**: Write verified, current code
5. **Document**: Cite both playbook and Context7 sources

### For Developers
Reference the integration guides when:
- Setting up new projects
- Configuring AI team workflow
- Troubleshooting integration issues
- Understanding the enhanced workflow

## 🔧 Configuration Files

### Context7 MCP Configuration
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "${CONTEXT7_API_KEY}"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### Environment Variables
```env
CONTEXT7_API_KEY=your_context7_api_key_here
NODE_ENV=development
MCP_ENABLED=true
```

## 📚 Documentation

### Integration Documentation
- **[Context7 Integration Guide](./context7-integration.md)**: Complete integration setup, configuration, and architecture
- **[Context7 Usage Guide](./context7-usage-guide.md)**: Step-by-step workflow for AI team members

### External Resources
- **Context7 Repository**: https://github.com/upstash/context7
- **Context7 Dashboard**: https://context7.com/dashboard
- **Context7 Documentation**: https://github.com/upstash/context7#readme
- **MCP Protocol**: https://modelcontextprotocol.io

## 🎯 Integration Benefits

### For AI Team
- ✅ Access to 1000+ library documentation sources
- ✅ Automatic library detection and resolution
- ✅ Up-to-date code examples and patterns
- ✅ Reduced risk of outdated implementations

### For Code Quality
- ✅ Dual verification (playbooks + Context7)
- ✅ Current library patterns and methods
- ✅ Best practices validated through Context7
- ✅ Fewer breaking changes

### For Project Success
- ✅ Faster development cycles
- ✅ Higher code quality
- ✅ Better maintainability
- ✅ Reduced technical debt

## 🚨 Troubleshooting

### Common Issues

#### Context7 Not Available
- Check API key is correct
- Verify MCP server is running
- Check network connectivity
- Fall back to playbook-only workflow

#### Library Not Found
- Use `resolve-library-id` to search
- Check library name spelling
- Try alternative library names
- Use manual documentation if needed

#### API Rate Limits
- Cache frequently used documentation
- Batch related queries together
- Use specific topics to reduce tokens
- Monitor API usage

## 📝 Best Practices

### API Key Management
- Store API key in environment variables
- Never commit keys to version control
- Use different keys for dev/prod
- Rotate keys periodically

### Query Optimization
- Use specific topics when possible
- Cache frequently used docs
- Batch related queries
- Monitor token usage

### Workflow Integration
- Always apply playbooks first
- Use Context7 for verification
- Document both sources
- Test implementations thoroughly

## 🔄 Future Integrations

Additional integrations planned:
- GitHub Copilot Workspace integration
- Codeium integration
- Continue.dev integration
- Anthropic Claude Desktop integration

## 📞 Support

### Integration Support
- Review integration guides in this directory
- Check troubleshooting sections
- Refer to external documentation
- Open issue in AI Agent MCP repository

### Context7 Support
- Context7 GitHub: https://github.com/upstash/context7
- Context7 Issues: https://github.com/upstash/context7/issues
- Upstash Support: https://upstash.com/support

---

**Last Updated**: October 6, 2025  
**Integration Status**: Context7 ready for implementation  
**Next Steps**: Follow integration guide to configure Context7 MCP server


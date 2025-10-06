# Context7 MCP Integration - Quick Setup Guide

**Integration Status**: ✅ Ready for Implementation  
**Estimated Setup Time**: 10 minutes  
**Difficulty**: Easy

## 🎯 What is Context7?

Context7 is an MCP (Model Context Protocol) server that provides up-to-date code documentation for LLMs and AI code editors. With 32.7k+ GitHub stars, it's a trusted solution for enhancing AI development workflows.

## 🚀 Quick Setup

### Step 1: Get Context7 API Key (2 minutes)
1. Visit https://context7.com/dashboard
2. Sign up or sign in
3. Generate your API key
4. Copy the API key

### Step 2: Configure Environment (1 minute)
```bash
# Copy the environment template
cp .env.example .env

# Edit .env file and add your API key
CONTEXT7_API_KEY=your_api_key_here
```

### Step 3: Configure MCP Server (2 minutes)
```bash
# Copy the configuration template
cp config/context7-config.json.example config/context7-config.json

# Edit config/context7-config.json
# Replace YOUR_CONTEXT7_API_KEY_HERE with your actual key
```

### Step 4: Add to Cursor/Claude (3 minutes)

#### For Cursor AI:
1. Open Cursor Settings
2. Navigate to MCP Servers section
3. Add new MCP server with this configuration:
```json
{
  "context7": {
    "command": "npx",
    "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"],
    "env": {
      "NODE_ENV": "production"
    }
  }
}
```
4. Restart Cursor

#### For Claude Desktop:
1. Open Claude Desktop settings
2. Navigate to MCP configuration
3. Add Context7 MCP server from the configuration above
4. Restart Claude Desktop

### Step 5: Verify Installation (2 minutes)
Test the Context7 MCP server:
```bash
# Test Context7 connection
npx -y @upstash/context7-mcp --api-key YOUR_API_KEY

# Or test with MCP Inspector
npx -y @modelcontextprotocol/inspector npx @upstash/context7-mcp --api-key YOUR_API_KEY
```

## ✅ You're Done!

Your AI Agent MCP system is now enhanced with Context7!

## 🎯 What Happens Now?

### Enhanced AI Staff Workflow

**Before Context7**:
```
Task → Playbooks → Implementation
```

**With Context7**:
```
Task → Playbooks → Context7 Verification → Implementation
```

### Example Workflow

**Task**: "Create authentication with Supabase"

1. **AI Staff applies playbooks**:
   - Security best practices
   - Error handling patterns
   - API design standards

2. **AI Staff queries Context7**:
   - resolve-library-id("supabase")
   - get-library-docs("/supabase/supabase", topic: "auth")
   - Get latest Supabase authentication patterns

3. **AI Staff implements**:
   - Combines playbook patterns + Context7 facts
   - Uses current Supabase methods
   - Follows verified best practices

4. **Result**: Secure, up-to-date implementation!

## 📚 Next Steps

### For Users
- Start using `@MCP-REFERENCE.md` with your tasks
- AI Staff will automatically use Context7 when needed
- Tasks will have better accuracy with current library docs

### For AI Agents
- Follow the [Context7 Usage Guide](./ai-team/integrations/context7-usage-guide.md)
- Apply playbooks first, then verify with Context7
- Document both playbook and Context7 sources

## 🔧 Detailed Documentation

For more details, see:
- **Integration Guide**: [ai-team/integrations/context7-integration.md](./ai-team/integrations/context7-integration.md)
- **Usage Guide**: [ai-team/integrations/context7-usage-guide.md](./ai-team/integrations/context7-usage-guide.md)
- **Integration README**: [ai-team/integrations/README.md](./ai-team/integrations/README.md)

## 🚨 Troubleshooting

### Context7 Not Working?
1. **Check API Key**: Verify your API key is correct
2. **Check MCP Configuration**: Ensure configuration is properly formatted
3. **Restart Editor**: Restart Cursor/Claude after configuration changes
4. **Check Network**: Ensure you can access context7.com
5. **Test Manually**: Run `npx -y @upstash/context7-mcp --api-key YOUR_API_KEY`

### Library Not Found?
- Use `resolve-library-id` to search for libraries
- Check library name spelling
- Try alternative library names (e.g., "react" vs "reactjs")
- See Context7 documentation for supported libraries

### API Rate Limits?
- Context7 has generous rate limits
- Cache frequently used documentation
- Use specific topics to reduce token usage
- Contact Context7 support if limits are reached

## 💡 Tips

### Optimize Context7 Usage
- **Use Topics**: Specify topics to get focused documentation
- **Cache Results**: Frequently used docs don't need re-querying
- **Batch Queries**: Query related libraries together
- **Monitor Usage**: Track API usage to avoid surprises

### Best Practices
- Always apply playbooks first for standards
- Use Context7 for current implementation verification
- Document both playbook and Context7 sources
- Test implementations thoroughly

### Security
- Store API key in environment variables only
- Never commit API keys to version control
- Use different keys for dev/prod if needed
- Rotate keys periodically

## 📊 Expected Results

### Code Quality Improvements
- ✅ More accurate implementations
- ✅ Current library patterns and methods
- ✅ Reduced breaking changes
- ✅ Better documentation references

### Development Speed
- ✅ Faster development cycles
- ✅ Less time debugging outdated patterns
- ✅ Immediate access to current docs
- ✅ Verified implementation approaches

### Project Success
- ✅ Higher code quality
- ✅ Better maintainability
- ✅ Reduced technical debt
- ✅ Improved developer confidence

## 🎉 Success!

You've successfully integrated Context7 with your AI Agent MCP system. Your AI Staff now has access to up-to-date library documentation for better, more accurate implementations.

---

**Questions?** Check the [Integration README](./ai-team/integrations/README.md) or open an issue.  
**Context7 Support**: https://github.com/upstash/context7  
**Last Updated**: October 6, 2025


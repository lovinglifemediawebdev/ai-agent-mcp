# Context7 Integration - AI Agent MCP

**Integration Type**: MCP Server Integration  
**Purpose**: Enhance AI Staff with up-to-date library documentation  
**Context7 Repository**: https://github.com/upstash/context7  
**Status**: Implementation Ready

## 🎯 Integration Overview

Context7 MCP Server provides up-to-date code documentation for LLMs and AI code editors. This integration enhances our AI Staff workflow with factual, current library documentation.

## 🔄 Enhanced Workflow

### Original Flow
```
1. User assigns task
2. Team Dispatcher analyzes task
3. AI Team Member receives task
4. AI Team Member implements task
5. Task completed
```

### Enhanced Flow with Context7
```
1. User assigns task
2. Team Dispatcher analyzes task → assigns to AI Team Member
3. AI Team Member uses playbooks for best practices
4. AI Team Member queries Context7 for factual dev code
5. AI Team Member implements using playbook guidance + Context7 facts
6. Task completed with verified, current code patterns
```

## 🎯 Integration Goals

- **Factual Verification**: Use Context7 to verify current implementation patterns
- **Documentation Access**: Access up-to-date library documentation during development
- **Best Practice Validation**: Confirm playbook approaches with Context7 data
- **Implementation Accuracy**: Ensure code follows latest library patterns

## 🛠️ Context7 MCP Server Setup

### Installation
```bash
# Install Context7 MCP server globally
npm install -g @upstash/context7-mcp

# Or use directly with npx (recommended)
npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

### Configuration
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### Required Setup Steps
1. Get Context7 API key from https://context7.com/dashboard
2. Configure MCP server in Cursor/Claude settings
3. Test Context7 integration
4. Verify library documentation access

## 📚 Context7 Tools Available

### 1. resolve-library-id
**Purpose**: Resolve general library names to Context7-compatible IDs

**Usage**:
```
resolve-library-id with libraryName: "react"
→ Returns: /facebook/react
```

### 2. get-library-docs
**Purpose**: Fetch up-to-date library documentation

**Parameters**:
- `context7CompatibleLibraryID` (required): Exact library ID (e.g., `/mongodb/docs`)
- `topic` (optional): Focus docs on specific topic (e.g., "routing", "hooks")
- `tokens` (optional): Max tokens to return (default: 5000)

**Usage**:
```
get-library-docs with context7CompatibleLibraryID: "/facebook/react", topic: "hooks"
→ Returns: Up-to-date React hooks documentation
```

## 🤖 AI Team Member Integration

### Enhanced Team Member Workflow

#### Step 1: Playbook Application
**AI Team Member applies our playbooks**:
- Code quality standards
- Architecture patterns
- Security best practices
- Performance optimization
- Testing strategies

#### Step 2: Context7 Verification
**AI Team Member queries Context7**:
```
1. Detect libraries/frameworks from task
2. Resolve library IDs using Context7
3. Get library documentation with specific topics
4. Extract current implementation patterns
5. Compare with playbook guidance
```

#### Step 3: Implementation
**AI Team Member implements**:
- Combines playbook knowledge + Context7 facts
- Uses verified, current code patterns
- Ensures accuracy and best practices
- Documents Context7 sources

## 📋 Implementation Template

### Enhanced AI Team Member Response Format

```markdown
## 🎯 Team Dispatcher Analysis
**Request Type**: [API/Database/Frontend/DevOps]
**Assigned Role**: [AI Team Member]
**Context7 Integration**: Enabled

## 👨‍💼 [AI Team Member] Response

### Step 1: Playbook Application
**Referenced Playbooks**:
- [Playbook URL 1]
- [Playbook URL 2]

**Playbook Guidance**:
- [Best practice 1]
- [Best practice 2]
- [Architecture pattern]

### Step 2: Context7 Verification
**Libraries Detected**: [react, nextjs, supabase]

**Context7 Query 1**: react (hooks)
- **Library ID**: /facebook/react
- **Documentation**: [Latest React hooks patterns]
- **Key Points**: [Extracted implementation guidance]

**Context7 Query 2**: nextjs (app-router)
- **Library ID**: /vercel/next.js
- **Documentation**: [Latest Next.js App Router patterns]
- **Key Points**: [Extracted routing guidance]

### Step 3: Combined Implementation
**Approach**: Playbook-guided + Context7-verified

**Implementation**:
[Code implementation using both playbook patterns and Context7 factual data]

**Verification**:
- ✅ Follows playbook best practices
- ✅ Uses Context7-verified current patterns
- ✅ Documentation is up-to-date
- ✅ Tested and working

**Sources**:
- Playbook: [URL]
- Context7: /facebook/react (React hooks documentation)
- Context7: /vercel/next.js (Next.js App Router documentation)
```

## 🔧 Integration Points

### Backend Engineer + Context7
```markdown
**Task**: Create API endpoint with authentication

**Playbook Guidance**: Security best practices, error handling
**Context7 Query**: express, jsonwebtoken
**Combined Implementation**: Secure API with latest JWT patterns
```

### Frontend Engineer + Context7
```markdown
**Task**: Build user dashboard with real-time data

**Playbook Guidance**: Component architecture, state management
**Context7 Query**: react, zustand, socket.io
**Combined Implementation**: Modern React components with current patterns
```

### Database Architect + Context7
```markdown
**Task**: Design schema for multi-tenant application

**Playbook Guidance**: Database design patterns, indexing strategies
**Context7 Query**: postgresql, prisma
**Combined Implementation**: Optimized schema with latest Prisma patterns
```

## 📊 Benefits

### For AI Team Members
- ✅ Access to up-to-date library documentation
- ✅ Verification of implementation approaches
- ✅ Current code examples and patterns
- ✅ Reduced risk of outdated implementations

### For Development Quality
- ✅ Implementations use latest library versions
- ✅ Code follows current best practices
- ✅ Documentation references are accurate
- ✅ Fewer breaking changes due to outdated patterns

### For Project Success
- ✅ Faster development with verified patterns
- ✅ Higher code quality through dual verification
- ✅ Better maintainability with current practices
- ✅ Reduced technical debt from outdated code

## 🚀 Usage Instructions

### For AI Agents (Cursor AI)
When processing a task that involves specific libraries or frameworks:

1. **Apply Playbooks**: Use existing playbook guidance for architecture and best practices
2. **Query Context7**: Use Context7 MCP tools to get current library documentation
3. **Combine Knowledge**: Merge playbook patterns with Context7 factual data
4. **Implement**: Write code using verified, current patterns
5. **Document Sources**: Cite both playbook and Context7 sources

### Example Task Flow

**Task**: "Create authentication system using Supabase"

**Step 1 - Playbook**: 
- Security best practices
- Authentication patterns
- Error handling

**Step 2 - Context7**:
```
resolve-library-id("supabase")
→ /supabase/supabase

get-library-docs("/supabase/supabase", topic: "authentication")
→ [Latest Supabase auth patterns and methods]
```

**Step 3 - Implementation**:
- Use playbook security patterns
- Use Context7 current Supabase auth methods
- Combine for verified, secure implementation

## 📚 Configuration Files

### .env.example
```env
CONTEXT7_API_KEY=your_context7_api_key_here
```

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

## 🔍 Library Detection Patterns

### Common Libraries
- **React**: react, @types/react
- **Next.js**: nextjs, next
- **Vue**: vue, vuejs
- **Angular**: angular, @angular/core
- **Express**: express, expressjs
- **Supabase**: supabase, @supabase/supabase-js
- **MongoDB**: mongodb, mongoose
- **PostgreSQL**: postgresql, postgres, pg

### Detection Strategy
1. Analyze task description for library mentions
2. Check package.json dependencies (if available)
3. Infer from framework-specific patterns
4. Use Context7 resolve-library-id for verification

## 🎯 Success Criteria

### Integration Success Indicators
- [ ] Context7 MCP server configured and accessible
- [ ] Library resolution works correctly
- [ ] Documentation retrieval functions properly
- [ ] AI Team Members use Context7 in workflow
- [ ] Implementation quality improves with Context7 data

### Implementation Quality Indicators
- [ ] Code uses current library patterns
- [ ] Documentation references are up-to-date
- [ ] Breaking changes are avoided
- [ ] Best practices are verified through Context7
- [ ] Source citations include Context7 references

## 📝 Notes

### API Key Management
- Store Context7 API key securely in environment variables
- Never commit API keys to version control
- Use different keys for development and production
- Rotate keys periodically for security

### Performance Considerations
- Context7 queries add minimal latency
- Cache frequently used documentation
- Batch queries when possible
- Use specific topics to reduce token usage

### Troubleshooting
- If Context7 unavailable, fall back to playbook-only guidance
- Log Context7 queries for debugging
- Monitor API usage to avoid rate limits
- Keep API key secure and rotated

---

**Integration Status**: Ready for implementation  
**Next Steps**: Configure Context7 MCP server with API key  
**Support**: Refer to https://github.com/upstash/context7 for Context7 documentation


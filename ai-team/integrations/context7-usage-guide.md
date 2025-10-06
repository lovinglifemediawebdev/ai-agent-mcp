# Context7 Usage Guide - AI Team Integration

**Purpose**: Step-by-step guide for AI team members to use Context7 in development workflow  
**Audience**: AI Staff (Backend, Frontend, Database, DevOps Engineers)  
**Integration**: Context7 MCP Server

## 🎯 Quick Start

### Prerequisites
1. Context7 API key from https://context7.com/dashboard
2. Context7 MCP server configured in Cursor/Claude
3. Understanding of your current task requirements

### Basic Usage Flow
```
Task → Playbook → Context7 → Implementation
```

## 📋 Enhanced Workflow

### Enhanced AI Staff Workflow with Context7

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User Assigns Task                                        │
│    "Create authentication with Supabase"                    │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Team Dispatcher Analyzes                                 │
│    → Assigns to Backend Engineer                            │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Backend Engineer: Apply Playbooks                        │
│    ✅ Security best practices                               │
│    ✅ Error handling patterns                               │
│    ✅ API design standards                                  │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Backend Engineer: Query Context7                         │
│    📚 resolve-library-id("supabase")                        │
│    📚 get-library-docs("/supabase/supabase", "auth")       │
│    → Latest Supabase authentication patterns                │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Backend Engineer: Implement                              │
│    ✅ Playbook security patterns                           │
│    ✅ Context7 current Supabase methods                    │
│    ✅ Combined verified implementation                     │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 Step-by-Step Implementation

### Step 1: Receive Task
```markdown
**Task Received**: Create user authentication system
**Assigned To**: Backend Engineer
**Requirements**: Secure login, JWT tokens, password hashing
```

### Step 2: Apply Playbooks
```markdown
**Playbooks Referenced**:
- ai-team/roles/03_Backend_Engineer.md
- Full-Stack-Web-Dev-Playbook.md (Security section)

**Playbook Guidance**:
- Use secure password hashing (bcrypt)
- Implement JWT token refresh
- Add rate limiting for login attempts
- Validate input data
- Log authentication events
```

### Step 3: Query Context7

#### 3a. Detect Libraries
```markdown
**Libraries Detected in Task**:
- express (API framework)
- jsonwebtoken (JWT implementation)
- bcrypt (Password hashing)
```

#### 3b. Resolve Library IDs
```markdown
**Context7 Queries**:
1. resolve-library-id with libraryName: "express"
   → Returns: /expressjs/express

2. resolve-library-id with libraryName: "jsonwebtoken"
   → Returns: /auth0/node-jsonwebtoken

3. resolve-library-id with libraryName: "bcrypt"
   → Returns: /kelektiv/node.bcrypt.js
```

#### 3c. Get Documentation
```markdown
**Context7 Documentation Retrieval**:

1. get-library-docs with:
   - context7CompatibleLibraryID: "/expressjs/express"
   - topic: "authentication middleware"
   - tokens: 5000
   → [Latest Express.js authentication patterns]

2. get-library-docs with:
   - context7CompatibleLibraryID: "/auth0/node-jsonwebtoken"
   - topic: "token generation"
   - tokens: 5000
   → [Latest JWT implementation patterns]

3. get-library-docs with:
   - context7CompatibleLibraryID: "/kelektiv/node.bcrypt.js"
   - topic: "password hashing"
   - tokens: 5000
   → [Latest bcrypt usage patterns]
```

### Step 4: Combine Knowledge

```markdown
## Combined Implementation Strategy

### From Playbooks:
- Security best practices (input validation, rate limiting)
- Error handling patterns (proper error messages, logging)
- API structure (RESTful endpoints, consistent responses)

### From Context7:
- Express.js: Latest middleware patterns for authentication
- JWT: Current token generation and verification methods
- Bcrypt: Up-to-date password hashing with optimal salt rounds

### Implementation Approach:
1. Use Express middleware pattern from Context7
2. Implement JWT with latest library methods from Context7
3. Apply bcrypt with current best practices from Context7
4. Add playbook security patterns (rate limiting, validation)
5. Implement playbook error handling
```

### Step 5: Implement Code

```typescript
// Implementation combining Playbook + Context7 guidance

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const app = express();

// Playbook: Input validation schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

// Context7: Latest Express middleware pattern
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  // Context7: Current JWT verification method
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Playbook: API endpoint structure
// Context7: Latest Express route pattern
app.post('/auth/login', async (req, res) => {
  try {
    // Playbook: Input validation
    const { email, password } = loginSchema.parse(req.body);
    
    // Database lookup (playbook pattern)
    const user = await db.users.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Context7: Latest bcrypt comparison method
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      // Playbook: Security - don't reveal which field is wrong
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Context7: Current JWT token generation
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Playbook: Logging
    console.log(`User ${user.id} logged in successfully`);
    
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    // Playbook: Error handling
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
```

### Step 6: Document Sources

```markdown
## Implementation Complete

### Sources Used:
**Playbooks**:
- ai-team/roles/03_Backend_Engineer.md (API patterns, security)
- Full-Stack-Web-Dev-Playbook.md (Error handling, validation)

**Context7 Documentation**:
- /expressjs/express (Middleware patterns)
- /auth0/node-jsonwebtoken (JWT generation and verification)
- /kelektiv/node.bcrypt.js (Password hashing methods)

### Verification:
- ✅ Follows playbook security standards
- ✅ Uses Context7-verified current library methods
- ✅ Input validation implemented
- ✅ Error handling comprehensive
- ✅ Logging in place
- ✅ Tested and working
```

## 🎯 Role-Specific Usage

### Backend Engineer + Context7

**Common Libraries**:
- express, fastify, koa (API frameworks)
- mongoose, prisma, typeorm (Database ORMs)
- jsonwebtoken, passport (Authentication)

**Workflow**:
1. Apply backend playbook patterns
2. Query Context7 for API framework patterns
3. Query Context7 for database library patterns
4. Query Context7 for authentication methods
5. Implement with combined guidance

### Frontend Engineer + Context7

**Common Libraries**:
- react, vue, angular (UI frameworks)
- nextjs, nuxt, remix (Meta-frameworks)
- zustand, redux, pinia (State management)
- react-hook-form, formik (Form handling)

**Workflow**:
1. Apply frontend playbook patterns
2. Query Context7 for framework-specific patterns
3. Query Context7 for state management methods
4. Query Context7 for form handling approaches
5. Implement with combined guidance

### Database Architect + Context7

**Common Libraries**:
- postgresql, mongodb (Databases)
- prisma, sequelize, mongoose (ORMs)
- redis, memcached (Caching)

**Workflow**:
1. Apply database playbook patterns
2. Query Context7 for database-specific patterns
3. Query Context7 for ORM best practices
4. Query Context7 for optimization techniques
5. Implement with combined guidance

### DevOps Engineer + Context7

**Common Libraries**:
- docker, kubernetes (Containerization)
- github-actions, gitlab-ci (CI/CD)
- terraform, pulumi (Infrastructure as Code)

**Workflow**:
1. Apply DevOps playbook patterns
2. Query Context7 for deployment patterns
3. Query Context7 for CI/CD configurations
4. Query Context7 for infrastructure patterns
5. Implement with combined guidance

## 📚 Context7 Query Examples

### Example 1: React Hooks
```markdown
**Task**: Build custom hook for API calls

**Context7 Query**:
resolve-library-id("react")
→ /facebook/react

get-library-docs("/facebook/react", topic: "hooks")
→ [Latest React hooks patterns, useEffect, useMemo, custom hooks]

**Result**: Current React hooks patterns for API calls
```

### Example 2: Next.js App Router
```markdown
**Task**: Implement dynamic routes in Next.js

**Context7 Query**:
resolve-library-id("nextjs")
→ /vercel/next.js

get-library-docs("/vercel/next.js", topic: "app-router")
→ [Latest Next.js App Router patterns, dynamic routes, layouts]

**Result**: Current Next.js App Router routing patterns
```

### Example 3: Supabase Authentication
```markdown
**Task**: Add social login with Supabase

**Context7 Query**:
resolve-library-id("supabase")
→ /supabase/supabase

get-library-docs("/supabase/supabase", topic: "authentication")
→ [Latest Supabase auth patterns, OAuth providers, session management]

**Result**: Current Supabase OAuth implementation patterns
```

## 🔄 Workflow Diagram

```
┌──────────────────────────────────────────────────────────┐
│                     TASK RECEIVED                        │
└───────────────────────┬──────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────┐
        │  TEAM DISPATCHER ASSIGNS      │
        │  → AI Team Member             │
        └───────────────┬───────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│              STEP 1: APPLY PLAYBOOKS                      │
│  ✅ Code standards                                        │
│  ✅ Architecture patterns                                 │
│  ✅ Security practices                                    │
│  ✅ Best practices                                        │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│              STEP 2: QUERY CONTEXT7                       │
│  📚 Detect libraries                                      │
│  📚 Resolve library IDs                                   │
│  📚 Get current documentation                             │
│  📚 Extract key patterns                                  │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│              STEP 3: COMBINE KNOWLEDGE                    │
│  ✅ Playbook patterns                                     │
│  ✅ Context7 facts                                        │
│  ✅ Verify compatibility                                  │
│  ✅ Create implementation plan                            │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│              STEP 4: IMPLEMENT                            │
│  ✅ Write code with verified patterns                     │
│  ✅ Follow playbook + Context7 guidance                   │
│  ✅ Test implementation                                   │
│  ✅ Document sources                                      │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
                ┌───────────────┐
                │ TASK COMPLETE │
                └───────────────┘
```

## 🚨 Troubleshooting

### Context7 Not Available
**Solution**: Fall back to playbook-only guidance
```markdown
**Fallback Workflow**:
1. Use playbook patterns only
2. Reference framework documentation manually
3. Implement with best available knowledge
4. Document Context7 unavailability in notes
```

### Library Not Found
**Solution**: Use alternative library or manual documentation
```markdown
**Alternative Approach**:
1. Search for alternative library in Context7
2. Use official library documentation if Context7 unavailable
3. Apply playbook patterns as primary guidance
4. Document manual documentation sources
```

### API Rate Limits
**Solution**: Cache documentation and batch queries
```markdown
**Optimization**:
1. Cache frequently used documentation
2. Batch related queries together
3. Use specific topics to reduce token usage
4. Monitor API usage to avoid limits
```

## ✅ Success Checklist

### Integration Success
- [ ] Context7 MCP server configured
- [ ] API key working correctly
- [ ] Library resolution functioning
- [ ] Documentation retrieval working
- [ ] AI team members using Context7

### Implementation Quality
- [ ] Code uses current library patterns
- [ ] Documentation references accurate
- [ ] Playbook standards followed
- [ ] Context7 sources documented
- [ ] Implementation tested and verified

---

**Next Steps**: Use this workflow for all AI team development tasks  
**Support**: Refer to ai-team/integrations/context7-integration.md for detailed integration guide


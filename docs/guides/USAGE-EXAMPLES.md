# MCP-REFERENCE.md Usage Examples

> **macOS note:** Download the `MCP-REFERENCE-mac.md` (macOS Terminal Edition) from this repository and save it as `MCP-REFERENCE.md` inside your project so all `@MCP-REFERENCE.md` commands continue to work.

This guide shows practical examples of how to use the MCP-REFERENCE.md file with Cursor AI for Motia development.

## 🚀 Getting Started

### 1. Install Motia (Prerequisites)
```bash
# Install Motia globally
npm install -g @motia/cli

# Create a new Motia project
npx motia create my-project
cd my-project

# Or initialize Motia in existing project
npx motia init
```

### 2. Copy the MCP Reference
```bash
# Copy MCP-REFERENCE.md to your Motia project
cp MCP-REFERENCE.md /path/to/your/motia-project/
```

### 3. Basic Usage Pattern
```
@MCP-REFERENCE.md [Your request here]
```

## 📝 Practical Examples

### Starting a New Feature
```
@MCP-REFERENCE.md I need to build a user authentication system with JWT tokens, email verification, and password reset. Please use the AI team system to break this down and assign the appropriate roles.
```

**Expected Response**: The AI will reference the Backend Engineer role and authentication patterns, breaking down the task into:
1. JWT authentication setup
2. Email verification flow  
3. Password reset implementation
4. Security middleware
5. Testing and validation

### Multi-Language Workflow
```
@MCP-REFERENCE.md I want to create a workflow where a TypeScript API receives image uploads, Python processes them with ML, and Ruby generates PDF reports. Please design this multi-language pipeline.
```

**Expected Response**: The AI will create:
- TypeScript API step for image upload
- Python event step for ML processing
- Ruby event step for PDF generation
- Event flow coordination between languages

### Code Review Request
```
@MCP-REFERENCE.md Please review this Motia step for best practices, security, and performance. Use the Code Reviewer role standards.

[Paste your code here]
```

**Expected Response**: Detailed code review following the Code Reviewer role guidelines with specific improvements.

### Database Design Help
```
@MCP-REFERENCE.md I need to design a database schema for an e-commerce platform with products, orders, users, and inventory. Please use the Database Architect role to help design this.
```

**Expected Response**: Schema design with proper relationships, indexing strategies, and migration patterns.

### DevOps and Deployment
```
@MCP-REFERENCE.md I need to deploy this Motia application to production. Please use the DevOps Engineer role to create a deployment strategy with Docker and CI/CD.
```

**Expected Response**: Complete deployment setup with Docker configuration, CI/CD pipeline, and monitoring.

## 🎯 Specific Scenarios

### API Development
```
@MCP-REFERENCE.md Create a REST API for a blog platform with posts, comments, and user management. Include authentication, validation, and proper error handling.
```

### Real-time Features  
```
@MCP-REFERENCE.md Add real-time chat functionality to my application using Motia's event system and WebSocket support.
```

### Background Processing
```
@MCP-REFERENCE.md I need to process large CSV files in the background. Create a workflow that handles file upload, processing, and progress updates.
```

### Scheduled Tasks
```
@MCP-REFERENCE.md Create a daily report generation system that aggregates data and sends email summaries to administrators.
```

### AI Integration
```
@MCP-REFERENCE.md Integrate OpenAI's GPT API into my Motia application for content generation and analysis.
```

## 🔧 Advanced Usage

### Architecture Review
```
@MCP-REFERENCE.md Review my current Motia project architecture and suggest improvements for scalability and maintainability. Use the Development Head role perspective.
```

### Performance Optimization
```
@MCP-REFERENCE.md My Motia application is experiencing performance issues. Please analyze the bottlenecks and suggest optimizations using the appropriate AI team roles.
```

### Security Audit
```
@MCP-REFERENCE.md Perform a security audit of my Motia application focusing on authentication, input validation, and data protection.
```

### Testing Strategy
```
@MCP-REFERENCE.md Create a comprehensive testing strategy for my Motia application including unit tests, integration tests, and end-to-end tests.
```

## 📊 Project Management

### Phase Planning
```
@MCP-REFERENCE.md I'm starting a new Motia project for a SaaS platform. Please use the 8-phase development process to create a project plan with milestones and deliverables.
```

### Task Breakdown
```
@MCP-REFERENCE.md Break down this complex feature into atomic tasks that can be assigned to different AI team roles: [describe your feature]
```

### Progress Tracking
```
@MCP-REFERENCE.md Update the project memory with the current development status and suggest next steps based on completed tasks.
```

## 🎨 Frontend Integration

### UI Components
```
@MCP-REFERENCE.md Create React components that integrate with my Motia backend API. Include proper TypeScript types and error handling.
```

### State Management
```
@MCP-REFERENCE.md Design a frontend state management strategy that works well with Motia's event-driven backend architecture.
```

## 🤖 AI Team Coordination

### Role Assignment
```
@MCP-REFERENCE.md I have these requirements: [list requirements]. Please assign the appropriate AI team roles and create a coordination plan.
```

### Cross-Role Collaboration
```
@MCP-REFERENCE.md This task requires both Backend Engineer and DevOps Engineer expertise. Please coordinate between these roles to solve: [describe problem]
```

## 💡 Tips for Best Results

### Be Specific
```
# Good
@MCP-REFERENCE.md Create a TypeScript API step for user registration with email validation, password hashing, and JWT token generation.

# Less effective  
@MCP-REFERENCE.md Help me with user stuff.
```

### Provide Context
```
@MCP-REFERENCE.md I'm building a real-time multiplayer game backend. The current architecture has performance issues with 100+ concurrent users. Please use the appropriate AI team roles to optimize this.
```

### Reference Existing Code
```
@MCP-REFERENCE.md Based on my existing Motia steps in the /steps directory, suggest improvements and additional features that would enhance the application.
```

### Ask for Explanations
```
@MCP-REFERENCE.md Explain the event-driven architecture patterns in Motia and how they compare to traditional REST API approaches. Include practical examples.
```

## 🔄 Iterative Development

### Follow-up Questions
```
# After getting initial help
@MCP-REFERENCE.md The authentication system you suggested looks good. Now please help me implement the email verification part using the same patterns.
```

### Refinement Requests
```
@MCP-REFERENCE.md The code you provided works, but I need to add rate limiting and improve error messages. Please refine the implementation.
```

### Integration Help
```
@MCP-REFERENCE.md I've implemented the individual steps you suggested. Now help me integrate them into a cohesive workflow with proper event handling.
```

## 📚 Learning and Documentation

### Concept Explanation
```
@MCP-REFERENCE.md Explain Motia's state management system with practical examples showing different use cases and best practices.
```

### Pattern Learning
```
@MCP-REFERENCE.md Show me different patterns for handling file uploads in Motia, including validation, storage, and processing workflows.
```

### Best Practices
```
@MCP-REFERENCE.md What are the security best practices for Motia applications? Include code examples and common pitfalls to avoid.
```

## 🎯 Success Metrics

When using the MCP reference effectively, you should see:
- **Faster Development**: Reduced time from idea to implementation
- **Better Code Quality**: Consistent patterns and best practices
- **Improved Architecture**: Well-structured, scalable applications  
- **Enhanced Collaboration**: Standardized approaches across team members
- **Reduced Debugging**: Fewer issues due to proven patterns

## 🔗 Additional Resources

For more advanced usage patterns and examples, reference:
- **Main Repository**: https://github.com/lovinglifemediawebdev/ai-agent-mcp
- **AI Team Roles**: Individual role documentation for specialized help
- **Development Playbooks**: Comprehensive methodology guides
- **Template Library**: Ready-to-use code templates and patterns

---

**Remember**: The MCP reference file is designed to provide comprehensive context to Cursor AI. The more specific and detailed your requests, the better the AI can assist you with your Motia development needs.

# AI Agent System - Portable Reference

*Copy this file into any new project to leverage the AI Agent System's comprehensive development workflows and documentation.*

## 🚀 Quick Setup

### 1. Copy This Reference File
```bash
# Copy this file to your new project root
cp AI-AGENT-REFERENCE.md /path/to/your/new-project/
```

### 2. Install Dependencies (if needed)
```bash
npm install chalk inquirer fs-extra
```

## 📚 Available Development Playbooks

### Emoji Reference
- **EmojiDB**: https://emojidb.org/ - Comprehensive emoji database and search tool
- Use for consistent emoji usage across documentation and code
- Search by keywords to find appropriate emojis
- Avoid emoji corruption and ensure cross-platform compatibility

### Standard Development Workflow
**Use for**: Most web applications and general projects

**Key Components**:
- Universal project structure with src/, docs/, tests/, scripts/
- Development environment setup
- Feature development process
- Code review and release workflows
- Testing strategy (unit, integration, e2e)
- CI/CD pipeline configuration

**Project Structure**:
```
project-name/
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Application pages/routes
│   ├── services/          # Business logic and API calls
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript definitions
│   └── styles/            # Global styles
├── docs/                  # Project documentation
├── tests/                 # Test files
├── scripts/               # Build and utility scripts
└── .github/               # GitHub workflows
```

### DevDocs.io Integration
**Use for**: Projects needing offline documentation access

**Features**:
- Offline documentation access
- Unified search across multiple docs
- API integration capabilities
- Custom documentation sets
- Local DevDocs installation

**Quick Commands**:
```bash
# Access hosted version
open https://devdocs.io

# Local installation
git clone https://github.com/freeCodeCamp/devdocs.git
cd devdocs
bundle install
bundle exec thor docs:download --default
bundle exec rackup
```

### MDN Web Docs Integration
**Use for**: Web development projects

**Content Categories**:
- HTML, CSS, JavaScript documentation
- Web APIs and DOM references
- Accessibility guidelines (WCAG 2.1 AA)
- Performance optimization guides
- Security best practices
- Progressive Web Apps

**Local Content Access**:
```javascript
// Search MDN content locally
const searcher = new MDNContentSearcher()
await searcher.buildIndex()
const results = searcher.search('flexbox', { category: 'css' })
```

### Agile Development Workflow
**Use for**: Team-based development projects

**Key Practices**:
- Sprint planning (2-week cycles)
- Daily standups (15 minutes)
- User stories with acceptance criteria
- Sprint reviews and retrospectives
- Definition of done criteria

**User Story Template**:
```
As a [user type]
I want [functionality]
So that [benefit/value]

Acceptance Criteria:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

Definition of Done:
- [ ] Code reviewed
- [ ] Tests written
- [ ] Documentation updated
- [ ] Deployed to staging
```

### Frontend-Focused Development
**Use for**: UI/UX heavy projects

**Key Areas**:
- Component-based architecture
- State management patterns
- Responsive design principles
- Performance optimization
- Accessibility compliance

## 🛠️ Development Standards

### Core Standards
1. **TypeScript**: Use for type safety where applicable
2. **Testing**: Minimum 80% code coverage
3. **Code Review**: Required for all changes
4. **Documentation**: Keep docs in sync with code
5. **React Version**: React 18.x only (React 19 not supported)

### React Version Policy
- **Standard Version**: React 18.x (latest stable with wide ecosystem support)
- **Not Supported**: React 19.x (too new, limited third-party library support)
- **Rationale**: React 18 provides stable, well-tested features with comprehensive library ecosystem
- **Verification**: Always run `npm list react` to confirm React 18.x version
- **Migration Path**: Wait for React 19 ecosystem maturity before considering upgrade

### File Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)
- **Types**: PascalCase with `.types.ts` suffix
- **Tests**: `.test.js` or `.spec.js` suffix
- **Config files**: dot-prefixed (e.g., `.eslintrc.js`)

### Git Workflow
1. **Branch Naming**: `feature/`, `bugfix/`, `hotfix/`, `release/`
2. **Commit Messages**: Follow conventional commits format
3. **Pull Requests**: Descriptive titles and detailed descriptions

## 🧪 Testing Strategy

### Testing Pyramid
1. **Unit Tests** (70%): Test individual functions and components
2. **Integration Tests** (20%): Test component interactions
3. **E2E Tests** (10%): Test complete user workflows

### Testing Tools
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **Cypress/Playwright**: E2E testing
- **MSW**: API mocking

### Test File Organization
```
tests/
├── unit/                 # Unit tests
│   ├── components/       # Component tests
│   ├── utils/            # Utility function tests
│   └── services/         # Service tests
├── integration/          # Integration tests
└── e2e/                  # End-to-end tests
```

## 🚀 Deployment & CI/CD

### Environment Configuration
```bash
# Development
NODE_ENV=development
API_URL=http://localhost:3000

# Staging
NODE_ENV=staging
API_URL=https://staging-api.example.com

# Production
NODE_ENV=production
API_URL=https://api.example.com
```

### CI/CD Pipeline Steps
1. **Code Push**: Trigger pipeline on push to main/develop
2. **Lint & Test**: Run linting and all tests
3. **Build**: Create production build
4. **Security Scan**: Check for vulnerabilities
5. **Deploy**: Deploy to staging/production
6. **Notify**: Send notifications on success/failure

## 📊 Performance Monitoring

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Monitoring Tools
- **Bundle Analysis**: Webpack Bundle Analyzer
- **Error Tracking**: Sentry or similar
- **Uptime Monitoring**: Pingdom or similar

## 🤖 AI Agent Guidelines

### When Creating New Projects
1. **Follow Structure**: Use the standardized project structure
2. **Set Up Tools**: Configure linting, testing, and formatting
3. **Create Documentation**: Include comprehensive README and docs
4. **Initialize Git**: Set up version control and branching strategy
5. **Add CI/CD**: Configure automated testing and deployment
6. **Integrate DevDocs**: Set up DevDocs.io and MDN integration

### When Modifying Existing Projects
1. **Maintain Standards**: Follow existing code style and patterns
2. **Update Tests**: Add tests for new functionality
3. **Update Documentation**: Keep docs in sync with changes
4. **Follow Workflow**: Use proper branching and review process
5. **Consider Impact**: Assess impact on existing functionality

### Best Practices for AI Agents
1. **Consistency**: Always follow established patterns
2. **Quality**: Write clean, readable, and maintainable code
3. **Testing**: Include appropriate tests for all changes
4. **Documentation**: Update documentation with code changes
5. **Security**: Consider security implications of changes
6. **Performance**: Optimize for performance when possible

## 📋 Quick Reference Commands

### Project Setup
```bash
# Initialize new project
mkdir project-name && cd project-name
git init
npm init -y
npm install <framework> <typescript> <testing-library>

# Set up development tools
npm install -D eslint prettier husky lint-staged

# Create project structure
mkdir -p src/{components,pages,services,utils,types,styles}
mkdir -p tests/{unit,integration,e2e}
mkdir -p docs scripts .github/workflows
```

### Development Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Implement feature, test, and commit
npm test
npm run lint
npm run build
git add .
git commit -m "feat: add feature description"

# Push and create PR
git push origin feature/feature-name
```

### Documentation Access
```bash
# DevDocs.io (hosted)
open https://devdocs.io

# MDN Web Docs
open https://developer.mozilla.org

# Local documentation search
# Use the MDN content searcher for offline access
```

## 🔧 Configuration Files

### Essential Config Files
- `.editorconfig`: UTF8, LF, 2 spaces, trim trailing whitespace
- `.prettierrc`: Single quotes, trailing commas, 100 char width
- `.eslintrc.json`: Next.js core web vitals, TypeScript support
- `tsconfig.json`: TypeScript configuration
- `.gitignore`: Node modules, build outputs, environment files

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "development server command",
    "build": "production build command",
    "start": "production server command",
    "test": "run test suite",
    "lint": "run linting",
    "format": "format code with prettier"
  }
}
```

## 📚 Additional Resources

### Essential Tools
- **Version Control**: Git, GitHub/GitLab
- **Package Management**: npm, yarn, pnpm
- **Code Quality**: ESLint, Prettier, Husky
- **Testing**: Jest, Testing Library, Cypress
- **Deployment**: Vercel, Netlify, AWS, Docker
- **Monitoring**: Sentry, LogRocket, New Relic

### Documentation Integration
- **DevDocs.io**: Offline documentation access with unified search
- **MDN Web Docs**: Comprehensive web development reference
- **Local Documentation**: Project-specific docs in `/docs` folder

## 🎯 Project-Specific Customization

### For React Projects
- Use component-based architecture
- Implement proper state management (Redux, Zustand, Context)
- Follow React best practices and hooks patterns
- Use TypeScript for type safety
- **CRITICAL**: Use React 18.x only (React 19 not supported - limited ecosystem support)
- Verify React version: `npm list react` should show `react@^18.x.x`

### For Node.js/Backend Projects
- Follow MVC or service-oriented patterns
- Implement proper error handling and logging
- Use environment variables for configuration
- Implement proper API documentation

### For Full-Stack Projects
- Maintain clear boundaries between frontend and backend
- Use consistent naming conventions across layers
- Implement proper API versioning
- Use shared type definitions where possible

---

## 💡 Usage Tips

1. **Start with Standard Workflow**: Use the standard development workflow as your base
2. **Add Specialized Playbooks**: Integrate DevDocs or MDN playbooks as needed
3. **Customize for Your Stack**: Adapt the structure for your specific technology stack
4. **Keep It Updated**: Regularly update this reference with new learnings
5. **Share with Team**: Use this as a team reference for consistent development practices

---

*This reference file is derived from the AI Agent System's comprehensive development playbooks. It provides a portable way to leverage proven development workflows in any new project without requiring the full system installation.*

**Source**: AI Agent System - Comprehensive Development Workflows
**Last Updated**: December 2024
**Version**: 1.0.0

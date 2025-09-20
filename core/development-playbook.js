#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ErrorHandler, FileSystemError } = require('./error-handler.js')

/**
 * Development Playbook Manager
 * Manages comprehensive development workflows and project structures for AI agents
 */

class DevelopmentPlaybook {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.playbookDir = path.join(__dirname, 'playbooks')
    this.defaultPlaybook = 'standard-development-workflow.md'
  }

  /**
   * Get available development playbooks
   */
  getAvailablePlaybooks() {
    return {
      'standard': {
        name: 'Standard Development Workflow',
        description: 'Comprehensive development workflow for most project types',
        file: 'standard-development-workflow.md',
        categories: ['general', 'web', 'api', 'mobile']
      },
      'agile': {
        name: 'Agile Development Workflow',
        description: 'Agile methodology focused development process',
        file: 'agile-development-workflow.md',
        categories: ['agile', 'scrum', 'team']
      },
      'microservices': {
        name: 'Microservices Architecture',
        description: 'Development workflow for microservices architecture',
        file: 'microservices-workflow.md',
        categories: ['microservices', 'distributed', 'backend']
      },
      'frontend-focused': {
        name: 'Frontend-Focused Development',
        description: 'Workflow optimized for frontend development',
        file: 'frontend-development-workflow.md',
        categories: ['frontend', 'ui', 'ux', 'react', 'vue']
      },
      'frontend-playbook': {
        name: 'Springer Nature Frontend Playbook',
        description: 'Production-tested frontend development playbook with accessibility, performance, and best practices',
        file: 'frontend-playbook-main/README.md',
        categories: ['frontend', 'accessibility', 'performance', 'css', 'javascript', 'production'],
        external: true,
        source: 'Springer Nature',
        features: ['WCAG 2.1 AA', 'Performance optimization', 'Progressive enhancement', 'Code review guidelines']
      },
      'fullstack-web-dev': {
        name: 'Full-Stack Web Development Playbook',
        description: 'Comprehensive guide for React, Next.js, Supabase, and AI-assisted development',
        file: 'Full-Stack-Web-Dev-Playbook.md',
        categories: ['fullstack', 'react', 'nextjs', 'supabase', 'ai-assisted', 'typescript'],
        external: true,
        source: 'GPT-5 Research',
        features: ['React + Next.js', 'Supabase Backend', 'AI Pair Programming', 'TypeScript', 'Modern Tooling']
      },
      'devdocs-integration': {
        name: 'DevDocs.io Integration Playbook',
        description: 'Comprehensive guide for integrating DevDocs.io for offline documentation access and development efficiency',
        file: 'devdocs-integration-playbook.md',
        categories: ['documentation', 'offline', 'reference', 'productivity', 'devtools'],
        external: false,
        source: 'AI Agent System',
        features: ['Offline Documentation', 'Multi-language Support', 'Instant Search', 'Keyboard Shortcuts', 'API Integration']
      },
      'mdn-integration': {
        name: 'MDN Web Docs Integration Playbook',
        description: 'Comprehensive guide for integrating MDN Web Docs content for web development reference and learning',
        file: 'mdn-integration-playbook.md',
        categories: ['documentation', 'web-development', 'reference', 'learning', 'mdn', 'mozilla'],
        external: false,
        source: 'AI Agent System + MDN Content',
        features: ['Complete Web Docs', 'Live Content Updates', 'Multi-language Support', 'Learning Paths', 'API References', 'Best Practices']
      },
      'data-science': {
        name: 'Data Science Workflow',
        description: 'Development process for data science and ML projects',
        file: 'data-science-workflow.md',
        categories: ['data-science', 'ml', 'ai', 'analytics']
      },
      'open-source': {
        name: 'Open Source Project Workflow',
        description: 'Development workflow for open source projects',
        file: 'open-source-workflow.md',
        categories: ['open-source', 'community', 'contribution']
      }
    }
  }

  /**
   * Generate the standard development workflow playbook
   */
  generateStandardPlaybook() {
    return `# Standard Development Workflow & Project Structure Guide

*This comprehensive guide provides AI agents with standardized development workflows, project structures, and best practices for creating and maintaining software projects.*

## 🎯 Overview

This playbook serves as a master reference for AI agents when:
- Creating new projects from scratch
- Setting up development environments
- Following consistent development workflows
- Implementing proper project structures
- Maintaining code quality and standards

---

## 📁 Universal Project Structure

### Core Directory Layout
\`\`\`
project-name/
├── 📁 src/                    # Source code (primary development area)
│   ├── 📁 components/         # Reusable UI components
│   ├── 📁 pages/             # Application pages/routes
│   ├── 📁 services/          # Business logic and API calls
│   ├── 📁 utils/             # Utility functions and helpers
│   ├── 📁 hooks/             # Custom React hooks (if applicable)
│   ├── 📁 types/             # TypeScript type definitions
│   └── 📁 styles/            # Global styles and themes
├── 📁 public/                # Static assets (images, icons, etc.)
├── 📁 docs/                  # Project documentation
│   ├── 📄 README.md          # Project overview and setup
│   ├── 📄 API.md             # API documentation
│   ├── 📄 DEPLOYMENT.md      # Deployment instructions
│   └── 📄 CONTRIBUTING.md    # Contribution guidelines
├── 📁 tests/                 # Test files
│   ├── 📁 unit/              # Unit tests
│   ├── 📁 integration/       # Integration tests
│   └── 📁 e2e/               # End-to-end tests
├── 📁 scripts/               # Build and utility scripts
│   ├── 📄 build.js           # Build script
│   ├── 📄 deploy.js          # Deployment script
│   └── 📄 setup.js           # Environment setup
├── 📁 .github/               # GitHub workflows and templates
│   ├── 📁 workflows/         # CI/CD pipelines
│   ├── 📁 ISSUE_TEMPLATE/    # Issue templates
│   └── 📁 PULL_REQUEST_TEMPLATE/ # PR templates
├── 📄 .gitignore             # Git ignore rules
├── 📄 .env.example           # Environment variables template
├── 📄 package.json           # Dependencies and scripts
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 .eslintrc.js           # ESLint configuration
├── 📄 .prettierrc            # Prettier configuration
└── 📄 README.md              # Project documentation
\`\`\`

### File Naming Conventions
- **Components**: PascalCase (e.g., \`UserProfile.tsx\`)
- **Utilities**: camelCase (e.g., \`formatDate.js\`)
- **Constants**: UPPER_SNAKE_CASE (e.g., \`API_ENDPOINTS.js\`)
- **Types**: PascalCase with \`.types.ts\` suffix (e.g., \`User.types.ts\`)
- **Tests**: \`.test.js\` or \`.spec.js\` suffix
- **Config files**: dot-prefixed (e.g., \`.eslintrc.js\`)

---

## 🔄 Development Workflow

### 1. Project Initialization
\`\`\`bash
# 1. Create project directory
mkdir project-name && cd project-name

# 2. Initialize version control
git init
git remote add origin <repository-url>

# 3. Initialize package manager
npm init -y  # or yarn init

# 4. Install core dependencies
npm install <framework> <typescript> <testing-library>

# 5. Set up development tools
npm install -D eslint prettier husky lint-staged

# 6. Create initial project structure
mkdir -p src/{components,pages,services,utils,types,styles}
mkdir -p tests/{unit,integration,e2e}
mkdir -p docs scripts .github/workflows
\`\`\`

### 2. Development Environment Setup
\`\`\`bash
# 1. Environment configuration
cp .env.example .env
# Configure environment variables

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Run tests
npm test

# 5. Lint and format code
npm run lint
npm run format
\`\`\`

### 3. Feature Development Process
\`\`\`bash
# 1. Create feature branch
git checkout -b feature/feature-name

# 2. Implement feature
# - Write code following project standards
# - Add appropriate tests
# - Update documentation

# 3. Test implementation
npm test
npm run lint
npm run build

# 4. Commit changes
git add .
git commit -m "feat: add feature description"

# 5. Push and create PR
git push origin feature/feature-name
# Create pull request via GitHub/GitLab
\`\`\`

### 4. Code Review Process
1. **Automated Checks**: CI/CD pipeline runs tests, linting, and builds
2. **Peer Review**: Team members review code for quality and standards
3. **Documentation**: Ensure documentation is updated
4. **Testing**: Verify all tests pass and coverage is maintained
5. **Approval**: Required approvals before merge

### 5. Release Process
\`\`\`bash
# 1. Merge to main branch
git checkout main
git merge feature/feature-name

# 2. Update version
npm version patch|minor|major

# 3. Create release tag
git tag v1.0.0
git push origin v1.0.0

# 4. Deploy to production
npm run deploy
\`\`\`

---

## 🛠️ Technology-Specific Structures

*For detailed technology-specific project structures and best practices, refer to:*
- **DevDocs Integration**: Comprehensive documentation for all major frameworks and tools
- **MDN Web Docs**: Web technology-specific structures and patterns
- **Framework Documentation**: Official docs for React, Vue, Angular, etc.

### Quick Reference
- **Frontend**: Use component-based architecture with clear separation of concerns
- **Backend**: Follow MVC or service-oriented patterns
- **Mobile**: Use platform-specific conventions and state management
- **Full-Stack**: Maintain clear boundaries between frontend and backend code

---

## 📋 Development Standards

### Core Standards
1. **TypeScript**: Use TypeScript for type safety
2. **Testing**: Minimum 80% code coverage
3. **Code Review**: Required for all changes
4. **Documentation**: Keep docs in sync with code changes

### Git Workflow
1. **Branch Naming**: \`feature/\`, \`bugfix/\`, \`hotfix/\`, \`release/\`
2. **Commit Messages**: Follow conventional commits format
3. **Pull Requests**: Descriptive titles and detailed descriptions

### Documentation Strategy
- **Local Docs**: Project-specific documentation in `/docs` folder
- **DevDocs Integration**: Use DevDocs.io for comprehensive reference
- **MDN Web Docs**: Leverage MDN for web development standards
- **Code Comments**: Explain complex logic and business rules

---

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
- **Testing Library**: User-centric testing

### Test File Organization
\`\`\`
tests/
├── 📁 unit/                 # Unit tests
│   ├── 📁 components/       # Component tests
│   ├── 📁 utils/            # Utility function tests
│   └── 📁 services/         # Service tests
├── 📁 integration/          # Integration tests
└── 📁 e2e/                  # End-to-end tests
\`\`\`

---

## 🚀 Deployment & CI/CD

### Environment Configuration
\`\`\`
# Development
NODE_ENV=development
API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/dev

# Staging
NODE_ENV=staging
API_URL=https://staging-api.example.com
DATABASE_URL=postgresql://staging-db:5432/staging

# Production
NODE_ENV=production
API_URL=https://api.example.com
DATABASE_URL=postgresql://prod-db:5432/production
\`\`\`

### CI/CD Pipeline
1. **Code Push**: Trigger pipeline on push to main/develop
2. **Lint & Test**: Run linting and all tests
3. **Build**: Create production build
4. **Security Scan**: Check for vulnerabilities
5. **Deploy**: Deploy to staging/production
6. **Notify**: Send notifications on success/failure

---

## 📊 Monitoring & Maintenance

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Analysis**: Webpack Bundle Analyzer
- **Error Tracking**: Sentry or similar
- **Uptime Monitoring**: Pingdom or similar

### Maintenance Tasks
- **Dependency Updates**: Regular security updates
- **Code Refactoring**: Improve code quality
- **Performance Optimization**: Speed improvements
- **Documentation Updates**: Keep docs current

---

## 🤖 AI Agent Guidelines

### When Creating New Projects
1. **Follow Structure**: Use the standardized project structure
2. **Set Up Tools**: Configure linting, testing, and formatting
3. **Create Documentation**: Include comprehensive README and docs
4. **Initialize Git**: Set up version control and branching strategy
5. **Add CI/CD**: Configure automated testing and deployment
6. **Integrate DevDocs**: Set up DevDocs.io and MDN integration for reference

### When Modifying Existing Projects
1. **Maintain Standards**: Follow existing code style and patterns
2. **Update Tests**: Add tests for new functionality
3. **Update Documentation**: Keep docs in sync with changes
4. **Follow Workflow**: Use proper branching and review process
5. **Consider Impact**: Assess impact on existing functionality
6. **Leverage DevDocs**: Use DevDocs/MDN for comprehensive reference

### Best Practices for AI Agents
1. **Consistency**: Always follow established patterns
2. **Quality**: Write clean, readable, and maintainable code
3. **Testing**: Include appropriate tests for all changes
4. **Documentation**: Update documentation with code changes
5. **Reference Integration**: Use DevDocs.io and MDN for comprehensive reference
6. **Security**: Consider security implications of changes
7. **Performance**: Optimize for performance when possible

---

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

---

*This playbook should be regularly updated to reflect current best practices and emerging technologies. AI agents should reference this document when making decisions about project structure, development workflow, and code organization.*
`
  }

  /**
   * Generate DevDocs integration playbook
   */
  generateDevDocsPlaybook() {
    return `# DevDocs.io Integration Playbook

*This comprehensive guide provides AI agents with strategies for integrating DevDocs.io into development workflows for enhanced productivity and offline documentation access.*

## �� Overview

DevDocs.io is an open-source project that consolidates multiple developer documentations into a unified, searchable interface. This playbook helps AI agents leverage DevDocs for:

- **Offline Documentation Access**: Work without internet connectivity
- **Unified Reference Hub**: Access multiple documentation sources in one place
- **Enhanced Productivity**: Fast search and keyboard shortcuts
- **API Integration**: Programmatic access to documentation
- **Custom Documentation Sets**: Tailored documentation for specific projects

---

## 🚀 DevDocs.io Features

### Core Capabilities
- **Instant Search**: Fast, fuzzy search across all documentation
- **Offline Support**: Download documentation for offline access
- **Keyboard Shortcuts**: Efficient navigation and search
- **Multi-language Support**: Documentation in multiple programming languages
- **API Access**: Programmatic integration capabilities
- **Customizable**: Add custom documentation sets
- **Mobile Responsive**: Works on all devices

### Supported Documentation
- **Web Technologies**: HTML, CSS, JavaScript, DOM, Web APIs
- **Frameworks**: React, Vue, Angular, Svelte, Next.js
- **Backend**: Node.js, Express, Python, Django, Flask
- **Databases**: MongoDB, PostgreSQL, MySQL, Redis
- **Tools**: Git, Docker, Kubernetes, AWS, Azure
- **Languages**: Python, JavaScript, TypeScript, Go, Rust, Java

---

## 📋 Integration Strategies

### 1. Hosted DevDocs Integration

#### Quick Setup
\`\`\`bash
# Access hosted version
open https://devdocs.io

# Bookmark for quick access
# Add to browser bookmarks bar
\`\`\`

#### Browser Integration
\`\`\`javascript
// Browser extension for quick access
// Add to browser bookmarks with custom search
javascript:void(window.open('https://devdocs.io/#q=' + encodeURIComponent(window.getSelection().toString())))
\`\`\`

### 2. Local DevDocs Installation

#### Prerequisites
\`\`\`bash
# Required dependencies
# Ruby 3.4.1+
# libcurl
# Node.js (for ExecJS)
# Git

# Check versions
ruby --version
node --version
git --version
\`\`\`

#### Installation Steps
\`\`\`bash
# 1. Clone repository
git clone https://github.com/freeCodeCamp/devdocs.git
cd devdocs

# 2. Install Ruby dependencies
gem install bundler
bundle install

# 3. Download default documentation
bundle exec thor docs:download --default

# 4. Start local server
bundle exec rackup

# 5. Access at http://localhost:9292
\`\`\`

#### Custom Documentation Sets
\`\`\`bash
# Download specific documentation
bundle exec thor docs:download --all

# Download specific docs
bundle exec thor docs:download javascript css html

# Update documentation
bundle exec thor docs:download --update
\`\`\`

### 3. API Integration

#### DevDocs API Usage
\`\`\`javascript
// Search API endpoint
const searchAPI = 'https://devdocs.io/docs.json';

// Example search function
async function searchDevDocs(query, docSet = 'all') {
  try {
    const response = await fetch(\`https://devdocs.io/docs.json?q=\${encodeURIComponent(query)}&doc=\${docSet}\`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error('DevDocs search failed:', error);
    return [];
  }
}

// Usage example
searchDevDocs('array methods', 'javascript').then(results => {
  console.log('Search results:', results);
});
\`\`\`

#### Local API Integration
\`\`\`javascript
// Local DevDocs API
const localAPI = 'http://localhost:9292/docs.json';

async function searchLocalDevDocs(query) {
  try {
    const response = await fetch(\`http://localhost:9292/docs.json?q=\${encodeURIComponent(query)}\`);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error('Local DevDocs search failed:', error);
    return [];
  }
}
\`\`\`

---

## 🛠️ Development Workflow Integration

### 1. IDE Integration

#### VS Code Extension
\`\`\`json
// .vscode/settings.json
{
  "devdocs.searchUrl": "https://devdocs.io/#q=",
  "devdocs.openInBrowser": true,
  "devdocs.defaultDocs": ["javascript", "css", "html"]
}
\`\`\`

#### Custom VS Code Command
\`\`\`javascript
// Custom command for DevDocs search
const vscode = require('vscode');

function searchInDevDocs() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const selection = editor.document.getText(editor.selection);
    const searchTerm = selection || 'javascript';
    const devDocsUrl = \`https://devdocs.io/#q=\${encodeURIComponent(searchTerm)}\`;
    vscode.env.openExternal(vscode.Uri.parse(devDocsUrl));
  }
}
\`\`\`

### 2. Terminal Integration

#### Custom Shell Functions
\`\`\`bash
# Add to .bashrc or .zshrc
devdocs() {
  local query="$*"
  if [ -z "$query" ]; then
    query="javascript"
  fi
  open "https://devdocs.io/#q=$(echo "$query" | sed 's/ /%20/g')"
}

# Usage
devdocs array methods
devdocs react hooks
devdocs css grid
\`\`\`

#### Alias Shortcuts
\`\`\`bash
# Quick aliases for common searches
alias jsdocs="devdocs javascript"
alias cssdocs="devdocs css"
alias htmldocs="devdocs html"
alias reactdocs="devdocs react"
alias nodedocs="devdocs node"
\`\`\`

### 3. Project-Specific Integration

#### Documentation Configuration
\`\`\`json
// devdocs.config.json
{
  "project": {
    "name": "My Web App",
    "techStack": ["javascript", "react", "node", "mongodb"],
    "customDocs": ["nextjs", "tailwindcss", "vercel"]
  },
  "search": {
    "defaultDocs": ["javascript", "react"],
    "fallbackDocs": ["html", "css"],
    "customSearchUrl": "https://devdocs.io/#q="
  },
  "offline": {
    "enabled": true,
    "localUrl": "http://localhost:9292",
    "syncInterval": "daily"
  }
}
\`\`\`

#### Automated Documentation Sync
\`\`\`javascript
// scripts/sync-docs.js
const { execSync } = require('child_process');
const fs = require('fs');

function syncDevDocs() {
  try {
    console.log('Syncing DevDocs...');
    
    // Download project-specific docs
    const techStack = ['javascript', 'react', 'node', 'mongodb'];
    execSync(\`bundle exec thor docs:download \${techStack.join(' ')}\`);
    
    console.log('DevDocs sync completed');
  } catch (error) {
    console.error('DevDocs sync failed:', error.message);
  }
}

// Run sync
syncDevDocs();
\`\`\`

---

## 🔧 Advanced Configuration

### 1. Custom Documentation Sets

#### Adding Custom Docs
\`\`\`ruby
# config/docs.rb
docs = {
  'my-framework' => {
    'name' => 'My Custom Framework',
    'type' => 'srd',
    'links' => {
      'home' => 'https://myframework.com',
      'code' => 'https://github.com/myframework/docs'
    },
    'files' => [
      'https://myframework.com/docs/api.json',
      'https://myframework.com/docs/guide.json'
    ]
  }
}
\`\`\`

#### Custom Documentation Parser
\`\`\`ruby
# lib/docs/my_framework.rb
module Docs
  class MyFramework < Docs::Scraper
    self.name = 'My Framework'
    self.type = 'srd'
    self.root_path = 'index.html'
    self.links = {
      home: 'https://myframework.com',
      code: 'https://github.com/myframework/docs'
    }

    def get_latest_version(opts)
      get_latest_version_on('myframework.com', opts)
    end

    def get_source_urls(opts)
      [
        'https://myframework.com/docs/api.json',
        'https://myframework.com/docs/guide.json'
      ]
    end
  end
end
\`\`\`

### 2. Search Customization

#### Custom Search Implementation
\`\`\`javascript
// Custom search with filtering
class DevDocsSearch {
  constructor(config) {
    this.config = config;
    this.cache = new Map();
  }

  async search(query, options = {}) {
    const {
      docSets = this.config.defaultDocs,
      limit = 10,
      includeCode = true
    } = options;

    // Check cache first
    const cacheKey = \`\${query}-\${docSets.join(',')}\`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const results = await this.performSearch(query, docSets);
      const filteredResults = this.filterResults(results, { limit, includeCode });
      
      // Cache results
      this.cache.set(cacheKey, filteredResults);
      
      return filteredResults;
    } catch (error) {
      console.error('Search failed:', error);
      return [];
    }
  }

  async performSearch(query, docSets) {
    const searchPromises = docSets.map(docSet => 
      this.searchDocSet(query, docSet)
    );
    
    const results = await Promise.all(searchPromises);
    return results.flat();
  }

  async searchDocSet(query, docSet) {
    const response = await fetch(\`https://devdocs.io/docs.json?q=\${encodeURIComponent(query)}&doc=\${docSet}\`);
    return response.json();
  }

  filterResults(results, options) {
    return results
      .filter(result => options.includeCode || !result.type?.includes('code'))
      .slice(0, options.limit);
  }
}
\`\`\`

### 3. Offline-First Strategy

#### Service Worker Implementation
\`\`\`javascript
// sw.js - Service Worker for offline DevDocs
const CACHE_NAME = 'devdocs-cache-v1';
const DOCS_TO_CACHE = [
  'https://devdocs.io/',
  'https://devdocs.io/docs.json',
  // Add specific documentation URLs
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(DOCS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
\`\`\`

#### Offline Sync Strategy
\`\`\`javascript
// offline-sync.js
class OfflineDevDocs {
  constructor() {
    this.dbName = 'devdocs-offline';
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const store = db.createObjectStore('docs', { keyPath: 'id' });
        store.createIndex('title', 'title', { unique: false });
        store.createIndex('docSet', 'docSet', { unique: false });
      };
    });
  }

  async syncDocs(docSets) {
    for (const docSet of docSets) {
      const docs = await this.fetchDocSet(docSet);
      await this.storeDocs(docs);
    }
  }

  async fetchDocSet(docSet) {
    const response = await fetch(\`https://devdocs.io/docs.json?doc=\${docSet}\`);
    return response.json();
  }

  async storeDocs(docs) {
    const transaction = this.db.transaction(['docs'], 'readwrite');
    const store = transaction.objectStore('docs');
    
    for (const doc of docs) {
      await store.put(doc);
    }
  }

  async searchOffline(query) {
    const transaction = this.db.transaction(['docs'], 'readonly');
    const store = transaction.objectStore('docs');
    const index = store.index('title');
    
    return new Promise((resolve) => {
      const results = [];
      const request = index.openCursor();
      
      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const doc = cursor.value;
          if (doc.title.toLowerCase().includes(query.toLowerCase())) {
            results.push(doc);
          }
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }
}
\`\`\`

---

## 🤖 AI Agent Integration Guidelines

### 1. Documentation Lookup Patterns

#### Common Search Patterns
\`\`\`javascript
// AI Agent helper functions
class DevDocsAgent {
  constructor() {
    this.search = new DevDocsSearch({
      defaultDocs: ['javascript', 'css', 'html', 'react', 'node']
    });
  }

  async lookupAPI(method, library) {
    const query = \`\${library} \${method} API\`;
    const results = await this.search.search(query, {
      docSets: [library.toLowerCase()],
      limit: 5
    });
    return this.formatAPIResults(results);
  }

  async lookupSyntax(syntax, language) {
    const query = \`\${language} \${syntax} syntax\`;
    const results = await this.search.search(query, {
      docSets: [language.toLowerCase()],
      limit: 3
    });
    return this.formatSyntaxResults(results);
  }

  async lookupBestPractice(topic, context) {
    const query = \`\${topic} best practices \${context}\`;
    const results = await this.search.search(query, {
      docSets: ['javascript', 'css', 'html'],
      limit: 5
    });
    return this.formatBestPracticeResults(results);
  }

  formatAPIResults(results) {
    return results.map(result => ({
      title: result.title,
      description: result.description,
      url: result.url,
      type: 'API Reference'
    }));
  }

  formatSyntaxResults(results) {
    return results.map(result => ({
      title: result.title,
      code: result.code,
      url: result.url,
      type: 'Syntax Reference'
    }));
  }

  formatBestPracticeResults(results) {
    return results.map(result => ({
      title: result.title,
      content: result.content,
      url: result.url,
      type: 'Best Practice'
    }));
  }
}
\`\`\`

### 2. Context-Aware Documentation

#### Smart Documentation Selection
\`\`\`javascript
// Context-aware documentation lookup
class ContextAwareDevDocs {
  constructor() {
    this.contextMappings = {
      'react-component': ['react', 'javascript', 'jsx'],
      'css-styling': ['css', 'sass', 'less'],
      'api-development': ['node', 'express', 'javascript'],
      'database-queries': ['mongodb', 'postgresql', 'sql'],
      'testing': ['jest', 'mocha', 'testing-library']
    };
  }

  async getRelevantDocs(context, query) {
    const relevantDocSets = this.contextMappings[context] || ['javascript'];
    
    const results = await Promise.all(
      relevantDocSets.map(docSet => 
        this.searchInDocSet(query, docSet)
      )
    );
    
    return this.mergeAndRankResults(results);
  }

  async searchInDocSet(query, docSet) {
    // Implementation for searching specific documentation set
    const response = await fetch(\`https://devdocs.io/docs.json?q=\${encodeURIComponent(query)}&doc=\${docSet}\`);
    const results = await response.json();
    return results.map(result => ({ ...result, docSet }));
  }

  mergeAndRankResults(results) {
    const merged = results.flat();
    
    // Rank by relevance and context
    return merged
      .sort((a, b) => {
        const scoreA = this.calculateRelevanceScore(a);
        const scoreB = this.calculateRelevanceScore(b);
        return scoreB - scoreA;
      })
      .slice(0, 10);
  }

  calculateRelevanceScore(result) {
    let score = 0;
    
    // Base score from search relevance
    score += result.score || 0;
    
    // Boost for exact matches
    if (result.title.toLowerCase().includes(result.query.toLowerCase())) {
      score += 10;
    }
    
    // Boost for code examples
    if (result.code) {
      score += 5;
    }
    
    return score;
  }
}
\`\`\`

### 3. Integration with AI Agent System

#### DevDocs Integration in AI Instructions
\`\`\`markdown
## Documentation Reference

### DevDocs Integration
This project uses DevDocs.io for comprehensive documentation access:

- **Primary Docs**: JavaScript, React, Node.js, CSS
- **Search URL**: https://devdocs.io/#q=
- **Local Instance**: http://localhost:9292 (when available)
- **Offline Mode**: Enabled for core documentation

### Quick Reference Commands
- \`devdocs <query>\` - Search DevDocs from terminal
- \`jsdocs <query>\` - Search JavaScript documentation
- \`reactdocs <query>\` - Search React documentation
- \`cssdocs <query>\` - Search CSS documentation

### API Integration
\`\`\`javascript
// Search DevDocs programmatically
const results = await searchDevDocs('array methods', 'javascript');
\`\`\`
\`\`\`

---

## 📊 Performance Optimization

### 1. Caching Strategies

#### Browser Caching
\`\`\`javascript
// Implement intelligent caching
class DevDocsCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 1000;
    this.ttl = 24 * 60 * 60 * 1000; // 24 hours
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
}
\`\`\`

#### Service Worker Caching
\`\`\`javascript
// Advanced caching with service worker
const CACHE_STRATEGIES = {
  'docs.json': 'cache-first',
  'static': 'stale-while-revalidate',
  'api': 'network-first'
};

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const strategy = this.getCacheStrategy(url);
  
  event.respondWith(this.handleRequest(event.request, strategy));
});

async function handleRequest(request, strategy) {
  switch (strategy) {
    case 'cache-first':
      return this.cacheFirst(request);
    case 'stale-while-revalidate':
      return this.staleWhileRevalidate(request);
    case 'network-first':
      return this.networkFirst(request);
    default:
      return fetch(request);
  }
}
\`\`\`

### 2. Search Optimization

#### Debounced Search
\`\`\`javascript
// Implement debounced search for better performance
class DebouncedDevDocsSearch {
  constructor(delay = 300) {
    this.delay = delay;
    this.timeoutId = null;
    this.searchQueue = [];
  }

  search(query, callback) {
    clearTimeout(this.timeoutId);
    
    this.timeoutId = setTimeout(async () => {
      const results = await this.performSearch(query);
      callback(results);
    }, this.delay);
  }

  async performSearch(query) {
    // Implementation for actual search
    const response = await fetch(\`https://devdocs.io/docs.json?q=\${encodeURIComponent(query)}\`);
    return response.json();
  }
}
\`\`\`

---

## 🔍 Troubleshooting

### Common Issues

#### 1. Local DevDocs Won't Start
\`\`\`bash
# Check Ruby version
ruby --version

# Update bundler
gem update bundler

# Clear bundle cache
bundle clean --force

# Reinstall dependencies
bundle install --path vendor/bundle
\`\`\`

#### 2. Documentation Download Fails
\`\`\`bash
# Check network connectivity
ping devdocs.io

# Try downloading specific docs
bundle exec thor docs:download javascript

# Check available docs
bundle exec thor docs:list
\`\`\`

#### 3. API Integration Issues
\`\`\`javascript
// Debug API calls
async function debugDevDocsAPI(query) {
  try {
    console.log('Searching for:', query);
    const response = await fetch(\`https://devdocs.io/docs.json?q=\${encodeURIComponent(query)}\`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Results count:', data.length);
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    return [];
  }
}
\`\`\`

---

## 📚 Best Practices

### 1. Documentation Strategy

#### Choose the Right Documentation Sets
- **Core Web**: HTML, CSS, JavaScript
- **Framework Specific**: React, Vue, Angular (based on project)
- **Backend**: Node.js, Python, or your chosen backend language
- **Database**: MongoDB, PostgreSQL, or your chosen database
- **Tools**: Git, Docker, your CI/CD tools

#### Regular Updates
\`\`\`bash
# Set up automated updates
# Add to crontab for daily updates
0 2 * * * cd /path/to/devdocs && bundle exec thor docs:download --update
\`\`\`

### 2. Integration Best Practices

#### Consistent Search Patterns
- Use consistent naming conventions for search functions
- Implement fallback strategies for offline scenarios
- Cache frequently accessed documentation
- Provide clear error messages and fallbacks

#### User Experience
- Implement keyboard shortcuts for quick access
- Provide visual feedback during searches
- Show loading states and progress indicators
- Implement search suggestions and autocomplete

---

## 🚀 Future Enhancements

### Planned Features
- **AI-Powered Search**: Integration with AI for smarter search results
- **Custom Documentation**: Easy addition of project-specific docs
- **Collaborative Features**: Share documentation sets across teams
- **Analytics**: Track most searched topics and optimize accordingly
- **Mobile App**: Native mobile application for documentation access

### Integration Opportunities
- **IDE Plugins**: Enhanced IDE integration with DevDocs
- **Browser Extensions**: Seamless browser integration
- **API Enhancements**: More powerful API for programmatic access
- **Offline Sync**: Better offline synchronization strategies

---

*This DevDocs integration playbook provides AI agents with comprehensive strategies for leveraging DevDocs.io to enhance development productivity and provide reliable offline documentation access. Regular updates and community contributions help keep this playbook current with the latest DevDocs features and best practices.*
`
  }

  /**
   * Generate MDN Web Docs integration playbook
   */
  generateMDNIntegrationPlaybook() {
    return `# MDN Web Docs Integration Playbook

*This comprehensive guide provides AI agents with strategies for integrating MDN Web Docs content into development workflows for comprehensive web development reference and learning.*

## 🎯 Overview

MDN Web Docs is the definitive resource for web developers, providing comprehensive documentation for web technologies. This playbook helps AI agents leverage the complete MDN content repository for:

- **Complete Web Documentation**: Access to all MDN content including HTML, CSS, JavaScript, Web APIs, and more
- **Live Content Updates**: Always up-to-date with the latest web standards and best practices
- **Learning Paths**: Structured learning resources for web development
- **API References**: Complete documentation for all web APIs
- **Best Practices**: Industry-standard guidelines and recommendations
- **Multi-language Support**: Content available in multiple languages

---

## 📚 MDN Content Structure

### Repository Organization
\`\`\`
devdocs/mdn-content/
├── 📁 files/
│   ├── 📁 en-us/                    # English content
│   │   ├── 📁 web/                  # Web technologies
│   │   │   ├── 📁 html/             # HTML documentation
│   │   │   ├── 📁 css/              # CSS documentation
│   │   │   ├── 📁 javascript/       # JavaScript documentation
│   │   │   ├── 📁 api/              # Web APIs documentation
│   │   │   ├── 📁 accessibility/    # Accessibility guidelines
│   │   │   ├── 📁 performance/      # Performance optimization
│   │   │   ├── 📁 security/         # Web security
│   │   │   └── 📁 progressive_web_apps/ # PWA documentation
│   │   ├── 📁 learn_web_development/ # Learning resources
│   │   ├── 📁 glossary/             # Technical terms
│   │   └── 📁 mdn/                  # MDN-specific content
│   ├── 📁 sidebars/                 # Navigation structure
│   └── 📁 jsondata/                 # Structured data
├── 📁 scripts/                      # Build and utility scripts
└── 📁 tests/                        # Content validation tests
\`\`\`

### Key Content Categories

#### Core Web Technologies
- **HTML**: Complete element reference, attributes, and semantic markup
- **CSS**: Properties, selectors, layouts, animations, and responsive design
- **JavaScript**: Language features, APIs, frameworks, and best practices
- **Web APIs**: DOM, Fetch, Web Workers, WebRTC, and more

#### Advanced Topics
- **Accessibility**: WCAG guidelines, ARIA, and inclusive design
- **Performance**: Optimization techniques, Core Web Vitals, and monitoring
- **Security**: HTTPS, CSP, authentication, and secure coding practices
- **Progressive Web Apps**: Service workers, offline functionality, and app-like experiences

#### Learning Resources
- **Web Development Learning Path**: Structured curriculum for beginners
- **Tutorials**: Step-by-step guides for specific technologies
- **Guides**: In-depth explanations of complex topics
- **Examples**: Code samples and interactive demonstrations

---

## 🔧 Integration Strategies

### 1. Direct File Access

#### Basic Content Reading
\`\`\`javascript
// MDN Content Reader
class MDNContentReader {
  constructor(projectRoot = process.cwd()) {
    this.mdnPath = path.join(projectRoot, 'agent', 'mdn-content', 'files', 'en-us')
  }

  async readContent(category, topic) {
    const filePath = path.join(this.mdnPath, 'web', category, \`\${topic}.md\`)
    
    try {
      const content = await fs.readFile(filePath, 'utf8')
      return this.parseMDNContent(content)
    } catch (error) {
      console.error(\`Failed to read MDN content: \${error.message}\`)
      return null
    }
  }

  parseMDNContent(content) {
    // Parse MDN frontmatter and content
    const frontmatterMatch = content.match(/^---\\n([\\s\\S]*?)\\n---/)
    const frontmatter = frontmatterMatch ? this.parseYAML(frontmatterMatch[1]) : {}
    const body = content.replace(/^---\\n[\\s\\S]*?\\n---\\n/, '')
    
    return {
      frontmatter,
      content: body,
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      tags: frontmatter.tags || []
    }
  }

  parseYAML(yamlString) {
    // Simple YAML parser for MDN frontmatter
    const lines = yamlString.split('\\n')
    const result = {}
    
    for (const line of lines) {
      const match = line.match(/^([^:]+):\\s*(.+)$/)
      if (match) {
        const key = match[1].trim()
        let value = match[2].trim()
        
        // Handle arrays
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''))
        }
        
        result[key] = value
      }
    }
    
    return result
  }
}
\`\`\`

#### Content Search and Discovery
\`\`\`javascript
// MDN Content Searcher
class MDNContentSearcher {
  constructor(projectRoot = process.cwd()) {
    this.mdnPath = path.join(projectRoot, 'agent', 'mdn-content', 'files', 'en-us')
    this.index = new Map()
  }

  async buildIndex() {
    console.log('Building MDN content index...')
    
    const categories = ['html', 'css', 'javascript', 'api', 'accessibility', 'performance', 'security']
    
    for (const category of categories) {
      const categoryPath = path.join(this.mdnPath, 'web', category)
      
      if (await fs.pathExists(categoryPath)) {
        const files = await fs.readdir(categoryPath)
        
        for (const file of files) {
          if (file.endsWith('.md')) {
            const filePath = path.join(categoryPath, file)
            const content = await fs.readFile(filePath, 'utf8')
            const parsed = this.parseMDNContent(content)
            
            this.index.set(file, {
              category,
              title: parsed.title,
              description: parsed.description,
              tags: parsed.tags,
              content: parsed.content,
              path: filePath
            })
          }
        }
      }
    }
    
    console.log(\`Indexed \${this.index.size} MDN documents\`)
  }

  search(query, options = {}) {
    const {
      category = null,
      limit = 10,
      includeContent = false
    } = options

    const results = []
    const queryLower = query.toLowerCase()

    for (const [filename, doc] of this.index) {
      if (category && doc.category !== category) continue

      let score = 0
      
      // Title match (highest priority)
      if (doc.title.toLowerCase().includes(queryLower)) {
        score += 10
      }
      
      // Description match
      if (doc.description.toLowerCase().includes(queryLower)) {
        score += 5
      }
      
      // Tags match
      if (doc.tags.some(tag => tag.toLowerCase().includes(queryLower))) {
        score += 3
      }
      
      // Content match (if enabled)
      if (includeContent && doc.content.toLowerCase().includes(queryLower)) {
        score += 1
      }

      if (score > 0) {
        results.push({
          ...doc,
          score,
          filename
        })
      }
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
  }

  getByCategory(category) {
    return Array.from(this.index.values())
      .filter(doc => doc.category === category)
      .sort((a, b) => a.title.localeCompare(b.title))
  }

  getRelated(topic, limit = 5) {
    const doc = this.index.get(topic)
    if (!doc) return []

    return this.search(doc.title, { limit: limit + 1 })
      .filter(result => result.filename !== topic)
      .slice(0, limit)
  }
}
\`\`\`

### 2. API Integration

#### MDN API Wrapper
\`\`\`javascript
// MDN API Integration
class MDNAPI {
  constructor() {
    this.baseURL = 'https://developer.mozilla.org'
    this.apiURL = 'https://developer.mozilla.org/api/v1'
  }

  async search(query, options = {}) {
    const {
      locale = 'en-US',
      limit = 10,
      category = null
    } = options

    try {
      const params = new URLSearchParams({
        q: query,
        locale,
        limit: limit.toString()
      })

      if (category) {
        params.append('category', category)
      }

      const response = await fetch(\`\${this.apiURL}/search?\\\${params}\`)
      const data = await response.json()

      return data.documents || []
    } catch (error) {
      console.error('MDN API search failed:', error)
      return []
    }
  }

  async getDocument(slug, locale = 'en-US') {
    try {
      const response = await fetch(\`\${this.apiURL}/docs/\\\${locale}/\\\${slug}\`)
      const data = await response.json()

      return data
    } catch (error) {
      console.error('Failed to fetch MDN document:', error)
      return null
    }
  }

  async getCategories() {
    try {
      const response = await fetch(\`\${this.apiURL}/categories\`)
      const data = await response.json()

      return data
    } catch (error) {
      console.error('Failed to fetch MDN categories:', error)
      return []
    }
  }
}
\`\`\`

### 3. Learning Path Integration

#### Structured Learning Guide
\`\`\`javascript
// MDN Learning Path Integration
class MDNLearningPath {
  constructor(projectRoot = process.cwd()) {
    this.learnPath = path.join(projectRoot, 'agent', 'mdn-content', 'files', 'en-us', 'learn_web_development')
  }

  async getLearningPaths() {
    const paths = []
    const learnDir = await fs.readdir(this.learnPath)

    for (const item of learnDir) {
      const itemPath = path.join(this.learnPath, item)
      const stat = await fs.stat(itemPath)

      if (stat.isDirectory()) {
        const indexPath = path.join(itemPath, 'index.md')
        
        if (await fs.pathExists(indexPath)) {
          const content = await fs.readFile(indexPath, 'utf8')
          const parsed = this.parseMDNContent(content)
          
          paths.push({
            id: item,
            title: parsed.title,
            description: parsed.description,
            path: itemPath
          })
        }
      }
    }

    return paths
  }

  async getLearningPathContent(pathId) {
    const pathDir = path.join(this.learnPath, pathId)
    const content = []

    if (await fs.pathExists(pathDir)) {
      const files = await fs.readdir(pathDir)
      
      for (const file of files) {
        if (file.endsWith('.md') && file !== 'index.md') {
          const filePath = path.join(pathDir, file)
          const fileContent = await fs.readFile(filePath, 'utf8')
          const parsed = this.parseMDNContent(fileContent)
          
          content.push({
            filename: file,
            title: parsed.title,
            content: parsed.content,
            order: parsed.frontmatter.order || 0
          })
        }
      }
    }

    return content.sort((a, b) => a.order - b.order)
  }

  async getRecommendedPath(skillLevel, interests = []) {
    const paths = await this.getLearningPaths()
    
    // Simple recommendation logic based on skill level and interests
    const recommendations = paths.filter(path => {
      const title = path.title.toLowerCase()
      
      if (skillLevel === 'beginner') {
        return title.includes('getting started') || title.includes('beginner')
      } else if (skillLevel === 'intermediate') {
        return title.includes('intermediate') || title.includes('advanced')
      } else {
        return true
      }
    })

    return recommendations
  }
}
\`\`\`

---

## 🤖 AI Agent Integration

### 1. Context-Aware Documentation

#### Smart Content Selection
\`\`\`javascript
// AI Agent MDN Integration
class AIAgentMDNIntegration {
  constructor(projectRoot = process.cwd()) {
    this.reader = new MDNContentReader(projectRoot)
    this.searcher = new MDNContentSearcher(projectRoot)
    this.api = new MDNAPI()
    this.learningPath = new MDNLearningPath(projectRoot)
  }

  async initialize() {
    await this.searcher.buildIndex()
    console.log('MDN integration initialized')
  }

  async getRelevantDocs(context, query) {
    const contextMappings = {
      'html-element': ['html'],
      'css-property': ['css'],
      'javascript-method': ['javascript'],
      'web-api': ['api'],
      'accessibility': ['accessibility'],
      'performance': ['performance'],
      'security': ['security']
    }

    const relevantCategories = contextMappings[context] || ['html', 'css', 'javascript']
    const results = []

    for (const category of relevantCategories) {
      const categoryResults = await this.searcher.search(query, {
        category,
        limit: 3,
        includeContent: true
      })
      results.push(...categoryResults)
    }

    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
  }

  async getCodeExample(topic, language) {
    const results = await this.searcher.search(topic, {
      category: language,
      limit: 1,
      includeContent: true
    })

    if (results.length > 0) {
      const content = results[0].content
      const codeBlocks = this.extractCodeBlocks(content)
      
      return codeBlocks.length > 0 ? codeBlocks[0] : null
    }

    return null
  }

  extractCodeBlocks(content) {
    const blocks = []
    const codeBlockMarker = String.fromCharCode(96, 96, 96)
    const lines = content.split('\\n')
    let inCodeBlock = false
    let currentBlock = { code: '', language: 'text' }
    
    for (const line of lines) {
      if (line.startsWith(codeBlockMarker)) {
        if (inCodeBlock) {
          blocks.push(currentBlock)
          currentBlock = { code: '', language: 'text' }
          inCodeBlock = false
        } else {
          const language = line.slice(3).trim() || 'text'
          currentBlock.language = language
          inCodeBlock = true
        }
      } else if (inCodeBlock) {
        currentBlock.code += line + '\\n'
      }
    }
    
    return blocks
  }

  async getBestPractices(topic) {
    const results = await this.searcher.search(\`\${topic} best practices\`, {
      limit: 3,
      includeContent: true
    })

    return results.map(result => ({
      title: result.title,
      content: this.extractBestPractices(result.content),
      url: \`https://developer.mozilla.org/en-US/docs/\${result.category}/\${result.filename.replace('.md', '')}\`
    }))
  }

  extractBestPractices(content) {
    // Extract best practices from MDN content
    const practices = []
    const lines = content.split('\\n')

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      if (line.includes('best practice') || line.includes('recommendation') || line.includes('should')) {
        // Extract the practice and following context
        let practice = line
        let j = i + 1
        
        while (j < lines.length && (lines[j].startsWith('  ') || lines[j].startsWith('- '))) {
          practice += ' ' + lines[j].trim()
          j++
        }
        
        practices.push(practice.trim())
      }
    }

    return practices
  }

  async getLearningRecommendations(skillLevel, currentTopic) {
    const paths = await this.learningPath.getLearningPaths()
    const recommendations = []

    for (const path of paths) {
      const content = await this.learningPath.getLearningPathContent(path.id)
      
      if (content.some(item => 
        item.title.toLowerCase().includes(currentTopic.toLowerCase()) ||
        item.content.toLowerCase().includes(currentTopic.toLowerCase())
      )) {
        recommendations.push({
          path: path.title,
          description: path.description,
          relevance: 'high'
        })
      }
    }

    return recommendations
  }
}
\`\`\`

### 2. Integration with AI Instructions

#### MDN Integration in AI Instructions Template
\`\`\`markdown
## Documentation Reference

### MDN Web Docs Integration
This project uses MDN Web Docs for comprehensive web development reference:

- **Content Source**: Local MDN content repository (devdocs/mdn-content/)
- **Categories**: HTML, CSS, JavaScript, Web APIs, Accessibility, Performance, Security
- **Learning Paths**: Structured learning resources for web development
- **API Integration**: Live MDN API access for latest content

### Quick Reference Commands
- \`mdn search <query>\` - Search MDN content locally
- \`mdn get <topic>\` - Get specific MDN documentation
- \`mdn learn <path>\` - Access learning path content
- \`mdn examples <topic>\` - Get code examples from MDN

### Content Categories
- **HTML**: Element reference, attributes, semantic markup
- **CSS**: Properties, selectors, layouts, animations
- **JavaScript**: Language features, APIs, frameworks
- **Web APIs**: DOM, Fetch, Web Workers, WebRTC
- **Accessibility**: WCAG guidelines, ARIA, inclusive design
- **Performance**: Optimization, Core Web Vitals, monitoring
- **Security**: HTTPS, CSP, authentication, secure coding

### Learning Integration
\`\`\`javascript
// Access MDN content programmatically
const mdn = new AIAgentMDNIntegration()
await mdn.initialize()

// Get relevant documentation
const docs = await mdn.getRelevantDocs('css-property', 'flexbox')

// Get code examples
const example = await mdn.getCodeExample('array methods', 'javascript')

// Get best practices
const practices = await mdn.getBestPractices('responsive design')
\`\`\`
\`\`\`

---

## 📊 Content Management

### 1. Content Updates

#### Automated Content Sync
\`\`\`javascript
// MDN Content Sync
class MDNContentSync {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.mdnPath = path.join(projectRoot, 'agent', 'mdn-content')
  }

  async syncContent() {
    try {
      console.log('Syncing MDN content...')
      
      // Pull latest changes
      const { execSync } = require('child_process')
      execSync('git pull origin main', { cwd: this.mdnPath })
      
      console.log('MDN content synced successfully')
      return true
    } catch (error) {
      console.error('Failed to sync MDN content:', error.message)
      return false
    }
  }

  async getLastUpdate() {
    try {
      const { execSync } = require('child_process')
      const lastCommit = execSync('git log -1 --format=%ci', { 
        cwd: this.mdnPath,
        encoding: 'utf8'
      }).trim()
      
      return new Date(lastCommit)
    } catch (error) {
      console.error('Failed to get last update:', error.message)
      return null
    }
  }

  async getContentStats() {
    const stats = {
      totalFiles: 0,
      categories: {},
      lastUpdate: await this.getLastUpdate()
    }

    const webPath = path.join(this.mdnPath, 'files', 'en-us', 'web')
    
    if (await fs.pathExists(webPath)) {
      const categories = await fs.readdir(webPath)
      
      for (const category of categories) {
        const categoryPath = path.join(webPath, category)
        const stat = await fs.stat(categoryPath)
        
        if (stat.isDirectory()) {
          const files = await fs.readdir(categoryPath)
          const mdFiles = files.filter(file => file.endsWith('.md'))
          
          stats.categories[category] = mdFiles.length
          stats.totalFiles += mdFiles.length
        }
      }
    }

    return stats
  }
}
\`\`\`

### 2. Content Validation

#### MDN Content Validator
\`\`\`javascript
// MDN Content Validator
class MDNContentValidator {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.mdnPath = path.join(projectRoot, 'agent', 'mdn-content')
  }

  async validateContent() {
    const issues = []
    const webPath = path.join(this.mdnPath, 'files', 'en-us', 'web')
    
    if (await fs.pathExists(webPath)) {
      const categories = await fs.readdir(webPath)
      
      for (const category of categories) {
        const categoryPath = path.join(webPath, category)
        const stat = await fs.stat(categoryPath)
        
        if (stat.isDirectory()) {
          const files = await fs.readdir(categoryPath)
          
          for (const file of files) {
            if (file.endsWith('.md')) {
              const filePath = path.join(categoryPath, file)
              const fileIssues = await this.validateFile(filePath)
              issues.push(...fileIssues)
            }
          }
        }
      }
    }

    return issues
  }

  async validateFile(filePath) {
    const issues = []
    
    try {
      const content = await fs.readFile(filePath, 'utf8')
      
      // Check for required frontmatter
      if (!content.startsWith('---')) {
        issues.push({
          file: filePath,
          type: 'missing_frontmatter',
          message: 'File missing required frontmatter'
        })
      }
      
      // Check for broken links
      const linkRegex = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g
      let match
      
      while ((match = linkRegex.exec(content)) !== null) {
        const linkText = match[1]
        const linkUrl = match[2]
        
        if (linkUrl.startsWith('/') && !linkUrl.startsWith('//')) {
          // Internal link - check if target exists
          const targetPath = path.join(this.mdnPath, 'files', 'en-us', linkUrl)
          if (!await fs.pathExists(targetPath)) {
            issues.push({
              file: filePath,
              type: 'broken_link',
              message: \`Broken internal link: \${linkUrl}\`,
              linkText
            })
          }
        }
      }
      
      // Check for code blocks
      const codeBlockRegex = /```/g
      const codeBlocks = (content.match(codeBlockRegex) || []).length
      
      if (codeBlocks % 2 !== 0) {
        issues.push({
          file: filePath,
          type: 'unclosed_code_block',
          message: 'Unclosed code block detected'
        })
      }
      
    } catch (error) {
      issues.push({
        file: filePath,
        type: 'read_error',
        message: 'Failed to read file: ' + error.message
      })
    }

    return issues
  }

---

*This MDN Web Docs integration playbook provides AI agents with comprehensive strategies for leveraging the complete MDN content repository to enhance web development productivity and provide reliable, up-to-date documentation access. The integration supports both local content access and live API integration for the most current information.*
\`
  }

  /**
   * Generate agile development workflow playbook
   */
  generateAgilePlaybook() {
    return \`# Agile Development Workflow

*This playbook provides AI agents with agile development methodologies and practices for team-based software development.*

## 🎯 Agile Principles

### Core Values
1. **Individuals and Interactions** over processes and tools
2. **Working Software** over comprehensive documentation
3. **Customer Collaboration** over contract negotiation
4. **Responding to Change** over following a plan

### Key Practices
- **Sprint Planning**: 2-week development cycles
- **Daily Standups**: 15-minute team sync meetings
- **Sprint Reviews**: Demo completed work to stakeholders
- **Retrospectives**: Reflect on process improvements
- **User Stories**: Feature requirements from user perspective

## 📋 Sprint Workflow

### Sprint Planning (2 hours)
1. **Review Backlog**: Prioritize user stories
2. **Estimate Effort**: Story points or time estimates
3. **Select Stories**: Choose stories for current sprint
4. **Create Tasks**: Break down stories into tasks
5. **Assign Work**: Distribute tasks among team members

### Daily Standup (15 minutes)
1. **What did you do yesterday?**
2. **What will you do today?**
3. **Are there any blockers?**

### Sprint Review (1 hour)
1. **Demo Features**: Show completed work
2. **Gather Feedback**: Collect stakeholder input
3. **Update Backlog**: Refine future stories

### Sprint Retrospective (1 hour)
1. **What went well?**
2. **What could be improved?**
3. **Action items for next sprint**

## 📊 Agile Project Structure

\\\`\\\`\\\`
project/
├── 📁 docs/
│   ├── 📄 user-stories.md      # User story backlog
│   ├── 📄 sprint-planning.md   # Sprint planning notes
│   ├── 📄 retrospectives.md    # Retrospective notes
│   └── 📄 definition-of-done.md # Quality criteria
├── 📁 .github/
│   ├── 📁 workflows/
│   └── 📁 ISSUE_TEMPLATE/
└── 📁 src/                     # Development code
\\\`\\\`\\\`

## 🎫 User Story Format

### Template
\\\`\\\`\\\`
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
\\\`\\\`\\\`

### Example
\\\`\\\`\\\`
As a customer
I want to reset my password
So that I can regain access to my account

Acceptance Criteria:
- [ ] User can request password reset via email
- [ ] Reset link expires after 24 hours
- [ ] New password meets security requirements
- [ ] User receives confirmation email

Definition of Done:
- [ ] Code reviewed by 2 team members
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] API documentation updated
- [ ] Deployed to staging environment
\`
  }
}

  trackSearch(query, results) {
    if (!this.analytics.searches[query]) {
      this.analytics.searches[query] = {
        count: 0,
        results: 0,
        firstSearched: new Date().toISOString()
      }
    }
    
    this.analytics.searches[query].count++
    this.analytics.searches[query].results += results.length
    this.analytics.searches[query].lastSearched = new Date().toISOString()
    
    this.saveAnalytics()
  }

  trackView(filename, category) {
    if (!this.analytics.views[filename]) {
      this.analytics.views[filename] = {
        count: 0,
        category,
        firstViewed: new Date().toISOString()
      }
    }
    
    this.analytics.views[filename].count++
    this.analytics.views[filename].lastViewed = new Date().toISOString()
    
    this.saveAnalytics()
  }

  getPopularContent(limit = 10) {
    return Object.entries(this.analytics.views)
      .sort(([,a], [,b]) => b.count - a.count)
      .slice(0, limit)
      .map(([filename, data]) => ({
        filename,
        ...data
      }))
  }

  getSearchTrends(limit = 10) {
    return Object.entries(this.analytics.searches)
      .sort(([,a], [,b]) => b.count - a.count)
      .slice(0, limit)
      .map(([query, data]) => ({
        query,
        ...data
      }))
  }
}
\`\`\`

### 2. Content Recommendations

#### Smart Recommendations
\`\`\`javascript
// MDN Content Recommendations
class MDNContentRecommendations {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.searcher = new MDNContentSearcher(projectRoot)
    this.analytics = new MDNContentAnalytics(projectRoot)
  }

  async getRecommendations(context, currentTopic) {
    const recommendations = []
    
    // Get related content based on current topic
    const related = await this.searcher.getRelated(currentTopic, 3)
    recommendations.push(...related.map(item => ({
      ...item,
      reason: 'Related content',
      confidence: 0.8
    })))
    
    // Get popular content in the same category
    const popular = this.analytics.getPopularContent(5)
    const categoryPopular = popular.filter(item => 
      item.category === context.category
    )
    
    recommendations.push(...categoryPopular.map(item => ({
      ...item,
      reason: 'Popular in category',
      confidence: 0.6
    })))
    
    // Get trending searches
    const trending = this.analytics.getSearchTrends(3)
    for (const trend of trending) {
      const searchResults = await this.searcher.search(trend.query, { limit: 1 })
      if (searchResults.length > 0) {
        recommendations.push({
          ...searchResults[0],
          reason: 'Trending topic',
          confidence: 0.7
        })
      }
    }
    
    // Remove duplicates and sort by confidence
    const unique = new Map()
    for (const rec of recommendations) {
      if (!unique.has(rec.filename)) {
        unique.set(rec.filename, rec)
      }
    }
    
    return Array.from(unique.values())
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 5)
  }

  async getLearningPathRecommendations(skillLevel, interests) {
    const learningPath = new MDNLearningPath(this.projectRoot)
    const paths = await learningPath.getLearningPaths()
    
    const recommendations = []
    
    for (const path of paths) {
      let score = 0
      
      // Score based on skill level
      if (skillLevel === 'beginner' && path.title.toLowerCase().includes('beginner')) {
        score += 3
      } else if (skillLevel === 'intermediate' && path.title.toLowerCase().includes('intermediate')) {
        score += 3
      } else if (skillLevel === 'advanced' && path.title.toLowerCase().includes('advanced')) {
        score += 3
      }
      
      // Score based on interests
      for (const interest of interests) {
        if (path.title.toLowerCase().includes(interest.toLowerCase()) ||
            path.description.toLowerCase().includes(interest.toLowerCase())) {
          score += 2
        }
      }
      
      if (score > 0) {
        recommendations.push({
          ...path,
          score,
          reason: \`Matches \${skillLevel} level and interests\`
        })
      }
    }
    
    return recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  }
}
\`\`\`

---

## 🔍 Troubleshooting

### Common Issues

#### 1. Content Not Found
\`\`\`javascript
// Debug content search
async function debugMDNSearch(query) {
  const searcher = new MDNContentSearcher()
  await searcher.buildIndex()
  
  console.log('Searching for:', query)
  console.log('Index size:', searcher.index.size)
  
  const results = searcher.search(query, { includeContent: true })
  console.log('Results:', results.length)
  
  if (results.length === 0) {
    // Try fuzzy search
    const fuzzyResults = searcher.search(query.split(' ')[0], { includeContent: true })
    console.log('Fuzzy results:', fuzzyResults.length)
  }
  
  return results
}
\`\`\`

#### 2. Content Sync Issues
\`\`\`bash
# Check MDN content status
cd devdocs/mdn-content
git status
git log -1 --oneline

# Force sync
git fetch origin
git reset --hard origin/main
\`\`\`

#### 3. Performance Issues
\`\`\`javascript
// Optimize MDN content loading
class OptimizedMDNReader {
  constructor() {
    this.cache = new Map()
    this.cacheTimeout = 5 * 60 * 1000 // 5 minutes
  }

  async readContent(category, topic) {
    const cacheKey = \`\${category}/\${topic}\`
    const cached = this.cache.get(cacheKey)
    
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data
    }
    
    const data = await this.readContentFromFile(category, topic)
    
    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    })
    
    return data
  }
}
\`\`\`

---

## 📚 Best Practices

### 1. Content Usage

#### Effective Search Strategies
- Use specific technical terms for better results
- Search by category when possible
- Use multiple search terms for comprehensive results
- Check related content for additional context

#### Content Organization
- Group related documentation by topic
- Maintain local copies of frequently accessed content
- Regular content updates to stay current
- Index content for faster searching

### 2. Integration Best Practices

#### Performance Optimization
- Cache frequently accessed content
- Use lazy loading for large content sets
- Implement search debouncing
- Monitor content usage patterns

#### Error Handling
- Graceful fallbacks for missing content
- Clear error messages for users
- Retry mechanisms for API calls
- Offline content availability

---

## 🚀 Future Enhancements

### Planned Features
- **AI-Powered Content Summarization**: Automatic content summarization for quick reference
- **Interactive Code Examples**: Live, editable code examples from MDN content
- **Content Personalization**: Tailored content based on user preferences and history
- **Multi-language Support**: Access to MDN content in multiple languages
- **Content Versioning**: Track changes and updates to MDN content over time

### Integration Opportunities
- **IDE Extensions**: Direct integration with development environments
- **Browser Extensions**: Seamless browser integration for quick reference
- **API Enhancements**: More powerful programmatic access to MDN content
- **Learning Analytics**: Track learning progress and content consumption

---

*This MDN Web Docs integration playbook provides AI agents with comprehensive strategies for leveraging the complete MDN content repository to enhance web development productivity and provide reliable, up-to-date documentation access. The integration supports both local content access and live API integration for the most current information.*
`
  }

  /**
   * Generate agile development workflow playbook
   */
  generateAgilePlaybook() {
    return `# Agile Development Workflow

*This playbook provides AI agents with agile development methodologies and practices for team-based software development.*

## 🎯 Agile Principles

### Core Values
1. **Individuals and Interactions** over processes and tools
2. **Working Software** over comprehensive documentation
3. **Customer Collaboration** over contract negotiation
4. **Responding to Change** over following a plan

### Key Practices
- **Sprint Planning**: 2-week development cycles
- **Daily Standups**: 15-minute team sync meetings
- **Sprint Reviews**: Demo completed work to stakeholders
- **Retrospectives**: Reflect on process improvements
- **User Stories**: Feature requirements from user perspective

## 📋 Sprint Workflow

### Sprint Planning (2 hours)
1. **Review Backlog**: Prioritize user stories
2. **Estimate Effort**: Story points or time estimates
3. **Select Stories**: Choose stories for current sprint
4. **Create Tasks**: Break down stories into tasks
5. **Assign Work**: Distribute tasks among team members

### Daily Standup (15 minutes)
1. **What did you do yesterday?**
2. **What will you do today?**
3. **Are there any blockers?**

### Sprint Review (1 hour)
1. **Demo Features**: Show completed work
2. **Gather Feedback**: Collect stakeholder input
3. **Update Backlog**: Refine future stories

### Sprint Retrospective (1 hour)
1. **What went well?**
2. **What could be improved?**
3. **Action items for next sprint**

## 📊 Agile Project Structure

\`\`\`
project/
├── 📁 docs/
│   ├── 📄 user-stories.md      # User story backlog
│   ├── 📄 sprint-planning.md   # Sprint planning notes
│   ├── 📄 retrospectives.md    # Retrospective notes
│   └── 📄 definition-of-done.md # Quality criteria
├── 📁 .github/
│   ├── 📁 workflows/
│   └── 📁 ISSUE_TEMPLATE/
└── 📁 src/                     # Development code
\`\`\`

## 🎫 User Story Format

### Template
\`\`\`
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
\`\`\`

### Example
\`\`\`
As a customer
I want to reset my password
So that I can regain access to my account

Acceptance Criteria:
- [ ] User can request password reset via email
- [ ] Reset link expires after 24 hours
- [ ] New password meets security requirements
- [ ] User receives confirmation email

Definition of Done:
- [ ] Code reviewed by 2 team members
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing
- [ ] API documentation updated
- [ ] Deployed to staging environment
`
  }
}
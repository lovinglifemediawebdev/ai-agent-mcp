#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ErrorHandler, FileSystemError } = require('./error-handler.js')
const { AIPlaybookReader } = require('./ai-playbook-reader.js')

/**
 * Template Manager
 * Manages sophisticated project templates for the AI Agent system
 */

class TemplateManager {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.templatesDir = path.join(__dirname, 'templates')
    this.playbookReader = new AIPlaybookReader(projectRoot)
  }

  /**
   * Get all available project templates
   */
  getAvailableTemplates() {
    return {
      'web-app': {
        name: 'Web Application',
        description: 'Modern web applications (React, Vue, Angular, etc.)',
        category: 'frontend',
        complexity: 'medium',
        features: ['responsive', 'modern-ui', 'performance', 'seo']
      },
      'api': {
        name: 'API Service',
        description: 'Backend API services (Node.js, Express, FastAPI, etc.)',
        category: 'backend',
        complexity: 'medium',
        features: ['restful', 'authentication', 'documentation', 'testing']
      },
      'mobile-app': {
        name: 'Mobile Application',
        description: 'Cross-platform mobile apps (React Native, Flutter, etc.)',
        category: 'mobile',
        complexity: 'high',
        features: ['cross-platform', 'offline', 'push-notifications', 'native']
      },
      'desktop-app': {
        name: 'Desktop Application',
        description: 'Desktop applications (Electron, Tauri, etc.)',
        category: 'desktop',
        complexity: 'high',
        features: ['native-features', 'auto-updater', 'system-integration']
      },
      'library': {
        name: 'Library/Package',
        description: 'Reusable libraries and packages (NPM, PyPI, etc.)',
        category: 'library',
        complexity: 'low',
        features: ['documentation', 'testing', 'versioning', 'distribution']
      },
      'fullstack': {
        name: 'Full-Stack Application',
        description: 'Complete full-stack applications',
        category: 'fullstack',
        complexity: 'high',
        features: ['frontend', 'backend', 'database', 'deployment']
      },
      'microservice': {
        name: 'Microservice',
        description: 'Small, focused microservices',
        category: 'backend',
        complexity: 'medium',
        features: ['scalable', 'containerized', 'api-gateway', 'monitoring']
      },
      'cli-tool': {
        name: 'CLI Tool',
        description: 'Command-line tools and utilities',
        category: 'tool',
        complexity: 'low',
        features: ['command-line', 'help-system', 'configuration', 'logging']
      },
      'data-science': {
        name: 'Data Science Project',
        description: 'Data analysis and machine learning projects',
        category: 'data',
        complexity: 'high',
        features: ['jupyter', 'data-analysis', 'visualization', 'ml-models']
      },
      'blockchain': {
        name: 'Blockchain Project',
        description: 'Blockchain and Web3 applications',
        category: 'blockchain',
        complexity: 'high',
        features: ['smart-contracts', 'web3', 'decentralized', 'crypto']
      }
    }
  }

  /**
   * Get detailed template for a specific project type
   */
  getTemplate(projectType) {
    const templates = this.getTemplateDefinitions()
    return templates[projectType] || templates['web-app']
  }

  /**
   * Get comprehensive template definitions
   */
  getTemplateDefinitions() {
    return {
      'web-app': {
        projectOverview: 'This web application provides a modern, responsive user interface with cutting-edge features and optimal performance.',
        businessContext: {
          primaryGoal: 'Deliver an exceptional user experience through intuitive design and fast performance',
          targetUsers: 'End users accessing the application through web browsers',
          successMetrics: ['User engagement', 'Page load times', 'Conversion rates', 'User satisfaction']
        },
        technicalStack: [
          'React 18+ with TypeScript for type-safe development',
          'Next.js 14+ with App Router for optimal performance',
          'Tailwind CSS for responsive, utility-first styling',
          'Vercel for deployment and edge functions',
          'Supabase for backend services and database'
        ],
        keyFeatures: [
          'Responsive Design - Works seamlessly across all device sizes',
          'Modern UI/UX - Clean, intuitive interface following design best practices',
          'Performance Optimized - Fast loading times and smooth interactions',
          'SEO Friendly - Optimized for search engine visibility',
          'Accessibility Compliant - WCAG 2.1 AA standards compliance'
        ],
        projectStructure: {
          'src/': 'Source code organized by feature',
          'src/components/': 'Reusable UI components',
          'src/pages/': 'Application pages and routes',
          'src/hooks/': 'Custom React hooks',
          'src/utils/': 'Utility functions and helpers',
          'src/styles/': 'Global styles and themes',
          'public/': 'Static assets and public files',
          'tests/': 'Unit and integration tests'
        },
        developmentWorkflow: [
          'Feature branch development with Git flow',
          'Automated testing on pull requests',
          'Preview deployments for each branch',
          'Code review process with quality gates',
          'Continuous integration and deployment'
        ],
        deploymentStrategy: {
          staging: 'Automated deployment to staging environment',
          production: 'Manual deployment with approval process',
          monitoring: 'Real-time performance and error monitoring',
          rollback: 'Quick rollback capability for issues'
        }
      },
      'api': {
        projectOverview: 'This API service provides robust, scalable backend functionality with comprehensive documentation and security.',
        businessContext: {
          primaryGoal: 'Provide reliable, secure, and well-documented API endpoints',
          targetUsers: 'Frontend applications, mobile apps, and third-party integrations',
          successMetrics: ['API uptime', 'Response times', 'Error rates', 'Developer adoption']
        },
        technicalStack: [
          'Node.js with Express.js for the web framework',
          'TypeScript for type safety and better development experience',
          'PostgreSQL with Prisma ORM for database management',
          'JWT for authentication and authorization',
          'Docker for containerization and deployment'
        ],
        keyFeatures: [
          'RESTful API Design - Consistent, intuitive endpoint structure',
          'Authentication & Authorization - Secure user management',
          'Rate Limiting - Protection against abuse and DDoS',
          'API Documentation - Comprehensive Swagger/OpenAPI docs',
          'Error Handling - Graceful error responses with proper codes'
        ],
        projectStructure: {
          'src/': 'Source code organized by domain',
          'src/controllers/': 'Request handlers and business logic',
          'src/models/': 'Data models and database schemas',
          'src/routes/': 'API route definitions',
          'src/middleware/': 'Custom middleware functions',
          'src/services/': 'Business logic and external integrations',
          'src/utils/': 'Utility functions and helpers',
          'tests/': 'Unit, integration, and API tests'
        },
        apiDesign: {
          versioning: 'API versioning strategy (v1, v2)',
          authentication: 'JWT-based authentication with refresh tokens',
          validation: 'Request/response validation with schemas',
          documentation: 'Auto-generated API documentation',
          testing: 'Comprehensive test suite with 90%+ coverage'
        },
        securityFeatures: [
          'Input validation and sanitization',
          'SQL injection prevention',
          'CORS configuration',
          'Rate limiting and throttling',
          'Security headers and HTTPS enforcement'
        ]
      },
      'mobile-app': {
        projectOverview: 'This mobile application delivers a native-like experience across iOS and Android platforms with offline capabilities.',
        businessContext: {
          primaryGoal: 'Provide a seamless mobile experience with offline functionality',
          targetUsers: 'Mobile users on iOS and Android devices',
          successMetrics: ['App store ratings', 'User retention', 'Crash-free sessions', 'Feature adoption']
        },
        technicalStack: [
          'React Native with TypeScript for cross-platform development',
          'Expo for development tooling and deployment',
          'Redux Toolkit for state management',
          'React Navigation for screen navigation',
          'AsyncStorage for local data persistence'
        ],
        keyFeatures: [
          'Cross-Platform - Single codebase for iOS and Android',
          'Offline Support - Core functionality works without internet',
          'Push Notifications - Real-time user engagement',
          'Native Performance - Optimized for smooth user experience',
          'Biometric Authentication - Secure and convenient access'
        ],
        projectStructure: {
          'src/': 'Source code organized by feature',
          'src/components/': 'Reusable UI components',
          'src/screens/': 'Application screens and navigation',
          'src/store/': 'Redux store and state management',
          'src/services/': 'API calls and external services',
          'src/utils/': 'Utility functions and helpers',
          'assets/': 'Images, fonts, and static assets',
          'tests/': 'Unit and integration tests'
        },
        mobileFeatures: [
          'Camera integration for photo capture',
          'Geolocation services for location-based features',
          'Push notification handling',
          'Deep linking for seamless navigation',
          'Background sync for offline data'
        ],
        deploymentStrategy: {
          testing: 'TestFlight (iOS) and Internal Testing (Android)',
          production: 'App Store and Google Play Store',
          updates: 'Over-the-air updates for non-native changes',
          monitoring: 'Crash reporting and analytics integration'
        }
      },
      'library': {
        projectOverview: 'This library provides reusable functionality with comprehensive documentation, testing, and versioning.',
        businessContext: {
          primaryGoal: 'Create a reliable, well-documented library for other developers',
          targetUsers: 'Developers integrating this library into their projects',
          successMetrics: ['Download counts', 'GitHub stars', 'Issue resolution time', 'Community contributions']
        },
        technicalStack: [
          'TypeScript for type safety and IntelliSense',
          'Rollup for optimized bundling',
          'Jest for comprehensive testing',
          'ESLint and Prettier for code quality',
          'Semantic Release for automated versioning'
        ],
        keyFeatures: [
          'TypeScript Support - Full type definitions and IntelliSense',
          'Tree Shaking - Optimized bundle sizes',
          'Comprehensive Testing - 100% test coverage',
          'Documentation - Detailed API docs with examples',
          'Version Management - Semantic versioning with changelog'
        ],
        projectStructure: {
          'src/': 'Source code with main library logic',
          'lib/': 'Compiled JavaScript output',
          'types/': 'TypeScript type definitions',
          'tests/': 'Unit tests and test utilities',
          'docs/': 'Documentation and examples',
          'examples/': 'Usage examples and demos'
        },
        developmentWorkflow: [
          'Feature development with comprehensive tests',
          'Documentation updates with code changes',
          'Automated testing and linting',
          'Semantic versioning and changelog generation',
          'NPM package publishing and distribution'
        ],
        qualityAssurance: [
          '100% TypeScript coverage',
          'Comprehensive unit test suite',
          'Integration tests with real-world scenarios',
          'Performance benchmarking',
          'Bundle size optimization'
        ]
      },
      'fullstack': {
        projectOverview: 'This full-stack application provides a complete solution with frontend, backend, and database integration.',
        businessContext: {
          primaryGoal: 'Deliver a complete application solution with seamless integration',
          targetUsers: 'End users with comprehensive feature set',
          successMetrics: ['User engagement', 'System performance', 'Feature adoption', 'Business metrics']
        },
        technicalStack: [
          'Next.js 14+ with App Router for full-stack React',
          'Prisma ORM with PostgreSQL for database management',
          'NextAuth.js for authentication and session management',
          'Tailwind CSS for responsive styling',
          'Vercel for deployment and serverless functions'
        ],
        keyFeatures: [
          'Full-Stack Integration - Seamless frontend and backend communication',
          'Real-time Features - Live updates and notifications',
          'User Management - Complete authentication and authorization',
          'Data Persistence - Robust database with relationships',
          'Admin Dashboard - Comprehensive management interface'
        ],
        projectStructure: {
          'app/': 'Next.js App Router pages and layouts',
          'components/': 'Reusable UI components',
          'lib/': 'Utility functions and configurations',
          'prisma/': 'Database schema and migrations',
          'public/': 'Static assets and uploads',
          'styles/': 'Global styles and themes'
        },
        architecture: {
          frontend: 'Server-side rendered React with client-side interactivity',
          backend: 'API routes with middleware and authentication',
          database: 'PostgreSQL with Prisma ORM and migrations',
          deployment: 'Vercel with automatic deployments and previews'
        },
        features: [
          'User authentication and profile management',
          'Real-time notifications and updates',
          'File upload and media management',
          'Search and filtering capabilities',
          'Admin panel for content management'
        ]
      },
      'microservice': {
        projectOverview: 'This microservice provides focused functionality as part of a larger distributed system.',
        businessContext: {
          primaryGoal: 'Deliver specific business functionality with high reliability',
          targetUsers: 'Other services in the microservices architecture',
          successMetrics: ['Service uptime', 'Response times', 'Error rates', 'Throughput']
        },
        technicalStack: [
          'Node.js with Express.js for the service framework',
          'Docker for containerization and deployment',
          'Kubernetes for orchestration and scaling',
          'Prometheus for metrics collection',
          'Grafana for monitoring and alerting'
        ],
        keyFeatures: [
          'Containerized Deployment - Docker containers for consistency',
          'Horizontal Scaling - Kubernetes orchestration',
          'Health Monitoring - Comprehensive health checks',
          'API Gateway Integration - Seamless service communication',
          'Circuit Breaker Pattern - Fault tolerance and resilience'
        ],
        projectStructure: {
          'src/': 'Source code organized by domain',
          'src/controllers/': 'Request handlers and business logic',
          'src/services/': 'Core business logic',
          'src/repositories/': 'Data access layer',
          'src/middleware/': 'Cross-cutting concerns',
          'docker/': 'Docker configuration and scripts',
          'k8s/': 'Kubernetes manifests and configurations'
        },
        microserviceFeatures: [
          'Service discovery and registration',
          'Distributed tracing and logging',
          'Health check endpoints',
          'Graceful shutdown handling',
          'Configuration management'
        ],
        deploymentStrategy: {
          development: 'Local Docker Compose setup',
          staging: 'Kubernetes cluster with staging data',
          production: 'Multi-region Kubernetes deployment',
          monitoring: 'Comprehensive observability stack'
        }
      },
      'cli-tool': {
        projectOverview: 'This CLI tool provides powerful command-line functionality with intuitive user experience.',
        businessContext: {
          primaryGoal: 'Simplify complex workflows through command-line interface',
          targetUsers: 'Developers and system administrators',
          successMetrics: ['Tool adoption', 'User satisfaction', 'Issue resolution', 'Community contributions']
        },
        technicalStack: [
          'Node.js with TypeScript for cross-platform compatibility',
          'Commander.js for command-line argument parsing',
          'Inquirer.js for interactive prompts',
          'Chalk for colorful terminal output',
          'Oclif for advanced CLI framework features'
        ],
        keyFeatures: [
          'Interactive Commands - User-friendly prompts and confirmations',
          'Configuration Management - Persistent settings and preferences',
          'Help System - Comprehensive documentation and examples',
          'Plugin Architecture - Extensible functionality',
          'Cross-Platform - Works on Windows, macOS, and Linux'
        ],
        projectStructure: {
          'src/': 'Source code organized by commands',
          'src/commands/': 'Individual CLI commands',
          'src/utils/': 'Shared utility functions',
          'src/config/': 'Configuration management',
          'bin/': 'Executable entry points',
          'docs/': 'Documentation and help files'
        },
        cliFeatures: [
          'Interactive command execution',
          'Configuration file management',
          'Progress indicators and spinners',
          'Error handling with helpful messages',
          'Plugin system for extensions'
        ],
        distributionStrategy: {
          npm: 'NPM package for easy installation',
          homebrew: 'Homebrew formula for macOS users',
          chocolatey: 'Chocolatey package for Windows',
          direct: 'Direct binary downloads for all platforms'
        }
      },
      'data-science': {
        projectOverview: 'This data science project provides comprehensive analysis capabilities with machine learning integration.',
        businessContext: {
          primaryGoal: 'Extract insights from data through analysis and machine learning',
          targetUsers: 'Data scientists, analysts, and business stakeholders',
          successMetrics: ['Model accuracy', 'Analysis insights', 'Processing time', 'User adoption']
        },
        technicalStack: [
          'Python with Jupyter Notebooks for interactive analysis',
          'Pandas and NumPy for data manipulation',
          'Scikit-learn for machine learning',
          'Matplotlib and Seaborn for visualization',
          'FastAPI for model serving and API endpoints'
        ],
        keyFeatures: [
          'Interactive Analysis - Jupyter notebooks for exploration',
          'Machine Learning Pipeline - End-to-end ML workflows',
          'Data Visualization - Comprehensive charts and graphs',
          'Model Serving - API endpoints for model inference',
          'Reproducible Research - Version control for notebooks'
        ],
        projectStructure: {
          'notebooks/': 'Jupyter notebooks for analysis',
          'src/': 'Python source code and modules',
          'data/': 'Raw and processed datasets',
          'models/': 'Trained machine learning models',
          'reports/': 'Generated reports and visualizations',
          'tests/': 'Unit tests for data processing'
        },
        dataScienceFeatures: [
          'Data preprocessing and cleaning',
          'Exploratory data analysis',
          'Feature engineering and selection',
          'Model training and evaluation',
          'Hyperparameter optimization'
        ],
        workflow: [
          'Data collection and validation',
          'Exploratory data analysis',
          'Feature engineering and preprocessing',
          'Model development and training',
          'Model evaluation and deployment'
        ]
      },
      'blockchain': {
        projectOverview: 'This blockchain project leverages Web3 technologies for decentralized applications.',
        businessContext: {
          primaryGoal: 'Build secure, decentralized applications on blockchain',
          targetUsers: 'Web3 users and decentralized application users',
          successMetrics: ['Transaction volume', 'User adoption', 'Smart contract interactions', 'Network fees']
        },
        technicalStack: [
          'Solidity for smart contract development',
          'Hardhat for development environment',
          'React with Web3.js for frontend',
          'MetaMask for wallet integration',
          'IPFS for decentralized storage'
        ],
        keyFeatures: [
          'Smart Contracts - Secure, audited contract code',
          'Web3 Integration - Seamless blockchain interaction',
          'Wallet Connectivity - MetaMask and wallet integration',
          'Decentralized Storage - IPFS for file storage',
          'Gas Optimization - Efficient transaction handling'
        ],
        projectStructure: {
          'contracts/': 'Solidity smart contracts',
          'scripts/': 'Deployment and utility scripts',
          'test/': 'Smart contract tests',
          'frontend/': 'React Web3 frontend application',
          'hardhat.config.js': 'Hardhat configuration'
        },
        blockchainFeatures: [
          'Smart contract deployment and management',
          'Token creation and management',
          'NFT marketplace functionality',
          'DeFi protocol integration',
          'Governance token mechanics'
        ],
        developmentWorkflow: [
          'Smart contract development and testing',
          'Frontend development with Web3 integration',
          'Local blockchain testing with Hardhat',
          'Testnet deployment and validation',
          'Mainnet deployment and monitoring'
        ]
      }
    }
  }

  /**
   * Generate AI Instructions template for a project type
   */
  generateAIInstructionsTemplate(projectType, projectInfo) {
    const template = this.getTemplate(projectType)
    
    return `# ${projectInfo.name} - AI Instructions

## Project Overview

${template.projectOverview}

### Business Context
- **Project**: ${projectInfo.name}
- **Type**: ${projectType}
- **Primary Goal**: ${template.businessContext.primaryGoal}
- **Target Users**: ${template.businessContext.targetUsers}
- **Success Metrics**: ${template.businessContext.successMetrics.join(', ')}

## Technical Architecture

### Framework & Stack
${template.technicalStack.map(tech => `- **${tech}**`).join('\n')}

### Key Features
${template.keyFeatures.map(feature => `1. **${feature}**`).join('\n')}

## Project Structure

\`\`\`
${projectInfo.name}/
${Object.entries(template.projectStructure).map(([path, desc]) => `├── ${path.padEnd(20)} # ${desc}`).join('\n')}
\`\`\`

## Development Guidelines

### Code Standards
- Follow TypeScript best practices for type safety
- Maintain consistent code formatting with Prettier
- Write comprehensive tests for all functionality
- Document complex logic and business rules
- Follow semantic versioning for releases

### Performance Considerations
- Optimize for fast loading times and smooth interactions
- Implement proper caching strategies
- Monitor and optimize database queries
- Use lazy loading for non-critical resources
- Implement proper error boundaries

### Security Best Practices
- Validate all user inputs and sanitize data
- Implement proper authentication and authorization
- Use HTTPS and secure headers
- Keep dependencies updated and secure
- Follow OWASP security guidelines

## Recent Changes & Updates

*This section should be updated after each modification to track project evolution*

### Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

**Recent Modifications:**
- [No recent changes documented]

**Current Status:**
- Project status not updated

**Next Planned Improvements:**
- [No planned improvements documented]

## AI Agent Instructions

When working on this project:

1. **Maintain Consistency** - Follow established patterns and conventions
2. **Update Documentation** - Always update this file after making changes
3. **Test Thoroughly** - Ensure all functionality works as expected
4. **Follow Best Practices** - Adhere to ${projectType} development standards
5. **Consider Performance** - Optimize for speed and efficiency
6. **Preserve User Experience** - Maintain intuitive and accessible interfaces
7. **Keep Dependencies Current** - Use latest stable versions when possible

## Update System

### 🤖 AI Agent Auto-Update (Recommended)
AI agents should automatically update this file when making changes:

\`\`\`javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')
await updateAIInstructions(
  ["Your changes here"], 
  "Current project status", 
  ["Next improvements"]
)
\`\`\`

### Manual Update Options

#### Interactive Menu
\`\`\`bash
npm run ai-menu
\`\`\`

#### Direct Commands
\`\`\`bash
npm run view-changes    # View recent changes
npm run view-status     # View current status
npm run ai-update       # Update documentation
\`\`\`

## Contact & Support

For questions about this project, refer to the project documentation and maintain alignment with the project goals.
`
  }

  /**
   * Generate Changelog template for a project type
   */
  generateChangelogTemplate(projectType, projectInfo) {
    const template = this.getTemplate(projectType)
    
    return `# ${projectInfo.name} - Changelog

## Recent Changes & Updates

*This changelog provides a user-friendly view of all project changes and updates.*

### Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

**Recent Modifications:**
- [No recent changes documented]

**Current Status:**
- Project status not updated

**Next Planned Improvements:**
- [No planned improvements documented]

---

## Project Overview

${template.projectOverview}

### Business Goals
- **Primary Goal**: ${template.businessContext.primaryGoal}
- **Target Users**: ${template.businessContext.targetUsers}
- **Success Metrics**: ${template.businessContext.successMetrics.join(', ')}

### Technical Stack
${template.technicalStack.map(tech => `- ${tech}`).join('\n')}

### Key Features
${template.keyFeatures.map(feature => `- ${feature}`).join('\n')}

---

## Development Information

### Project Structure
${Object.entries(template.projectStructure).map(([path, desc]) => `- **${path}**: ${desc}`).join('\n')}

### Development Workflow
${template.developmentWorkflow ? template.developmentWorkflow.map(step => `- ${step}`).join('\n') : 'Standard development workflow with version control and testing'}

---

## How to View Changes

### 1. This Changelog (Recommended)
- **File:** \`CHANGELOG.md\`
- **Purpose:** User-friendly summary of all changes
- **Updated:** Automatically when AI agents make changes

### 2. AI Instructions (Technical)
- **File:** \`AI_INSTRUCTIONS.md\`
- **Purpose:** Detailed technical documentation for AI agents
- **Updated:** Automatically by AI agents

### 3. Interactive Menu
- **Command:** \`npm run ai-menu\`
- **Purpose:** Interactive interface to view and update changes

---

## Quick Commands

### View Current Status
\`\`\`bash
npm run view-status
\`\`\`

### View Recent Changes
\`\`\`bash
npm run view-changes
\`\`\`

### Update Documentation
\`\`\`bash
npm run ai-menu
\`\`\`

---

## What Gets Updated

When AI agents make changes, these files are automatically updated:
- ✅ \`CHANGELOG.md\` - User-friendly changes (this file)
- ✅ \`AI_INSTRUCTIONS.md\` - Technical documentation
- ✅ Project status and next improvements
- ✅ Timestamps and change tracking

---

## Contact & Support

For questions about this project, refer to the project documentation and maintain alignment with the project goals.
`
  }

  /**
   * Get development playbook information
   */
  async getPlaybookInfo(playbookName = 'standard') {
    try {
      return await this.playbookReader.parsePlaybook(playbookName)
    } catch (error) {
      throw new FileSystemError(`Failed to get playbook info: ${error.message}`, playbookName, 'playbook')
    }
  }

  /**
   * Get quick reference for AI agents
   */
  async getQuickReference(playbookName = 'standard') {
    try {
      return await this.playbookReader.getQuickReference(playbookName)
    } catch (error) {
      throw new FileSystemError(`Failed to get quick reference: ${error.message}`, playbookName, 'quickref')
    }
  }

  /**
   * Search playbook content
   */
  async searchPlaybook(playbookName, searchTerm) {
    try {
      return await this.playbookReader.searchPlaybook(playbookName, searchTerm)
    } catch (error) {
      throw new FileSystemError(`Failed to search playbook: ${error.message}`, playbookName, 'search')
    }
  }

  /**
   * Generate enhanced AI instructions with playbook integration
   */
  async generateEnhancedAIInstructions(projectType, projectInfo, playbookName = 'standard') {
    const template = this.getTemplate(projectType)
    const playbookInfo = await this.getPlaybookInfo(playbookName)
    
    // Check if this is a frontend project and we have frontend playbook info
    const isFrontendProject = ['web-app', 'frontend-focused'].includes(projectType)
    const isFullstackProject = ['web-app', 'fullstack'].includes(projectType)
    const frontendInfo = playbookInfo.projectStructure?.frontendStructure
    const fullstackInfo = playbookInfo.projectStructure?.fullstackStructure
    
    return `# ${projectInfo.name} - AI Instructions

## Project Overview

${template.projectOverview}

### Business Context
- **Project**: ${projectInfo.name}
- **Type**: ${projectType}
- **Primary Goal**: ${template.businessContext.primaryGoal}
- **Target Users**: ${template.businessContext.targetUsers}
- **Success Metrics**: ${template.businessContext.successMetrics.join(', ')}

## Technical Architecture

### Framework & Stack
${template.technicalStack.map(tech => `- **${tech}**`).join('\n')}

### Key Features
${template.keyFeatures.map(feature => `1. **${feature}**`).join('\n')}

## Project Structure

\`\`\`
${projectInfo.name}/
${Object.entries(template.projectStructure).map(([path, desc]) => `├── ${path.padEnd(20)} # ${desc}`).join('\n')}
\`\`\`

## Development Workflow Reference

*This section references the development playbook for standardized workflows.*

### Standard Project Structure
${playbookInfo.projectStructure?.directoryLayout || 'Refer to development playbook for standard structure'}

### File Naming Conventions
${playbookInfo.projectStructure?.fileNamingConventions ? 
  Object.entries(playbookInfo.projectStructure.fileNamingConventions)
    .map(([type, convention]) => `- **${type}**: ${convention}`)
    .join('\n') : 'Refer to development playbook for naming conventions'}

### Development Process
${playbookInfo.workflows?.developmentProcess ? 
  playbookInfo.workflows.developmentProcess.map(step => `- ${step}`).join('\n') : 'Refer to development playbook for development process'}

${isFrontendProject && frontendInfo ? `
## Frontend Development Guidelines

*Based on Springer Nature Frontend Playbook - Production-tested best practices*

### Accessibility Standards
- **WCAG Level**: ${frontendInfo.accessibility?.wcagLevel || 'WCAG 2.1 AA'}
- **Key Principles**:
${frontendInfo.accessibility?.keyPrinciples?.map(principle => `  - ${principle}`).join('\n') || '  - Use correct HTML elements\n  - Provide text alternatives for images\n  - Ensure adequate color contrast\n  - Make content keyboard accessible'}
- **Testing Tools**: ${frontendInfo.accessibility?.tools?.join(', ') || 'pa11y, WAVE, axe-core, Lighthouse'}

### Performance Optimization
- **Key Metrics**: ${frontendInfo.performance?.keyMetrics?.join(', ') || 'Core Web Vitals, Page load time, Time to interactive'}
- **Optimization Areas**:
${frontendInfo.performance?.optimizationAreas?.map(area => `  - ${area}`).join('\n') || '  - HTTP requests reduction\n  - Page weight optimization\n  - Render blocking resources\n  - Critical rendering path\n  - Image optimization'}
- **Testing Tools**: ${frontendInfo.performance?.tools?.join(', ') || 'Lighthouse, WebPageTest, SpeedCurve, Chrome DevTools'}

### CSS Best Practices
- **Methodology**: ${frontendInfo.css?.methodology || 'BEM (Block Element Modifier)'}
- **Preprocessor**: ${frontendInfo.css?.preprocessor || 'Sass'}
- **Organization**: ${frontendInfo.css?.organization || 'Component-led approach'}
- **Best Practices**:
${frontendInfo.css?.bestPractices?.map(practice => `  - ${practice}`).join('\n') || '  - Use semantic class names\n  - Follow BEM naming convention\n  - Organize by components\n  - Use CSS custom properties\n  - Implement progressive enhancement'}

### JavaScript Standards
- **Standards**:
${frontendInfo.javascript?.standards?.map(standard => `  - ${standard}`).join('\n') || '  - Use modern ES6+ features\n  - Follow consistent naming conventions\n  - Implement progressive enhancement\n  - Write accessible JavaScript\n  - Use feature detection'}
- **Tools**: ${frontendInfo.javascript?.tools?.join(', ') || 'ESLint, Prettier, Babel, Webpack'}

### Development Practices
- **Code Review Process**: ${frontendInfo.practices?.codeReview?.process || 'Pull request based reviews'}
- **Review Focus**: ${frontendInfo.practices?.codeReview?.focus?.join(', ') || 'Accessibility, Performance, Security, Code quality'}
- **Progressive Enhancement**: ${frontendInfo.practices?.progressiveEnhancement?.principle || 'Start with semantic HTML, enhance with CSS and JavaScript'}
- **Browser Support**: ${frontendInfo.practices?.browserSupport?.approach || 'Graded browser support'}

` : ''}

${isFullstackProject && fullstackInfo ? `
## Full-Stack Development Guidelines

*Based on GPT-5 Research - Comprehensive React, Next.js, Supabase, and AI-assisted development*

### Tech Stack & Architecture
- **Frontend**: ${fullstackInfo.techStack?.frontend?.join(', ') || 'Next.js, React, TypeScript'}
- **Backend**: ${fullstackInfo.techStack?.backend?.join(', ') || 'Supabase, PostgreSQL'}
- **IDE & AI**: ${fullstackInfo.techStack?.ide?.join(', ') || 'Cursor, AI Pair Programming'}
- **UI & Styling**: ${fullstackInfo.techStack?.ui?.join(', ') || 'Tailwind CSS, Component Kits'}
- **Forms & Validation**: ${fullstackInfo.techStack?.forms?.join(', ') || 'React Hook Form, Zod'}
- **Testing**: ${fullstackInfo.techStack?.testing?.join(', ') || 'Jest, Vitest, React Testing Library, Playwright, Cypress'}

### Development Phases
${fullstackInfo.planning ? `
#### 1. Planning Phase
- **Goals & Scope**: ${fullstackInfo.planning.goalsAndScope?.projectTypes?.join(', ') || 'lead-gen site, full app'}
- **Architecture**: ${fullstackInfo.planning.architectureStrategy?.approach || 'Monolith with Next.js first, add services when necessary'}
- **Tech Stack**: ${fullstackInfo.planning.techStackDecisions?.frontend || 'Next.js with React and TypeScript'}
` : ''}

${fullstackInfo.scaffolding ? `
#### 2. Scaffolding Phase
- **Project Init**: ${fullstackInfo.scaffolding.projectInit?.command || 'npx create-next-app@latest my-app --ts'}
- **Structure**: ${fullstackInfo.scaffolding.suggestedStructure?.app || 'Next.js App Router routes'}
- **Supabase**: ${fullstackInfo.scaffolding.supabaseIntegration?.setup || 'Create Supabase project, note URL and anon key'}
` : ''}

${fullstackInfo.development ? `
#### 3. Development Phase
- **Feature Cycle**: ${fullstackInfo.development.featureCycle?.join('\n  - ') || 'Draft UI, implement data access, wire forms, add tests, ship with feature flags'}
- **Next.js Patterns**: ${fullstackInfo.development.nextjsPatterns?.apiRoutes || 'server code for form processing, webhooks, admin tasks'}
- **State Management**: ${fullstackInfo.development.stateManagement?.small || 'Prefer local state and Context for small apps'}
` : ''}

${fullstackInfo.testing ? `
#### 4. Testing Phase
- **Unit Testing**: ${fullstackInfo.testing.unitTesting?.tools || 'Jest or Vitest, plus React Testing Library for components'}
- **E2E Testing**: ${fullstackInfo.testing.integrationAndE2E?.e2e || 'Use Playwright or Cypress to cover critical flows'}
- **Security**: ${fullstackInfo.testing.securityAndPolicies?.rls || 'Validate RLS by trying unauthorized access'}
` : ''}

${fullstackInfo.deployment ? `
#### 5. Deployment Phase
- **Vercel**: ${fullstackInfo.deployment.vercel?.setup || 'Connect GitHub, set production env vars'}
- **Supabase**: ${fullstackInfo.deployment.supabase?.environments || 'Maintain separate projects for dev, staging, production'}
- **Production**: ${fullstackInfo.deployment.productionReadiness?.monitoring || 'Sentry for error monitoring, trace API routes and SSR errors'}
` : ''}

### AI-Assisted Development
${fullstackInfo.aiPrompts ? `
#### Ready-to-Use AI Prompts
- **Scaffold**: "${fullstackInfo.aiPrompts.scaffold}"
- **Schema**: "${fullstackInfo.aiPrompts.schema}"
- **Component**: "${fullstackInfo.aiPrompts.component}"
- **API Route**: "${fullstackInfo.aiPrompts.apiRoute}"
- **Tests**: "${fullstackInfo.aiPrompts.tests}"
- **Refactor**: "${fullstackInfo.aiPrompts.refactor}"
` : ''}

### Project Structure
\`\`\`
${projectInfo.name}/
├── src/
│   ├── app/              # Next.js App Router routes
│   ├── components/       # Reusable UI components
│   ├── features/         # Feature slices, composed UIs
│   ├── lib/              # Supabase client, utils
│   ├── hooks/            # Custom React hooks
│   ├── context/          # Providers
│   └── styles/           # Global styles
├── public/               # Static assets
├── .env.local           # Environment variables
└── supabase/            # Database schema and migrations
\`\`\`

` : ''}

## Development Guidelines

### Code Standards
${playbookInfo.standards?.codeQualityStandards ? 
  playbookInfo.standards.codeQualityStandards.map(standard => `- ${standard}`).join('\n') : 
  '- Follow TypeScript best practices for type safety\n- Maintain consistent code formatting with Prettier\n- Write comprehensive tests for all functionality\n- Document complex logic and business rules\n- Follow semantic versioning for releases'}

### Performance Considerations
- Optimize for fast loading times and smooth interactions
- Implement proper caching strategies
- Monitor and optimize database queries
- Use lazy loading for non-critical resources
- Implement proper error boundaries

### Security Best Practices
- Validate all user inputs and sanitize data
- Implement proper authentication and authorization
- Use HTTPS and secure headers
- Keep dependencies updated and secure
- Follow OWASP security guidelines

## Recent Changes & Updates

*This section should be updated after each modification to track project evolution*

### Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

**Recent Modifications:**
- [No recent changes documented]

**Current Status:**
- Project status not updated

**Next Planned Improvements:**
- [No planned improvements documented]

## AI Agent Instructions

When working on this project:

1. **Maintain Consistency** - Follow established patterns and conventions
2. **Update Documentation** - Always update this file after making changes
3. **Test Thoroughly** - Ensure all functionality works as expected
4. **Follow Best Practices** - Adhere to ${projectType} development standards
5. **Consider Performance** - Optimize for speed and efficiency
6. **Preserve User Experience** - Maintain intuitive and accessible interfaces
7. **Keep Dependencies Current** - Use latest stable versions when possible
8. **Reference Playbook** - Consult development playbook for workflow guidance
${isFrontendProject ? '\n9. **Accessibility First** - Ensure WCAG 2.1 AA compliance in all frontend work\n10. **Progressive Enhancement** - Build with semantic HTML first, enhance with CSS and JavaScript' : ''}
${isFullstackProject ? '\n9. **AI-Assisted Development** - Use Cursor and AI prompts for rapid prototyping\n10. **Supabase Integration** - Follow RLS policies and secure data access patterns\n11. **Next.js Best Practices** - Use App Router, Server Components, and proper caching strategies' : ''}

### AI Agent Best Practices
${playbookInfo.guidelines?.bestPractices ? 
  playbookInfo.guidelines.bestPractices.map(practice => `- ${practice}`).join('\n') : 
  '- Consistency: Always follow established patterns\n- Quality: Write clean, readable, and maintainable code\n- Testing: Include appropriate tests for all changes\n- Documentation: Update documentation with code changes\n- Security: Consider security implications of changes\n- Performance: Optimize for performance when possible'}

## Update System

### 🤖 AI Agent Auto-Update (Recommended)
AI agents should automatically update this file when making changes:

\`\`\`javascript
const { updateAIInstructions } = require('./scripts/ai-agent/ai-agent-helper.js')
await updateAIInstructions(
  ["Your changes here"], 
  "Current project status", 
  ["Next improvements"]
)
\`\`\`

### Manual Update Options

#### Interactive Menu
\`\`\`bash
npm run ai-menu
\`\`\`

#### Direct Commands
\`\`\`bash
npm run view-changes    # View recent changes
npm run view-status     # View current status
npm run ai-update       # Update documentation
\`\`\`

## Development Playbook Reference

For comprehensive development workflows and project structures, refer to:
- **Standard Workflow**: Development playbook for general projects
- **Agile Workflow**: Agile methodology for team-based development
- **Frontend Playbook**: Springer Nature's production-tested frontend guidelines
- **Full-Stack Playbook**: GPT-5 research for React, Next.js, Supabase, and AI-assisted development
- **Technology-Specific**: Specialized workflows for different tech stacks

${isFrontendProject ? `
## Frontend Playbook Integration

This project uses the Springer Nature Frontend Playbook as a reference for:
- **Accessibility**: WCAG 2.1 AA compliance and testing
- **Performance**: Core Web Vitals optimization
- **CSS**: BEM methodology and component organization
- **JavaScript**: Modern practices and progressive enhancement
- **Code Review**: Pull request based reviews with quality focus

For detailed guidelines, refer to the frontend-playbook-main/ directory.
` : ''}

${isFullstackProject ? `
## Full-Stack Playbook Integration

This project uses the GPT-5 Research Full-Stack Playbook as a reference for:
- **React & Next.js**: Modern frontend development with App Router and Server Components
- **Supabase Backend**: PostgreSQL database with Auth, Storage, Realtime, and Edge Functions
- **AI-Assisted Development**: Cursor IDE integration with ready-to-use prompts
- **TypeScript**: End-to-end type safety from database to UI
- **Modern Tooling**: Tailwind CSS, React Hook Form, Zod validation, comprehensive testing

For detailed guidelines, refer to the Full-Stack-Web-Dev-Playbook.md file.
` : ''}

## Contact & Support

For questions about this project, refer to the project documentation and maintain alignment with the project goals.
`
  }
}

module.exports = { TemplateManager }

#!/usr/bin/env node

const fs = require('fs-extra')
const path = require('path')
const { ErrorHandler, FileSystemError } = require('./error-handler.js')

/**
 * AI Playbook Reader
 * Parses and extracts structured information from development playbooks for AI agents
 */

class AIPlaybookReader {
  constructor(projectRoot = process.cwd()) {
    this.projectRoot = projectRoot
    this.playbookManager = require('./development-playbook.js').DevelopmentPlaybook
  }

  /**
   * Parse a playbook and extract structured information
   */
  async parsePlaybook(playbookName = 'standard') {
    try {
      const playbookManager = new this.playbookManager(this.projectRoot)
      const content = await playbookManager.getPlaybook(playbookName)
      
      return this.extractStructuredInfo(content)
    } catch (error) {
      throw new FileSystemError(`Failed to parse playbook: ${error.message}`, playbookName, 'parse')
    }
  }

  /**
   * Extract structured information from playbook content
   */
  extractStructuredInfo(content) {
    const sections = this.parseSections(content)
    
    return {
      overview: this.extractOverview(sections),
      projectStructure: this.extractProjectStructure(sections),
      workflows: this.extractWorkflows(sections),
      standards: this.extractStandards(sections),
      tools: this.extractTools(sections),
      guidelines: this.extractGuidelines(sections),
      metadata: this.extractMetadata(content)
    }
  }

  /**
   * Parse markdown content into sections
   */
  parseSections(content) {
    const lines = content.split('\n')
    const sections = {}
    let currentSection = null
    let currentContent = []

    for (const line of lines) {
      const trimmedLine = line.trim()
      
      // Check for headers
      if (trimmedLine.startsWith('#')) {
        // Save previous section
        if (currentSection) {
          sections[currentSection] = currentContent.join('\n').trim()
        }
        
        // Start new section
        currentSection = this.normalizeSectionName(trimmedLine)
        currentContent = []
      } else {
        currentContent.push(line)
      }
    }

    // Save last section
    if (currentSection) {
      sections[currentSection] = currentContent.join('\n').trim()
    }

    return sections
  }

  /**
   * Normalize section names for consistent access
   */
  normalizeSectionName(header) {
    return header
      .replace(/^#+\s*/, '') // Remove markdown headers
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .toLowerCase()
  }

  /**
   * Extract project overview information
   */
  extractOverview(sections) {
    const overviewSection = sections['overview'] || sections['standard-development-workflow-project-structure-guide']
    
    if (!overviewSection) return null

    return {
      description: this.extractDescription(overviewSection),
      purpose: this.extractPurpose(overviewSection),
      targetAudience: this.extractTargetAudience(overviewSection)
    }
  }

  /**
   * Extract project structure information
   */
  extractProjectStructure(sections) {
    const structureSection = sections['universal-project-structure'] || sections['project-structure']
    
    if (!structureSection) return null

    return {
      directoryLayout: this.extractDirectoryLayout(structureSection),
      fileNamingConventions: this.extractFileNamingConventions(structureSection),
      technologySpecificStructures: this.extractTechnologySpecificStructures(sections),
      frontendStructure: this.extractFrontendStructure(sections),
      fullstackStructure: this.extractFullstackStructure(sections)
    }
  }

  /**
   * Extract workflow information
   */
  extractWorkflows(sections) {
    const workflowSection = sections['development-workflow'] || sections['workflow']
    
    if (!workflowSection) return null

    return {
      projectInitialization: this.extractProjectInitialization(workflowSection),
      developmentProcess: this.extractDevelopmentProcess(workflowSection),
      codeReviewProcess: this.extractCodeReviewProcess(workflowSection),
      releaseProcess: this.extractReleaseProcess(workflowSection)
    }
  }

  /**
   * Extract development standards
   */
  extractStandards(sections) {
    const standardsSection = sections['development-standards'] || sections['standards']
    
    if (!standardsSection) return null

    return {
      codeQualityStandards: this.extractCodeQualityStandards(standardsSection),
      gitWorkflowStandards: this.extractGitWorkflowStandards(standardsSection),
      documentationStandards: this.extractDocumentationStandards(standardsSection)
    }
  }

  /**
   * Extract tools and technologies
   */
  extractTools(sections) {
    const toolsSection = sections['additional-resources'] || sections['tools']
    
    if (!toolsSection) return null

    return {
      essentialTools: this.extractEssentialTools(toolsSection),
      documentationTools: this.extractDocumentationTools(toolsSection),
      learningResources: this.extractLearningResources(toolsSection)
    }
  }

  /**
   * Extract AI agent guidelines
   */
  extractGuidelines(sections) {
    const guidelinesSection = sections['ai-agent-guidelines'] || sections['guidelines']
    
    if (!guidelinesSection) return null

    return {
      projectCreation: this.extractProjectCreationGuidelines(guidelinesSection),
      projectModification: this.extractProjectModificationGuidelines(guidelinesSection),
      bestPractices: this.extractBestPractices(guidelinesSection)
    }
  }

  /**
   * Extract metadata from content
   */
  extractMetadata(content) {
    return {
      totalLength: content.length,
      sectionCount: (content.match(/^#+\s/gm) || []).length,
      codeBlocks: (content.match(/```[\s\S]*?```/g) || []).length,
      lastUpdated: new Date().toISOString()
    }
  }

  /**
   * Helper methods for extracting specific information
   */
  extractDescription(section) {
    const lines = section.split('\n')
    for (const line of lines) {
      if (line.trim() && !line.startsWith('*') && !line.startsWith('#')) {
        return line.trim()
      }
    }
    return null
  }

  extractPurpose(section) {
    const purposeMatch = section.match(/This playbook serves as a master reference for AI agents when:([\s\S]*?)(?=\n\n|\n#|$)/)
    if (purposeMatch) {
      return purposeMatch[1].trim()
    }
    return null
  }

  extractTargetAudience(section) {
    return ['AI agents', 'developers', 'project managers']
  }

  extractDirectoryLayout(section) {
    const codeBlocks = section.match(/```[\s\S]*?```/g)
    if (codeBlocks && codeBlocks.length > 0) {
      return codeBlocks[0].replace(/```/g, '').trim()
    }
    return null
  }

  extractFileNamingConventions(section) {
    const conventions = {}
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.includes('**Components**')) {
        conventions.components = this.extractConventionValue(line)
      } else if (line.includes('**Utilities**')) {
        conventions.utilities = this.extractConventionValue(line)
      } else if (line.includes('**Constants**')) {
        conventions.constants = this.extractConventionValue(line)
      } else if (line.includes('**Types**')) {
        conventions.types = this.extractConventionValue(line)
      } else if (line.includes('**Tests**')) {
        conventions.tests = this.extractConventionValue(line)
      } else if (line.includes('**Config files**')) {
        conventions.config = this.extractConventionValue(line)
      }
    }
    
    return conventions
  }

  extractConventionValue(line) {
    const match = line.match(/\(e\.g\.,\s*`([^`]+)`\)/)
    return match ? match[1] : null
  }

  extractTechnologySpecificStructures(sections) {
    const structures = {}
    
    // Look for technology-specific sections
    const techSections = Object.keys(sections).filter(key => 
      key.includes('react') || key.includes('node') || key.includes('mobile')
    )
    
    for (const sectionKey of techSections) {
      const section = sections[sectionKey]
      if (section) {
        const codeBlocks = section.match(/```[\s\S]*?```/g)
        if (codeBlocks && codeBlocks.length > 0) {
          structures[sectionKey] = codeBlocks[0].replace(/```/g, '').trim()
        }
      }
    }
    
    return structures
  }

  extractProjectInitialization(section) {
    const initMatch = section.match(/### 1\. Project Initialization([\s\S]*?)(?=### 2\.|$)/)
    if (initMatch) {
      return this.extractCodeBlocks(initMatch[1])
    }
    return null
  }

  extractDevelopmentProcess(section) {
    const processMatch = section.match(/### 3\. Feature Development Process([\s\S]*?)(?=### 4\.|$)/)
    if (processMatch) {
      return this.extractCodeBlocks(processMatch[1])
    }
    return null
  }

  extractCodeReviewProcess(section) {
    const reviewMatch = section.match(/### 4\. Code Review Process([\s\S]*?)(?=### 5\.|$)/)
    if (reviewMatch) {
      return this.extractListItems(reviewMatch[1])
    }
    return null
  }

  extractReleaseProcess(section) {
    const releaseMatch = section.match(/### 5\. Release Process([\s\S]*?)(?=###|$)/)
    if (releaseMatch) {
      return this.extractCodeBlocks(releaseMatch[1])
    }
    return null
  }

  extractCodeQualityStandards(section) {
    const standards = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- **') && line.includes('**:')) {
        standards.push(line.trim().replace(/^-\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return standards
  }

  extractGitWorkflowStandards(section) {
    const standards = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- **') && line.includes('**:')) {
        standards.push(line.trim().replace(/^-\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return standards
  }

  extractDocumentationStandards(section) {
    const standards = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- **') && line.includes('**:')) {
        standards.push(line.trim().replace(/^-\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return standards
  }

  extractEssentialTools(section) {
    const tools = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- **') && line.includes('**:')) {
        const tool = line.trim().replace(/^-\s*\*\*/, '').replace(/\*\*:.*$/, '')
        const description = line.match(/\*\*: (.*)$/)
        tools.push({
          name: tool,
          description: description ? description[1] : ''
        })
      }
    }
    
    return tools
  }

  extractDocumentationTools(section) {
    return this.extractEssentialTools(section) // Same pattern
  }

  extractLearningResources(section) {
    return this.extractEssentialTools(section) // Same pattern
  }

  extractProjectCreationGuidelines(section) {
    const guidelines = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('1. **') && line.includes('**:')) {
        guidelines.push(line.trim().replace(/^\d+\.\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return guidelines
  }

  extractProjectModificationGuidelines(section) {
    const guidelines = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('1. **') && line.includes('**:')) {
        guidelines.push(line.trim().replace(/^\d+\.\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return guidelines
  }

  extractBestPractices(section) {
    const practices = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('1. **') && line.includes('**:')) {
        practices.push(line.trim().replace(/^\d+\.\s*\*\*/, '').replace(/\*\*:.*$/, ''))
      }
    }
    
    return practices
  }

  /**
   * Extract code blocks from text
   */
  extractCodeBlocks(text) {
    const codeBlocks = text.match(/```[\s\S]*?```/g)
    return codeBlocks ? codeBlocks.map(block => block.replace(/```/g, '').trim()) : []
  }

  /**
   * Extract list items from text
   */
  extractListItems(text) {
    const items = []
    const lines = text.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- ')) {
        items.push(line.trim().substring(2))
      }
    }
    
    return items
  }

  /**
   * Get quick reference for AI agents
   */
  async getQuickReference(playbookName = 'standard') {
    try {
      const structured = await this.parsePlaybook(playbookName)
      
      return {
        projectStructure: structured.projectStructure?.directoryLayout,
        fileNaming: structured.projectStructure?.fileNamingConventions,
        workflows: structured.workflows?.developmentProcess,
        standards: structured.standards?.codeQualityStandards,
        guidelines: structured.guidelines?.bestPractices
      }
    } catch (error) {
      throw new FileSystemError(`Failed to get quick reference: ${error.message}`, playbookName, 'quickref')
    }
  }

  /**
   * Search playbook content for specific information
   */
  async searchPlaybook(playbookName, searchTerm) {
    try {
      const playbookManager = new this.playbookManager(this.projectRoot)
      const content = await playbookManager.getPlaybook(playbookName)
      
      const lines = content.split('\n')
      const results = []
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({
            line: i + 1,
            content: lines[i].trim(),
            context: lines.slice(Math.max(0, i - 2), i + 3).join('\n')
          })
        }
      }
      
      return results
    } catch (error) {
      throw new FileSystemError(`Failed to search playbook: ${error.message}`, playbookName, 'search')
    }
  }

  /**
   * Extract frontend-specific structure from Springer Nature playbook
   */
  extractFrontendStructure(sections) {
    const frontendStructure = {
      accessibility: this.extractAccessibilityGuidelines(sections),
      performance: this.extractPerformanceGuidelines(sections),
      css: this.extractCSSGuidelines(sections),
      javascript: this.extractJavaScriptGuidelines(sections),
      practices: this.extractPracticeGuidelines(sections)
    }
    
    return frontendStructure
  }

  /**
   * Extract full-stack web development structure from GPT-5 research playbook
   */
  extractFullstackStructure(sections) {
    const fullstackStructure = {
      planning: this.extractPlanningPhase(sections),
      scaffolding: this.extractScaffoldingPhase(sections),
      development: this.extractDevelopmentPhase(sections),
      testing: this.extractTestingPhase(sections),
      deployment: this.extractDeploymentPhase(sections),
      postLaunch: this.extractPostLaunchPhase(sections),
      techStack: this.extractTechStack(sections),
      aiPrompts: this.extractAIPrompts(sections)
    }
    
    return fullstackStructure
  }

  /**
   * Extract accessibility guidelines
   */
  extractAccessibilityGuidelines(sections) {
    const accessibilitySection = sections['accessibility'] || sections['a-simple-accessibility-checklist']
    
    if (!accessibilitySection) return null

    return {
      wcagLevel: 'WCAG 2.1 AA',
      keyPrinciples: [
        'Use correct HTML elements',
        'Provide text alternatives for images',
        'Ensure adequate color contrast',
        'Make content keyboard accessible',
        'Use semantic structure and landmarks'
      ],
      checklist: this.extractAccessibilityChecklist(accessibilitySection),
      tools: ['pa11y', 'WAVE', 'axe-core', 'Lighthouse']
    }
  }

  /**
   * Extract performance guidelines
   */
  extractPerformanceGuidelines(sections) {
    const performanceSection = sections['performance'] || sections['a-simple-performance-checklist']
    
    if (!performanceSection) return null

    return {
      keyMetrics: ['Core Web Vitals', 'Page load time', 'Time to interactive'],
      optimizationAreas: [
        'HTTP requests reduction',
        'Page weight optimization',
        'Render blocking resources',
        'Critical rendering path',
        'Image optimization'
      ],
      tools: ['Lighthouse', 'WebPageTest', 'SpeedCurve', 'Chrome DevTools']
    }
  }

  /**
   * Extract CSS guidelines
   */
  extractCSSGuidelines(sections) {
    const cssSection = sections['css'] || sections['how-we-write-css']
    
    if (!cssSection) return null

    return {
      methodology: 'BEM (Block Element Modifier)',
      preprocessor: 'Sass',
      organization: 'Component-led approach',
      bestPractices: [
        'Use semantic class names',
        'Follow BEM naming convention',
        'Organize by components',
        'Use CSS custom properties',
        'Implement progressive enhancement'
      ]
    }
  }

  /**
   * Extract JavaScript guidelines
   */
  extractJavaScriptGuidelines(sections) {
    const jsSection = sections['javascript'] || sections['house-style']
    
    if (!jsSection) return null

    return {
      standards: [
        'Use modern ES6+ features',
        'Follow consistent naming conventions',
        'Implement progressive enhancement',
        'Write accessible JavaScript',
        'Use feature detection'
      ],
      tools: ['ESLint', 'Prettier', 'Babel', 'Webpack']
    }
  }

  /**
   * Extract practice guidelines
   */
  extractPracticeGuidelines(sections) {
    const practicesSection = sections['practices'] || sections['code-reviews']
    
    if (!practicesSection) return null

    return {
      codeReview: {
        process: 'Pull request based reviews',
        focus: ['Accessibility', 'Performance', 'Security', 'Code quality'],
        tools: ['GitHub', 'pa11y', 'Lighthouse', 'npm audit']
      },
      progressiveEnhancement: {
        principle: 'Start with semantic HTML, enhance with CSS and JavaScript',
        benefits: ['Fault tolerance', 'Better performance', 'Accessibility']
      },
      browserSupport: {
        approach: 'Graded browser support',
        testing: 'Cross-browser testing required'
      }
    }
  }

  /**
   * Extract accessibility checklist items
   */
  extractAccessibilityChecklist(section) {
    const checklist = []
    const lines = section.split('\n')
    
    for (const line of lines) {
      if (line.trim().startsWith('- [') && line.includes(']')) {
        const item = line.trim().replace(/^- \[.*?\]\s*/, '')
        if (item.length > 0) {
          checklist.push(item)
        }
      }
    }
    
    return checklist
  }

  /**
   * Extract planning phase information
   */
  extractPlanningPhase(sections) {
    const planningSection = sections['1-planning'] || sections['planning']
    
    if (!planningSection) return null

    return {
      goalsAndScope: this.extractGoalsAndScope(planningSection),
      architectureStrategy: this.extractArchitectureStrategy(planningSection),
      techStackDecisions: this.extractTechStackDecisions(planningSection),
      dataModelDesign: this.extractDataModelDesign(planningSection),
      toolingAndWorkflow: this.extractToolingAndWorkflow(planningSection)
    }
  }

  /**
   * Extract scaffolding phase information
   */
  extractScaffoldingPhase(sections) {
    const scaffoldingSection = sections['2-scaffolding'] || sections['scaffolding']
    
    if (!scaffoldingSection) return null

    return {
      projectInit: this.extractProjectInit(scaffoldingSection),
      suggestedStructure: this.extractSuggestedStructure(scaffoldingSection),
      supabaseIntegration: this.extractSupabaseIntegration(scaffoldingSection),
      dependencies: this.extractDependencies(scaffoldingSection),
      githubAndCI: this.extractGitHubAndCI(scaffoldingSection)
    }
  }

  /**
   * Extract development phase information
   */
  extractDevelopmentPhase(sections) {
    const developmentSection = sections['3-development'] || sections['development']
    
    if (!developmentSection) return null

    return {
      featureCycle: this.extractFeatureCycle(developmentSection),
      nextjsPatterns: this.extractNextjsPatterns(developmentSection),
      supabaseUsage: this.extractSupabaseUsage(developmentSection),
      stateManagement: this.extractStateManagement(developmentSection),
      reuseAndTypes: this.extractReuseAndTypes(developmentSection)
    }
  }

  /**
   * Extract testing phase information
   */
  extractTestingPhase(sections) {
    const testingSection = sections['4-testing'] || sections['testing']
    
    if (!testingSection) return null

    return {
      unitTesting: this.extractUnitTesting(testingSection),
      integrationAndE2E: this.extractIntegrationAndE2E(testingSection),
      securityAndPolicies: this.extractSecurityAndPolicies(testingSection),
      ciIntegration: this.extractCIIntegration(testingSection)
    }
  }

  /**
   * Extract deployment phase information
   */
  extractDeploymentPhase(sections) {
    const deploymentSection = sections['5-deployment'] || sections['deployment']
    
    if (!deploymentSection) return null

    return {
      vercel: this.extractVercelConfig(deploymentSection),
      supabase: this.extractSupabaseConfig(deploymentSection),
      productionReadiness: this.extractProductionReadiness(deploymentSection),
      finalChecklist: this.extractFinalChecklist(deploymentSection)
    }
  }

  /**
   * Extract post-launch phase information
   */
  extractPostLaunchPhase(sections) {
    const postLaunchSection = sections['6-post-launch'] || sections['post-launch']
    
    if (!postLaunchSection) return null

    return {
      monitoringAndFeedback: this.extractMonitoringAndFeedback(postLaunchSection),
      continuousImprovement: this.extractContinuousImprovement(postLaunchSection),
      maintenanceAndSecurity: this.extractMaintenanceAndSecurity(postLaunchSection)
    }
  }

  /**
   * Extract tech stack information
   */
  extractTechStack(sections) {
    return {
      frontend: ['Next.js', 'React', 'TypeScript'],
      backend: ['Supabase', 'PostgreSQL'],
      ide: ['Cursor', 'AI Pair Programming'],
      ui: ['Tailwind CSS', 'Component Kits'],
      forms: ['React Hook Form', 'Zod'],
      auth: ['Supabase Auth', 'Clerk', 'Auth0'],
      analytics: ['Vercel Analytics', 'Plausible', 'GA4'],
      monitoring: ['Sentry'],
      testing: ['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Cypress']
    }
  }

  /**
   * Extract AI prompts for IDEs
   */
  extractAIPrompts(sections) {
    const promptsSection = sections['prompts-for-ai-agents-in-ides'] || sections['ai-prompts']
    
    if (!promptsSection) return null

    return {
      scaffold: 'Create a Next.js 15 TS project with Tailwind, add a layout with Header and Footer, create a Home page.',
      schema: 'Generate SQL migrations for tables leads and profiles, include created_at defaults, enable RLS with owner-only read and write.',
      component: 'Create a LeadForm component using React Hook Form and Zod, fields name, email, message, onSubmit calls POST /api/leads, show success and error states.',
      apiRoute: 'Implement POST /api/leads that validates with Zod, inserts into Supabase, rate limits by IP, returns 200 on success.',
      tests: 'Write Vitest tests for LeadForm validation, and an integration test that posts to /api/leads and expects 200.',
      refactor: 'Extract data fetching to a useLeads hook, add types from generated Supabase types, update LeadList to use the hook.'
    }
  }

  // Helper methods for extracting specific information from full-stack playbook
  extractGoalsAndScope(section) {
    return {
      projectTypes: ['lead-gen site', 'full app'],
      keyActivities: ['Define primary objective', 'Map user journeys', 'Define minimum feature set']
    }
  }

  extractArchitectureStrategy(section) {
    return {
      approach: 'Monolith with Next.js first, add services when necessary',
      priorities: ['Maintainability', 'Clear separation of concerns', 'Adaptive design']
    }
  }

  extractTechStackDecisions(section) {
    return {
      frontend: 'Next.js with React and TypeScript',
      backend: 'Supabase for Postgres, Auth, Storage, Realtime, Edge Functions',
      ide: 'Cursor as AI pair programmer',
      ui: 'Tailwind CSS or component kit',
      forms: 'React Hook Form plus Zod',
      auth: 'Supabase Auth by default'
    }
  }

  extractDataModelDesign(section) {
    return {
      leadGen: 'leads table: id, email, name, message, created_at',
      apps: 'Core entities and relationships, RLS policies up front'
    }
  }

  extractToolingAndWorkflow(section) {
    return {
      versionControl: 'GitHub repository from day one, branch protections on main',
      commits: 'Conventional commits, brief PRs',
      deployment: 'Preview deployments on Vercel',
      aiCollaboration: 'Attach relevant files in prompts for context'
    }
  }

  extractProjectInit(section) {
    return {
      command: 'npx create-next-app@latest my-app --ts',
      structure: 'src/ with app/, components/, features/, lib/, hooks/, context/, styles/'
    }
  }

  extractSuggestedStructure(section) {
    return {
      app: 'Next.js App Router routes',
      components: 'Reusable UI',
      features: 'Feature slices, composed UIs',
      lib: 'Supabase client, utils',
      hooks: 'Custom React hooks',
      context: 'Providers',
      styles: 'Global styles'
    }
  }

  extractSupabaseIntegration(section) {
    return {
      setup: 'Create Supabase project, note URL and anon key',
      sdk: 'npm i @supabase/supabase-js',
      envVars: 'NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY',
      security: 'Enable RLS on tables, write minimally permissive policies',
      schema: 'Manage schema as code with Supabase CLI and SQL migrations'
    }
  }

  extractDependencies(section) {
    return {
      ui: 'Tailwind CSS or preferred UI kit',
      forms: 'react-hook-form, zod, date-fns, lucide icons',
      tooling: 'ESLint and Prettier, add a Husky pre-commit for lint and type-check'
    }
  }

  extractGitHubAndCI(section) {
    return {
      github: 'Push to GitHub, add an Action to run build, lint, test on PRs',
      vercel: 'Configure Vercel project, add env vars, enable Preview Deployments'
    }
  }

  extractFeatureCycle(section) {
    return [
      'Draft the UI, define props and interactions',
      'Implement data access, Supabase queries in hooks or route handlers',
      'Wire forms, validation, and optimistic UI when applicable',
      'Add tests, smoke test in the preview URL',
      'Ship behind a feature flag if risky'
    ]
  }

  extractNextjsPatterns(section) {
    return {
      apiRoutes: 'server code for form processing, webhooks, admin tasks',
      serverComponents: 'for data-first pages and SEO, keep client components for interactivity',
      caching: 'static where possible, incremental regeneration for content pages'
    }
  }

  extractSupabaseUsage(section) {
    return {
      client: 'Use the Supabase JS client on server or client as needed, never expose service role keys to the client',
      admin: 'For admin operations, call from server-side code with server secrets only',
      auth: 'Use auth-helpers or a small session provider to keep auth state consistent'
    }
  }

  extractStateManagement(section) {
    return {
      small: 'Prefer local state and Context for small apps',
      complex: 'Introduce Zustand or Redux Toolkit only when complexity demands it'
    }
  }

  extractReuseAndTypes(section) {
    return {
      ui: 'Centralize UI primitives and form inputs',
      types: 'Generate DB types from Supabase schema, keep API contracts strongly typed'
    }
  }

  extractUnitTesting(section) {
    return {
      tools: 'Jest or Vitest, plus React Testing Library for components',
      scope: 'Test utilities, data mappers, and form logic'
    }
  }

  extractIntegrationAndE2E(section) {
    return {
      api: 'Test API routes with request simulations',
      e2e: 'Use Playwright or Cypress to cover critical flows: sign-in, submit lead, create item, etc.',
      database: 'Run against local Supabase or a dedicated test project, reset DB between runs'
    }
  }

  extractSecurityAndPolicies(section) {
    return {
      rls: 'Validate RLS by trying unauthorized access with anon and authed sessions',
      ownership: 'Confirm that only owners can read, update, delete their own rows when applicable'
    }
  }

  extractCIIntegration(section) {
    return {
      commands: 'Run build, lint, test on every PR and before deploys',
      policy: 'Fail fast, do not deploy if tests fail'
    }
  }

  extractVercelConfig(section) {
    return {
      setup: 'Connect GitHub, set production env vars',
      features: 'Domains, HTTPS auto, enable Vercel Analytics if needed',
      previews: 'Preview environments per PR, use for reviews and E2E runs'
    }
  }

  extractSupabaseConfig(section) {
    return {
      environments: 'Maintain separate projects for dev, staging, production',
      migrations: 'Apply SQL migrations with Supabase CLI or GitHub Actions',
      config: 'Copy storage buckets and auth provider configs per environment, review redirect URLs'
    }
  }

  extractProductionReadiness(section) {
    return {
      images: 'Image optimization with Next.js Image and, if needed, Supabase image transformations',
      monitoring: 'Sentry for error monitoring, trace API routes and SSR errors',
      seo: 'Correct titles and descriptions, Open Graph, sitemap and robots.txt, Lighthouse clean'
    }
  }

  extractFinalChecklist(section) {
    return [
      'Tests pass, type checks clean',
      'Responsive, accessible, quick, Web Vitals in green',
      'RLS verified in production',
      'Backups enabled, alerts configured',
      'Analytics events confirmed live'
    ]
  }

  extractMonitoringAndFeedback(section) {
    return {
      errors: 'Watch Sentry for exceptions and slow transactions',
      analytics: 'Track conversions and product usage, Plausible or GA4 for marketing, Mixpanel for product analytics',
      feedback: 'Provide a feedback channel, triage quickly'
    }
  }

  extractContinuousImprovement(section) {
    return {
      backlog: 'Groom backlog from analytics and feedback, iterate weekly',
      testing: 'Run A/B tests thoughtfully, avoid heavy third-party scripts',
      features: 'Add feature flags to de-risk progressive rollouts'
    }
  }

  extractMaintenanceAndSecurity(section) {
    return {
      updates: 'Dependabot for updates, review changelogs, run tests before merge',
      security: 'Periodic security audits, verify no secrets in client bundles, rotate keys as needed',
      performance: 'Indexing and performance checks monthly'
    }
  }
}

module.exports = { AIPlaybookReader }

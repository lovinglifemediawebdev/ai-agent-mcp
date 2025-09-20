# AI Agent System - Quick Reference

*Copy this file to any new project for instant access to proven development workflows.*

## 🚀 Instant Project Setup

```bash
# 1. Create project structure
mkdir -p src/{components,pages,services,utils,types,styles}
mkdir -p tests/{unit,integration,e2e}
mkdir -p docs scripts .github/workflows

# 2. Install core dependencies
npm install -D eslint prettier husky lint-staged

# 3. Initialize git
git init
git add .
git commit -m "feat: initial project setup"
```

## 📁 Standard Project Structure

```
project/
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
├── .github/               # GitHub workflows
├── .gitignore             # Git ignore rules
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## 🛠️ Essential Config Files

### .editorconfig
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2
```

### .prettierrc
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "semi": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "unused-imports"],
  "rules": {
    "unused-imports/no-unused-imports": "error"
  }
}
```

## 📋 File Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)
- **Types**: PascalCase with `.types.ts` suffix
- **Tests**: `.test.js` or `.spec.js` suffix
- **Config files**: dot-prefixed (`.eslintrc.js`)

## 🔄 Git Workflow

```bash
# Feature development
git checkout -b feature/feature-name
# ... make changes ...
git add .
git commit -m "feat: add feature description"
git push origin feature/feature-name
# Create PR

# Bug fixes
git checkout -b bugfix/issue-description
# ... fix bug ...
git commit -m "fix: resolve issue description"
```

## 🧪 Testing Strategy

### Testing Pyramid
- **Unit Tests** (70%): Individual functions/components
- **Integration Tests** (20%): Component interactions
- **E2E Tests** (10%): Complete user workflows

### Essential Testing Tools
- **Jest**: Unit testing framework
- **React Testing Library**: Component testing
- **Cypress/Playwright**: E2E testing

## 🚀 Package.json Scripts

```json
{
  "scripts": {
    "dev": "development server",
    "build": "production build",
    "start": "production server",
    "test": "run test suite",
    "lint": "run linting",
    "format": "format code"
  }
}
```

## 📊 Performance Standards

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🤖 AI Agent Guidelines

### Best Practices
1. **Consistency**: Follow established patterns
2. **Quality**: Write clean, readable code
3. **Testing**: Include tests for new functionality
4. **Documentation**: Update docs with changes
5. **Security**: Consider security implications
6. **Performance**: Optimize when possible

### Development Standards
- Use TypeScript for type safety
- Minimum 80% test coverage
- Required code reviews
- Keep documentation in sync

## 📚 Quick Documentation Access

### Online Resources
- **DevDocs.io**: https://devdocs.io (offline docs)
- **MDN Web Docs**: https://developer.mozilla.org
- **React Docs**: https://react.dev
- **Next.js Docs**: https://nextjs.org/docs

### Local Development
```bash
# Access DevDocs locally (if installed)
open http://localhost:9292

# Search MDN content locally (if available)
# Use MDN content searcher for offline access
```

## 🔧 Environment Setup

### Development
```bash
NODE_ENV=development
API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/dev
```

### Production
```bash
NODE_ENV=production
API_URL=https://api.example.com
DATABASE_URL=postgresql://prod-db:5432/production
```

## 📋 CI/CD Pipeline

1. **Code Push** → Trigger pipeline
2. **Lint & Test** → Run checks
3. **Build** → Create production build
4. **Security Scan** → Check vulnerabilities
5. **Deploy** → Deploy to staging/production
6. **Notify** → Send notifications

## 🎯 Technology-Specific Quick Start

### React + Next.js
```bash
npx create-next-app@latest project-name --typescript --tailwind --eslint
cd project-name
npm install @types/react @types/node
```

### Node.js + Express
```bash
mkdir project-name && cd project-name
npm init -y
npm install express cors helmet morgan
npm install -D @types/express @types/cors @types/morgan typescript
```

### Full-Stack (React + Node.js)
```bash
# Frontend
npx create-next-app@latest frontend --typescript
# Backend
mkdir backend && cd backend
npm init -y
npm install express cors helmet
```

## 💡 Pro Tips

1. **Start Simple**: Begin with basic structure, add complexity gradually
2. **Document Early**: Write README and docs from day one
3. **Test Early**: Write tests as you develop features
4. **Review Often**: Use code reviews for quality and knowledge sharing
5. **Automate Everything**: Use scripts and CI/CD for repetitive tasks

---

*This quick reference provides essential patterns and commands for rapid project setup and development. Keep it handy for consistent, professional development practices.*

**Source**: AI Agent System Development Playbooks
**Last Updated**: December 2024

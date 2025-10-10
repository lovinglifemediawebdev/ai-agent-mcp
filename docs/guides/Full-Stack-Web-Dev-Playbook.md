# Full-Stack Web Development Playbook (React, Next.js, Supabase, AI Assistance)

This playbook is a comprehensive guide for solo developers and AI-assisted coding agents building full-stack web projects using **React**, **Next.js**, **Supabase**, and **Cursor**. It covers simple **lead-generation websites** and more complex **web applications**, emphasizing a modular architecture, rapid prototyping with AI, and best-in-class tools. The process is organized into clear phases with guidance for both humans and AI agents at each step.

---

## 1) Planning

Define what you are building and how you will build it. This sets the foundation for a successful project.

### Goals and Scope
- Choose project type: lead-gen site or full app, define the primary objective and success metrics.
- Map top user journeys and the minimum feature set needed to validate them.

### Architecture Strategy
- Prefer a monolith with **Next.js** first, add services only when necessary as complexity grows.
- Keep the design adaptive, prioritize maintainability and a clear separation of concerns.

### Tech Stack Decisions
- **Frontend:** Next.js with React 18 and TypeScript (React 19 not supported - limited ecosystem support).
- **Backend:** Supabase for Postgres, Auth, Storage, Realtime, Edge Functions.
- **IDE and AI:** Cursor as an AI pair programmer, Ask mode favored, step-by-step edits.
- **UI and Styling:** Tailwind CSS or a component kit if preferred.
- **Forms and Validation:** React Hook Form plus Zod for schema validation.
- **Auth:** Supabase Auth by default, consider Clerk or Auth0 for special needs.
- **Analytics:** Vercel Analytics, Plausible or GA4 based on requirements.
- **Error Monitoring:** Sentry for client and server error capture in Next.js.

### React Version Policy
- **Standard Version:** React 18.x (latest stable with wide ecosystem support)
- **Not Supported:** React 19.x (too new, limited third-party library support)
- **Rationale:** React 18 provides stable, well-tested features with comprehensive library ecosystem
- **Migration Path:** Wait for React 19 ecosystem maturity before considering upgrade

### Data Model Design
- Draft initial ERD. For lead-gen, start with a `leads` table: id, email, name, message, created_at.
- For apps, list core entities and relationships, plan Row Level Security policies up front.

### Architecture for Reusability
- Adopt a modular folder structure with a `src/` root and clear boundaries between UI, logic, and data.
- Plan a shared UI library for buttons, inputs, modals, and form primitives.

### Tooling and Workflow
- GitHub repository from day one, branch protections on `main`.
- Conventional commits, brief PRs, preview deployments on Vercel.
- Define how you will collaborate with your AI agent, attach relevant files in prompts for context.

### AI Agent Tip
Ask the agent to propose a database schema, route map, and component list from your feature outline. Keep output short, verify choices, then iterate.

---

## 2) Scaffolding

Set up the skeleton of the app quickly, then iterate.

### Project Init
```bash
# Create Next.js app with React 18 (default)
npx create-next-app@latest my-app --ts
cd my-app

# Verify React version is 18.x
npm list react
# Should show: react@^18.x.x

# If React 19 is installed, downgrade to React 18
npm install react@^18.0.0 react-dom@^18.0.0
```

### Suggested Structure
```
src/
  app/              # Next.js App Router routes
  components/       # Reusable UI
  features/         # Feature slices, composed UIs
  lib/              # Supabase client, utils
  hooks/            # Custom React hooks
  context/          # Providers
  styles/           # Global styles
public/             # Static assets
.env.local          # Env vars
```

### Supabase Integration
- Create a Supabase project, note the URL and anon key.
- Install SDK: `npm i @supabase/supabase-js`.
- Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Enable **RLS** on tables, write minimally permissive policies.
- Manage schema as code with the Supabase CLI and SQL migrations.

### Basic App Scaffold
- Global layout, Header, Footer, Home page.
- Optional: Supabase Auth UI blocks for fast sign-in, or custom forms with React Hook Form.
- Add essential routes early, even with placeholders.

### Dependencies
- Tailwind CSS or preferred UI kit.
- react-hook-form, zod, date-fns, lucide icons, etc.
- ESLint and Prettier, add a Husky pre-commit for lint and type-check.

### GitHub and CI
- Push to GitHub, add an Action to run `build`, `lint`, `test` on PRs.
- Configure Vercel project, add env vars, enable Preview Deployments.

### AI Agent Tips
- Ask Cursor to generate Tailwind config, ESLint config, basic layout components, and a typed Supabase client wrapper.
- Provide the folder structure and target file names in the prompt for precise edits.
- Keep files small, split when a file exceeds 300 to 500 lines for AI clarity.

---

## 3) Development

Implement features in small iterations, test as you go.

### Feature Cycle
1. Draft the UI, define props and interactions.
2. Implement data access, Supabase queries in hooks or route handlers.
3. Wire forms, validation, and optimistic UI when applicable.
4. Add tests, smoke test in the preview URL.
5. Ship behind a feature flag if risky.

### Next.js Patterns
- **API routes or Route Handlers:** server code for form processing, webhooks, admin tasks.
- **Server Components:** for data-first pages and SEO, keep client components for interactivity.
- **Caching and ISR:** static where possible, incremental regeneration for content pages.

### Supabase Usage
- Use the Supabase JS client on server or client as needed, never expose service role keys to the client.
- For admin operations, call from server-side code with server secrets only.
- Use `auth-helpers` or a small session provider to keep auth state consistent.

### State Management
- Prefer local state and Context for small apps.
- Introduce Zustand or Redux Toolkit only when complexity demands it.

### Reuse and Types
- Centralize UI primitives and form inputs.
- Generate DB types from Supabase schema, keep API contracts strongly typed.

### AI Agent Tips
- Ask for component stubs with prop types, test scaffolds, and refactors, then verify.
- Provide the exact file list and paste snippets that need edits to maintain context.
- Use the agent to create variants of a component for A/B testing quickly.

---

## 4) Testing

Testing guards quality, especially important when code is co-authored with AI.

### Unit Testing
- Use Jest or Vitest, plus React Testing Library for components.
- Test utilities, data mappers, and form logic.

### Integration and E2E
- Test API routes with request simulations.
- Use Playwright or Cypress to cover critical flows: sign-in, submit lead, create item, etc.
- Run against local Supabase or a dedicated test project, reset DB between runs.

### Security and Policies
- Validate RLS by trying unauthorized access with anon and authed sessions.
- Confirm that only owners can read, update, delete their own rows when applicable.

### CI Integration
- Run `build`, `lint`, `test` on every PR and before deploys.
- Fail fast, do not deploy if tests fail.

### AI Agent Tips
- Generate unit test skeletons after each component, review and refine.
- Ask the agent to enumerate edge cases, then convert the list into tests.

---

## 5) Deployment

Reliable releases with Vercel and Supabase.

### Vercel
- Connect GitHub, set production env vars.
- Domains, HTTPS auto, enable Vercel Analytics if needed.
- Preview environments per PR, use for reviews and E2E runs.

### Supabase
- Maintain separate projects for dev, staging, production.
- Apply SQL migrations with Supabase CLI or GitHub Actions.
- Copy storage buckets and auth provider configs per environment, review redirect URLs.

### Production Readiness
- Image optimization with Next.js `<Image>` and, if needed, Supabase image transformations.
- Sentry for error monitoring, trace API routes and SSR errors.
- SEO, correct titles and descriptions, Open Graph, sitemap and robots.txt, Lighthouse clean.

### Final Checklist
- Tests pass, type checks clean.
- Responsive, accessible, quick, Web Vitals in green.
- RLS verified in production.
- Backups enabled, alerts configured.
- Analytics events confirmed live.

---

## 6) Post-Launch

Improve, monitor, and scale.

### Monitoring and Feedback
- Watch Sentry for exceptions and slow transactions.
- Track conversions and product usage, Plausible or GA4 for marketing, Mixpanel for product analytics.
- Provide a feedback channel, triage quickly.

### Continuous Improvement
- Groom backlog from analytics and feedback, iterate weekly.
- Run A/B tests thoughtfully, avoid heavy third-party scripts.
- Add feature flags to de-risk progressive rollouts.

### Maintenance and Security
- Dependabot for updates, review changelogs, run tests before merge.
- Periodic security audits, verify no secrets in client bundles, rotate keys as needed.
- Indexing and performance checks monthly.

### AI Agent Tips
- Ask for bug triage suggestions based on Sentry traces and logs you paste.
- Request code diff reviews from the agent and apply low-risk improvements.
- Use the agent to keep documentation current, generate API docs from code comments.

---

## Quick SOP Checklists

### Lead-Gen MVP
- [ ] Hero, value prop, social proof
- [ ] Contact or quote form, captcha or rate limit
- [ ] Thank you page, conversion event
- [ ] Basic SEO, analytics, and error monitoring
- [ ] Fast mobile performance, optimized images

### App MVP
- [ ] Auth, onboarding, primary CRUD
- [ ] RLS policies, server-only admin ops
- [ ] Empty states, optimistic updates
- [ ] Tests for critical flows
- [ ] Feature flags for risky additions

---

## Prompts for AI Agents in IDEs

- *Scaffold:* “Create a Next.js 15 TS project with Tailwind, add a layout with Header and Footer, create a Home page.”
- *Schema:* “Generate SQL migrations for tables leads and profiles, include created_at defaults, enable RLS with owner-only read and write.”
- *Component:* “Create a LeadForm component using React Hook Form and Zod, fields name, email, message, onSubmit calls POST /api/leads, show success and error states.”
- *API Route:* “Implement POST /api/leads that validates with Zod, inserts into Supabase, rate limits by IP, returns 200 on success.”
- *Tests:* “Write Vitest tests for LeadForm validation, and an integration test that posts to /api/leads and expects 200.”
- *Refactor:* “Extract data fetching to a useLeads hook, add types from generated Supabase types, update LeadList to use the hook.”

---

## Notes on Emerging Tech
Stay flexible. Consider:
- Next.js Server Actions and RSC for data-heavy UIs.
- Supabase Edge Functions for low-latency server logic at the edge.
- tRPC or Next API handlers with Zod for end-to-end typing.
- Drizzle ORM or Prisma based on preference and constraints.
- Vercel KV or Redis for caching, background jobs with queues when scale requires.

---

**Authorship:** Designed for human developers and AI coding agents working together in Cursor, maximizing speed and safety while keeping quality high.

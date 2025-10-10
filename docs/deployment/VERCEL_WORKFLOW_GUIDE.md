# Vercel Deployment Workflow Guide

**Version**: 1.0.0  
**Source**: HVAC Estimator Production Deployment  
**Status**: Production-Ready Pattern  
**Framework**: Multi-Framework Support (Next.js, React, Vue, etc.)

---

## 🎯 Overview

This guide provides a **simplified, production-tested workflow** for Vercel deployment that eliminates common environment confusion and provides clear patterns for both solo developers and teams.

---

## 📊 Understanding Vercel's Three Environments

Vercel provides three environments, but their purpose can be confusing:

### 1. **Development Environment** (Configuration Only)
- **NOT a deployed environment** - this is just a configuration bucket
- **Purpose**: Store development-specific environment variables
- **Access**: Only available when running locally (`npm run dev`)
- **Common Confusion**: Many developers think this deploys somewhere - it doesn't!

### 2. **Preview Environment** (Branch Deployments)
- **Deployed URL**: Every branch gets its own URL (e.g., `yourapp-dev-main-username.vercel.app`)
- **Purpose**: Test changes before merging to production
- **Triggers**: Automatically deploys on every push to non-production branches
- **Environment Variables**: Uses "Preview" environment variables from Vercel settings
- **Ideal For**: Testing features, stakeholder review, QA validation

### 3. **Production Environment** (Main Branch)
- **Deployed URL**: Your primary domain (e.g., `yourapp.vercel.app` or custom domain)
- **Purpose**: Live application serving real users
- **Triggers**: Automatically deploys when you push to `main` branch
- **Environment Variables**: Uses "Production" environment variables from Vercel settings
- **Critical**: This is your live site - only push tested, working code!

---

## 🚀 Simplified Workflow

### Professional Git Workflow Pattern

```bash
# Step 1: Create feature branch from main
git checkout main
git pull origin main
git checkout -b dev/feature-name

# Step 2: Develop your feature
# Make changes, test locally with npm run dev
git add .
git commit -m "feat: implement feature-name"

# Step 3: Push to trigger Preview deployment
git push origin dev/feature-name

# Step 4: Test on Vercel Preview URL
# Visit: yourapp-dev-feature-name-username.vercel.app
# Verify all functionality works in deployed environment

# Step 5: Merge to main when ready for production
git checkout main
git pull origin main
git merge dev/feature-name
git push origin main

# Step 6: Verify production deployment
# Visit: yourapp.vercel.app
# Confirm production is working correctly
```

---

## 🔧 Environment Variable Setup

### Where to Set Environment Variables

**In Vercel Dashboard** → Your Project → Settings → Environment Variables

### Three Buckets to Configure

#### 1. Development Variables (Local Only)
```
NEXT_PUBLIC_API_URL=http://localhost:3000
SUPABASE_URL=https://your-dev-project.supabase.co
SUPABASE_ANON_KEY=your-dev-anon-key
```
- **Used When**: Running `npm run dev` locally
- **Access**: Only on your local machine
- **Note**: Can also use `.env.local` file for these

#### 2. Preview Variables (Branch Deployments)
```
NEXT_PUBLIC_API_URL=https://yourapp-preview.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-staging-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-staging-service-role-key
```
- **Used When**: Deploying any non-main branch
- **Best Practice**: Use separate Supabase project for staging/preview
- **Access**: All preview deployments

#### 3. Production Variables (Main Branch)
```
NEXT_PUBLIC_API_URL=https://yourapp.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-production-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-production-service-role-key
```
- **Used When**: Deploying `main` branch
- **Critical**: Use production Supabase project with real data
- **Access**: Only production deployment

---

## 🔐 Supabase Integration Setup

### Authentication Redirect URLs

You need to configure redirect URLs in Supabase for each environment:

#### In Supabase Dashboard → Authentication → URL Configuration

**Preview Environment**:
```
Site URL: https://yourapp-dev-main-username.vercel.app
Redirect URLs:
  - https://yourapp-dev-main-username.vercel.app/auth/callback
  - https://yourapp-dev-main-username.vercel.app/auth/confirm
```

**Production Environment**:
```
Site URL: https://yourapp.vercel.app
Redirect URLs:
  - https://yourapp.vercel.app/auth/callback
  - https://yourapp.vercel.app/auth/confirm
```

### Wildcard Pattern for Multiple Preview Branches

If you have many preview branches:
```
Redirect URLs:
  - https://*-username.vercel.app/auth/callback
  - https://*-username.vercel.app/auth/confirm
```

**Note**: Replace `username` with your Vercel username or team name.

---

## 📋 Branch Naming Best Practices

### Professional Branch Naming Convention

```bash
# Feature development
dev/feature-name              # New feature implementation
dev/auth-system               # Authentication system
dev/payment-integration       # Payment feature

# Bug fixes
fix/issue-description         # Bug fix
fix/login-error               # Specific fix

# Improvements
improve/performance           # Performance optimization
improve/ui-polish             # UI improvements

# Documentation
docs/api-documentation        # Documentation updates
docs/setup-guide              # Setup instructions
```

### Why Use `dev/` Prefix?

- **Clear Separation**: Distinguishes development branches from main
- **Professional**: Industry-standard convention
- **Vercel-Friendly**: Creates clean preview URLs
- **Team Collaboration**: Easy to identify branch purpose

---

## ✅ Deployment Checklist

### Before Pushing to Production (`main` branch)

- [ ] **Test Locally**: All features work with `npm run dev`
- [ ] **Test Preview**: Verified on Vercel preview deployment
- [ ] **Environment Variables**: Production variables configured in Vercel
- [ ] **Authentication**: Redirect URLs configured in Supabase
- [ ] **Security Audit**: No hardcoded credentials or sensitive data
- [ ] **Database**: Migrations applied to production database
- [ ] **Performance**: Lighthouse score ≥90 for all metrics
- [ ] **Mobile**: Tested on mobile devices and responsive
- [ ] **Error Handling**: All error cases handled gracefully
- [ ] **Logs**: No console.log with sensitive information

---

## 🔧 Common Issues & Solutions

### Issue 1: "Invalid redirect URL" from Supabase

**Symptom**: Authentication fails with redirect error

**Solution**:
1. Check Supabase redirect URLs match your Vercel deployment URL exactly
2. Ensure you've added `/auth/callback` and `/auth/confirm` routes
3. For preview branches, use wildcard pattern: `https://*-username.vercel.app/auth/callback`

### Issue 2: Environment variables not updating

**Symptom**: Changes to environment variables not reflected in deployment

**Solution**:
1. Environment variables are only read at build time
2. After changing variables in Vercel dashboard, trigger a **Redeploy**
3. Go to Deployments → Click on latest → Click "Redeploy"

### Issue 3: Preview deployment works but production doesn't

**Symptom**: Preview URL works fine, production URL fails

**Solution**:
1. Check that Production environment variables are set (separate from Preview)
2. Verify production Supabase redirect URLs are configured
3. Ensure production database has necessary migrations applied

### Issue 4: "This site can't be reached" on preview deployment

**Symptom**: Preview deployment URL returns DNS error

**Solution**:
1. Wait 30-60 seconds - deployments take time to propagate
2. Check Vercel deployment logs for build errors
3. Verify branch was pushed successfully to GitHub

---

## 🎯 Team Collaboration Workflow

### For Team Projects

```bash
# 1. Create feature branch
git checkout main
git pull origin main
git checkout -b dev/your-feature

# 2. Develop and commit atomically
git add specific-files
git commit -m "feat: add specific feature"

# 3. Push and create Pull Request
git push origin dev/your-feature
# Create PR on GitHub: dev/your-feature → main

# 4. Team reviews Preview deployment
# Share preview URL with team for review
# Address feedback and push updates

# 5. Merge after approval
# Merge PR on GitHub
# Vercel automatically deploys to production

# 6. Clean up branch
git checkout main
git pull origin main
git branch -d dev/your-feature
git push origin --delete dev/your-feature
```

---

## 📊 Environment Matrix

| Environment | Branch | Vercel Env | Supabase Project | URL Pattern |
|------------|--------|------------|------------------|-------------|
| Local | any | Development | Dev Project | localhost:3000 |
| Preview | dev/* | Preview | Staging Project | *-username.vercel.app |
| Production | main | Production | Production Project | yourapp.vercel.app |

---

## 🚀 Best Practices

### 1. **Separate Supabase Projects**
- **Development**: Local testing database
- **Staging/Preview**: Separate project for preview deployments
- **Production**: Production database with real data

### 2. **Environment Variable Security**
- Never commit `.env` files to Git
- Use Vercel dashboard for all deployed environment variables
- Prefix client-side variables with `NEXT_PUBLIC_`
- Keep service role keys server-side only

### 3. **Branch Protection**
- Enable branch protection on `main` branch in GitHub
- Require pull request reviews before merging
- Require status checks to pass (Vercel preview deployment)

### 4. **Testing Strategy**
- Test locally first (`npm run dev`)
- Test on preview deployment (push to `dev/*` branch)
- Get team/stakeholder approval on preview
- Only then merge to `main` for production

### 5. **Deployment Monitoring**
- Check Vercel deployment logs for errors
- Monitor production with error tracking (Sentry, LogRocket, etc.)
- Set up alerts for deployment failures

---

## 🎓 Quick Reference

### Essential Commands

```bash
# Start local development
npm run dev

# Create feature branch
git checkout -b dev/feature-name

# Push to trigger preview deployment
git push origin dev/feature-name

# Merge to production (after testing preview)
git checkout main
git merge dev/feature-name
git push origin main
```

### Essential URLs

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Project Settings**: https://vercel.com/[username]/[project]/settings
- **Environment Variables**: https://vercel.com/[username]/[project]/settings/environment-variables
- **Deployments**: https://vercel.com/[username]/[project]/deployments

---

## 📚 Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Environment Variables Guide**: https://vercel.com/docs/concepts/projects/environment-variables
- **Preview Deployments**: https://vercel.com/docs/concepts/deployments/preview-deployments
- **Supabase Auth Guide**: https://supabase.com/docs/guides/auth

---

**This workflow pattern has been battle-tested in production deployments and eliminates the most common Vercel configuration mistakes. Follow these patterns for reliable, professional deployments!** 🚀


# Supabase Authentication Setup Guide

**Version**: 1.0.0  
**Source**: HVAC Estimator Production Deployment  
**Status**: Production-Ready Pattern  
**Framework**: Multi-Framework Support (Next.js, React, Vue, etc.)

---

## 🎯 Overview

This guide provides **complete, production-tested authentication patterns** for Supabase, including password reset flows, magic link authentication, and RLS-based authorization.

**Key Features**:
- ✅ Password reset with client-side token handling
- ✅ Magic link (passwordless) authentication
- ✅ RLS-based authorization (no hardcoded credentials)
- ✅ Secure redirect URL configuration
- ✅ Comprehensive error handling

---

## 🚀 Quick Start

### Prerequisites

```bash
# Install Supabase client
npm install @supabase/supabase-js

# For Next.js projects
npm install @supabase/auth-helpers-nextjs
```

### Basic Setup

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

## 🔐 Authentication Patterns

### 1. **Email/Password Authentication**

#### Sign Up

```typescript
// components/SignUpForm.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      // Success - user will receive confirmation email
      alert('Check your email for confirmation link!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        minLength={6}
        className="w-full p-2 border rounded"
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
```

#### Sign In

```typescript
// components/SignInForm.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Success - redirect to dashboard
      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
```

---

### 2. **Password Reset Flow** 🔄

#### Request Password Reset

```typescript
// components/ForgotPasswordForm.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded">
        <p className="font-semibold">Check your email!</p>
        <p className="text-sm mt-1">
          We've sent you a password reset link. Click the link in the email to reset your password.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleResetRequest} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <p className="text-sm text-gray-600">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>
    </form>
  )
}
```

#### Reset Password Page (Client-Side Token Handling)

```typescript
// app/auth/reset-password/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [validToken, setValidToken] = useState(false)

  useEffect(() => {
    // Check if we have a valid session from the reset link
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setValidToken(true)
      } else {
        setError('Invalid or expired reset link. Please request a new one.')
      }
    })
  }, [])

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error

      // Success - redirect to login
      alert('Password updated successfully!')
      router.push('/auth/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!validToken && error) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6">
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
        <button
          onClick={() => router.push('/auth/forgot-password')}
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Request New Reset Link
        </button>
      </div>
    )
  }

  if (!validToken) {
    return <div className="max-w-md mx-auto mt-8 p-6">Loading...</div>
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mb-6">Reset Your Password</h1>
      
      <form onSubmit={handlePasswordReset} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            New Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            required
            minLength={6}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
            minLength={6}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  )
}
```

---

### 3. **Magic Link Authentication** ✨

```typescript
// components/MagicLinkForm.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function MagicLinkForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded">
        <p className="font-semibold">Check your email!</p>
        <p className="text-sm mt-1">
          We've sent you a magic link. Click the link in the email to sign in.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleMagicLink} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <p className="text-sm text-gray-600">
        Enter your email and we'll send you a magic link to sign in. No password required!
      </p>
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      
      <button
        type="submit"
        disabled={loading}
        className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Magic Link'}
      </button>
    </form>
  )
}
```

---

### 4. **Auth Callback Handler**

```typescript
// app/auth/callback/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
```

---

## 🛡️ RLS-Based Authorization (No Hardcoded Credentials)

### Database Setup

```sql
-- Create admin_users table
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own admin status
CREATE POLICY "Users can read own admin status"
  ON admin_users
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Only admins can insert new admins
CREATE POLICY "Admins can insert new admins"
  ON admin_users
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE user_id = auth.uid()
    )
  );
```

### Check Admin Status (Client-Side)

```typescript
// lib/auth-utils.ts
import { supabase } from '@/lib/supabase'

export async function checkIfAdmin(): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return false

  const { data, error } = await supabase
    .from('admin_users')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (error || !data) return false

  return true
}
```

### Protected Admin Component

```typescript
// components/AdminOnly.tsx
'use client'

import { useEffect, useState } from 'react'
import { checkIfAdmin } from '@/lib/auth-utils'
import { useRouter } from 'next/navigation'

export function AdminOnly({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    checkIfAdmin().then(setIsAdmin)
  }, [])

  if (isAdmin === null) {
    return <div>Loading...</div>
  }

  if (!isAdmin) {
    router.push('/unauthorized')
    return null
  }

  return <>{children}</>
}
```

---

## 🔧 Redirect URL Configuration

### In Supabase Dashboard

**Navigation**: Authentication → URL Configuration

#### Development (Local)
```
Site URL: http://localhost:3000
Redirect URLs:
  - http://localhost:3000/auth/callback
  - http://localhost:3000/auth/confirm
  - http://localhost:3000/auth/reset-password
```

#### Preview (Vercel Branch Deployments)
```
Redirect URLs:
  - https://*-username.vercel.app/auth/callback
  - https://*-username.vercel.app/auth/confirm
  - https://*-username.vercel.app/auth/reset-password
```

#### Production
```
Site URL: https://yourapp.vercel.app
Redirect URLs:
  - https://yourapp.vercel.app/auth/callback
  - https://yourapp.vercel.app/auth/confirm
  - https://yourapp.vercel.app/auth/reset-password
```

---

## 🔍 Troubleshooting

### Issue 1: "Invalid redirect URL" Error

**Symptoms**: Authentication fails with redirect error message

**Root Cause**: Redirect URL not configured in Supabase dashboard

**Solution**:
1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add your exact redirect URL (including `/auth/callback`)
3. For multiple environments, use wildcard: `https://*-username.vercel.app/auth/callback`
4. Wait 30 seconds for changes to propagate

**Prevention**: Always configure redirect URLs before deploying auth features

---

### Issue 2: Password Reset Link Expired

**Symptoms**: User clicks reset link but gets "Invalid or expired" error

**Root Cause**: Reset links expire after 1 hour

**Solution**:
1. Request a new password reset link
2. Click the link within 1 hour
3. Complete password reset immediately

**Prevention**: Educate users to reset password promptly after receiving email

---

### Issue 3: Magic Link Not Working

**Symptoms**: User clicks magic link but nothing happens

**Root Cause**: Email client security or redirect URL misconfiguration

**Solutions**:
1. Verify redirect URLs are configured correctly
2. Try copying link to browser instead of clicking
3. Check spam folder for magic link email
4. Ensure email client isn't blocking external links

**Prevention**: Provide clear instructions to users about checking spam and copying links

---

### Issue 4: Session Not Persisting

**Symptoms**: User logs in but is immediately logged out

**Root Cause**: Cookie configuration or middleware issues

**Solution**:
```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession()

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
```

**Prevention**: Always use middleware for session management in Next.js

---

## 📚 Additional Resources

- **Supabase Auth Docs**: https://supabase.com/docs/guides/auth
- **Auth Helpers for Next.js**: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
- **Row Level Security**: https://supabase.com/docs/guides/auth/row-level-security
- **Email Templates**: https://supabase.com/docs/guides/auth/auth-email-templates

---

**This authentication setup provides production-ready, secure patterns that have been battle-tested in real-world applications. No hardcoded credentials, full RLS protection, and comprehensive error handling!** 🔐


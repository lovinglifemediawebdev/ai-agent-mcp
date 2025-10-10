# Conditional Form Logic - Advanced Form Patterns

**Version**: 1.0.0  
**Source**: HVAC Estimator Production Deployment  
**Status**: Production-Ready Pattern  
**Framework**: Multi-Framework Support (React, Vue, Angular, etc.)

---

## 🎯 Overview

This guide provides **production-tested patterns** for complex conditional form logic, including multi-path forms, dynamic field validation, warning screens, and state management best practices.

**Key Features**:
- ✅ Multi-path forms based on user selections
- ✅ Warning screens with clear user actions
- ✅ React state management best practices
- ✅ TypeScript patterns for optional fields
- ✅ Professional validation messaging

---

## 🏗️ Architecture Pattern

### Multi-Path Form Flow

```
User Selection
    ↓
Conditional Logic Check
    ↓
├─ Path A: Show Form Fields
├─ Path B: Show Warning Screen
└─ Path C: Redirect to Alternative Flow
    ↓
Validation & Submission
```

---

## 💡 Use Case: New vs. Existing Customer Flow

This real-world example demonstrates handling different user types with conditional logic.

### Requirements

1. **New Customers**: Collect full information (name, email, phone, address)
2. **Existing Customers**: Only collect job details (they're already in the system)
3. **Warning Screen**: If new customer doesn't have email, show helpful message

---

## 🎨 Implementation

### Step 1: Form State Setup

```typescript
// types/form.ts
export interface LeadFormData {
  // Customer type selection
  customerType: 'new' | 'existing' | null
  
  // Required for all
  jobDescription: string
  
  // Only required for new customers
  name?: string
  email?: string
  phone?: string
  address?: string
  
  // Optional fields
  preferredContactMethod?: 'email' | 'phone'
  urgency?: 'low' | 'medium' | 'high'
}

export interface FormState {
  data: LeadFormData
  errors: Partial<Record<keyof LeadFormData, string>>
  isSubmitting: boolean
  showWarning: boolean
}
```

### Step 2: Form Component with Conditional Logic

```typescript
// components/LeadForm.tsx
'use client'

import { useState } from 'react'
import { LeadFormData, FormState } from '@/types/form'

export function LeadForm() {
  const [formState, setFormState] = useState<FormState>({
    data: {
      customerType: null,
      jobDescription: '',
    },
    errors: {},
    isSubmitting: false,
    showWarning: false,
  })

  // Update form data
  const updateField = <K extends keyof LeadFormData>(
    field: K,
    value: LeadFormData[K]
  ) => {
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      errors: {
        ...prev.errors,
        [field]: undefined, // Clear error when user types
      },
    }))
  }

  // Validation logic
  const validateForm = (): boolean => {
    const { data } = formState
    const errors: Partial<Record<keyof LeadFormData, string>> = {}

    // Always required
    if (!data.jobDescription?.trim()) {
      errors.jobDescription = 'Please describe your project'
    }

    // Conditional validation for new customers
    if (data.customerType === 'new') {
      if (!data.name?.trim()) {
        errors.name = 'Name is required for new customers'
      }
      
      if (!data.phone?.trim()) {
        errors.phone = 'Phone number is required'
      }
      
      // Email is optional, but show warning if not provided
      if (!data.email?.trim()) {
        setFormState(prev => ({ ...prev, showWarning: true }))
        return false
      }
      
      // Validate email format if provided
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address'
      }
      
      if (!data.address?.trim()) {
        errors.address = 'Address is required for service location'
      }
    }

    setFormState(prev => ({ ...prev, errors }))
    return Object.keys(errors).length === 0
  }

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setFormState(prev => ({ ...prev, isSubmitting: true }))

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState.data),
      })

      if (!response.ok) throw new Error('Submission failed')

      // Success - redirect or show confirmation
      window.location.href = '/thank-you'
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: {
          ...prev.errors,
          jobDescription: 'Submission failed. Please try again.',
        },
      }))
    }
  }

  // Warning screen component
  if (formState.showWarning) {
    return <EmailWarningScreen 
      onContinue={() => setFormState(prev => ({ ...prev, showWarning: false }))}
      onProvideEmail={() => setFormState(prev => ({ ...prev, showWarning: false }))}
    />
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6">
      <h2 className="text-2xl font-bold">Request a Quote</h2>

      {/* Customer Type Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Are you a new or existing customer?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => updateField('customerType', 'new')}
            className={`flex-1 p-4 border-2 rounded-lg transition-colors ${
              formState.data.customerType === 'new'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="font-semibold">New Customer</div>
            <div className="text-sm text-gray-600">First time working with us</div>
          </button>
          
          <button
            type="button"
            onClick={() => updateField('customerType', 'existing')}
            className={`flex-1 p-4 border-2 rounded-lg transition-colors ${
              formState.data.customerType === 'existing'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="font-semibold">Existing Customer</div>
            <div className="text-sm text-gray-600">You've worked with us before</div>
          </button>
        </div>
      </div>

      {/* Conditional Fields - Only for New Customers */}
      {formState.data.customerType === 'new' && (
        <div className="space-y-4 p-4 border border-blue-200 rounded-lg bg-blue-50">
          <h3 className="font-semibold text-blue-900">New Customer Information</h3>
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formState.data.name || ''}
              onChange={(e) => updateField('name', e.target.value)}
              className={`w-full p-2 border rounded ${
                formState.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formState.errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address <span className="text-yellow-500">(Recommended)</span>
            </label>
            <input
              id="email"
              type="email"
              value={formState.data.email || ''}
              onChange={(e) => updateField('email', e.target.value)}
              className={`w-full p-2 border rounded ${
                formState.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formState.errors.email}</p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              We'll send your quote and updates to this email
            </p>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formState.data.phone || ''}
              onChange={(e) => updateField('phone', e.target.value)}
              className={`w-full p-2 border rounded ${
                formState.errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="(555) 123-4567"
            />
            {formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formState.errors.phone}</p>
            )}
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Service Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              value={formState.data.address || ''}
              onChange={(e) => updateField('address', e.target.value)}
              className={`w-full p-2 border rounded ${
                formState.errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="123 Main St, City, State 12345"
            />
            {formState.errors.address && (
              <p className="text-red-500 text-sm mt-1">{formState.errors.address}</p>
            )}
          </div>
        </div>
      )}

      {/* Job Description - Always Visible */}
      {formState.data.customerType && (
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium mb-1">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="jobDescription"
            value={formState.data.jobDescription}
            onChange={(e) => updateField('jobDescription', e.target.value)}
            rows={4}
            className={`w-full p-2 border rounded ${
              formState.errors.jobDescription ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your HVAC needs..."
          />
          {formState.errors.jobDescription && (
            <p className="text-red-500 text-sm mt-1">{formState.errors.jobDescription}</p>
          )}
        </div>
      )}

      {/* Submit Button */}
      {formState.data.customerType && (
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.isSubmitting ? 'Submitting...' : 'Request Quote'}
        </button>
      )}
    </form>
  )
}
```

### Step 3: Warning Screen Component

```typescript
// components/EmailWarningScreen.tsx
interface EmailWarningScreenProps {
  onContinue: () => void
  onProvideEmail: () => void
}

export function EmailWarningScreen({ onContinue, onProvideEmail }: EmailWarningScreenProps) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              Email Address Recommended
            </h3>
            
            <p className="text-yellow-800 mb-4">
              We strongly recommend providing an email address so we can:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-yellow-800 mb-4">
              <li>Send you a detailed quote within 24 hours</li>
              <li>Keep you updated on your project status</li>
              <li>Share important scheduling information</li>
              <li>Provide warranty and service documentation</li>
            </ul>
            
            <p className="text-yellow-800 font-medium">
              Without an email, you'll only receive updates via phone calls, which may delay communication.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={onProvideEmail}
            className="flex-1 p-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
          >
            Provide Email Address
          </button>
          
          <button
            onClick={onContinue}
            className="flex-1 p-3 bg-white text-yellow-700 font-semibold rounded-lg border-2 border-yellow-500 hover:bg-yellow-50"
          >
            Continue Without Email
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

## 🔧 Advanced Patterns

### Dynamic Field Requirements

```typescript
// Validation that adapts to user selections
const getRequiredFields = (customerType: 'new' | 'existing' | null): string[] => {
  const baseRequired = ['jobDescription']
  
  if (customerType === 'new') {
    return [...baseRequired, 'name', 'phone', 'address']
  }
  
  if (customerType === 'existing') {
    return [...baseRequired, 'phone'] // Only phone to verify identity
  }
  
  return baseRequired
}

// Use in validation
const validateDynamicFields = (data: LeadFormData): boolean => {
  const requiredFields = getRequiredFields(data.customerType)
  
  for (const field of requiredFields) {
    if (!data[field as keyof LeadFormData]) {
      return false
    }
  }
  
  return true
}
```

### Progressive Disclosure Pattern

```typescript
// Show/hide sections based on completion
export function ProgressiveForm() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [currentStep, setCurrentStep] = useState(1)

  const completeStep = (step: number) => {
    setCompletedSteps(prev => [...prev, step])
    setCurrentStep(step + 1)
  }

  return (
    <div className="space-y-6">
      {/* Step 1: Customer Type */}
      <FormSection
        title="Step 1: Customer Type"
        isActive={currentStep === 1}
        isComplete={completedSteps.includes(1)}
      >
        <CustomerTypeSelection onComplete={() => completeStep(1)} />
      </FormSection>

      {/* Step 2: Contact Info (only if step 1 complete) */}
      {completedSteps.includes(1) && (
        <FormSection
          title="Step 2: Contact Information"
          isActive={currentStep === 2}
          isComplete={completedSteps.includes(2)}
        >
          <ContactInformation onComplete={() => completeStep(2)} />
        </FormSection>
      )}

      {/* Step 3: Project Details (only if step 2 complete) */}
      {completedSteps.includes(2) && (
        <FormSection
          title="Step 3: Project Details"
          isActive={currentStep === 3}
          isComplete={completedSteps.includes(3)}
        >
          <ProjectDetails onComplete={() => completeStep(3)} />
        </FormSection>
      )}
    </div>
  )
}
```

---

## ♿ Accessibility Considerations

### Screen Reader Support

```typescript
// Announce dynamic changes to screen readers
import { useEffect, useRef } from 'react'

export function AccessibleForm() {
  const announcementRef = useRef<HTMLDivElement>(null)

  const announce = (message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message
    }
  }

  useEffect(() => {
    if (formState.data.customerType) {
      announce(`Selected ${formState.data.customerType} customer. Additional fields are now visible.`)
    }
  }, [formState.data.customerType])

  return (
    <>
      {/* Screen reader announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
      
      {/* Form content */}
      <form>{/* ... */}</form>
    </>
  )
}
```

### Required Field Indicators

```typescript
// Clear visual and semantic indicators
<label htmlFor="email" className="block text-sm font-medium mb-1">
  Email Address
  <span className="text-red-500" aria-label="required">*</span>
  <span className="sr-only">(required)</span>
</label>
```

---

## 📊 Best Practices

### 1. **Clear User Feedback**
```typescript
// ✅ Good: Immediate, specific feedback
{formState.errors.email && (
  <p className="text-red-500 text-sm mt-1" role="alert">
    {formState.errors.email}
  </p>
)}

// ❌ Bad: Generic or delayed feedback
{hasError && <p>Error</p>}
```

### 2. **Preserve User Input**
```typescript
// ✅ Good: Don't clear fields when switching paths
const updateCustomerType = (type: 'new' | 'existing') => {
  setFormState(prev => ({
    ...prev,
    data: {
      ...prev.data, // Preserve existing data
      customerType: type,
    },
  }))
}

// ❌ Bad: Clearing all data
const updateCustomerType = (type: 'new' | 'existing') => {
  setFormState({ data: { customerType: type }, errors: {}, ... })
}
```

### 3. **Validation Timing**
```typescript
// ✅ Good: Validate on blur, clear errors on change
<input
  onBlur={() => validateField('email')}
  onChange={(e) => {
    updateField('email', e.target.value)
    clearError('email')
  }}
/>

// ❌ Bad: Validate on every keystroke (annoying)
<input
  onChange={(e) => {
    updateField('email', e.target.value)
    validateField('email') // Don't do this!
  }}
/>
```

---

## 🧪 Testing Patterns

### Test Conditional Logic

```typescript
// tests/LeadForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { LeadForm } from '@/components/LeadForm'

describe('LeadForm Conditional Logic', () => {
  it('shows additional fields for new customers', () => {
    render(<LeadForm />)
    
    // Select new customer
    fireEvent.click(screen.getByText('New Customer'))
    
    // Verify conditional fields appear
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  })

  it('shows warning when email missing for new customer', async () => {
    render(<LeadForm />)
    
    // Fill form without email
    fireEvent.click(screen.getByText('New Customer'))
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '5551234567' },
    })
    
    // Submit
    fireEvent.click(screen.getByText('Request Quote'))
    
    // Verify warning appears
    expect(screen.getByText(/email address recommended/i)).toBeInTheDocument()
  })
})
```

---

## 📚 Additional Resources

- **React Hook Form**: https://react-hook-form.com/ (Popular form library)
- **Zod Validation**: https://zod.dev/ (TypeScript-first validation)
- **Formik**: https://formik.org/ (Alternative form library)
- **WCAG Form Guidelines**: https://www.w3.org/WAI/tutorials/forms/

---

**These conditional form patterns provide professional, user-friendly experiences that adapt to different user needs while maintaining data integrity and accessibility!** 📋


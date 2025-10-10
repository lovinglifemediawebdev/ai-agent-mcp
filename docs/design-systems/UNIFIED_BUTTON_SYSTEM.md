# Unified Button System - Design System Pattern

**Version**: 1.0.0  
**Source**: HVAC Estimator Production Deployment  
**Status**: Production-Ready Pattern  
**Framework**: Multi-Framework Support (React, Vue, Angular, etc.)

---

## 🎯 Overview

A **scalable design system pattern** that allows global styling changes through a single configuration file. This pattern ensures brand consistency, accessibility, and maintainability across your entire application.

**Key Benefits**:
- ✅ Single source of truth for all button styling
- ✅ CSS custom properties for easy theming
- ✅ Mobile-first design with accessibility built-in
- ✅ Works with existing UI libraries
- ✅ Zero runtime JavaScript for styling

---

## 🏗️ Architecture

### Single Source of Truth Pattern

```
globals.css (or theme.css)
    ↓
CSS Custom Properties (Variables)
    ↓
Component Classes
    ↓
React/Vue/Angular Components
```

**Key Principle**: Change color scheme in ONE place → All buttons update automatically

---

## 💅 Implementation

### Step 1: Global CSS Variables

```css
/* globals.css or theme.css */

:root {
  /* Primary Brand Colors */
  --color-primary: #2563eb;          /* Blue-600 */
  --color-primary-hover: #1d4ed8;    /* Blue-700 */
  --color-primary-active: #1e40af;   /* Blue-800 */
  
  /* Secondary Brand Colors */
  --color-secondary: #7c3aed;        /* Violet-600 */
  --color-secondary-hover: #6d28d9;  /* Violet-700 */
  --color-secondary-active: #5b21b6; /* Violet-800 */
  
  /* Destructive Actions */
  --color-danger: #dc2626;           /* Red-600 */
  --color-danger-hover: #b91c1c;     /* Red-700 */
  --color-danger-active: #991b1b;    /* Red-800 */
  
  /* Success Actions */
  --color-success: #16a34a;          /* Green-600 */
  --color-success-hover: #15803d;    /* Green-700 */
  --color-success-active: #166534;   /* Green-800 */
  
  /* Neutral/Ghost Buttons */
  --color-neutral: #6b7280;          /* Gray-500 */
  --color-neutral-hover: #4b5563;    /* Gray-600 */
  --color-neutral-active: #374151;   /* Gray-700 */
  
  /* Text Colors */
  --color-text-primary: #ffffff;     /* White text on dark buttons */
  --color-text-secondary: #111827;   /* Dark text on light buttons */
  
  /* Spacing & Sizing */
  --button-padding-sm: 0.5rem 1rem;
  --button-padding-md: 0.75rem 1.5rem;
  --button-padding-lg: 1rem 2rem;
  
  --button-font-size-sm: 0.875rem;
  --button-font-size-md: 1rem;
  --button-font-size-lg: 1.125rem;
  
  --button-border-radius: 0.5rem;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 200ms ease-in-out;
}
```

### Step 2: Base Button Styles

```css
/* globals.css - Base Button Classes */

.btn-base {
  /* Reset default button styles */
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  /* Accessibility */
  outline: none;
  transition: all var(--transition-normal);
  
  /* Mobile-first touch targets (min 44x44px) */
  min-height: 44px;
  min-width: 44px;
  
  /* Border radius */
  border-radius: var(--button-border-radius);
  
  /* Prevent text selection */
  user-select: none;
  -webkit-user-select: none;
}

/* Focus states for accessibility */
.btn-base:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Disabled state */
.btn-base:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Size variants */
.btn-sm {
  padding: var(--button-padding-sm);
  font-size: var(--button-font-size-sm);
}

.btn-md {
  padding: var(--button-padding-md);
  font-size: var(--button-font-size-md);
}

.btn-lg {
  padding: var(--button-padding-lg);
  font-size: var(--button-font-size-lg);
}

/* Full width variant */
.btn-full {
  width: 100%;
}
```

### Step 3: Color Variants

```css
/* globals.css - Color Variants */

/* Primary Button */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.btn-primary:active:not(:disabled) {
  background-color: var(--color-primary-active);
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-text-primary);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-hover);
}

.btn-secondary:active:not(:disabled) {
  background-color: var(--color-secondary-active);
}

/* Danger Button */
.btn-danger {
  background-color: var(--color-danger);
  color: var(--color-text-primary);
}

.btn-danger:hover:not(:disabled) {
  background-color: var(--color-danger-hover);
}

.btn-danger:active:not(:disabled) {
  background-color: var(--color-danger-active);
}

/* Success Button */
.btn-success {
  background-color: var(--color-success);
  color: var(--color-text-primary);
}

.btn-success:hover:not(:disabled) {
  background-color: var(--color-success-hover);
}

.btn-success:active:not(:disabled) {
  background-color: var(--color-success-active);
}

/* Outline Variants */
.btn-outline-primary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline-primary:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
}

/* Ghost Button (subtle, no border) */
.btn-ghost {
  background-color: transparent;
  color: var(--color-neutral);
}

.btn-ghost:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--color-neutral-hover);
}
```

---

## 🎨 Component Usage

### React Implementation

```typescript
// components/Button.tsx
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost' | 'outline-primary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'btn-base',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
```

### Usage Examples

```typescript
// Example usage in components
import { Button } from '@/components/Button'

export function MyComponent() {
  return (
    <div className="space-y-4">
      {/* Primary button */}
      <Button variant="primary" size="md">
        Save Changes
      </Button>

      {/* Danger button */}
      <Button variant="danger" size="md">
        Delete Account
      </Button>

      {/* Full width button */}
      <Button variant="primary" size="lg" fullWidth>
        Continue
      </Button>

      {/* Disabled button */}
      <Button variant="primary" disabled>
        Loading...
      </Button>

      {/* Ghost button */}
      <Button variant="ghost" size="sm">
        Cancel
      </Button>

      {/* Outline button */}
      <Button variant="outline-primary" size="md">
        Learn More
      </Button>
    </div>
  )
}
```

---

## 🎨 Theme Customization

### Change Entire Color Scheme in One Place

```css
/* globals.css - Brand Update Example */

:root {
  /* Old brand colors */
  /* --color-primary: #2563eb; */
  
  /* New brand colors - just change these! */
  --color-primary: #8b5cf6;          /* Purple-500 */
  --color-primary-hover: #7c3aed;    /* Purple-600 */
  --color-primary-active: #6d28d9;   /* Purple-700 */
}

/* ALL buttons automatically update to new purple color! */
```

### Dark Mode Support

```css
/* globals.css - Dark Mode */

@media (prefers-color-scheme: dark) {
  :root {
    /* Adjust colors for dark mode */
    --color-primary: #60a5fa;        /* Lighter blue for dark backgrounds */
    --color-primary-hover: #3b82f6;
    --color-primary-active: #2563eb;
    
    --color-text-primary: #111827;   /* Dark text for colored buttons */
    --color-text-secondary: #f9fafb; /* Light text for dark buttons */
  }
}

/* Or manual dark mode toggle */
[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-primary-hover: #3b82f6;
  --color-primary-active: #2563eb;
}
```

---

## ♿ Accessibility Features

### Built-in Accessibility

```css
/* globals.css - Accessibility */

/* 1. Minimum touch target size (44x44px) */
.btn-base {
  min-height: 44px;
  min-width: 44px;
}

/* 2. Focus indicator for keyboard navigation */
.btn-base:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* 3. Disabled state that can't be interacted with */
.btn-base:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* 4. High contrast mode support */
@media (prefers-contrast: high) {
  .btn-base {
    border: 2px solid currentColor;
  }
}

/* 5. Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .btn-base {
    transition: none;
  }
}
```

### Loading States

```typescript
// components/Button.tsx - Loading state example
interface ButtonProps {
  loading?: boolean
  // ... other props
}

export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button disabled={loading} {...props}>
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {loading ? 'Loading...' : children}
    </button>
  )
}
```

---

## 📱 Mobile-First Design

### Responsive Button Sizes

```css
/* globals.css - Responsive sizing */

/* Mobile: Default to larger sizes for better touch targets */
.btn-responsive {
  padding: var(--button-padding-lg);
  font-size: var(--button-font-size-lg);
}

/* Tablet and up: Reduce to medium */
@media (min-width: 768px) {
  .btn-responsive {
    padding: var(--button-padding-md);
    font-size: var(--button-font-size-md);
  }
}

/* Desktop: Can use smaller if needed */
@media (min-width: 1024px) {
  .btn-responsive-sm {
    padding: var(--button-padding-sm);
    font-size: var(--button-font-size-sm);
  }
}
```

---

## 🔧 Advanced Patterns

### Icon Buttons

```typescript
// components/IconButton.tsx
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  label: string // For accessibility
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function IconButton({ icon, label, variant = 'ghost', size = 'md', ...props }: IconButtonProps) {
  return (
    <button
      className={`btn-base btn-${variant} btn-${size} btn-icon`}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  )
}

// Usage
import { TrashIcon } from '@heroicons/react/24/outline'

<IconButton 
  icon={<TrashIcon className="h-5 w-5" />}
  label="Delete item"
  variant="danger"
  onClick={handleDelete}
/>
```

### Button Groups

```css
/* globals.css - Button groups */

.btn-group {
  display: inline-flex;
  border-radius: var(--button-border-radius);
  overflow: hidden;
}

.btn-group > .btn-base {
  border-radius: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-group > .btn-base:first-child {
  border-radius: var(--button-border-radius) 0 0 var(--button-border-radius);
}

.btn-group > .btn-base:last-child {
  border-radius: 0 var(--button-border-radius) var(--button-border-radius) 0;
  border-right: none;
}
```

---

## 📊 Best Practices

### 1. **Consistent Variant Usage**
```typescript
// ✅ Good: Semantic variant names
<Button variant="danger">Delete</Button>
<Button variant="primary">Save</Button>

// ❌ Bad: Color-based names without meaning
<Button variant="red">Delete</Button>
<Button variant="blue">Save</Button>
```

### 2. **Always Provide Accessible Labels**
```typescript
// ✅ Good: Clear, descriptive text
<Button>Save Changes</Button>
<IconButton icon={<TrashIcon />} label="Delete item" />

// ❌ Bad: Unclear or missing labels
<Button>OK</Button>
<IconButton icon={<TrashIcon />} /> // Missing aria-label
```

### 3. **Use Loading States**
```typescript
// ✅ Good: Disabled during async operations
<Button loading={isSubmitting}>
  {isSubmitting ? 'Saving...' : 'Save Changes'}
</Button>

// ❌ Bad: No feedback during loading
<Button onClick={handleSubmit}>Save Changes</Button>
```

### 4. **Follow Size Guidelines**
- **Small (`sm`)**: Inline actions, compact UIs
- **Medium (`md`)**: Default for most actions
- **Large (`lg`)**: Primary CTAs, mobile-friendly

---

## 🎯 Integration with UI Libraries

### Tailwind CSS Integration

```typescript
// components/Button.tsx - Tailwind + Custom Properties
export function Button({ variant, size, children, ...props }: ButtonProps) {
  // Use Tailwind classes alongside custom button classes
  const classes = cn(
    'btn-base',
    `btn-${variant}`,
    `btn-${size}`,
    // Additional Tailwind utilities
    'shadow-sm hover:shadow-md',
    'transition-all duration-200',
    props.className
  )

  return <button className={classes} {...props}>{children}</button>
}
```

---

## 📚 Additional Resources

- **MDN Button Element**: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **CSS Custom Properties**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Material Design Buttons**: https://m3.material.io/components/buttons

---

**This unified button system provides a scalable, accessible, and maintainable foundation for your design system. Change your entire color scheme in seconds, maintain brand consistency, and ensure accessibility compliance!** 🎨


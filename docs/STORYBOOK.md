# Storybook Documentation

> **Layered UI Component Library — Storybook v10.5 Configuration**

---

## Overview

This project uses **Storybook 10.5** with the **Next.js Vite framework** (`@storybook/nextjs-vite`) for component-driven development, documentation, and visual testing. The setup is optimized for the Next.js 15 App Router architecture and integrates with the Layered UI design system.

### Key Capabilities

| Feature | Status | Configuration |
|---------|--------|---------------|
| Component Stories | ✅ | `../components/**/*.stories.tsx` |
| Auto-Docs (Docgen) | ✅ | `@storybook/addon-docs` |
| Accessibility Testing | ✅ | `@storybook/addon-a11y` |
| Visual Regression | ✅ | `@chromatic-com/storybook` |
| Next.js App Router | ✅ | `nextjs.appDirectory: true` |
| Static Asset Serving | ✅ | `staticDirs: ['../public']` |
| Dark/Light Theming | ✅ | Custom backgrounds parameter |

---

## Project Structure

```
.storybook/
├── main.ts          # Core configuration (stories, addons, framework)
├── preview.tsx      # Global decorators, parameters, themes
└── tsconfig.json    # TypeScript config for Storybook (if present)

components/
├── ui/              # Base UI components (shadcn-style)
│   ├── *.stories.tsx
│   └── *.stories.tsx
├── layered/         # Layered-specific component variants
└── ...              # Marketing, layout, animation components

stories/             # Legacy/alternative story location (if used)
```

---

## Configuration Files

### `.storybook/main.ts`

```typescript
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    // Story discovery pattern — colocated with components
    stories: [
        '../components/**/*.mdx',
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],

    // Addons for enhanced DX
    addons: [
        '@storybook/addon-a11y',    // Accessibility audit panel
        '@storybook/addon-docs',    // Auto-generated documentation
    ],

    // Framework adapter for Next.js App Router + Vite
    framework: '@storybook/nextjs',

    // Serve static assets from /public (images, fonts, etc.)
    staticDirs: ['../public'],
}

export default config
```

**Design Decisions:**
- **Vite-based builder** (`@storybook/nextjs-vite`) for faster HMR vs. Webpack
- **Colocated stories** (`../components/**/*.stories.tsx`) — single source of truth
- **Static asset serving** from `../public` ensures `/LayeredUI.png`, fonts, etc. resolve correctly
- **Minimal addon set** — a11y + docs cover 90% of needs; avoid bloat

---

### `.storybook/preview.tsx`

```tsx
import type { Preview } from '@storybook/nextjs'

// Global styles — Tailwind + CSS variables + design tokens
import '../app/globals.css'

const preview: Preview = {
    parameters: {
        // ArgTypes inference for color/date controls
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        // Enable Next.js App Router semantics in stories
        // Allows useRouter(), usePathname(), etc. without mocking
        nextjs: {
            appDirectory: true,
        },

        // Theme switching toolbar (light/dark)
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#0a0a0a' },
            ],
        },
    },
}

export default preview
```

**Critical Notes:**
- `nextjs.appDirectory: true` — **required** for App Router components using `next/navigation` hooks
- Global `globals.css` import — brings Tailwind, CSS variables, and design tokens into every story
- Background values match the design system's `--color-background` / `--color-foreground` tokens

---

## Writing Stories

### Standard Pattern (CSF3)

```tsx
// components/ui/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from 'storybook/test'

import { Button } from './button'

const meta = {
    title: 'ui/Button',           // Sidebar grouping: "ui/Button"
    component: Button,
    tags: ['autodocs'],           // Enable auto-docs page
    parameters: {
        layout: 'centered',       // Center in canvas
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'hero'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
        },
    },
    // Default args applied to all stories
    args: {
        children: 'Button',
        onClick: fn(),            // Action logger in Actions panel
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Named exports = individual stories
export const Default: Story = {
    args: { variant: 'default' },
}

export const Destructive: Story = {
    args: { variant: 'destructive' },
}

// Complex composition via render function
export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-3">
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="default">Default</Button>
            <Button {...args} size="lg">Large</Button>
        </div>
    ),
}
```

### ArgTypes Best Practices

| Pattern | Use Case |
|---------|----------|
| `control: 'select'` + `options` | Enum-like props (variant, size) |
| `control: 'boolean'` | Toggle props (disabled, checked) |
| `control: 'text'` | String props (placeholder, id) |
| `control: 'number'` | Numeric props (repeat, delay) |
| `control: 'object'` | Complex props (style, className) — avoid; use `render` instead |
| `table: { disable: true }` | Hide internal props from Controls panel |

### Render Functions vs. Args

| Approach | When to Use |
|----------|-------------|
| `args` | Simple prop variations — preferred for Controls panel interactivity |
| `render` | Composition, multiple components, conditional logic, complex children |
| `play` | User interaction testing (click, type, focus) — integrates with Vitest |

---

## Running Storybook

### Development

```bash
# Start dev server on port 6006
npm run storybook

# Or explicitly
npx storybook dev -p 6006
```

### Production Build

```bash
# Static build to storybook-static/
npm run build-storybook

# Output: storybook-static/index.html + assets
# Deploy to: Vercel, Netlify, Chromatic, S3 + CloudFront, etc.
```

### Chromatic (Visual Regression)

```bash
# Requires CHROMATIC_PROJECT_TOKEN
npx chromatic --project-token=<token>

# Or via GitHub Action (recommended)
# .github/workflows/chromatic.yml
```

---

## Addons & Extensions

### Installed Addons

| Addon | Purpose | Panel |
|-------|---------|-------|
| `@storybook/addon-a11y` | WCAG 2.1 AA audit (axe-core) | ♿ Accessibility |
| `@storybook/addon-docs` | Auto-docs from JSDoc + component analysis | 📖 Docs |
| `@storybook/addon-vitest` | Unit test results in Storybook | 🧪 Tests |
| `@storybook/addon-mcp` | Model Context Protocol for AI tools | — |

### Recommended Additions (Future)

```typescript
// .storybook/main.ts additions
addons: [
    // ...existing
    '@storybook/addon-designs',      // Figma embeds
    '@storybook/addon-interactions', // Play functions + test runner
    'storybook-dark-mode',           // Persisted theme toggle
    '@storybook/addon-viewport',     // Responsive testing toolbar
],
```

---

## Theming & Design Tokens

Storybook consumes the same **Tailwind v4 + CSS variable** design system as the Next.js app.

### Global Styles Injection

```tsx
// .storybook/preview.tsx
import '../app/globals.css'  // Single source of truth
```

This imports:
- Tailwind v4 `@import "tailwindcss"` + `@theme` directives
- CSS custom properties (`--color-*`, `--radius-*`, `--font-*`, etc.)
- `dark:` variant support via `class` strategy on `<html>`

### Theme Switching

The **Backgrounds** toolbar (top toolbar → 🎨 icon) toggles between:
- **Light**: `#ffffff` (maps to `--color-background` light)
- **Dark**: `#0a0a0a` (maps to `--color-background` dark)

**Note:** This only changes the canvas background. For true dark mode, components must use `dark:` Tailwind variants or CSS `color-scheme`.

---

## Next.js App Router Integration

### Why `nextjs.appDirectory: true`?

Without this flag, stories using `next/navigation` hooks (`useRouter`, `usePathname`, `useSearchParams`) throw:

```
Error: useRouter() must be used within a Next.js Router context
```

The flag wraps stories in a **Next.js App Router provider** that mocks the router context.

### Caveats

| Limitation | Workaround |
|------------|------------|
| No real routing | Use `play` functions for navigation testing |
| `next/image` unoptimized | Images render as `<img>` (acceptable for stories) |
| Server Components | Not supported — stories are client-only |

### Server Component Stories (Experimental)

If you need RSC stories, use `storybook/preview-api` with `renderToString` — but this project uses Client Components (`'use client'`) exclusively for UI components.

---

## Component Categories

### `/components/ui/*` — Base Primitives
Shadcn-style components with full variant coverage:
- `Button`, `Badge`, `Input`, `Label`, `Checkbox`, `RadioGroup`, `Switch`
- `Dialog`, `Accordion`, `Carousel`, `Select`, `Separator`, `ScrollArea`
- `Avatar`, `Card`, `Chart`, `Tooltip`, `HoverCard`, `Popover`
- `Marquee`, `BlurIn`, `FullWidthDivider`, `InfiniteSlider`

### `/components/layered/*` — Layered Variants
Extended variants with opinionated defaults:
- `LayeredButton`, `LayeredDialog`, `LayeredCard`, etc.

### `/components/motion-primitives/*` — Animation Components
- `AnimatedGroup`, `ProgressiveBlur`, `TextEffect`, `InfiniteSlider`

### Marketing / Layout
- `Hero*` headers, `TestimonialsSection`, `FAQSection`, `TemplatesSection`
- `SiteHeader`, `SiteFooter`, `Navbar`, `BlockPreview`

---

## Accessibility Testing

### Automated (a11y Addon)

The **Accessibility** panel runs **axe-core** on every story:
- **Violations** → Red, with element selector + WCAG criterion
- **Passes** → Green
- **Incomplete** → Yellow (manual review needed)

### Manual Checklist

- [ ] Keyboard navigation (Tab, Shift+Tab, Enter, Space, Escape, Arrows)
- [ ] Focus visible (`focus-visible:ring-*`)
- [ ] ARIA labels/descriptions on icon-only buttons
- [ ] Color contrast (4.5:1 normal, 3:1 large)
- [ ] Screen reader announcements (live regions, status)

---

## Visual Regression (Chromatic)

### Setup

1. Create project at [chromatic.com](https://chromatic.com)
2. Add `CHROMATIC_PROJECT_TOKEN` to CI secrets
3. Run `npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN`

### Workflow

```yaml
# .github/workflows/chromatic.yml
name: 'Chromatic'
on: [push, pull_request]
jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx chromatic --project-token=${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

### Baselines

- **Main branch** = accepted baselines
- **PR builds** = compare against main
- **Review UI** → Accept/deny changes per component

---

## CI/CD Integration

### GitHub Actions Example

```yaml
# .github/workflows/storybook.yml
name: Storybook CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npx tsc --noEmit

  storybook-build:
    runs-on: ubuntu-latest
    needs: [lint, typecheck]
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npm run build-storybook
      - uses: actions/upload-artifact@v4
        with:
          name: storybook-static
          path: storybook-static/
          retention-days: 7

  chromatic:
    needs: storybook-build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npx chromatic --project-token=${{ secrets.CHROMATIC_PROJECT_TOKEN }}
        env:
          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

---

## Troubleshooting

### Port 6006 Already in Use

```bash
# Find and kill process
lsof -ti:6006 | xargs kill -9

# Or use different port
npm run storybook -- -p 6007
```

### Module Resolution Errors (Radix, CVA, etc.)

```
Could not resolve @radix-ui/react-slot from .../badge.tsx
```

**Cause:** Package exports not compatible with Vite's `storybook` condition.

**Fix:** Ensure `package.json` has proper `exports` or add to `.storybook/main.ts`:

```typescript
// .storybook/main.ts
export default {
    // ...
    viteFinal: async (config) => {
        config.resolve = config.resolve || {}
        config.resolve.conditions = ['storybook', 'browser', 'import', 'module', 'default']
        return config
    },
}
```

### TypeScript Errors in Stories

- Stories use `satisfies Meta<typeof Component>` for type inference
- Ensure `tsconfig.json` includes `.storybook/` and `components/**/*.stories.tsx`
- Run `npx tsc --noEmit` to validate

### Dark Mode Not Working

1. Verify `globals.css` uses `@custom-variant dark (&:where(.dark, .dark *));`
2. Check `next-themes` provider wraps the app (not needed in Storybook — use Backgrounds toolbar)
3. Components must use `dark:` Tailwind classes or CSS `color-scheme: dark`

---

## Migration Notes

### From Storybook v7/v8

| Change | Action |
|--------|--------|
| `@storybook/react` → `@storybook/nextjs` | Update framework |
| `main.js` → `main.ts` | TypeScript config |
| `preview.js` → `preview.tsx` | TSX for decorators |
| `addons` array → `addons` in `main.ts` | Same location |
| `parameters.nextjs.appDirectory` | **New** — required for App Router |

### From Webpack to Vite

- Faster cold start (~3s → ~1s)
- Native ESM — no transpilation for modern syntax
- `viteFinal` replaces `webpackFinal` for config extension

---

## Performance Optimization

### Story Loading

- **Lazy compilation** — Stories compile on-demand in Vite
- **Story indexing** — `stories.json` generated at build time
- **Code splitting** — Each story = separate chunk

### Bundle Size

```bash
# Analyze storybook bundle
npm run build-storybook
npx vite-bundle-analyzer storybook-static
```

### Best Practices

1. **Minimize story count** — One comprehensive story > ten trivial ones
2. **Avoid heavy imports in stories** — Import inside `render` if needed
3. **Use `parameters.layout: 'centered'`** — Avoids full-page layout overhead
4. **Disable addons in CI** — `--disable-addons` for faster builds

---

## References

- [Storybook 10 Migration Guide](https://storybook.js.org/docs/migration-guide)
- [Next.js + Storybook](https://storybook.js.org/docs/frameworks/nextjs)
- [Vite Builder](https://storybook.js.org/docs/configure/builders/vite)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Auto-Docs](https://storybook.js.org/docs/writing-docs/autodocs)
- [Accessibility Testing](https://storybook.js.org/docs/addons/a11y)
- [Chromatic](https://www.chromatic.com/docs)
- [Component Story Format 3](https://storybook.js.org/docs/api/csf)

---

*Generated for Layered UI v0.1.0 — Last updated: 2026-09-11*
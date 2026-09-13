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

## Advanced Patterns

### Interaction Testing with Play Functions

Use `play` functions for user interaction testing — integrates with **Vitest** via `@storybook/addon-vitest` and the **Interactions panel**.

```tsx
// components/ui/dialog.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs'
import { within, userEvent } from 'storybook/test'
import { expect } from 'vitest'

import { Button } from './button'
import { Dialog, DialogTrigger, DialogContent } from './dialog'

const meta = {
    title: 'ui/Dialog',
    component: Dialog,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const OpenAndClose: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <p>Dialog content here</p>
                <Button id="close-btn" variant="ghost">Close</Button>
            </DialogContent>
        </Dialog>
    ),
    // Interaction test — runs in Storybook UI + Vitest
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const openButton = canvas.getByRole('button', { name: /open dialog/i })
        const closeButton = canvas.getByRole('button', { name: /close/i })

        await userEvent.click(openButton)
        await expect(canvas.getByRole('dialog')).toBeInTheDocument()

        await userEvent.click(closeButton)
        await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
    },
}
```

**Run interaction tests:**
```bash
# In Storybook UI → Interactions panel
# Or headless via Vitest
npx vitest run --project=storybook
```

### Vitest Integration (`@storybook/addon-vitest`)

Configure in `.storybook/main.ts`:

```typescript
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    // ...
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-vitest',  // Add this
    ],
    // Vitest workspace config
    viteFinal: async (config) => {
        config.test = {
            workspace: [
                {
                    extends: true,
                    test: {
                        name: 'storybook',
                        browser: {
                            enabled: true,
                            provider: 'playwright',
                            headless: true,
                            instances: [{ browser: 'chromium' }],
                        },
                        include: ['**/*.stories.tsx'],
                    },
                },
            ],
        }
        return config
    },
}
```

**Benefits:**
- Run `play` functions in CI without browser UI
- Component-level unit tests alongside stories
- Shared test utilities (`userEvent`, `within`, `expect`)

### Custom Decorators for Providers

Wrap stories with context providers (theme, auth, i18n, etc.):

```tsx
// .storybook/preview.tsx
import type { Preview, Decorator } from '@storybook/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { ReactNode } from 'react'

// Global decorator for all stories
const withThemeProvider: Decorator = (Story) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
    </ThemeProvider>
)

// Per-story decorator for specific contexts
export const decorators: Decorator[] = [withThemeProvider]

// Or apply to specific stories via parameters
const preview: Preview = {
    decorators: [withThemeProvider],
    parameters: {
        // ...
    },
}
```

**Advanced: Multiple theme contexts**

```tsx
// .storybook/preview.tsx
import { ThemeProvider } from '@/components/theme-provider'

export const decorators = [
    (Story) => (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen">
                <Story />
            </div>
        </ThemeProvider>
    ),
]

// In story — override theme per story
export const DarkMode: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider attribute="class" defaultTheme="dark">
                <Story />
            </ThemeProvider>
        ),
    ],
}
```

---

## MDX Documentation

Write long-form documentation alongside stories using **MDX** (Markdown + JSX).

### Component Documentation Page

```mdx
<!-- components/ui/Button.mdx -->
import { Meta, Title, Primary, Canvas, ArgsTable } from '@storybook/addon-docs'
import { Button } from './button'
import * as ButtonStories from './button.stories'

<Meta title="ui/Button" component={Button} />

# Button

A versatile button component with multiple variants, sizes, and states.

## Design Principles

- **Consistent API** — Follows Radix UI patterns with `asChild` polymorphism
- **Accessible by default** — Focus management, ARIA attributes, keyboard support
- **Composable** — Works with `Slot` for rendering as `<a>`, `<Link>`, etc.

## Variants

<Canvas>
    <Primary story={ButtonStories.AllVariants} />
</Canvas>

## API Reference

<ArgsTable story={ButtonStories.Default} />

## Usage Examples

### As a Link (Next.js)

```tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

<Button asChild>
    <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

### Loading State

```tsx
<Button disabled aria-busy="true">
    <Loader className="mr-2 h-4 w-4 animate-spin" />
    Processing...
</Button>
```

## Accessibility

- `type="button"` by default (prevents form submission)
- `aria-disabled` when disabled
- Focus ring visible via `focus-visible:ring-*`
```

### Design System Overview Page

```mdx
<!-- docs/design-system.mdx -->
import { Meta, Title } from '@storybook/addon-docs'
import { Canvas } from '@storybook/addon-docs/blocks'

<Meta title="Design System/Overview" />

# Layered UI Design System

## Color Palette

<Canvas>
    <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-primary text-primary-foreground rounded">Primary</div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded">Secondary</div>
        <div className="p-4 bg-destructive text-destructive-foreground rounded">Destructive</div>
        <div className="p-4 bg-muted text-muted-foreground rounded">Muted</div>
    </div>
</Canvas>

## Typography

<Canvas>
    <div className="space-y-4">
        <h1 className="text-4xl font-bold">Heading 1</h1>
        <h2 className="text-3xl font-semibold">Heading 2</h2>
        <h3 className="text-2xl font-medium">Heading 3</h3>
        <p className="text-base">Body text — Lorem ipsum dolor sit amet.</p>
        <p className="text-sm text-muted-foreground">Small text — Secondary information.</p>
    </div>
</Canvas>

## Spacing Scale

<Canvas>
    <div className="flex items-end gap-4 h-20">
        {[
            '0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'
        ].map((space) => (
            <div key={space} className="w-4 bg-primary rounded-t" style={{ height: `var(--spacing-${space})` }} />
        ))}
    </div>
</Canvas>
```

---

## Storybook Test Runner

Run stories as **browser tests** with Playwright — catches visual + interaction regressions.

### Setup

```bash
npm i -D @storybook/test-runner playwright
npx playwright install --with-deps chromium
```

### Configuration

```json
// package.json
{
  "scripts": {
    "test:storybook": "test-storybook --url http://localhost:6006"
  }
}
```

### Custom Test Matchers

```typescript
// .storybook/test-runner.ts
import { test, expect } from '@storybook/test-runner'

test('all stories render without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text())
    })
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto('/iframe.html?id=ui-button--default')
    await expect(page.locator('button')).toBeVisible()

    expect(errors).toHaveLength(0)
})

test('dialog opens and closes via keyboard', async ({ page }) => {
    await page.goto('/iframe.html?id=ui-dialog--open-and-close')

    // Tab to trigger, press Enter
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await expect(page.locator('[role="dialog"]')).toBeVisible()

    // Press Escape to close
    await page.keyboard.press('Escape')
    await expect(page.locator('[role="dialog"]')).toBeHidden()
})
```

### CI Integration

```yaml
# .github/workflows/test-storybook.yml
name: Storybook Tests
on: [push, pull_request]
jobs:
  test-storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npm run build-storybook
      - run: npx http-server storybook-static -p 6006 &
      - run: sleep 5
      - run: npm run test:storybook
```

---

## Snapshot Testing

Capture component output for regression detection.

### Storyshots (Jest/Vitest)

```bash
npm i -D @storybook/addon-storyshots @storybook/test-runner
```

```typescript
// tests/storyshots.test.ts
import { initStoryshots } from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

initStoryshots({
    suite: 'Component Snapshots',
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006',
        getMatchOptions: () => ({ threshold: 0.02 }), // 2% pixel diff
    }),
})
```

### Inline Snapshots with Vitest

```tsx
// components/ui/button.stories.tsx
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Button } from './button'

test('Button renders with correct classes', () => {
    const { container } = render(<Button variant="default">Click</Button>)
    expect(container.firstChild).toMatchSnapshot()
})
```

---

## Internationalization (i18n) Testing

Test components across locales without changing app config.

### Per-Story Locale Override

```tsx
// components/ui/date-picker.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs'
import { DatePicker } from './date-picker'

const meta = {
    title: 'ui/DatePicker',
    component: DatePicker,
    parameters: {
        // Mock next-intl or similar
        nextjs: {
            locale: 'en-US',
        },
    },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const USEnglish: Story = {
    args: { locale: 'en-US' },
}

export const German: Story = {
    parameters: { nextjs: { locale: 'de-DE' } },
    args: { locale: 'de-DE' },
}

export const Japanese: Story = {
    parameters: { nextjs: { locale: 'ja-JP' } },
    args: { locale: 'ja-JP' },
}
```

### Global Locale Switcher Addon

```typescript
// .storybook/main.ts
addons: [
    // ...
    'storybook-addon-i18n', // Custom addon for locale toolbar
]
```

---

## Performance Profiling

### Story Render Timing

```tsx
// .storybook/preview.tsx
import type { Preview } from '@storybook/nextjs'

export const preview: Preview = {
    parameters: {
        // Measure render performance
        performance: {
            enabled: true,
            // Log to console in dev
            logger: (metrics) => {
                console.log('[Storybook Perf]', metrics)
            },
        },
    },
}
```

### Bundle Analysis

```bash
# Analyze storybook bundle size
npm run build-storybook
npx vite-bundle-analyzer storybook-static

# Output: interactive treemap of chunk sizes
# Look for: duplicate deps, large components, unused code
```

### Lazy Loading Heavy Stories

```tsx
// Heavy component — lazy load to avoid blocking story index
import { lazy, Suspense } from 'react'

const HeavyChart = lazy(() => import('./chart').then((m) => ({ default: m.Chart })))

export const HeavyChartStory: Story = {
    render: () => (
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted" />}>
            <HeavyChart data={largeDataset} />
        </Suspense>
    ),
}
```

---

## Design System Documentation Patterns

### Component Status Badges

```tsx
// components/ui/button.stories.tsx
const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {
        // Custom parameter for design system status
        designSystem: {
            status: 'stable', // 'stable' | 'beta' | 'deprecated' | 'experimental'
            version: '2.1.0',
            owner: '@design-team',
            figmaUrl: 'https://figma.com/file/.../Button',
            jiraTicket: 'DS-123',
        },
    },
} satisfies Meta<typeof Button>
```

### Usage Guidelines in Docs

```mdx
<!-- components/ui/Button.mdx -->
import { Meta } from '@storybook/addon-docs'

<Meta title="ui/Button" />

# Button

## When to Use

| Scenario | Recommended Variant |
|----------|---------------------|
| Primary action | `default` |
| Destructive action | `destructive` |
| Secondary action | `secondary` or `outline` |
| Tertiary/Subtle action | `ghost` |
| Navigation link | `link` (with `asChild`) |
| Marketing CTA | `hero` |

## Do's and Don'ts

✅ **Do**
- Use `asChild` with Next.js `<Link>` for navigation
- Pair with `Loader` for async actions
- Set `type="submit"` in forms

❌ **Don't**
- Use `variant="default"` for every button
- Disable without `aria-busy` or loading indicator
- Nest interactive elements (`<a>` inside `<button>`)
```

---

## Custom Addons (Advanced)

Build project-specific addons for team workflows.

### Example: Design Token Inspector

```typescript
// .storybook/addons/design-tokens/panel.tsx
import { useAddonState } from '@storybook/api'
import { AddonPanel } from '@storybook/components'

export const DesignTokensPanel = () => {
    const [tokens, setTokens] = useAddonState('design-tokens', {})

    // Extract CSS custom properties from document
    const cssVars = Array.from(document.styleSheets)
        .flatMap((sheet) => {
            try {
                return Array.from(sheet.cssRules || [])
            } catch {
                return []
            }
        })
        .filter((rule): rule is CSSStyleRule => rule.type === 1)
        .flatMap((rule) => Array.from(rule.style))
        .filter((prop) => prop.startsWith('--color-') || prop.startsWith('--spacing-'))

    return (
        <AddonPanel>
            <h3>Design Tokens</h3>
            <dl className="grid gap-2">
                {cssVars.map((prop) => (
                    <div key={prop} className="flex items-center gap-2">
                        <dt className="font-mono text-xs">{prop}</dt>
                        <dd className="font-mono text-xs flex-1">
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '1rem',
                                    height: '1rem',
                                    backgroundColor: `var(${prop})`,
                                    border: '1px solid var(--border)',
                                }}
                            />
                            <code>{getComputedStyle(document.documentElement).getPropertyValue(prop).trim()}</code>
                        </dd>
                    </div>
                ))}
            </dl>
        </AddonPanel>
    )
}
```

Register in `.storybook/main.ts`:

```typescript
export default {
    // ...
    addons: [
        // ...
        './.storybook/addons/design-tokens/panel.tsx',
    ],
}
```

---

## Maintenance Checklist

### Monthly

- [ ] Update Storybook + addons to latest patch
- [ ] Review Chromatic baselines — accept intentional changes
- [ ] Audit story coverage vs. component inventory
- [ ] Check bundle size trends

### Quarterly

- [ ] Major version upgrade (test in branch first)
- [ ] Review addon relevance — remove unused
- [ ] Update documentation for new patterns
- [ ] Performance benchmark (cold start, HMR)

### On Component Change

- [ ] Add/update stories for new props/variants
- [ ] Verify a11y panel passes
- [ ] Run interaction tests (`play` functions)
- [ ] Update MDX docs if API changed

---

## Quick Reference Card

| Task | Command |
|------|---------|
| Start dev server | `npm run storybook` |
| Build static | `npm run build-storybook` |
| Type-check stories | `npx tsc --noEmit -p .storybook/tsconfig.json` |
| Run a11y audit | Open ♿ panel in Storybook UI |
| Run interaction tests | `npx vitest run --project=storybook` |
| Visual regression | `npx chromatic --project-token=$TOKEN` |
| Analyze bundle | `npx vite-bundle-analyzer storybook-static` |
| Test runner | `npm run test:storybook` |

---

*Generated for Layered UI v0.1.0 — Last updated: 2026-09-11*
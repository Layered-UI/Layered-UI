# Layered UI Architecture

Layered UI is a Next.js App Router application that serves three product surfaces from one repository:

- A marketing and documentation site for the Layered UI brand.
- A browsable block catalog with live previews, source code, and copy/install actions.
- A shadcn registry endpoint surface through static JSON payloads in `public/r`.

The architecture is intentionally repository-first. Blocks are authored as real Next.js preview routes, documented through catalog metadata, and packaged for external installation through shadcn registry JSON.

## Architectural Goals

- Keep every block preview executable in the local app so designers and engineers can validate real behavior before publishing.
- Keep the registry output simple and static so shadcn clients, MCP clients, and deployment CDNs can fetch blocks without an application API layer.
- Use App Router static generation for category pages so the catalog remains fast, cacheable, and cheap to host.
- Keep shared primitives in `components/ui` and shared helpers in `lib` so registry blocks can reference predictable shadcn-compatible building blocks.
- Make installation commands deterministic by deriving block names from category and title metadata.

## System Context

```text
Developer / visitor
        |
        v
Next.js App Router site
        |
        +-- Marketing pages and docs
        +-- Category pages generated from data/blocks.ts
        +-- Preview routes under app/preview/*
        +-- Snippet routes under app/snippets/*
        |
        v
Static assets and registry JSON
        |
        +-- public/r/{block-name}.json
        +-- public assets, templates, service worker
        |
        v
shadcn CLI / MCP clients / external projects
```

## Runtime Architecture

### App Shell

`app/layout.tsx` defines the global application shell. It configures metadata, fonts, theme support, analytics, speed insights, Google Analytics, and service worker registration through `ServiceWorkerInit`.

The app shell keeps global concerns out of block previews. Individual preview pages can focus on block composition while inheriting the same styling foundation and theme context as the catalog.

### Marketing Surface

`app/page.tsx` composes the public landing page from `SiteHeader`, `Hero2`, `HomeSections`, and `SiteFooter`. Supporting pages such as `app/doc/page.tsx`, `app/templates/page.tsx`, and `app/changelog/page.tsx` extend this product surface.

Marketing components live mostly in `components`, `components/marketing`, and `components/LayeredUI`. These are product-site components, not automatically installable registry blocks unless referenced by registry metadata.

### Catalog Surface

`app/[category]/page.tsx` is the dynamic catalog route. It:

- Reads available categories from `data/blocks.ts`.
- Generates static params from the category list.
- Filters blocks by route category.
- Resolves preview source code from disk on the server.
- Renders each block through `components/BlockPreview.tsx`.

This keeps the catalog data source small and explicit. Adding a new visible catalog block means adding preview code and adding a matching metadata entry in `data/blocks.ts`.

### Preview Surface

`app/preview/**/page.tsx` contains isolated block implementations. These routes serve two purposes:

- They render inside the catalog iframe for live preview.
- They act as source inputs for registry items and code display.

Preview routes should remain self-contained enough to be copied into consuming projects, while still using shared UI primitives when those primitives are declared in registry metadata.

## Data And Registry Flow

```text
app/preview/<category>/<variant>/page.tsx
        |
        +-- referenced by data/blocks.ts for catalog display
        |
        +-- referenced by registry.json for shadcn build input
        |
        v
public/r/<block-name>.json
        |
        v
shadcn CLI installs target files into a consuming app
```

### Catalog Metadata

`data/blocks.ts` is the catalog index. Each block entry defines:

- `slug`: the public block family.
- `title`: the variant label, usually a word such as `one` or `two`.
- `category`: the route and catalog grouping.
- `preview`: the iframe route rendered by `BlockPreview`.
- `code`: a lazy server-side file read of the preview source.
- `relatedCode`: optional extra source snippets.

The `categories` export is derived from block metadata and is used for static route generation.

### Registry Metadata

`registry.json` is the shadcn registry build manifest. It describes installable items, registry dependencies, package dependencies, source paths, and target paths. The generated or published registry payloads are stored under `public/r`.

The registry has a different responsibility from `data/blocks.ts`:

- `data/blocks.ts` controls what the website can browse and display.
- `registry.json` controls what external projects can install.
- `public/r/*.json` is the static delivery format consumed by shadcn and MCP workflows.

Because these surfaces are separate, maintainers should update both catalog metadata and registry metadata when a block should be both browsable and installable.

## Component Architecture

### Shared UI Primitives

`components/ui` contains shadcn/Radix-style primitives such as buttons, cards, dialogs, badges, inputs, selects, and tooltips. These components provide the baseline interaction and styling APIs used across the product site and registry blocks.

Keep these primitives generic. Product-specific layout, copy, or visual decisions should live in higher-level components or block preview files.

### Catalog Preview Component

`components/BlockPreview.tsx` is the main interactive catalog component. It owns:

- Preview/code mode switching.
- Lazy iframe loading with `IntersectionObserver`.
- Iframe height measurement and local caching.
- Responsive viewport controls for mobile, tablet, and desktop preview widths.
- CLI command generation and copy actions.
- Code display through `components/code-block.tsx`.
- "Open in v0" handoff metadata.

This component is intentionally client-side because it coordinates browser APIs, iframe measurement, clipboard interaction, local storage, and animation state.

### Code Rendering

`components/code-block.tsx` highlights TSX with Shiki in the browser and renders the result through `hast-util-to-jsx-runtime`. This avoids maintaining a separate server route for highlighted code and keeps the preview UI responsive after the page shell has loaded.

### Hooks And Utilities

- `hooks/useClipboard.ts` centralizes clipboard behavior and analytics event metadata.
- `lib/utils.ts` contains shared formatting and class-name helpers.
- `lib/serviceWorker.ts` handles preview asset caching support.

## Routing Model

| Route | Purpose |
| :--- | :--- |
| `/` | Marketing homepage |
| `/doc` | Project documentation page |
| `/templates` | Template showcase |
| `/changelog` | Product updates |
| `/:category` | Static block category pages generated from `data/blocks.ts` |
| `/preview/:category/:variant` | Isolated block preview routes |
| `/examples/**` | Full-page examples built from blocks |
| `/snippets/**` | Smaller reusable snippet examples |
| `/r/:name.json` | Static registry payloads served from `public/r` |

## Build And Delivery

The project uses standard npm scripts:

- `npm run dev`: starts local development with Next.js Turbopack.
- `npm run build`: builds the production Next.js app.
- `npm run start`: serves the production build.
- `npm run lint`: runs ESLint.
- `npm run registry:build`: runs `shadcn build` to produce registry payloads.

Deployment is optimized for static and cache-friendly delivery. Category pages are forced static and revalidated hourly. Registry files are static assets, which makes them simple to serve from Vercel or any static-compatible host.

## Quality Attributes

### Performance

- Category routes are statically generated.
- Preview iframes lazy-load before they enter the viewport.
- Iframe heights are cached locally for smoother repeat browsing.
- Registry payloads are static JSON files.
- Vercel Speed Insights and Analytics are wired into the root layout.

### Accessibility

- UI primitives are based on Radix/shadcn patterns.
- Catalog headings include screen-reader-only context.
- Toolbar actions use recognizable icons and tooltip affordances.
- Blocks should preserve semantic HTML and keyboard interaction when added.

### Maintainability

- Blocks are authored as real preview pages.
- Catalog metadata is explicit and easy to diff.
- Registry metadata declares dependencies close to each installable item.
- Shared UI primitives reduce repeated interaction code.

### Extensibility

New block categories can be added without changing routing code:

1. Add the preview route under `app/preview/<category>/<variant>/page.tsx`.
2. Add a block entry to `data/blocks.ts`.
3. Add or update an installable item in `registry.json`.
4. Run `npm run registry:build`.
5. Verify the category page, preview iframe, code tab, CLI command, and generated `public/r` payload.

## Ownership Boundaries

- `app/**`: routes, layouts, pages, preview surfaces, and examples.
- `components/ui/**`: generic UI primitives.
- `components/**`: product-site components, preview infrastructure, marketing sections, and shared visual elements.
- `data/**`: website catalog metadata.
- `public/r/**`: published registry payloads.
- `registry.json`: registry source manifest.
- `lib/**`: cross-cutting utilities and browser integration helpers.
- `hooks/**`: reusable React hooks.

## Operational Risks And Mitigations

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| Catalog metadata and registry metadata drift | A block may be visible but not installable, or installable but not visible | Update `data/blocks.ts` and `registry.json` together during block changes |
| Preview code depends on undeclared registry files | Consuming projects receive incomplete installs | Declare every required UI primitive, helper, asset, and package dependency in `registry.json` |
| Iframe previews fail to measure height | Catalog layout can show extra whitespace or clipped content | Keep the fallback minimum height and test dynamic blocks after animation/image changes |
| Client-only blocks use browser APIs during render | Hydration or SSR errors in preview routes | Guard browser APIs inside effects and keep preview pages compatible with Next.js rendering |
| Registry JSON grows with inline content | Review diffs become hard to reason about | Prefer file path references where possible and regenerate consistently |

## Senior Engineering Notes

- Treat `data/blocks.ts` as a product catalog contract, not a loose demo list. Naming consistency directly affects URLs and CLI commands.
- Treat `registry.json` as an external API contract. Changing names, target paths, or dependencies can break consumers.
- Favor small, composable preview pages. If a block requires complex helpers, include those helpers explicitly in the registry item.
- Keep analytics, service worker, and theme providers at the app shell. Blocks should not duplicate global providers.
- Before publishing new blocks, validate three user journeys: browsing the catalog, copying source, and installing via shadcn CLI.

## Credits

Layered UI is built by KingTroy125 and contributors.

The project stands on the work of the Next.js, React, Tailwind CSS, shadcn/ui, Radix UI, Lucide, Motion, Shiki, and Vercel ecosystems. Some source files also include local attribution comments where code was adapted from external projects, such as the Origin UI-inspired code block renderer.

See the root [README.md](./README.md), [LAYERED_REGISTRY.md](./LAYERED_REGISTRY.md), and [LICENCE.md](./LICENCE.md) for user-facing setup, registry usage, and licensing details.

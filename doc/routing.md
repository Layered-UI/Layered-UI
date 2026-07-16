# Routing Model

The **Routing Model** defines how Layered UI organizes, resolves, and serves every page within the application. Built on the **Next.js App Router**, the routing architecture is designed to be predictable, scalable, and metadata-driven.

Rather than manually configuring every page, Layered UI uses a combination of static routes, dynamic routes, and generated metadata to provide navigation across the marketing website, documentation, component catalog, preview system, and registry.

The routing structure reflects the architecture of the repository, making it easy for contributors to locate and extend functionality.

---

# Purpose

The routing architecture is designed to:

* Provide predictable URLs.
* Support static generation.
* Organize product surfaces.
* Separate application concerns.
* Enable metadata-driven navigation.
* Scale without requiring routing changes.

Each route should have a clear purpose and belong to a single architectural surface.

---

# High-Level Route Hierarchy

The application is divided into several routing groups.

```text
App Router
    │
    ├── Marketing Pages
    ├── Documentation
    ├── Component Catalog
    ├── Preview Routes
    ├── Examples
    ├── Snippets
    └── Registry Assets
```

Each group represents a different responsibility within the application.

---

# Repository Structure

The routing model closely mirrors the repository structure.

```text
app/
├── layout.tsx
├── page.tsx
├── doc/
├── templates/
├── changelog/
├── [category]/
├── preview/
├── examples/
└── snippets/
```

This consistency makes it easier for contributors to understand where new pages belong.

---

# Static Routes

Static routes represent pages whose paths never change.

Examples include:

| Route        | Purpose          |
| ------------ | ---------------- |
| `/`          | Landing page     |
| `/doc`       | Documentation    |
| `/templates` | Template gallery |
| `/changelog` | Release notes    |

These pages are statically generated whenever possible to maximize performance.

---

# Dynamic Category Routes

The component catalog is powered by dynamic routes.

```text
/[category]
```

Rather than creating a page for every category manually, categories are generated from catalog metadata.

Example routes:

```text
/buttons
/charts
/forms
/cards
/navigation
/tables
```

Each route displays every block belonging to its category.

---

# Category Generation

Category pages are generated using metadata exported from the catalog.

```text
data/
└── blocks.ts
```

During the build process the application:

1. Reads all registered blocks.
2. Extracts unique categories.
3. Generates static route parameters.
4. Builds category pages.
5. Pre-renders HTML.

This keeps routing synchronized with catalog metadata.

---

# Preview Routes

Preview routes expose executable component examples.

Structure:

```text
/preview/<category>/<variant>
```

Example:

```text
/preview/buttons/one
/preview/charts/bar
/preview/forms/login
```

Preview routes are intended for:

* live demonstrations,
* documentation,
* source rendering,
* registry generation.

These pages are not intended to act as application features.

---

# Example Routes

Examples demonstrate how multiple blocks work together.

Typical structure:

```text
/examples/dashboard
/examples/landing-page
/examples/admin
```

Unlike previews, examples represent complete pages or workflows composed from multiple reusable blocks.

---

# Snippet Routes

Snippet routes provide smaller reusable examples.

Typical structure:

```text
/snippets/buttons
/snippets/navigation
/snippets/forms
```

Snippets focus on isolated implementation patterns rather than complete components.

---

# Registry Assets

Installable registry files are served as static assets.

```text
/r/<component>.json
```

Example:

```text
/r/button-primary.json
/r/chart-basic.json
/r/dashboard-card.json
```

These routes are consumed by external tooling such as the shadcn CLI and other registry clients.

---

# Route Resolution

A typical request follows this lifecycle.

```text
Browser Request
       │
       ▼
Next.js Router
       │
       ▼
Resolve Route
       │
       ├── Static
       ├── Dynamic
       └── Asset
       │
       ▼
Render Layout
       │
       ▼
Render Page
```

The App Router automatically resolves the appropriate page based on the requested path.

---

# Shared Layout

Every route inherits the application's root layout.

```text
app/layout.tsx
        │
        ▼
Global Providers
        │
        ▼
Requested Route
```

This ensures that all pages share:

* global styling,
* typography,
* theme support,
* analytics,
* service worker registration,
* shared providers.

---

# Navigation

Navigation is metadata-driven wherever possible.

Examples include:

* category navigation,
* documentation navigation,
* breadcrumbs,
* sidebar menus,
* related blocks.

Centralizing navigation reduces duplication and simplifies future updates.

---

# Static Generation Strategy

Most routes should be generated at build time.

Candidates include:

* documentation,
* marketing pages,
* category pages,
* examples.

Interactive functionality is hydrated only where required.

This approach delivers:

* excellent performance,
* improved SEO,
* predictable deployments,
* lower infrastructure costs.

---

# Extending the Routing System

Adding a new route typically follows these steps.

## Static Page

1. Create a new folder under `app/`.
2. Add a `page.tsx` file.
3. Export metadata if required.

---

## Preview

1. Create a page under `app/preview/`.
2. Register the block in `data/blocks.ts`.
3. Update the registry if installable.

---

## Category

Categories are generated automatically after adding metadata.

No routing code needs to change.

---

# Design Principles

The routing model follows several architectural principles.

## Predictability

URLs should clearly communicate the purpose of a page.

---

## Metadata-Driven

Navigation should be generated from centralized metadata rather than duplicated configuration.

---

## Static by Default

Prefer static rendering whenever runtime behavior is unnecessary.

---

## Separation of Concerns

Marketing, catalog, previews, examples, and registry assets should remain independent routing surfaces.

---

## Scalability

Adding new pages or categories should not require modifying the routing architecture.

---

# Summary

The Routing Model provides the structural backbone of Layered UI.

By combining static pages, dynamic category routes, executable preview routes, and static registry assets under the Next.js App Router, the application delivers a scalable and maintainable navigation system. The routing architecture closely mirrors the repository structure, allowing contributors to extend the platform without introducing unnecessary complexity.

---

# Related Documents

* **Runtime Architecture** — Overall runtime organization.
* **Catalog Surface** — Metadata-driven component browsing.
* **Preview Surface** — Executable preview pages.
* **Data & Registry Flow** — How routing connects previews to registry assets.
* **Build & Delivery** — Application build pipeline and deployment strategy.

# Preview Surface

The **Preview Surface** is the execution layer of Layered UI. Every reusable block is implemented as a real Next.js page under the preview directory, allowing components to be rendered, tested, documented, and packaged from a single implementation.

Unlike screenshots or static examples, preview pages execute real React code inside the application, ensuring that every documented component behaves exactly as it would when installed into a consumer project.

The Preview Surface acts as the foundation for the catalog, source viewer, and registry.

---

# Purpose

The Preview Surface exists to:

* Render live component demonstrations.
* Provide executable examples.
* Supply source code for documentation.
* Serve as the source for registry items.
* Validate component behavior before publishing.
* Support responsive testing.

Every preview should represent a production-ready implementation.

---

# Architecture

The preview system sits between component development and distribution.

```text
Developer
     │
     ▼
Preview Component
     │
     ├── Live Preview
     ├── Source Code
     ├── Catalog
     └── Registry
```

A single preview component powers multiple product surfaces without duplication.

---

# Directory Structure

Preview pages live under the App Router.

```text
app/
└── preview/
    ├── buttons/
    │   ├── one/
    │   │   └── page.tsx
    │   └── two/
    │       └── page.tsx
    │
    ├── charts/
    ├── forms/
    ├── cards/
    └── ...
```

Each preview is a standalone route that can be rendered independently.

---

# Preview Responsibilities

Each preview page should:

* Render a complete example.
* Demonstrate component usage.
* Remain self-contained.
* Use shared UI primitives.
* Avoid unnecessary application logic.
* Be suitable for registry installation.

Preview pages are implementation examples—not application pages.

---

# Component Composition

Preview pages should compose reusable building blocks rather than embedding large amounts of logic.

```text
Preview Page
      │
      ├── UI Components
      ├── Hooks
      ├── Utilities
      └── Mock Data
```

Business logic should remain minimal.

---

# Data

Whenever possible, preview pages should use local mock data.

Examples include:

* chart datasets
* table rows
* user profiles
* dashboard statistics
* form defaults

Preview pages should avoid external API dependencies unless the component specifically demonstrates API integration.

---

# Relationship to the Catalog

The component catalog references preview routes through metadata.

```text
Preview Route
      │
      ▼
data/blocks.ts
      │
      ▼
Category Page
      │
      ▼
Block Preview
```

This separation keeps preview implementation independent from catalog presentation.

---

# Relationship to the Registry

Preview pages are also the source of registry packages.

```text
Preview Component
        │
        ▼
registry.json
        │
        ▼
Registry Builder
        │
        ▼
public/r/*.json
```

Because the registry references the same implementation, installed components remain synchronized with the catalog.

---

# Client vs Server Components

Preview pages should follow the same rendering model as production applications.

## Server Components

Use Server Components when:

* rendering static content,
* no browser APIs are required,
* fetching server-side data,
* improving bundle size.

---

## Client Components

Use Client Components only when required.

Typical examples include:

* animations
* drag-and-drop
* browser events
* clipboard interactions
* resize observers
* state-heavy interactions

Minimizing client components improves overall performance.

---

# Preview Guidelines

Every preview should:

* demonstrate a realistic use case,
* be visually complete,
* remain reusable,
* use semantic HTML,
* support keyboard interaction,
* support responsive layouts,
* avoid unnecessary dependencies.

The goal is to showcase how the component would be used in a real application.

---

# Responsive Design

Preview components should render correctly across multiple viewport sizes.

Typical layouts include:

* Mobile
* Tablet
* Desktop

Avoid hardcoded dimensions unless they are essential to the component being demonstrated.

---

# Accessibility

Every preview should demonstrate accessibility best practices.

Requirements include:

* semantic HTML
* accessible labels
* keyboard navigation
* focus management
* sufficient color contrast
* ARIA attributes where appropriate

Preview implementations should model recommended usage.

---

# Performance

Preview pages should remain lightweight.

Recommended practices include:

* reuse shared UI primitives,
* lazy-load heavy dependencies,
* avoid unnecessary state,
* minimize client-side JavaScript,
* avoid repeated computations.

Fast previews improve both documentation performance and developer experience.

---

# Creating a New Preview

Adding a preview follows a predictable workflow.

1. Create a new page under `app/preview/<category>/<variant>/page.tsx`.
2. Implement the component using shared UI primitives.
3. Add an entry to `data/blocks.ts`.
4. Register the component in `registry.json`.
5. Generate registry assets.
6. Verify the preview, source viewer, and installation workflow.

This workflow ensures that every new block becomes available throughout the platform.

---

# Common Pitfalls

Avoid the following:

* Embedding application-specific business logic.
* Using undeclared dependencies.
* Relying on external APIs.
* Hardcoding viewport sizes.
* Duplicating shared components.
* Adding unnecessary client-side rendering.
* Referencing files not included in the registry.

Keeping previews self-contained improves portability and simplifies maintenance.

---

# Design Principles

The Preview Surface follows several guiding principles.

## Build Once

Every preview should serve as the single implementation for documentation, catalog browsing, and registry distribution.

## Demonstrate Real Usage

Examples should represent realistic production scenarios rather than artificial demonstrations.

## Keep Components Portable

Preview implementations should be easy to copy into external projects with minimal changes.

## Prefer Composition

Complex behavior should be assembled from reusable components rather than implemented directly inside preview pages.

---

# Summary

The Preview Surface is the execution layer of Layered UI.

By implementing every block as a real Next.js page, the platform ensures that documentation, live previews, source code, and registry packages all originate from a single implementation. This repository-first approach minimizes duplication, improves consistency, and provides developers with accurate, production-ready examples.

---

# Related Documents

* **Catalog Surface** — How preview pages are discovered and presented.
* **Data & Registry Flow** — How previews become installable registry packages.
* **Component Architecture** — Shared components and reusable infrastructure.
* **Routing Model** — How preview routes integrate with the App Router.

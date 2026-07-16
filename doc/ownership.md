# Ownership Boundaries

Ownership boundaries define the responsibilities of every major directory, module, and configuration file within the Layered UI repository.

As the project grows, clear ownership becomes essential for maintaining a consistent architecture, reducing coupling, and preventing functionality from being implemented in multiple locations.

This document establishes architectural contracts that contributors should follow when adding new features or refactoring existing code.

---

# Purpose

Ownership boundaries are designed to:

* Define clear architectural responsibilities.
* Prevent duplication.
* Reduce coupling between modules.
* Simplify onboarding.
* Improve maintainability.
* Encourage predictable project organization.

Every file should have a logical home and every directory should have a well-defined purpose.

---

# Repository Overview

The repository is organized into several architectural domains.

```text
Layered UI
│
├── app/
├── components/
├── hooks/
├── lib/
├── data/
├── public/
├── styles/
├── registry.json
├── package.json
└── docs/
```

Each directory owns a specific responsibility and should avoid taking on unrelated concerns.

---

# Ownership Map

| Area             | Owns                                | Does Not Own              |
| ---------------- | ----------------------------------- | ------------------------- |
| `app/`           | Routes, layouts, pages              | Shared UI components      |
| `components/`    | Reusable application components     | Route definitions         |
| `components/ui/` | Generic UI primitives               | Product-specific layouts  |
| `hooks/`         | Reusable React hooks                | Rendering UI              |
| `lib/`           | Utilities and shared infrastructure | Business logic            |
| `data/`          | Catalog metadata                    | Component implementations |
| `public/`        | Static assets                       | Source code               |
| `registry.json`  | Registry configuration              | Catalog navigation        |
| `docs/`          | Technical documentation             | Runtime application code  |

These boundaries provide a clear separation of responsibilities across the project.

---

# Application Layer (`app/`)

The `app/` directory owns the application's routing structure.

Responsibilities include:

* layouts
* pages
* route handlers
* metadata
* preview routes
* examples
* documentation pages

The application layer should compose reusable components rather than implement reusable UI itself.

## Guidelines

✅ Responsible for:

* page composition
* route configuration
* server components
* route-level metadata

❌ Avoid:

* reusable business components
* duplicated UI primitives
* shared utility functions

---

# Shared Components (`components/`)

The `components/` directory contains reusable application-level components.

Examples include:

* navigation
* footers
* block preview
* code viewer
* marketing sections
* layout components

These components may depend on UI primitives but should not depend on route implementations.

---

# UI Primitives (`components/ui/`)

This directory owns the reusable design system.

Typical components include:

```text
components/ui/
├── button.tsx
├── card.tsx
├── dialog.tsx
├── input.tsx
├── badge.tsx
└── ...
```

These components should remain:

* generic,
* reusable,
* accessible,
* framework-independent where possible.

They should never include application-specific business logic.

---

# Hooks (`hooks/`)

The `hooks/` directory owns reusable React hooks.

Examples include:

```text
hooks/
├── useClipboard.ts
├── useMediaQuery.ts
├── useTheme.ts
└── ...
```

Hooks should encapsulate behavior rather than presentation.

They should not render JSX.

---

# Utilities (`lib/`)

The `lib/` directory owns reusable infrastructure.

Examples include:

* helper functions,
* formatting,
* service worker logic,
* analytics,
* utility classes.

Utilities should be composable and broadly reusable.

Avoid embedding UI concerns inside utility modules.

---

# Metadata (`data/`)

The `data/` directory owns structured application metadata.

Typical examples include:

* catalog definitions,
* navigation,
* categories,
* documentation metadata.

Metadata should remain declarative.

It should never execute application logic.

---

# Static Assets (`public/`)

The `public/` directory owns files served directly by the web server.

Examples include:

* images,
* icons,
* fonts,
* registry JSON,
* robots.txt,
* sitemap.xml.

Static assets should never contain application logic.

---

# Registry Configuration (`registry.json`)

The registry manifest owns installation metadata.

Responsibilities include:

* installable items,
* dependencies,
* package requirements,
* target files,
* registry metadata.

It should not duplicate catalog metadata unless required by the registry specification.

---

# Documentation (`docs/`)

Documentation owns architectural knowledge.

Examples include:

* architecture
* getting started
* registry documentation
* contributor guides
* API references

Documentation should explain implementation rather than duplicate source code.

---

# Dependency Rules

Dependencies should always flow downward.

```text
Pages
│
▼
Application Components
│
▼
UI Components
│
▼
Utilities
```

Lower layers should never depend on higher-level layers.

For example:

* `components/ui/` should not import from `app/`.
* `lib/` should not depend on feature components.
* `hooks/` should not depend on page implementations.

This directional flow keeps the architecture modular.

---

# Adding New Code

Before adding a file, contributors should ask:

1. Is this reusable?
2. Is this page-specific?
3. Does this belong in the design system?
4. Is this metadata?
5. Is this infrastructure?
6. Is this documentation?

Choosing the correct location early reduces future refactoring.

---

# Common Anti-Patterns

Avoid the following architectural mistakes:

### Duplicated Components

Creating multiple implementations of the same UI.

---

### Utility Creep

Adding unrelated helper functions into a generic utility file.

---

### Business Logic in UI Primitives

Embedding application-specific behavior inside reusable components.

---

### Circular Dependencies

Allowing modules to depend on each other across architectural layers.

---

### Route Logic Inside Shared Components

Shared components should remain independent of specific application routes.

---

# Code Review Checklist

Architectural reviews should verify:

* Does the new file belong in the correct directory?
* Does it duplicate existing functionality?
* Does it violate dependency direction?
* Can it be reused elsewhere?
* Is it documented appropriately?
* Does it maintain clear ownership?

Ownership boundaries should be enforced during code reviews to preserve long-term maintainability.

---

# Design Principles

The ownership model follows several principles.

## Single Responsibility

Every directory owns one architectural concern.

---

## Clear Boundaries

Responsibilities should be obvious from the repository structure.

---

## Loose Coupling

Higher-level features should compose lower-level modules without tightly coupling them.

---

## High Cohesion

Related functionality should remain grouped together.

---

## Predictability

Contributors should immediately know where new code belongs.

---

# Summary

Ownership boundaries provide the organizational foundation of the Layered UI repository.

By assigning clear responsibilities to every architectural layer, the project minimizes duplication, reduces coupling, and improves maintainability. As the platform grows, these boundaries ensure that contributors can extend the codebase confidently while preserving a clean, scalable architecture.

---

# Related Documents

* **Component Architecture** — Organization of reusable components.
* **Routing Model** — Responsibilities of the application layer.
* **Data & Registry Flow** — Ownership of metadata and registry definitions.
* **Quality Attributes** — Architectural qualities reinforced by clear ownership.
* **Operational Risks** — Risks associated with violating architectural boundaries.

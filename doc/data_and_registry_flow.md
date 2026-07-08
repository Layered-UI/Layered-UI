# Data & Registry Flow

The **Data & Registry Flow** defines how Layered UI transforms a single preview implementation into a discoverable catalog item and an installable registry package.

Rather than maintaining separate implementations for documentation, previews, and distribution, the platform uses a metadata-driven workflow where every block follows the same publishing pipeline.

This approach ensures consistency between what developers browse, what they preview, and what they ultimately install.

---

# Purpose

The data and registry architecture is designed to:

* Maintain a single source of truth.
* Keep catalog metadata explicit.
* Generate installable registry packages.
* Synchronize documentation with implementation.
* Eliminate duplicate component definitions.
* Simplify publishing.

Every block follows the same lifecycle regardless of its complexity.

---

# System Overview

At a high level, the publishing pipeline looks like this:

```text
Preview Component
        │
        ▼
Catalog Metadata
(data/blocks.ts)
        │
        ▼
Component Catalog
        │
        ├──────────────┐
        │              │
        ▼              ▼
Source Viewer    Registry Manifest
                       │
                       ▼
                 registry.json
                       │
                       ▼
             Registry Build Process
                       │
                       ▼
            public/r/<component>.json
                       │
                       ▼
        shadcn CLI / External Projects
```

Each stage has a clearly defined responsibility.

---

# Core Data Sources

The architecture revolves around three primary data sources.

| Source           | Responsibility           |
| ---------------- | ------------------------ |
| `app/preview/**` | Component implementation |
| `data/blocks.ts` | Catalog metadata         |
| `registry.json`  | Registry definitions     |

Together, these files describe everything required to browse, preview, and install a block.

---

# Preview Components

Preview pages contain the actual implementation.

```text
app/
└── preview/
    └── category/
        └── variant/
            └── page.tsx
```

The preview serves as:

* the live demonstration,
* the source displayed in documentation,
* the implementation referenced by the registry.

It should never exist in multiple copies.

---

# Catalog Metadata

The catalog is driven by a centralized metadata file.

```text
data/
└── blocks.ts
```

Each entry defines how a block appears within the website.

Typical metadata includes:

* slug
* title
* category
* preview route
* source file
* related files

The catalog never scans directories automatically.

Instead, every visible block is explicitly registered.

This keeps navigation predictable and easy to review.

---

# Registry Metadata

Installable components are defined separately.

```text
registry.json
```

Unlike catalog metadata, registry metadata focuses on installation.

Typical registry information includes:

* registry item name
* description
* dependencies
* package requirements
* source files
* target paths

This allows the installation system to evolve independently from the documentation website.

---

# Registry Build Pipeline

Registry generation follows a deterministic workflow.

```text
registry.json
        │
        ▼
Registry Builder
        │
        ▼
Validate Metadata
        │
        ▼
Generate JSON
        │
        ▼
public/r/
```

Generated registry files become static assets served directly by the application.

---

# Published Registry

Generated registry files are stored inside:

```text
public/
└── r/
```

Each file represents one installable registry item.

For example:

```text
public/
└── r/
    ├── button-one.json
    ├── chart-basic.json
    ├── dashboard-card.json
    └── ...
```

Because these files are static, they can be cached aggressively and served efficiently from a CDN.

---

# Block Lifecycle

Every component follows the same lifecycle.

```text
Create Preview
       │
       ▼
Register Metadata
       │
       ▼
Generate Catalog
       │
       ▼
Generate Registry
       │
       ▼
Publish
       │
       ▼
Install via CLI
```

Using the same workflow for every block reduces maintenance overhead.

---

# Separation of Responsibilities

Although the catalog and registry reference the same preview component, they serve different purposes.

| Catalog        | Registry               |
| -------------- | ---------------------- |
| Navigation     | Installation           |
| Live preview   | Package generation     |
| Source display | Dependency declaration |
| Documentation  | Target file mapping    |

Separating these concerns keeps both systems easier to maintain.

---

# Why Metadata Matters

Metadata provides several advantages.

## Predictability

Every block is declared explicitly.

Nothing appears in the catalog accidentally.

---

## Reviewability

Metadata changes are easy to review during pull requests.

Developers can immediately see:

* new blocks,
* renamed categories,
* removed components,
* installation changes.

---

## Extensibility

Additional metadata fields can be introduced without changing the routing architecture.

Examples include:

* tags
* compatibility
* difficulty
* version
* author
* experimental status

---

# Adding a New Block

Publishing a new block follows a consistent workflow.

1. Create the preview page.
2. Add the block to `data/blocks.ts`.
3. Add the registry definition to `registry.json`.
4. Build the registry.
5. Verify the generated JSON.
6. Confirm the catalog preview.
7. Test installation with the CLI.

Following this process ensures that documentation, previews, and registry packages remain synchronized.

---

# Common Risks

Several issues can occur if metadata is not maintained correctly.

| Risk                        | Result                                         |
| --------------------------- | ---------------------------------------------- |
| Missing catalog entry       | Component cannot be discovered                 |
| Missing registry definition | Component cannot be installed                  |
| Incorrect dependencies      | Installation failures                          |
| Incorrect target paths      | Generated files placed incorrectly             |
| Metadata drift              | Documentation and registry become inconsistent |

Maintaining metadata carefully helps prevent these problems.

---

# Design Principles

The data pipeline follows several architectural principles.

## Explicit Over Implicit

Components should be registered intentionally rather than discovered automatically.

---

## Single Source of Truth

Preview implementations should remain the authoritative source for component behavior.

---

## Deterministic Builds

Registry generation should always produce identical output from the same input.

---

## Static Distribution

Registry packages should be published as static JSON assets that require no backend services.

---

# Summary

The Data & Registry Flow is the bridge between development and distribution.

By combining preview components, catalog metadata, and registry definitions into a deterministic publishing pipeline, Layered UI ensures that every component is documented, discoverable, and installable from a single implementation. This architecture minimizes duplication, simplifies maintenance, and provides a reliable experience for both contributors and consumers.

---

# Related Documents

* **Preview Surface** — Source implementations for every block.
* **Catalog Surface** — Metadata-driven browsing experience.
* **Component Architecture** — Shared UI primitives and reusable infrastructure.
* **Build & Delivery** — Registry generation and deployment pipeline.

# Architecture Overview

Layered UI is a **repository-first** Next.js application that combines a marketing website, interactive UI component catalog, documentation platform, and installable shadcn registry into a single codebase.

Rather than treating documentation, previews, and registry packages as separate products, Layered UI uses a unified architecture where every block is authored once and reused across multiple surfaces. This approach ensures that the components developers browse, preview, and install all originate from the same source.

---

# What is Layered UI?

Layered UI serves four primary purposes:

* A marketing website introducing the project.
* An interactive documentation platform.
* A live component and block catalog.
* A shadcn-compatible registry for installing components into external projects.

Every UI block follows a single lifecycle:

1. It is developed as a real Next.js page.
2. It becomes visible in the component catalog.
3. Its source code is displayed in the documentation.
4. It is packaged into a registry item for external installation.

This workflow eliminates duplicate implementations while keeping documentation synchronized with production-ready code.

---

# Core Philosophy

The project follows several architectural principles that guide its design.

## Repository-First Development

The repository is the source of truth.

Preview pages, documentation, registry metadata, and installable components are all generated from files within the project rather than maintained separately.

---

## Single Source of Truth

Each block is authored once.

Instead of maintaining separate versions for documentation, demos, and registry packages, Layered UI reuses the same implementation across every product surface.

---

## Static by Default

Whenever possible, the application uses static generation.

Category pages, registry payloads, and documentation are generated during build time, reducing runtime complexity while improving caching and deployment performance.

---

## Component Reusability

Shared UI primitives are isolated from product-specific components.

Generic building blocks live inside reusable UI packages, while marketing layouts, documentation pages, and previews compose those primitives into larger experiences.

---

# High-Level Architecture

The system consists of several layers that work together.

```text
                           Developers
                                │
                                ▼
                    Next.js App Router Application
                                │
        ┌───────────────────────┼────────────────────────┐
        │                       │                        │
        ▼                       ▼                        ▼
 Marketing Site          Documentation          Component Catalog
        │                       │                        │
        └───────────────────────┼────────────────────────┘
                                │
                                ▼
                      Preview Route Components
                                │
                                ▼
                    Registry Build Pipeline
                                │
                                ▼
                  Static Registry JSON Files
                                │
                                ▼
          shadcn CLI • MCP Clients • External Projects
```

Every layer has a clearly defined responsibility while remaining connected through shared metadata and reusable components.

---

# Architectural Layers

The project is divided into several major architectural layers.

| Layer             | Responsibility                                |
| ----------------- | --------------------------------------------- |
| Marketing         | Public website and landing pages              |
| Documentation     | Technical documentation and guides            |
| Catalog           | Browseable collection of UI blocks            |
| Preview           | Live executable block implementations         |
| Registry          | Installable shadcn-compatible packages        |
| Shared Components | Generic UI primitives and reusable components |
| Utilities         | Shared helpers, hooks, and infrastructure     |

Each layer can evolve independently while sharing a common design system and codebase.

---

# Key Architectural Characteristics

Layered UI emphasizes:

* Modular project organization
* Static-first rendering
* Shared component architecture
* Predictable routing
* Registry-driven distribution
* Strong separation of concerns
* Reusable UI primitives
* Minimal runtime overhead

These characteristics help keep the project scalable as the catalog grows.

---

# Relationship Between Product Surfaces

Although Layered UI appears to expose several independent products, they all operate from the same repository.

```text
Preview Component
       │
       ├────────► Documentation
       │
       ├────────► Component Catalog
       │
       ├────────► Source Code Viewer
       │
       └────────► Registry Package
```

A single preview implementation can power multiple user experiences without duplication.

---

# Benefits of the Architecture

This architecture provides several advantages.

### Consistency

Every preview, code example, and installable package originates from the same implementation.

### Maintainability

Changes are made in one location rather than across multiple independent systems.

### Scalability

New component categories can be introduced without modifying the application's routing architecture.

### Developer Experience

Engineers can build, preview, document, and publish components using a consistent workflow.

### Deployment Simplicity

Because most content is statically generated, deployments remain lightweight, cache-friendly, and inexpensive.

---

# Next Steps

This overview introduces the overall architecture of Layered UI.

The following documents explore each area in greater detail:

* **Architectural Goals** — the principles driving architectural decisions.
* **System Context** — how external users and systems interact with Layered UI.
* **Runtime Architecture** — how the Next.js application is organized.
* **Data & Registry Flow** — how previews become installable registry packages.
* **Component Architecture** — how reusable UI building blocks are structured.

Together, these documents describe how Layered UI evolves from individual React components into a complete documentation platform and installable UI ecosystem.

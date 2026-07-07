# Runtime Architecture

The Layered UI runtime is built on the **Next.js App Router**, which serves as the foundation for every user-facing experience. The application is designed around multiple independent product surfaces that share a common infrastructure while remaining loosely coupled.

Rather than treating the marketing site, documentation, component catalog, and preview system as separate applications, Layered UI composes them into a single runtime with shared layouts, UI primitives, utilities, and metadata.

This document provides a high-level overview of the runtime architecture before exploring each surface in more detail.

---

# Runtime Overview

At runtime, every request enters the Next.js application through the App Router.

Depending on the requested route, the application renders one of several product surfaces while sharing global providers, styling, and infrastructure.

```text
                    User Request
                         │
                         ▼
                Next.js App Router
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
 Marketing Site   Documentation    Component Catalog
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
                 Shared Application Shell
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
     Components      Utilities       UI Primitives
```

Every page inherits the same application shell while rendering its own content.

---

# Runtime Responsibilities

The runtime is responsible for:

* Routing incoming requests.
* Rendering application layouts.
* Providing global theme support.
* Loading shared fonts.
* Initializing analytics.
* Registering the service worker.
* Serving documentation pages.
* Rendering live component previews.
* Displaying source code.
* Delivering static registry assets.

Each responsibility is isolated within dedicated modules to improve maintainability.

---

# Product Surfaces

The application is composed of four primary runtime surfaces.

| Surface   | Responsibility                                                    |
| --------- | ----------------------------------------------------------------- |
| App Shell | Global providers, layout, fonts, analytics, and theme             |
| Marketing | Public-facing pages introducing Layered UI                        |
| Catalog   | Interactive browsing of reusable UI blocks                        |
| Preview   | Executable component implementations used throughout the platform |

Each surface has a well-defined responsibility while sharing the same runtime environment.

---

# Shared Infrastructure

Every surface benefits from common infrastructure provided by the application shell.

Shared infrastructure includes:

* Global layouts
* Theme provider
* Typography
* Shared navigation
* Shared footer
* Analytics
* Service worker registration
* Utility libraries
* Shared UI primitives

This ensures a consistent experience across the entire application.

---

# Runtime Layers

The runtime can be viewed as several logical layers.

```text
Application Shell
        │
        ├── Marketing Pages
        ├── Documentation
        ├── Component Catalog
        └── Preview Routes

Shared Components
        │
        ├── UI Primitives
        ├── Utilities
        ├── Hooks
        └── Helpers
```

Higher-level pages compose reusable building blocks without duplicating infrastructure.

---

# Rendering Strategy

Layered UI uses a hybrid rendering model.

## Static Rendering

Whenever possible, pages are statically generated during the build process.

Examples include:

* Documentation pages
* Category pages
* Registry assets
* Marketing content

Static rendering improves performance while reducing runtime overhead.

---

## Client-Side Rendering

Interactive experiences execute on the client.

Examples include:

* Preview controls
* Clipboard actions
* Responsive viewport switching
* Theme interactions
* Code viewer controls

Client components are used only where browser APIs are required.

---

# Runtime Flow

A simplified request lifecycle is shown below.

```text
Browser Request
       │
       ▼
Next.js Router
       │
       ▼
Resolve Route
       │
       ▼
Load Layout
       │
       ▼
Load Page
       │
       ▼
Compose Components
       │
       ▼
Render HTML
       │
       ▼
Hydrate Interactive Components
```

This separation allows static content to load quickly while enabling rich client-side interactions.

---

# Runtime Documents

The following documents describe each runtime surface in detail.

## App Shell

Describes the global application layout, providers, fonts, metadata, analytics, and service worker initialization.

➡ **See:** `app-shell.md`

---

## Marketing Surface

Explains how the public-facing website is composed from reusable sections and shared layouts.

➡ **See:** `marketing-surface.md`

---

## Catalog Surface

Describes the component catalog, category routing, metadata-driven rendering, and preview infrastructure.

➡ **See:** `catalog-surface.md`

---

## Preview Surface

Explains how preview routes are implemented, rendered, and reused by the documentation and registry.

➡ **See:** `preview-surface.md`

---

# Design Principles

The runtime architecture follows several important principles.

* Shared infrastructure should live in the application shell.
* Product surfaces should remain independent.
* Interactive logic belongs in client components.
* Static rendering should be preferred whenever possible.
* Components should remain composable.
* Routing should be predictable.
* Global concerns should be initialized only once.

These principles help keep the runtime scalable as the application grows.

---

# Summary

The runtime architecture provides a unified execution environment for every Layered UI product surface.

By combining shared infrastructure with clearly separated runtime responsibilities, the application delivers a consistent developer experience while remaining performant, maintainable, and easy to extend.

---

# Next Documents

The following documents explore each runtime surface in detail:

* **App Shell** — Global application infrastructure and providers.
* **Marketing Surface** — Public-facing website architecture.
* **Catalog Surface** — Component browsing and preview system.
* **Preview Surface** — Executable preview implementations and registry source pages.

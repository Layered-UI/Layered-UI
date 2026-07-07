# System Context

The Layered UI ecosystem consists of multiple users, tools, and services that interact with a single Next.js application and its generated registry assets.

Rather than exposing separate applications for documentation, previews, and installable components, Layered UI provides a unified platform where every surface is built from the same repository.

This document describes the external actors, system boundaries, and interactions that define the overall architecture.

---

# System Overview

At a high level, Layered UI serves three primary audiences:

* Developers browsing and installing UI blocks.
* Contributors building and maintaining the project.
* External tools consuming the published registry.

These users interact with different parts of the application while relying on the same underlying source code.

---

# High-Level Context

```text
                                   Contributors
                                        │
                                        ▼
                               Git Repository
                                        │
                                        ▼
                             Next.js App Router
                                        │
        ┌───────────────────────────────┼───────────────────────────────┐
        │                               │                               │
        ▼                               ▼                               ▼
 Marketing Website            Documentation Site              Component Catalog
        │                               │                               │
        └───────────────────────────────┼───────────────────────────────┘
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
              ┌─────────────────────────┼─────────────────────────┐
              ▼                         ▼                         ▼
        shadcn CLI                MCP Clients             External Projects
```

The Next.js application is the central system responsible for serving all user-facing experiences and generating installable registry artifacts.

---

# System Boundary

Layered UI owns the following responsibilities:

* Rendering the marketing website.
* Serving technical documentation.
* Displaying live component previews.
* Publishing installable registry payloads.
* Managing catalog metadata.
* Rendering preview source code.
* Providing installation commands.

Everything outside these responsibilities—including package installation, deployment targets, and consuming applications—is considered external to the system.

---

# Primary Actors

## Visitor

Visitors browse the public website to learn about Layered UI.

Typical actions include:

* Reading documentation.
* Exploring available components.
* Viewing live previews.
* Copying source code.
* Discovering templates.

Visitors do not modify application data.

---

## Developer

Developers use Layered UI as a component library.

Common workflows include:

* Browsing component categories.
* Inspecting source code.
* Copying installation commands.
* Installing registry components.
* Experimenting with live previews.

Developers primarily interact with the catalog and registry.

---

## Contributor

Contributors extend the repository itself.

Responsibilities include:

* Creating new components.
* Improving documentation.
* Updating registry metadata.
* Maintaining shared UI primitives.
* Fixing bugs.
* Refactoring infrastructure.

Contributors work directly within the repository.

---

## Registry Consumer

Registry consumers are external projects that install Layered UI components.

Examples include:

* Next.js applications.
* React applications.
* Internal company design systems.
* Starter templates.

These consumers interact only with published registry payloads.

---

## Automated Tooling

Several automated tools participate in the architecture.

Examples include:

* shadcn CLI
* Registry build tooling
* Static site generation
* Package managers
* Deployment pipelines

These tools automate publishing and distribution without requiring custom backend services.

---

# External Systems

Layered UI integrates with several external technologies.

| System       | Purpose                 |
| ------------ | ----------------------- |
| Next.js      | Application framework   |
| React        | Component rendering     |
| Tailwind CSS | Styling                 |
| shadcn/ui    | UI primitives           |
| Radix UI     | Accessible interactions |
| Vercel       | Deployment platform     |
| Shiki        | Syntax highlighting     |
| npm          | Package management      |

These technologies provide infrastructure while remaining outside the project's business logic.

---

# User Journey

A typical workflow follows this sequence:

```text
Developer
     │
     ▼
Browse Component Catalog
     │
     ▼
Open Live Preview
     │
     ▼
Inspect Source Code
     │
     ▼
Copy Installation Command
     │
     ▼
Install Registry Component
     │
     ▼
Use Component in External Project
```

This workflow demonstrates how a single preview component can move from discovery to production use.

---

# Contributor Workflow

Contributors follow a different lifecycle.

```text
Create Preview Component
          │
          ▼
Update Catalog Metadata
          │
          ▼
Update Registry Metadata
          │
          ▼
Generate Registry Files
          │
          ▼
Verify Documentation
          │
          ▼
Publish Changes
```

Every step occurs within the same repository, reducing duplication and simplifying maintenance.

---

# Data Ownership

Each architectural area owns a specific type of data.

| Area              | Owns                          |
| ----------------- | ----------------------------- |
| Preview Pages     | Component implementation      |
| Catalog Metadata  | Navigation and categorization |
| Registry Metadata | Installation configuration    |
| Documentation     | Technical guidance            |
| Shared Components | Reusable UI primitives        |
| Utilities         | Shared infrastructure         |

Keeping ownership explicit reduces accidental coupling between subsystems.

---

# Design Principles

The system context reflects several core architectural principles:

* One repository powers multiple experiences.
* Components are authored once and reused everywhere.
* Documentation is generated from real implementations.
* Registry artifacts are static and cacheable.
* Product surfaces remain loosely coupled while sharing common infrastructure.

These principles help ensure consistency across the entire ecosystem.

---

# Architectural Boundaries

The system intentionally separates responsibilities.

```text
Repository
    │
    ├── Application
    ├── Documentation
    ├── Component Catalog
    ├── Preview Components
    ├── Registry Metadata
    └── Shared UI
```

Each boundary represents an independent concern while remaining connected through shared components and metadata.

---

# Summary

Layered UI acts as the central platform for documenting, previewing, and distributing reusable UI components.

By keeping previews, documentation, registry definitions, and shared infrastructure within a single repository, the project minimizes duplication, simplifies maintenance, and provides a consistent experience for contributors and consumers alike.

---

# Next Document

The next document, **Runtime Architecture**, explores how the Next.js App Router application is organized internally, including the app shell, routing model, and the individual product surfaces that make up Layered UI.

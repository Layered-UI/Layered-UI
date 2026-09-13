# Layered UI Architecture

Welcome to the architecture documentation for **Layered UI**.

This documentation provides a comprehensive overview of the project's architecture, design principles, runtime model, and engineering decisions. Rather than describing implementation details in a single large document, the architecture is organized into focused documents that each cover one aspect of the system.

The goal is to make the documentation easier to navigate, maintain, and extend as the project grows.

---

## Documentation Map

### Introduction

* [Architecture Overview](./overview.md)
* [Architectural Goals](./goals.md)
* [System Context](./system-context.md)

These documents introduce the project, explain its overall purpose, and describe how the different parts of the system interact at a high level.

---

### Runtime Architecture

* [Runtime Architecture](./runtime.md)
* [App Shell](./app-shell.md)
* [Marketing Surface](./marketing-surface.md)
* [Catalog Surface](./catalog-surface.md)
* [Preview Surface](./preview-surface.md)

This section explains how the Next.js application is structured, how each product surface is organized, and how requests flow through the application.

---

### Data & Registry

* [Data & Registry Flow](./data-flow.md)

Learn how block metadata, registry definitions, preview pages, and generated registry JSON work together to power both the documentation website and external installations.

---

### Component Architecture

* [Component Architecture](./component-architecture.md)

Describes the major component groups, shared UI primitives, preview infrastructure, utilities, and reusable hooks that form the application's foundation.

---

### Infrastructure

* [Routing Model](./routing.md)
* [Build & Delivery](./build-and-delivery.md)

These documents cover routing, static generation, deployment strategy, registry generation, and the project's build pipeline.

---

### Engineering

* [Quality Attributes](./quality-attributes.md)
* [Ownership Boundaries](./ownership.md)
* [Operational Risks](./operational-risks.md)
* [Senior Engineering Notes](./engineering-notes.md)

This section documents long-term engineering considerations including maintainability, scalability, deployment risks, architectural boundaries, and best practices for contributors.

---

# Repository Structure

The architecture documentation is organized as follows:

```text
docs/
└── architecture/
    ├── README.md
    ├── overview.md
    ├── goals.md
    ├── system-context.md
    ├── runtime.md
    ├── app-shell.md
    ├── marketing-surface.md
    ├── catalog-surface.md
    ├── preview-surface.md
    ├── data-flow.md
    ├── component-architecture.md
    ├── routing.md
    ├── build-and-delivery.md
    ├── quality-attributes.md
    ├── ownership.md
    ├── operational-risks.md
    └── engineering-notes.md
```

Each document focuses on a single architectural concern, making it easier to locate information and update documentation without affecting unrelated sections.

---

# Reading Order

If you're new to the project, the recommended reading order is:

1. **Architecture Overview**
2. **Architectural Goals**
3. **System Context**
4. **Runtime Architecture**
5. **Data & Registry Flow**
6. **Component Architecture**
7. **Routing Model**
8. **Build & Delivery**
9. **Quality Attributes**
10. **Operational Risks**
11. **Senior Engineering Notes**

Following this sequence provides a gradual introduction from high-level concepts to implementation details.

---

# Intended Audience

This documentation is designed for:

* Engineers contributing to Layered UI
* Designers working with reusable UI blocks
* Open source contributors
* Developers integrating the Layered UI registry
* Anyone interested in understanding the project's architecture

---

# Documentation Principles

The architecture documentation follows several guiding principles:

* **Single Responsibility** — Each document covers one architectural topic.
* **Repository-First** — Documentation reflects the repository structure rather than abstract diagrams alone.
* **Implementation-Oriented** — Documentation explains how the system actually works instead of describing idealized designs.
* **Maintainable** — Smaller documents reduce merge conflicts and simplify updates.
* **Extensible** — New architecture topics can be added without restructuring the existing documentation.

---

# Contributing

When introducing a new architectural concept:

1. Create a dedicated Markdown document for the topic.
2. Link the new document from this index.
3. Keep related information together instead of duplicating content across files.
4. Update cross-references when architectural changes affect multiple areas.

This approach keeps the architecture documentation organized, discoverable, and scalable as Layered UI continues to evolve.

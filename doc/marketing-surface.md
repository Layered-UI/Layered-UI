# Marketing Surface

The **Marketing Surface** is the public-facing experience of Layered UI. It introduces the project, showcases its capabilities, provides documentation, and guides developers toward exploring and installing UI blocks.

Unlike the component catalog, which focuses on reusable blocks, the marketing surface is designed to communicate the project's value, educate users, and encourage adoption.

It is composed from reusable marketing components that share the same design system and application shell as the rest of the platform.

---

# Purpose

The marketing surface exists to:

* Introduce Layered UI.
* Explain the project's philosophy.
* Showcase features.
* Highlight available templates.
* Publish documentation.
* Share product updates.
* Direct users to the component catalog.
* Improve discoverability through SEO.

While these pages are primarily informational, they reuse the same UI primitives and infrastructure as the rest of the application.

---

# Architecture

The marketing experience consists of multiple pages composed from reusable sections.

```text
Marketing Surface
        │
        ├── Homepage
        ├── Documentation
        ├── Templates
        ├── Changelog
        ├── About
        └── Future Marketing Pages
```

Each page focuses on a specific user journey while sharing a common layout and navigation.

---

# Primary Pages

The marketing surface includes several core pages.

| Route                 | Purpose                      |
| --------------------- | ---------------------------- |
| `/`                   | Landing page                 |
| `/doc`                | Documentation hub            |
| `/templates`          | Template showcase            |
| `/changelog`          | Product updates and releases |
| `/about` *(optional)* | Project information          |

Additional pages can be introduced without changing the application's overall architecture.

---

# Homepage

The homepage serves as the primary entry point into the project.

Typical responsibilities include:

* Introducing Layered UI.
* Highlighting key features.
* Explaining the project's value proposition.
* Displaying featured components.
* Providing calls to action.
* Linking to documentation and the catalog.

The homepage should remain lightweight and focus on helping users understand the platform within a few seconds.

---

# Documentation Pages

Documentation pages explain how to use Layered UI.

Typical content includes:

* Installation guides.
* Getting started tutorials.
* Architecture documentation.
* Registry documentation.
* Best practices.
* API references.

Documentation should remain version-controlled alongside the source code.

---

# Template Showcase

Template pages demonstrate complete application layouts built from reusable blocks.

Examples may include:

* Dashboards
* SaaS landing pages
* Authentication flows
* Admin panels
* Documentation layouts
* Portfolio sites

Templates help developers understand how individual blocks work together.

---

# Changelog

The changelog communicates project evolution.

Typical entries include:

* New blocks
* Feature releases
* Bug fixes
* Breaking changes
* Registry updates
* Performance improvements

Maintaining a transparent changelog improves trust and helps developers track changes over time.

---

# Page Composition

Marketing pages are composed from reusable sections rather than large monolithic components.

```text
Landing Page
     │
     ├── Site Header
     ├── Hero
     ├── Feature Sections
     ├── CTA Sections
     ├── Testimonials
     ├── FAQ
     └── Site Footer
```

Each section should remain independently reusable.

---

# Shared Components

The marketing surface relies on a collection of reusable presentation components.

Examples include:

* Navigation
* Hero sections
* Feature grids
* Pricing sections
* Call-to-action banners
* Testimonials
* Logos
* Footers

These components should remain presentation-focused and avoid embedding application-specific business logic.

---

# Relationship to Other Surfaces

The marketing surface connects users with the rest of the platform.

```text
Marketing
     │
     ├── Documentation
     ├── Component Catalog
     ├── Registry
     ├── Templates
     └── Examples
```

Rather than existing in isolation, marketing pages act as entry points into deeper technical content.

---

# Rendering Strategy

Most marketing pages should be statically generated.

Benefits include:

* Fast initial page loads.
* Excellent SEO.
* Lower hosting costs.
* Improved caching.
* Predictable performance.

Client-side rendering should only be introduced for interactive features such as animations or search.

---

# Design Principles

The marketing surface follows several principles.

## Component-Driven

Every section should be reusable across multiple pages.

---

## Content First

The focus should remain on communicating value rather than showcasing complex interactions.

---

## Performance

Marketing pages should prioritize fast loading, minimal JavaScript, and static rendering.

---

## Accessibility

Every page should support:

* semantic HTML
* keyboard navigation
* screen readers
* sufficient color contrast
* responsive layouts

Accessibility should be considered a core requirement rather than an enhancement.

---

# Future Expansion

The marketing surface is designed to grow alongside the platform.

Potential future additions include:

* Blog
* Showcase gallery
* Customer stories
* Roadmap
* Careers
* Community resources
* Newsletter
* Events

Because pages are built from reusable sections, new content can be introduced with minimal architectural changes.

---

# Summary

The marketing surface is the public face of Layered UI.

It introduces the platform, communicates its value, educates developers, and connects visitors with the documentation, component catalog, and registry. By composing pages from reusable marketing components and leveraging static generation, the marketing surface remains scalable, performant, and easy to maintain.

---

# Related Documents

* **Runtime Architecture** — Overview of the application's runtime.
* **App Shell** — Shared infrastructure and global providers.
* **Catalog Surface** — Interactive browsing of UI blocks.
* **Preview Surface** — Executable preview implementations.
* **Component Architecture** — Shared components and UI primitives.

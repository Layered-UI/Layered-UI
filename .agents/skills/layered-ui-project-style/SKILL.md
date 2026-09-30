---
name: layered-ui-project-style
description: Create or extend pages, sections, and components in this Layered UI Next.js project using its existing React, TypeScript, Tailwind, shared-component, and motion conventions. Use when building a new UI in this repository or when asked to match the style of its existing code or previews.
---

# Layered UI Project Style

Use this skill when creating or extending UI in this repository. The goal is to make new work feel native to the codebase, not to copy one example literally.

## Before editing

1. Inspect the closest page or component that serves the same purpose. Check its imports, component boundaries, tokens, responsive behavior, and animation patterns.
2. Check `package.json` and existing imports before adding a dependency or choosing an API. Prefer installed packages and established local components.
3. Identify the owning route and whether the component needs client-side behavior. Keep components server-rendered unless hooks, browser APIs, or animation require a client component.

## Implementation conventions

- Use the Next.js App Router, React, and TypeScript patterns already in the surrounding files. Reuse the `@/` import alias and existing components such as `Badge`, `Logo`, and shared UI primitives when appropriate.
- Style with Tailwind utilities and the semantic theme tokens defined in `app/globals.css` (`background`, `foreground`, `primary`, `secondary`, `muted`, `border`, and related tokens). Avoid hard-coded colors when a project token expresses the same intent.
- Match the nearby design language: quiet surfaces, clear hierarchy, restrained borders and shadows, compact rounded corners where consistent, generous but controlled spacing, and responsive layouts that remain readable on small screens. Do not force every page into the same card layout.
- For repeatable content, keep content in typed data and render it with stable keys instead of duplicating markup.
- Keep animation declarative and purposeful. Follow the installed motion package and local import convention. Use short entrance/reveal animations, stagger related items sparingly, and trigger scroll reveals once when that matches nearby examples.
- Respect reduced-motion preferences. When using motion, provide an opacity-only or otherwise low-motion alternative; do not make essential content depend on animation.
- Use semantic HTML, preserve keyboard access and visible focus, and make interactive controls have accessible names. Do not use a clickable `div` where a button or link is appropriate.
- Keep responsive dimensions stable and check that long text, headings, and controls do not overflow or overlap at narrow widths.

## Verification

After implementation, run the narrowest relevant check first. For UI changes, use the repository lint command (`npm run lint`) and, when the change affects routing, types, or build behavior, `npm run build`. Fix only failures related to the change and report checks that could not be run.

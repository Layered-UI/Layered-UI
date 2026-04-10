# Layered Registry

The Layered Registry lets you install production‑ready shadcn/UI marketing blocks directly into your project using the shadcn CLI. Add the registry once and then pull blocks by name, no rigid templates, just flexible, composable components you can customize and scale across marketing sites.

## Add registry

Add the Layered registry namespace to your `components.json`.

```json
{
	"registries": {
	  "@layeredui": "https://layered-blocks.vercel.app/r/{name}.json"
	}
}
```

Learn more about registry config from [Shadcn UI docs](https://shadcn-ui.com/docs/components/registry)

## Usage

Install blocks via the shadcn CLI using the `@layeredui/{name}` syntax.

```bash
pnpm dlx shadcn add @layeredui/hero-section-1
```

Install other blocks the same way:

```bash
pnpm dlx shadcn add @layeredui/contact-1
pnpm dlx shadcn add @layeredui/pricing-1
pnpm dlx shadcn add @layeredui/features-1
```

Don't guess the block name, copy the CLI command from each block on its category page.

## Configure MCP

Run the following command to configure the MCP server:

```bash
pnpm dlx shadcn mcp init
```

Select your MCP client when prompted. Remember to enable the MCP server in your client when done.

## Prompt

You can now prompt the server. Here are some prompts to try:

- Find me a hero from layered registry
- Build me a landing page using a hero and features section from layered registry
- Build me a pricing page using a pricing, logo cloud, and features blocks from layered registry
- Build me a contact page with contact form and footer from layered registry

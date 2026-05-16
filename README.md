<div align="center">
  <img
    alt="Layered UI – shadcn UI blocks for SaaS & Marketing websites"
    src="public/LayeredUI.png"
    width="100%"
  />

  <h3>Layered UI</h3>

  <p>
    A collection of beautifully crafted, production-ready UI blocks built with <b>shadcn/ui</b>, designed specifically for SaaS and marketing websites.
  </p>

  <div>
    <a href="https://github.com/KingTroy125/Layered-UI/stargazers">
      <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/KingTroy125/Layered-UI?style=for-the-badge&color=black">
    </a>
    <a href="./LICENCE.md">
      <img alt="License" src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge">
    </a>
    <a href="https://layered-blocks.vercel.app">
      <img alt="Website" src="https://img.shields.io/badge/Website-Live-black?style=for-the-badge">
    </a>
  </div>
</div>

<br />

---

## ✦ About

**Layered UI** is a modern ecosystem of responsive UI blocks built with **shadcn/ui**, **Tailwind CSS 4**, and **Next.js 16**. It empowers developers to build high-converting landing pages and SaaS products with speed and precision.

All components are:
- **Customizable**: Built on top of shadcn/ui primitives.
- **Accessible**: WAI-ARIA compliant and screen-reader friendly.
- **Composable**: Mix and match blocks to create unique layouts.
- **CLI-Ready**: Install directly into your project via the shadcn registry.

---

## ✦ Features

- 🏗️ **shadcn/ui Integration**: Native support for the industry-standard UI library.
- 🎨 **Tailwind CSS 4**: Leverages the latest styling engine for performance.
- 📱 **Fully Responsive**: Crafted for desktop, tablet, and mobile out of the box.
- 🧩 **Registry Powered**: No more copy-pasting; just run a command.
- ⚡ **Modern Stack**: Powered by React 19, Next.js 16, and Motion (Framer Motion).
- 🤖 **MCP Support**: AI-ready components for your coding assistants.

---

## ✦ Tech Stack

| Tool | Description |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Motion](https://motion.dev/) |

---

## ✦ Getting Started

### 1. Clone & Setup
```bash
git clone https://github.com/KingTroy125/Layered-UI.git
cd Layered-UI
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to explore the blocks.

---

## ✦ Using the Registry

Install production-ready blocks directly into **your own project** using the shadcn CLI.

### 1. Add Registry
Add the Layered registry to your `components.json`:

```json
{
  "registries": {
    "@layeredui": "https://layered-ui.vercel.app/r/{name}.json"
  }
}
```

### 2. Install Blocks
Run the following command to add a block:

```bash
npx shadcn add @layeredui/hero-section-1
```

Explore all available blocks on the [Official Website](https://layered-ui.vercel.app).

---

## ✦ Block Categories

- **Hero Sections**: High-impact headers that convert.
- **Features**: Highlight your product's value proposition.
- **Pricing**: Conversion-optimized pricing tables.
- **Testimonials**: Build trust with elegant social proof.
- **Forms**: Pre-built Login, Sign-up, and Contact sections.
- **Navigation**: Sophisticated Navbars and Footers.
- **And More**: Bento Grids, Logo Clouds, Stats, and Team sections.

---

## ✦ MCP Configuration

Layered UI supports the **Model Context Protocol (MCP)**, allowing AI assistants to browse and insert components directly.

### Initialize MCP
```bash
npx shadcn mcp init
```

### Example Prompts
- *"Find me a hero from layered registry"*
- *"Build a landing page with a hero and features section from layered registry"*

---

## ✦ License

Distributed under the MIT License. See [LICENSE.md](./LICENCE.md) for details.

---

<div align="center">
  <sub>Built with ❤️ by KingTroy125</sub>
</div>

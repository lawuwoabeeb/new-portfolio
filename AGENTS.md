# Abeeb Olawuwo Portfolio — Developer & Agent Documentation

This document serves as the guide for running, maintaining, editing, and extending the personal portfolio website for **Abeeb Olawuwo**.

---

## 1. Project Overview & Architecture

- **Owner**: Abeeb Olawuwo
- **Focus**: Civil Engineering $\times$ Product Design $\times$ Digital Construction Technology
- **Primary Objectives**:
  1. Communicate personal brand, civil engineering background, and tech exploration.
  2. Grow weekly newsletter audience with frontend subscription CTAs on all pages.
- **Framework**: [Astro](https://astro.build/) (Static Site Generation - SSG)
- **Styling**: Standard Vanilla CSS with CSS custom properties (Tokens). No Tailwind, Bootstrap, or heavy CSS frameworks.
- **Typography**: 
  - Display / Headlines: **Khand** (Weight 700)
  - Body / UI: **Switzer** (Weight 400)
  - Loaded via [Fontshare](https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap)
- **Palette**:
  - Background: White (`#FFFFFF`)
  - Typography: Deep Black (`#111111`)
  - Accent Color: Vivid Red (`#F21B2D`)
  - Neutral / Border: Muted Grays (`#666666`, `#E5E5E5`)

---

## 2. Quickstart & Manual Running Guide

### Prerequisites
- Node.js (`v18+`, `v20+`, or `v24+`) and `npm` installed.

### Step 1: Open Terminal and Navigate to Project
```bash
cd "/Users/abeebolawuwo/Desktop/Antigravity-Vibecode/new portfolio"
```

*(If using NVM and Node is not in your default PATH, you can run:)*
```bash
export PATH=$PATH:~/.nvm/versions/node/$(ls ~/.nvm/versions/node 2>/dev/null | tail -n 1)/bin
```

### Step 2: Install Dependencies (if not already installed)
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open **[http://localhost:4321](http://localhost:4321)** in Safari, Chrome, or any browser.

### Step 4: Stop the Server
Press `Ctrl + C` in the Terminal window.

---

## 3. Project Commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts local development server with live reload on `http://localhost:4321` |
| `npm run build` | Compiles the production-ready static site into the `dist/` directory |
| `npm run preview` | Serves the generated `dist/` production build locally to test performance |

---

## 4. Directory Structure

```text
new portfolio/
├── public/
│   ├── favicon.svg             # Custom brand icon
│   ├── robots.txt              # SEO crawler instructions
│   └── images/                 # Project illustrations & visual assets
│       ├── project-sitesync.svg
│       ├── project-carbon.svg
│       ├── project-logistics.svg
│       ├── project-prefab.svg
│       └── project-bim.svg
├── src/
│   ├── components/
│   │   ├── Header.astro         # Sticky navigation & responsive mobile menu
│   │   ├── Footer.astro         # Dynamic copyright year, wordmark & social placeholders
│   │   ├── NewsletterForm.astro # Reusable form with frontend validation & status notice
│   │   ├── ProjectCard.astro    # Project card with tags and hover animations
│   │   └── SectionHeading.astro # Editorial heading component with red accent bullet
│   ├── data/
│   │   └── projects.ts          # Central structured project content data file
│   ├── layouts/
│   │   └── BaseLayout.astro     # Shared HTML wrapper, OpenGraph SEO tags, Fonts & Skip Link
│   ├── pages/
│   │   ├── index.astro          # Home page (Hero, Intro, Selected Projects, Newsletter)
│   │   ├── about.astro          # About page (Background, Philosophy, Capabilities, Timeline)
│   │   └── projects.astro       # Projects listing page with live category filters
│   └── styles/
│       └── global.css           # Global CSS variables, reset, typography scale, buttons
├── astro.config.mjs             # Astro configuration (static output, site URL)
├── netlify.toml                 # Netlify static deployment rules & security headers
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript aliases and configuration
└── AGENTS.md                    # Developer and Agent reference guide
```

---

## 5. How to Edit & Replace Content

### A. Editing Projects
All projects are stored as structured TypeScript data in:
`src/data/projects.ts`

To add, edit, or remove projects, update the objects in `projectsData`:
```typescript
{
  id: "your-project-id",
  title: "Project Title",
  category: "Construction Tech", // Categories automatically populate the filter bar
  shortDescription: "One-sentence overview.",
  fullDescription: "Detailed description for future case-study pages.",
  year: "2025",
  image: "/images/your-image.svg", // Place images in public/images/
  tags: ["Workflow", "Civil Engineering"],
  featured: true, // If true, appears in the Home page selected list
  linkText: "Explore Concept"
}
```

### B. Updating Personal Bio & Copy
- **Home Page**: Edit `src/pages/index.astro` (Hero headline, lead paragraph, metrics, and intro section).
- **About Page**: Edit `src/pages/about.astro` (Background history, capabilities, timeline, and working philosophy).

### C. Future Newsletter Integration (e.g. Buttondown)
The component `src/components/NewsletterForm.astro` currently performs frontend-only validation and informs users that registration will open soon.

When ready to connect to **Buttondown**, **ConvertKit**, or another provider:
1. Open `src/components/NewsletterForm.astro`.
2. Locate the `<form>` element or the `<script>` tag.
3. Replace the placeholder submission event with an API `fetch()` call to your provider's endpoint or standard form `action` URL (e.g., `https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME`).

---

## 6. Deployment to Netlify

The repository is pre-configured for static hosting on **Netlify**:
1. Push this repository to **GitHub**.
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will automatically detect:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Custom Domain:
Once deployed on Netlify, navigate to **Site configuration > Domain management** and add your custom domain (e.g., `abeebolawuwo.com`). Then update the `site` property in `astro.config.mjs` accordingly.

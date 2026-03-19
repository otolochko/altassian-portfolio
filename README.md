# Oleksandr Tolochko — Atlassian Portfolio

Personal portfolio website for an Atlassian Certified Expert. Built with Next.js 16, Tailwind CSS v4, TypeScript, and a custom design system with full light/dark theme support.

![Portfolio preview](images/example.png)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 — theme configured via CSS `@theme inline`, no JS config needed
- **Fonts**: DM Sans (UI) + IBM Plex Mono (code/mono)
- **Icons**: Lucide React
- **i18n**: Built-in EN / UK (Ukrainian) language switching via `?lang=uk`
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```

## Features

- Full-screen hero section with scroll-to-next indicator
- Light / Dark theme toggle — persisted to `localStorage`, no flash on reload
- Language switcher (English / Ukrainian)
- Contact form with honeypot spam protection (`/api/contact`)
- Glassmorphism cards, animated blur orbs, fade-in-up stagger animations
- Responsive across mobile, tablet, and desktop

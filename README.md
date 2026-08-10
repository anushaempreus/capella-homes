# Capella Homes – Website

A modern, full-stack marketing website for **Capella Homes**, a Canberra-based custom home builder with over 20 years of experience across three generations.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Matches the official Capella Homes brand — charcoal / white / teal (#00B4AC) colour palette using Titillium Web and Raleway typefaces.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero slider, about, services, values, CTA |
| `/about` | Company story, philosophy, testimonials |
| `/services` | New construction, renovation, extension |
| `/projects` | Portfolio gallery — Pearce, Charity House, O'Connor, Garran |
| `/contact` | Contact form + details |

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + inline styles
- **Fonts** — Titillium Web, Raleway via `next/font/google`
- **Email** — [Resend](https://resend.com) (`app/api/contact/route.ts`) — set `RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_RECIPIENT` in `.env.local` (see `.env.example`)
- **Deployment** — [Vercel](https://vercel.com)
- **Images** — Local, self-hosted (`public/images`, `public/brand`)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
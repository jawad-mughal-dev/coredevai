# CoreDevAI — Production Website

A modern, full-stack Next.js website for CoreDevAI software house.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom shadcn-compatible components
- **Forms**: React Hook Form + Zod
- **Themes**: next-themes (light/dark)
- **Animations**: CSS keyframes + Tailwind

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/contact/        # Contact form API
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   ├── contact/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Navbar, Footer, Providers, ThemeToggle
│   ├── sections/           # Page sections (Hero, Services, etc.)
│   ├── shared/             # Reusable cross-page components
│   └── ui/                 # Base UI components (Button, Card, etc.)
└── lib/
    └── utils.ts            # cn() utility
```

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Blog | `/blog` |
| Contact | `/contact` |

## Customization

### 1. Update branding
Edit `src/app/layout.tsx` metadata and `src/components/layout/Navbar.tsx` logo.

### 2. Update contact info
Edit `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`.

### 3. Connect email provider
In `src/app/api/contact/route.ts`, add your Resend/SendGrid integration.

### 4. Add portfolio projects
Edit the `projects` array in `src/components/sections/PortfolioSection.tsx`.

### 5. Update team info
Edit `src/app/about/page.tsx` team section.

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Environment Variables on Vercel
Add from `.env.local.example` in your Vercel project settings.

## Email Integration (Resend)

```bash
npm install resend
```

In `src/app/api/contact/route.ts`, uncomment and update the Resend block.

## License
MIT © CoreDevAI

import type { Metadata } from "next";
import { ExternalLink, GitFork } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore CoreDevAI's portfolio of web apps, mobile solutions, and AI-powered digital products.",
};

const allProjects = [
  {
    title: "Real Estate Listings Platform",
    description: "Property listing site with map-based search, virtual tour embeds, mortgage calculator, and agent inquiry forms for a real estate agency client.",
    tags: ["Next.js", "Mapbox", "MongoDB", "Tailwind"],
    category: "Real Estate",
    color: "from-blue-500 to-cyan-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Restaurant Ordering & Reservations",
    description: "Online ordering and table reservation site for a restaurant chain, with menu management, Stripe checkout, and SMS order confirmations.",
    tags: ["React", "Node.js", "Stripe", "Tailwind"],
    category: "Restaurant",
    color: "from-purple-500 to-pink-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Fitness Coaching Booking App",
    description: "Cross-platform booking app for a personal trainer, with class scheduling, push reminders, and in-app payments for session packages.",
    tags: ["React Native", "Firebase", "Stripe", "Expo"],
    category: "Mobile",
    color: "from-green-500 to-teal-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Personal Portfolio & Resume Site",
    description: "Animated personal portfolio for a freelance designer, featuring a project showcase, blog, and downloadable resume with smooth Framer Motion transitions.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "MDX"],
    category: "Portfolio",
    color: "from-orange-500 to-yellow-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Online Course Marketplace",
    description: "Marketplace where instructors upload video courses and students enroll and track progress, with quizzes, certificates, and Stripe payouts.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS S3"],
    category: "EdTech",
    color: "from-red-500 to-orange-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Local Business Landing Page & CMS",
    description: "Marketing site for a small business with an editable CMS, contact form, testimonials, and SEO-optimized service pages.",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "Vercel"],
    category: "Business",
    color: "from-indigo-500 to-purple-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Web app for tracking crypto holdings across wallets and exchanges, with live price feeds, P&L charts, and price alerts.",
    tags: ["React", "Chart.js", "Node.js", "CoinGecko API"],
    category: "FinTech",
    color: "from-teal-500 to-green-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Remote Job Board Platform",
    description: "Job board for remote tech roles with employer dashboards, advanced filtering search, and automated email alerts for new postings.",
    tags: ["Next.js", "PostgreSQL", "Algolia", "Tailwind"],
    category: "Job Board",
    color: "from-pink-500 to-rose-400",
    live: "https://example.com",
    github: "https://github.com",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Work We&apos;re <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects across industries — each one built with care, precision, and a focus on results.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map(({ title, description, tags, category, color, live, github }) => (
              <Card key={title} className="card-hover border-border/60 overflow-hidden group">
                <div className={`h-52 bg-gradient-to-br ${color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 grid-pattern" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-7xl font-bold tracking-tighter">
                      {title.split(" ")[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <a href={github} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50">
                      <GitFork className="w-4 h-4" />
                    </a>
                    <a href={live} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur text-xs">{category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

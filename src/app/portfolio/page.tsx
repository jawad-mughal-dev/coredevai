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
    title: "SaaSFlow Dashboard",
    description: "Multi-tenant SaaS platform with role-based access control, analytics, and Stripe subscription management.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    category: "SaaS",
    color: "from-blue-500 to-cyan-400",
    live: "#",
    github: "#",
  },
  {
    title: "ShopCore E-Commerce",
    description: "High-performance e-commerce platform with real-time inventory and a headless CMS for a retail brand.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "E-Commerce",
    color: "from-purple-500 to-pink-400",
    live: "#",
    github: "#",
  },
  {
    title: "HealthTrack Mobile App",
    description: "Cross-platform fitness app with wearable integration, AI insights, and social features for 10K+ users.",
    tags: ["React Native", "FastAPI", "Python", "AWS"],
    category: "Mobile",
    color: "from-green-500 to-teal-400",
    live: "#",
    github: "#",
  },
  {
    title: "AI Content Studio",
    description: "GPT-4 powered content platform with team collaboration, brand voice settings, and version history.",
    tags: ["Next.js", "OpenAI", "Prisma", "Redis"],
    category: "AI Tool",
    color: "from-orange-500 to-yellow-400",
    live: "#",
    github: "#",
  },
  {
    title: "LogiTrack Fleet System",
    description: "Real-time fleet management system with GPS tracking, driver scoring, and maintenance scheduling.",
    tags: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
    category: "Enterprise",
    color: "from-red-500 to-orange-400",
    live: "#",
    github: "#",
  },
  {
    title: "EduLearn Platform",
    description: "E-learning platform with video courses, quizzes, certificates, and AI-powered learning paths.",
    tags: ["Next.js", "Prisma", "AWS S3", "OpenAI"],
    category: "EdTech",
    color: "from-indigo-500 to-purple-400",
    live: "#",
    github: "#",
  },
  {
    title: "FinFlow Analytics",
    description: "Fintech dashboard for personal finance tracking, expense categorization, and investment insights.",
    tags: ["React", "D3.js", "FastAPI", "PostgreSQL"],
    category: "FinTech",
    color: "from-teal-500 to-green-400",
    live: "#",
    github: "#",
  },
  {
    title: "PropMatch Real Estate",
    description: "AI-powered property recommendation platform with virtual tours, mortgage calculator, and agent CRM.",
    tags: ["Next.js", "Mapbox", "Node.js", "MongoDB"],
    category: "PropTech",
    color: "from-pink-500 to-rose-400",
    live: "#",
    github: "#",
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

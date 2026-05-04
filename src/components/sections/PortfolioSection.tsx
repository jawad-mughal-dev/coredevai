import Link from "next/link";
import { ExternalLink, GitFork, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const projects = [
  {
    title: "SaaSFlow Dashboard",
    description:
      "A multi-tenant SaaS platform with role-based access control, analytics dashboard, and subscription management built with Next.js and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    category: "Web App",
    color: "from-blue-500 to-cyan-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "ShopCore E-Commerce",
    description:
      "A high-performance e-commerce platform with real-time inventory, payment processing, and an admin CMS for a retail brand.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "E-Commerce",
    color: "from-purple-500 to-pink-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "HealthTrack Mobile App",
    description:
      "Cross-platform health & fitness app with wearable integration, AI-powered insights, and social features for 10,000+ active users.",
    tags: ["React Native", "FastAPI", "Python", "AWS"],
    category: "Mobile App",
    color: "from-green-500 to-teal-400",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "AI Content Studio",
    description:
      "AI-powered content generation platform integrated with GPT-4, featuring team collaboration, version history, and brand voice settings.",
    tags: ["Next.js", "OpenAI", "Prisma", "Redis"],
    category: "AI Tool",
    color: "from-orange-500 to-yellow-400",
    live: "https://example.com",
    github: "https://github.com",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Projects We're"
          highlightedTitle="Proud Of"
          description="A selection of recent projects that showcase our range, quality, and commitment to technical excellence."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, description, tags, category, color, live, github }) => (
            <Card
              key={title}
              className="card-hover border-border/60 overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 grid-pattern" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    <GitFork className="w-4 h-4" />
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs backdrop-blur">
                    {category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const projects = [
  {
    title: "Gymanger",
    description:
      "All-in-one sports facility management SaaS — memberships, bookings, class scheduling, payroll, POS, door access control, and advanced financial reporting for gyms across Pakistan.",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    category: "SaaS",
    color: "from-purple-500 to-indigo-400",
    live: "https://www.gymanger.com",
  },
  {
    title: "Right Way Garage Doors",
    description:
      "Full-service website for Northern California's #1 garage door company since 1980 — service pages, product catalogue, showroom locations, online scheduling, and lead capture.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Business",
    color: "from-blue-500 to-cyan-400",
    live: "https://www.rwgaragedoors.com",
  },
  {
    title: "MedWing Express",
    description:
      "Corporate website for a global air medical patient transportation company — service pages, quote request flow, and a clean, trust-building design for a healthcare audience.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Healthcare",
    color: "from-red-500 to-orange-400",
    live: "https://medwingexpress.com",
  },
  {
    title: "Wonders of Heaven PK",
    description:
      "E-commerce store for a natural hair care and wellness brand — product catalogue, WooCommerce checkout, combos, customer reviews, and newsletter integration.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-Commerce",
    color: "from-green-500 to-teal-400",
    live: "https://wondersofheavenpk.com",
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
          {projects.map(({ title, description, tags, category, color, live }) => (
            <Card
              key={title}
              className="card-hover border-border/60 overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 grid-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-7xl font-bold tracking-tighter">
                    {title.split(" ")[0]}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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

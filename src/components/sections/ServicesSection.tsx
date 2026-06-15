import Link from "next/link";
import { Globe, Smartphone, Palette, Server, Bot, ShieldCheck, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const services = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and Node.js. Scalable, performant, and SEO-optimized.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with React Native. Native-quality experience for iOS and Android from a single codebase.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Modern, intuitive interfaces designed with Figma. User research, wireframing, and pixel-perfect implementation.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    slug: "api-development",
    icon: Server,
    title: "Backend & APIs",
    description:
      "Robust RESTful and GraphQL APIs. Microservices, authentication, databases, and cloud infrastructure.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    tags: ["REST", "GraphQL", "PostgreSQL", "AWS"],
  },
  {
    slug: "ai-integration",
    icon: Bot,
    title: "AI Integration",
    description:
      "Integrate AI into your product — chatbots, recommendation engines, NLP, and OpenAI-powered features.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
  },
  {
    slug: "devops-cicd",
    icon: ShieldCheck,
    title: "DevOps & CI/CD",
    description:
      "Automated deployments, Docker, Kubernetes, and cloud infrastructure on AWS, GCP, or Vercel.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    tags: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Services Built for"
          highlightedTitle="Modern Businesses"
          description="From MVPs to enterprise platforms, we deliver end-to-end digital solutions that scale with your ambitions."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, color, bg, tags }) => (
            <Card
              key={title}
              className="card-hover border-border/60 bg-card group cursor-pointer"
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bg} ${color} mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
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
            <Link href="/services">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

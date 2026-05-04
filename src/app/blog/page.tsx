import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and case studies from the CoreDevAI engineering team.",
};

const posts = [
  {
    slug: "nextjs-app-router-best-practices",
    title: "Next.js App Router: Best Practices for Production",
    description: "A deep dive into structuring large-scale Next.js applications with the App Router — layouts, server components, caching, and performance optimization.",
    category: "Next.js",
    author: "Jawad A.",
    readTime: "8 min read",
    date: "Apr 28, 2025",
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
  },
  {
    slug: "fastapi-vs-express-comparison",
    title: "FastAPI vs Express.js: Which Should You Choose?",
    description: "A practical comparison for full-stack developers. Performance benchmarks, DX differences, and when to use each for your next project.",
    category: "Backend",
    author: "Bilal R.",
    readTime: "6 min read",
    date: "Apr 15, 2025",
    gradient: "from-green-500 to-teal-400",
    featured: true,
  },
  {
    slug: "react-native-performance-tips",
    title: "10 React Native Performance Tips for 2025",
    description: "From FlashList to Reanimated, here are the techniques we use to ship buttery-smooth React Native apps that feel truly native.",
    category: "Mobile",
    author: "Jawad A.",
    readTime: "7 min read",
    date: "Apr 5, 2025",
    gradient: "from-purple-500 to-pink-400",
    featured: false,
  },
  {
    slug: "building-saas-with-nextjs-stripe",
    title: "Building a SaaS from Scratch with Next.js + Stripe",
    description: "Step-by-step guide to building a multi-tenant SaaS with authentication, subscription billing, and a customer portal.",
    category: "SaaS",
    author: "Jawad A.",
    readTime: "12 min read",
    date: "Mar 22, 2025",
    gradient: "from-orange-500 to-yellow-400",
    featured: false,
  },
  {
    slug: "github-actions-cicd-guide",
    title: "GitHub Actions CI/CD: A Complete Guide for Node.js",
    description: "Automate testing, building, and deploying your Node.js app to AWS or Vercel using GitHub Actions workflows.",
    category: "DevOps",
    author: "Bilal R.",
    readTime: "9 min read",
    date: "Mar 10, 2025",
    gradient: "from-teal-500 to-green-400",
    featured: false,
  },
  {
    slug: "ai-features-saas-openai",
    title: "How to Add AI Features to Your SaaS with OpenAI",
    description: "Practical guide to integrating GPT-4 into a production SaaS — rate limiting, cost management, streaming responses, and UX patterns.",
    category: "AI",
    author: "Jawad A.",
    readTime: "10 min read",
    date: "Feb 28, 2025",
    gradient: "from-pink-500 to-rose-400",
    featured: false,
  },
];

const featuredPosts = posts.filter((p) => p.featured);
const regularPosts = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">Blog</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Insights from the <span className="gradient-text">Engineering Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tutorials, deep dives, and case studies from our engineers. We write what we wish
            we had when we were learning.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured"
            title="Latest"
            highlightedTitle="Articles"
            centered={false}
            className="mb-10"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featuredPosts.map(({ slug, title, description, category, author, readTime, date, gradient }) => (
              <Card key={slug} className="card-hover border-border/60 overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 grid-pattern" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-8xl font-bold">{category[0]}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur text-xs">{category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                    <span>{date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All posts */}
          <h2 className="text-xl font-semibold mb-6">All Articles</h2>
          <div className="space-y-4">
            {regularPosts.map(({ slug, title, description, category, author, readTime, date, gradient }) => (
              <Card key={slug} className="card-hover border-border/60 overflow-hidden group">
                <div className="flex gap-0">
                  <div className={`w-2 bg-gradient-to-b ${gradient} shrink-0`} />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="primary" className="text-xs">{category}</Badge>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                      <span>{date}</span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${slug}`}>Read <ArrowRight className="w-3 h-3" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

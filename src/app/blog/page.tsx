import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { featuredPosts, regularPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and case studies from the CoreDevAI engineering team.",
};

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
            {regularPosts.map(({ slug, title, description, category, readTime, date, gradient }) => (
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

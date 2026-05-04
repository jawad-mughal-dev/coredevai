import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 55% / 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 60% / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur text-sm text-muted-foreground mb-8 animate-fade-in-up">
          <div className="flex -space-x-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-primary/20 border border-background" />
            ))}
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span>Trusted by 30+ clients worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
          We Build{" "}
          <span className="gradient-text">Digital Products</span>
          <br />
          That{" "}
          <span className="relative">
            Drive Results
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C50 4 150 1 298 9"
                stroke="hsl(217 91% 55%)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
          CoreDevAI is a modern software house specializing in full-stack web apps, mobile
          solutions, and AI-powered tools. From idea to launch — we make it happen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animate-delay-300">
          <Button asChild size="xl" variant="gradient">
            <Link href="/contact">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link href="/portfolio">
              <Play className="w-4 h-4" /> View Our Work
            </Link>
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="animate-fade-in-up animate-delay-400">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Built with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker"].map(
              (tech) => (
                <Badge key={tech} variant="outline" className="px-3 py-1 text-xs">
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1">
          <div className="w-1 h-2.5 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

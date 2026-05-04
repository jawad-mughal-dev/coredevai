import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Zap, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CoreDevAI — our mission, values, and the team behind the code.",
};

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "We measure success by your success. Every decision is driven by outcomes, not just deliverables.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Move Fast, Build Right",
    description: "Speed without quality is waste. We ship quickly while maintaining clean, scalable code.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat every client's project as if it were our own. Transparency and trust are non-negotiable.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Great products are built by great teams. We foster a culture of curiosity, growth, and mutual respect.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

const team = [
  {
    name: "Jawad A.",
    role: "Founder & Lead Engineer",
    bio: "Full-stack engineer with expertise in MERN stack, system design, and building products from 0 to 1.",
    skills: ["Next.js", "Node.js", "System Design", "AWS"],
    avatar: "JA",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Sara K.",
    role: "UI/UX Designer",
    bio: "Product designer obsessed with creating intuitive experiences that convert. Figma & Framer specialist.",
    skills: ["Figma", "Framer", "User Research", "Design Systems"],
    avatar: "SK",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    name: "Bilal R.",
    role: "Backend Engineer",
    bio: "Backend specialist with deep experience in scalable APIs, databases, and cloud infrastructure.",
    skills: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    avatar: "BR",
    gradient: "from-green-500 to-teal-400",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, hsl(217 91% 55% / 0.1) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">
            About CoreDevAI
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            We&apos;re a Team of{" "}
            <span className="gradient-text">Builders & Dreamers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CoreDevAI is a modern software house founded with one belief: great software changes lives.
            We combine technical depth with creative thinking to build products that matter.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="primary" className="mb-4 text-xs uppercase tracking-wider font-semibold">
                Our Mission
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Turning Vision into <span className="gradient-text">Working Software</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We started CoreDevAI because we saw a gap: businesses with great ideas but no
                reliable technical partner to bring them to life. Too many projects fail not because
                of bad ideas, but bad execution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to be the engineering partner that founders, product managers, and
                enterprises can rely on — from day one through to scale. We bring the same level of
                care to a two-person startup as we do to an enterprise client.
              </p>
              <Button asChild variant="gradient">
                <Link href="/contact">
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Shipped", value: "50+" },
                { label: "Countries Served", value: "12+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Years in Business", value: "3+" },
              ].map(({ label, value }) => (
                <Card key={label} className="text-center p-6 border-border/60">
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What We"
            highlightedTitle="Stand For"
            description="The principles that guide every decision, every line of code, and every client interaction."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description, color, bg }) => (
              <Card key={title} className="border-border/60 p-6 flex gap-4">
                <div className={`${bg} ${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Team"
            title="The People Behind"
            highlightedTitle="CoreDevAI"
            description="A small, focused team of engineers and designers who love what they do."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(({ name, role, bio, skills, avatar, gradient }) => (
              <Card key={name} className="border-border/60 overflow-hidden card-hover">
                <div className={`h-24 bg-gradient-to-br ${gradient} relative`}>
                  <div className="absolute inset-0 opacity-20 grid-pattern" />
                  <div className="absolute -bottom-8 left-6 w-16 h-16 rounded-2xl bg-card border-4 border-card flex items-center justify-center text-lg font-bold text-primary">
                    {avatar}
                  </div>
                </div>
                <CardContent className="pt-12 pb-6">
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="text-sm text-primary mb-3">{role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {skill}
                      </span>
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

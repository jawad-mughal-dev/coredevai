import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack web development, mobile apps, UI/UX design, AI integration, and DevOps services.",
};

const process = [
  { step: "01", title: "Discovery Call", description: "We start with a free 30-minute call to understand your goals, timeline, and budget." },
  { step: "02", title: "Proposal & Scoping", description: "We send a detailed project scope, tech stack recommendations, and fixed-price quote within 48 hours." },
  { step: "03", title: "Design & Build", description: "Iterative development with weekly demos. You have full visibility into progress at every stage." },
  { step: "04", title: "Launch & Support", description: "Deployment to production, performance monitoring, and post-launch support included." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            End-to-End <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From ideation to launch, we cover every layer of modern software development.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, color, bg, tags }) => (
              <Card key={title} className="card-hover border-border/60 group">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${bg} ${color} mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {["Fixed-price quotes", "Weekly progress updates", "Post-launch support"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="Our"
            highlightedTitle="Process"
            description="A proven, transparent process that keeps projects on track and clients informed."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {process.map(({ step, title, description }) => (
              <div key={step} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  {step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

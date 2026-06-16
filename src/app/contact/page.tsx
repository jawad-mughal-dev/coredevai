import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with CoreDevAI. Start a project, get a quote, or just say hello.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@coredevai.com",
    href: "https://mail.google.com/mail/?view=cm&to=contact@coredevai.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0334 3709700",
    href: "https://wa.me/923343709700",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0305 4902143",
    href: "https://wa.me/923054902143",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://www.google.com/maps/search/?api=1&query=Lahore,+Pakistan",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "https://wa.me/923343709700",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something <span className="gradient-text">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form or reach out
            directly — we respond to every inquiry.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whether you&apos;re a startup with a new idea or an enterprise looking to modernize,
                  we&apos;re here to help you ship better software, faster.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/40 transition-colors group"
                  >
                    <div className={`${bg} ${color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <Card className="border-border/60 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-cyan-400" />
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold mb-2">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Not sure where to start? Book a free 30-minute call and let&apos;s figure it out together.
                    No commitment required.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/60 p-6 sm:p-8">
                <h2 className="text-xl font-semibold mb-1">Tell Us About Your Project</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours with a plan and quote.
                </p>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

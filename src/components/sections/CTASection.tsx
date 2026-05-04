import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary via-blue-500 to-cyan-400 p-1">
          <div className="rounded-xl bg-card/95 backdrop-blur px-8 py-16 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(217 91% 55% / 0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Ready to Build Something{" "}
                <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Let&apos;s talk about your project. We&apos;ll respond within 24 hours with a plan and a quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="gradient">
                  <Link href="/contact">
                    Start a Project <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStartup Inc.",
    avatar: "SM",
    rating: 5,
    text: "CoreDevAI transformed our idea into a polished product in record time. Their team is incredibly skilled, communicative, and truly cares about delivering quality. We went from MVP to 2,000 users in 3 months.",
  },
  {
    name: "Ahmed Raza",
    role: "Founder, GrowthHub",
    avatar: "AR",
    rating: 5,
    text: "Working with CoreDevAI was a game-changer. They rebuilt our entire platform from scratch — cleaner architecture, better performance, and a UI our users love. Highly recommended.",
  },
  {
    name: "Emily Clarke",
    role: "Product Manager, RetailCo",
    avatar: "EC",
    rating: 5,
    text: "The team delivered our e-commerce platform on time and on budget. The code quality is exceptional and the documentation they provided made it easy for our in-house team to take over.",
  },
  {
    name: "Carlos Mendez",
    role: "CTO, DataViz Labs",
    avatar: "CM",
    rating: 5,
    text: "Exceptional technical skills paired with great project management. CoreDevAI built our analytics dashboard with real-time features we didn't even think were feasible in our timeline.",
  },
  {
    name: "Nadia Hassan",
    role: "Director, EduTech Platform",
    avatar: "NH",
    rating: 5,
    text: "They're not just developers — they're strategic partners. The AI features they integrated into our learning platform have genuinely improved student outcomes.",
  },
  {
    name: "James Okafor",
    role: "Co-Founder, FinFlow",
    avatar: "JO",
    rating: 5,
    text: "Security and scalability were our top concerns for a fintech app. CoreDevAI nailed both. Their backend architecture handles our peak loads flawlessly.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Love"
          title="What Our Clients"
          highlightedTitle="Say About Us"
          description="Don't take our word for it — here's what the teams we've worked with have to say."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, rating, text }) => (
            <Card key={name} className="border-border/60 bg-card relative overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

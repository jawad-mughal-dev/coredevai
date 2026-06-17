import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore CoreDevAI's portfolio of web apps, mobile solutions, and AI-powered digital products.",
};

const allProjects = [
  {
    title: "Gymanger",
    description:
      "All-in-one sports facility management SaaS — memberships, bookings, class scheduling, payroll, POS, door access control, and advanced financial reporting. Serving 95+ gyms and fitness facilities across Pakistan.",
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
      "Corporate website for a global air medical patient transportation company — commercial medical escort services, stretcher services, quote request flow, and a clean trust-building design.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Healthcare",
    color: "from-red-500 to-orange-400",
    live: "https://medwingexpress.com",
  },
  {
    title: "Wonders of Heaven PK",
    description:
      "E-commerce store for a natural hair care and wellness brand selling organic hair oils, protein shampoos, and detox teas — WooCommerce checkout, product combos, reviews, and newsletter integration.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-Commerce",
    color: "from-green-500 to-teal-400",
    live: "https://wondersofheavenpk.com",
  },
  {
    title: "Lide Legal",
    description:
      "Professional law firm website for a Singapore-based legal practice specialising in corporate law, M&A, capital markets, and ESG — practice area pages, team profiles, and lead generation forms.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Legal",
    color: "from-slate-500 to-gray-400",
    live: "https://lidelegal.com",
  },
  {
    title: "Mar Pacific Food Services",
    description:
      "Corporate website for an LA-based food distribution, 3PL warehousing, and supply chain logistics company — service pages, client portal integration, USDA compliance info, and contact flows.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Logistics",
    color: "from-orange-500 to-yellow-400",
    live: "https://x72.7b1.myftpupload.com",
  },
  {
    title: "Krämer Dental",
    description:
      "Development website for a German dental products company — clean, professional design with product and service pages tailored for a medical/dental industry audience.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Healthcare",
    color: "from-teal-500 to-green-400",
    live: "https://entwicklung.kraemerdental.de",
  },
  {
    title: "Italplastick Windows",
    description:
      "Product showcase website for an Italian PVC windows and doors manufacturer — product catalogue, specifications, and inquiry forms for residential and commercial buyers.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "Manufacturing",
    color: "from-indigo-500 to-purple-400",
    live: "https://finestre.italplastick.com",
  },
  {
    title: "My Schoom",
    description:
      "EdTech SaaS platform for school management — student enrollment, attendance tracking, timetables, grade management, parent portals, and an admin dashboard for institutions.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    category: "EdTech",
    color: "from-violet-500 to-purple-400",
    live: "https://my-schoom.vercel.app",
  },
  {
    title: "SoulMatchh",
    description:
      "Dating and matchmaking platform with profile creation, smart matching, real-time chat, and subscription tiers — built for meaningful connections.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    category: "Social",
    color: "from-pink-500 to-rose-400",
    live: "https://soulmatchh.netlify.app",
  },
  {
    title: "Denka CRM",
    description:
      "Customer relationship management system with lead tracking, sales pipeline, activity logs, analytics dashboard, and team collaboration tools for growing businesses.",
    tags: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
    category: "CRM",
    color: "from-sky-500 to-blue-400",
    live: "https://denka-crm.netlify.app",
  },
  {
    title: "Smart Commerce",
    description:
      "Full-featured e-commerce platform with product catalogue, cart, secure checkout, order management, and a merchant dashboard for multi-vendor selling.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    category: "E-Commerce",
    color: "from-emerald-500 to-green-400",
    live: "https://smart-commeerce.netlify.app",
  },
  {
    title: "Tikao",
    description:
      "Social commerce marketplace connecting buyers and sellers — product listings, reviews, real-time notifications, and a clean mobile-first shopping experience.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    category: "Marketplace",
    color: "from-amber-500 to-orange-400",
    live: "https://tikao-frontend.vercel.app",
  },
  {
    title: "BA Money Market",
    description:
      "Fintech platform for money market investment management — portfolio tracking, transaction history, yield reports, and a secure dashboard for investors.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    category: "FinTech",
    color: "from-cyan-500 to-teal-400",
    live: "https://ba-money-market.netlify.app",
  },
  {
    title: "Stenger Bike",
    description:
      "Premium German bicycle brand website — product catalogue, model specifications, dealer network locator, and WooCommerce-powered online shop for cycling enthusiasts.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-Commerce",
    color: "from-stone-500 to-slate-400",
    live: "https://stenger-bike.de",
  },
  {
    title: "Ambient Weaving",
    description:
      "Experimental interactive installation by ZOZO Labs (Japan) exploring the intersection of fashion, ambient computing, and physical textile weaving through immersive digital experiences.",
    tags: ["React", "Three.js", "WebGL", "TypeScript"],
    category: "Innovation",
    color: "from-fuchsia-500 to-pink-400",
    live: "https://ambientweaving.lab.zozo.jp",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Work We&apos;re <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects across industries — each one built with care, precision, and a focus on results.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map(({ title, description, tags, category, color, live }) => (
              <Card key={title} className="card-hover border-border/60 overflow-hidden group">
                <a href={live} target="_blank" rel="noopener noreferrer" className={`h-52 bg-gradient-to-br ${color} relative overflow-hidden flex cursor-pointer`}>
                  <div className="absolute inset-0 opacity-20 grid-pattern" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-7xl font-bold tracking-tighter">
                      {title.split(" ")[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="w-9 h-9 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white group-hover:bg-black/50">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur text-xs">{category}</Badge>
                  </div>
                </a>
                <CardHeader className="pb-2">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">{tag}</span>
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

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: { default: "CoreDevAI — Modern Software House", template: "%s | CoreDevAI" },
  description: "CoreDevAI builds world-class web apps, mobile solutions, and digital products. Trusted by startups and enterprises worldwide.",
  keywords: ["software house", "web development", "mobile apps", "React", "Next.js"],
  authors: [{ name: "CoreDevAI", url: "https://coredevai.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coredevai.com",
    siteName: "CoreDevAI",
    title: "CoreDevAI — Modern Software House",
    description: "We build exceptional digital products that help businesses grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreDevAI — Modern Software House",
    description: "We build exceptional digital products that help businesses grow.",
    creator: "@coredevai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}

import Link from "next/link";
import { X, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Apps", href: "/services#mobile-apps" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "API Development", href: "/services#api-development" },
  ],
};

const contactLinks = [
  { label: "Get a Quote", href: "/contact", icon: null },
  { label: "contact@coredevai.com", href: "mailto:contact@coredevai.com", icon: Mail },
  { label: "0334 3709700", href: "https://wa.me/923343709700", icon: MessageCircle },
  { label: "0305 4902143", href: "https://wa.me/923054902143", icon: MessageCircle },
];

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/coredevai?utm_source=qr&igsh=MXN6MmNnMDRzOGhpOQ==", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1Kc5RiNCf6/", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/coredevai/", label: "LinkedIn" },
  { icon: X, href: "https://x.com/coredevai", label: "X" },
  { icon: Mail, href: "mailto:contact@coredevai.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              We build exceptional digital products — from web apps to mobile solutions — that help businesses grow and thrive in the digital age.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Contact</h3>
            <ul className="space-y-3">
              {contactLinks.map(({ label, href, icon: Icon }) => {
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CoreDevAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

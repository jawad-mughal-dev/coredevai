import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Temporary placeholder logo (CD monogram). Swap the mark and/or wordmark
 * here once the final brand logo is ready — this is the single source used
 * by both the Navbar and Footer.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-bold text-lg group", className)}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white text-xs font-bold shrink-0 group-hover:scale-105 transition-transform">
        CD
      </div>
      <span className="gradient-text">CoreDevAI</span>
    </Link>
  );
}

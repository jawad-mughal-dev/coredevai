import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-bold text-lg group", className)}>
      <span className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-[#040920] group-hover:scale-105 transition-transform">
        <Image
          src="/logo-mark.png"
          alt="CoreDevAI logo"
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </span>
      <span className="gradient-text">CoreDevAI</span>
    </Link>
  );
}

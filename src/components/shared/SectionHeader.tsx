import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightedTitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "max-w-2xl", centered && "mx-auto", className)}>
      {badge && (
        <Badge variant="primary" className="mb-4 text-xs tracking-wider uppercase font-semibold">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}{" "}
        {highlightedTitle && (
          <span className="gradient-text">{highlightedTitle}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

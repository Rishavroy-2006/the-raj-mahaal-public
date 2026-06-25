import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  label: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ label, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left", className)}>
      <div className={cn("flex items-center gap-4 mb-6", align === "center" && "justify-center")}>
        <div className="h-px w-12 bg-luxury-gold/50"></div>
        <span className="text-[13px] font-semibold text-luxury-gold tracking-widest uppercase">
          {label}
        </span>
        {align === "center" && <div className="h-px w-12 bg-luxury-gold/50"></div>}
      </div>
      {title && (
        <h2 className="font-display text-luxury-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className={cn("text-luxury-cream/80 text-base md:text-lg font-light leading-relaxed", align === "center" && "max-w-2xl mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}

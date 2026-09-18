import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-gold-light" : "text-gold-dark"
          )}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance font-heading text-3xl font-semibold uppercase tracking-tight sm:text-4xl",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-white/70" : "text-body")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

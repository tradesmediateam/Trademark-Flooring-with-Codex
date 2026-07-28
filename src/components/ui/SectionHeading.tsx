import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: TitleTag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">{description}</p>
      ) : null}
    </div>
  );
}

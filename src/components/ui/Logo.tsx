import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo/logo-mark.svg"
        alt={site.name}
        width={164}
        height={100}
        priority
        unoptimized
        className={cn(
          "h-auto w-[112px] shrink-0 sm:w-[126px] lg:w-[154px]",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </Link>
  );
}

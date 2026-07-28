import { site, telHref } from "@/lib/site";
import { PhoneIcon, MailIcon, ClockIcon } from "@/components/ui/Icons";

/**
 * Slim utility bar above the main navigation — shows quick contact details
 * and business hours, echoing the heritage-flooring reference layout.
 */
export function TopBar() {
  return (
    <div className="hidden bg-amber-950 text-amber-50 lg:block">
      <div className="container flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a
            href={telHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-amber-300" />
            <span>{site.phone.display}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MailIcon className="h-3.5 w-3.5 text-amber-300" />
            <span>{site.email}</span>
          </a>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <ClockIcon className="h-3.5 w-3.5 text-amber-300" />
          <span>
            {site.hours[0].days} {site.hours[0].open} &ndash; {site.hours[0].close}
          </span>
        </div>
      </div>
    </div>
  );
}

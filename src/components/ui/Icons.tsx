import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = (props: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props,
});

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.7 3c.1.4 0 .8-.3 1L7.5 10.5a12 12 0 0 0 6 6l1.7-1.2c.3-.2.7-.3 1-.2l3 .7c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 5 8-5" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m5 12.5 4.2 4.2L19 6.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3.5 5 6v5c0 4.4 3 7.7 7 9.5 4-1.8 7-5.1 7-9.5V6l-7-2.5Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
    </svg>
  );
}

export function GaugeIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 18a8 8 0 1 1 14 0" />
      <path d="m12 14 3.5-3.5" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-.7 0-1 0-1-1Z" />
      <path d="M9 15c2-3 4.5-4.5 8-5.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...baseProps({ fill: "currentColor", stroke: "none", ...props })}>
      <path d="m12 3.5 2.5 5.2 5.7.8-4.1 4 1 5.7L12 21.3 6.9 24l1-5.7-4.1-4 5.7-.8L12 3.5Z" />
    </svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 18 5-5 3 3 3-4 5 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps({ strokeWidth: 1.8, ...props })}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps({ strokeWidth: 1.8, ...props })}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

const iconMap = {
  shield: ShieldIcon,
  clock: ClockIcon,
  sparkles: SparklesIcon,
  users: UsersIcon,
  gauge: GaugeIcon,
  leaf: LeafIcon,
} as const;

export function ValueIcon({
  name,
  ...props
}: { name: keyof typeof iconMap } & IconProps) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}

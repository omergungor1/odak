import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  Car,
  ChartLine,
  ChevronRight,
  Cpu,
  FileText,
  GraduationCap,
  House,
  Map,
  MapPin,
  Megaphone,
  Search,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";

const iconMap = {
  cpu: Cpu,
  users: Users,
  report: FileText,
  map: Map,
  calendar: CalendarDays,
  car: Car,
  search: Search,
  chart: ChartLine,
  pin: MapPin,
  build: Building2,
  school: GraduationCap,
  megaphone: Megaphone,
};

export function Icon({ name, className = "size-5" }) {
  const Cmp = iconMap[name] ?? FileText;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
}

export function Logo({ variant = "color", className = "h-11 w-auto", priority = false }) {
  return (
    <Image
      src={variant === "white" ? "/logo-white.png" : "/logo-color.png"}
      alt={site.name}
      width={640}
      height={256}
      priority={priority}
      className={className}
    />
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand ${className}`}>
      <span className="h-2.5 w-1 rounded-full bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, before, highlight, after, description, align = "center", as: Tag = "h2", className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="mt-3 text-3xl font-bold tracking-tight text-heading md:text-4xl">
        {before}
        {before && highlight ? " " : ""}
        {highlight && <span className="text-brand">{highlight}</span>}
        {after ? " " : ""}
        {after}
      </Tag>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Sayfa yolu" className="flex items-center gap-1.5 text-xs text-muted">
      <Link href="/" className="hover:text-brand" aria-label="Anasayfa">
        <House className="size-3.5" />
      </Link>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-1.5">
          <ChevronRight className="size-3" />
          <span className="text-ink">{item}</span>
        </span>
      ))}
    </nav>
  );
}

export function PageIntro({ breadcrumb, title, children }) {
  return (
    <section className="container-site pt-6">
      <Breadcrumb items={[breadcrumb]} />
      <h1 className="mt-5 text-3xl font-bold tracking-tight text-heading md:text-[34px]">{title}</h1>
      {children && <div className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{children}</div>}
    </section>
  );
}

export function Photo({ label, src, tone = "dark", showLogo = true, className = "", sizes, position = "center", children }) {
  if (src) {
    return (
      <div className={`relative isolate overflow-hidden bg-navy ${className}`}>
        <Image
          src={src}
          alt={label || ""}
          fill
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"}
          className="object-cover"
          style={{ objectPosition: position }}
        />
        {children}
      </div>
    );
  }
  const dark = tone === "dark";
  return (
    <div
      className={`relative isolate overflow-hidden ${
        dark ? "bg-gradient-to-br from-navy-light via-navy to-navy-dark" : "bg-gradient-to-br from-surface via-white to-surface-blue"
      } ${className}`}
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: dark
            ? "linear-gradient(115deg, transparent 40%, rgba(0,109,185,.55) 40.5%, transparent 41.5%), linear-gradient(65deg, transparent 62%, rgba(255,114,20,.28) 62.5%, transparent 64%), radial-gradient(circle at 75% 20%, rgba(255,255,255,.12), transparent 45%)"
            : "linear-gradient(115deg, transparent 40%, rgba(0,109,185,.22) 40.5%, transparent 41.5%), radial-gradient(circle at 75% 20%, rgba(6,40,90,.05), transparent 45%)",
        }}
      />
      {showLogo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <Logo variant={dark ? "white" : "color"} className={`h-8 w-auto ${dark ? "opacity-80" : "opacity-70"}`} />
          {label && (
            <span className={`text-[11px] font-medium uppercase tracking-wider ${dark ? "text-white/60" : "text-neutral-500"}`}>
              {label}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export function Stars({ rating, className = "size-3" }) {
  return (
    <span className="flex items-center gap-px text-accent" aria-label={`${rating} yıldız`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${className} ${rating >= i - 0.25 ? "fill-current" : "fill-neutral-300"}`}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui";
import { WhatsAppIcon } from "@/components/brand-icons";
import { corporateNav, mainNav, site, whatsappUrl } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [corpOpen, setCorpOpen] = useState(false);
  const corpRef = useRef(null);

  useEffect(() => {
    if (!corpOpen) return;
    const onClick = (e) => {
      if (corpRef.current && !corpRef.current.contains(e.target)) setCorpOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [corpOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const corpActive = corporateNav.some((l) => isActive(l.href));
  const close = () => {
    setDrawerOpen(false);
    setCorpOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 pt-3">
        <div className="container-site">
          <div className="flex h-[72px] items-center justify-between gap-4 rounded-2xl border border-line/70 bg-white/95 px-4 shadow-float backdrop-blur sm:px-6">
            <Link href="/" onClick={close} aria-label={`${site.name} - Anasayfa`} className="shrink-0">
              <Logo priority className="h-10 w-auto sm:h-11" />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-2.5 py-2 text-[15px] font-semibold transition-colors hover:text-brand ${
                    isActive(link.href) ? "text-brand" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative" ref={corpRef}>
                <button
                  type="button"
                  onClick={() => setCorpOpen((v) => !v)}
                  aria-expanded={corpOpen}
                  className={`flex items-center gap-1 rounded-lg px-2.5 py-2 text-[15px] font-semibold hover:text-brand ${
                    corpActive ? "text-brand" : "text-ink"
                  }`}
                >
                  Kurumsal
                  <ChevronDown className={`size-3.5 transition-transform ${corpOpen ? "rotate-180" : ""}`} />
                </button>
                {corpOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-line bg-white p-1.5 shadow-float">
                    {corporateNav.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={close}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface ${
                          isActive(link.href) ? "text-brand" : "text-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={site.phoneHref}
                aria-label={`Hemen ara: ${site.phone}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-[18px]" />
                Hemen Ara
              </a>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Menüyü aç"
                aria-expanded={drawerOpen}
                className="flex h-10 w-10 flex-col items-center justify-center gap-[7px]"
              >
                <span className="h-0.5 w-7 rounded-full bg-ink" />
                <span className="h-0.5 w-7 rounded-full bg-ink" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobil menü"
        inert={!drawerOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo className="h-9 w-auto" />
          <button type="button" onClick={close} aria-label="Menüyü kapat" className="grid size-9 place-items-center rounded-full hover:bg-surface">
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {[...mainNav, ...corporateNav].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold hover:bg-surface ${
                isActive(link.href) ? "text-brand" : "text-ink"
              }`}
            >
              {link.label}
              <ChevronRight className="size-4 text-neutral-400" />
            </Link>
          ))}
        </nav>
        <div className="grid gap-2 border-t border-line p-5">
          <a href={site.phoneHref} className="btn-primary h-11">
            <Phone className="size-4" /> Hemen Ara: {site.phone}
          </a>
          <a href={whatsappUrl("Merhaba, bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp h-11">
            <WhatsAppIcon className="size-4" /> WhatsApp&apos;tan Yaz
          </a>
        </div>
      </aside>
    </>
  );
}

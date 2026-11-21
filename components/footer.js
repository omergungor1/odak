import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from "@/components/brand-icons";
import { Logo } from "@/components/ui";
import { footerColumns } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-surface py-14">
      <div className="container-site">
        <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label={site.name}>
            <Logo className="h-12 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/80">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand">
              <MapPin className="size-3.5" /> {site.addressShort}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-brand">
              <Phone className="size-3.5" /> {site.phone}
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand">
              <WhatsAppIcon className="size-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-ink/70 transition-colors hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-3xl border-t border-line pt-8 text-center text-xs leading-relaxed text-ink/70">
          <strong className="text-ink">{site.name};</strong> istasyonlarında fiziki airbag kontrolü, mor ışıkla gizli boya tespiti,
          motor, şasi, OBD ve yol testi uygulayan bağımsız bir oto ekspertiz markasıdır. Full Ekspertiz tek pakette:{" "}
          <strong className="text-ink">
            {site.oldPrice} TL yerine KDV dahil {site.price} TL.
          </strong>{" "}
          Raporlarımız noter devrinde ve alım-satım sözleşmesinde geçerlidir. Alt paket yok, gizli ücret yok; tüm istasyonlarda
          aynı şeffaf fiyat uygulanır.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {site.copyrightYear} {site.name}. Tüm hakları saklıdır.
            </p>
            <p className="flex flex-wrap gap-x-3">
              <Link href="/iletisim" className="hover:text-brand">KVKK Aydınlatma Metni</Link>
              <Link href="/iletisim" className="hover:text-brand">Çerez Politikası</Link>
              <Link href="/iletisim" className="hover:text-brand">Gizlilik Politikası</Link>
            </p>
          </div>
          <div className="flex items-center gap-3 text-ink/70">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand">
              <InstagramIcon />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-brand">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

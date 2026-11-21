import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Process, WhyUs } from "@/components/sections";
import { Breadcrumb } from "@/components/ui";
import { packageItems } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: `Full Paket: Neler Dahil? ${site.oldPrice}₺ Yerine ${site.price}₺`,
  description: `Tek bir full ekspertizde aracınızın her detayı: kaporta, boya, airbag, motor, şanzıman, OBD, yol testi. KDV dahil ${site.price} TL.`,
};

const highlights = [`KDV dahil ${site.price} TL tek fiyat`, "Alt paket yok", "Noterde geçerli rapor", "Randevusuz da yapılır"];

export default function PackagesPage() {
  return (
    <>
      <section className="container-site pt-6">
        <Breadcrumb items={["Paketler"]} />
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-heading md:text-[34px]">Oto Ekspertiz Paketimiz</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Karmaşık paket seçenekleriyle uğraştırmıyoruz. Tek bir full ekspertizde aracınızın her detayını, net ve şeffaf tek
            fiyata kontrol ediyoruz.
          </p>
        </div>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {highlights.map((h, i) => (
            <li
              key={h}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${i === 0 ? "border-brand/30 bg-brand-soft text-brand" : "border-line bg-white"}`}
            >
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-site mt-8">
        <div className="card overflow-hidden p-0">
          <Image
            src="/banners/full-ekspertiz.webp"
            alt="Odak full ekspertiz tek paket içeriği"
            width={1600}
            height={900}
            sizes="(max-width: 1150px) 100vw, 1110px"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          {site.shortName} Full Paket: tüm kontroller tek fiyat avantajıyla, KDV dahil {site.price} TL.{" "}
          <Link href="/kampanyalar" className="font-semibold text-ink underline underline-offset-4 hover:text-brand">
            Kampanyaları incele
          </Link>
        </p>
      </section>

      <section className="container-site mt-12">
        <div className="card bg-surface p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-wide text-heading">
                {site.shortName} Full Paket
                <span className="rounded-full border border-brand px-2 py-0.5 text-[11px] font-semibold normal-case tracking-normal text-brand">
                  Tek Fiyat
                </span>
              </p>
              <h2 className="mt-4 max-w-xl text-[2.15rem] font-bold leading-[1.08] tracking-[-0.03em] text-heading sm:text-5xl">
                Aracınızın her
                <br />
                detayı, <span className="text-brand">tek pakette.</span>
              </h2>
            </div>
            <div className="lg:pt-8 lg:text-right">
              <p className="text-[2.75rem] font-bold leading-none tracking-[-0.03em] text-heading sm:text-6xl">
                {site.price} TL
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Tek seferlik · KDV dahil</p>
              <p className="mt-1 text-xs text-muted line-through">{site.oldPrice} TL</p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-t border-line pt-6 lg:grid-cols-[1fr_210px] lg:items-start">
            <div>
              <p className="text-[13px] text-muted">Tek fiyat, full ekspertiz — tüm kontroller eksiksiz ve detaylı yapılır:</p>
              <ul className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
                {packageItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14.5px] leading-snug text-ink">
                    <Check className="size-4 shrink-0 text-heading" strokeWidth={2.25} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid content-start gap-2.5">
              <a
                href={whatsappUrl("Merhaba, Full Ekspertiz paketi için randevu almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn h-11 bg-navy text-[13px] text-white hover:bg-navy-dark"
              >
                Hemen Randevu Al
              </a>
              <a href={site.phoneHref} className="btn-outline h-11 text-[13px]">
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site mt-12">
        <div className="card overflow-hidden p-0">
          <Image
            src="/banners/guvenli-yollar.webp"
            alt="7.000 TL ekspertizde nasıl bir rapor alırsınız"
            width={1600}
            height={640}
            sizes="(max-width: 1150px) 100vw, 1110px"
            className="h-auto w-full"
          />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl("Merhaba, örnek ekspertiz raporunu görmek istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-full bg-navy text-white hover:bg-navy-dark"
          >
            Örnek raporu iste <ArrowRight className="size-4" />
          </a>
          <Link href="/bayilerimiz" className="btn-outline rounded-full">
            Size en yakın bayi
          </Link>
        </div>
      </section>

      <WhyUs />
      <Process className="pb-20" />
    </>
  );
}

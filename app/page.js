import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import DealerCarousel from "@/components/dealer-carousel";
import HomeInspection from "@/components/home-inspection";
import HomeReport from "@/components/home-report";
import HomeTestimonials from "@/components/home-testimonials";
import Reels, { ReelsFallback } from "@/components/reels";
import { Faq, Process, WhyUs } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { dealers, homeFaqs } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        {site.name}: tek paket, tek fiyat full ekspertiz, noterde geçerli rapor
      </h1>
      <HeroSlider />
      <Suspense fallback={<ReelsFallback />}>
        <Reels />
      </Suspense>
      <WhyUs className="pb-10 pt-16" />
      <HomeInspection />

      <section className="container-site">
        <Link href="/paketler" className="card block overflow-hidden p-0 transition hover:shadow-float">
          <Image
            src="/banners/full-ekspertiz.webp"
            alt="Odak full ekspertiz tek paket içeriği"
            width={1600}
            height={900}
            sizes="(max-width: 1150px) 100vw, 1110px"
            className="h-auto w-full"
          />
        </Link>
        <p className="mt-4 text-center text-sm text-muted">
          Full Ekspertiz kapsamını merak ediyorsanız:{" "}
          <Link href="/paketler" className="font-semibold text-ink underline underline-offset-4 hover:text-brand">
            Paket içeriği ve fiyat
          </Link>{" "}
          ·{" "}
          <Link href="/kampanyalar" className="font-semibold text-ink underline underline-offset-4 hover:text-brand">
            Güncel kampanyalar
          </Link>
        </p>
      </section>

      <HomeReport />

      <section className="py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Bayilerimiz"
            before="Türkiye Geneline"
            highlight="Yayılan Bayi Ağı"
            description="Size en yakın bayimizi seçin, aynı kalite ve şeffaf fiyatla aracınızı emanet edin."
          />
          <div className="mt-10">
            <DealerCarousel dealers={dealers.slice(0, 12)} />
          </div>
          <div className="mt-2 flex justify-center">
            <Link href="/bayilerimiz" className="btn-outline rounded-full">
              Tüm bayilerimiz <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <HomeTestimonials />

      <Process />

      <section className="container-site">
        <div className="card overflow-hidden p-0">
          <Image
            src="/banners/ornek-rapor.webp"
            alt="7.000 TL ekspertizde örnek rapor"
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
            Örnek raporu WhatsApp&apos;tan iste <ArrowRight className="size-4" />
          </a>
          <Link href="/paketler" className="btn-outline rounded-full">
            Paket detayları
          </Link>
        </div>
      </section>

      <Faq items={homeFaqs} />
    </>
  );
}

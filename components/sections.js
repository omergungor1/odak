import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Photo, SectionHeading } from "@/components/ui";
import { features, processSteps } from "@/lib/data";
import { site } from "@/lib/site";

export function WhyUs({ className = "py-20" }) {
  return (
    <section className={className}>
      <div className="container-site">
        <SectionHeading
          eyebrow="Değerlerimiz"
          before="Neden"
          highlight={`${site.name}?`}
          description="Aracınızı emanet edebileceğiniz dört temel söz: şeffaf fiyat, eksiksiz inceleme, deneyimli usta kadrosu ve Türkiye geneline yayılan güçlü bayi ağımız."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card flex items-center gap-5 p-6">
              <div className="relative grid size-28 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-soft via-white to-brand-soft p-1.5">
                <Image src={f.image} alt="" width={224} height={224} className="size-full object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide">{f.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process({ className = "py-20" }) {
  return (
    <section className={className}>
      <div className="container-site">
        <SectionHeading
          eyebrow="Süreç"
          before="Oto Ekspertiz"
          highlight="Sürecimiz"
          description="Profesyonel ekspertiz hizmetimiz, şeffaf ve güvenilir bir süreçle aracınızın tüm detaylarını ortaya koyar."
        />
        <div className="mt-16 grid gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.title} className="card relative flex flex-col items-center px-4 pb-4 pt-24 text-center">
              <Image
                src={step.badge}
                alt=""
                width={320}
                height={284}
                className="absolute -top-12 left-1/2 h-auto w-32 -translate-x-1/2"
              />
              <h3 className="text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.text}</p>
              <span className="my-4 h-px w-10 bg-brand/40" />
              <Photo src={step.image} label={step.photo} className="mt-auto aspect-[4/3] w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, eyebrow = "Sık sorulan sorular", heading, description = "Oto ekspertiz hakkında en çok merak edilenleri net cevapladık.", className = "py-20" }) {
  return (
    <section className={className}>
      <div className="container-site">
        {heading ?? (
          <SectionHeading eyebrow={eyebrow} highlight="Soru işareti" after="kalmasın." description={description} />
        )}
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium hover:text-brand">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


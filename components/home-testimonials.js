"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui";

const reviews = [
  {
    name: "Uğur D.",
    text: "Hakan ustaya çok teşekkür ederim. Araç ile ilgili her şeyi eksiksiz kontrol etti. Özel sorduğum sorulara cevap verdi. İlgi ve alakasından dolayı tavsiye edebilirim.",
  },
  {
    name: "Özcan I.",
    text: "Arkadaşlara güzel ilgi ve alakalarından, güler yüzlerinden ötürü teşekkür ederim. Profesyonel ve anlaşılır bir hizmet sağlıyorlar. En ufak soru işareti bırakmıyorlar. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Ahmet G.",
    text: "Müşteri odaklı, ilgili ve işinde titiz. Herkese rahatlıkla tavsiye edebileceğiniz bir işletme.",
  },
  {
    name: "Ahmet C.",
    text: "Çok memnun kaldım. Muazzam bir işletme. Ustalara selamlar.",
  },
  {
    name: "Erhan Ö.",
    text: "Kontroller için Hakan ustama teşekkür eder, herkese tavsiye ederim. İlgi, alaka ve tecrübeleri için herkese teşekkür ederim.",
  },
  {
    name: "M. P.",
    text: "Hakan Bey'in ilgi ve samimiyetinden dolayı teşekkür ediyoruz.",
  },
  {
    name: "Recep A.",
    text: "Hakan Usta'nın ilgi ve alakalı şekilde, dürüstçe güzel bir anlatım ve bilgilendirmesi için çok teşekkür ederiz.",
  },
];

function initials(name) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLocaleUpperCase("tr-TR");
}

export default function HomeTestimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = () => {
    const el = trackRef.current;
    if (!el) return;
    const count = Math.max(1, Math.ceil((el.scrollWidth - el.clientWidth - 1) / el.clientWidth) + 1);
    setPages(count);
    setPage(Math.min(count - 1, Math.round(el.scrollLeft / el.clientWidth)));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollTo = (index) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="pb-4">
      <div className="container-site">
        <SectionHeading
          eyebrow="Yorumlar"
          before="Müşterilerimiz"
          highlight="Ne Diyor?"
          description="Odak Oto Ekspertiz'i tercih eden müşterilerimizin deneyimlerini keşfedin."
        />
        <div
          ref={trackRef}
          onScroll={measure}
          className="no-scrollbar -mx-2 mt-10 flex snap-x snap-mandatory items-stretch overflow-x-auto"
        >
          {reviews.map((review) => (
            <div key={review.name} className="w-full shrink-0 snap-start px-2 sm:w-1/2 lg:w-1/3">
              <figure className="card flex h-full flex-col p-5">
                <Quote className="size-7 text-accent" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">{review.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                    {initials(review.name)}
                  </span>
                  <span className="text-sm font-bold text-navy">{review.name}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-1.5" role="tablist" aria-label="Yorum sayfaları">
            {Array.from({ length: pages }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${index + 1}. yorum sayfası`}
                aria-current={index === page ? "true" : undefined}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition ${index === page ? "w-6 bg-brand" : "w-2 bg-line-strong"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollTo(Math.max(0, page - 1))}
              aria-label="Önceki yorumlar"
              className="grid size-10 place-items-center rounded-full border border-line bg-white text-muted transition hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(Math.min(pages - 1, page + 1))}
              aria-label="Sonraki yorumlar"
              className="grid size-10 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 transition hover:bg-brand-dark"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

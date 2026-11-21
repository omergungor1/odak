"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/hero/gercek-ekspertiz.webp",
    href: "/paketler",
    label: "Odak teknolojisiyle gerçek ekspertiz",
  },
  {
    src: "/hero/buyuk-firsat.webp",
    href: "/kampanyalar",
    label: "Full ekspertiz tek pakette 5.000 TL",
  },
  {
    src: "/hero/kendi-aracini-getir.webp",
    href: "/kampanyalar",
    label: "Kendi aracını getirene full ekspertiz",
  },
  {
    src: "/hero/galerici-esnaf.webp",
    href: "/kampanyalar",
    label: "Galerici esnafına özel ekspertiz",
  },
  {
    src: "/hero/sehit-gazi.webp",
    href: "/kampanyalar",
    label: "Şehit aileleri ve gazilere minnet kampanyası",
  },
  {
    src: "/hero/bayilik.webp",
    href: "/bayilik",
    label: "Odak oto ekspertiz bayilik fırsatı",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="container-site pt-5" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative overflow-hidden rounded-2xl shadow-card">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <Link
              key={slide.src}
              href={slide.href}
              aria-label={slide.label}
              aria-hidden={i !== index}
              tabIndex={i === index ? 0 : -1}
              className="relative aspect-[1600/666] w-full shrink-0 bg-navy"
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="(max-width: 1150px) 100vw, 1110px"
                className="object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}. slayda git`}
            aria-current={i === index ? "true" : undefined}
            className={`h-[9px] rounded-full transition-all duration-300 ${i === index ? "w-[42px] bg-brand" : "w-[9px] bg-neutral-300 hover:bg-neutral-400"}`}
          />
        ))}
      </div>
    </section>
  );
}

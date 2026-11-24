"use client";

import { useState } from "react";
import {
  CarFront,
  ChevronDown,
  ClipboardCheck,
  Cpu,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Photo, SectionHeading } from "@/components/ui";

const categories = [
  {
    title: "Motor ve Mekanik Kontrol",
    description: "Motorun genel durumu, mekanik bileşenler, yağ ve sıvı kaçakları detaylı şekilde incelenir.",
    icon: Wrench,
    accent: false,
    details: [
      "Motor genel kontrolü",
      "Mekanik sistem kontrolü",
      "Motor yağ ve sıvı kaçak kontrolü",
      "Motor çalışma ve ses analizi",
      "Şanzıman kontrolü",
      "Soğutma sistemi kontrolü",
    ],
  },
  {
    title: "Kaporta ve Boya Kontrolü",
    description: "Aracın kaporta parçaları, boya kalınlıkları ve geçmiş onarım izleri kontrol edilir.",
    icon: CarFront,
    accent: true,
    details: [
      "Kaporta parça kontrolü",
      "Boya kalınlık ölçümü",
      "Değişen parça analizi",
      "Boyalı parça tespiti",
      "Plastik parça kontrolü",
      "Mor ışık ile yüzey incelemesi",
    ],
  },
  {
    title: "Elektronik Sistem ve OBD",
    description: "Aracın elektronik kontrol üniteleri, arıza kayıtları ve elektronik sistemleri incelenir.",
    icon: Cpu,
    accent: false,
    details: [
      "OBD arıza taraması",
      "Elektronik kontrol ünitesi analizi",
      "Elektronik sistem kontrolleri",
      "Gösterge paneli uyarıları",
      "Elektronik kilometre verilerinin kontrolü",
    ],
  },
  {
    title: "Fren ve Süspansiyon",
    description: "Fren performansı, süspansiyon ve yol tutuşunu etkileyen sistemler kontrol edilir.",
    icon: Gauge,
    accent: false,
    details: [
      "Fren sistemi kontrolü",
      "Süspansiyon kontrolü",
      "Alt takım kontrolü",
      "Direksiyon sistemi kontrolü",
      "Yanal kayma kontrolü",
      "Yol testi",
    ],
  },
  {
    title: "Şasi ve Güvenlik Sistemleri",
    description: "Aracın yapısal bütünlüğü ve kritik güvenlik bileşenleri değerlendirilir.",
    icon: ShieldCheck,
    accent: true,
    details: [
      "Şasi kontrolü",
      "Podye ve kule kontrolü",
      "Direk ve panel kontrolü",
      "Fiziki airbag kontrolü",
      "Emniyet sistemleri incelemesi",
    ],
  },
  {
    title: "Tramer ve Genel Kontroller",
    description: "Araç geçmişi ve genel kondisyonu hakkında detaylı bilgiler sunulur.",
    icon: ClipboardCheck,
    accent: false,
    details: [
      "Tramer sorgulaması",
      "Kilometre sorgulaması",
      "İç aksam kontrolü",
      "Dış aksam kontrolü",
      "Lastik durumu kontrolü",
      "Genel araç kondisyon değerlendirmesi",
    ],
  },
];

export default function HomeInspection() {
  const [open, setOpen] = useState("");

  return (
    <section className="py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Paket kapsamı"
          before="Full Ekspertizde"
          highlight="Neler Kontrol Ediyoruz?"
          description="Aracınızın kritik noktalarını modern cihazlarla detaylı şekilde inceliyor, tüm bulguları kapsamlı ekspertiz raporunda sunuyoruz."
        />
        <Photo
          label="Full ekspertiz kontrolleri"
          src="/banners/kontrol-gorseli.webp"
          className="mt-8 aspect-[21/8] rounded-2xl"
          sizes="(max-width: 1150px) 100vw, 1110px"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const expanded = open === item.title;
            const panelId = `kontrol-${item.title.replace(/\s+/g, "-").toLocaleLowerCase("tr-TR")}`;
            return (
              <article key={item.title} className="card flex flex-col p-5 transition hover:border-brand/40 hover:shadow-float">
                <div className={`grid size-11 place-items-center rounded-xl ${item.accent ? "bg-accent-soft text-accent" : "bg-brand-soft text-brand"}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? "" : item.title)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  {expanded ? "Kontrolleri gizle" : "Kontrolleri gör"}
                  <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded ? (
                  <ul id={panelId} className="mt-3 space-y-1.5 border-t border-line pt-3 text-sm text-ink">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted">
          Listelenen başlıklar Full Ekspertiz paketindeki inceleme kategorileridir. Hangi kontrollerin uygulanacağı aracın
          donanımına ve teknik özelliklerine göre değişir.
        </p>
      </div>
    </section>
  );
}

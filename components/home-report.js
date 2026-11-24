"use client";

import { useState } from "react";
import { Camera, ClipboardList, FileText, MonitorSmartphone, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { Photo, SectionHeading } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

const tabs = [
  {
    id: "kaporta",
    label: "Kaporta ve Boya",
    rows: [
      ["Kaput", "Orijinal"],
      ["Sol ön çamurluk", "Boyalı"],
      ["Sağ ön kapı", "Orijinal"],
      ["Bagaj kapağı", "Değişen"],
      ["Tavan", "Orijinal"],
    ],
    note: "Örnek panel sonuçlarıdır. Gerçek rapordaki parça durumu araca göre değişir.",
  },
  {
    id: "motor",
    label: "Motor ve Mekanik",
    rows: [
      ["Motor çalışması", "İncelendi"],
      ["Yağ kaçağı", "Örnek not"],
      ["Şanzıman", "Değerlendirildi"],
      ["Soğutma sistemi", "Kontrol edildi"],
    ],
    note: "Örnek mekanik kontrol listesidir. Bir araca ait gerçek bulgu değildir.",
  },
  {
    id: "elektronik",
    label: "Elektronik Sistemler",
    rows: [
      ["OBD taraması", "Örnek kayıt yok"],
      ["ABS ünitesi", "İletişim örneği"],
      ["Gösterge uyarıları", "Örnek kontrol"],
    ],
    note: "Örnek tanı özetidir. Her araçta aynı elektronik test uygulanmaz.",
  },
];

const tones = {
  Orijinal: "bg-brand-soft text-brand",
  Boyalı: "bg-accent-soft text-accent-dark",
  Değişen: "bg-navy/10 text-navy",
};

const benefits = [
  {
    icon: Camera,
    title: "Fotoğraflı Bulgular",
    text: "Kontrol sırasında tespit edilen önemli bulgular görsellerle belgelenir.",
  },
  {
    icon: ClipboardList,
    title: "Detaylı Kontrol Sonuçları",
    text: "Kontrol edilen sistemlerin durumu kategorilere ayrılarak sunulur.",
  },
  {
    icon: FileText,
    title: "Anlaşılır Açıklamalar",
    text: "Teknik bulgular, aracın durumunu daha kolay değerlendirmenize yardımcı olacak şekilde açıklanır.",
  },
  {
    icon: MonitorSmartphone,
    title: "Dijital Raporlama",
    text: "Ekspertiz sonuçları düzenli ve kolay incelenebilir bir rapor formatında sunulur.",
  },
];

export default function HomeReport() {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((item) => item.id === active) || tabs[0];

  return (
    <section className="bg-surface py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Rapor"
          before="Ekspertiz Raporunuzda"
          highlight="Neler Var?"
          description="Aracınızın kontrol sonuçlarını, tespit edilen bulguları ve inceleme detaylarını anlaşılır bir raporda görüntüleyin."
        />
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between gap-3 bg-navy px-5 py-3 text-white">
              <p className="text-sm font-bold">Odak Oto Ekspertiz</p>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
                Temsili Rapor
              </span>
            </div>
            <div className="p-5">
              <Photo
                label="Temsili dijital ekspertiz raporu"
                src="/banners/dijital-rapor.webp"
                className="aspect-[16/9] rounded-xl"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <p className="mt-3 text-sm font-semibold text-heading">Örnek araç · 2018 · 1.6</p>
              <p className="text-xs text-muted">Temsili bilgilerdir. Gerçek bir ekspertiz kaydı değildir.</p>
              <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Temsili rapor sekmeleri">
                {tabs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`rapor-sekme-${item.id}`}
                    aria-selected={item.id === active}
                    aria-controls={`rapor-panel-${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      item.id === active ? "bg-brand text-white" : "bg-brand-soft text-brand hover:bg-brand/15"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div
                role="tabpanel"
                id={`rapor-panel-${tab.id}`}
                aria-labelledby={`rapor-sekme-${tab.id}`}
                className="mt-4 min-h-56"
              >
                <ul className="divide-y divide-line rounded-xl border border-line">
                  {tab.rows.map(([name, status]) => (
                    <li key={name} className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm">
                      <span className="text-ink">{name}</span>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tones[status] || "bg-surface text-muted"}`}>
                        {status}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-muted">{tab.note}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card flex gap-4 p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-heading">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
            <div className="mt-1 grid gap-2">
              <a href={site.phoneHref} className="btn-primary rounded-full">
                <Phone className="size-4" /> Detaylı bilgi al
              </a>
              <a
                href={whatsappUrl("Merhaba, ekspertiz raporu hakkında detaylı bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp rounded-full"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

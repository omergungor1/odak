import { Check, CircleCheck } from "lucide-react";
import { Logo } from "@/components/ui";
import { packageItems } from "@/lib/data";
import { site } from "@/lib/site";

function CarSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 400 170" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="car-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="0.55" stopColor="#111" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id="car-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6b7280" />
          <stop offset="1" stopColor="#1f2937" />
        </linearGradient>
        <radialGradient id="car-light" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#bfe3ff" />
          <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="150" rx="190" ry="12" fill="#000" opacity="0.35" />
      <path
        d="M18 118 Q16 96 44 90 L112 80 Q146 46 196 40 L262 40 Q304 43 334 78 L372 88 Q392 94 392 114 L392 126 Q392 134 382 134 L22 134 Q14 134 16 126 Z"
        fill="url(#car-body)"
      />
      <path d="M124 80 Q152 52 196 48 L226 48 L226 80 Z" fill="url(#car-glass)" />
      <path d="M236 48 L262 48 Q296 50 318 80 L236 80 Z" fill="url(#car-glass)" />
      <path d="M30 104 L360 104" stroke="#ff7214" strokeWidth="2" opacity="0.8" />
      <ellipse cx="378" cy="100" rx="22" ry="10" fill="url(#car-light)" />
      <rect x="366" y="96" width="20" height="6" rx="3" fill="#dbeafe" />
      <rect x="18" y="98" width="14" height="6" rx="3" fill="#ff7214" />
      {[96, 312].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="134" r="27" fill="#0a0a0a" />
          <circle cx={cx} cy="134" r="17" fill="#3f3f46" />
          <circle cx={cx} cy="134" r="6" fill="#a1a1aa" />
        </g>
      ))}
    </svg>
  );
}

function Workshop({ tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className="absolute inset-0 -z-10">
      <div className={`absolute inset-0 ${dark ? "bg-gradient-to-b from-navy-light via-navy to-navy-dark" : "bg-gradient-to-b from-white via-surface to-surface-blue"}`} />
      <div
        className="absolute inset-x-0 top-0 h-[70%] opacity-80"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent 0 7%, rgba(0,109,185,.7) 7% 8.5%, transparent 8.5% 17%)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 top-[6%] h-[4%] opacity-70"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.95) 0 6%, transparent 6% 10%)" }}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-[32%] ${dark ? "bg-gradient-to-b from-navy/0 to-navy-dark" : "bg-gradient-to-b from-white/0 to-surface-blue"}`}
        style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0 12%, rgba(0,109,185,.16) 12% 13%)" }}
      />
      <div className="absolute bottom-0 left-0 h-[22%] w-[18%] bg-brand" style={{ clipPath: "polygon(0 30%, 100% 100%, 0 100%)" }} />
      <div className="absolute bottom-0 right-0 h-[22%] w-[18%] bg-brand" style={{ clipPath: "polygon(100% 30%, 100% 100%, 0 100%)" }} />
    </div>
  );
}

function Chip({ children, color = "bg-brand" }) {
  return (
    <span className={`rounded-[0.6cqw] ${color} px-[1cqw] py-[0.5cqw] text-center text-[1.1cqw] font-black uppercase leading-tight text-white shadow-[0_0.3cqw_0_rgba(0,0,0,.25)]`}>
      {children}
    </span>
  );
}

const outline = {
  WebkitTextStroke: "0.25cqw #fff",
  paintOrder: "stroke fill",
  textShadow: "0 0.5cqw 0 #031936, 0 1cqw 1.6cqw rgba(3,25,54,.35)",
};

const variants = {
  full: {
    tone: "light",
    kicker: `${site.shortName.toLocaleUpperCase("tr")}'TA`,
    lines: ["FULL EKSPERTİZ", "TEK PAKETTE"],
    strike: `${site.oldPrice} TL YERİNE SADECE`,
    price: site.price,
    unit: "TL",
    chips: [
      ["Fiziki airbag kontrolü dahil", "bg-brand"],
      ["Mor ışık teknolojisi", "bg-navy"],
      ["1 ay / 1000 km mekanik garanti", "bg-brand-dark"],
      ["Müşterilerimize sürpriz hediye", "bg-accent"],
    ],
  },
  public: {
    tone: "light",
    kicker: "KAMUYA, İŞÇİYE, ÖZEL SEKTÖRE",
    lines: ["HER KESİME", "ÖZEL"],
    strike: `${site.oldPrice} TL YERİNE SADECE`,
    price: site.campaignPrice,
    unit: "TL",
    chips: [
      ["Kamu çalışanları", "bg-brand-dark"],
      ["Emekliler", "bg-brand"],
      ["Asgari ücretliler", "bg-navy"],
      ["Airbag kontrolü dahil", "bg-accent"],
    ],
  },
  own: {
    tone: "dark",
    accent: "from-navy/90 to-brand/45",
    kicker: "KENDİ ARACINI GETİRENE",
    lines: ["YIL SONUNA", "KADAR FULL"],
    strike: "EKSPERTİZ SADECE",
    price: site.campaignPrice,
    unit: "TL",
    priceColor: "text-accent",
    chips: [
      ["Airbag kontrolü dahil", "bg-navy"],
      ["Sürpriz hediye", "bg-accent"],
    ],
  },
  dealer: {
    tone: "dark",
    accent: "from-accent/45 to-transparent",
    kicker: "ESNAFIMIZA ÖZEL AVANTAJ",
    lines: ["GALERİCİ", "ESNAFINA ÖZEL"],
    strike: "DETAYLI EKSPERTİZ",
    price: site.campaignPrice,
    unit: "TL",
    priceColor: "text-accent",
    chips: [
      ["Profesyonel ekspertiz güvencesi", "bg-accent"],
      ["Fiziki airbag kontrolü", "bg-brand"],
    ],
  },
  hero: {
    tone: "light",
    flag: true,
    kicker: "ŞEHİT VE GAZİLERİMİZE",
    lines: ["MİNNETLE"],
    strike: "ŞEHİT AİLELERİNE",
    price: "ÜCRETSİZ",
    unit: "",
    sub: "GAZİLERİMİZE %50 İNDİRİM",
    chips: [["Airbag kontrolü dahil", "bg-brand"]],
  },
};

function Crescent({ className = "" }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <rect width="120" height="80" fill="#e30a17" />
      <circle cx="42" cy="40" r="20" fill="#fff" />
      <circle cx="47" cy="40" r="16" fill="#e30a17" />
      <path fill="#fff" d="M70.5 40l-10.6 3.45 6.55-9.02v11.14l-6.55-9.02z" />
    </svg>
  );
}

export function PromoBanner({ variant = "full", className = "" }) {
  const v = variants[variant];
  const dark = v.tone === "dark";
  return (
    <div className={`@container relative isolate aspect-[1110/430] w-full overflow-hidden ${className}`}>
      <Workshop tone={v.tone} />
      {v.accent && <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${v.accent}`} />}
      {v.flag && (
        <Crescent className="absolute right-[4%] top-[8%] -z-10 h-[55%] w-auto -rotate-6 rounded-[1cqw] opacity-95 shadow-2xl" />
      )}

      <div className="absolute left-[4%] top-[7%] w-[46%]">
        <p
          className={`text-[2.2cqw] font-black italic leading-none ${dark ? "text-white" : "text-ink"}`}
          style={dark ? undefined : { textShadow: "0 0.2cqw 0 #fff" }}
        >
          {v.kicker}
        </p>
        {v.lines.map((line, i) => (
          <p
            key={line}
            className={`mt-[0.6cqw] inline-block rounded-[0.8cqw] px-[1.4cqw] py-[0.3cqw] text-[4.6cqw] font-black italic leading-[1.05] text-white ${
              i === 0 ? "bg-brand" : "bg-navy"
            } shadow-[0_0.5cqw_0_rgba(0,0,0,.25)]`}
          >
            {line}
          </p>
        ))}
      </div>

      <CarSilhouette
        className={`absolute left-[3%] w-[40%] ${v.chips.length > 2 ? "bottom-[25%]" : "bottom-[15%]"} ${v.flag ? "opacity-90" : ""}`}
      />

      <div className="absolute bottom-[10%] right-[4%] flex w-[50%] flex-col items-end text-right">
        <p
          className={`rounded-[0.6cqw] px-[1cqw] py-[0.3cqw] text-[2.3cqw] font-black italic ${dark ? "bg-white text-ink" : "bg-white/90 text-ink"}`}
        >
          {v.strike}
        </p>
        <p className={`mt-[0.5cqw] flex items-end text-[12cqw] font-black italic leading-[0.85] tracking-tight ${v.priceColor ?? "text-brand"}`} style={outline}>
          {v.price}
          {v.unit && <span className="mb-[1cqw] ml-[0.5cqw] text-[4.5cqw]">{v.unit}</span>}
        </p>
        {v.sub && (
          <p className="mt-[1cqw] rounded-[0.6cqw] bg-navy px-[1.2cqw] py-[0.4cqw] text-[2.4cqw] font-black italic text-white">{v.sub}</p>
        )}
      </div>

      <div className="absolute bottom-[5%] left-[4%] grid max-w-[44%] grid-cols-2 gap-[0.8cqw]">
        {v.chips.map(([label, color]) => (
          <Chip key={label} color={color}>
            {label}
          </Chip>
        ))}
      </div>

      <Logo variant={dark ? "white" : "color"} className="absolute right-[3%] top-[5%] h-[9%] w-auto drop-shadow-md" />
    </div>
  );
}

export function PackageBanner({ className = "" }) {
  const half = Math.ceil(packageItems.length / 2);
  return (
    <div className={`@container relative isolate w-full overflow-hidden ${className}`}>
      <Workshop tone="light" />
      <div className="grid gap-[2cqw] p-[3cqw] md:grid-cols-[38%_1fr_16%]">
        <div className="flex flex-col justify-between gap-[2cqw]">
          <div>
            <p className="inline-block rounded-[0.8cqw] bg-brand px-[1.4cqw] py-[0.3cqw] text-[3.4cqw] font-black italic leading-tight text-white shadow-[0_0.5cqw_0_rgba(0,0,0,.25)] max-md:text-2xl">
              {site.shortName.toLocaleUpperCase("tr")}
            </p>
            <p className="mt-[0.6cqw] inline-block rounded-[0.8cqw] bg-navy px-[1.4cqw] py-[0.3cqw] text-[3cqw] font-black italic leading-tight text-white max-md:text-xl">
              FULL EKSPERTİZ
            </p>
            <p className="mt-[0.6cqw] text-[1.8cqw] font-black italic text-ink max-md:text-sm">TEK PAKET İÇERİĞİ</p>
          </div>
          <CarSilhouette className="w-full max-md:hidden" />
        </div>
        <ul className="grid gap-[0.6cqw] sm:grid-cols-2">
          {[packageItems.slice(0, half), packageItems.slice(half)].map((col, ci) => (
            <li key={ci} className="space-y-[0.6cqw]">
              {col.map((item) => (
                <div key={item} className="flex items-center gap-[0.8cqw] rounded-full bg-white px-[0.8cqw] py-[0.45cqw] shadow-sm max-md:py-1.5">
                  <CircleCheck className="size-[1.8cqw] shrink-0 fill-brand text-white max-md:size-4" />
                  <span className="text-[1.05cqw] font-bold uppercase leading-tight max-md:text-[11px]">{item}</span>
                </div>
              ))}
            </li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap gap-[1cqw] md:flex-col md:justify-center">
          <Chip color="bg-navy">Mor ışık teknolojisi</Chip>
          <Chip color="bg-brand">1 ay / 1000 km mekanik garanti</Chip>
          <Chip color="bg-brand-dark">Fiziki airbag kontrolü</Chip>
          <Chip color="bg-accent">Sürpriz hediye</Chip>
        </div>
      </div>
    </div>
  );
}

export function ReportBanner({ className = "" }) {
  const rows = [
    ["Kaporta / Boya", "Orijinal"],
    ["Motor / Şanzıman", "Sorunsuz"],
    ["Fiziki Airbag", "Kontrol edildi"],
    ["Tramer / KM", "Kayıt yok"],
  ];
  return (
    <div className={`@container relative isolate aspect-[1110/430] w-full overflow-hidden max-sm:aspect-auto ${className}`}>
      <Workshop tone="light" />
      <div className="grid h-full grid-cols-1 gap-[2cqw] p-[3.5cqw] sm:grid-cols-[46%_1fr]">
        <div className="flex flex-col justify-center">
          <Logo className="h-[4.5cqw] w-auto self-start max-sm:h-10" />
          <p className="mt-[2cqw] text-[3.6cqw] font-black italic leading-[1.05] text-ink max-sm:text-2xl">
            {site.price} TL ekspertizde
            <br />
            nasıl bir rapor alırsınız?
          </p>
          <p className="mt-[1cqw] inline-block self-start rounded-[0.6cqw] bg-brand px-[1.2cqw] py-[0.4cqw] text-[1.8cqw] font-black italic text-white max-sm:text-sm">
            Gerçek örnek ekspertiz raporu
          </p>
          <div className="mt-[2cqw] flex flex-wrap gap-[0.8cqw]">
            <Chip color="bg-brand-dark">Fiziki airbag kontrolü</Chip>
            <Chip color="bg-navy">Mor ışık teknolojisi</Chip>
            <Chip color="bg-accent">1 ay / 1000 km garanti</Chip>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="ml-auto w-[82%] rotate-2 rounded-[1.2cqw] bg-white p-[1.6cqw] shadow-2xl max-sm:w-full max-sm:rotate-0 max-sm:p-4">
            <div className="flex items-center justify-between border-b border-line pb-[1cqw]">
              <Logo className="h-[3cqw] w-auto max-sm:h-6" />
              <span className="text-[1.2cqw] font-semibold text-muted max-sm:text-xs">Rapor No: 2026-004512</span>
            </div>
            <div className="mt-[1.2cqw] grid grid-cols-3 gap-[1cqw] text-[1.1cqw] max-sm:text-[11px]">
              {["34 ABC 123", "2019 · Dizel", "86.420 km"].map((t) => (
                <span key={t} className="rounded-[0.5cqw] bg-surface px-[0.8cqw] py-[0.5cqw] font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-[1.2cqw] space-y-[0.6cqw]">
              {rows.map(([k, val]) => (
                <li key={k} className="flex items-center justify-between rounded-[0.5cqw] border border-line px-[1cqw] py-[0.5cqw] text-[1.2cqw] max-sm:text-xs">
                  <span className="font-medium">{k}</span>
                  <span className="flex items-center gap-[0.5cqw] font-semibold text-emerald-600">
                    <Check className="size-[1.4cqw] max-sm:size-3" /> {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>        </div>
      </div>
    </div>
  );
}

export function FranchiseBanner({ className = "" }) {
  return (
    <div className={`@container relative isolate aspect-[1110/400] w-full overflow-hidden ${className}`}>
      <Workshop tone="light" />
      <div className="absolute left-[4%] top-[10%] w-[50%]">
        <p className="inline-block rounded-[0.6cqw] bg-navy px-[1.2cqw] py-[0.3cqw] text-[1.8cqw] font-black italic text-white">
          SINIRLI SAYIDA
        </p>
        <p className="mt-[0.5cqw] text-[10cqw] font-black italic leading-[0.9] text-brand" style={outline}>
          BAYİLİK
        </p>
        <p className="mt-[0.8cqw] text-[2cqw] font-black italic tracking-[0.3em] text-ink">FIRSATLARI</p>
      </div>
      <div className="absolute bottom-[10%] right-[4%] w-[40%] text-right">
        <p className="text-[2.6cqw] font-black italic leading-tight text-ink">
          Geleceğe yatırım yapın,
          <br />
          <span className="text-brand">{site.shortName} Ailesine</span> siz de katılın!
        </p>
      </div>
      <div className="absolute bottom-[8%] left-[4%] flex items-center gap-[1cqw] rounded-[1cqw] bg-white/90 p-[1cqw] shadow-lg">
        <Logo className="h-[5cqw] w-auto" />
      </div>
      <div className="absolute right-[4%] top-[10%] h-[45%] w-[30%] rounded-[1.2cqw] bg-gradient-to-br from-navy to-navy-dark shadow-2xl">
        <div className="absolute inset-x-[8%] top-[12%] h-[22%] rounded-[0.6cqw] bg-white" />
        <Logo className="absolute left-[12%] top-[14%] h-[18%] w-auto" />
        <div className="absolute inset-x-[8%] bottom-0 top-[44%] grid grid-cols-3 gap-[4%] px-[2%]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="rounded-t-[0.4cqw] bg-navy-light/80" />
          ))}
        </div>
      </div>
    </div>
  );
}

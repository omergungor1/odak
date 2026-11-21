import { ArrowRight } from "lucide-react";
import { WhyUs } from "@/components/sections";
import { Breadcrumb, Eyebrow, Photo } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Kurumsal — Hakkımızda",
  description: `${site.name}: şeffaf fiyat, standart kontrol listesi ve deneyimli eksper kadrosuyla tarafsız oto ekspertiz.`,
};

function Statement({ eyebrow, title, text }) {
  return (
    <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
      <Eyebrow className="md:pt-2">{eyebrow}</Eyebrow>
      <div>
        <h2 className="text-xl font-bold leading-snug tracking-tight md:text-2xl">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}

export default function CorporatePage() {
  return (
    <>
      <section className="container-site pt-6">
        <Breadcrumb items={["Kurumsal"]} />
        <div className="mt-8 max-w-2xl">
          <Eyebrow>Kurumsal</Eyebrow>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-heading md:text-5xl">
            Ekspertizde <span className="text-brand">Güvenin</span>
            <br />
            Yeni Odak Noktası
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {site.name}, ikinci el araç alım-satımının en kritik anında tarafsız ve güvenilir bir göz olarak yanınızda. Şeffaf
            fiyat, standart kontrol listesi ve deneyimli eksper kadromuzla sektörü daha dürüst bir yere taşımak için kurulduk.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Photo
            src="/kurumsal/nilufer-sube.webp"
            label="Nilüfer şubesi, genel merkez istasyonu"
            sizes="(max-width: 768px) 100vw, 530px"
            position="center top"
            className="aspect-[16/10] rounded-2xl"
          />
          <Photo
            src="/kurumsal/ekspertiz-alani.webp"
            label="Ekspertiz alanı"
            sizes="(max-width: 768px) 100vw, 530px"
            className="aspect-[16/10] rounded-2xl"
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 pt-16">
              <p className="text-xs font-bold uppercase tracking-widest text-brand">Taahhüdümüz</p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Her araç aynı standart kontrol listesiyle incelenir. Tüm bulgular eksiksiz şekilde rapora işlenir ve raporlarımız
                noter satışında geçerlidir. Fiyatımız KDV dahil ve tektir; sürpriz ücret yoktur.
              </p>
            </div>
          </Photo>
        </div>
      </section>

      <WhyUs />

      <section className="container-site space-y-10 pb-20">
        <Statement
          eyebrow="Misyonumuz"
          title="Araç alım-satımındaki bilgi açığını kapatmak. Aracın gerçek durumunu tarafsız, anlaşılır ve şeffaf bir raporla ortaya koyarak hem alıcıyı hem satıcıyı sürpriz maliyetlerden korumak."
          text="Sektör ortalamasının altında bir fiyata, eksiksiz ve detaylı kontrol. Çünkü güvenilir ekspertiz bir lüks değil, herkesin hakkıdır."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Photo
            src="/kurumsal/lift-kontrol.webp"
            label="Lift kontrol alanı"
            sizes="(max-width: 768px) 100vw, 530px"
            className="aspect-[4/3] rounded-2xl"
          />
          <Photo
            src="/kurumsal/boya-kaporta.webp"
            label="Boya ve kaporta kontrolü"
            sizes="(max-width: 768px) 100vw, 530px"
            className="aspect-[4/3] rounded-2xl"
          />
        </div>
        <Statement
          eyebrow="Vizyonumuz"
          title="Şehir şehir büyüyerek Türkiye'nin dört bir yanına yayılan, alanında sektörün referans noktası olan bir ekspertiz ağı kurmak."
          text={`Her şubede aynı standart, aynı şeffaflık, aynı güven. Müşterinin hangi ildeki ${site.shortName}'a giderse gitsin aynı kaliteyi bulduğu bir marka olmak.`}
        />

        <div className="card mt-6 grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1fr_260px]">
          <div>
            <Eyebrow>Kurucumuz</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Mert Yılmaz</h2>
            <p className="mt-1 text-sm font-medium text-muted">Oto ekspertiz sektöründe 2012&apos;den bu yana</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Sahada eksperlikle başlayan; kurumsallaşma, franchise ve teknik altyapı tarafında 14 yılı aşkın tecrübesini{" "}
              {site.name} çatısı altında toplayan kurucumuz.
            </p>
            <a
              href={whatsappUrl("Merhaba, kurumsal iş birliği hakkında görüşmek istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 rounded-full"
            >
              Kurumsal iletişim <ArrowRight className="size-4" />
            </a>
          </div>
          <Photo label="Kurucu fotoğrafı" tone="light" className="aspect-[4/5] rounded-2xl" />
        </div>
      </section>
    </>
  );
}

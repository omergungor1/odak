import { ClipboardList } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/brand-icons";
import FranchiseForm from "@/components/franchise-form";
import { Faq } from "@/components/sections";
import { Breadcrumb, Photo, SectionHeading } from "@/components/ui";
import { dealers, franchiseFaqs, franchiseSteps, franchiseSupports } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Oto Ekspertiz Bayilik Başvurusu",
  description: `Kendi bölgenizde ${site.name} markasıyla oto ekspertiz istasyonu açın. Kurulum, eğitim, yazılım ve reklam desteği merkezden.`,
};

export default function FranchisePage() {
  return (
    <>
      <section className="container-site pt-6">
        <Breadcrumb items={["Bayilik"]} />
        <div className="card mt-5 overflow-hidden p-0">
          <Image
            src="/hero/bayilik.webp"
            alt="Sınırlı sayıda Odak Oto Ekspertiz bayiliği verilecektir"
            width={1600}
            height={666}
            priority
            sizes="(max-width: 1150px) 100vw, 1110px"
            className="h-auto w-full"
          />
        </div>
        <div className="mt-8 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-heading md:text-[34px]">Oto Ekspertiz Bayilik</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Kendi bölgenizde {site.shortName} markasıyla oto ekspertiz istasyonu açın. Tek paket, tek fiyat iş modeli; kurulum,
            eğitim, yönetim yazılımı ve bölgesel reklam desteği merkezden.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={whatsappUrl("Merhaba, bayilik hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp rounded-full"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp: {site.whatsapp}
            </a>
            <a href="#basvuru" className="btn-outline rounded-full">
              <ClipboardList className="size-4" /> Başvuru formu
            </a>
          </div>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <span className="h-4 w-1 rounded-full bg-brand" /> İstasyonlarımızdan
        </h2>
        <div className="no-scrollbar -mx-4 mt-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {dealers.map((dealer) => (
            <figure key={dealer.slug} className="w-[44%] shrink-0 snap-start sm:w-[30%] lg:w-[calc(20%-10px)]">
              <Photo src={dealer.image} label={dealer.name} className="aspect-[4/3] rounded-xl" />
              <figcaption className="mt-2">
                <span className="block text-sm font-semibold">{dealer.name}</span>
                <span className="text-xs text-muted">{dealer.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Destek"
            before="Güçlü marka,"
            highlight="güçlü destek"
            description="İstasyonunuzu siz yönetirsiniz; marka, sistem ve büyüme için gereken altyapıyı merkez sağlar."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseSupports.map((s) => (
              <div key={s.title} className="card flex gap-4 p-5">
                <Image
                  src={s.image}
                  alt=""
                  width={160}
                  height={160}
                  className="size-16 shrink-0 object-contain sm:size-20"
                />
                <div>
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Adım adım"
              before="Bayilik"
              highlight="süreci"
              description="Başvurudan açılışa adımlar net; açılıştan sonra da merkez desteği sürer."
            />
          </div>
          <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-line">
            {franchiseSteps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-line bg-white text-sm font-bold text-brand shadow-card">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="card flex-1 p-5">
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site mt-20">
        <FranchiseForm />
      </section>

      <Faq
        items={franchiseFaqs}
        heading={
          <SectionHeading
            eyebrow="Sık sorulan sorular"
            before="Oto ekspertiz bayiliği hakkında"
            highlight="sık sorulanlar"
            description="Bayilik süreciyle ilgili en çok merak edilenleri net cevapladık."
          />
        }
        className="pb-20"
      />
    </>
  );
}

import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { Eyebrow, PageIntro } from "@/components/ui";
import { campaigns } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Oto Ekspertiz Kampanyaları",
  description: "Araç sahiplerine, galericilere, şehit yakınlarına ve gazilere özel Full Ekspertiz fiyatları.",
};

export default function CampaignsPage() {
  return (
    <>
      <PageIntro breadcrumb="Kampanyalar" title="Kampanyalarımız">
        Araç sahiplerine, galericilere, şehit yakınlarına ve gazilere özel Full Ekspertiz. Her kampanyada aynı kapsam: fiziki
        airbag kontrolü, mor ışık boya kontrolü ve noterde geçerli rapor.
      </PageIntro>

      <section className="container-site space-y-8 pb-6 pt-8">
        {campaigns.map((c) => (
          <article key={c.slug} id={c.slug} className="card scroll-mt-28 overflow-hidden p-0">
            <Image
              src={c.image}
              alt={c.title}
              width={1600}
              height={666}
              sizes="(max-width: 1150px) 100vw, 1110px"
              className="h-auto w-full"
            />
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <Eyebrow>{c.tag}</Eyebrow>
                <h2 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={whatsappUrl(`Merhaba, "${c.title}" kampanyası için randevu almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary rounded-full"
                  >
                    <WhatsAppIcon className="size-4" /> Randevu Al
                  </a>
                  <a href={site.phoneHref} className="btn rounded-full text-ink hover:text-brand">
                    <Phone className="size-4" /> Hemen Ara
                  </a>
                </div>
              </div>
              <ul className="space-y-3 border-line lg:border-l lg:pl-8">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

    </>
  );
}

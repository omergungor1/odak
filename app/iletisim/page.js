import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/brand-icons";
import { Breadcrumb } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "İletişim",
  description: `${site.name} iletişim bilgileri: WhatsApp, telefon, e-posta ve adres.`,
};

const contactCards = [
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.whatsapp, href: whatsappUrl("Merhaba, bilgi almak istiyorum."), external: true },
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Genel merkez", value: site.address, href: site.mapsUrl, external: true },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-6">
        <Breadcrumb items={["İletişim"]} />
        <div className="mx-auto mt-6 max-w-xl text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-[34px]">Bize Ulaşın</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Kurumsal anlaşma, öneri ve şikayetleriniz için bize yazın. Randevu için{" "}
            <Link href="/bayilerimiz" className="font-semibold text-ink underline underline-offset-2 hover:text-brand">
              randevu
            </Link>
            , bayilik için{" "}
            <Link href="/bayilik" className="font-semibold text-ink underline underline-offset-2 hover:text-brand">
              bayilik
            </Link>{" "}
            sayfamızı kullanabilirsiniz.
          </p>
        </div>
      </section>

      <section className="container-site mx-auto mt-8 max-w-[760px]">
        <ContactForm />

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {contactCards.map(({ icon: CardIcon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card group flex items-start gap-3 p-4 transition hover:border-brand/40"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <CardIcon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] text-muted">{label}</span>
                <span className="block break-words text-sm font-semibold group-hover:text-brand">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted">
          {site.hoursLong} İstasyon adresleri için{" "}
          <Link href="/bayilerimiz" className="font-semibold text-ink underline underline-offset-2 hover:text-brand">
            Bayilerimiz
          </Link>{" "}
          sayfasına bakabilirsiniz.
        </p>
      </section>

    </>
  );
}

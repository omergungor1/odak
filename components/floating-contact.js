import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { site, whatsappUrl } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col items-end gap-3 sm:right-6">
      <a
        href={site.phoneHref}
        aria-label={`Hemen ara: ${site.phone}`}
        className="relative grid size-14 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-25" />
        <Phone className="relative size-7" />
      </a>
      <a
        href={whatsappUrl("Merhaba, ekspertiz hakkında bilgi almak istiyorum.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
        className="grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-green-600/30 transition hover:scale-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}

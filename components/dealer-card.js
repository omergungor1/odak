import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { Photo, Stars } from "@/components/ui";
import { telHref, whatsappUrl } from "@/lib/site";

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  const local = digits.startsWith("90") ? `0${digits.slice(2)}` : digits;
  if (local.length !== 11) return phone;
  return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7, 9)} ${local.slice(9)}`;
}

export default function DealerCard({ dealer }) {
  const rating = dealer.rating.toLocaleString("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <div className="relative">
        <Photo src={dealer.image} label={dealer.name} className="aspect-[4/3] w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-heading shadow-sm">
          {dealer.city}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-bold leading-tight text-heading">{dealer.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
          <MapPin className="size-3.5 shrink-0 text-brand" />
          {dealer.district}, {dealer.city}
        </p>
        <a href={telHref(dealer.phone)} className="mt-1.5 flex items-center gap-1.5 text-sm font-bold hover:text-brand">
          <Phone className="size-3.5 shrink-0 text-brand" />
          {formatPhone(dealer.phone)}
        </a>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
          <Clock className="size-3.5 shrink-0 text-brand" />
          {dealer.time}
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-sm font-bold text-heading">{rating}</span>
          <Stars rating={dealer.rating} className="size-3" />
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <a href={dealer.maps} target="_blank" rel="noopener noreferrer" className="btn-outline h-10 px-2 text-xs">
            <Navigation className="size-3.5" /> Yol Tarifi
          </a>
          <a
            href={whatsappUrl(`Merhaba, ${dealer.name} şubeniz için randevu almak istiyorum.`, dealer.phone)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp h-10 px-2 text-xs"
          >
            <WhatsAppIcon className="size-3.5" /> Randevu Al
          </a>
        </div>
      </div>
    </article>
  );
}

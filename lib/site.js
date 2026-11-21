export const site = {
  name: "Odak Oto Ekspertiz",
  shortName: "Odak",
  description:
    "Odak Oto Ekspertiz: tek paket, tek fiyat. Kaporta, boya, motor, şasi, OBD ve yol testi dahil full ekspertiz; noterde geçerli rapor.",
  phone: "0539 916 01 60",
  phoneHref: "tel:+905399160160",
  whatsapp: "0539 916 01 60",
  whatsappNumber: "905399160160",
  email: "info@odakotoekspertiz.com",
  address: "Nilüfer / Bursa",
  addressShort: "Nilüfer/Bursa",
  mapsUrl: "https://maps.app.goo.gl/pUGrXWyQCCx7GjEv7",
  hours: "Pzt - Cmt: 08:00 - 19:00",
  hoursLong: "Merkez ofisimiz hafta içi 09:00 - 18:00, istasyonlarımız hafta içi ve cumartesi 08:00 - 19:00 arası açıktır.",
  copyrightYear: 2026,
  price: "7.000",
  oldPrice: "17.000",
  campaignPrice: "5.000",
  social: {
    instagram: "https://www.instagram.com/odakbursacom/",
    youtube: "https://www.youtube.com/@odakotoekspertiz",
  },
};

export function whatsappUrl(message, number = site.whatsappNumber) {
  const digits = String(number).replace(/\D/g, "");
  const normalized = digits.startsWith("90") ? digits : `90${digits.replace(/^0/, "")}`;
  const base = `https://wa.me/${normalized}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telHref(phone) {
  const digits = phone.replace(/\D/g, "").replace(/^0/, "");
  return `tel:+90${digits}`;
}

export function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const mainNav = [
  { href: "/", label: "Oto Ekspertiz" },
  { href: "/bayilerimiz", label: "Bayilerimiz" },
  { href: "/paketler", label: "Paketler" },
  { href: "/kampanyalar", label: "Kampanyalar" },
];

export const corporateNav = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/bayilik", label: "Bayilik" },
  { href: "/iletisim", label: "İletişim" },
];

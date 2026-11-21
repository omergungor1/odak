"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { provinces } from "@/lib/provinces";
import { whatsappUrl } from "@/lib/site";

const franchiseWhatsapp = "05399160160";
const places = ["Uygun yerim var", "Yer arıyorum"];
const experiences = ["Sektörde deneyimim var", "Sektöre yeni gireceğim"];

function formatMobile(value) {
  let digits = String(value).replace(/\D/g, "");
  if (digits.startsWith("90")) digits = digits.slice(2);
  if (digits.startsWith("5")) digits = `0${digits}`;
  digits = digits.slice(0, 11);
  return [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)].filter(Boolean).join(" ");
}

function Choice({ name, value, current, onChange, children }) {
  const selected = current === value;
  return (
    <label
      className={`flex h-12 cursor-pointer items-center justify-center rounded-full border px-3 text-sm font-semibold transition ${
        selected ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand"
      }`}
    >
      <input type="radio" name={name} value={value} checked={selected} onChange={() => onChange(value)} className="sr-only" />
      {children}
    </label>
  );
}

export default function FranchiseForm() {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState(places[0]);
  const [experience, setExperience] = useState(experiences[1]);

  const districts = useMemo(() => provinces.find((item) => item.name === city)?.districts ?? [], [city]);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const digits = phone.replace(/\D/g, "");
    if (!/^05\d{9}$/.test(digits)) {
      event.currentTarget.phone.setCustomValidity("Telefonu 05XX XXX XX XX biçiminde girin.");
      event.currentTarget.phone.reportValidity();
      return;
    }
    const note = String(data.get("message") || "").trim();
    const message = [
      "Merhaba, bayilik başvurusu yapmak istiyorum.",
      "",
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: ${phone}`,
      `İl: ${city}`,
      `İlçe: ${district}`,
      `İstasyon yeri: ${place}`,
      `Sektör deneyimi: ${experience}`,
      "",
      `Not: ${note || "-"}`,
    ].join("\n");
    window.open(whatsappUrl(message, franchiseWhatsapp), "_blank", "noopener,noreferrer");
  };

  return (
    <form id="basvuru" onSubmit={onSubmit} className="card scroll-mt-28 p-6 sm:p-8">
      <h2 className="text-lg font-bold">Bayilik Başvuru Formu</h2>
      <p className="mt-1 text-sm text-muted">Bilgilerinizi bırakın, ekibimiz sizi arasın.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted">Ad Soyad</span>
          <input name="name" required autoComplete="name" className="field rounded-full" />
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted">Telefon</span>
          <input
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            value={phone}
            onChange={(event) => {
              event.target.setCustomValidity("");
              setPhone(formatMobile(event.target.value));
            }}
            className="field rounded-full"
          />
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted">İl</span>
          <select
            name="city"
            required
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
              setDistrict("");
            }}
            className="field rounded-full"
          >
            <option value="">İl seçin</option>
            {provinces.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted">İlçe</span>
          <select
            name="district"
            required
            disabled={!city}
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
            className="field rounded-full disabled:bg-surface disabled:text-muted"
          >
            <option value="">{city ? "İlçe seçin" : "Önce il seçin"}</option>
            {districts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 block text-xs font-medium text-muted">
            İstasyon yeri <span className="font-normal text-neutral-400">(isteğe bağlı)</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {places.map((item) => (
              <Choice key={item} name="place" value={item} current={place} onChange={setPlace}>
                {item}
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 block text-xs font-medium text-muted">
            Sektör deneyimi <span className="font-normal text-neutral-400">(isteğe bağlı)</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {experiences.map((item) => (
              <Choice key={item} name="experience" value={item} current={experience} onChange={setExperience}>
                {item}
              </Choice>
            ))}
          </div>
        </fieldset>

        <label className="sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-muted">
            Not <span className="font-normal text-neutral-400">(isteğe bağlı)</span>
          </span>
          <textarea name="message" rows={3} placeholder="Eklemek istedikleriniz" className="field h-auto min-h-24 rounded-2xl py-3" />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6 h-12 w-full rounded-full text-[15px]">
        Başvuruyu Gönder
      </button>
      <p className="mt-4 text-center text-xs text-muted">
        Bilgileriniz yalnızca talebinizi yanıtlamak için kullanılır.{" "}
        <Link href="/iletisim" className="underline hover:text-brand">
          KVKK Aydınlatma Metni
        </Link>
      </p>
    </form>
  );
}

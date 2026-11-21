"use client";

import { useState } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/brand-icons";
import { whatsappUrl } from "@/lib/site";

const topics = ["Kurumsal Anlaşma", "Öneri, şikayet ve diğer"];

export default function ContactForm() {
  const [topic, setTopic] = useState(topics[1]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Merhaba, iletişim formundan yazıyorum.",
      "",
      `Ad Soyad: ${data.get("name")}`,
      `Telefon: +90 ${data.get("phone")}`,
      `Konu: ${topic}`,
      "",
      `Mesaj: ${data.get("message")}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="field-label">Ad Soyad</span>
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label>
          <span className="field-label">Telefon</span>
          <span className="flex h-11 items-center rounded-lg border border-line bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/15">
            <span className="pl-3 pr-2 text-sm text-muted">+90</span>
            <input
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="5XX XXX XX XX"
              pattern="[0-9 ]{10,13}"
              className="h-full w-full rounded-r-lg bg-transparent pr-3 text-sm outline-none placeholder:text-neutral-400"
            />
          </span>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="field-label">Konu</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`h-11 rounded-lg border text-sm font-medium transition ${
                topic === t ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand hover:text-brand"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className="field-label">Mesajınız</span>
        <textarea name="message" required rows={3} className="field h-auto min-h-24 py-2.5" />
      </label>

      <button type="submit" className="btn-primary mt-6 h-12 w-full rounded-full text-[15px]">
        <WhatsAppIcon className="size-4" /> Gönder
      </button>
      <p className="mt-4 text-center text-xs text-muted">
        Mesajınız WhatsApp üzerinden bize iletilir. Bilgileriniz yalnızca talebinizi yanıtlamak için kullanılır.{" "}
        <Link href="/iletisim" className="underline hover:text-brand">
          KVKK Aydınlatma Metni
        </Link>
      </p>
    </form>
  );
}

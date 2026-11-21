"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DealerCard from "@/components/dealer-card";

export default function DealerCarousel({ dealers }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={trackRef} className="no-scrollbar -mx-2 flex snap-x snap-mandatory overflow-x-auto py-2">
        {dealers.map((dealer) => (
          <div key={dealer.slug} className="w-full shrink-0 snap-start px-2 sm:w-1/2 lg:w-1/3">
            <DealerCard dealer={dealer} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Önceki bayiler"
          className="grid size-10 place-items-center rounded-full border border-line bg-white text-muted transition hover:border-brand hover:text-brand"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Sonraki bayiler"
          className="grid size-10 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/30 transition hover:bg-brand-dark"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

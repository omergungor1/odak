"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import DealerCard from "@/components/dealer-card";

export default function DealerList({ dealers, cities }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return dealers.filter((d) => {
      if (city && d.city !== city) return false;
      if (!q) return true;
      return `${d.name} ${d.city}`.toLocaleLowerCase("tr").includes(q);
    });
  }, [dealers, query, city]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Bayi ara</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Şehir veya bayi ara"
            className="field h-10 pl-9"
          />
        </label>
        <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {["", ...cities].map((c) => (
            <button
              key={c || "all"}
              type="button"
              onClick={() => setCity(c)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                city === c ? "border-brand bg-brand text-white" : "border-line bg-white text-ink hover:border-brand hover:text-brand"
              }`}
            >
              {c || "Tümü"}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">
        <span className="font-semibold text-ink">{filtered.length}</span> bayi listeleniyor
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((dealer) => (
            <DealerCard key={dealer.slug} dealer={dealer} />
          ))}
        </div>
      ) : (
        <div className="card mt-4 p-10 text-center text-sm text-muted">Aramanıza uygun bayi bulunamadı.</div>
      )}
    </div>
  );
}

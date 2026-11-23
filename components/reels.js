import { ChevronRight, Clapperboard, Play } from "lucide-react";
import { formatViews, getInstagramReels } from "@/lib/instagram";
import { site } from "@/lib/site";

function ReelsHeader() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-heading md:text-2xl">
        <Clapperboard className="size-6 text-brand" /> Reels
      </h2>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium hover:border-brand hover:text-brand"
      >
        Tüm videolar <ChevronRight className="size-4" />
      </a>
    </div>
  );
}

export function ReelsFallback() {
  return (
    <section className="py-14">
      <div className="container-site">
        <ReelsHeader />
        <div className="no-scrollbar -mx-4 mt-5 flex gap-3 overflow-hidden px-4 sm:mx-0 sm:px-0">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="w-[46%] shrink-0 sm:w-[30%] lg:w-[calc(20%-10px)]">
              <div className="aspect-[9/16] animate-pulse rounded-xl bg-surface-blue" />
              <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-surface-blue" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function Reels() {
  const reels = await getInstagramReels();

  return (
    <section className="py-14">
      <div className="container-site">
        <ReelsHeader />
        {reels.length ? (
          <div className="no-scrollbar -mx-4 mt-5 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
            {reels.map((reel) => (
              <a
                key={reel.code}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram videosu, ${formatViews(reel.views)} görüntüleme`}
                className="group w-[46%] shrink-0 snap-start sm:w-[30%] lg:w-[calc(20%-10px)]"
              >
                <span className="relative block aspect-[9/16] overflow-hidden rounded-xl bg-navy">
                  <img
                    src={reel.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-12 place-items-center rounded-full bg-white/90 text-brand shadow-lg transition group-hover:scale-110">
                      <Play className="size-5 fill-current" />
                    </span>
                  </span>
                </span>
                <p className="mt-2 text-xs text-muted">{formatViews(reel.views)} görüntüleme</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-sm text-muted">
            Videolar şu an alınamadı. Instagram hesabından izleyebilirsiniz.
          </p>
        )}
      </div>
    </section>
  );
}

import DealerList from "@/components/dealer-list";
import { PageIntro } from "@/components/ui";
import { dealerCities, dealers } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata = {
  title: "Bayilerimiz – Türkiye Geneli Oto Ekspertiz",
  description: `${site.name} bayileri: size en yakın oto ekspertiz istasyonunu seçin. Full Ekspertiz tek fiyat: KDV dahil ${site.price} TL.`,
};

export default function DealersPage() {
  return (
    <>
      <PageIntro breadcrumb="Bayilerimiz" title="Bayilerimiz">
        <p>
          {site.name} bayileri: fiziki airbag ve mor ışık boya kontrolü, noterde geçerli rapor. Size en yakın oto ekspertiz
          şubesini seçin. <strong className="text-ink">{dealers.length} istasyon</strong>,{" "}
          <strong className="text-ink">{dealerCities.length} şehir</strong>.
        </p>
        <p className="mt-1">
          Full Ekspertiz tek fiyat:{" "}
          <span className="font-semibold text-accent">
            {site.oldPrice}₺ yerine KDV dahil {site.price}₺
          </span>
          .
        </p>
      </PageIntro>
      <section className="container-site pb-6 pt-8">
        <DealerList dealers={dealers} cities={dealerCities} />
      </section>
    </>
  );
}

import { INVENTORY } from "@/lib/data";

export default function BrandsPage() {
  const byBrand = INVENTORY.reduce<Record<string, Set<string>>>((acc, c) => {
    (acc[c.brand] = acc[c.brand] || new Set()).add(c.model);
    return acc;
  }, {});
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Mărci & modele</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(byBrand).map(([brand, models]) => (
          <div key={brand} className="border rounded-2xl p-4">
            <h3 className="font-semibold mb-2">{brand}</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              {Array.from(models).map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

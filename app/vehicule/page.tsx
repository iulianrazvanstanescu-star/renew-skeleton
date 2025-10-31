'use client';
import { useMemo, useState, useEffect } from "react";
import { INVENTORY, Car } from "@/lib/data";
import Card from "@/components/Card";
import Filters from "@/components/Filters";
import { useSearchParams, useRouter } from "next/navigation";

type State = { brand: string; energy: string; body: string; sort: string; q: string; };

export default function VehiclesPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initial: State = {
    brand: params.get("brand") || "",
    energy: params.get("energy") || "",
    body: params.get("body") || "",
    sort: params.get("sort") || "new",
    q: params.get("q") || "",
  };
  const [filters, setFilters] = useState<State>(initial);
  const [page, setPage] = useState<number>(Number(params.get("p") || 1));

  useEffect(() => {
    const sp = new URLSearchParams();
    if (filters.brand) sp.set("brand", filters.brand);
    if (filters.energy) sp.set("energy", filters.energy);
    if (filters.body) sp.set("body", filters.body);
    if (filters.sort && filters.sort !== "new") sp.set("sort", filters.sort);
    if (filters.q) sp.set("q", filters.q);
    if (page > 1) sp.set("p", String(page));
    const qs = sp.toString();
    router.replace(`/vehicule${qs ? "?" + qs : ""}`);
  }, [filters, page, router]);

  const filtered = useMemo(() => {
    let list: Car[] = INVENTORY.filter((c) =>
      (!filters.brand || c.brand === filters.brand) &&
      (!filters.energy || c.energy === filters.energy) &&
      (!filters.body || c.body === filters.body) &&
      (!filters.q || `${c.brand} ${c.model} ${c.dealer}`.toLowerCase().includes(filters.q.toLowerCase()))
    );
    switch (filters.sort) {
      case "price_asc": list.sort((a, b) => a.price - b.price); break;
      case "price_desc": list.sort((a, b) => b.price - a.price); break;
      case "km_asc": list.sort((a, b) => a.km - b.km); break;
      case "km_desc": list.sort((a, b) => b.km - a.km); break;
      default: list.sort((a, b) => b.id - a.id);
    }
    return list;
  }, [filters]);

  const pageSize = 9;
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Vehicule de ocazie</h2>
      <Filters state={filters} onChange={(next) => { setPage(1); setFilters(next); }} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((car) => <Card key={car.id} car={car} />)}
      </div>
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded-lg border ${page === i + 1 ? "bg-gray-900 text-white" : "hover:bg-gray-50"}`}>{i + 1}</button>
        ))}
      </div>
    </section>
  );
}

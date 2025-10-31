import Chip from "./Chip";
import { Car } from "@/lib/data";

export default function Card({ car }: { car: Car }) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-sm transition">
      <div className="aspect-video bg-gray-100 rounded-xl mb-3 grid place-items-center">
        <span className="text-sm text-gray-400">imagine</span>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold">{car.brand} — {car.model}</h3>
          <p className="text-sm text-gray-600">{car.year} • {car.km.toLocaleString()} km • {car.dealer}</p>
        </div>
        <div className="text-right font-bold">{car.price.toLocaleString()} €</div>
      </div>
      <div className="mt-2 flex gap-2 flex-wrap">
        <Chip>{car.energy}</Chip>
        <Chip>{car.body}</Chip>
        <Chip>{car.level}</Chip>
      </div>
      <button className="mt-3 w-full border rounded-xl py-2 hover:bg-gray-50">Vezi detalii</button>
    </div>
  );
}

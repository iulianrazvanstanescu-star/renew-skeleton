import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl p-8 bg-gray-100">
        <h1 className="text-3xl font-bold">Vehicule de ocazie, certificate</h1>
        <p className="text-gray-700 mt-2">Caută în rețeaua de parteneri, filtrează după marcă, energie, caroserie și alege ce ți se potrivește.</p>
        <div className="mt-4 flex gap-2">
          <Link href="/vehicule" className="rounded-xl border px-4 py-2">Vezi vehicule</Link>
          <Link href="/contact" className="rounded-xl border px-4 py-2">Evaluează-ți mașina</Link>
        </div>
      </div>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Angajamentele noastre</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-4">
            <h3 className="font-semibold mb-2 capitalize">renew gold</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>eligibilitate: 0–80.000 km, &lt; 5 ani</li>
              <li>garanție minim 12 luni</li>
              <li>până la 150 puncte de control</li>
              <li>test drive</li>
              <li>mulțumit sau banii înapoi*</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-4">
            <h3 className="font-semibold mb-2 capitalize">renew start</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>eligibilitate: 80.001–200.000 km, &lt; 12 ani</li>
              <li>garanție minim 12 luni</li>
              <li>până la 150 puncte de control</li>
              <li>test drive</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500">* conform condițiilor aplicabile</p>
      </section>
    </section>
  );
}

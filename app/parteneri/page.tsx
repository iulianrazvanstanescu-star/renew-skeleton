import { PARTNERS } from "@/lib/data";

export default function PartnersPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Parteneri renew</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Partener</th>
              <th>Localitate</th>
              <th>Județ</th>
              <th>Email</th>
              <th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            {PARTNERS.map((p) => (
              <tr key={p.name} className="border-b">
                <td className="py-2 font-medium">{p.name}</td>
                <td>{p.city}</td>
                <td>{p.county}</td>
                <td><a className="underline" href={`mailto:${p.email}`}>{p.email}</a></td>
                <td><a className="underline" href={`tel:${p.phone}`}>{p.phone}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

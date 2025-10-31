export default function CommitmentsPage() {
  const tiers = [
    { tier: "renew gold", rules: ["eligibilitate: 0–80.000 km, < 5 ani", "garanție minim 12 luni", "până la 150 puncte de control", "test drive", "mulțumit sau banii înapoi*" ]},
    { tier: "renew start", rules: ["eligibilitate: 80.001–200.000 km, < 12 ani", "garanție minim 12 luni", "până la 150 puncte de control", "test drive" ]},
  ];
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Angajamentele noastre</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tiers.map((t) => (
          <div key={t.tier} className="border rounded-2xl p-4">
            <h3 className="font-semibold mb-2 capitalize">{t.tier}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {t.rules.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500">* conform condițiilor aplicabile</p>
    </section>
  );
}

export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form className="grid md:grid-cols-2 gap-3">
        <input className="border rounded-xl px-3 py-2" placeholder="Nume" />
        <input className="border rounded-xl px-3 py-2" placeholder="Email" />
        <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Subiect" />
        <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={5} placeholder="Mesaj"></textarea>
        <button className="border rounded-xl px-4 py-2 w-max">Trimite</button>
      </form>
    </section>
  );
}

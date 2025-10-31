export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            <li><a href="/(legal)/termeni-si-conditii">Termeni și condiții</a></li>
            <li><a href="/(legal)/protectia-datelor">Protecția datelor</a></li>
            <li><a href="/(legal)/cookies">Cookies</a></li>
            <li><a href="/(legal)/accesibilitate">Accesibilitate</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Util</div>
          <ul className="space-y-1">
            <li><a href="/marci">Mărci & modele</a></li>
            <li><a href="/finantare">Finanțare</a></li>
            <li><a href="/parteneri">Parteneri</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="font-semibold mb-2">Abonare noutăți</div>
          <div className="flex gap-2">
            <input className="border rounded-xl px-3 py-2 flex-1" placeholder="email@exemplu.ro" />
            <button className="border rounded-xl px-4">Abonează-mă</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

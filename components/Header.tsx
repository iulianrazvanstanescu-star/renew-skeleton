'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Acasă" },
  { href: "/vehicule", label: "Vehicule de ocazie" },
  { href: "/marci", label: "Mărci & modele" },
  { href: "/finantare", label: "Finanțare" },
  { href: "/angajamente", label: "Angajamente" },
  { href: "/parteneri", label: "Parteneri" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b sticky top-0 backdrop-blur bg-white/80 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-md" />
          <span className="font-semibold">renew</span>
        </Link>
        <nav className="hidden md:flex gap-2">
          {nav.map(item => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`px-3 py-2 rounded-lg ${active ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

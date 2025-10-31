export type Car = {
  id: number;
  brand: string;
  model: string;
  energy: string;
  body: string;
  year: number;
  km: number;
  price: number;
  dealer: string;
  level: "gold" | "start";
};

export const INVENTORY: Car[] = Array.from({ length: 48 }).map((_, i) => ({
  id: i + 1,
  brand: ["RENAULT", "DACIA", "NISSAN"][i % 3],
  model: ["CLIO", "DUSTER", "QASHQAI"][i % 3],
  energy: ["BENZINA", "DIESEL", "GPL", "ELECTRIC"][i % 4],
  body: ["HATCHBACK", "SUV", "MINIVAN"][i % 3],
  year: 2017 + (i % 8),
  km: 8000 * (i + 1),
  price: 8500 + i * 450,
  dealer: ["APAN Selection", "AMAT Selection", "ALTEX AUTO"][i % 3],
  level: (i % 2 === 0) ? "gold" : "start",
}));

export const PARTNERS = [
  { name: "APAN Selection SRL", city: "Galați", county: "Galați", email: "contact@apan.ro", phone: "0740118718" },
  { name: "AMAT Selection SRL", city: "Pitești", county: "Argeș", email: "office@amat.ro", phone: "0746236495" },
  { name: "ALTEX AUTO SRL", city: "Piatra Neamț", county: "Neamț", email: "info@altexauto.ro", phone: "0743097219" },
];

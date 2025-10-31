'use client';
import { INVENTORY } from "@/lib/data";

type State = { brand: string; energy: string; body: string; sort: string; q: string; };

export default function Filters({ state, onChange }: { state: State; onChange: (s: State) => void; }) {
  const set = (k: keyof State, v: string) => onChange({ ...state, [k]: v });

  return (
    <div className="grid md:grid-cols-5 gap-3">
      <select value={state.brand} onChange={(e) => set('brand', e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="">Marcă</option>
        {Array.from(new Set(INVENTORY.map(c => c.brand))).map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select value={state.energy} onChange={(e) => set('energy', e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="">Energie</option>
        {Array.from(new Set(INVENTORY.map(c => c.energy))).map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select value={state.body} onChange={(e) => set('body', e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="">Caroserie</option>
        {Array.from(new Set(INVENTORY.map(c => c.body))).map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <select value={state.sort} onChange={(e) => set('sort', e.target.value)} className="border rounded-xl px-3 py-2">
        <option value="new">anunț nou</option>
        <option value="price_asc">preț: crescător</option>
        <option value="price_desc">preț: descrescător</option>
        <option value="km_asc">kilometraj: crescător</option>
        <option value="km_desc">kilometraj: descrescător</option>
      </select>
      <input value={state.q} onChange={(e) => set('q', e.target.value)} placeholder="Caută model / dealer" className="border rounded-xl px-3 py-2" />
    </div>
  );
}

export default function Chip({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 border">{children}</span>;
}

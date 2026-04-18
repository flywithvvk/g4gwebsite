export function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }}>{name}</span>;
}

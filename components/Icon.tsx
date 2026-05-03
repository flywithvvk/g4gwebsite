export function Icon({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined inline-flex items-center justify-center overflow-hidden align-middle leading-none ${className}`}
      style={{ fontSize: size, width: size, height: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

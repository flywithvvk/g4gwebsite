export function IndiaFlag({ size = 18 }: { size?: number }) {
  const h = Math.round(size * 0.667);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 18 12"
      className="inline-block flex-shrink-0 rounded-[1px]"
      aria-label="India flag"
      role="img"
    >
      <rect width="18" height="4" fill="#FF9933" />
      <rect y="4" width="18" height="4" fill="#FFFFFF" />
      <rect y="8" width="18" height="4" fill="#138808" />
      {/* Ashoka Chakra */}
      <circle cx="9" cy="6" r="1.55" fill="none" stroke="#000080" strokeWidth="0.45" />
      <circle cx="9" cy="6" r="0.32" fill="#000080" />
      {/* 24 spokes */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={9 + 0.32 * Math.cos(angle)}
            y1={6 + 0.32 * Math.sin(angle)}
            x2={9 + 1.55 * Math.cos(angle)}
            y2={6 + 1.55 * Math.sin(angle)}
            stroke="#000080"
            strokeWidth="0.18"
          />
        );
      })}
    </svg>
  );
}

import Image from "next/image";
import { useId } from "react";

export type ArtVariant = "hero" | "nocturne" | "arch" | "grid" | "orbit" | "portrait";

type ArtFrameProps = {
  variant: ArtVariant;
  /** Real image path. When provided, it replaces the art-directed placeholder composition. */
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Art-directed placeholder imagery: tonal, abstract compositions in the brand palette.
 * Swap for photography by passing `src`.
 */
export function ArtFrame({
  variant,
  src,
  alt = "",
  label,
  className = "",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ArtFrameProps) {
  const uid = useId().replace(/:/g, "");

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`grain relative overflow-hidden ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {compositions[variant](uid)}
      </svg>
      {label && (
        <span className="eyebrow absolute bottom-4 left-4 text-[0.6rem] opacity-70 mix-blend-difference text-ivory">
          {label}
        </span>
      )}
    </div>
  );
}

const compositions: Record<ArtVariant, (id: string) => React.ReactNode> = {
  hero: (id) => (
    <>
      <defs>
        <linearGradient id={`h-bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2724" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
        <radialGradient id={`h-glow-${id}`} cx="0.62" cy="0.34" r="0.5">
          <stop offset="0" stopColor="#B5AA9B" stopOpacity="0.55" />
          <stop offset="1" stopColor="#B5AA9B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#h-bg-${id})`} />
      <rect width="400" height="500" fill={`url(#h-glow-${id})`} />
      <path d="M120 500 V230 a110 110 0 0 1 220 0 V500" fill="#F5F2EC" opacity="0.06" />
      <path
        d="M140 500 V236 a90 90 0 0 1 180 0 V500"
        fill="none"
        stroke="#D8D4CE"
        strokeOpacity="0.45"
        strokeWidth="0.75"
      />
      <circle cx="248" cy="170" r="46" fill="#D8D4CE" opacity="0.85" />
      <line x1="40" y1="0" x2="40" y2="500" stroke="#B5AA9B" strokeOpacity="0.25" strokeWidth="0.5" />
      <line x1="0" y1="420" x2="400" y2="420" stroke="#B5AA9B" strokeOpacity="0.25" strokeWidth="0.5" />
      <rect x="60" y="300" width="64" height="200" fill="#B5AA9B" opacity="0.18" />
    </>
  ),
  nocturne: (id) => (
    <>
      <defs>
        <linearGradient id={`n-bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d1b19" />
          <stop offset="1" stopColor="#0c0c0c" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#n-bg-${id})`} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1={60 + i * 36}
          y1="0"
          x2={60 + i * 36}
          y2="500"
          stroke="#B5AA9B"
          strokeOpacity={0.08 + (i % 3) * 0.05}
          strokeWidth="0.6"
        />
      ))}
      <circle cx="270" cy="150" r="62" fill="#B5AA9B" opacity="0.9" />
      <circle cx="292" cy="140" r="62" fill="#151413" />
      <rect x="70" y="330" width="260" height="1" fill="#D8D4CE" opacity="0.5" />
      <path d="M110 330 L130 260 L150 330 Z" fill="#D8D4CE" opacity="0.22" />
      <rect x="200" y="270" width="18" height="60" fill="#B5AA9B" opacity="0.35" />
    </>
  ),
  arch: () => (
    <>
      <rect width="400" height="500" fill="#E6E1D9" />
      <rect x="0" y="360" width="400" height="140" fill="#D8D4CE" />
      <path d="M110 360 V200 a90 90 0 0 1 180 0 V360 Z" fill="#B5AA9B" />
      <path d="M150 360 V230 a50 50 0 0 1 100 0 V360 Z" fill="#F5F2EC" opacity="0.9" />
      <circle cx="200" cy="300" r="18" fill="#171717" />
      <line x1="0" y1="360" x2="400" y2="360" stroke="#171717" strokeOpacity="0.35" strokeWidth="0.6" />
      <rect x="320" y="60" width="2" height="300" fill="#171717" opacity="0.25" />
    </>
  ),
  grid: () => (
    <>
      <rect width="400" height="500" fill="#D8D4CE" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="#171717" strokeOpacity="0.12" strokeWidth="0.6" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="#171717" strokeOpacity="0.12" strokeWidth="0.6" />
      ))}
      <rect x="100" y="100" width="200" height="200" fill="#F5F2EC" />
      <rect x="200" y="200" width="100" height="200" fill="#171717" />
      <circle cx="150" cy="350" r="50" fill="#B5AA9B" />
      <rect x="100" y="100" width="100" height="100" fill="#B5AA9B" opacity="0.5" />
    </>
  ),
  orbit: () => (
    <>
      <rect width="400" height="500" fill="#171717" />
      {[150, 115, 80, 45].map((r, i) => (
        <circle key={r} cx="200" cy="250" r={r} fill="none" stroke="#D8D4CE" strokeOpacity={0.15 + i * 0.12} strokeWidth="0.7" />
      ))}
      <circle cx="200" cy="250" r="22" fill="#F5F2EC" />
      <circle cx="315" cy="152" r="7" fill="#B5AA9B" />
      <circle cx="118" cy="316" r="4" fill="#B5AA9B" />
      <line x1="0" y1="250" x2="400" y2="250" stroke="#B5AA9B" strokeOpacity="0.2" strokeWidth="0.5" />
    </>
  ),
  portrait: (id) => (
    <>
      <defs>
        <linearGradient id={`p-bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFC8BE" />
          <stop offset="1" stopColor="#B5AA9B" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#p-bg-${id})`} />
      <path d="M90 500 V210 a110 110 0 0 1 220 0 V500 Z" fill="#F5F2EC" opacity="0.28" />
      <ellipse cx="200" cy="232" rx="46" ry="58" fill="#8A7F71" opacity="0.55" />
      <path d="M104 500 C112 388 156 334 200 334 C244 334 288 388 296 500 Z" fill="#8A7F71" opacity="0.55" />
      <line x1="200" y1="96" x2="200" y2="150" stroke="#171717" strokeOpacity="0.35" strokeWidth="0.6" />
      <rect x="28" y="28" width="344" height="444" fill="none" stroke="#F5F2EC" strokeOpacity="0.6" strokeWidth="0.75" />
    </>
  ),
};

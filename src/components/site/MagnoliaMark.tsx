export function MagnoliaMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="blossomGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </linearGradient>
      </defs>
      <g fill="url(#blossomGrad)" stroke="#d92672" strokeWidth="1.75" strokeLinejoin="round">
        <path d="M32 10c6 7 7 17 0 28-7-11-6-21 0-28z" />
        <path d="M14 24c9-1 16 5 18 14-9 2-16-4-18-14z" />
        <path d="M50 24c-9-1-16 5-18 14 9 2 16-4 18-14z" />
      </g>
      <circle cx="32" cy="38" r="3" fill="#d97706" />
      <path d="M32 40v14" stroke="#186bb0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

import { useId } from "react";

// Subtle, lightweight floating bougainvillea petals drifting in the breeze
export function FloralAtmosphere() {
  const baseId = useId();

  const petals = [
    { left: "8%", delay: "0s", duration: "18s", size: "12px", color: "#f472b6" },
    { left: "22%", delay: "4s", duration: "22s", size: "16px", color: "#ec4899" },
    { left: "38%", delay: "8s", duration: "19s", size: "10px", color: "#fbcfe8" },
    { left: "55%", delay: "2s", duration: "24s", size: "14px", color: "#db2777" },
    { left: "70%", delay: "6s", duration: "20s", size: "11px", color: "#f472b6" },
    { left: "86%", delay: "10s", duration: "23s", size: "15px", color: "#fbcfe8" },
    { left: "94%", delay: "14s", duration: "21s", size: "13px", color: "#ec4899" },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Gentle ambient sunbeam warmth */}
      <div className="ambient-sunbeam absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-200/20 via-sky-200/15 to-amber-200/20 blur-3xl" />
      <div className="ambient-sunbeam absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-amber-100/25 via-pink-100/15 to-transparent blur-3xl" />

      {/* Floating petals */}
      {petals.map((p, idx) => (
        <span
          key={`${baseId}-${idx}`}
          className="floating-petal"
          style={{
            left: p.left,
            top: "-20px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: `0 2px 6px ${p.color}40`,
          }}
        />
      ))}
    </div>
  );
}

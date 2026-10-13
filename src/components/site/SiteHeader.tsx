import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Home, Coffee, Sparkles, Palette, MapPin } from "lucide-react";
import { NAV } from "@/lib/business";
import { MagnoliaMark } from "./MagnoliaMark";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/menu": Coffee,
  "/about": Sparkles,
  "/gallery": Palette,
  "/visit": MapPin,
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur-md transition-all shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:py-4">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label="Magnolia Caffee & Gallery home">
          <MagnoliaMark className="h-8 w-8 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold leading-none tracking-tight text-gate-blue">
              Magnolia <span className="font-serif italic font-normal text-bougainvillea">Caffee</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
              &amp; Gallery
            </span>
          </div>
        </Link>

        {/* Boutique Garden Navigation Dock */}
        <nav aria-label="Main" className="nav-pill-dock hidden items-center md:flex">
          {NAV.map((n) => {
            const Icon = NAV_ICONS[n.to];
            return (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="nav-pill group"
              >
                {Icon && (
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-80 group-hover:opacity-100 group-data-[status=active]:opacity-100 transition-all duration-300" />
                )}
                <span>{n.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="rounded-full p-2.5 text-gate-blue bg-white/90 border border-gate-blue/30 shadow-xs backdrop-blur-md transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:shadow-md cursor-pointer md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/40 bg-background/98 backdrop-blur-lg px-6 pb-6 pt-4 md:hidden shadow-lg animate-fade-in">
          <ul className="flex flex-col space-y-2">
            {NAV.map((n) => {
              const Icon = NAV_ICONS[n.to];
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold tracking-wide text-foreground/80 transition-all duration-300 hover:bg-gate-blue/10 hover:text-gate-blue data-[status=active]:bg-gradient-to-r data-[status=active]:from-[#248ce0] data-[status=active]:via-[#186bb0] data-[status=active]:to-[#0e5088] data-[status=active]:text-white data-[status=active]:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                      <span>{n.label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

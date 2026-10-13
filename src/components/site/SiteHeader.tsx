import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Home, Coffee, Sparkles, Palette, MapPin, ArrowRight, Instagram, Clock } from "lucide-react";
import { NAV, BUSINESS } from "@/lib/business";
import { MagnoliaMark } from "./MagnoliaMark";

const NAV_DETAILS: Record<string, { icon: React.ComponentType<{ className?: string }>; desc: string }> = {
  "/": { icon: Home, desc: "Welcome, ambience & entrance" },
  "/menu": { icon: Coffee, desc: "Artisan coffee, waffles & brunch" },
  "/about": { icon: Sparkles, desc: "Our story & bohemian garden history" },
  "/gallery": { icon: Palette, desc: "Visual gallery & vintage art treasures" },
  "/visit": { icon: MapPin, desc: "Hours, directions & location" },
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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

          {/* Three Lines Menu Button on Top Right Corner */}
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-gate-blue/35 shadow-xs backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-gate-blue hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer text-gate-blue"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-gate-blue">
              Menu
            </span>
            <div className="flex flex-col justify-center items-center w-5 h-5">
              <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-115 text-gate-blue" />
            </div>
          </button>
        </div>
      </header>

      {/* Slide-over Navigation Drawer that opens when clicking the three lines */}
      {open && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          {/* Frosted Backdrop */}
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Side Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-md bg-[#fdfbf7] border-l border-border/80 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
              
              {/* Drawer Top: Brand + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border/60">
                  <div className="flex items-center gap-2.5">
                    <MagnoliaMark className="h-7 w-7" />
                    <div>
                      <span className="font-serif text-xl font-semibold text-gate-blue">
                        Magnolia <span className="font-serif italic font-normal text-bougainvillea">Caffee</span>
                      </span>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Navigation</p>
                    </div>
                  </div>

                  {/* Close button with X icon */}
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full p-2.5 text-gate-blue bg-white border border-border/80 hover:border-bougainvillea hover:text-bougainvillea shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Tabs List */}
                <nav aria-label="Slide-over Navigation" className="mt-6 space-y-2.5">
                  {NAV.map((n) => {
                    const detail = NAV_DETAILS[n.to];
                    const Icon = detail?.icon || Home;
                    return (
                      <Link
                        key={n.to}
                        to={n.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: true }}
                        className="group relative flex items-center justify-between p-3.5 rounded-2xl border border-border/50 bg-white/80 hover:bg-white text-foreground transition-all duration-300 hover:border-gate-blue/40 hover:shadow-md hover:translate-x-1 data-[status=active]:bg-gradient-to-r data-[status=active]:from-[#248ce0] data-[status=active]:via-[#186bb0] data-[status=active]:to-[#0e5088] data-[status=active]:text-white data-[status=active]:border-gate-blue data-[status=active]:shadow-lg cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-gate-blue group-hover:bg-sky-100 group-data-[status=active]:bg-white/20 group-data-[status=active]:text-white transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-serif text-xl font-medium tracking-tight block">
                              {n.label}
                            </span>
                            <span className="text-[11px] text-muted-foreground group-data-[status=active]:text-white/85 line-clamp-1">
                              {detail?.desc}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-gate-blue group-hover:translate-x-1 group-data-[status=active]:text-white transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer: Quick Info & Hours shortcut */}
              <div className="mt-8 pt-6 border-t border-border/60 space-y-3">
                <div className="rounded-xl bg-pink-50/70 p-3.5 border border-pink-100/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-bougainvillea font-medium">
                    <Clock className="h-4 w-4" />
                    <span>Tue–Sun Open · Mon Closed</span>
                  </div>
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-bougainvillea hover:underline flex items-center gap-1"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
                  <span>{BUSINESS.addressLine}</span>
                  <a href={BUSINESS.phoneHref} className="text-gate-blue hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { BUSINESS, NAV } from "@/lib/business";
import { MagnoliaMark } from "./MagnoliaMark";
import { Heart, MapPin, Phone, Instagram, Lock } from "lucide-react";
import { trackDirectionsClick, trackInstagramClick } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-[#103350] text-white">
      {/* Decorative colored border bar matching the painted gateway colors */}
      <div className="h-1.5 w-full bg-gradient-to-r from-gate-blue via-bougainvillea to-sun-gold" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <MagnoliaMark className="h-9 w-9 brightness-125" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Magnolia <span className="font-serif italic font-normal text-pink-300">Caffee</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-sky-200">&amp; Gallery · Fort Lauderdale</span>
            </div>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-sky-100/80">
            “Artisan coffee and tea, kombucha, healthy light food with a dash of art &amp; vintage.”
          </p>
          <div>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInstagramClick}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-pink-200 hover:bg-white/20 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>{BUSINESS.instagramHandle}</span>
            </a>
          </div>
        </div>

        <address className="not-italic text-xs leading-6 text-sky-100/90 space-y-2">
          <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-sun-gold mb-3">
            Find the Blue Gates
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pink-300" />
            <span>{BUSINESS.addressLine}</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0 text-pink-300" />
            <a className="underline-offset-4 hover:underline text-white" href={BUSINESS.phoneHref}>
              {BUSINESS.phoneDisplay}
            </a>
          </p>
          <p className="pt-1">
            <a
              className="inline-flex items-center gap-1 font-medium text-pink-300 hover:text-pink-200 underline underline-offset-4"
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackDirectionsClick}
            >
              Get directions to the café →
            </a>
          </p>
        </address>

        <nav aria-label="Footer" className="space-y-3">
          <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-sun-gold">
            Explore
          </p>
          <ul className="grid grid-cols-2 gap-y-2 text-xs">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sky-100/80 hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/admin" className="text-sky-100/50 hover:text-pink-200 transition-colors flex items-center gap-1">
                <Lock className="h-3 w-3" /> Admin
              </Link>
            </li>
          </ul>
          <div className="pt-2">
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackDirectionsClick}
              className="btn-accent text-xs py-2 px-5"
            >
              Plan Your Visit
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-sky-200/60 flex flex-wrap items-center justify-center gap-3 px-6">
        <span>© {new Date().getFullYear()} Magnolia Caffee &amp; Gallery · 1218 NE 4th Ave, Fort Lauderdale</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          Crafted with <Heart className="h-3 w-3 fill-pink-400 text-pink-400" /> for coffee &amp; art lovers
        </span>
      </div>
    </footer>
  );
}

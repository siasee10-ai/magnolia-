import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import entranceClean from "@/assets/magnolia-entrance-clean.jpg";
import { trackDirectionsClick, trackInstagramClick } from "@/lib/analytics";

export function VisitBlock({ showMap = false }: { showMap?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm md:grid md:grid-cols-2">
      <div className="p-8 md:p-12 space-y-6">
        <div>
          <span className="eyebrow-pink">Plan Your Visit</span>
          <h2 className="mt-2 text-3xl text-gate-blue md:text-4xl font-serif">Come sit a while.</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Look for the blue gates and blooming bougainvillea at 1218 NE 4th Avenue.
          </p>
        </div>

        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gate-blue" aria-hidden />
            <div>
              <span className="font-semibold text-foreground">{BUSINESS.addressLine}</span>
              <span className="block text-xs text-muted-foreground">Fort Lauderdale, FL · Shaded garden patio &amp; dine-in</span>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-gate-blue" aria-hidden />
            <a
              href={BUSINESS.phoneHref}
              className="font-medium text-foreground hover:text-gate-blue underline underline-offset-4 decoration-bougainvillea"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gate-blue" aria-hidden />
            <div>
              <span className="font-medium text-foreground">Tue–Wed 10am–4pm · Thu–Fri 10am–7pm · Sat–Sun 8:30am–4pm</span>
              <span className="block text-xs text-muted-foreground">Closed Mondays</span>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <Instagram className="h-4 w-4 shrink-0 text-bougainvillea" aria-hidden />
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInstagramClick}
              className="font-semibold text-bougainvillea hover:underline text-xs"
            >
              Follow {BUSINESS.instagramHandle} for daily specials
            </a>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDirectionsClick}
            className="btn-primary text-xs"
          >
            Get Directions
          </a>
          <a href={BUSINESS.phoneHref} className="btn-outline text-xs">
            Call Café
          </a>
        </div>
      </div>

      {showMap ? (
        <iframe
          title="Map showing Magnolia Caffee at 1218 NE 4th Ave, Fort Lauderdale"
          src={BUSINESS.mapEmbedUrl}
          className="h-72 w-full border-0 md:h-full min-h-[340px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="relative flex flex-col justify-between bg-cream/40 p-8 md:p-12 border-t md:border-t-0 md:border-l border-border/40">
          <div className="space-y-4">
            <span className="eyebrow">The Garden &amp; Gallery</span>
            <p className="font-serif text-2xl italic leading-snug text-gate-blue">
              “A cozy, eclectic vintage café and art gallery in Fort Lauderdale.”
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Serving artisan coffee, organic teas, kombucha, daily waffles, and healthy bites in an enchanting tropical garden setting.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-white p-3 border border-border/60 shadow-sm">
            <img
              src={entranceClean}
              alt="Magnolia Caffee blue gates entrance"
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-gate-blue">NE 4th Ave Entrance</p>
              <p className="text-[11px] text-muted-foreground">Look for the blue gates &amp; bougainvillea</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

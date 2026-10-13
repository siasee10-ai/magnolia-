import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function RatingSummary() {
  return (
    <section aria-labelledby="rating-h" className="mx-auto max-w-3xl px-5 py-20 text-center">
      <div className="gate-rule mx-auto max-w-xs">
        <span className="text-bougainvillea text-lg">🌸</span>
      </div>
      <span className="eyebrow-pink mt-4 inline-block">Neighborhood Favorite</span>
      <h2 id="rating-h" className="mt-3 text-5xl text-gate-blue font-serif font-bold">
        {BUSINESS.rating}<span className="text-3xl font-normal text-muted-foreground">/5</span>
      </h2>
      <div className="mt-3 flex justify-center gap-1.5 text-sun-gold" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6 fill-current drop-shadow-sm" />
        ))}
      </div>
      <p className="mt-4 text-lg font-medium text-foreground">
        from {BUSINESS.reviewCount}+ Google reviews
      </p>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
        Known for generous portions, friendly service, cozy eclectic vintage vibes, and delicious brunch favorites.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <a href={BUSINESS.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Read Reviews on Google
        </a>
      </div>
    </section>
  );
}

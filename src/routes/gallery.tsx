import { createFileRoute } from "@tanstack/react-router";
import entranceClean from "@/assets/magnolia-entrance-clean.jpg";
import gardenPatio from "@/assets/garden-patio.jpg";
import vintageGallery from "@/assets/vintage-gallery.jpg";
import interior from "@/assets/interior.jpg";
import seating from "@/assets/seating.jpg";
import waffles from "@/assets/waffles.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import pie from "@/assets/key-lime-pie.jpg";
import { BUSINESS } from "@/lib/business";
import { PageIntro } from "@/components/site/PageIntro";
import { VisitBlock } from "@/components/site/VisitBlock";
import { Instagram } from "lucide-react";
import { trackInstagramClick } from "@/lib/analytics";

const title = "Gallery — Magnolia Caffee & Gallery Fort Lauderdale";
const description =
  "Visual gallery of Magnolia Caffee & Gallery: our iconic blue gate entrance, blooming bougainvillea canopy, garden patio brunch, vintage art gallery, and homemade fare in Fort Lauderdale.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/magnolia-entrance-clean.jpg" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const galleryItems = [
  {
    src: entranceClean,
    alt: "Magnolia Caffee and Gallery entrance with bright bougainvillea, wooden sign, and painted blue gates",
    title: "The Iconic Blue Gates Entrance",
    tag: "Landmark",
  },
  {
    src: gardenPatio,
    alt: "Sunny garden patio brunch table with avocado toast, kombucha, and cappuccino",
    title: "Garden Patio Dining",
    tag: "Brunch & Garden",
  },
  {
    src: vintageGallery,
    alt: "Vintage oil paintings and ceramic teacups in the café gallery corner",
    title: "Art & Antique Collectibles",
    tag: "The Gallery",
  },
  {
    src: waffles,
    alt: "Golden waffles of the day with berries and syrup",
    title: "Waffles of the Day",
    tag: "Kitchen",
  },
  {
    src: cappuccino,
    alt: "Artisan cappuccino with latte art in vintage floral china",
    title: "Specialty Espresso Bar",
    tag: "Coffee & Tea",
  },
  {
    src: avocadoToast,
    alt: "Fresh avocado toast on rustic sourdough",
    title: "Artisan Avocado Toast",
    tag: "Healthy Bites",
  },
  {
    src: pie,
    alt: "Freshly baked Florida Key lime pie with whipped cream",
    title: "Florida Key Lime Pie",
    tag: "Bakery",
  },
  {
    src: interior,
    alt: "Cozy café interior with velvet chairs and warm lighting",
    title: "Farmhouse Dining Room",
    tag: "Atmosphere",
  },
  {
    src: seating,
    alt: "Vintage armchair nook with trailing greenery",
    title: "Quiet Reading Corner",
    tag: "Cozy Nook",
  },
];

function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Atmosphere &amp; Art" title="Visual Gallery">
        A look inside our eclectic world: the iconic bougainvillea archway, garden patio dining, and vintage art gallery corners.
      </PageIntro>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card p-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-gate-blue backdrop-blur-sm shadow-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-serif text-xl font-medium text-gate-blue">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Instagram Link at the End */}
      <section className="mx-auto max-w-4xl px-6 mt-16 text-center">
        <div className="rounded-2xl bg-card border border-border/60 p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-semibold text-bougainvillea uppercase tracking-wider flex items-center gap-1.5">
              <Instagram className="h-4 w-4" /> Live from the Café
            </span>
            <p className="font-serif text-2xl text-gate-blue font-medium">Follow our days on Instagram</p>
            <p className="text-xs text-muted-foreground">Catch daily waffle specials, new vintage art arrivals &amp; sunny garden moments.</p>
          </div>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="btn-accent text-xs py-2.5 px-6 shrink-0"
          >
            Follow {BUSINESS.instagramHandle}
          </a>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6 pb-20">
        <VisitBlock showMap />
      </section>
    </>
  );
}

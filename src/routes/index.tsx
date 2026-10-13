import { createFileRoute, Link } from "@tanstack/react-router";
import entranceClean from "@/assets/magnolia-entrance-clean.jpg";
import gardenPatio from "@/assets/garden-patio.jpg";
import vintageGallery from "@/assets/vintage-gallery.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import waffles from "@/assets/waffles.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import pie from "@/assets/key-lime-pie.jpg";
import { BUSINESS } from "@/lib/business";
import { MapPin, Instagram, ArrowDown, ArrowRight, Clock } from "lucide-react";
import { trackDirectionsClick, trackInstagramClick } from "@/lib/analytics";

const title = "Magnolia Caffee & Gallery — Fort Lauderdale, FL";
const description =
  "Artisan coffee and tea, kombucha, healthy light food with a dash of art & vintage. Step through the iconic blue gates at 1218 NE 4th Ave into Fort Lauderdale's cozy garden café.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/magnolia-entrance-clean.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. HERO: MINIMAL, PEACEFUL, NO TOP SOCIAL OR DIRECTIONS BUTTONS */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-50/90 px-4 py-1.5 text-xs font-medium text-bougainvillea border border-pink-100 shadow-xs">
                <span>🌸</span>
                <span>1218 NE 4th Ave · Fort Lauderdale</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-5xl leading-[1.08] text-gate-blue md:text-6xl lg:text-7xl font-normal">
                  Step Through the <br className="hidden sm:inline" />
                  <span className="font-serif italic text-bougainvillea">Blue Gates.</span>
                </h1>
                
                <p className="font-serif text-xl sm:text-2xl text-foreground/80 italic font-light max-w-lg leading-relaxed">
                  “Artisan coffee and tea, kombucha, healthy light food with a dash of art &amp; vintage.”
                </p>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Tucked behind blooming bougainvillea, Magnolia Caffee &amp; Gallery is a tranquil neighborhood sanctuary. Slow mornings, freshly baked plates, and curated vintage art invite you to linger.
              </p>

              {/* Minimal Hours Pill at top for convenience */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-xs text-muted-foreground border border-border/60 shadow-sm backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5 text-gate-blue shrink-0" />
                <span className="font-medium text-foreground">Weekly Hours:</span>
                <span>Tue–Wed 10–4</span>
                <span className="text-border">·</span>
                <span>Thu–Fri 10–7</span>
                <span className="text-border">·</span>
                <span>Sat–Sun 8:30–4</span>
              </div>

              {/* Enhanced Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/menu" className="btn-primary text-xs py-3 px-7">
                  <span>Explore Menu</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#visit-section"
                  className="btn-outline text-xs py-3 px-6"
                >
                  <Clock className="h-3.5 w-3.5 text-gate-blue" />
                  <span>Hours &amp; Location</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right: The Authentic Entrance Photo in Arched Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="group relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-[190px_190px_28px_28px] bg-gradient-to-b from-sky-200/20 via-pink-200/20 to-amber-200/20 blur-2xl opacity-60 transition duration-700 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[180px_180px_24px_24px] border-4 border-white bg-white shadow-xl ring-2 ring-gate-blue/30 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                  <img
                    src={entranceClean}
                    alt="Entrance to Magnolia Caffee with wooden sign, bougainvillea, and blue gates"
                    width={471}
                    height={860}
                    fetchPriority="high"
                    className="w-full h-auto object-cover max-h-[560px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 text-white text-center">
                    <p className="font-serif text-sm tracking-wide">
                      Our Garden Entrance on NE 4th Ave
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE VIBE OF THE CAFÉ: INSTAGRAM LIFESTYLE & ART GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <span className="eyebrow-pink">Atmosphere &amp; Lifestyle</span>
          <h2 className="text-3xl text-gate-blue md:text-4xl font-serif">
            A sanctuary to slow down
          </h2>
          <p className="text-muted-foreground text-sm">
            What makes a visit to Magnolia special — captured in the details.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Card 1: Garden Patio Brunch */}
          <div className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={gardenPatio}
                alt="Sunlit garden patio table with avocado toast, iced hibiscus kombucha and cappuccino in vintage china"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7 space-y-2">
              <span className="eyebrow text-[11px]">Garden Patio Dining</span>
              <h3 className="font-serif text-2xl text-gate-blue font-medium">Fresh Bites Under the Leaves</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enjoy avocado toast on artisan sourdough, effervescent kombucha with fresh mint, and silky espresso served in delicate vintage floral china on our shaded outdoor patio.
              </p>
            </div>
          </div>

          {/* Card 2: Vintage Gallery */}
          <div className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={vintageGallery}
                alt="Cozy eclectic vintage art gallery corner inside Magnolia Caffee with ornate oil paintings and ceramics"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7 space-y-2">
              <span className="eyebrow text-[11px] text-sun-gold">Art &amp; Vintage Collectibles</span>
              <h3 className="font-serif text-2xl text-gate-blue font-medium">A Curated Treasure Trove</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wander through cozy sitting nooks adorned with antique oil paintings in ornate frames, vintage ceramic teapots, and potted tropical ferns. Many unique collectibles are available for purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU HIGHLIGHTS: CLEAN & MINIMAL (NON-REPETITIVE) */}
      <section className="py-20 bg-cream/40 border-y border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="space-y-1">
              <span className="eyebrow-pink">Kitchen &amp; Bakery</span>
              <h2 className="text-3xl text-gate-blue md:text-4xl font-serif">
                Signature counter favorites
              </h2>
            </div>
            <Link to="/menu" className="btn-outline text-xs py-2 px-5">
              View Complete Menu →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Waffles of the Day",
                tag: "Daily Special",
                desc: "Golden crisp with fresh seasonal berries & pure maple syrup.",
                img: waffles,
              },
              {
                name: "Artisan Avocado Toast",
                tag: "Savory Brunch",
                desc: "Smashed ripe avocado on crusty country sourdough with microgreens.",
                img: avocadoToast,
              },
              {
                name: "Espresso & Cappuccino",
                tag: "Manual Bar",
                desc: "Silky micro-foam and single-origin roasts in vintage porcelain cups.",
                img: cappuccino,
              },
              {
                name: "Florida Key Lime Pie",
                tag: "House Pastry",
                desc: "Tart citrus custard on a buttery graham crust with whipped cream.",
                img: pie,
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-xl aspect-square">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-gate-blue font-medium">{item.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AT THE END: TIMINGS, GET DIRECTIONS & INSTAGRAM */}
      <section id="visit-section" className="mx-auto max-w-6xl px-6 py-28 scroll-mt-20">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <span className="eyebrow-pink">Plan Your Visit</span>
          <h2 className="text-4xl text-gate-blue md:text-5xl font-serif">
            Find the Blue Gates
          </h2>
          <p className="text-sm text-muted-foreground">
            We look forward to welcoming you to our Fort Lauderdale garden café.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 items-stretch">
          
          {/* Timings Table */}
          <div className="md:col-span-6 rounded-2xl border border-border/60 bg-card p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
                <Clock className="h-5 w-5 text-gate-blue" />
                <h3 className="font-serif text-2xl text-gate-blue font-medium">Opening Hours</h3>
              </div>

              <dl className="divide-y divide-border/60 text-sm">
                <div className="flex justify-between py-3">
                  <dt className="font-medium text-foreground">Tuesday – Wednesday</dt>
                  <dd className="font-semibold text-gate-blue">10:00 AM – 4:00 PM</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-medium text-foreground">Thursday – Friday</dt>
                  <dd className="font-semibold text-gate-blue">10:00 AM – 7:00 PM</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-medium text-foreground">Saturday – Sunday</dt>
                  <dd className="font-semibold text-gate-blue">8:30 AM – 4:00 PM</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="font-medium text-muted-foreground">Monday</dt>
                  <dd className="font-medium text-bougainvillea">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="pt-6 border-t border-border/60 text-xs text-muted-foreground">
              Dine-in garden patio seating &amp; takeaway available.
            </div>
          </div>

          {/* Location, Get Directions Button & Instagram at the End */}
          <div className="md:col-span-6 rounded-2xl border border-border/60 bg-card p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
                <MapPin className="h-5 w-5 text-gate-blue" />
                <h3 className="font-serif text-2xl text-gate-blue font-medium">Location</h3>
              </div>

              <div className="space-y-1 text-sm text-foreground">
                <p className="font-semibold">{BUSINESS.addressLine}</p>
                <p className="text-xs text-muted-foreground">Look for the bougainvillea arch and cobalt blue gates on NE 4th Ave.</p>
                <p className="text-xs text-muted-foreground pt-1">Phone: <a href={BUSINESS.phoneHref} className="text-gate-blue underline">{BUSINESS.phoneDisplay}</a></p>
              </div>

              {/* Get Directions Button placed gracefully at the end */}
              <div className="pt-2">
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackDirectionsClick}
                  className="btn-primary w-full text-center py-3 text-sm shadow-md"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions to the Café
                </a>
              </div>
            </div>

            {/* Instagram Section at the End */}
            <div className="rounded-xl bg-pink-50/70 p-5 border border-pink-100 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-bougainvillea uppercase tracking-wider flex items-center gap-1.5">
                  <Instagram className="h-4 w-4" /> Instagram
                </span>
                <p className="font-serif text-base text-foreground font-medium">{BUSINESS.instagramHandle}</p>
                <p className="text-[11px] text-muted-foreground">Daily brunch specials, garden flowers &amp; new art</p>
              </div>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInstagramClick}
                className="btn-accent text-xs py-2 px-4 shrink-0"
              >
                Follow
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

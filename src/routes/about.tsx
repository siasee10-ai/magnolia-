import { createFileRoute } from "@tanstack/react-router";
import entranceClean from "@/assets/magnolia-entrance-clean.jpg";
import gardenPatio from "@/assets/garden-patio.jpg";
import vintageGallery from "@/assets/vintage-gallery.jpg";
import { PageIntro } from "@/components/site/PageIntro";
import { VisitBlock } from "@/components/site/VisitBlock";

const title = "Our Story — Magnolia Caffee & Gallery Fort Lauderdale";
const description =
  "Step through our blue gates into Magnolia Caffee & Gallery. Discover our story: a vintage, eclectic garden café known for homemade brunch, artisan coffee, and curated art.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/magnolia-entrance-clean.jpg" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="Our Story" title="A Café with Heart & Character" />

      {/* Main split */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
        <div className="relative md:col-span-5">
          <div className="overflow-hidden rounded-2xl border-4 border-white shadow-xl ring-2 ring-gate-blue/30">
            <img
              src={entranceClean}
              alt="Magnolia Caffee blue gates entrance with bougainvillea"
              width={471}
              height={860}
              className="w-full object-cover max-h-[560px]"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-2.5 shadow-lg border border-border">
            <p className="text-xs font-semibold text-bougainvillea uppercase tracking-wider">The Landmark</p>
            <p className="font-serif text-sm text-gate-blue">1218 NE 4th Ave Entrance</p>
          </div>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3.5 py-1 text-xs font-semibold text-bougainvillea">
            <span>🌸</span>
            <span>Fort Lauderdale’s Hidden Bohemian Garden</span>
          </div>
          <h2 className="font-serif text-3xl font-medium text-gate-blue md:text-4xl">
            From the moment you walk through our blue gates, you're family.
          </h2>
          <p>
            Framed by overflowing fuchsia bougainvillea and our signature cobalt blue wrought-iron gates, Magnolia Caffee &amp; Gallery is an oasis in Fort Lauderdale where time slows down.
          </p>
          <p>
            Follow the hand-painted rainbow pathway inside to find vintage farmhouse antiques, cozy armchairs, and the welcoming aroma of freshly ground espresso and warm waffles.
          </p>
          <p>
            Whether you are lingering over weekend brunch on the garden patio or browsing original art and antiques, we are so glad you are here.
          </p>
        </div>
      </section>

      {/* Two visual columns: The Garden & The Art Gallery */}
      <section className="mx-auto mt-28 max-w-6xl px-6 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm space-y-4">
          <div className="overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src={gardenPatio}
              alt="Sunlit garden patio dining table with brunch"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="eyebrow text-xs">The Garden Patio</span>
          <h3 className="font-serif text-2xl text-gate-blue">Under the Bougainvillea</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Surrounded by potted palms, trailing ferns, and warm Florida breezes, our patio is the heart of slow weekend mornings and lively conversations.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm space-y-4">
          <div className="overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src={vintageGallery}
              alt="Cozy eclectic vintage art gallery corner"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="eyebrow text-xs text-sun-gold">The Art Gallery</span>
          <h3 className="font-serif text-2xl text-gate-blue">Vintage Treasures</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Curated oil paintings, antique teaware, and eclectic curios decorate our dining spaces — inviting visitors to enjoy art with every sip.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6 pb-20">
        <VisitBlock showMap />
      </section>
    </>
  );
}

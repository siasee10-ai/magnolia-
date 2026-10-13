import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { VisitBlock } from "@/components/site/VisitBlock";
import { HIGHLIGHTS, MENU_GROUPS } from "@/lib/menu";
import { BUSINESS } from "@/lib/business";
import { Sparkles, Instagram } from "lucide-react";
import { trackInstagramClick } from "@/lib/analytics";

const title = "Menu — Magnolia Caffee & Gallery, Fort Lauderdale";
const description =
  "Artisan coffee and tea, kombucha, healthy light food with a dash of art & vintage. Belgian waffles with berries, avocado toast, panini, bagels with lox & Key lime pie.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageIntro eyebrow="Artisan Coffee &amp; Kitchen" title="Our Café Offerings">
        “Artisan coffee and tea, kombucha, healthy light food with a dash of art &amp; vintage.”
      </PageIntro>

      {/* Clean, minimal menu categories */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {MENU_GROUPS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <span className="text-2xl">{g.icon}</span>
                <h2 className="font-serif text-2xl font-medium text-gate-blue">{g.title}</h2>
              </div>
              <ul className="space-y-4">
                {g.items.map((item) => (
                  <li key={item.name} className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-base font-medium text-foreground">{item.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-pink-50/60 p-6 text-center border border-pink-100 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-foreground/80">
          <Sparkles className="h-5 w-5 text-bougainvillea shrink-0" />
          <span>Daily seasonal waffle specials, bakery selections &amp; loose-leaf teas rotate daily.</span>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="btn-accent text-xs py-2 px-4 shrink-0 shadow-sm"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>View Today's Specials</span>
          </a>
        </div>
      </section>

      {/* Featured visual highlights with generous breathing room */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <div className="text-center mb-12 space-y-2">
          <span className="eyebrow-pink">Kitchen Highlights</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gate-blue">Crowd Favorites</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <figure key={h.name} className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-1">
              <div className="overflow-hidden aspect-square">
                <img
                  src={h.img}
                  alt={h.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 text-center">
                <span className="font-serif text-lg font-medium text-gate-blue">{h.name}</span>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{h.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6 pb-20">
        <VisitBlock />
      </section>
    </>
  );
}

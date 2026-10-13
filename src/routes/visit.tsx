import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { VisitBlock } from "@/components/site/VisitBlock";
import entranceClean from "@/assets/magnolia-entrance-clean.jpg";
import { BUSINESS } from "@/lib/business";
import { Instagram } from "lucide-react";
import { trackInstagramClick } from "@/lib/analytics";

const title = "Visit Us — Magnolia Caffee & Gallery, Fort Lauderdale";
const description =
  "Visit Magnolia Caffee & Gallery at 1218 NE 4th Ave, Fort Lauderdale. Look for the iconic blue gates & bougainvillea canopy. Artisan coffee, healthy bites & vintage art.";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/magnolia-entrance-clean.jpg" },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: Visit,
});

const schedule = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "10:00 AM – 4:00 PM" },
  { day: "Wednesday", hours: "10:00 AM – 4:00 PM" },
  { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
  { day: "Friday", hours: "10:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "8:30 AM – 4:00 PM" },
  { day: "Sunday", hours: "8:30 AM – 4:00 PM" },
];

function Visit() {
  return (
    <>
      <PageIntro eyebrow="Plan Your Visit" title="Find the Blue Gates">
        Look for our blooming bougainvillea canopy and bright blue gates on NE 4th Avenue in Fort Lauderdale.
      </PageIntro>

      {/* Visual Landmark Tip */}
      <section className="mx-auto max-w-4xl px-6 mb-16">
        <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <img
            src={entranceClean}
            alt="Magnolia Caffee blue gates entrance"
            className="w-24 h-28 rounded-xl object-cover shadow-sm border-2 border-white shrink-0"
          />
          <div className="space-y-1">
            <span className="eyebrow text-xs">Easy to Spot</span>
            <h2 className="font-serif text-2xl text-gate-blue">The Entrance on NE 4th Ave</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When arriving along NE 4th Avenue, look for our overhead wooden “Magnolia” sign, cascading pink bougainvillea flowers, and open cobalt blue gates!
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <VisitBlock showMap />
      </section>

      {/* Opening Hours Table matching Instagram */}
      <section aria-labelledby="hours" className="mx-auto mt-24 max-w-xl px-6 pb-20">
        <div className="text-center space-y-2 mb-8">
          <span className="eyebrow-pink">Service Times</span>
          <h2 id="hours" className="font-serif text-3xl text-gate-blue">Weekly Hours</h2>
          <p className="text-xs text-muted-foreground">
            As posted on our Instagram{" "}
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInstagramClick}
              className="text-bougainvillea underline hover:underline"
            >
              {BUSINESS.instagramHandle}
            </a>
          </p>
        </div>
        
        <dl className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
          {schedule.map((item) => (
            <div key={item.day} className="flex justify-between py-3.5 text-sm">
              <dt className="font-medium text-foreground">{item.day}</dt>
              <dd className={item.hours === "Closed" ? "font-semibold text-bougainvillea" : "text-muted-foreground"}>
                {item.hours}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 text-center">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="btn-accent text-xs py-2.5 px-6 shadow-sm inline-flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            <span>Check {BUSINESS.instagramHandle} for Holiday Updates</span>
          </a>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import banner from "@/assets/hero-banner.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Rana Saqib Marble & Granite" },
      { name: "description", content: "Rana Saqib Marble & Granite — decades of trusted stone craftsmanship in Lahore. Local and imported granite for homes, offices and projects." },
      { property: "og:title", content: "About Rana Saqib Marble & Granite" },
      { property: "og:image", content: banner.url },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img src={banner.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center md:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">About Us</span>
          <h1 className="mt-3 text-4xl md:text-5xl">Rooted in Stone. Built on Trust.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground">Rana Saqib Marble & Granite</span> has been supplying
            premium natural stone across Lahore for decades. From majestic imported slabs to
            beautifully quarried local granite, every piece we deliver reflects our commitment to
            quality, honesty and craftsmanship.
          </p>
          <p>
            Located at Ghazi Road, Punjab Society Naka near DHA Phase 3, our showroom hosts a wide
            catalogue of granite finishes suitable for kitchens, staircases, flooring, façades and
            commercial projects.
          </p>
          <p>
            Whether you're an architect specifying materials for a project or a homeowner searching
            for the perfect kitchen countertop, we help you choose stone that lasts a lifetime.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { k: "20+", v: "Years of experience" },
            { k: "500+", v: "Projects delivered" },
            { k: "50+", v: "Granite varieties" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-4xl text-gradient-gold font-display">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

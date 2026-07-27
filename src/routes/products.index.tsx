import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { CATEGORIES, getByCategory, type Category } from "@/lib/products";

const searchSchema = z.object({
  category: z.enum(["local-granite", "imported-granite", "local-marble", "imported-marble"]).catch("local-granite"),
});

export const Route = createFileRoute("/products/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Granite & Marble Products | Rana Saqib Marble & Granite" },
      { name: "description", content: "Browse local & imported granite and marble — Kashmir Pink, Travertine, Panda White, Dark Emperador and more from Rana Saqib, Lahore." },
    ],
  }),
  component: Products,
});

function Products() {
  const { category } = Route.useSearch();
  const items = getByCategory(category as Category);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Our Collection</span>
          <h1 className="mt-3 text-4xl md:text-5xl">Granite & Marble</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Hand-picked local and imported stone. Explore the collection or tap a slab to view full specifications.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.value}
                to="/products"
                search={{ category: c.value }}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  category === c.value
                    ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--primary-foreground)]"
                    : "border-border bg-card text-foreground/80 hover:border-[var(--gold)]/60 hover:text-[var(--gold)]"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {items.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <div
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-[var(--gold)]/60"
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">{p.origin}</span>
                  <Link to="/products/$slug" params={{ slug: p.slug }}>
                    <h3 className="mt-1 text-lg font-semibold hover:text-[var(--gold)]">{p.name}</h3>
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      to="/contact"
                      className="flex-1 rounded-full bg-[var(--gold)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
                    >
                      Get Quotation
                    </Link>
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-card p-16 text-center">
            <h3 className="text-2xl">Available on Request</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              This collection is available on request. Visit our showroom on Ghazi Road, Lahore or call
              us to view current stock.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90"
            >
              Enquire Now
            </Link>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

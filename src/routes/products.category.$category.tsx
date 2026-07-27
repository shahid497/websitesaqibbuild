import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CATEGORIES, getByCategory, type Category } from "@/lib/products";

const CATEGORY_VALUES = ["local-granite", "imported-granite", "local-marble", "imported-marble"] as const;

export const Route = createFileRoute("/products/category/$category")({
  loader: ({ params }) => {
    if (!CATEGORY_VALUES.includes(params.category as Category)) throw notFound();
    const category = params.category as Category;
    const meta = CATEGORIES.find((c) => c.value === category)!;
    return { category, meta, items: getByCategory(category) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const { meta } = loaderData;
    return {
      meta: [
        { title: `${meta.label} — Rana Saqib Marble & Granite, Lahore` },
        { name: "description", content: `Browse our ${meta.label.toLowerCase()} collection. Premium quality slabs, competitive pricing, expert installation across Lahore.` },
        { property: "og:title", content: `${meta.label} Collection — Rana Saqib Marble & Granite` },
        { property: "og:description", content: `Premium ${meta.label.toLowerCase()} slabs — hand-picked, wholesale & retail from Lahore's trusted stone supplier.` },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="text-3xl">Category not found</h1>
        <Link to="/products" search={{ category: "local-granite" }} className="mt-6 inline-block text-[var(--gold)]">
          ← Back to all products
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="text-3xl">Something went wrong</h1>
      </div>
    </SiteLayout>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, meta, items } = Route.useLoaderData();

  return (
    <SiteLayout>
      <section className="border-b border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-[var(--gold)]">Home</Link>
            <span>/</span>
            <Link to="/products" search={{ category: "local-granite" }} className="hover:text-[var(--gold)]">Products</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">{meta.label}</span>
          </nav>
          <span className="mt-6 block text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Collection</span>
          <h1 className="mt-3 text-4xl md:text-5xl">{meta.label}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Explore our hand-picked {meta.label.toLowerCase()} slabs. Tap any product to view specifications and request a quotation.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.value}
                to="/products/category/$category"
                params={{ category: c.value }}
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
            {items.map((p: import("@/lib/products").Product) => (
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

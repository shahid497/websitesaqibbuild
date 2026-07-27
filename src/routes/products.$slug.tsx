import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Phone, Send, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { getProduct, getRelated, type Product } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: getRelated(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — ${product.categoryLabel} | Rana Saqib Marble & Granite` },
        { name: "description", content: product.desc },
        { property: "og:title", content: `${product.name} — Rana Saqib Marble & Granite` },
        { property: "og:description", content: product.tagline },
        { property: "og:image", content: product.image },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-4 py-32 text-center">
        <h1 className="text-3xl">Product not found</h1>
        <Link to="/products" search={{ category: "local-granite" }} className="mt-6 inline-block text-[var(--gold)]">
          ← Back to products
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
  component: ProductDetail,
});

function ProductDetail() {
  const { product, related } = Route.useLoaderData();
  const gallery = [product.image, product.image, product.image, product.image];
  const [activeImg, setActiveImg] = useState(0);
  const whatsappMsg = encodeURIComponent(`Assalam u Alaikum, I'm interested in ${product.name}. Please share more details.`);

  const prev = () => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg((i) => (i + 1) % gallery.length);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-[var(--gold)]">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products/category/$category" params={{ category: product.category }} className="hover:text-[var(--gold)]">{product.categoryLabel}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[var(--gold)]">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-10 md:grid-cols-2 md:px-8 md:py-14">
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              key={activeImg}
              src={gallery[activeImg]}
              alt={product.name}
              className="h-full w-full object-cover animate-in fade-in duration-500"
            />
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-md border transition ${
                  i === activeImg ? "border-[var(--gold)] ring-1 ring-[var(--gold)]" : "border-border opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[var(--gold)]">
            <span className="h-px w-8 bg-[var(--gold)]" />
            {product.origin} / {product.categoryLabel}
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl">{product.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{product.desc}</p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Availability</div>
              <div className="mt-2 flex items-center gap-2 text-base">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> In Stock
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Origin</div>
              <div className="mt-2 text-base font-medium">{product.origin}</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-base font-semibold text-[var(--primary-foreground)] hover:opacity-90">
              <Send className="h-5 w-5" /> Get Quote
            </Link>
            <a href={`https://wa.me/923014044285?text=${whatsappMsg}`} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a href="tel:03014044285" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>

          <h2 className="mt-14 text-2xl md:text-3xl">Specifications</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-border">
            {[
              ["Thickness", product.specs.thickness],
              ["Finish", product.specs.finish],
              ["Best For", product.specs.bestFor],
              ["Colour Range", product.specs.colourRange],
              ["Slip Rating", product.specs.slipRating],
            ].map(([k, v], i) => (
              <div key={k} className={`flex items-center justify-between px-6 py-5 text-base ${i > 0 ? "border-t border-border" : ""}`}>
                <span className="text-muted-foreground">{k}</span>
                <span className="font-medium text-foreground">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-base text-muted-foreground">
            {["Wholesale & Retail", "Expert Installation", "Free Site Visit"].map((f) => (
              <span key={f} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[var(--gold)]" /> {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl">Related Products</h2>
            <Link to="/products/category/$category" params={{ category: product.category }} className="text-sm text-[var(--gold)]">
              All products →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p: Product) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <span className="mt-1 inline-block text-xs text-[var(--gold)]">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

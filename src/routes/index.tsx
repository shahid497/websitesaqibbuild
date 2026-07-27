import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Truck, ShieldCheck, Hammer, Ruler, Gem, Quote, Star, Phone, ChevronDown, MapPin, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import banner from "@/assets/hero-banner.jpg";
import g6 from "@/assets/granite-1.png";
import { getByCategory, type Category, type Product } from "@/lib/products";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rana Saqib Marble & Granite | Premium Stone in Lahore" },
      { name: "description", content: "Local & imported granite and marble supplier in Lahore. Ghazi Road, Punjab Society Naka, Near DHA Phase 3. Call 0301-4044285." },
      { property: "og:title", content: "Rana Saqib Marble & Granite" },
      { property: "og:description", content: "Premium local & imported granite and marble in Lahore." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
        src={banner}
        alt="Marble & granite showroom"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        width={1920}
        height={1080}
/>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-8 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Marble & Granite Specialists
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl lg:text-7xl">
            Stone crafted with <span className="text-gradient-gold">timeless elegance</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Rana Saqib Marble & Granite supplies premium local and imported stone across Lahore —
            trusted by homes, architects and builders for decades.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              search={{ category: "local-granite" }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-90"
            >
              Explore Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Hand-picked Stone", desc: "Every slab inspected for grain, polish and consistency before it reaches you." },
            { icon: Truck, title: "Lahore-wide Delivery", desc: "Prompt supply from our Ghazi Road facility straight to your project site." },
            { icon: ShieldCheck, title: "Trusted Craftsmanship", desc: "Decades of experience serving homeowners, contractors and architects." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 transition hover:border-[var(--gold)]/60">
              <f.icon className="h-8 w-8 text-[var(--gold)]" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <FeaturedCollection
        eyebrow="Featured"
        heading="Our Local Granite"
        category="local-granite"
      />
      <FeaturedCollection
        eyebrow="Imported"
        heading="Imported Marble Collection"
        category="imported-marble"
        muted
      />
      <FeaturedCollection
        eyebrow="Local"
        heading="Local Marble"
        category="local-marble"
      />


      {/* LEGACY / SPLIT */}
      <section className="border-y border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 md:px-8 md:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl" />
            <img src={g6} alt="Black granite craftsmanship" className="relative rounded-2xl border border-[var(--gold)]/20 shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-[var(--gold)]/40 bg-background/90 px-6 py-4 shadow-xl backdrop-blur md:block">
              <div className="font-display text-3xl text-gradient-gold">20+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Years crafting stone</div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">A Legacy of Stone</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Timeless craftsmanship, quarried close to home.</h2>
            <p className="mt-5 text-muted-foreground">
              From locally quarried Kashmir Pink to rare imported slabs, every piece is hand-selected for
              grain, polish, and consistency. We work with homeowners, architects and builders — supplying
              stone that outlives trends.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Hand-inspected slabs for even grain & finish",
                "Direct sourcing from local quarries & global mills",
                "On-site measurement, cutting & installation",
                "Kitchens, staircases, façades & flooring",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-4xl">Complete Marble & Granite Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From selection to installation — one team, one standard of finish.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { icon: Gem, title: "Kitchen Countertops", desc: "Precision-cut granite & marble tops with seamless edges." },
            { icon: Ruler, title: "Flooring & Cladding", desc: "Large-format slabs for living rooms, lobbies and façades." },
            { icon: Hammer, title: "Staircases", desc: "Custom risers, treads and railings in matched stone." },
            { icon: Sparkles, title: "Vanity Tops", desc: "Bathrooms crafted with polished, sealed stone finishes." },
            { icon: Truck, title: "Delivery & Fitting", desc: "Lahore-wide dispatch straight from our Ghazi Road yard." },
            { icon: ShieldCheck, title: "Restoration & Polish", desc: "Bring dulled stone back to a mirror-grade shine." },
          ].map((s) => (
            <div key={s.title} className="group bg-card p-8 transition hover:bg-[oklch(0.18_0.01_60)]">
              <s.icon className="h-8 w-8 text-[var(--gold)] transition-transform group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl">From Idea to Installation</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Consult", d: "Share your project — style, space, budget." },
              { n: "02", t: "Select", d: "Visit our showroom & pick your slab." },
              { n: "03", t: "Measure", d: "On-site measurement and cutting plan." },
              { n: "04", t: "Install", d: "Precision installation & final polish." },
            ].map((step) => (
              <div key={step.n} className="relative rounded-xl border border-border bg-card p-6">
                <div className="font-display text-4xl text-gradient-gold">{step.n}</div>
                <h4 className="mt-3 font-semibold">{step.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center md:px-8">
        <Quote className="mx-auto h-10 w-10 text-[var(--gold)]" />
        <div className="mt-4 flex justify-center gap-1 text-[var(--gold)]">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <p className="mt-6 font-display text-2xl leading-relaxed md:text-3xl">
          "The finish on our kitchen countertop is flawless. Rana Saqib's team guided us through selection
          and delivered exactly on time. Trusted craftsmen."
        </p>
        <div className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
          — Ahmed R., DHA Phase 5, Lahore
        </div>
      </section>

      {/* CONNECT WITH US */}
      <ConnectSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-border">
        <img src={banner.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="max-w-2xl text-3xl md:text-4xl">
              Ready to bring <span className="text-gradient-gold">timeless stone</span> into your space?
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Visit our Ghazi Road showroom or call us for a free consultation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <a href="tel:03014044285" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90">
              <Phone className="h-4 w-4" /> 0301-4044285
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-[var(--gold)] hover:text-[var(--gold)]">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ConnectSection() {
  const [form, setForm] = useState({ name: "", phone: "", slab: "Local Marble", area: "", desc: "" });
  const waLink = () => {
    const msg = `Assalam u Alaikum, my name is ${form.name || "—"} (${form.phone || "—"}). I'm interested in ${form.slab}. Area: ${form.area || "—"} sq.ft. ${form.desc ? "Details: " + form.desc : ""}`;
    return `https://wa.me/923014044285?text=${encodeURIComponent(msg)}`;
  };
  return (
    <section id="connect" className="border-t border-border bg-[oklch(0.14_0.008_60)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 md:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
            <Sparkles className="h-3 w-3" /> Direct Contact
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Connect With Us</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Visit our premier showroom in Lahore to select slabs in person, or coordinate a professional
            measurement and site survey for your project. We offer direct wholesale rates.
          </p>

          <div className="mt-8 space-y-4">
            <a href="https://share.google/WHMo7gJYdrCT6lNZO" target="_blank" rel="noreferrer"
               className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--gold)]/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10">
                <MapPin className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Showroom & Slabs Depot</h3>
                <p className="mt-1 text-sm text-muted-foreground">Ghazi Road, Punjab Society Naka, Near DHA Phase 3, Lahore, Pakistan</p>
                <span className="mt-2 inline-block text-xs uppercase tracking-widest text-[var(--gold)]">Open in Google Maps →</span>
              </div>
            </a>
            <a href="tel:03014044285" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-[var(--gold)]/60">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10">
                <Phone className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Telephone Hotline</h3>
                <p className="mt-1 text-sm text-muted-foreground">0301-4044285 (Rana Saqib Showroom)</p>
                <span className="mt-2 inline-block text-xs uppercase tracking-widest text-[var(--gold)]">Click to dial directly →</span>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10">
                <Clock className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Showroom Operating Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">Monday – Saturday: 09:00 AM – 08:30 PM</p>
                <span className="mt-2 inline-block text-xs uppercase tracking-widest text-emerald-400">Active & Welcoming</span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.open(waLink(), "_blank"); }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <h3 className="font-display text-2xl md:text-3xl">Request Free Wholesale Quotation</h3>
          <p className="mt-1 text-sm text-muted-foreground">Enter details below to generate your direct WhatsApp inquiry</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Your Name">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                     placeholder="e.g. Ch. Muhammad" className="input-style" />
            </Field>
            <Field label="Phone Number">
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                     placeholder="e.g. 0300-1234567" className="input-style" />
            </Field>
            <Field label="Slab Interest">
              <div className="relative">
                <select value={form.slab} onChange={(e) => setForm({ ...form, slab: e.target.value })}
                        className="input-style appearance-none pr-10">
                  <option>Local Marble</option>
                  <option>Imported Marble</option>
                  <option>Local Granite</option>
                  <option>Imported Granite</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>
            <Field label="Volume / Area (sq.ft)">
              <input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
                     placeholder="e.g. 350" className="input-style" />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Project Description / Specific Cuts">
              <textarea rows={4} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        placeholder="e.g. Need kitchen counters in Brazilian granite, and 3 bathrooms laid in Badal marble flooring..."
                        className="input-style resize-none" />
            </Field>
          </div>
          <button type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-6 py-4 text-base font-semibold text-[var(--primary-foreground)] transition hover:opacity-95">
            <Send className="h-5 w-5" /> Request Quote via WhatsApp
          </button>
        </form>
      </div>

      <style>{`.input-style{width:100%;border:1px solid var(--border);background:oklch(0.12 0.008 60);color:var(--foreground);border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.95rem;outline:none;transition:border-color .15s}.input-style:focus{border-color:var(--gold)}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const FAQS = [
  { q: "Which marble is best for my home?", a: "For flooring and high-traffic areas, durable local marbles like Ziarat White or imported Calacatta work beautifully. For kitchen countertops we usually recommend granite for its hardness. We help you choose based on usage, style and budget." },
  { q: "Imported vs Local Marble — what's the difference?", a: "Local marbles (Ziarat White, Badal, Sunny) are quarried in Pakistan and offer excellent value with strong durability. Imported marbles (Italian Calacatta, Turkish Travertine, Panda White) bring rare colours, dramatic veining and consistent tone at a premium." },
  { q: "What is the granite price in Lahore?", a: "Local granite starts from around Rs. 320/sq.ft (Salt & Pepper) up to Rs. 420/sq.ft (Midnight Black). Imported grades and rare colours are quoted per slab. Visit the showroom for current wholesale rates." },
  { q: "Which marble is best for kitchen countertops?", a: "For kitchens we generally recommend granite over marble — it resists heat, scratches and acidic spills far better. Panda White and Kashmir Pink are popular picks. If you love the marble look, Botticino or Dark Emperador sealed properly work well too." },
  { q: "What is the marble flooring cost in Lahore?", a: "Marble flooring typically ranges from Rs. 280 – Rs. 850 / sq.ft depending on stone type, plus installation. We provide free site measurement and a written wholesale quote before you commit." },
  { q: "How do I maintain marble?", a: "Wipe spills quickly, avoid harsh acidic cleaners, and re-seal polished marble every 12–18 months. We offer restoration and polishing services to bring dulled stone back to a mirror finish." },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-24 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-6 bg-[var(--gold)]" /> FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-12 border-t border-border">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className={`text-base md:text-lg font-semibold ${open ? "text-foreground" : "text-foreground/90"}`}>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <p className="pb-6 pr-10 text-sm md:text-base leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollection({
  eyebrow,
  heading,
  category,
  muted = false,
}: {
  eyebrow: string;
  heading: string;
  category: Category;
  muted?: boolean;
}) {
  const items: Product[] = getByCategory(category).slice(0, 4);
  return (
    <section className={muted ? "border-y border-border bg-[oklch(0.14_0.008_60)]" : ""}>
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">{eyebrow}</span>
            <h2 className="mt-2 text-3xl md:text-4xl">{heading}</h2>
          </div>
          <Link
            to="/products"
            search={{ category }}
            className="hidden text-sm text-[var(--gold)] hover:underline md:inline-flex"
          >
            View all →
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.tagline}</p>
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
          <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-12 text-center">
            <h3 className="text-xl">Available on Request</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              This collection is available on request. Visit our Ghazi Road showroom or contact us for current stock.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90"
            >
              Get Quotation
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}



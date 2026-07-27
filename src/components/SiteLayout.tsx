import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ChevronDown, MapPin, Phone, Menu, X, MessageCircle, Facebook, Instagram } from "lucide-react";
import rsmIcon from "@/assets/rsm-icon.png";

function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const iconSize = size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const nameSize = size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl";
  return (
    <div className="flex items-center gap-3">
      <img src={rsmIcon.url} alt="RSM" className={`${iconSize} object-contain`} />
      <div className="leading-tight">
        <div className={`font-display font-bold text-foreground ${nameSize}`}>Rana Saqib</div>
        <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
          Marble & Granite
        </div>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass =
    "text-sm font-medium tracking-wide text-foreground/80 hover:text-[var(--gold)] transition-colors";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/"><Brand /></Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className={linkClass}>Home</Link>
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className={`flex items-center gap-1 ${linkClass}`}>
                Products <ChevronDown className="h-4 w-4" />
              </button>
              {open && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-md border border-border bg-popover shadow-xl">
                    {[
                      { c: "local-granite", label: "Local Granite" },
                      { c: "imported-granite", label: "Imported Granite" },
                      { c: "local-marble", label: "Local Marble" },
                      { c: "imported-marble", label: "Imported Marble" },
                    ].map((it, i) => (
                      <Link
                        key={it.c}
                        to="/products/category/$category"
                        params={{ category: it.c }}
                        className={`block px-4 py-3 text-sm text-popover-foreground hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] ${i > 0 ? "border-t border-border" : ""}`}
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className={linkClass}>About</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:03014044285"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 px-4 py-2 text-sm font-medium text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)]"
            >
              <Phone className="h-4 w-4" /> 0301-4044285
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-md shadow-[var(--gold)]/20 transition hover:opacity-90"
            >
              Get Quotation
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col px-6 py-4">
              <Link to="/" className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/products/category/$category" params={{ category: "local-granite" }} className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Local Granite</Link>
              <Link to="/products/category/$category" params={{ category: "imported-granite" }} className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Imported Granite</Link>
              <Link to="/products/category/$category" params={{ category: "local-marble" }} className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Local Marble</Link>
              <Link to="/products/category/$category" params={{ category: "imported-marble" }} className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Imported Marble</Link>
              <Link to="/about" className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/contact" className="py-2 text-foreground" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <a
        href="https://wa.me/923014044285"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 animate-bounce hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      </a>

      <footer className="border-t border-border bg-[oklch(0.13_0.008_60)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Premium Marble & Granite solutions for homes and commercial projects in Lahore.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.me/923014044285" target="_blank" rel="noreferrer"
                 className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578708112182" target="_blank" rel="noreferrer"
                 className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/ranasaqibmarbleandgranite/" target="_blank" rel="noreferrer"
                 className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
              <li><Link to="/products" search={{ category: "local-granite" }} className="hover:text-[var(--gold)]">Products</Link></li>
              <li><a href="#faq" className="hover:text-[var(--gold)]">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-foreground">Products & Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/products/category/$category" params={{ category: "imported-marble" }} className="hover:text-[var(--gold)]">Imported Marble</Link></li>
              <li><Link to="/products/category/$category" params={{ category: "local-marble" }} className="hover:text-[var(--gold)]">Local Marble</Link></li>
              <li><Link to="/products/category/$category" params={{ category: "local-granite" }} className="hover:text-[var(--gold)]">Local Granite</Link></li>
              <li><Link to="/products/category/$category" params={{ category: "imported-granite" }} className="hover:text-[var(--gold)]">Imported Granite</Link></li>
              <li><span>Kitchen Countertops</span></li>
              <li><span>Marble Flooring</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-foreground">Contact</h4>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              Ghazi Road, Punjab Society Naka, Near DHA Phase 3, Lahore, Pakistan
            </p>
            <a href="tel:03014044285" className="mt-4 block text-sm font-semibold text-[var(--gold)]">
              0301-4044285
            </a>
            <a href="https://share.google/WHMo7gJYdrCT6lNZO" target="_blank" rel="noreferrer"
               className="mt-2 block text-sm text-muted-foreground hover:text-[var(--gold)]">
              View on Google Maps →
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rana Saqib Marble & Granite, Lahore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

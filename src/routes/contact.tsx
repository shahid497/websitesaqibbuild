import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Rana Saqib Marble & Granite" },
      { name: "description", content: "Visit Rana Saqib Marble & Granite at Ghazi Road, Punjab Society Naka, Near DHA Phase 3, Lahore. Call 0301-4044285." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[oklch(0.14_0.008_60)]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Get In Touch</span>
          <h1 className="mt-3 text-4xl md:text-5xl">Visit Our Showroom</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Drop by, call us, or send us a message — we'd love to help you pick the perfect stone.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 shrink-0 text-[var(--gold)]" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ghazi Road, Punjab Society Naka,<br />Near DHA Phase 3, Lahore, Pakistan
              </p>
              <a
                href="https://share.google/WHMo7gJYdrCT6lNZO"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-[var(--gold)] hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <a href="tel:03014044285" className="flex gap-4 rounded-xl border border-border bg-card p-6 hover:border-[var(--gold)]/60">
            <Phone className="h-6 w-6 shrink-0 text-[var(--gold)]" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="mt-1 text-sm text-muted-foreground">0301-4044285</p>
            </div>
          </a>

          <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 shrink-0 text-[var(--gold)]" />
            <div>
              <h3 className="font-semibold">Showroom Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Monday – Saturday: 9:00 AM – 8:00 PM<br />Sunday: By appointment
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Rana Saqib Marble & Granite location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.215532858719!2d74.36644059999999!3d31.4632567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907229ca8008b%3A0xea0e9f45770e331d!2sRana%20Saqib%20Marble%20And%20Granite%20Lahore!5e0!3m2!1sen!2s!4v1785087580133!5m2!1sen!2s"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </SiteLayout>
  );
}

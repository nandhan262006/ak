import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Wedding, Pre Wedding & Event Photography | AK Photography Ongole",
  description: "Best wedding photography, pre wedding shoots, cinematic films, baby photography, birthday events and fine art albums by AK Photography Ongole.",
};

const servicesList = [
  {
    num: "01",
    title: "Wedding Day Coverage",
    tag: "Most Popular",
    desc: "Full-day documentation from the morning rituals to the final send-off. Includes two photographers, high-res digital delivery, and an online gallery.",
    features: ["Full day coverage (up to 14 hours)", "Two lead photographers", "800+ edited digital images", "Online gallery with print store"],
    price: "Starting at $3,500",
  },
  {
    num: "02",
    title: "Pre-Wedding & Engagement",
    desc: "A dedicated creative session at a location of your choice. We spend 2-3 hours capturing your connection in a relaxed, natural setting.",
    features: ["2-3 hour session", "Multiple locations", "60+ edited images", "Style guide provided"],
    price: "Starting at $800",
  },
  {
    num: "03",
    title: "Cinematic Wedding Film",
    desc: "A beautifully edited highlight film (8-12 minutes) that brings your wedding day to life. Includes drone footage, audio from vows, and licensed music.",
    features: ["8-12 minute highlight film", "4K resolution", "Drone aerial footage", "Licensed soundtrack"],
    price: "Starting at $2,500",
  },
  {
    num: "04",
    title: "Heirloom Albums",
    desc: "Handcrafted, lay-flat albums printed on archival paper. Each album is designed collaboratively with you and built to last generations.",
    features: ["30-50 page lay-flat album", "Italian leather or linen cover", "Archival quality printing", "Custom design process"],
    price: "Starting at $1,200",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative pt-[72px] h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
          priority
        />
        <div className="wrapper relative">
          <span className="overline text-gold">Services</span>
          <div className="gold-line" />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight max-w-2xl">
            Artistry in every frame.
          </h1>
          <p className="text-surface/50 text-lg mt-6 max-w-lg">
            From the quiet anticipation before the ceremony to the wild joy of the reception, we document it all.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrapper">
          <div className="space-y-20">
            {servicesList.map((svc) => (
              <ScrollReveal key={svc.num}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-border/30 pb-20 last:border-b-0 last:pb-0">
                  <div className="lg:col-span-2">
                    <span className="text-5xl font-[family-name:var(--font-serif)] text-gold/30">
                      {svc.num}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="heading-md">{svc.title}</h2>
                      {svc.tag && (
                        <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-gold border border-gold/30 px-2 py-0.5">
                          {svc.tag}
                        </span>
                      )}
                    </div>
                    <p className="body-text">{svc.desc}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2 text-right">
                    <p className="font-[family-name:var(--font-serif)] text-xl text-gold mb-4">
                      {svc.price}
                    </p>
                    <a href="https://wa.me/919963716293" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.1em] font-semibold text-primary hover:text-gold transition-colors">
                      Inquire &rarr;
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-dim/50">
        <div className="wrapper text-center max-w-2xl">
          <ScrollReveal>
            <span className="overline">Custom Packages</span>
            <div className="gold-line mx-auto" />
            <h2 className="heading-lg mb-6">Something more specific?</h2>
            <p className="body-text mb-10">
              Every wedding is unique. We craft bespoke packages tailored to your vision, venue, and timeline.
              Reach out and we&rsquo;ll build the perfect collection for your celebration.
            </p>
              <a
                href="https://wa.me/919963716293"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Enquire on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

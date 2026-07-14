import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — AK Photography Ongole | Trusted Wedding Photographer",
  description: "Meet AK, an award-winning wedding photographer with over a decade of experience capturing timeless celebrations in Ongole and across India.",
};

const timeline = [
  { year: "2013", title: "The Beginning", desc: "Picked up a camera for the first time at a friend's wedding. The joy of freezing a fleeting moment changed everything." },
  { year: "2015", title: "Going Professional", desc: "Left the corporate world to pursue photography full-time. Shot 47 weddings that year — each one teaching something new." },
  { year: "2018", title: "Award Recognition", desc: "Received the Wedding Photography Award of Excellence. Featured in leading wedding publications across India." },
  { year: "2020", title: "Expanding Horizons", desc: "Started taking on destination weddings. From the beaches of Goa to the palaces of Rajasthan — love knows no boundaries." },
  { year: "2024", title: "500+ Celebrations", desc: "Crossed the milestone of 500 weddings. Launched our cinematic film division to offer complete visual storytelling." },
  { year: "Today", title: "Your Story Awaits", desc: "With a team of passionate creatives, we continue to push the boundaries of wedding photography. Every frame, a legacy." },
];

export default function About() {
  return (
    <>
      <section className="relative pt-[72px] h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
          priority
        />
        <div className="wrapper relative">
          <span className="overline text-gold">About</span>
          <div className="gold-line" />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight max-w-2xl">
            The story behind<br />the lens.
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <span className="overline">Our Philosophy</span>
                <div className="gold-line" />
                <h2 className="heading-lg mb-8">
                  We chase light.<br />We chase emotion.<br />We chase truth.
                </h2>
                <div className="body-text space-y-5">
                  <p>
                    AK Photography was born from a simple belief: that the most powerful images are
                    the ones you don&rsquo;t plan. The tear that falls during the varmala. The
                    nervous smile before the first look. The grandmother&rsquo;s hands blessing the couple.
                  </p>
                  <p>
                    We don&rsquo;t direct moments — we witness them. Our approach is documentary at
                    its core, elevated by an editorial sensibility. We use natural light, rich tones,
                    and deliberate composition to create images that feel as real as the moments themselves.
                  </p>
                  <p>
                    When you look back at your wedding photos decades from now, we want you to
                    feel the warmth of that day — not just see it. That&rsquo;s the standard we hold
                    ourselves to.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                  alt="AK - Photographer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-[family-name:var(--font-serif)] text-xl text-primary">AK</p>
                <p className="text-xs uppercase tracking-[0.1em] text-muted mt-1 font-semibold">Lead Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-dim/50">
        <div className="wrapper">
          <ScrollReveal className="text-center mb-16">
            <span className="overline">The Journey</span>
            <div className="gold-line mx-auto" />
            <h2 className="heading-lg">Over a decade of storytelling.</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year}>
                <div className="flex gap-8 pb-12 last:pb-0">
                  <div className="shrink-0 w-16 text-right">
                    <span className="font-[family-name:var(--font-serif)] text-gold text-xl">{item.year}</span>
                  </div>
                  <div className="relative pb-8">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-0 top-3 bottom-0 w-px bg-border/50" />
                    )}
                    <div className="w-2 h-2 rounded-full bg-gold mt-1.5 absolute left-[-5px]" />
                    <div className="pl-6">
                      <h3 className="font-[family-name:var(--font-serif)] text-lg text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary text-center">
        <div className="wrapper max-w-xl">
          <ScrollReveal>
            <span className="overline text-gold">Let&rsquo;s Work Together</span>
            <div className="gold-line mx-auto" />
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight mb-6">
              Your story is waiting.
            </h2>
            <p className="text-surface/50 mb-10">
              We&rsquo;d love to hear about your celebration and how we can help preserve it for generations.
            </p>
            <a href="https://wa.me/919963716293" target="_blank" rel="noopener noreferrer" className="btn-gold">Enquire on WhatsApp</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

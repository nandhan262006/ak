import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CardImageSlider from "@/components/CardImageSlider";

export const metadata: Metadata = {
  title: "Portfolio — Wedding Stories by AK Photography Ongole",
  description:
    "Explore AK Photography Ongole's portfolio of timeless wedding stories captured in Hyderabad, Goa, Bangalore and across India.",
};

const stories = [
  {
    city: "Hyderabad",
    year: "2025",
    title: "A Palace Affair",
    couple: "Karthik & Swathi",
    desc: "Three days of celebration at the Taj Falaknuma Palace. A union of heritage and modern luxury, captured through thousands of frames.",
    images: [
      { src: "/portfolioa1.png", alt: "Palace ceremony" },
      { src: "/portfolioa2.png", alt: "Couple at palace" },
      { src: "/portfolioa3.png", alt: "Palace decor" },
      { src: "/portfolioa4.png", alt: "Bridal portrait" },
      { src: "/portfolioa5.png", alt: "Ceremony detail" },
      { src: "/portfolioa6.png", alt: "Candid moment" },
    ],
  },
  {
    city: "Goa",
    year: "2025",
    title: "Sun-Kissed Rituals",
    couple: "Rahul & Divya",
    desc: "A vibrant seaside wedding where the ocean became the witness. The raw emotion of two families coming together on the golden sands.",
    images: [
      { src: "/portfoliob1.png", alt: "Beach wedding" },
      { src: "/portfoliob2.png", alt: "Seaside ceremony" },
      { src: "/portfoliob3.png", alt: "Goa celebration" },
      { src: "/portfoliob4.png", alt: "Sunset portrait" },
    ],
  },
  {
    city: "Bangalore",
    year: "2024",
    title: "Urban Enchantment",
    couple: "Arjun & Priya",
    desc: "A sophisticated city wedding pushing the boundaries of light and shadow. Modern silhouettes meet traditional roots.",
    images: [
      { src: "/portfolioc1.png", alt: "City wedding" },
      { src: "/portfolioc2.png", alt: "Rooftop ceremony" },
      { src: "/portfolioc3.png", alt: "Urban portrait" },
      { src: "/portfolioc4.png", alt: "Reception" },
      { src: "/portfolioc5.png", alt: "Candid moment" },
      { src: "/portfolioc6.png", alt: "Venue details" },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="relative pt-[72px] h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
          priority
        />
        <div className="wrapper relative">
          <span className="overline text-gold">Portfolio</span>
          <div className="gold-line" />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight">
            A legacy of love,
            <br />
            frame by frame.
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {stories.map((story) => (
              <ScrollReveal key={story.title}>
                <div className="group cursor-pointer bg-surface overflow-hidden">
                  <CardImageSlider
                    images={story.images}
                    badge={`${story.city} &bull; ${story.year}`}
                  />
                  <div className="p-6 md:p-8">
                    <span className="overline">{story.city} &bull; {story.year}</span>
                    <div className="gold-line" />
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-serif)] font-semibold text-primary mb-2">
                      {story.title}
                    </h3>
                    <p className="font-[family-name:var(--font-serif)] text-base text-gold italic mb-3">
                      {story.couple}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {story.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="text-xs uppercase tracking-[0.12em] font-semibold text-primary hover:text-gold transition-colors inline-flex items-center gap-2"
                    >
                      Book Your Date
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary text-center">
        <div className="wrapper max-w-2xl">
          <span className="overline text-gold">Start Your Story</span>
          <div className="gold-line mx-auto" />
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight mb-6">
            Your chapter awaits.
          </h2>
          <p className="text-surface/50 text-lg mb-10">
            Every love story deserves to be told beautifully. Let us write yours
            together.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Your Date
          </Link>
        </div>
      </section>
    </>
  );
}

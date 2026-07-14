import Image from "next/image";
import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Wedding & Portrait Photography | AK Photography Ongole",
  description:
    "Browse AK Photography Ongole's collection of timeless wedding moments, bridal portraits, baby shoots, and celebrations in Ongole.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552",
    alt: "Wedding couple",
    title: "Sacred Vows",
    category: "Weddings",
    width: 1122,
    height: 1402,
    span: "tall" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    alt: "Bride mehndi",
    title: "Golden Radiance",
    category: "Portraits",
    width: 1136,
    height: 1385,
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
    alt: "Candid moment",
    title: "Joy Unscripted",
    category: "Events",
    width: 1402,
    height: 1122,
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    alt: "Outdoor ceremony",
    title: "Golden Hour",
    category: "Weddings",
    width: 1536,
    height: 1024,
    span: "wide" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    alt: "Bride in veil",
    title: "Veiled Promise",
    category: "Portraits",
    width: 1023,
    height: 1537,
    span: "tall" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552",
    alt: "Floral details",
    title: "Blush & Bloom",
    category: "Details",
    width: 891,
    height: 885,
  },
  {
    src: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f",
    alt: "Ceremony arch",
    title: "Sacred Space",
    category: "Weddings",
    width: 1023,
    height: 1537,
    span: "tall" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485",
    alt: "Outdoor celebration",
    title: "Under the Sky",
    category: "Events",
    width: 1536,
    height: 1024,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    alt: "Ring detail",
    title: "Two Become One",
    category: "Details",
    width: 1402,
    height: 1122,
    span: "wide" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
    alt: "Couple portrait",
    title: "Together Forever",
    category: "Weddings",
    width: 1254,
    height: 1254,
  },
];

export default function Gallery() {
  return (
    <>
      <section className="relative pt-[72px] h-[45vh] min-h-[340px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
          alt=""
          fill
          className="object-cover brightness-[0.3]"
          sizes="100vw"
          priority
        />
        <div className="wrapper relative">
          <span className="overline text-gold">Gallery</span>
          <div className="gold-line" />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight">
            Every frame,
            <br />a story.
          </h1>
        </div>
      </section>

      <section className="section-pad !pt-12 !pb-20">
        <GalleryClient images={images} />
      </section>

      <section className="section-pad bg-primary text-center">
        <div className="wrapper max-w-xl">
          <span className="overline text-gold">Inspired?</span>
          <div className="gold-line mx-auto" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight mb-6">
            Let&rsquo;s create your gallery.
          </h2>
          <p className="text-surface/50 mb-10">
            Every celebration deserves to be remembered in frames that last
            forever.
          </p>
          <a href="/contact" className="btn-gold">
            Book Your Session
          </a>
        </div>
      </section>
    </>
  );
}

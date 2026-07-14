import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import CardImageSlider from "@/components/CardImageSlider";

const galleryItems = [
  { src: "/gallerygrid1.png", alt: "Wedding couple", title: "Sacred Vows", width: 1122, height: 1402 },
  { src: "/gallerygrid2.png", alt: "Rings", title: "Precious Moments", width: 1402, height: 1122 },
  { src: "/gallerygrid3.png", alt: "Bride", title: "Heritage Love", width: 1136, height: 1385 },
  { src: "/gallerygrid4.png", alt: "Candid", title: "Joyful Laughter", width: 1402, height: 1122 },
  { src: "/gallerygrid5.png", alt: "Outdoor", title: "Golden Hour", width: 1536, height: 1024 },
  { src: "/gallerygrid6.png", alt: "Details", title: "Anticipation", width: 1536, height: 1024 },
  { src: "/gallerygrid7.png", alt: "Ceremony", title: "Sacred Space", width: 1023, height: 1537 },
  { src: "/gallerygrid8.png", alt: "Portrait", title: "Eternal Love", width: 1122, height: 1402 },
];

const services = [
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ), title: "Wedding Photography", desc: "Complete day coverage capturing every ritual, emotion, and candid moment with an editorial eye." },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ), title: "Pre-Wedding Shoots", desc: "Creative outdoor sessions at handpicked locations that tell your unique love story." },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  ), title: "Cinematic Films", desc: "Beautifully edited wedding films that bring your memories to life with music and motion." },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ), title: "Bridal Portraits", desc: "Stunning solo portraits capturing the intricate details, jewellery, and radiance of the bride." },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ), title: "Candid Moments", desc: "Unscripted, natural captures — the laughter, tears, and everything in between." },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ), title: "Albums & Prints", desc: "Handcrafted heirloom albums and fine art prints designed to last generations." },
];

const featuredStories = [
  {
    title: "A Palace Affair",
    couple: "Karthik & Swathi",
    city: "Hyderabad",
    year: "2025",
    desc: "Three days of celebration at the Taj Falaknuma Palace. A union of heritage and modern luxury, captured through thousands of frames.",
    images: [
      { src: "/portfolioa1.png", alt: "Palace ceremony" },
      { src: "/portfolioa2.png", alt: "Couple portrait" },
      { src: "/portfolioa3.png", alt: "Palace decor" },
      { src: "/portfolioa4.png", alt: "Bridal portrait" },
      { src: "/portfolioa5.png", alt: "Ceremony detail" },
      { src: "/portfolioa6.png", alt: "Candid moment" },
    ],
  },
];

const testimonials = [
  { text: "AK captured every emotion of our wedding with such grace. Looking at the photos brings tears to my eyes every single time.", name: "Priya & Vikram", role: "Wedding, December 2025" },
  { text: "Not just a photographer, but a storyteller. The way he captured the small, fleeting moments is nothing short of magical.", name: "Ananya & Rohit", role: "Destination Wedding, Goa" },
  { text: "We flew him out for our Bangalore wedding and it was the best decision. Every frame is a masterpiece.", name: "Sneha & Arjun", role: "Wedding, March 2026" },
  { text: "Professional, patient, and incredibly talented. He made us feel so comfortable in front of the camera.", name: "Meera & Sravan", role: "Engagement Session" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
              name: "AK Photography Ongole",
              url: "https://akphotography.co.in",
              description: "AK Photography Ongole is the most trusted and top rated photography studio with highly experienced photographer in wedding photography, pre wedding photography, baby photo shoot, birthday photography, couple photography and family photography.",
              telephone: "+91 99637 16293",
              email: "hello@akphotography.co.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ongole",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/akphotography",
                "https://facebook.com/akphotography",
              ],
              priceRange: "₹₹",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/homepage.png"
          alt="AK Photography"
          fill
          priority
          className="hidden md:block object-cover"
          sizes="(max-width: 768px) 0vw, 100vw"
        />
        <Image
          src="/homepagemobile.png"
          alt="AK Photography"
          fill
          priority
          className="block md:hidden object-cover"
          sizes="(min-width: 768px) 0vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40" />

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-surface/70 hover:text-gold transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Discover</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40">
        <div className="wrapper">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "500+", label: "Weddings Captured" },
              { value: "4.9", label: "Client Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-10 border-r border-border/40 last:border-r-0 md:[&:nth-child(3)]:border-r-0"
              >
                <div className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-gold">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.1em] font-semibold text-muted mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-pad">
        <div className="wrapper">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                    alt="AK - Photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold hidden lg:block" />
              </div>

              <div>
                <span className="overline">Behind the Lens</span>
                <div className="gold-line" />
                <h2 className="heading-lg mb-6">
                  We don&rsquo;t just take photos.<br />We preserve legacies.
                </h2>
                <div className="body-text space-y-4">
                  <p>
                    With over a decade of experience, AK Photography has become synonymous with timeless
                    wedding imagery. Our approach is quiet, observant, and deeply intentional — we capture
                    the glances you didn&rsquo;t know happened, the tears that fell when no one was looking.
                  </p>
                  <p>
                    Every celebration is unique, and we treat it as such. From the grandeur of the
                    mandapam to the intimacy of a whispered promise, we document it all with an editorial
                    sensibility and a reverence for tradition.
                  </p>
                </div>
                <Link href="/about" className="btn-outline mt-8">
                  Our Story
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad bg-surface-dim/50">
        <div className="wrapper">
          <ScrollReveal className="text-center mb-12">
            <span className="overline">Our Work</span>
            <div className="gold-line mx-auto" />
            <h2 className="heading-lg">Recent Celebrations</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[auto]">
            {galleryItems.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-xs md:text-sm text-surface font-[family-name:var(--font-serif)] leading-tight">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wrapper text-center mt-12">
          <Link href="/gallery" className="btn-primary">
            <span>View Full Gallery</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="wrapper">
          <ScrollReveal className="text-center mb-16">
            <span className="overline">What We Offer</span>
            <div className="gold-line mx-auto" />
            <h2 className="heading-lg">Services crafted for your story.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border/30">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-surface p-10 group hover:bg-surface-high transition-colors duration-300"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {svc.icon}
                </div>
                <h3 className="heading-md mb-3">{svc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="section-pad bg-primary">
        <div className="wrapper">
          <ScrollReveal className="text-center mb-12">
            <span className="overline text-gold">Featured</span>
            <div className="gold-line mx-auto" />
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-surface font-semibold">
              Stories we&rsquo;re proud of.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {featuredStories.map((story) => (
              <div
                key={story.title}
                className="group cursor-pointer bg-surface overflow-hidden"
              >
                <CardImageSlider
                  images={story.images}
                  badge={`${story.city} &bull; ${story.year}`}
                />
                <div className="p-6 md:p-8">
                  <span className="overline">{story.city} &bull; {story.year}</span>
                  <div className="gold-line" />
                  <h3 className="text-xl font-[family-name:var(--font-serif)] font-semibold text-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="font-[family-name:var(--font-serif)] text-base text-gold italic mb-3">
                    {story.couple}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {story.desc}
                  </p>
                  <a
                    href="https://wa.me/919963716293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.12em] font-semibold text-primary hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    Enquire on WhatsApp
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-outline text-surface border-surface/30 hover:bg-surface hover:text-primary">
              View Full Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="wrapper">
          <ScrollReveal className="text-center mb-16">
            <span className="overline">Kind Words</span>
            <div className="gold-line mx-auto" />
            <h2 className="heading-lg">What couples say.</h2>
          </ScrollReveal>
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/portfoliob1.png"
            alt=""
            fill
            className="object-cover brightness-[0.25]"
            sizes="100vw"
          />
        </div>
        <div className="wrapper relative text-center">
          <ScrollReveal>
            <span className="overline text-gold">Let&rsquo;s Connect</span>
            <div className="gold-line mx-auto" />
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight mb-6 max-w-2xl mx-auto">
              Ready to create something beautiful together?
            </h2>
            <p className="text-surface/50 text-lg mb-10 max-w-xl mx-auto">
              We&rsquo;re currently booking for the upcoming season. Limited dates available — reach out today on WhatsApp.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/919963716293"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

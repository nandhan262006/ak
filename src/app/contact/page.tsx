import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Book AK Photography Ongole | Best Photographer",
  description: "Get in touch with AK Photography Ongole for wedding, pre wedding, baby shoot or any event. Top rated studio in Ongole — inquire today.",
};

export default function Contact() {
  return (
    <>
      <section className="relative pt-[72px] h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
          priority
        />
        <div className="wrapper relative">
          <span className="overline text-gold">Contact</span>
          <div className="gold-line" />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] text-surface font-semibold leading-tight max-w-2xl">
            Let&rsquo;s begin<br />the conversation.
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal>
              <span className="overline">Get in Touch</span>
              <div className="gold-line" />
              <h2 className="heading-lg mb-8">Tell us about your day.</h2>

              <ContactForm />
            </ScrollReveal>

            <ScrollReveal>
              <span className="overline">Details</span>
              <div className="gold-line" />
              <h2 className="heading-lg mb-8">Reach us directly.</h2>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] font-semibold text-gold mb-2">Phone</p>
                  <a href="https://wa.me/919963716293" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:text-gold transition-colors">
                    +91 99637 16293
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.1em] font-semibold text-gold mb-2">Email</p>
                  <a href="mailto:hello@akphotography.co.in" className="text-lg text-primary hover:text-gold transition-colors">
                    hello@akphotography.co.in
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.1em] font-semibold text-gold mb-2">Studio</p>
                  <p className="text-muted leading-relaxed">
                    Available for consultations by appointment.<br />
                    Contact us for the studio address.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.1em] font-semibold text-gold mb-3">Follow Along</p>
                  <div className="flex gap-5">
                    <a href="#" className="text-muted hover:text-gold transition-colors text-sm uppercase tracking-[0.05em] font-semibold">Instagram</a>
                    <a href="#" className="text-muted hover:text-gold transition-colors text-sm uppercase tracking-[0.05em] font-semibold">Facebook</a>
                    <a href="#" className="text-muted hover:text-gold transition-colors text-sm uppercase tracking-[0.05em] font-semibold">YouTube</a>
                  </div>
                </div>

                <div className="mt-10 p-8 bg-surface-dim/50">
                  <p className="text-sm text-primary font-semibold mb-2">Book via WhatsApp</p>
                  <p className="text-sm text-muted mb-4">The quickest way to check availability and get a quote — all enquiries and bookings through WhatsApp.</p>
                  <a href="https://wa.me/919963716293" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs">Chat on WhatsApp</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

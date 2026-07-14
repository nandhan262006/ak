import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface/70">
      <div className="wrapper py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-[family-name:var(--font-serif)] text-3xl text-gold tracking-tight"
            >
              AK Photography Ongole
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-surface/50">
              Most trusted and top rated photography studio in Ongole. Specializing in wedding, pre wedding, baby, birthday, couple and family photography.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="https://www.instagram.com/ak_photography_ongole_/" target="_blank" rel="noopener noreferrer" className="text-surface/40 hover:text-gold transition-colors text-xs uppercase tracking-[0.1em] font-semibold">Instagram</a>
              <a href="https://www.facebook.com/akphotography" target="_blank" rel="noopener noreferrer" className="text-surface/40 hover:text-gold transition-colors text-xs uppercase tracking-[0.1em] font-semibold">Facebook</a>
              <a href="#" className="text-surface/40 hover:text-gold transition-colors text-xs uppercase tracking-[0.1em] font-semibold">YouTube</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-surface mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Gallery", href: "/gallery" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-surface/50 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-surface mb-6">Get in Touch</h4>
            <div className="space-y-3 text-sm text-surface/50">
              <p>+91 99637 16293</p>
              <p>hello@akphotography.co.in</p>
              <p className="text-surface/30">Ongole, Andhra Pradesh — Available worldwide.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-surface/10 mt-16 pt-8 text-xs text-surface/30">
          <span>&copy; {new Date().getFullYear()} AK Photography Ongole. All rights reserved.</span>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

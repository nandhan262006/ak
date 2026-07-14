"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm"
      >
        <div className="wrapper flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="font-[family-name:var(--font-serif)] text-2xl tracking-tight text-primary hover:text-gold transition-colors z-50"
          >
            AK
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-muted hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919963716293"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.1em] font-semibold text-surface bg-gold hover:bg-gold-light transition-colors px-5 py-2.5"
            >
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 w-10 h-10 flex lg:hidden flex-col items-center justify-center gap-1.5 group"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-primary transition-all duration-300 ${
                open ? "opacity-0" : "group-hover:w-6"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-primary transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 flex flex-col items-center justify-center lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-[family-name:var(--font-serif)] transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              <span
                className={
                  pathname === link.href
                    ? "text-gold"
                    : "text-primary hover:text-gold transition-colors"
                }
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="https://wa.me/919963716293"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`btn-primary mt-4 transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? `${links.length * 80}ms` : "0ms" }}
          >
            <span>Book on WhatsApp</span>
          </a>
        </nav>
      </div>
    </>
  );
}

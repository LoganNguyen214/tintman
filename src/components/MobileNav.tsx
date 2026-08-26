"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[.145] text-xl text-muted"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-b border-white/[.08] bg-background px-6 py-6 shadow-lg"
        >
          <nav className="flex flex-col gap-5 text-base font-medium text-muted">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

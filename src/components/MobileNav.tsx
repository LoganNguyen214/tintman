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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.08] text-xl text-zinc-600 dark:border-white/[.145] dark:text-zinc-400"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-b border-black/[.08] bg-white px-6 py-6 shadow-lg dark:border-white/[.08] dark:bg-black"
        >
          <nav className="flex flex-col gap-5 text-base font-medium text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

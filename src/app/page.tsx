const services = [
  {
    title: "Ceramic Window Tint",
    description:
      "Maximum heat rejection and UV protection without interfering with radio, GPS, or phone signals.",
  },
  {
    title: "Carbon Window Tint",
    description:
      "A durable, non-fading film that blocks glare and heat at a more affordable price point.",
  },
  {
    title: "Windshield Tint",
    description:
      "Legal, ultra-clear film that cuts sun glare and heat through the front windshield.",
  },
  {
    title: "Commercial Tint",
    description:
      "Privacy and energy savings for storefronts, offices, and fleet vehicles.",
  },
];

const whyUs = [
  {
    title: "Lifetime Warranty",
    description: "Every install is backed by a lifetime warranty against bubbling, peeling, and fading.",
  },
  {
    title: "Locally Owned",
    description: "A local shop, not a chain — same technician from quote to install to follow-up.",
  },
  {
    title: "Same-Day Service",
    description: "Most vehicles are in and out the same day, usually in under two hours.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="sticky top-0 z-10 border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.08] dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            TintMan
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
            <a href="#services" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              Services
            </a>
            <a href="#why-us" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              Why Us
            </a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Keep it cool. Keep it private. Keep it sharp.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Professional window tinting for cars, trucks, and SUVs. Locally
            owned, lifetime warranty, and most jobs done same day.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              View Services
            </a>
          </div>
        </section>

        <section
          id="services"
          className="border-t border-black/[.08] bg-white py-24 dark:border-white/[.08] dark:bg-[#0a0a0a]"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Services
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.08]"
                >
                  <h3 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Why Choose TintMan
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {whyUs.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-black/[.08] bg-white py-24 dark:border-white/[.08] dark:bg-[#0a0a0a]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Get a Free Quote
            </h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
              Call, text, or stop by the shop and we&apos;ll get you a quote
              on the spot.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-zinc-950 dark:text-zinc-50">
              <span className="font-medium">Phone: (555) 123-4567</span>
              <span className="font-medium">Email: hello@tintman.example</span>
              <span className="font-medium">
                Address: 123 Main St, Your City, ST
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.08] py-8 dark:border-white/[.08]">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} TintMan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

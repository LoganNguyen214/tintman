import MobileNav from "@/components/MobileNav";
import ReviewsCarousel from "@/components/ReviewsCarousel";

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

const pricing = [
  { vehicle: "Coupe / Sedan", carbon: "$150", ceramic: "$250" },
  { vehicle: "SUV / Crossover", carbon: "$200", ceramic: "$325" },
  { vehicle: "Truck / Van", carbon: "$225", ceramic: "$350" },
  { vehicle: "Windshield (add-on)", carbon: "$100", ceramic: "$150" },
];

const gallery = [
  "Front doors, ceramic",
  "Full car, carbon",
  "Windshield strip",
  "SUV rear quarters",
  "Truck full package",
  "Sedan side profile",
];

// Real reviews from TintMan's public Facebook page, pulled 2026-08-25.
// Refresh periodically at https://reviews.birdeye.com/tintman-156058046533704
const reviews = [
  {
    name: "Josh Copeland",
    quote:
      "Hands down the best around. Scott has been doing my work for 16 years and I don't trust anyone else but him.",
  },
  {
    name: "Johnathan Rhyne",
    quote:
      "Great time management. Up front pricing. Knowledgeable of product. All together great service and great experience. 10/10. Will go back for future tint.",
  },
  {
    name: "Mason Caldwell",
    quote:
      "Scott has tinted the last two of my vehicles, and his work is great. I wouldn't recommend anyone else to tint my windows!",
  },
  {
    name: "Jay Pearson",
    quote: "Quality work, great pricing and very professional. Highly recommended.",
  },
  {
    name: "Kerry Marsh",
    quote:
      "Highly recommend the Tintman. Always the best professional and friendly atmosphere.",
  },
  {
    name: "Cole Willis Willingham",
    quote:
      "Won't go anywhere else! Great service along with a great job! Very pleased with the work!!",
  },
  {
    name: "Clay Coggin",
    quote: "The best around! Scott will do you right!",
  },
  {
    name: "Jamie Brassfield II",
    quote: "Best customer service by far and gets the job done! Highly recommend!",
  },
  {
    name: "Matt Thornton",
    quote: "Best place to get anything tinted EVER! Wouldn't think of going anywhere else.",
  },
  {
    name: "Michael Jones",
    quote:
      "Outstanding skill great quality work friendly. I would highly recommend you get all tint work here.",
  },
];

const faqs = [
  {
    question: "How long does a tint job take?",
    answer:
      "Most sedans and SUVs take one to two hours. Full vehicle packages or windshields can take a bit longer — we'll give you a time estimate with your quote.",
  },
  {
    question: "What tint darkness is legal in my state?",
    answer:
      "Legal limits vary by state. Let us know your state and vehicle when you book and we'll recommend shades that stay within local regulations.",
  },
  {
    question: "How soon can I roll my windows down after installation?",
    answer:
      "Wait at least 3-4 days before rolling your windows down so the film has time to fully cure and adhere.",
  },
  {
    question: "What's the difference between carbon and ceramic film?",
    answer:
      "Carbon film blocks glare and heat at a lower price point. Ceramic film rejects significantly more heat and UV without any signal interference, for a higher cost.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes — every install includes a lifetime warranty against bubbling, peeling, and fading for as long as you own the vehicle.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans">
      <header className="sticky top-0 z-10 border-b border-white/[.08] bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            TintMan
          </span>
          <nav className="hidden gap-6 text-sm font-medium text-muted lg:flex">
            <a href="#services" className="hover:text-accent">
              Services
            </a>
            <a href="#pricing" className="hover:text-accent">
              Pricing
            </a>
            <a href="#gallery" className="hover:text-accent">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-accent">
              Reviews
            </a>
            <a href="#faq" className="hover:text-accent">
              FAQ
            </a>
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover sm:inline-flex"
            >
              Get a Free Quote
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl flex-col items-start justify-center gap-6 px-6 py-16">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Keep it cool. Keep it private. Keep it sharp.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Professional window tinting for cars, trucks, and SUVs. Locally
            owned, lifetime warranty, and most jobs done same day.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="flex h-12 items-center justify-center rounded-full border border-white/[.145] px-6 text-base font-medium text-foreground transition-colors hover:border-transparent hover:bg-white/[.06]"
            >
              View Services
            </a>
          </div>
        </section>

        <section id="services" className="border-t border-white/[.08] bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Services
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/[.08] p-6"
                >
                  <h3 className="text-lg font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Pricing
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Starting prices by vehicle size. Final quote depends on window
              count and film choice.
            </p>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[.08]">
              <table className="w-full min-w-[480px] text-left">
                <thead>
                  <tr className="border-b border-white/[.08] text-sm text-muted">
                    <th className="px-6 py-4 font-medium">Vehicle</th>
                    <th className="px-6 py-4 font-medium">Carbon</th>
                    <th className="px-6 py-4 font-medium">Ceramic</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr
                      key={row.vehicle}
                      className={
                        i !== pricing.length - 1
                          ? "border-b border-white/[.08]"
                          : undefined
                      }
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {row.vehicle}
                      </td>
                      <td className="px-6 py-4 text-muted">{row.carbon}</td>
                      <td className="px-6 py-4 text-muted">{row.ceramic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="gallery" className="border-t border-white/[.08] bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Gallery
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((caption) => (
                <div
                  key={caption}
                  className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-white/[.15] bg-background text-sm text-muted"
                >
                  {caption}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Why Choose TintMan
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {whyUs.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="border-t border-white/[.08] bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Customer Reviews
              </h2>
              <a
                href="https://reviews.birdeye.com/tintman-156058046533704"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-accent"
              >
                See all reviews →
              </a>
            </div>
            <div className="mt-10 mx-auto max-w-2xl">
              <ReviewsCarousel reviews={reviews} />
            </div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 flex max-w-3xl flex-col divide-y divide-white/[.08]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-foreground marker:content-none">
                    {faq.question}
                    <span className="ml-4 text-muted transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/[.08] bg-surface py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Get a Free Quote
            </h2>
            <p className="max-w-xl text-muted">
              Call, text, or stop by the shop and we&apos;ll get you a quote
              on the spot.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-foreground">
              <span className="font-medium">Phone: (662) 401-2207</span>
              <span className="font-medium">Email: hello@tintman.example</span>
              <span className="font-medium">
                Address: 148 Co Rd 806, Tupelo, MS 38804
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[.08] py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-muted">
          © {new Date().getFullYear()} TintMan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

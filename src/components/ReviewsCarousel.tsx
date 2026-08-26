"use client";

import { useCallback, useEffect, useState } from "react";

type Review = {
  name: string;
  quote: string;
};

const AUTOPLAY_MS = 6000;

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  const review = reviews[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
        className="rounded-2xl border border-black/[.08] p-8 dark:border-white/[.08]"
      >
        <div aria-live="polite" className="min-h-[9rem]">
          <span className="text-amber-500" aria-label="5 out of 5 stars">
            ★★★★★
          </span>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            &ldquo;{review.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-950 dark:text-zinc-50">
            {review.name}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-[#1a1a1a]"
        >
          ←
        </button>
        <div className="flex gap-1">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1} of ${reviews.length}`}
              aria-current={i === index}
              className="flex h-8 w-6 items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index
                    ? "bg-zinc-950 dark:bg-zinc-50"
                    : "bg-zinc-300 dark:bg-zinc-700"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-[#1a1a1a]"
        >
          →
        </button>
      </div>
    </div>
  );
}

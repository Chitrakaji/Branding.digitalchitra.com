import Link from "next/link";

export default function Urgency() {
  return (
    <section className="px-6 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] bg-[var(--brand-deep)] px-8 py-9 text-white md:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand-soft)]">
                Limited free slots
              </p>
              <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-6xl">
                Free consultations are limited so each business gets focused attention.
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-9 text-[rgba(255,255,255,0.8)] md:text-[1.7rem] md:leading-10">
                If you want clear direction before spending more on ads or
                content, book your consultation now while free review slots are
                available.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur md:p-7">
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand-soft)]">
                Why act now
              </p>
              <ul className="mt-5 space-y-3 text-lg leading-8 text-[rgba(255,255,255,0.85)]">
                <li>Get clarity before wasting more budget.</li>
                <li>Know what to fix first in your marketing system.</li>
                <li>Move forward with a plan built for your business.</li>
              </ul>
              <Link
                href="#cta-form"
                className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-[var(--brand-deep)] transition hover:bg-[var(--brand-soft)]"
              >
                Book My Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

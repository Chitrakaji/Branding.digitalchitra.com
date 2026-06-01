import Link from "next/link";
import ExactLogo from "./ExactLogo";

type HeroProps = {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
};

export default function Hero({
  headline,
  subheadline,
  description,
  ctaText,
}: HeroProps) {
  return (
    <section className="px-6 pb-10 pt-6 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] md:px-10 md:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <ExactLogo className="h-auto w-full max-w-[520px]" />
            <h1 className="mt-10 text-[3.6rem] leading-[0.95] font-semibold tracking-tight md:text-[5.4rem]">
              {headline}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[1.55rem] leading-[1.35] text-[var(--foreground)] md:text-[2rem]">
              {subheadline}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-[1.4rem] md:leading-9">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Link
                href="#cta-form"
                className="inline-flex min-h-16 items-center justify-center rounded-full bg-[var(--brand)] px-9 py-4 text-lg font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                {ctaText}
              </Link>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
                Made for Nepal-based business owners who want more clarity,
                better leads, and stronger business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import ExactLogo from "@/components/ExactLogo";

const vimeoEmbedUrl =
  "https://player.vimeo.com/video/1194858766";
const whatsappUrl = "https://wa.me/9779814177680";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-4 text-[var(--foreground)] md:px-8 md:py-6">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[var(--shadow)] md:min-h-[calc(100vh-3rem)] md:px-8 md:py-6">
        <header className="text-center">
          <ExactLogo className="h-auto w-full max-w-[160px] md:max-w-[210px]" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)] md:text-sm">
            Thank you
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-tight md:text-4xl">
            Watch this video before your next step
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
            Your next step will be sent to your email. Please watch this video
            first, then open your email and follow the link there.
          </p>
        </header>

        <div className="my-4 md:my-5">
          <div className="mx-auto max-w-4xl rounded-[1.5rem] border border-[var(--border)] bg-white p-2 shadow-[0_18px_45px_rgba(8,71,68,0.14)] md:p-3">
            <div className="aspect-video w-full overflow-hidden rounded-[1.15rem] bg-white ring-1 ring-[var(--border)]">
              <iframe
                src={vimeoEmbedUrl}
                title="viemo_thank_you_video_consultation"
                width="640"
                height="360"
                frameBorder="0"
                className="h-full w-full bg-white"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <footer className="mx-auto grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-[var(--brand-deep)]"
          >
            Return to landing page
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--brand)] bg-[var(--surface-strong)] px-6 py-3 text-center text-base font-semibold text-[var(--brand)] transition hover:bg-[var(--brand)] hover:text-white"
          >
            Chat with me on WhatsApp
          </a>
        </footer>
      </section>
    </main>
  );
}

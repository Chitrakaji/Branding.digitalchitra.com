export default function Problem() {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            Problem + solution
          </p>
          <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-6xl">
            Digital marketing feels confusing when effort is high but results are low.
          </h2>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] md:p-9">
          <p className="max-w-4xl text-xl leading-9 text-[var(--muted)] md:text-[1.55rem] md:leading-10">
            If you are a business owner in Nepal, you may already be posting,
            boosting, testing ideas, and trying to stay active online. But even
            with all that effort, you may still not be getting enough serious
            inquiries, real customers, or steady sales.
          </p>

          <div className="mt-7 space-y-4">
            {[
              "You are posting on Facebook and Instagram but not getting enough inquiries.",
              "You are boosting posts but not seeing real sales.",
              "You do not know what marketing strategy is right for your business.",
              "You are getting random leads, but not serious customers.",
              "You are depending too much on referrals and word of mouth.",
              "You feel confused about ads, content, landing pages, and follow-up.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-[var(--brand)]" />
                <p className="text-lg leading-8 text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-[var(--border)] pt-7 text-xl leading-9 text-[var(--foreground)] md:text-[1.45rem]">
            In this free consultation call, I will understand your business,
            identify what is not working, and give you a clear digital marketing
            plan you can start implementing immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

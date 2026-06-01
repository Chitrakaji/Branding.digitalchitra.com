const process = [
  "Step 1: Fill up the form",
  "Step 2: Receive an email with the next-step link",
  "Step 3: Follow the instructions in that email",
  "Step 4: Join the 1:1 consultation call",
  "Step 5: Get your customized digital marketing plan for FREE",
];

export default function Benefits() {
  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            How the free consultation works
          </p>
          <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-6xl">
            A simple process that gives you more clarity
          </h2>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] md:p-9">
          <p className="max-w-4xl text-xl leading-9 text-[var(--muted)] md:text-[1.55rem] md:leading-10">
            This consultation is designed to be simple, practical, and useful.
            You do not need complicated reports or marketing knowledge before
            starting. Just bring your business details, your challenge, and your
            growth goal.
          </p>

          <div className="mt-7 space-y-4">
            {process.map((step) => (
              <div key={step} className="flex items-start gap-4">
                <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-[var(--brand)]" />
                <p className="text-lg leading-8 text-[var(--foreground)]">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-[var(--border)] pt-7 text-xl leading-9 text-[var(--foreground)] md:text-[1.45rem]">
            By the end of the call, you will know what to focus on first and how
            to move forward with more confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

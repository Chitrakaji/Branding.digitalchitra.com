"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is completely free. The goal is to understand your business, find what is not working, and give you a customized direction you can use.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, more customers, and more sales but feel confused about what digital marketing strategy to use.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get clarity on what is blocking growth, what to improve first, and a customized digital marketing plan for your business.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The consultation is designed as a 1-hour call so we can properly understand your business and give you meaningful direction.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you only have a Facebook page or social media presence, you can still book the consultation.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After you submit the form, you will be redirected to the thank you page and then receive the next steps by email.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. That is the main goal of the consultation. You will receive a customized plan based on your business goals, challenges, and opportunities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
            FAQ
          </p>
          <h2 className="mt-4 text-5xl leading-[0.98] font-semibold tracking-tight md:text-6xl">
            Before you book, here are some quick answers
          </h2>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] md:p-5">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-white/85"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  >
                    <span className="text-lg font-semibold leading-8 text-[var(--foreground)] md:text-xl">
                      {faq.question}
                    </span>
                    <span className="text-2xl leading-none text-[var(--brand)]">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-[var(--border)] px-5 py-5 md:px-6">
                      <p className="text-lg leading-8 text-[var(--muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero
        headline="Your Digital Growth Healer"
        subheadline="Get a customized digital marketing strategy designed plan to bring more leads, customers, and consistent business growth."
        description="Book your FREE 1:1 consultation and receive a customized growth plan tailored to your business goals, challenges, and opportunities."
        ctaText="Book your FREE call now"
      />
      <Problem />
      <Benefits />
      <FAQSection />
      <CTAForm ctaText="Submit & Book My Free Call" />
    </main>
  );
}

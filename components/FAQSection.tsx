export default function FAQSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">
              Is this consultation really free?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes. The 1:1 consultation is free. You will get a clear digital marketing plan for your business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Who is this call for?
            </h3>
            <p className="text-gray-600 mt-2">
              This call is for business owners who want more leads, customers, and sales through digital marketing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              What will I get from the call?
            </h3>
            <p className="text-gray-600 mt-2">
              You will get practical guidance for your website, Meta ads, SEO, content, email marketing, or lead generation system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
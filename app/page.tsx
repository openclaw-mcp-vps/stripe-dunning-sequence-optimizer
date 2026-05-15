export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For SaaS companies with $10K+ MRR
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover Failed Payments<br />
          <span className="text-[#58a6ff]">Before They Churn</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account, analyze failure patterns, and let ML-optimized retry sequences and personalized dunning emails do the recovery work for you.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recovering Revenue — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No setup fees.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">+34%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. recovery rate lift</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">72h</div>
            <div className="text-xs text-[#8b949e] mt-1">Median time to recover</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">8+</div>
            <div className="text-xs text-[#8b949e] mt-1">Failure reasons handled</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">/month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Stripe webhook integration',
              'ML-optimized retry timing',
              'Dunning emails by failure reason',
              'A/B testing for sequences',
              'Real-time recovery dashboard',
              'Unlimited failed payment events',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You register a Stripe webhook endpoint in your dashboard. We listen for payment_intent.payment_failed and invoice.payment_failed events and start analyzing immediately.',
            },
            {
              q: 'What failure reasons are supported?',
              a: 'We handle insufficient_funds, card_declined, expired_card, do_not_honor, and 4 more Stripe decline codes — each with a tailored retry schedule and email copy.',
            },
            {
              q: 'Can I customize the dunning emails?',
              a: 'Yes. Every template is editable in the dashboard. You can adjust subject lines, body copy, and send timing per failure reason and retry attempt.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Dunning Optimizer. All rights reserved.
      </footer>
    </main>
  )
}

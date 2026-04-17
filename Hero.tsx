import { useEffect, useState } from 'react';

/* ── Rotating industries — adds life without being a gimmick ────────── */
const INDUSTRIES = [
  'auto body shops',
  'dental practices',
  'vet clinics',
  'law firms',
  'roofers',
  'real estate agencies',
];

/* ── Live capture ticker: tasteful, editorial, not a terminal ───────── */
const ACTIVITY = [
  { time: '11:47 PM', event: 'After-hours call captured', place: 'Portland, OR' },
  { time: '02:13 AM', event: 'Emergency routed to on-call', place: 'Salem, OR' },
  { time: '06:02 AM', event: 'Quote request qualified', place: 'Eugene, OR' },
  { time: '07:28 AM', event: 'Appointment booked', place: 'Vancouver, WA' },
  { time: '09:14 AM', event: 'Morning summary sent', place: 'Corvallis, OR' },
];

export default function Hero() {
  const [industryIdx, setIndustryIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndustryIdx((i) => (i + 1) % INDUSTRIES.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const scrollToAudit = () => document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToStack = () => document.querySelector('#stack')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep pt-24 pb-16">
      {/* Warm atmospheric wash — single subtle amber bloom top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 15% 0%, rgba(245,166,35,0.09) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(245,166,35,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Very subtle grain for warmth */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* LEFT — the editorial statement */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">Vancouver, WA · est. 2025</span>
            </div>

            {/* The headline — mixed sans numerals, serif italic accent */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.94] tracking-tightest-2 text-text-primary mb-7" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              AI sales infrastructure
              <br />
              for{' '}
              <span className="relative inline-block">
                <span
                  className="accent-italic inline-block transition-all duration-500 ease-out"
                  key={industryIdx}
                  style={{
                    animation: 'fadeInUp 0.45s ease forwards',
                  }}
                >
                  {INDUSTRIES[industryIdx]}
                </span>
              </span>
              <br />
              along the I-5 corridor.
            </h1>

            {/* Subhead */}
            <p className="text-[17px] md:text-[18px] text-text-muted leading-[1.55] max-w-xl mb-10 font-light">
              Voice agents that answer every call. Websites that close. Search
              systems that win ChatGPT, Gemini, and Perplexity answers.
              One PNW agency. Zero missed leads.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button onClick={scrollToAudit} className="btn-primary cursor-pointer">
                Claim your free audit
                <i className="ri-arrow-right-up-line" />
              </button>
              <button onClick={scrollToStack} className="btn-secondary cursor-pointer">
                See the stack
              </button>
            </div>

            {/* Trust row — editorial, tabular */}
            <div className="hairline mb-7" />
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="num-display text-3xl text-text-primary" style={{ fontVariationSettings: "'wght' 400" }}>48<span className="text-amber-accent">h</span></div>
                <div className="text-[11px] text-text-dim uppercase tracking-[0.14em] mt-2 font-medium">Avg. onboarding</div>
              </div>
              <div>
                <div className="num-display text-3xl text-text-primary" style={{ fontVariationSettings: "'wght' 400" }}>24<span className="text-amber-accent">/</span>7</div>
                <div className="text-[11px] text-text-dim uppercase tracking-[0.14em] mt-2 font-medium">Voice coverage</div>
              </div>
              <div>
                <div className="num-display text-3xl text-text-primary" style={{ fontVariationSettings: "'wght' 400" }}>3.2<span className="text-amber-accent">×</span></div>
                <div className="text-[11px] text-text-dim uppercase tracking-[0.14em] mt-2 font-medium">Lead volume lift</div>
              </div>
            </div>
          </div>

          {/* RIGHT — activity panel, editorial not cyberpunk */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Backing amber wash */}
              <div
                className="absolute -inset-8 rounded-[2rem] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.08) 0%, transparent 70%)',
                }}
              />

              <div className="relative card-surface-warm rounded-2xl p-7 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/[0.06]">
                  <div>
                    <div className="text-[11px] font-mono text-text-dim uppercase tracking-[0.18em] mb-1">Live activity</div>
                    <div className="font-display text-lg text-text-primary" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
                      Last <em className="accent-italic">24 hours</em>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-accent/10 border border-amber-accent/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-amber-accent tracking-wider uppercase">Live</span>
                  </div>
                </div>

                {/* Activity list */}
                <div className="space-y-4">
                  {ACTIVITY.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="pt-0.5">
                        <div className="w-[6px] h-[6px] rounded-full bg-amber-accent/60 group-hover:bg-amber-accent transition-colors mt-1.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3 mb-0.5">
                          <span className="font-mono text-[11px] text-text-dim tracking-wider">{item.time}</span>
                          <span className="text-[11px] text-text-quiet">{item.place}</span>
                        </div>
                        <div className="text-[14.5px] text-text-primary leading-snug">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer stat */}
                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-baseline justify-between">
                  <div className="text-[12px] text-text-dim">Calls handled this week</div>
                  <div className="num-display text-2xl text-text-primary">
                    1,248
                  </div>
                </div>
              </div>

              {/* Small caption below panel */}
              <div className="mt-5 flex items-center gap-2 text-[12px] text-text-dim justify-end">
                <i className="ri-information-line" />
                <span>Illustrative. Your results depend on call volume & industry.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline — transitions to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="hairline opacity-50" />
        </div>
      </div>
    </section>
  );
}

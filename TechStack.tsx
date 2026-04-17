const integrations = [
  {
    icon: 'ri-mic-2-line',
    category: 'Voice',
    headline: 'Human-grade call infrastructure',
    desc: 'The voice layer processes calls with sub-200ms latency, natural turn-taking, and 98.7% intent classification accuracy. Every inbound call is handled, logged, and converted.',
    stat: '98.7%',
    statLabel: 'Intent accuracy',
  },
  {
    icon: 'ri-secure-payment-line',
    category: 'Payments',
    headline: '1-tap mobile payments, on the call',
    desc: 'PCI Level 1 certified payment processing integrated directly into the voice layer. Callers can complete transactions in real-time — no friction, no drop-off.',
    stat: 'PCI L1',
    statLabel: 'Certified',
  },
  {
    icon: 'ri-global-line',
    category: 'Web',
    headline: 'Edge-deployed storefronts',
    desc: 'Sites deploy to edge networks with sub-1s global load times, 99.9% uptime SLAs, and Core Web Vitals scores tuned for 2026 ranking algorithms.',
    stat: '<1s',
    statLabel: 'Global load time',
  },
];

const futureProof = [
  { icon: 'ri-shield-flash-line', label: 'Algorithm-agnostic', desc: 'GEO/AEO strategy adapts across any search engine — traditional or generative.' },
  { icon: 'ri-refresh-line', label: 'Continuously upgraded', desc: 'Every tool in the stack receives regular updates as AI capabilities evolve.' },
  { icon: 'ri-stack-line', label: 'Redundant by design', desc: 'Zero single points of failure — every system has monitored fallbacks.' },
  { icon: 'ri-focus-3-line', label: 'Built around your goals', desc: 'Your outcomes drive every decision. Not off-the-shelf defaults.' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      {/* Subtle warm wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 100%, rgba(245,166,35,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Editorial header — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-2">
            <span className="eyebrow">§ The Stack</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] tracking-tightest-2 text-text-primary mb-6" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              Enterprise-grade infrastructure.<br />
              <em className="accent-italic">SME-friendly</em> price tag.
            </h2>
            <p className="text-[17px] text-text-muted leading-[1.55] max-w-2xl font-light">
              Every Dialfyne client runs on the same battle-tested stack that powers enterprise sales organizations —
              at a fraction of the cost.
            </p>
          </div>
        </div>

        {/* Three editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {integrations.map((item) => (
            <div key={item.category} className="card-surface rounded-2xl p-7 flex flex-col gap-6 min-h-[340px]">
              {/* Top row: category + stat */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08]">
                    <i className={`${item.icon} text-amber-accent text-lg leading-none`} />
                  </div>
                  <span className="font-mono text-[10.5px] text-text-dim uppercase tracking-[0.18em]">
                    {item.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="num-display text-2xl text-amber-accent leading-none">{item.stat}</div>
                  <div className="text-[11px] text-text-dim mt-1.5">{item.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-xl text-text-primary mb-3 leading-snug" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>{item.headline}</h3>
                <p className="text-[14.5px] text-text-muted leading-[1.55]">{item.desc}</p>
              </div>

              {/* System status */}
              <div className="flex items-center gap-2 pt-5 border-t border-white/[0.06]">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-accent animate-pulse" />
                <span className="text-[11.5px] text-text-dim uppercase tracking-wider font-medium">System active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future-proof band */}
        <div className="card-surface-warm rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-accent/10 border border-amber-accent/25">
              <i className="ri-infinity-line text-amber-accent text-lg" />
            </div>
            <div>
              <div className="font-display text-xl text-text-primary leading-tight" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
                Future-proofed by <em className="accent-italic">design</em>
              </div>
              <div className="text-[13px] text-text-muted mt-0.5">Your Dialfyne stack evolves with the technology, not against it.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureProof.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08]">
                  <i className={`${item.icon} text-amber-accent text-base leading-none`} />
                </div>
                <div>
                  <div className="text-[14.5px] font-semibold text-text-primary mb-1.5">{item.label}</div>
                  <div className="text-[13px] text-text-muted leading-[1.55]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

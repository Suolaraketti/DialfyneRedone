import { Link } from 'react-router-dom';

const services = [
  {
    number: '01',
    icon: 'ri-layout-5-line',
    label: 'Autonomous Web Design',
    tagline: 'Mobile-first storefronts built to close sales, not just look pretty.',
    accent: 'Conversion-first',
    slug: 'web-design',
  },
  {
    number: '02',
    icon: 'ri-mic-ai-line',
    label: 'AI Voice Concierge',
    tagline: 'Human-grade voice agents that answer calls, book appointments, and take payments.',
    accent: '24/7 zero latency',
    slug: 'ai-voice',
  },
  {
    number: '03',
    icon: 'ri-brain-line',
    label: 'GEO / AEO Dominance',
    tagline: 'Be the #1 recommendation inside ChatGPT, Gemini, and Perplexity answers.',
    accent: 'AI-search ready',
    slug: 'geo-aeo',
  },
  {
    number: '04',
    icon: 'ri-map-pin-2-line',
    label: 'Hyper-Local PNW SEO',
    tagline: 'Dominate the I-5 corridor with search strategies built for 2026 algorithms.',
    accent: 'Market authority',
    slug: 'local-seo',
  },
  {
    number: '05',
    icon: 'ri-cpu-line',
    label: 'Custom AI Agents & Automation',
    tagline: 'Purpose-built agents designed around your specific workflows, not off-the-shelf defaults.',
    accent: 'Done-for-you',
    slug: 'ai-mentorship',
  },
  {
    number: '06',
    icon: 'ri-flashlight-line',
    label: 'Dialfyne Intent Recovery',
    tagline: 'Our proprietary logic captures revenue from missed calls and after-hours traffic.',
    accent: 'Lead safety net',
    slug: 'sales-recovery',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 100% 30%, rgba(245,166,35,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Editorial header — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="lg:col-span-2">
            <span className="eyebrow">§ Services</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] tracking-tightest-2 text-text-primary mb-6" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              One PNW agency.<br />
              Six revenue <em className="accent-italic">engines.</em>
            </h2>
            <p className="text-[17px] text-text-muted leading-[1.55] max-w-2xl font-light">
              Each service works as a standalone growth system for Portland, Vancouver WA, Salem, and Eugene businesses.
              Together, they form the most comprehensive AI-powered sales infrastructure available to SMEs on the West Coast.
            </p>
          </div>
        </div>

        {/* Service grid — editorial numbered */}
        <div id="services-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative bg-navy-deep p-7 md:p-8 card-hover flex flex-col gap-5 cursor-pointer no-underline min-h-[280px]"
              style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(245,166,35,0.07) 0%, transparent 60%)' }}
              />

              {/* Number marker + icon */}
              <div className="relative flex items-start justify-between">
                <span className="num-marker text-[40px] leading-none">{s.number}</span>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] group-hover:border-amber-accent/35 group-hover:bg-amber-accent/5 transition-all duration-300">
                  <i className={`${s.icon} text-amber-accent text-lg leading-none`} />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1">
                <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3 leading-tight group-hover:text-amber-accent transition-colors duration-300" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
                  {s.label}
                </h3>
                <p className="text-[14.5px] text-text-muted leading-[1.55]">{s.tagline}</p>
              </div>

              {/* Footer */}
              <div className="relative flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <span className="font-mono text-[10px] text-text-dim uppercase tracking-[0.14em]">
                  {s.accent}
                </span>
                <span className="text-[13px] text-text-dim group-hover:text-amber-accent transition-colors flex items-center gap-1.5 font-medium">
                  Details
                  <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom moment — not a cringe "not sure where to start" CTA, but an invitation */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10 card-surface-warm rounded-2xl">
          <div className="max-w-xl">
            <div className="font-display text-2xl md:text-3xl text-text-primary leading-tight mb-2" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
              Not sure which <em className="accent-italic">engine</em> fits?
            </div>
            <p className="text-[15px] text-text-muted leading-relaxed">
              Send us your situation. We'll run a free AI opportunity audit and tell you honestly — even if Dialfyne isn't the right fit.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary cursor-pointer flex-shrink-0"
          >
            Get a free audit
            <i className="ri-arrow-right-up-line" />
          </button>
        </div>
      </div>
    </section>
  );
}

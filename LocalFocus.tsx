const cities = [
  { name: 'Vancouver, WA', label: 'HQ', primary: true },
  { name: 'Portland, OR', label: 'Metro', primary: false },
  { name: 'Salem, OR', label: 'Capital', primary: false },
  { name: 'Woodburn, OR', label: 'Valley', primary: false },
  { name: 'Corvallis, OR', label: 'College', primary: false },
  { name: 'Eugene, OR', label: 'South', primary: false },
];

const results = [
  { value: '4.8', suffix: '×',   label: 'Call capture rate lift' },
  { value: '#1',  suffix: '',    label: 'AI search position for local queries' },
  { value: '320', suffix: '%',   label: 'Average conversion lift' },
  { value: '<48', suffix: 'h',   label: 'Time to first voice agent live' },
];

const testimonials = [
  {
    quote: 'Within 60 days, Dialfyne was handling 80% of our inbound calls autonomously — booking appointments without us lifting a finger.',
    name: 'Marcus R.',
    role: 'Owner',
    company: 'Portland HVAC Co.',
    initials: 'MR',
  },
  {
    quote: 'We went from invisible on ChatGPT to the first business it recommends when someone asks about flooring in the Willamette Valley. Game-changer.',
    name: 'Sarah T.',
    role: 'Owner',
    company: 'Salem Floor Gallery',
    initials: 'ST',
  },
];

export default function LocalFocus() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Grain + very subtle grid */}
      <div className="absolute inset-0 pnw-grid-bg opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,166,35,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Editorial header — centered for contrast with other sections */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="eyebrow eyebrow-center mb-8">§ Regional Intelligence</span>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] tracking-tightest-2 text-text-primary mb-6 mt-3" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
            We know the PNW market<br />
            <em className="accent-italic">like nobody else.</em>
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.55] font-light">
            Headquartered in Vancouver, WA. Purpose-built to serve the unique SME landscape of the Pacific Northwest —
            from Clark County to Lane County.
          </p>
        </div>

        {/* Cities as editorial tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-colors ${
                city.primary
                  ? 'border-amber-accent/45 bg-amber-accent/8 text-text-primary'
                  : 'border-white/[0.1] bg-white/[0.02] text-text-muted'
              }`}
            >
              {city.primary && <div className="w-1.5 h-1.5 rounded-full bg-amber-accent" />}
              <span className="text-[13.5px] font-medium">{city.name}</span>
              <span className={`text-[11px] font-mono uppercase tracking-wider ${city.primary ? 'text-amber-accent' : 'text-text-dim'}`}>
                {city.label}
              </span>
            </div>
          ))}
        </div>

        {/* Results — editorial stat row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-20">
          {results.map((r) => (
            <div key={r.label} className="bg-navy-deep p-7 md:p-8 text-center md:text-left">
              <div className="num-display text-4xl md:text-5xl text-text-primary leading-none mb-3" style={{ fontVariationSettings: "'wght' 400" }}>
                {r.value}
                {r.suffix && <span className="text-amber-accent">{r.suffix}</span>}
              </div>
              <div className="text-[12.5px] text-text-dim uppercase tracking-[0.14em] font-medium leading-snug">{r.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials — editorial pull-quote style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-surface rounded-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
              {/* Subtle amber corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top left, rgba(245,166,35,0.08) 0%, transparent 70%)',
                }}
              />

              {/* Serif opening quote */}
              <div
                className="relative font-display text-[70px] leading-none text-amber-accent/50 -mb-4"
                style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 144, 'wght' 400", fontStyle: 'italic' }}
                aria-hidden="true"
              >
                “
              </div>

              <blockquote className="relative">
                <p className="font-display text-[22px] md:text-[24px] text-text-primary leading-[1.3]" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 400" }}>
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="relative flex items-center gap-3 pt-5 border-t border-white/[0.06] mt-auto">
                <div className="w-10 h-10 rounded-full bg-amber-accent/15 border border-amber-accent/35 flex items-center justify-center flex-shrink-0">
                  <span className="text-[12px] font-bold text-amber-accent tracking-wider">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-text-primary">{t.name}</div>
                  <div className="text-[12.5px] text-text-muted">
                    {t.role} · <span className="text-text-dim">{t.company}</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Workshops CTA — refined */}
        <div id="workshops" className="relative card-surface-warm rounded-2xl p-10 md:p-14 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              background: 'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(245,166,35,0.09) 0%, transparent 60%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="eyebrow eyebrow-center mb-6">§ AI Workshops</span>
            <h3 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] text-text-primary leading-[1.05] tracking-tightest-2 mb-4 mt-3" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              Book a private<br className="sm:hidden" /> AI <em className="accent-italic">strategy workshop.</em>
            </h3>
            <p className="text-[16px] text-text-muted max-w-xl mx-auto mb-8 leading-[1.55] font-light">
              A half-day or full-day intensive with your team. We audit your current workflows, identify 10× AI opportunities,
              and leave you with a ready-to-execute roadmap.
            </p>
            <button
              onClick={() => document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary cursor-pointer"
            >
              Inquire about workshops
              <i className="ri-arrow-right-line" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

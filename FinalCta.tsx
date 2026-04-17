import { useContactModal } from '../../../components/feature/ContactModalProvider';
import FadeIn from '../../../components/base/FadeIn';

export default function FinalCta() {
  const { openContact } = useContactModal();

  return (
    <section id="final-cta" className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
      {/* Central amber bloom — isolated compositor layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(245,166,35,0.1) 0%, transparent 65%)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      {/* Very subtle grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* ── What happens after you submit ── */}
        <FadeIn direction="up">
          <div className="mb-20 rounded-2xl overflow-hidden card-surface-warm">
            {/* Header */}
            <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 flex items-start justify-between gap-6 flex-wrap">
              <div>
                <span className="eyebrow mb-3">§ After you submit</span>
                <h3 className="font-display text-2xl md:text-[2rem] text-text-primary leading-tight mt-4 tracking-tightest-2" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
                  Here's exactly what <em className="accent-italic">happens next</em> — zero guesswork.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.06]">
              {[
                {
                  step: '01',
                  icon: 'ri-mail-check-line',
                  title: 'Confirmation in 60 seconds',
                  body: "You'll get an immediate email confirming we received your info. No silence, no waiting to wonder if it went through.",
                  time: 'Instant',
                },
                {
                  step: '02',
                  icon: 'ri-phone-line',
                  title: 'Personal call within 1 business day',
                  body: 'Dennis personally reviews your business before calling. We come prepared with your after-hours lead loss estimate — not a generic pitch.',
                  time: 'Within 24 hrs',
                },
                {
                  step: '03',
                  icon: 'ri-rocket-2-line',
                  title: "Live in 48 hours if it's a fit",
                  body: 'If Dialfyne is right for your business, most clients are fully set up and capturing overnight leads within two business days.',
                  time: 'Within 48 hrs',
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className={`px-8 md:px-10 py-8 md:py-10 flex flex-col gap-4 ${
                    idx > 0 ? 'md:border-l border-t md:border-t-0 border-white/[0.06]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 mb-1">
                    <span className="num-marker text-[40px] leading-none">{item.step}</span>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] flex-shrink-0">
                      <i className={`${item.icon} text-amber-accent text-base`} />
                    </div>
                    <span className="ml-auto text-[10.5px] font-mono text-amber-accent bg-amber-accent/8 border border-amber-accent/25 px-2.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="font-display text-[17px] text-text-primary leading-snug" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-text-muted leading-[1.55]">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="px-8 md:px-10 py-5 border-t border-white/[0.06] flex items-center gap-3">
              <i className="ri-shield-check-line text-amber-accent text-sm flex-shrink-0" />
              <p className="text-text-dim text-[12.5px] leading-relaxed">
                No spam. No pushy sales tactics. If it's not a great fit, we'll tell you honestly —
                we only onboard businesses where Dialfyne will make a clear financial impact.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Final statement ── */}
        <FadeIn direction="up" delay={100}>
          <div className="max-w-3xl mx-auto text-center pt-4">
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-amber-accent/35 bg-amber-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-accent animate-pulse" />
              <span className="text-amber-accent text-[11px] font-mono tracking-[0.18em] uppercase">
                Limited onboarding spots
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] text-text-primary leading-[0.98] tracking-tightest-2 mb-8" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              Stop losing jobs<br />
              <em className="accent-italic">after 5pm.</em>
            </h2>

            <p className="text-[17px] md:text-[18px] text-text-muted leading-[1.55] mb-10 font-light">
              Whether you're in trades, dental, legal, or wellness — we'll show you exactly how many
              leads you're missing and how much revenue you're already paying for that never converts.{' '}
              <span className="text-text-primary font-medium">Most clients recover $2,000–$6,000/mo in their first 30 days.</span>
            </p>

            {/* Trust points — editorial list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-12 text-left max-w-2xl mx-auto">
              {[
                { icon: 'ri-time-line',          text: '30-minute intro call — no long demos' },
                { icon: 'ri-bar-chart-line',     text: 'Live after-hours lead loss estimate on the call' },
                { icon: 'ri-shield-check-line',  text: 'Works for any industry with paid ads + inbound calls' },
                { icon: 'ri-calendar-check-line',text: 'Most clients live within 48 hours of signing on' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 flex items-center justify-center rounded-md bg-amber-accent/8 border border-amber-accent/20 flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-amber-accent text-[13px]`} />
                  </div>
                  <span className="text-[14.5px] text-text-muted leading-[1.5] pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://calendly.com/dennis-kaczmarowski-dialfyne/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cursor-pointer"
              >
                <i className="ri-calendar-check-line" />
                Book a meeting
              </a>
              <button
                onClick={openContact}
                className="btn-secondary cursor-pointer"
              >
                <i className="ri-mail-send-line" />
                Send us your info
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

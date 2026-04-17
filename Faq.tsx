import { useState, useCallback, memo } from 'react';
import FadeIn from '../../../components/base/FadeIn';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What happens when a business misses a call after hours?',
    answer:
      'Less than 3% of people leave a voicemail. The other 97% call the next result on Google. Dialfyne answers every missed call automatically, qualifies the lead, and books the appointment.',
  },
  {
    question: 'How does Dialfyne capture after-hours leads?',
    answer:
      "When a customer calls after hours, Dialfyne's AI system answers using your business name, captures the caller's name, phone number, and issue description in under 90 seconds, and immediately sends a confirmation text to the lead.",
  },
  {
    question: 'What happens when an emergency call comes in overnight?',
    answer:
      "Dialfyne's smart routing detects emergency situations and forwards the call to your on-call staff instantly. Non-urgent calls are queued with full context and included in your morning lead summary.",
  },
  {
    question: 'How much ad spend does Dialfyne recover?',
    answer:
      "For a typical business spending $3,200/mo on Google Ads, approximately 55\u201365% of calls come after hours depending on industry. Without a call capture system, that's $1,760\u2013$2,080/mo in ad spend generating leads that never get a response. Dialfyne captures those leads and converts them into booked jobs.",
  },
  {
    question: 'What types of businesses does Dialfyne work for?',
    answer:
      'Dialfyne works for any business that runs paid ads and takes inbound calls \u2014 including plumbing, HVAC, electrical, dental, med spa, legal, and more.',
  },
  {
    question: 'How quickly can Dialfyne be set up?',
    answer: 'Most clients are fully set up and capturing after-hours leads within 48 hours.',
  },
  {
    question: 'How much does Dialfyne cost?',
    answer:
      'Dialfyne is offered at a flat monthly fee. For most businesses running paid ads, the system pays for itself with the first one or two recovered leads. Contact us for current pricing.',
  },
];

interface AccordionItemProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (idx: number) => void;
}

const AccordionItem = memo(function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const handleClick = useCallback(() => {
    onToggle(index);
  }, [onToggle, index]);

  const num = String(index + 1).padStart(2, '0');

  return (
    <FadeIn direction="up" delay={index * 40}>
      <div
        className={`border-t last:border-b transition-colors duration-200 ${
          isOpen
            ? 'border-amber-accent/40'
            : 'border-white/[0.08] hover:border-white/[0.15]'
        }`}
      >
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          className="w-full text-left py-6 md:py-7 flex items-start justify-between gap-6 cursor-pointer focus-visible:outline-none group"
        >
          <div className="flex items-start gap-5 flex-1">
            <span className="num-marker text-[22px] leading-[1.25] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
              {num}
            </span>
            <span className="font-display text-[19px] md:text-[22px] leading-[1.3] text-text-primary tracking-tight pt-0.5" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
              {item.question}
            </span>
          </div>
          <span
            className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 mt-0.5 ${
              isOpen
                ? 'bg-amber-accent text-navy-deep rotate-45'
                : 'bg-white/[0.04] text-amber-accent border border-white/[0.08] group-hover:border-amber-accent/40'
            }`}
          >
            <i className="ri-add-line text-base" />
          </span>
        </button>

        {/* grid-rows trick for smooth height transition */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="pl-[42px] pr-14 pb-7 pt-0">
              <p className="text-[15.5px] text-text-muted leading-[1.65] font-light max-w-3xl">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
});

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Amber wash bottom */}
      <div
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{
          transform: 'translateX(-50%) translateZ(0)',
          willChange: 'transform',
          width: '900px',
          height: '420px',
          background:
            'radial-gradient(ellipse 80% 80% at 50% 100%, rgba(245,166,35,0.07) 0%, rgba(245,166,35,0.02) 50%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0}>
              <span className="eyebrow">§ FAQ</span>
            </FadeIn>
          </div>
          <div className="lg:col-span-8">
            <FadeIn direction="up" delay={60}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.98] tracking-tightest-2 text-text-primary mb-6" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
                Everything you need to know about<br />
                <em className="accent-italic">Dialfyne's AI answering service.</em>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={110}>
              <p className="text-[17px] text-text-muted leading-[1.55] font-light">
                Common questions from trades, dental practices, law firms, and home service businesses
                before getting started.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Two-column: accordion + sticky aside */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Accordion */}
          <div className="lg:col-span-2">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.question}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={handleToggle}
              />
            ))}
          </div>

          {/* Sticky sidebar */}
          <FadeIn direction="up" delay={200}>
            <div className="lg:sticky lg:top-28">
              <div className="card-surface-warm rounded-2xl p-8">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-amber-accent mb-5">
                  <i className="ri-question-answer-line text-navy-deep text-lg" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-text-primary mb-3 leading-snug tracking-tight" style={{ fontVariationSettings: "'SOFT' 40, 'wght' 500" }}>
                  Still have <em className="accent-italic">questions?</em>
                </h3>
                <p className="text-[14px] text-text-muted leading-[1.55] mb-6">
                  Book a 30-minute call and see Dialfyne live with your actual call data — no slides,
                  no pitch deck.
                </p>

                <a
                  href="https://calendly.com/dennis-kaczmarowski-dialfyne/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center whitespace-nowrap cursor-pointer flex items-center justify-center mb-6"
                >
                  <i className="ri-calendar-check-line" aria-hidden="true" />
                  Book a free demo
                </a>

                <div className="pt-5 border-t border-white/[0.06] flex flex-col gap-3">
                  {[
                    { icon: 'ri-time-line', text: 'Live in 48 hours' },
                    { icon: 'ri-shield-check-line', text: 'Flat monthly fee' },
                    { icon: 'ri-loop-right-line', text: 'Captures leads 24/7' },
                  ].map((trust) => (
                    <div key={trust.text} className="flex items-center gap-2.5">
                      <i
                        className={`${trust.icon} text-amber-accent text-[13px]`}
                        aria-hidden="true"
                      />
                      <span className="text-[13.5px] text-text-muted">{trust.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

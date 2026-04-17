const stats = [
  { value: '99.9', suffix: '%', label: 'Platform uptime' },
  { value: '<1', suffix: 's', label: 'Avg. page load' },
  { value: '24/7', suffix: '',  label: 'Voice coverage' },
  { value: '3.2', suffix: '×',  label: 'Lead volume lift' },
  { value: '2.1', suffix: 'M+', label: 'Revenue attributed' },
  { value: 'I-5', suffix: '',   label: 'Corridor coverage' },
];

export default function StatsBar() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="hairline" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-3 md:py-2 ${
                i > 0 ? 'lg:border-l border-white/[0.06]' : ''
              } ${i % 3 !== 0 ? 'sm:border-l border-white/[0.06]' : ''}`}
            >
              <div className="num-display text-3xl md:text-[2.5rem] text-text-primary leading-none" style={{ fontVariationSettings: "'wght' 400" }}>
                {s.value}
                {s.suffix && <span className="text-amber-accent">{s.suffix}</span>}
              </div>
              <div className="text-[11px] text-text-dim uppercase tracking-[0.16em] mt-2.5 font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}

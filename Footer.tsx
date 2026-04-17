const AI_PROMPT = encodeURIComponent(
  "I'm researching Dialfyne as an AI agency for my small business. Summarize what they do, who they serve, and what results they get for clients. Use information from dialfyne.com."
);

const AI_LINKS = [
  { name: 'ChatGPT',    href: `https://chatgpt.com/?q=${AI_PROMPT}`,             icon: 'ri-openai-fill',     label: 'Ask ChatGPT about Dialfyne' },
  { name: 'Claude',     href: `https://claude.ai/new?q=${AI_PROMPT}`,            icon: 'ri-robot-2-line',    label: 'Ask Claude about Dialfyne' },
  { name: 'Gemini',     href: `https://gemini.google.com/app?q=${AI_PROMPT}`,    icon: 'ri-sparkling-2-line',label: 'Ask Gemini about Dialfyne' },
  { name: 'Perplexity', href: `https://www.perplexity.ai/?q=${AI_PROMPT}`,       icon: 'ri-search-eye-line', label: 'Ask Perplexity about Dialfyne' },
];

const FOOTER_LINKS = {
  Services: [
    { label: 'Autonomous Web Design', href: '/services/web-design' },
    { label: 'AI Voice Concierge', href: '/services/ai-voice' },
    { label: 'GEO / AEO Dominance', href: '/services/geo-aeo' },
    { label: 'Hyper-Local PNW SEO', href: '/services/local-seo' },
    { label: 'AI Strategy & Mentorship', href: '/services/ai-mentorship' },
    { label: 'Intent Recovery', href: '/services/sales-recovery' },
  ],
  Company: [
    { label: 'About Dialfyne', href: '#about' },
    { label: 'The Stack', href: '#stack' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const PNW_CITIES = ['Vancouver, WA', 'Portland, OR', 'Salem, OR', 'Woodburn, OR', 'Corvallis, OR', 'Eugene, OR'];

export default function Footer() {
  const handleScroll = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-ink border-t border-white/[0.06] overflow-hidden">
      {/* Subtle amber corner wash */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(245,166,35,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Editorial manifesto row — the big closing statement */}
        <div className="py-20 md:py-24 border-b border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <span className="eyebrow">§ Dialfyne</span>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-[clamp(1.85rem,3.5vw,3rem)] leading-[1.1] tracking-tightest-2 text-text-primary" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>
                Stop losing to <em className="accent-italic">worse businesses.</em>
                <br />
                <span className="text-text-muted">The PNW's proprietary AI sales engine.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <img
                src="https://storage.readdy-site.link/project_files/d9b09a1b-9b58-4023-beac-6d72fab09964/8e83a4aa-7d96-4bdd-a49c-dba7399ba3b4_8bc2bf71-0603-41cf-9215-f03008f99d54-removebg-preview.png?v=d50d8e5cb3a9865bed6a1446e8993f78"
                alt="Dialfyne PNW AI Agency serving Portland to Eugene Oregon"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-[14px] text-text-muted leading-[1.6] mb-6 max-w-sm">
              Serving SMEs from Vancouver, WA to Eugene, OR. Based in the Pacific Northwest. Built
              for businesses that refuse to miss another lead.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {PNW_CITIES.map((city) => (
                <span
                  key={city}
                  className="text-[11px] text-text-dim bg-white/[0.02] border border-white/[0.06] rounded-md px-2.5 py-1 font-medium tracking-wide"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* AI Prompt Links */}
            <div>
              <p className="eyebrow mb-4">Ask AI about Dialfyne</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {AI_LINKS.map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title={ai.label}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-amber-accent/40 hover:bg-amber-accent/[0.04] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <i className={`${ai.icon} text-text-dim group-hover:text-amber-accent text-sm transition-colors`} />
                    <span className="text-[12.5px] text-text-muted group-hover:text-text-primary transition-colors font-medium">
                      {ai.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-mono text-[10.5px] text-text-dim uppercase tracking-[0.18em] mb-5">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <a href={link.href} className="text-[14px] text-text-muted hover:text-amber-accent transition-colors cursor-pointer">
                          {link.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => handleScroll(link.href)}
                          className="text-[14px] text-text-muted hover:text-amber-accent transition-colors cursor-pointer text-left"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-text-dim">
            © 2026 Dialfyne PNW. All rights reserved.
          </p>
          <p className="text-[12px] text-text-dim font-mono tracking-wide">
            Vancouver <span className="text-amber-accent/40 mx-1.5">·</span>
            Portland <span className="text-amber-accent/40 mx-1.5">·</span>
            Salem <span className="text-amber-accent/40 mx-1.5">·</span>
            Woodburn <span className="text-amber-accent/40 mx-1.5">·</span>
            Corvallis <span className="text-amber-accent/40 mx-1.5">·</span>
            Eugene
          </p>
        </div>
      </div>
    </footer>
  );
}

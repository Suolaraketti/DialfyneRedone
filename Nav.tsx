import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const services = [
  { icon: 'ri-layout-5-line', label: 'Autonomous Web Design', desc: 'Mobile-first storefronts built to convert', slug: 'web-design' },
  { icon: 'ri-mic-ai-line', label: 'AI Voice Concierge', desc: '24/7 human-grade voice agents that book & pay', slug: 'ai-voice' },
  { icon: 'ri-brain-line', label: 'GEO / AEO Dominance', desc: '#1 in ChatGPT, Gemini & Perplexity answers', slug: 'geo-aeo' },
  { icon: 'ri-map-pin-2-line', label: 'Hyper-Local PNW SEO', desc: 'I-5 corridor market authority, 2026 algorithms', slug: 'local-seo' },
  { icon: 'ri-cpu-line', label: 'Custom AI Agent & Automation Build', desc: 'Purpose-built AI agents that eliminate manual workflows', slug: 'ai-mentorship' },
  { icon: 'ri-flashlight-line', label: 'Dialfyne Intent Recovery', desc: 'Capture revenue from missed calls after-hours', slug: 'sales-recovery' },
];

const navLinks = [
  { label: 'The Stack', href: '#stack' },
  { label: 'Audit', href: '#audit' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src="https://storage.readdy-site.link/project_files/d9b09a1b-9b58-4023-beac-6d72fab09964/8e83a4aa-7d96-4bdd-a49c-dba7399ba3b4_8bc2bf71-0603-41cf-9215-f03008f99d54-removebg-preview.png?v=d50d8e5cb3a9865bed6a1446e8993f78"
              alt="Dialfyne"
              className="h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium text-text-muted hover:text-text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                Services
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[560px] card-surface rounded-2xl overflow-hidden shadow-card-lift z-50">
                  <div className="p-3">
                    <div className="px-3 py-2 mb-1">
                      <span className="eyebrow text-[10px]">What we build</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-accent/[0.06] transition-colors group cursor-pointer"
                        >
                          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-navy-deep border border-amber-accent/20 flex-shrink-0 mt-0.5 group-hover:border-amber-accent/50 group-hover:bg-amber-accent/10 transition-all">
                            <i className={`${s.icon} text-amber-accent text-[15px] leading-none`} />
                          </div>
                          <div>
                            <div className="font-display font-medium text-[15px] text-text-primary leading-tight" style={{ fontVariationSettings: "'SOFT' 40, 'opsz' 144, 'wght' 500" }}>{s.label}</div>
                            <div className="text-[12px] text-text-dim mt-1 leading-snug">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-3 border-t border-white/[0.06] px-3 pb-1">
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-[13px] text-amber-accent hover:text-amber-glow transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                      >
                        View all services <i className="ri-arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-[14px] font-medium text-text-muted hover:text-text-primary transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://calendly.com/dennis-kaczmarowski-dialfyne/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-text-muted hover:text-text-primary transition-colors px-3 py-2 cursor-pointer whitespace-nowrap"
            >
              Book a call
            </a>
            <a
              href="#audit"
              onClick={(e) => { e.preventDefault(); document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-[13.5px] py-2.5 px-5 cursor-pointer"
            >
              Get the audit
              <i className="ri-arrow-right-up-line text-sm" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-text-primary text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass border-t border-white/[0.06]">
          <div className="px-5 py-5 space-y-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full px-3 py-3 text-[15px] font-medium text-text-muted hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
            >
              Services
              <i className={`ri-arrow-down-s-line transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 space-y-0.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-text-muted hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    <i className={`${s.icon} text-amber-accent text-base`} />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-3 text-[15px] font-medium text-text-muted hover:text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <a
                href="https://calendly.com/dennis-kaczmarowski-dialfyne/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-sm py-3 cursor-pointer"
              >
                Book a 30-min call
              </a>
              <a
                href="#audit"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.querySelector('#audit')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary w-full justify-center text-sm py-3 cursor-pointer"
              >
                Get the audit
                <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

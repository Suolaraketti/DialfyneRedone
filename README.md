# Dialfyne — Editorial Redesign

## What's in here

11 files, mirror paths to your project. Drop them in directly — everything's a straight replacement.

```
dialfyne-redesign/
├── tailwind.config.ts                          → project root
└── src/
    ├── index.css                               → src/
    └── pages/home/components/
        ├── Nav.tsx
        ├── Hero.tsx
        ├── StatsBar.tsx
        ├── Services.tsx
        ├── TechStack.tsx
        ├── LocalFocus.tsx
        ├── FinalCta.tsx
        ├── Faq.tsx
        └── Footer.tsx
```

No changes to: `AuditForm.tsx`, `ContactModal.tsx`, `HeroWaveform.tsx`, `page.tsx`, router, any other page. Those still work — they inherit the new design tokens automatically.

## The design direction

**Editorial serif + warm grounded palette.** Fraunces (variable serif, SOFT + optical size axes tuned) for display, Manrope for body, JetBrains Mono for eyebrows. Amber italic word is the signature move — appears as a punctuation accent in every section headline.

**Dropped:** scan lines, terminal tickers, cyan grid overlays, glow pulses, all the `glow-border` halos, radial cyan washes, gradient cyan everywhere.

**Kept:** navy base, amber accent (#F5A623 exactly), your logo URL, Calendly URL, all section IDs (`#audit`, `#stack`, `#workshops`, `#about`), all existing copy intent.

## Drop-in sanity checks

1. **Google Fonts import** at top of `index.css` — if this doesn't load (network issue, adblock), you'll fall back to system serif/sans and everything looks off. Make sure it's not blocked.

2. **Fraunces variable font axes** — I use `font-variation-settings: 'SOFT' 40, 'opsz' 144, 'wght' 500` throughout. Every modern browser supports this, but if you see the type look "flat" or generic, the variable axes didn't load. Fallback is Georgia which still reads fine.

3. **Backward compat classes** — I kept these defined so your other pages (services detail, blog, faq page, who-its-for) don't break:
   - `btn-primary`, `btn-secondary` — redefined with new visual but same API
   - `card-glass` → aliases to new `card-surface`
   - `glow-border`, `glow-border-strong`, `glow-border-amber`, `glow-border-amber-strong` — all still exist, all much subtler now
   - `text-gradient-amber`, `text-gradient-cyan` — still work
   - `pnw-grid-bg`, `nav-glass`, `cyan-dot` — still work
   - `text-cyan-accent`, `text-amber-accent`, `bg-amber-accent` — still work
   - `glow-amber` — still exists but pulled way back

4. **New classes I added** (use these going forward):
   - `eyebrow` / `eyebrow-center` — mono uppercase label with leading dash
   - `text-display` / `text-display-italic` / `accent-italic` — Fraunces variants
   - `num-display` — tabular Fraunces for stats/numbers
   - `num-marker` — small italic amber number for editorial lists
   - `card-surface` / `card-surface-warm` — replaces `card-glass`
   - `hairline` / `hairline-amber` — thin dividers
   - `amber-underline` — inline text underline
   - `grain` — subtle noise overlay (use on relatively-positioned parent)
   - `link-quiet` — muted link that brightens on hover
   - `tracking-tightest-2`, `tracking-tightest-3` — for massive display type

5. **AuditForm is untouched.** It'll inherit the new fonts/colors but keep its current internal structure. Once you see the rest of the homepage live, let me know if you want me to redo the form to match.

## Other pages

The services detail page, blog, FAQ page, and who-its-for page use the color tokens and utility classes from `tailwind.config.ts` + `index.css`. They'll automatically pick up:
- New font stack (Fraunces + Manrope)
- Warmer text colors
- Demoted cyan
- Amber emphasis

But they'll still have their current layout/structure, which may now look stylistically inconsistent with the home page's new editorial voice. When you're ready, I can rebuild those pages to match — just ship me the word.

## One caveat on the Hero

The rotating industry word uses a CSS animation keyed on React state (`key={industryIdx}`). It fades in each time the word changes. If you want the rotation to stop (e.g., always say "auto body shops"), just delete the `useEffect` block and hardcode `INDUSTRIES[0]`. I also added a "Live activity" panel on the right side of the hero with illustrative data — the caption notes it's illustrative, but you can either make it real (pull from your Airtable/Retell logs) or replace with something static. It's there to fill the right-hand space without being a terminal.

## If Google Fonts is slow

The Fraunces variable font is heavy. If you care about Core Web Vitals (which you should, for SEO):

Add to `index.html` `<head>` before any other font load:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

That'll shave a few hundred ms off first paint.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ShieldAlert,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Calculator,
  BatteryCharging,
  Sun,
  Wrench,
  ChevronDown,
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  SERVICES_LIST,
  CALCULATOR_APPLIANCES,
  OUTAGE_WARNING_SIGNS,
  TESTING_CHECKPOINTS,
} from '../data/servicesData';
import { US_OUTAGE_REGIONS } from '../data/regionsData';
import { BLOG_POSTS } from '../data/blogsData';
import { FAQ_ITEMS } from '../data/faqData';
import SeoHead from '../components/SeoHead';

export default function HomePage() {
  const [selectedIds, setSelectedIds] = useState(
    CALCULATOR_APPLIANCES.filter((a) => a.defaultSelected).map((a) => a.id)
  );
  const [hours, setHours] = useState(12);
  const [selectedRegionId, setSelectedRegionId] = useState(US_OUTAGE_REGIONS[0].id);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  function toggleAppliance(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  const activeAppliances = CALCULATOR_APPLIANCES.filter((a) => selectedIds.includes(a.id));

  // Calculate net energy factoring duty cycle + 15% DC-to-AC inverter conversion overhead
  const rawWh = activeAppliances.reduce(
    (sum, a) => sum + a.avgWatts * a.dutyCycle * hours,
    0
  );
  const requiredWh = Math.round(rawWh * 1.15);
  const continuousWatts = activeAppliances.reduce((sum, a) => sum + a.avgWatts, 0);
  const highestSingleSurge = activeAppliances.reduce(
    (max, a) => Math.max(max, a.surgeWatts),
    0
  );
  const requiredSurgeWatts = highestSingleSurge + Math.round(continuousWatts * 0.4);

  let recommendedStation = {
    tier: 'Compact 768Wh–1,024Wh LiFePO4 Tier',
    models: 'Anker SOLIX C800 / EcoFlow DELTA 2',
    reviewSlug: 'ecoflow-delta-2-review',
    serviceId: 'custom-appliance-load-audit',
  };

  if (requiredWh > 1100 && requiredWh <= 2400) {
    recommendedStation = {
      tier: 'Mid-Size 1,264Wh–2,048Wh Expandable LiFePO4 Tier',
      models: 'EcoFlow DELTA 2 Max / Jackery Explorer 1000 Plus / Bluetti AC180',
      reviewSlug: 'ecoflow-delta-2-max-review',
      serviceId: 'custom-appliance-load-audit',
    };
  } else if (requiredWh > 2400) {
    recommendedStation = {
      tier: 'Whole-Home / Heavy-Duty 3,000Wh–6,000Wh Modular Tier',
      models: 'EcoFlow DELTA Pro / Anker SOLIX F3800 + 30A Transfer Switch',
      reviewSlug: 'ecoflow-delta-pro-vs-anker-solix-f3800',
      serviceId: 'whole-home-vs-essential-architecture',
    };
  }

  const activeRegion =
    US_OUTAGE_REGIONS.find((r) => r.id === selectedRegionId) || US_OUTAGE_REGIONS[0];
  const latestPosts = BLOG_POSTS.slice(0, 6);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bleak Bot — Home Backup Power Testing & Outage Sizing',
    url: 'https://bleakbot.in',
    founder: {
      '@type': 'Person',
      name: 'Marcus Webb',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    description:
      'Independent portable power station load testing, custom appliance surge sizing, 30A/50A transfer switch planning, and storm-readiness blueprints.',
  };

  return (
    <div className="space-y-16 pb-8">
      <SeoHead
        title="Home Backup Power Testing, Blackout Load Sizing & Storm Readiness"
        description="Stop guessing what will run your house during a blackout. Hands-on portable power station tests, custom appliance surge audits, and storm blueprints by Marcus Webb in Jacksonville, FL."
        schemaData={homeSchema}
      />

      {/* HERO + INTERACTIVE BLACKOUT WATTAGE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        <div
          id="calculator"
          className="rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-cyan-500/30 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #06121A 0%, #0D2636 60%, #081A24 100%)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Jacksonville, FL Homeowner Testing Lab • BleakBot.in</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Stop Guessing What Will Run Your House When the Grid Goes Down.
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Spec sheets promise the moon—until your refrigerator compressor surge trips a
                “1,200W” inverter at 2:00 AM during a hurricane. I’m{' '}
                <strong className="text-white">Marcus Webb</strong>. I load-test portable power
                stations on real household appliances and build custom blackout sizing blueprints so
                you buy the right system the first time.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-cyan-300">
                    21+
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    In-Depth Power Station Load Tests
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-amber-400">
                    10
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    Home Backup &amp; Storm Sizing Services
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-400">
                    85%
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    Real Usable Wh Benchmark Rule
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/services" className="btn-amber px-5 py-3 text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Explore All 10 Backup Services</span>
                </Link>
                <Link
                  to="/blog"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition inline-flex items-center gap-2"
                >
                  <span>Read 21 Un-Sponsored Reviews</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Blackout Wattage & Surge Calculator */}
            <div className="lg:col-span-6 rounded-2xl bg-[#050E15]/95 border border-cyan-500/40 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  <h2 className="font-display font-bold text-base sm:text-lg text-white">
                    Interactive Blackout Wattage &amp; Surge Calculator
                  </h2>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  Includes 15% Inverter Loss
                </span>
              </div>

              <p className="text-xs text-slate-300">
                1. Click the household appliances you must keep alive during a power outage:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CALCULATOR_APPLIANCES.map((app) => {
                  const isSelected = selectedIds.includes(app.id);
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => toggleAppliance(app.id)}
                      className={`p-2.5 rounded-xl border text-left transition flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm'
                          : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold leading-snug">{app.name}</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">
                          {app.avgWatts}W run •{' '}
                          <span className="text-amber-300">{app.surgeWatts}W surge</span>
                        </div>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-cyan-400 text-slate-950' : 'border border-slate-600'
                        }`}
                      >
                        {isSelected ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Outage Hours Selector */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <span className="text-xs font-semibold text-slate-300">
                  2. Target Outage Window Before Solar / Generator Recharge:
                </span>
                <div className="flex gap-1.5">
                  {[
                    { h: 8, label: '8h Overnight' },
                    { h: 12, label: '12h Storm' },
                    { h: 24, label: '24h Blackout' },
                    { h: 72, label: '3-Day Hurricane' },
                  ].map((opt) => (
                    <button
                      key={opt.h}
                      type="button"
                      onClick={() => setHours(opt.h)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                        hours === opt.h
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Results Box */}
              <div className="rounded-xl bg-[#0B2230] border border-cyan-500/40 p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-lg bg-[#06151F] border border-cyan-500/20">
                    <div className="text-[11px] text-slate-400">Minimum Battery Capacity</div>
                    <div className="font-display font-extrabold text-xl text-cyan-300">
                      {requiredWh.toLocaleString()} Wh
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#06151F] border border-amber-500/20">
                    <div className="text-[11px] text-slate-400">Required Peak Surge Rating</div>
                    <div className="font-display font-extrabold text-xl text-amber-400">
                      {requiredSurgeWatts.toLocaleString()} W Surge
                    </div>
                  </div>
                </div>

                <div className="text-xs space-y-1.5 pt-1">
                  <div className="font-bold text-emerald-300">
                    Recommended Match: {recommendedStation.tier}
                  </div>
                  <div className="text-slate-200">
                    Top Tested Units: <strong>{recommendedStation.models}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Link
                    to={`/contact?service=${recommendedStation.serviceId}&wh=${requiredWh}&surge=${requiredSurgeWatts}`}
                    className="btn-amber !py-2 !px-3.5 text-xs"
                  >
                    <span>Get Custom Load Audit for This Setup</span>
                  </Link>
                  <Link
                    to={`/blog/${recommendedStation.reviewSlug}`}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-cyan-200 transition"
                  >
                    Read Tested Review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 SERVICE PILLARS & FEATURED 10 BACKUP SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              10 Home Backup &amp; Outage Services
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
              Custom Sizing, Solar Wiring &amp; Storm-Readiness Blueprints
            </h2>
            <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-3xl">
              Whether you’re sizing a single portable station for your refrigerator and CPAP or
              planning a 30A manual transfer switch before hurricane season, we offer 10 specialized
              homeowner services.
            </p>
          </div>
          <Link to="/services" className="btn-primary shrink-0">
            <span>View All 10 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const IconComponent = idx === 0 ? BatteryCharging : idx === 1 ? Sun : Wrench;
            const catServices = SERVICES_LIST.filter((s) => s.categoryId === cat.id);
            return (
              <div key={cat.id} className="surface-card p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
                      {cat.badge}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#0E7490] dark:text-[#06B6D4]" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{cat.name}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                    {cat.shortDesc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-[#CBDCE4] dark:border-[#22394E]">
                    {catServices.map((s) => (
                      <li key={s.id} className="text-xs sm:text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <Link
                          to={`/services?category=${cat.id}#${s.id}`}
                          className="font-semibold hover:text-[#0E7490] dark:hover:text-[#06B6D4]"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services?category=${cat.id}`}
                  className="btn-primary w-full justify-center text-xs"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4 COMMON HOMEOWNER BACKUP TRAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Why Backup Setups Fail on Outage Night
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
            4 Expensive Traps Spec Sheets Never Warn Homeowners About
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {OUTAGE_WARNING_SIGNS.map((item) => (
            <div key={item.id} className="surface-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h3>{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8]">
                <strong className="text-[var(--text-main)]">The Trap:</strong> {item.symptom}
              </p>
              <p className="text-xs sm:text-sm text-[#0E7490] dark:text-[#06B6D4] font-medium">
                <strong>Our Engineering Fix:</strong> {item.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* US REGIONAL STORM & GRID OUTAGE DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="surface-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
                Regional Storm &amp; Grid-Outage Profiles
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
                Find Your State’s Grid Threat &amp; Recommended Battery Setup
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] max-w-2xl">
                Backup power in Jacksonville, Florida looks completely different from tornado season
                in Oklahoma or a February ice storm in New England. Select your region below:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {US_OUTAGE_REGIONS.map((reg) => (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegionId(reg.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5 ${
                  selectedRegionId === reg.id
                    ? 'btn-primary'
                    : 'surface-subtle hover:opacity-80'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{reg.state.split('(')[0].trim()}</span>
              </button>
            ))}
          </div>

          <div className="surface-subtle p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg sm:text-xl font-extrabold">
                {activeRegion.state}
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-300">
                Typical Outage Window: {activeRegion.typicalOutageWindow}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="surface-card p-4 space-y-1">
                <div className="text-[11px] font-bold uppercase text-[#475569] dark:text-[#94A3B8]">
                  Primary Grid Threat
                </div>
                <div className="font-bold">{activeRegion.primaryThreat}</div>
              </div>
              <div className="surface-card p-4 space-y-1">
                <div className="text-[11px] font-bold uppercase text-[#475569] dark:text-[#94A3B8]">
                  Local Climate &amp; Storage Challenge
                </div>
                <div className="font-bold">{activeRegion.climateChallenge}</div>
              </div>
              <div className="surface-card p-4 space-y-1">
                <div className="text-[11px] font-bold uppercase text-[#475569] dark:text-[#94A3B8]">
                  Recommended Hardware Tier
                </div>
                <div className="font-bold text-[#0E7490] dark:text-[#06B6D4]">
                  {activeRegion.recommendedTier}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E7490]/10 dark:bg-[#06B6D4]/10 border border-[#0E7490]/30 text-xs sm:text-sm leading-relaxed">
              <strong>Marcus Webb’s Regional Advisory:</strong> {activeRegion.marcusNote}
            </div>
          </div>
        </div>
      </section>

      {/* MARCUS'S 6 HANDS-ON TESTING CHECKPOINTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
            Our Jacksonville Testing Protocol
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
            How Every Power Station Is Load-Tested Before We Recommend It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTING_CHECKPOINTS.map((cp) => (
            <div key={cp.step} className="surface-card p-5 space-y-2">
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-md surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
                CHECKPOINT {cp.step}
              </span>
              <h3 className="font-display font-bold text-base pt-1">{cp.title}</h3>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                {cp.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST HANDS-ON REVIEWS & BUYING GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              Modular Review Library ({BLOG_POSTS.length} Articles)
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
              Latest Portable Power Station Reviews &amp; Guides
            </h2>
          </div>
          <Link to="/blog" className="btn-primary self-start sm:self-auto">
            <span>Browse All {BLOG_POSTS.length} Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article key={post.id} className="surface-card overflow-hidden flex flex-col justify-between">
              <div>
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-video bg-[#06121A]">
                  <img
                    src={post.thumbnail}
                    alt={post.thumbnailAlt || post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-md font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
                      {post.categories[0]}
                    </span>
                    <span className="text-[#475569] dark:text-[#94A3B8]">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg leading-snug">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-[#0E7490] dark:hover:text-[#06B6D4]"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#0E7490] dark:text-[#06B6D4] inline-flex items-center gap-1 hover:underline"
                >
                  <span>Read Full Load Test &amp; Verdict</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
            Homeowner Backup Power FAQ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
            Common Questions Before You Buy a Power Station
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={item.question} className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#0E7490] dark:text-[#06B6D4]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed border-t border-[#CBDCE4]/60 dark:border-[#22394E]/60 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

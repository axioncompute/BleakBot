import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { BLOG_POSTS } from '../data/blogsData';

export default function Footer() {
  const [logoStage, setLogoStage] = useState(0);
  const featuredReviews = BLOG_POSTS.slice(0, 5);

  const logoSrc =
    logoStage === 0
      ? SITE_CONFIG.logo.src
      : logoStage === 1
      ? SITE_CONFIG.logo.remoteFallback
      : SITE_CONFIG.logo.fallbackSvg;

  return (
    <footer className="surface-card !rounded-none !border-x-0 !border-b-0 mt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#CBDCE4] dark:border-[#22394E]">
          {/* Col 1: Brand & Partnership */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt={SITE_CONFIG.logo.alt}
                onError={() => setLogoStage((prev) => Math.min(prev + 1, 2))}
                className="h-10 w-auto rounded-lg object-contain"
              />
              <div>
                <span className="font-display font-extrabold text-lg block leading-none">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#475569] dark:text-[#94A3B8]">
                  {SITE_CONFIG.domain} • Your Backup Guy
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            <div className="space-y-2 text-xs text-[#475569] dark:text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0E7490] dark:text-[#06B6D4] shrink-0" />
                <span>{SITE_CONFIG.contact.locationDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0E7490] dark:text-[#06B6D4] shrink-0" />
                <a href={SITE_CONFIG.contact.emailHref} className="hover:underline font-semibold">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0E7490] dark:text-[#06B6D4] shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services & Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              Services &amp; Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services?category=load-engineering" className="hover:underline">
                  Appliance Load &amp; Surge Audits
                </Link>
              </li>
              <li>
                <Link to="/services?category=solar-ups-rescue" className="hover:underline">
                  Solar MPPT &amp; CPAP UPS Setup
                </Link>
              </li>
              <li>
                <Link to="/services?category=regional-storm-plans" className="hover:underline">
                  Hurricane &amp; Tornado Blueprints
                </Link>
              </li>
              <li>
                <Link to="/blog?category=Reviews+%26+Tests" className="hover:underline">
                  Reviews &amp; Load Tests (11)
                </Link>
              </li>
              <li>
                <Link to="/blog?category=Buying+Guides" className="hover:underline">
                  Homeowner Buying Guides (9)
                </Link>
              </li>
              <li>
                <Link to="/blog?category=Outage+Tips" className="hover:underline">
                  Storm &amp; Outage Checklists
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Hands-On Tests (Short Titles + Zero Overflow) */}
          <div className="lg:col-span-3 space-y-3 overflow-hidden">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              Recent Load Tests
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {featuredReviews.map((post) => {
                const shortTitle = post.title.split(':')[0].trim();
                return (
                  <li key={post.id} className="min-w-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      title={post.title}
                      className="hover:text-[#0E7490] dark:hover:text-[#06B6D4] flex items-center gap-1.5 min-w-0"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      <span className="truncate block">{shortTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Quick Links & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About BleakBot
                </Link>
              </li>
              <li>
                <Link
                  to="/meet-marcus-webb-the-homeowner-running-the-tests"
                  className="hover:underline"
                >
                  Meet Marcus Webb
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact &amp; Load Audit
                </Link>
              </li>
              <li>
                <Link to="/legal/disclaimer" className="hover:underline">
                  Testing Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569] dark:text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>
              © {new Date().getFullYear()} {SITE_CONFIG.brandName} ({SITE_CONFIG.domain}) • Platform &amp; Engineering + Independent Testing by Marcus Webb (Jacksonville, FL).
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:underline">About BleakBot</Link>
            <Link to="/legal/disclaimer" className="hover:underline">Disclaimer</Link>
            <Link to="/legal/privacy-policy" className="hover:underline">Privacy</Link>
            <Link to="/legal/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

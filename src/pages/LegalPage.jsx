import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { LEGAL_POLICIES } from '../data/legalData';
import SeoHead from '../components/SeoHead';

export default function LegalPage() {
  const { policySlug } = useParams();
  const location = useLocation();

  const resolvedSlug =
    location.pathname === '/disclaimer' ? 'disclaimer' : policySlug || 'disclaimer';
  const policy = LEGAL_POLICIES[resolvedSlug] || LEGAL_POLICIES.disclaimer;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SeoHead title={policy.title} description={policy.summary} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4 space-y-2">
          <div className="surface-card p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4] pb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>BleakBot.in Legal &amp; Policies</span>
            </div>
            {Object.values(LEGAL_POLICIES).map((item) => (
              <Link
                key={item.slug}
                to={`/legal/${item.slug}`}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  policy.slug === item.slug
                    ? 'btn-primary w-full justify-start'
                    : 'hover:bg-[#E4EEF2] dark:hover:bg-[#172838]'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="surface-card p-6 sm:p-10 space-y-6">
            <div className="border-b border-[#CBDCE4] dark:border-[#22394E] pb-4 space-y-1">
              <span className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8]">
                Last Updated: {policy.lastUpdated}
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold">{policy.title}</h1>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8]">{policy.summary}</p>
            </div>

            <div className="space-y-6">
              {policy.sections.map((sec) => (
                <div key={sec.heading} className="space-y-2">
                  <h2 className="font-display text-lg font-bold">{sec.heading}</h2>
                  <p className="text-sm leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

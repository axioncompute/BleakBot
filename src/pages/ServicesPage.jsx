import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ShieldAlert, Zap, ArrowRight, Clock } from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_LIST } from '../data/servicesData';
import SeoHead from '../components/SeoHead';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCat = searchParams.get('category') || 'all';

  const filteredServices =
    activeCat === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.categoryId === activeCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoHead
        title="10 Home Backup Power Sizing, Solar MPPT & Storm Readiness Services"
        description="Book a 1-on-1 appliance wattage & surge audit, 30A/50A transfer switch plan, third-party solar panel matching, or regional hurricane/tornado backup blueprint."
      />

      {/* Header */}
      <div className="surface-card p-6 sm:p-10 space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
          Bleak Bot Engineering &amp; Advisory Catalog
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          10 Home Backup Power &amp; Outage Readiness Services
        </h1>
        <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          Buying the wrong battery or an overpriced solar bundle can cost you $800+ and leave your
          refrigerator dead on night one of a storm. Choose a service category below to see how
          Marcus Webb sizes, audits, and troubleshoots home backup systems across all 50 states.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeCat === 'all' ? 'btn-primary' : 'surface-subtle hover:opacity-80'
            }`}
          >
            All 10 Services ({SERVICES_LIST.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSearchParams({ category: cat.id })}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeCat === cat.id ? 'btn-primary' : 'surface-subtle hover:opacity-80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="surface-card p-6 sm:p-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
                  {service.badge}
                </span>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="text-amber-600 dark:text-amber-400">{service.priceRange}</span>
                  <span className="text-[#475569] dark:text-[#94A3B8] inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {service.turnaround}
                  </span>
                </div>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold">{service.title}</h2>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                {service.summary}
              </p>

              {/* Symptoms */}
              <div className="surface-subtle p-4 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Built For Homeowners Who Are:</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm">
                  {service.symptoms.map((sym) => (
                    <li key={sym} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
                  What You Receive:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {service.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CBDCE4] dark:border-[#22394E] flex flex-wrap items-center justify-between gap-3">
              <Link
                to={`/contact?service=${service.id}`}
                className="btn-amber text-xs sm:text-sm"
              >
                <Zap className="w-4 h-4" />
                <span>Book This Service</span>
              </Link>
              {service.relatedPostSlug && (
                <Link
                  to={`/blog/${service.relatedPostSlug}`}
                  className="text-xs font-bold text-[#0E7490] dark:text-[#06B6D4] inline-flex items-center gap-1 hover:underline"
                >
                  <span>Read Related Load Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

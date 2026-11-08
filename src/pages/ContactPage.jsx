import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Clock, Send, CheckCircle2, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_LIST } from '../data/servicesData';
import { submitInquiryForm } from '../api/client';
import SeoHead from '../components/SeoHead';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'custom-appliance-load-audit';
  const preWh = searchParams.get('wh') || '';
  const preSurge = searchParams.get('surge') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [serviceId, setServiceId] = useState(preselectedService);
  const [message, setMessage] = useState(
    preWh
      ? `Calculator Estimate: ${preWh} Wh needed (${preSurge} W peak surge). Here are the appliances I want to run:`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    await submitInquiryForm({
      name,
      email,
      stateRegion,
      serviceId,
      message,
    });
    setSubmitted(true);
    setName('');
    setEmail('');
    setStateRegion('');
    setMessage('');
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoHead
        title="Contact Marcus Webb & Book a Home Backup Load Audit"
        description="Get in touch with Marcus Webb at BleakBot.in for a 1-on-1 appliance wattage & surge load audit, solar panel voltage matching, or dealer quote review."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="surface-card p-6 sm:p-8 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
              Direct Homeowner Advisory
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold">
              Contact Marcus Webb &amp; Book Your Load Audit
            </h1>
            <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              Have a question about a specific portable power station, need a 24-hour appliance
              watt-hour &amp; surge blueprint, or want a second opinion on a solar bundle quote?
              Send your details here.
            </p>

            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0E7490] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Direct Email</div>
                  <a
                    href={SITE_CONFIG.contact.emailHref}
                    className="text-[#0E7490] dark:text-[#06B6D4] hover:underline"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0E7490] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Testing Lab Location</div>
                  <div className="text-[#475569] dark:text-[#94A3B8]">
                    {SITE_CONFIG.contact.locationDisplay}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0E7490] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Response Time</div>
                  <div className="text-[#475569] dark:text-[#94A3B8]">
                    {SITE_CONFIG.contact.responsePromise} ({SITE_CONFIG.contact.hours})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="surface-card p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                <h2 className="font-display text-2xl font-bold">
                  Request Received — Marcus Will Reply Within 24 Hours!
                </h2>
                <p className="text-sm text-[#475569] dark:text-[#94A3B8] max-w-md mx-auto">
                  Thank you for reaching out. Your appliance notes and service selection have been
                  logged. You can also email photos of your breaker panel or dealer quote directly to{' '}
                  <strong>{SITE_CONFIG.contact.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#CBDCE4] dark:border-[#22394E]">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h2 className="font-display text-xl font-bold">
                    Book a Service or Ask a Backup Power Question
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Robert Carter"
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">Your City &amp; State *</label>
                    <input
                      type="text"
                      required
                      value={stateRegion}
                      onChange={(e) => setStateRegion(e.target.value)}
                      placeholder="e.g., Savannah, GA or Tulsa, OK"
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">
                      Select Service or Topic *
                    </label>
                    <select
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.priceRange})
                        </option>
                      ))}
                      <option value="general-question">General Review / Product Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">
                    Appliances You Need to Run / Quote Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="List the appliances you want to power (e.g., kitchen fridge, CPAP, 1/3 HP sump pump, window AC), how many days of outage you are prepping for, or paste the bundle you are considering..."
                    className="w-full px-3.5 py-2.5 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
                  />
                </div>

                <button type="submit" className="btn-amber w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  <span>Send Request to Marcus</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

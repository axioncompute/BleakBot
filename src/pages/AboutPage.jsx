import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, ArrowRight, Zap, UserCheck, Globe, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import SeoHead from '../components/SeoHead';

export default function AboutPage() {
  const location = useLocation();
  const isMarcusRoute = location.pathname.includes('marcus');
  const [marcusImgSrc, setMarcusImgSrc] = useState(SITE_CONFIG.founder.avatarLocal);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SeoHead
        title={
          isMarcusRoute
            ? 'Meet Marcus Webb — The Homeowner Running the Tests'
            : 'About BleakBot — Why This Site Exists'
        }
        description={
          isMarcusRoute
            ? 'My name is Marcus Webb. I live in Jacksonville, Florida, and I have been through four significant grid outages since 2021 — including Hurricane Ian in September 2022.'
            : 'BleakBot started as a personal project — a place to publish honest backup power testing written by Jacksonville, FL homeowner Marcus Webb.'
        }
      />

      {/* Top Two-Page Switcher Tabs so readers can easily view BOTH stories */}
      <div className="surface-card p-2 flex flex-col sm:flex-row gap-2">
        <Link
          to="/about"
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            !isMarcusRoute ? 'btn-primary' : 'surface-subtle hover:opacity-80'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>About BleakBot — Why This Site Exists</span>
        </Link>
        <Link
          to="/meet-marcus-webb-the-homeowner-running-the-tests"
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition ${
            isMarcusRoute ? 'btn-primary' : 'surface-subtle hover:opacity-80'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Meet Marcus Webb — Running the Tests</span>
        </Link>
      </div>

      {!isMarcusRoute ? (
        /* ==============================================================
           VIEW 1: ABOUT BLEAKBOT — WHY THIS SITE EXISTS (THE OWNER/PLATFORM)
           ============================================================== */
        <article className="surface-card p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface-subtle text-xs font-bold text-[#0E7490] dark:text-[#06B6D4]">
            <Globe className="w-3.5 h-3.5" />
            <span>The Platform &amp; The Partnership • BleakBot.in</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
            About BleakBot — Why This Site Exists
          </h1>

          <div className="wp-article-content">
            <p>Some websites are built by marketing teams. This one wasn’t.</p>

            <p>
              BleakBot started as a personal project — a place to publish things worth reading,
              written by people who actually know what they’re talking about. No filler. No content
              calendars driven by ad revenue goals. Just honest information from someone who’s lived
              the thing they’re writing about.
            </p>

            <h2 className="wp-block-heading">How BleakBot Got Here</h2>

            <p>
              A few years back, I started hearing the same conversation from my friend{' '}
              <strong>Marcus Webb</strong> — a homeowner in Jacksonville, Florida who’d been through
              more than his share of power outages. Every time we talked, he was either testing
              something new, comparing specs, or telling me why the last thing he bought wasn’t what
              the product page promised.
            </p>

            <p>
              Marcus knew this stuff cold. He’d spent real money — several thousand dollars —
              running his own runtime tests on portable power stations, comparing them under actual
              storm conditions, and figuring out what worked for regular homeowners who didn’t want
              to spend $12,000 on a Generac installation. He had notebooks full of data. He had
              opinions backed by experience.
            </p>

            <p>What he didn’t have was a place to put any of it.</p>

            <p>
              Marcus isn’t a tech person in the “build a website” sense. He’s a tech person in the
              “I will run this EcoFlow DELTA Pro from 100% to 10% in 91-degree heat and log every
              reading” sense. Writing and publishing? That’s a different skill set.
            </p>

            <p>That’s where I came in.</p>

            <p>
              I handle the technical side — building and maintaining the site, formatting posts,
              making sure things load and look right. Marcus handles everything you actually come
              here to read — the testing, the analysis, the honest verdicts. Neither of us is
              pretending to be something we’re not.
            </p>

            <h2 className="wp-block-heading">What This Site Is</h2>

            <p>
              A platform for Marcus to write what he’d want to read himself before buying backup
              power equipment.
            </p>

            <p>
              Real runtime numbers. Real installed costs. Real comparisons between portable power
              stations and whole-home standby generators. Honest takes on which products justify
              their price tag and which ones are marketing-first, performance-second.
            </p>

            <p>
              The{' '}
              <a href="https://bleakbot.in/" target="_blank" rel="noreferrer noopener">
                .in domain
              </a>{' '}
              is mine — it’s what I had, and it works fine. The content is Marcus’s, and it’s aimed
              squarely at US homeowners in storm-prone states who are tired of getting their backup
              power advice from manufacturer spec sheets and five-star Amazon reviews.
            </p>

            <h2 className="wp-block-heading">Meet Marcus</h2>

            <p>
              If you want to know more about the person actually running the tests and writing the
              posts, his full story is on his author page.
            </p>
          </div>

          {/* Direct Card Linking to Marcus Webb's Page */}
          <div className="surface-subtle p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 !border-l-[#0E7490] dark:!border-l-[#06B6D4]">
            <div className="flex items-center gap-4">
              <img
                src={marcusImgSrc}
                alt="Marcus Webb — Jacksonville, Florida Homeowner & Tester"
                onError={() => setMarcusImgSrc(SITE_CONFIG.founder.avatarRemote)}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0E7490] dark:border-[#06B6D4] shrink-0"
              />
              <div>
                <div className="font-display font-bold text-base sm:text-lg">
                  👉 Meet Marcus Webb
                </div>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8]">
                  The Jacksonville, Florida homeowner behind every review on this site
                </p>
              </div>
            </div>
            <Link
              to="/meet-marcus-webb-the-homeowner-running-the-tests"
              className="btn-primary shrink-0"
            >
              <span>Read Marcus’s Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ) : (
        /* ==============================================================
           VIEW 2: MEET MARCUS WEBB — THE HOMEOWNER RUNNING THE TESTS
           ============================================================== */
        <article className="surface-card p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-[#CBDCE4] dark:border-[#22394E]">
            <img
              src={marcusImgSrc}
              alt="Marcus Webb — Author's profile pic"
              onError={() => setMarcusImgSrc(SITE_CONFIG.founder.avatarRemote)}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#0E7490] dark:border-[#06B6D4] shadow-md shrink-0"
            />
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full surface-subtle text-xs font-bold text-[#0E7490] dark:text-[#06B6D4]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jacksonville, Florida • Lead Homeowner Tester &amp; Author</span>
              </div>
              <h1 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight">
                Meet Marcus Webb — The Homeowner Running the Tests
              </h1>
            </div>
          </div>

          <div className="wp-article-content">
            <p>
              My name is <strong>Marcus Webb</strong>. I live in Jacksonville, Florida, and I’ve
              been through four significant grid outages since 2021 — including Hurricane Ian in
              September 2022, which knocked my power out for 74 hours straight.
            </p>

            <p>
              Before Ian, I had a $389 Amazon power station that I assumed was “good enough.” It
              wasn’t. It kept my fridge cold for about 14 hours before I started making tough
              decisions about what food to eat first and what to throw out. My neighbor Donna, over
              in Tampa, had it worse — she’d bought a cheap dual-fuel generator that died after one
              night and wouldn’t restart. She was without power for six days.
            </p>

            <p>
              After that storm, I started taking backup power seriously. Not in a prepper way. In a
              homeowner way.
            </p>

            <p>
              I spent the next two years buying, testing, and comparing portable power stations and
              standby generators. I’ve tested units from EcoFlow, Jackery, Bluetti, and Anker under
              real load conditions — not manufacturer-ideal conditions. I’ve priced out Generac and
              Kohler standby installations. I’ve talked to electricians, contractors, and other
              homeowners who’ve been through extended outages.
            </p>

            <p>
              I am not an electrician. I am not sponsored by any power company or manufacturer.
              Nobody is paying me to say nice things about their product. When I find something that
              works, I say so. When I find something that disappoints, I say that too.
            </p>

            <p>
              I started this site because I couldn’t find the information I needed in one place.
              Most reviews gave me specs from the box. What I wanted was: how long does this
              actually run a fridge during a Florida summer? What happens to battery performance in
              91-degree heat? Is a $12,000 standby generator actually worth it compared to a $2,400
              power station and a set of solar panels?
            </p>

            <p>
              This site is my attempt to answer those questions honestly — with real numbers, real
              test conditions, and no incentive to steer you toward anything other than what
              actually works.
            </p>

            <p>
              If you’ve got questions about a specific product, a setup situation, or something I
              haven’t covered yet, you can reach me through the{' '}
              <Link to="/contact">contact page</Link>. I read everything, though I can’t always
              reply quickly.
            </p>

            <p>
              <strong>— Marcus Webb</strong>
              <br />
              Jacksonville, Florida
            </p>
          </div>

          <div className="pt-4 border-t border-[#CBDCE4] dark:border-[#22394E] flex flex-wrap items-center justify-between gap-3">
            <Link to="/about" className="text-xs sm:text-sm font-bold text-[#0E7490] dark:text-[#06B6D4] hover:underline">
              ← Read About BleakBot (Why This Site Exists)
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog" className="btn-primary text-xs sm:text-sm">
                <span>Browse Marcus’s 21 Reviews</span>
              </Link>
              <Link to="/contact" className="btn-amber text-xs sm:text-sm">
                <Zap className="w-4 h-4" />
                <span>Ask Marcus / Book Load Audit</span>
              </Link>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}

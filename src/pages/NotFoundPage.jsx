import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator } from 'lucide-react';
import SeoHead from '../components/SeoHead';

export default function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-5">
      <SeoHead title="Page Not Found (404)" />
      <span className="px-3 py-1 rounded-full text-xs font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
        404 • Circuit Open
      </span>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
        We Couldn’t Find That Page
      </h1>
      <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-xl mx-auto">
        Head back to our homepage to run the Interactive Blackout Wattage Calculator or browse all
        21 hands-on portable power station tests.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
        <Link to="/blog" className="btn-amber">
          <Calculator className="w-4 h-4" />
          <span>Browse All 21 Reviews</span>
        </Link>
      </div>
    </div>
  );
}

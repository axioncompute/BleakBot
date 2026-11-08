import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Zap, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden surface-card !rounded-none !border-x-0 !border-b-0 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/#calculator"
          className="btn-primary !py-2.5 !px-3 text-xs justify-center"
        >
          <Calculator className="w-4 h-4" />
          <span>Wattage Calculator</span>
        </Link>
        <Link
          to="/contact"
          className="btn-amber !py-2.5 !px-3 text-xs justify-center"
        >
          <Zap className="w-4 h-4" />
          <span>Book Load Audit</span>
        </Link>
      </div>
    </div>
  );
}

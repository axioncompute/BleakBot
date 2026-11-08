import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown, Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logoStage, setLogoStage] = useState(0); // 0 = local /assets/logo.webp, 1 = remote WP URL, 2 = SVG fallback
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const logoSrc =
    logoStage === 0
      ? SITE_CONFIG.logo.src
      : logoStage === 1
      ? SITE_CONFIG.logo.remoteFallback
      : SITE_CONFIG.logo.fallbackSvg;

  return (
    <header className="sticky top-0 z-40 surface-card !rounded-none !border-x-0 !border-t-0 backdrop-blur-md bg-opacity-95">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4"
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={logoSrc}
            alt={SITE_CONFIG.logo.alt}
            onError={() => setLogoStage((prev) => Math.min(prev + 1, 2))}
            className="h-10 sm:h-12 w-auto rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight block leading-none">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#475569] dark:text-[#94A3B8] block mt-1">
              Your Backup Guy • {SITE_CONFIG.domain}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {SITE_CONFIG.navigation.map((item) => {
            if (item.dropdown) {
              const isDropdownActive = item.dropdown.some((sub) =>
                location.pathname.startsWith(sub.path)
              );
              const isOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5 transition-colors ${
                      isDropdownActive
                        ? 'surface-subtle text-[#0E7490] dark:text-[#06B6D4]'
                        : 'hover:bg-[#E4EEF2] dark:hover:bg-[#172838]'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-72 surface-card shadow-xl py-2 z-50">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-[#E4EEF2] dark:bg-[#172838] text-[#0E7490] dark:text-[#06B6D4] font-bold'
                                : 'hover:bg-[#E4EEF2]/60 dark:hover:bg-[#172838]/60'
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'surface-subtle text-[#0E7490] dark:text-[#06B6D4]'
                      : 'hover:bg-[#E4EEF2] dark:hover:bg-[#172838]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Controls: Minimalist Sun/Moon Switch + CTA */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="relative w-14 h-8 rounded-full surface-subtle p-1 flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E7490] dark:focus:ring-[#06B6D4]"
          >
            <span
              className={`w-6 h-6 rounded-full surface-card shadow-sm flex items-center justify-center transform transition-transform duration-200 ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
              )}
            </span>
          </button>

          <Link
            to="/services"
            className="hidden sm:inline-flex btn-amber text-xs sm:text-sm py-2 px-3.5"
          >
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span>Book Load Audit</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-xl surface-subtle"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#CBDCE4] dark:border-[#22394E] px-4 pt-3 pb-6 space-y-2 bg-[var(--bg-card)]">
          {SITE_CONFIG.navigation.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="pt-2 border-t border-[#CBDCE4]/60 dark:border-[#22394E]/60"
                >
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                    {item.label}
                  </div>
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#E4EEF2] dark:hover:bg-[#172838]"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              );
            }
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    isActive
                      ? 'surface-subtle text-[#0E7490] dark:text-[#06B6D4]'
                      : 'hover:bg-[#E4EEF2] dark:hover:bg-[#172838]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}

          <div className="pt-3">
            <Link to="/services" className="btn-amber w-full justify-center">
              <Zap className="w-4 h-4" />
              <span>Explore All 10 Backup Services</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

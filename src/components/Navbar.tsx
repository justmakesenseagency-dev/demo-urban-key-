import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeyRound, Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Properties', id: 'properties' },
    { label: 'For Families', id: 'family-homes' },
    { label: 'For Bachelors', id: 'bachelor-living' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#111315]/90 backdrop-blur-md border-b border-[#C5A880]/15 py-3.5 shadow-xl shadow-black/20'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <button
            id="nav-brand-logo"
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#111315] transition-colors duration-300">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-2xl tracking-wide text-[#FBF9F5] font-semibold block leading-none">
                Urban<span className="text-[#C5A880]">Keys</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8E8982] block mt-1 font-medium">
                Consultant • Ranchi
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative text-sm tracking-wide transition-colors py-1 cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#C5A880]'
                      : 'text-[#EFEBE4]/80 hover:text-[#FBF9F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="text-xs text-[#8E8982] hover:text-[#C5A880] flex items-center gap-1.5 transition-colors"
              title="Call UrbanKeys"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-medium tracking-wider">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              id="nav-cta-find-property"
              onClick={() => handleItemClick('search')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A880] text-[#111315] hover:bg-[#dfcdae] active:scale-[0.98] transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Find a Property</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#FBF9F5] hover:text-[#C5A880] bg-white/5 border border-white/10 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#111315]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 lg:hidden border-b border-[#C5A880]/20"
          >
            <div className="flex flex-col space-y-5 flex-1">
              <div className="pb-3 border-b border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A880]">
                  Navigation
                </span>
              </div>

              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleItemClick(item.id)}
                  className="text-left text-xl font-serif text-[#FBF9F5] hover:text-[#C5A880] py-2 flex items-center justify-between border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8982]" />
                </motion.button>
              ))}

              <div className="pt-4 mt-auto space-y-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[#FBF9F5] text-sm flex items-center justify-center gap-2 hover:border-[#C5A880]/40 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <button
                  id="mobile-nav-cta"
                  onClick={() => handleItemClick('search')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C5A880] text-[#111315] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Find a Property</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

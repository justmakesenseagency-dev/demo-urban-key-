import React from 'react';
import { KeyRound, Phone, MapPin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0B0C0E] text-[#8E8982] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                <KeyRound className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl tracking-wide text-[#FBF9F5] font-semibold">
                Urban<span className="text-[#C5A880]">Keys</span>
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-medium mb-3">
              Real Estate Consultant | Ranchi
            </p>

            <p className="text-xs text-[#8E8982] leading-relaxed max-w-sm mb-6">
              Helping families, bachelors and professionals discover comfortable, verified living spaces across Ranchi through guided private viewings.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A880] text-[#FBF9F5] hover:text-[#111315] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] text-[#FBF9F5] hover:text-[#111315] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FBF9F5] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('properties')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('family-homes')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Family Homes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bachelor-living')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Bachelor Living
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  About UrbanKeys
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Contact & Viewings
                </button>
              </li>
            </ul>
          </div>

          {/* Ranchi Localities */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FBF9F5] font-semibold mb-4">
              Localities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Morabadi</li>
              <li>Kanke Road</li>
              <li>Lalpur</li>
              <li>Ashok Nagar</li>
              <li>Argora</li>
              <li>Bariatu</li>
              <li>Harmu</li>
              <li>Doranda</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FBF9F5] font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.locationString}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#FBF9F5] hover:text-[#C5A880] font-medium tracking-wide transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A880] transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-[#8E8982] uppercase tracking-wider block">
                  Private Viewings By Appointment
                </span>
                <span className="text-xs text-[#EFEBE4]">Monday – Sunday | 9 AM – 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© 2026 UrbanKeys. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#8E8982]">
              Real Estate Consultant • Ranchi, Jharkhand
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#FBF9F5] hover:text-[#C5A880] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

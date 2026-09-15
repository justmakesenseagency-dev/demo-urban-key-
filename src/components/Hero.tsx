import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowDown, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

interface HeroProps {
  onExploreClick: () => void;
  onTalkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#111315] pt-24 pb-28 sm:pb-32"
    >
      {/* Cinematic Background Image with Parallax / Scale Entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.72, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Curated contemporary residence by UrbanKeys in Ranchi"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.05]"
          loading="eager"
        />
        {/* Multilayered Architectural Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/65 to-[#111315]/40" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#111315]/40 to-[#111315]/90" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#C5A880]/30 backdrop-blur-md mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#EFEBE4]">
            Ranchi, Jharkhand
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
        </motion.div>

        {/* Hero Editorial Heading with Line-by-Line Reveal */}
        <h1 className="font-serif text-[#FBF9F5] font-light leading-[1.05] tracking-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(2.5rem,7vw,5.75rem)]"
          >
            Find a place
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(2.5rem,7vw,5.75rem)] italic text-[#DFCDAE]"
          >
            that feels like home.
          </motion.span>
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-base sm:text-lg md:text-xl text-[#EFEBE4]/85 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
        >
          Premium properties across Ranchi for families, bachelors and modern urban living.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-cta-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#C5A880]/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
          >
            <span>Explore Properties</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="hero-cta-talk"
            onClick={onTalkClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 text-[#FBF9F5] hover:text-[#C5A880] border border-[#C5A880]/40 font-medium text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <MessageSquareQuote className="w-4 h-4 text-[#C5A880]" />
            <span>Talk to UrbanKeys</span>
          </button>
        </motion.div>

        {/* Quick Micro Credentials / Brand Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#8E8982]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>Family Homes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>Bachelor Living</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>Private Viewings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>Trusted Deals</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8982] font-medium">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-9 bg-white/15 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-3 bg-[#C5A880]"
          />
        </div>
      </motion.div>
    </section>
  );
};

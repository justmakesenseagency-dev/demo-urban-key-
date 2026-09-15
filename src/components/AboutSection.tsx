import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

interface AboutSectionProps {
  onTalkClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onTalkClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#181A1E] text-[#FBF9F5] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#C5A880]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="UrbanKeys Real Estate Advisory in Ranchi"
                className="w-full h-full object-cover filter brightness-90 contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Verified badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block font-semibold">
                    Real Estate Consultant
                  </span>
                  <span className="text-sm font-medium text-[#FBF9F5]">
                    Ranchi, Jharkhand, India
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#8E8982] block">Consultation Line</span>
                  <span className="text-xs font-semibold text-[#C5A880]">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy Side */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
            >
              <span>About UrbanKeys</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight mb-6"
            >
              Ranchi, made easier.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#EFEBE4]/90 leading-relaxed mb-6 font-normal"
            >
              UrbanKeys is a Ranchi-based real estate consultancy helping people discover properties that fit the way they live.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-sm text-[#8E8982] leading-relaxed mb-8 font-normal"
            >
              Whether you are relocating your family into a quiet 3 BHK in Morabadi or settling into your first bachelor pad near Lalpur Chowk, we eliminate the endless phone calls, ambiguous pricing, and awkward negotiations. Through guided private viewings and verified deals, we make property search in Ranchi straightforward and respectful.
            </motion.p>

            {/* Core Pillars Bullet Points */}
            <div className="space-y-3 mb-8">
              {BUSINESS_INFO.services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#EFEBE4]">
                  <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                id="about-talk-btn"
                onClick={onTalkClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Talk to UrbanKeys</span>
              </button>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#FBF9F5] hover:text-[#C5A880] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

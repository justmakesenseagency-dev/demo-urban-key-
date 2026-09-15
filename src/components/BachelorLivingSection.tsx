import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Wifi, Clock, Sparkles } from 'lucide-react';

interface BachelorLivingSectionProps {
  onExploreBachelorLiving: () => void;
}

export const BachelorLivingSection: React.FC<BachelorLivingSectionProps> = ({
  onExploreBachelorLiving,
}) => {
  const benefits = [
    {
      icon: Compass,
      title: 'Convenient Locations',
      desc: 'Walking proximity to Lalpur Chowk, cafes, coaching hubs, and public transport nodes.',
    },
    {
      icon: Sparkles,
      title: 'Modern Spaces',
      desc: 'Contemporary studios, 1 BHK, and independent rooms free from outdated, restrictive house rules.',
    },
    {
      icon: Wifi,
      title: 'Flexible Options',
      desc: 'From unfurnished setups to plug-and-play furnished spaces with fiber internet readiness.',
    },
    {
      icon: Clock,
      title: 'Easy Viewing',
      desc: 'Private, scheduled walkthroughs arranged quickly without awkward negotiations or red tape.',
    },
  ];

  return (
    <section id="bachelor-living" className="py-20 sm:py-28 bg-[#111315] text-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Benefits */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/25 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
            >
              <span>Bachelor & Professional Living</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight mb-4"
            >
              Your space. Your city. Your way.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-[#8E8982] leading-relaxed mb-8 max-w-xl font-normal"
            >
              Find bachelor-friendly spaces designed around convenience, connectivity and modern urban living. We take the friction out of finding bachelor rentals in Ranchi with verified owner policies and genuine transparency.
            </motion.p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * idx }}
                  className="p-4 rounded-xl bg-[#181A1E] border border-white/5 hover:border-[#C5A880]/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <item.icon className="w-4 h-4 text-[#C5A880]" />
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FBF9F5]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8E8982] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <button
                id="cta-explore-bachelor-living"
                onClick={onExploreBachelorLiving}
                className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Bachelor Living</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#C5A880]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
                alt="Modern bachelor apartment interior in Ranchi"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Float badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block font-semibold">
                    100% Bachelor Welcoming
                  </span>
                  <span className="text-sm font-medium text-[#FBF9F5]">
                    Independent Studios & 1-2 BHKs
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

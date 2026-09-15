import React from 'react';
import { motion } from 'motion/react';
import { Award, Eye, Handshake, MapPin } from 'lucide-react';

export const WhyUrbanKeys: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Prime Properties',
      description: 'Access carefully selected properties across Ranchi.',
      details: 'Curated for cleanliness, neighborhood tranquility, and clear owner documentation.',
      icon: Award,
    },
    {
      num: '02',
      title: 'Private Viewings',
      description: 'See properties personally with guided private viewings.',
      details: 'No rushed visits. We coordinate dedicated walkthroughs tailored to your schedule.',
      icon: Eye,
    },
    {
      num: '03',
      title: 'Trusted Deals',
      description: 'Clear communication and a customer-first approach.',
      details: 'Straightforward rental terms, transparent pricing clarity, and genuine consultation.',
      icon: Handshake,
    },
    {
      num: '04',
      title: 'Local Expertise',
      description: 'Property guidance built around the Ranchi market.',
      details: 'Deep familiarity with localities from Morabadi and Kanke Road to Lalpur and Doranda.',
      icon: MapPin,
    },
  ];

  return (
    <section id="why-urbankeys" className="py-20 sm:py-28 bg-[#181A1E] text-[#FBF9F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
          >
            <span>The UrbanKeys Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight"
          >
            Why UrbanKeys?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#8E8982] mt-3 font-normal"
          >
            A modern real estate advisory that puts your lifestyle requirements first.
          </motion.p>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 rounded-3xl bg-[#111315] border border-white/10 hover:border-[#C5A880]/40 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#C5A880] group-hover:scale-105 transition-transform duration-300">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8E8982] group-hover:text-[#C5A880] group-hover:border-[#C5A880]/30 transition-colors">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal tracking-tight mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#EFEBE4]/90 font-medium mb-2 leading-snug">
                  "{pillar.description}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6">
                <p className="text-xs text-[#8E8982] leading-relaxed">
                  {pillar.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

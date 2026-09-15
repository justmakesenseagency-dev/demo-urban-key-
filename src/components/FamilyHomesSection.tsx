import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Heart, Shield, School, Home } from 'lucide-react';

interface FamilyHomesSectionProps {
  onExploreFamilyHomes: () => void;
}

export const FamilyHomesSection: React.FC<FamilyHomesSectionProps> = ({ onExploreFamilyHomes }) => {
  const familyFeatures = [
    {
      icon: Home,
      title: 'Spacious Multi-BHK Layouts',
      desc: 'Thoughtfully planned living dining areas with private balconies and dedicated children or guest rooms.',
    },
    {
      icon: Shield,
      title: 'Safe Residential Pockets',
      desc: 'Properties in serene, family-first neighborhoods such as Morabadi, Kanke Road, Ashok Nagar & Bariatu.',
    },
    {
      icon: School,
      title: 'Proximity to Schools & Healthcare',
      desc: 'Save daily commute time with quick connectivity to prominent educational institutions and hospitals.',
    },
    {
      icon: Heart,
      title: 'Transparent Tenancy Agreements',
      desc: 'Guided tenancy documentation, fair terms, and landlord dispute mitigation from day one.',
    },
  ];

  return (
    <section id="family-homes" className="py-20 sm:py-28 bg-[#181A1E] text-[#FBF9F5] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with subtle framing & parallax impression */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#C5A880]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Family living room in Ranchi"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Float badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block font-semibold">
                    UrbanKeys Family Curation
                  </span>
                  <span className="text-sm font-medium text-[#FBF9F5]">
                    2 & 3 BHK Homes across Ranchi
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
                  <Home className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Decorative subtle ambient glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Copy & Feature List */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/25 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
            >
              <span>Family Living Focus</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight mb-4"
            >
              Made for family living.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-[#8E8982] leading-relaxed mb-8 max-w-xl font-normal"
            >
              Comfortable spaces, practical locations and homes selected with everyday family living in mind. We understand the value of peaceful surroundings, dependable utilities, and neighborly security.
            </motion.p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {familyFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * idx }}
                  className="p-4 rounded-xl bg-[#111315]/70 border border-white/5 hover:border-[#C5A880]/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
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
              transition={{ delay: 0.4 }}
            >
              <button
                id="cta-explore-family-homes"
                onClick={onExploreFamilyHomes}
                className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Family Homes</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

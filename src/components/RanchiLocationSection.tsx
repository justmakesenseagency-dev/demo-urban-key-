import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

interface RanchiLocationSectionProps {
  onSelectLocality: (locality: string) => void;
}

export const RanchiLocationSection: React.FC<RanchiLocationSectionProps> = ({
  onSelectLocality,
}) => {
  const [activeLocality, setActiveLocality] = useState<string>('Morabadi');

  const localitiesInfo = [
    {
      name: 'Morabadi',
      vibe: 'Serene, green and family-centric',
      idealFor: 'Families & Senior Living',
      highlights: 'Close to Morabadi Ground, oxygen parks & quiet residential colonies.',
      tag: 'Family Favorite',
    },
    {
      name: 'Kanke Road',
      vibe: 'Scenic, premium hillside breeze',
      idealFor: 'Executive Families & Professionals',
      highlights: 'Quick access to Rock Garden, Kanke Dam, and leading schools.',
      tag: 'High-Demand',
    },
    {
      name: 'Lalpur',
      vibe: 'Vibrant, central & transit-connected',
      idealFor: 'Bachelors, Students & Working Youth',
      highlights: 'Walkable cafes, coaching academies, shopping and round-the-clock autos.',
      tag: 'Bachelor Hub',
    },
    {
      name: 'Ashok Nagar',
      vibe: 'Prestigious, spacious & dignified',
      idealFor: 'Large Families & Independent Floors',
      highlights: 'Wide planned avenues, tree-lined boundary walls, quiet security.',
      tag: 'Premium Enclave',
    },
    {
      name: 'Argora',
      vibe: 'Modern apartments & IT/Civic transit',
      idealFor: 'Corporate & Government Professionals',
      highlights: 'Rapidly connecting to Ring Road, Argora Chowk, and civic hubs.',
      tag: 'Rising Corridor',
    },
    {
      name: 'Bariatu',
      vibe: 'Healthcare & academic connectivity',
      idealFor: 'Medical Staff, Families & Doctors',
      highlights: 'Immediate proximity to RIMS, multi-specialty hospitals and schools.',
      tag: 'Convenient Living',
    },
  ];

  return (
    <section id="ranchi-location" className="py-20 sm:py-28 bg-[#111315] text-[#FBF9F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
          >
            <MapPin className="w-3 h-3" />
            <span>Dedicated Local Presence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight"
          >
            Find your place in Ranchi.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#8E8982] mt-3 font-normal"
          >
            UrbanKeys operates exclusively within Ranchi, ensuring intimate street-level market knowledge and genuine neighborhood insight across the city.
          </motion.p>
        </div>

        {/* Interactive Stylized Ranchi Map / Neighborhood Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Graphic Box (Stylized architectural canvas ready for Google Maps API hook) */}
          <div className="lg:col-span-7 bg-[#181A1E] rounded-3xl p-6 sm:p-8 border border-white/10 relative flex flex-col justify-between overflow-hidden shadow-xl min-h-[380px]">
            {/* Background topographic / street grid artistic overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#C5A880 1px, transparent 1px), radial-gradient(#C5A880 1px, #181A1E 1px)`,
                backgroundSize: '24px 24px',
                backgroundPosition: '0 0, 12px 12px',
              }}
            />

            {/* Stylized Node Network of Ranchi Pockets */}
            <div className="relative z-10 my-auto py-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FBF9F5]">
                    📍 Ranchi, Jharkhand
                  </span>
                </div>
                <span className="text-[10px] text-[#8E8982] tracking-wider uppercase">
                  Active Consultation Network
                </span>
              </div>

              {/* Ranchi Node Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {localitiesInfo.map((loc) => {
                  const isSelected = activeLocality === loc.name;
                  return (
                    <button
                      key={loc.name}
                      onClick={() => {
                        setActiveLocality(loc.name);
                        onSelectLocality(loc.name);
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-[#C5A880]/15 border-[#C5A880] shadow-md'
                          : 'bg-[#111315]/80 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-semibold text-[#C5A880]">
                          {loc.tag}
                        </span>
                        <MapPin className={`w-3 h-3 ${isSelected ? 'text-[#C5A880]' : 'text-[#8E8982]'}`} />
                      </div>
                      <h4 className="text-sm font-serif font-medium text-[#FBF9F5]">
                        {loc.name}
                      </h4>
                      <span className="text-[10px] text-[#8E8982] block truncate">
                        {loc.idealFor}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Developer Integration Note footer inside map */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E8982] gap-2">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                Live on-ground scouting available across all major Ranchi municipal wards.
              </span>
              <span className="text-[#C5A880] font-medium">Click any area to filter</span>
            </div>
          </div>

          {/* Selected Neighborhood Insight Card */}
          <div className="lg:col-span-5 flex flex-col">
            {localitiesInfo
              .filter((l) => l.name === activeLocality)
              .map((loc) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#181A1E] rounded-3xl p-6 sm:p-8 border border-[#C5A880]/30 shadow-xl flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                      Local Spot Spotlight
                    </span>
                    <h3 className="font-serif text-3xl font-light text-[#FBF9F5] mb-2">
                      {loc.name}, Ranchi
                    </h3>
                    <p className="text-xs text-[#C5A880] font-medium uppercase tracking-wider mb-4">
                      {loc.vibe}
                    </p>

                    <div className="space-y-4 py-4 border-y border-white/10 text-xs">
                      <div>
                        <span className="text-[#8E8982] block mb-1">Recommended For</span>
                        <span className="text-[#FBF9F5] font-medium">{loc.idealFor}</span>
                      </div>
                      <div>
                        <span className="text-[#8E8982] block mb-1">Key Advantages</span>
                        <p className="text-[#8E8982] leading-relaxed">{loc.highlights}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6">
                    <button
                      onClick={() => onSelectLocality(loc.name)}
                      className="w-full py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>View Properties in {loc.name}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

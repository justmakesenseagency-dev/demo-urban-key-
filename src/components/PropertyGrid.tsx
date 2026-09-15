import React from 'react';
import { motion } from 'motion/react';
import { Property, PropertyCategory } from '../types.ts';
import { PropertyCard } from './PropertyCard.tsx';
import { MessageSquareQuote, SlidersHorizontal, Info } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  selectedCategory: PropertyCategory;
  onSelectCategory: (category: PropertyCategory) => void;
  onViewProperty: (property: Property) => void;
  onTalkClick: () => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  selectedCategory,
  onSelectCategory,
  onViewProperty,
  onTalkClick,
}) => {
  const tabs: { label: string; value: PropertyCategory }[] = [
    { label: 'All Listings', value: 'all' },
    { label: 'Family Living', value: 'family' },
    { label: 'Bachelor Living', value: 'bachelor' },
    { label: 'Working Professionals', value: 'professional' },
  ];

  return (
    <section id="properties" className="py-20 sm:py-28 bg-[#111315] text-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3"
            >
              <span>Curated Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#FBF9F5]"
            >
              Properties worth seeing.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-[#8E8982] mt-3 max-w-xl font-normal"
            >
              Explore selected properties curated by UrbanKeys across premier residential pockets of Ranchi.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#181A1E] border border-white/10 self-start md:self-auto">
            {tabs.map((tab) => {
              const isActive = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  id={`tab-category-${tab.value}`}
                  onClick={() => onSelectCategory(tab.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs tracking-wider transition-all duration-300 font-medium cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A880] text-[#111315] shadow-md font-semibold'
                      : 'text-[#8E8982] hover:text-[#FBF9F5] hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Developer / Client Customization Note Banner */}
        <div className="mb-8 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs text-[#8E8982]">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>Sample listings shown for illustration. Contact UrbanKeys for current on-ground verification & viewings.</span>
          </div>
          <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-[#C5A880]">
            Ranchi Verified
          </span>
        </div>

        {/* Property Grid: 3 col desktop, 2 col tablet, 1 col mobile */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewProperty={onViewProperty}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 px-6 rounded-3xl bg-[#181A1E] border border-dashed border-[#C5A880]/30 max-w-xl mx-auto"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#FBF9F5] mb-2 font-light">
              No properties match your current filters.
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8982] mb-6 max-w-md mx-auto leading-relaxed">
              We frequently source unlisted family homes and bachelor spaces directly from property owners across Ranchi. Let us know your exact requirements.
            </p>
            <button
              id="empty-state-talk-btn"
              onClick={onTalkClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Talk to UrbanKeys</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

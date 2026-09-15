import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Home, Users, IndianRupee, RotateCcw } from 'lucide-react';
import { SearchFilterState } from '../types.ts';
import { BUSINESS_INFO } from '../data/business.ts';

interface SearchBarProps {
  filters: SearchFilterState;
  onFilterChange: (filters: SearchFilterState) => void;
  onSearchSubmit: () => void;
  onResetFilters: () => void;
  totalMatches: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFilterChange,
  onSearchSubmit,
  onResetFilters,
  totalMatches,
}) => {
  const isFiltered =
    filters.location !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.lookingFor !== 'all' ||
    filters.budget !== 'all';

  const handleChange = (field: keyof SearchFilterState, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <section id="search" className="relative z-20 bg-[#111315] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-[#181A1E] text-[#FBF9F5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 border border-[#C5A880]/25"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
              Curated Discovery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-light">
              Find your next address.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8E8982] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              Showing <strong className="text-[#C5A880]">{totalMatches}</strong> properties in Ranchi
            </span>

            {isFiltered && (
              <button
                id="search-reset-btn"
                onClick={onResetFilters}
                className="text-xs text-[#C5A880] hover:text-[#dfcdae] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Input Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {/* Location */}
          <div className="relative group">
            <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-2 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Location</span>
            </label>
            <div className="relative">
              <select
                id="filter-location"
                value={filters.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full bg-[#111315] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Ranchi Localities</option>
                {BUSINESS_INFO.popularLocalities.map((loc) => (
                  <option key={loc} value={loc.toLowerCase()}>
                    {loc}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8982]">
                ▼
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="relative group">
            <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-2 font-medium flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Property Type</span>
            </label>
            <div className="relative">
              <select
                id="filter-property-type"
                value={filters.propertyType}
                onChange={(e) => handleChange('propertyType', e.target.value)}
                className="w-full bg-[#111315] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Property Types</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Independent Floor">Independent Floor</option>
                <option value="Studio">Studio</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8982]">
                ▼
              </div>
            </div>
          </div>

          {/* Looking For */}
          <div className="relative group">
            <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-2 font-medium flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Looking For</span>
            </label>
            <div className="relative">
              <select
                id="filter-looking-for"
                value={filters.lookingFor}
                onChange={(e) => handleChange('lookingFor', e.target.value)}
                className="w-full bg-[#111315] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="family">Family Living</option>
                <option value="bachelor">Bachelor Living</option>
                <option value="professional">Working Professional</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8982]">
                ▼
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="relative group">
            <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-2 font-medium flex items-center gap-1.5">
              <IndianRupee className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Budget</span>
            </label>
            <div className="relative">
              <select
                id="filter-budget"
                value={filters.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full bg-[#111315] border border-white/15 rounded-xl px-3.5 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A880] transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Budgets</option>
                <option value="under-10k">Under ₹10K</option>
                <option value="10k-20k">₹10K – ₹20K</option>
                <option value="20k-30k">₹20K – ₹30K</option>
                <option value="30k-plus">₹30K+</option>
                <option value="contact">Contact for pricing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8982]">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-[#8E8982] text-center sm:text-left">
            Need tailored advice? Connect directly for off-market Ranchi listings.
          </p>
          <button
            id="search-submit-btn"
            onClick={onSearchSubmit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Properties</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

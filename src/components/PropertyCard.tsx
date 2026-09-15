import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Property } from '../types.ts';

interface PropertyCardProps {
  property: Property;
  onViewProperty: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewProperty }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineOpacity, setShineOpacity] = useState(0);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  // Subtle 3D tilt effect on mouse move (max 3-4 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on non-touch devices
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -3.5;
    const rY = ((x - centerX) / centerX) * 3.5;

    setRotateX(rX);
    setRotateY(rY);
    setShinePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setShineOpacity(0.12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShineOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="group relative bg-[#181A1E] text-[#FBF9F5] rounded-2xl overflow-hidden border border-[#C5A880]/15 hover:border-[#C5A880]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-black/40 flex flex-col"
    >
      {/* Dynamic light reflection layer for subtle 3D shine */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255, 255, 255, 0.4), transparent 60%)`,
          opacity: shineOpacity,
        }}
      />

      {/* Image Container with 1.04x zoom micro-interaction */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111315]">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181A1E] via-transparent to-black/30 group-hover:via-black/20 transition-all duration-300" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#EFEBE4] border border-white/10">
            {property.type}
          </span>

          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#C5A880]/90 backdrop-blur-md text-[#111315]">
            {property.suitableFor}
          </span>
        </div>

        {/* Availability Pill */}
        {property.available && (
          <div className="absolute bottom-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Available for viewing</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs text-[#8E8982] mb-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-[#FBF9F5] font-normal tracking-tight line-clamp-1 mb-2 group-hover:text-[#C5A880] transition-colors duration-300">
            {property.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#8E8982] line-clamp-2 font-normal leading-relaxed mb-4">
            {property.description}
          </p>

          {/* Property Key Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs text-[#EFEBE4]/90 mb-4">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{property.bedrooms} BHK</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Footer / Price & View Button */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8E8982] block">
              Estimated Rent
            </span>
            <span className="text-base sm:text-lg font-serif font-semibold text-[#FBF9F5]">
              {property.price}
            </span>
          </div>

          <button
            id={`property-card-view-${property.id}`}
            onClick={() => onViewProperty(property)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] hover:text-[#dfcdae] py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/btn cursor-pointer"
          >
            <span>View Property</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

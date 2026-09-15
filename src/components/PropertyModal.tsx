import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Compass,
  Car
} from 'lucide-react';
import { Property } from '../types.ts';
import { BUSINESS_INFO } from '../data/business.ts';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleViewing: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onScheduleViewing,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    if (!property) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % property.images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [property, isFullscreen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (property) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [property]);

  if (!property) return null;

  const currentImage = property.images[activeImageIndex] || property.images[0];

  const whatsappMessage = encodeURIComponent(
    `Hello UrbanKeys! I am interested in private viewing for "${property.title}" in ${property.location} (Rent: ${property.price}). Could you share more details?`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#181A1E] border border-[#C5A880]/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto z-10 text-[#FBF9F5]"
        >
          {/* Close button */}
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-[#FBF9F5] hover:text-[#C5A880] border border-white/10 backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Gallery Section */}
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
            <img
              src={currentImage}
              alt={`${property.title} preview ${activeImageIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer transition-opacity duration-300"
              onClick={() => setIsFullscreen(true)}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181A1E] via-transparent to-black/30 pointer-events-none" />

            {/* Carousel Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + property.images.length) % property.images.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % property.images.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/15 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Counter Pill */}
            <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs text-[#EFEBE4] border border-white/10">
              {activeImageIndex + 1} / {property.images.length} Photos
            </div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C5A880] text-[#111315]">
                {property.suitableFor}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/70 text-[#EFEBE4] border border-white/10">
                {property.type}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="flex gap-2 p-3 bg-[#111315] overflow-x-auto border-b border-white/10">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#C5A880] opacity-100 scale-105'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Header / Price & Specs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#C5A880] mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.location}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#FBF9F5]">
                  {property.title}
                </h2>
              </div>

              <div className="md:text-right bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#8E8982] block">
                  Rental Estimate
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#FBF9F5]">
                  {property.price}
                </span>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center md:justify-end gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified by UrbanKeys</span>
                </div>
              </div>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#111315] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#8E8982]">
                  <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Bedrooms</span>
                </div>
                <span className="text-sm font-semibold text-[#FBF9F5]">{property.bedrooms} BHK</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111315] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#8E8982]">
                  <Bath className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Bathrooms</span>
                </div>
                <span className="text-sm font-semibold text-[#FBF9F5]">{property.bathrooms} Attached</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111315] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#8E8982]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Carpet Area</span>
                </div>
                <span className="text-sm font-semibold text-[#FBF9F5]">{property.area}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111315] border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#8E8982]">
                  <Car className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Parking</span>
                </div>
                <span className="text-sm font-semibold text-[#FBF9F5]">{property.parking}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-serif text-lg text-[#FBF9F5] mb-2 font-medium">
                About this Property
              </h3>
              <p className="text-sm text-[#8E8982] leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div>
                <h3 className="font-serif text-lg text-[#FBF9F5] mb-3 font-medium">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#EFEBE4] bg-white/[0.03] p-2.5 rounded-lg border border-white/5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities Grid */}
            <div>
              <h3 className="font-serif text-lg text-[#FBF9F5] mb-3 font-medium">
                Amenities & Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#EFEBE4] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar / Direct Contact Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 sm:flex-none px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#FBF9F5] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call UrbanKeys</span>
                </a>

                <a
                  href={`https://wa.me/917250591114?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold tracking-wider uppercase text-[#25D366] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                id="modal-schedule-viewing-btn"
                onClick={() => {
                  onScheduleViewing(property);
                  onClose();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Viewing</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        {isFullscreen && (
          <div
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={currentImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

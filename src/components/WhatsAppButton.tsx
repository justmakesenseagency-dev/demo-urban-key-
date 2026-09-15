import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ExternalLink, X, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover options when clicked */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-2xl bg-[#181A1E] border border-[#C5A880]/30 shadow-2xl p-4 text-[#FBF9F5]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-[#FBF9F5]">UrbanKeys WhatsApp</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8E8982] hover:text-[#FBF9F5] p-1"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#8E8982] mb-3 leading-relaxed">
              Connect directly with our Ranchi property desk or subscribe to fresh rental drops:
            </p>

            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-medium flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Consultant</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#FBF9F5] flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C5A880]" />
                  <span>Join WhatsApp Channel</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E8982]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#181A1E] border border-[#25D366]/40 hover:border-[#25D366] text-[#FBF9F5] shadow-2xl shadow-black/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat with UrbanKeys on WhatsApp"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] text-[#111315] flex items-center justify-center shadow-md">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
          Chat with UrbanKeys
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#181A1E] animate-pulse" />
      </button>
    </div>
  );
};

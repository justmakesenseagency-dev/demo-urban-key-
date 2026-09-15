import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Search, Eye, KeyRound } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'Share your desired Ranchi locality, budget, family or bachelor setup, and move-in timeline.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Explore Suitable Properties',
      desc: 'Receive curated property options matching your exact criteria—no irrelevant spam or guesswork.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Schedule a Private Viewing',
      desc: 'Walk through shortlisted homes at your convenience with our guided on-ground assistance.',
      icon: Eye,
    },
    {
      step: '04',
      title: 'Move Forward With Confidence',
      desc: 'Finalize your deal with verified owner terms, structured paperwork, and a smooth handover.',
      icon: KeyRound,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#111315] text-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
          >
            <span>Seamless Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight"
          >
            How it works.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#8E8982] mt-3 font-normal"
          >
            A four-step consultative approach designed to save you time and stress.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-6 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#181A1E] border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300 group shadow-lg"
              >
                {/* Step Icon with Number */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#111315] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#111315] transition-all duration-300 shadow-md">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C5A880] text-[#111315]">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#FBF9F5] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8E8982] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';

export const InstagramSection: React.FC = () => {
  const instagramFeed = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      caption: 'Private walkthrough arranged for this 3 BHK in Morabadi today 🗝️',
      tag: 'Morabadi',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      caption: 'Bachelor friendly 1 BHK just locked in Lalpur. Walkable to everything ✨',
      tag: 'Lalpur',
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      caption: 'Morning light in this Kanke Road family residence. Peace and views 🌿',
      tag: 'Kanke Road',
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      caption: 'Exclusive independent floor in Ashok Nagar. Rare availability 🏡',
      tag: 'Ashok Nagar',
    },
  ];

  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#181A1E] text-[#FBF9F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3"
            >
              <Instagram className="w-3 h-3" />
              <span>Social Dispatch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight"
            >
              See UrbanKeys in action.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-[#8E8982] mt-2 font-normal"
            >
              Follow along on Instagram for daily Ranchi house tours, bachelor listings, and property updates.
            </motion.p>
          </div>

          {/* Instagram Stats Profile Pill */}
          <div className="flex items-center gap-4 sm:gap-6 bg-[#111315] p-3.5 sm:p-4 rounded-2xl border border-white/10 self-start md:self-auto">
            <div className="text-center">
              <span className="font-serif text-base sm:text-lg font-semibold text-[#FBF9F5] block">
                {BUSINESS_INFO.stats.instagramPosts}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8E8982]">Posts</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-serif text-base sm:text-lg font-semibold text-[#C5A880] block">
                {BUSINESS_INFO.stats.instagramFollowers}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8E8982]">Followers</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-serif text-base sm:text-lg font-semibold text-[#FBF9F5] block">
                {BUSINESS_INFO.stats.instagramFollowing}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8E8982]">Following</span>
            </div>
          </div>
        </div>

        {/* Visual Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {instagramFeed.map((post, idx) => (
            <motion.a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#111315] border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 block shadow-lg"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-center">
                <div className="flex items-center justify-between text-xs text-[#C5A880]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    {post.tag}
                  </span>
                  <Instagram className="w-4 h-4" />
                </div>

                <p className="text-xs text-[#EFEBE4] leading-relaxed line-clamp-3">
                  {post.caption}
                </p>

                <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                  <span>View on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Action Row */}
        <div className="text-center">
          <a
            id="instagram-follow-btn"
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#dfcdae] text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {BUSINESS_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

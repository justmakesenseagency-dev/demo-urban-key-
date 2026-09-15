import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Instagram, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquareQuote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business.ts';
import { ContactFormData } from '../types.ts';

interface ContactSectionProps {
  preselectedRequirement?: string;
  preselectedPropertyTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedRequirement = '',
  preselectedPropertyTitle = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    lookingFor: preselectedRequirement || 'Family Home',
    preferredLocation: '',
    budget: '',
    message: preselectedPropertyTitle ? `I would like to schedule a private viewing for "${preselectedPropertyTitle}".` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    // Phone validation: minimum 10 digits
    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.lookingFor) {
      errs.lookingFor = 'Please select what you are looking for';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate reliable API integration structure ready for Supabase / CRM / Email backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const generatedId = `UK-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedId);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      lookingFor: 'Family Home',
      preferredLocation: '',
      budget: '',
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111315] text-[#FBF9F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Positioning */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/20 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4"
              >
                <span>Private Consultation</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FBF9F5] tracking-tight mb-4"
              >
                Let's find your next place.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-[#8E8982] leading-relaxed mb-8 font-normal"
              >
                Reach out with your requirements. Whether it's a calm family home in Morabadi or a well-connected bachelor pad in Lalpur, we organize private, unhurried viewings.
              </motion.p>

              {/* Direct Business Info Block */}
              <div className="space-y-5 p-6 rounded-2xl bg-[#181A1E] border border-white/10 mb-8">
                <div>
                  <span className="font-serif text-lg font-medium text-[#FBF9F5] block">
                    {BUSINESS_INFO.name}
                  </span>
                  <span className="text-xs text-[#C5A880] tracking-wider uppercase font-medium">
                    {BUSINESS_INFO.positioning}
                  </span>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="text-[#EFEBE4]">{BUSINESS_INFO.locationString}</span>
                  </div>

                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex items-center gap-3 text-[#EFEBE4] hover:text-[#C5A880] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="font-medium tracking-wider">{BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#EFEBE4] hover:text-[#C5A880] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#8E8982]">
              🛡️ Zero spam guarantee. We only contact you regarding verified properties matching your specific brief.
            </div>
          </div>

          {/* Right Column: Contact & Viewing Request Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#181A1E] rounded-3xl p-6 sm:p-10 border border-[#C5A880]/20 shadow-2xl relative"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mx-auto mb-5 border border-[#C5A880]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-3xl font-light text-[#FBF9F5] mb-2">
                      Viewing Request Received
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8E8982] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <strong className="text-[#FBF9F5]">{formData.name}</strong>. Reference ticket <span className="text-[#C5A880] font-mono font-semibold">{referenceId}</span> has been logged. An UrbanKeys consultant will review suitable Ranchi properties and contact you at <strong className="text-[#FBF9F5]">{formData.phone}</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/917250591114?text=Hi%20UrbanKeys%2C%20I%20just%20submitted%20request%20${referenceId}%20for%20a%20property%20in%20Ranchi.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#111315] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                      >
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>Fast-Track on WhatsApp</span>
                      </a>

                      <button
                        onClick={resetForm}
                        className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] border border-white/10 transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="border-b border-white/10 pb-4 mb-2">
                      <h3 className="font-serif text-2xl font-light text-[#FBF9F5]">
                        Request a Private Viewing
                      </h3>
                      <p className="text-xs text-[#8E8982] mt-1">
                        Tell us what you are looking for and our team will prepare curated options.
                      </p>
                    </div>

                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Something went wrong. Please check your details or call {BUSINESS_INFO.phoneDisplay} directly.</span>
                      </div>
                    )}

                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          Your Name <span className="text-[#C5A880]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Verma"
                          className={`w-full bg-[#111315] border rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none transition-colors ${
                            errors.name ? 'border-rose-500' : 'border-white/15 focus:border-[#C5A880]'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          Phone Number <span className="text-[#C5A880]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 72 50 59 11 14"
                          className={`w-full bg-[#111315] border rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none transition-colors ${
                            errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-[#C5A880]'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Requirement Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full bg-[#111315] border rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500' : 'border-white/15 focus:border-[#C5A880]'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          I'm Looking For <span className="text-[#C5A880]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="contact-looking-for"
                            value={formData.lookingFor}
                            onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                            className="w-full bg-[#111315] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none focus:border-[#C5A880] appearance-none cursor-pointer"
                          >
                            <option value="Family Home">Family Home</option>
                            <option value="Bachelor Living">Bachelor Living</option>
                            <option value="Investment">Investment</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8E8982]">
                            ▼
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Preferred Location & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          Preferred Ranchi Location
                        </label>
                        <input
                          id="contact-location"
                          type="text"
                          value={formData.preferredLocation}
                          onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                          placeholder="e.g. Morabadi, Lalpur, Kanke Road"
                          className="w-full bg-[#111315] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                          Approximate Budget
                        </label>
                        <input
                          id="contact-budget"
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="e.g. ₹15,000 – ₹22,000 / month"
                          className="w-full bg-[#111315] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8E8982] mb-1.5 font-medium">
                        Specific Details or Move-in Date
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your space preferences, family size, parking requirements, or intended move-in date..."
                        className="w-full bg-[#111315] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#8E8982]/50 focus:outline-none focus:border-[#C5A880] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded-xl bg-[#C5A880] hover:bg-[#dfcdae] disabled:opacity-60 text-[#111315] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request a Private Viewing</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

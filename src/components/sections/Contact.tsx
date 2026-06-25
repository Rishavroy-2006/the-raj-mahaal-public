import { motion } from "motion/react";
import { siteConfig } from "../../data/config";
import { PhoneCall } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "34482ae3-6362-4cd0-9c73-26cdc973f828");
    formData.append("subject", "New Venue Inquiry - The Raj Mahaal");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-[120px] px-6 md:px-20 relative bg-luxury-maroon" id="contact">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-luxury-gold"></div>
              <span className="text-[13px] font-semibold text-luxury-gold tracking-widest uppercase">
                Private Viewing
              </span>
            </div>
            <h2 className="font-display text-luxury-cream mb-6 md:mb-8 text-3xl sm:text-4xl md:text-6xl">
              Schedule a Venue Visit
            </h2>
            <p className="text-luxury-cream/80 mb-10 md:mb-12 text-base md:text-lg font-light leading-relaxed">
              Allow our expert event specialists to assist you in planning an unforgettable occasion. Contact us to schedule a private viewing of our grand facilities.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href={`tel:${siteConfig.contact.primaryPhone}`} className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 border border-luxury-gold/50 rounded-full flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                  <PhoneCall className="text-luxury-gold group-hover:text-luxury-dark w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-[10px] md:text-[12px] font-semibold text-luxury-cream/60 tracking-widest mb-1 uppercase">
                    Direct Line
                  </span>
                  <span className="font-display text-xl md:text-2xl text-luxury-gold">
                    {siteConfig.contact.primaryPhone}
                  </span>
                </div>
              </a>
              
              <a href={`tel:${siteConfig.contact.secondaryPhone}`} className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 border border-luxury-gold/50 rounded-full flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                  <PhoneCall className="text-luxury-gold group-hover:text-luxury-dark w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-[10px] md:text-[12px] font-semibold text-luxury-cream/60 tracking-widest mb-1 uppercase">
                    Secondary Line
                  </span>
                  <span className="font-display text-xl md:text-2xl text-luxury-gold">
                    {siteConfig.contact.secondaryPhone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-luxury-dark p-8 md:p-10 lg:p-16 border border-luxury-gold/20 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50"></div>
            
            {isSubmitted ? (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 border border-luxury-gold rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-luxury-gold mb-4 text-2xl md:text-3xl">Inquiry Received</h3>
                <p className="text-luxury-cream/80 font-light text-sm md:text-base">Our Royal Concierge will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-luxury-gold mb-6 md:mb-8 text-2xl md:text-3xl text-center">
                  Enquire About Your Event
                </h3>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full border-0 border-b border-luxury-gold/30 bg-transparent px-0 py-4 focus:ring-0 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/40 transition-colors focus:outline-none"
                      placeholder="Your Full Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="w-full border-0 border-b border-luxury-gold/30 bg-transparent px-0 py-4 focus:ring-0 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/40 transition-colors focus:outline-none"
                      placeholder="Contact Number"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="event">Event Type</label>
                    <select
                      id="event"
                      name="event"
                      required
                      className="w-full border-0 border-b border-luxury-gold/30 bg-transparent px-0 py-4 focus:ring-0 focus:border-luxury-gold text-luxury-cream/80 focus:outline-none"
                    >
                      <option value="" className="bg-luxury-dark text-luxury-cream">Select Event Type</option>
                      <option value="wedding" className="bg-luxury-dark text-luxury-cream">Wedding Ceremony</option>
                      <option value="reception" className="bg-luxury-dark text-luxury-cream">Grand Reception</option>
                      <option value="anniversary" className="bg-luxury-dark text-luxury-cream">Anniversary Celebration</option>
                      <option value="birthday" className="bg-luxury-dark text-luxury-cream">Birthday Party</option>
                      <option value="corporate" className="bg-luxury-dark text-luxury-cream">Corporate Gala</option>
                      <option value="social" className="bg-luxury-dark text-luxury-cream">Social Gathering</option>
                      <option value="other" className="bg-luxury-dark text-luxury-cream">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="date">Event Date</label>
                    <input
                      id="date"
                      name="date"
                      required
                      className="w-full border-0 border-b border-luxury-gold/30 bg-transparent px-0 py-4 focus:ring-0 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/40 transition-colors focus:outline-none [color-scheme:dark]"
                      placeholder="Preferred Date"
                      type="date"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold text-luxury-dark text-[13px] font-semibold py-5 mt-8 hover:bg-luxury-gold-light transition-all duration-500 uppercase tracking-[0.2em] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

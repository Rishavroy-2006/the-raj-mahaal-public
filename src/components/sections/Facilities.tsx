import { motion } from "motion/react";
import { Power, Star } from "lucide-react";
import { siteConfig } from "../../data/config";

export function Facilities() {
  return (
    <section className="py-16 md:py-[120px] px-6 md:px-20 bg-luxury-dark" id="facilities">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-luxury-gold"></div>
                <span className="text-[13px] font-semibold text-luxury-gold tracking-widest uppercase">
                  Facilities
                </span>
              </div>
              <h2 className="font-display text-luxury-cream text-3xl sm:text-4xl md:text-6xl max-w-2xl leading-tight">
                Unrivaled Amenities for Flawless Execution
              </h2>
            </div>
            <a
              href="#gallery"
              className="text-[13px] font-semibold text-luxury-gold border-b border-luxury-gold pb-1 hover:text-luxury-gold-light hover:border-luxury-gold-light transition-all uppercase tracking-widest"
            >
              Explore All Facilities
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Royal Ambiance - Large Feature */}
            <div className="lg:col-span-8 group relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[800px]">
              <div className="absolute inset-0 border border-luxury-gold/20 z-10 pointer-events-none m-4"></div>
              <img
                src={siteConfig.images.facilities.grandHall}
                alt="Royal Ambiance"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-transparent flex flex-col justify-end p-6 sm:p-12 md:p-16 z-20">
                <span className="text-[10px] md:text-[12px] font-semibold text-luxury-gold mb-2 md:mb-4 tracking-widest uppercase">
                  01 / THE GRAND HALL
                </span>
                <h3 className="font-display text-luxury-cream mb-2 md:mb-4 text-3xl sm:text-4xl md:text-5xl">
                  Royal Ambiance
                </h3>
                <p className="text-luxury-cream/80 max-w-xl text-base md:text-lg font-light">
                  Breathtaking architectural scale with majestic chandeliers and ornate detailing, designed for truly cinematic moments.
                </p>
              </div>
            </div>

            {/* Event Essentials */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="group relative overflow-hidden h-[400px]">
                <div className="absolute inset-0 border border-luxury-gold/20 z-10 pointer-events-none m-4"></div>
                <img
                  src={siteConfig.images.facilities.staging}
                  alt="Staging Decor"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark to-transparent flex flex-col justify-end p-6 md:p-8 z-20">
                  <span className="text-[10px] md:text-[12px] font-semibold text-luxury-gold mb-2 tracking-widest uppercase">
                    02 / STAGING
                  </span>
                  <h3 className="font-display text-luxury-cream mb-2 text-2xl sm:text-3xl">
                    Exclusive Decor
                  </h3>
                  <p className="text-luxury-cream/80 text-sm font-light">
                    Bespoke stage designs tailored to your vision.
                  </p>
                </div>
              </div>

              <div className="bg-luxury-maroon p-8 md:p-10 flex flex-col justify-center h-auto lg:h-[calc(100%-400px-2rem)] border border-luxury-gold/20 relative overflow-hidden">
                <h3 className="font-display text-luxury-gold mb-6 text-2xl sm:text-3xl z-10">
                  Uninterrupted Excellence
                </h3>
                <ul className="space-y-6 z-10">
                  <li className="flex items-start gap-4">
                    <Power className="text-luxury-gold mt-1" size={20} />
                    <div>
                      <strong className="block text-luxury-cream font-normal mb-1">
                        Continuous Power
                      </strong>
                      <span className="text-sm text-luxury-cream/80 font-light">
                        100% generator backup for seamless events.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="text-luxury-gold mt-1" size={20} />
                    <div>
                      <strong className="block text-luxury-cream font-normal mb-1">
                        Guest Experience
                      </strong>
                      <span className="text-sm text-luxury-cream/80 font-light">
                        Premium arrival experience for guests.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { siteConfig } from "../../data/config";
import { SectionHeading } from "../ui/SectionHeading";

export function Events() {
  return (
    <section className="py-16 md:py-[120px] px-6 md:px-20 bg-luxury-dark" id="events">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            label="Tailored Occasions"
            title="Curated Experiences for Every Milestone"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteConfig.events.map((event, i) => (
              <div
                key={i}
                className={`text-center group cursor-pointer ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}
              >
                <div className="w-full aspect-[3/4] overflow-hidden border border-luxury-gold/30 mb-8 relative p-2 bg-luxury-dark" style={{ borderTopLeftRadius: '50% 20%', borderTopRightRadius: '50% 20%' }}>
                  <div className="w-full h-full relative overflow-hidden border border-luxury-gold/10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="font-display text-luxury-gold mb-3 text-3xl">
                  {event.title}
                </h3>
                <p className="text-luxury-cream/70 italic text-lg font-display">
                  {event.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

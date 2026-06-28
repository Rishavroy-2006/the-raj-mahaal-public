import { m } from "motion/react";
import { siteConfig } from "../../data/config";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero/Banquet-Front.webp" type="image/webp" />
          <img
            alt="The Raj Mahaal Grand Venue"
            src={siteConfig.images.hero}
            fetchPriority="high"
            className="w-full h-full object-cover object-center [animation:kenBurns_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 via-luxury-dark/40 to-luxury-dark/95"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-20 max-w-6xl mx-auto flex flex-col items-center mt-10">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-20 bg-luxury-gold/50"></div>
          <span className="text-[13px] font-semibold text-luxury-gold tracking-[0.3em] uppercase">
            Welcome to Grandeur
          </span>
          <div className="h-px w-20 bg-luxury-gold/50"></div>
        </m.div>

        <m.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[90px] leading-tight lg:leading-[88px] text-luxury-cream mb-6 md:mb-8 drop-shadow-2xl tracking-tight italic"
        >
          Where Celebrations<br />
          <span className="not-italic">Become Timeless</span>
        </m.h1>

        <m.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-luxury-cream/80 mb-8 md:mb-12 max-w-3xl drop-shadow-lg text-lg sm:text-xl md:text-2xl font-light leading-relaxed px-4 md:px-0"
        >
          Experience Sodepur's Premier Fully Air-Conditioned Banquet Hall for Weddings, Receptions, Engagements, and Corporate Events.
        </m.p>

        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="bg-luxury-gold text-luxury-dark text-[13px] font-semibold px-12 py-5 hover:bg-luxury-gold-light transition-colors duration-500 text-center tracking-[0.2em] uppercase w-full sm:w-auto"
          >
            Plan Your Event
          </a>
          <a
            href="tel:9331027787"
            className="bg-transparent border border-luxury-gold text-luxury-gold text-[13px] font-semibold px-12 py-5 hover:bg-luxury-gold/10 transition-colors duration-500 text-center tracking-[0.2em] uppercase w-full sm:w-auto"
          >
            Contact Us
          </a>
        </m.div>
      </div>
    </section>
  );
}

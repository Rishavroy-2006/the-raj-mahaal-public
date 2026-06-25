import { motion } from "motion/react";
import { siteConfig } from "../../data/config";
import { Star, MapPin } from "lucide-react";

export function Statistics() {
  const getIcon = (iconName?: string) => {
    const className = "w-10 h-10 md:w-14 md:h-14 text-luxury-gold mx-auto mb-3 stroke-[1]";
    switch (iconName) {
      case "Star": return <Star className={className} />;
      case "MapPin": return <MapPin className={className} />;
      default: return null;
    }
  };

  return (
    <section className="py-12 md:py-20 bg-luxury-maroon relative border-y border-luxury-gold/20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold via-transparent to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-12 md:divide-x divide-luxury-gold/20"
        >
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center px-2 md:px-4 flex flex-col items-center">
              {stat.isIcon ? (
                getIcon(stat.icon)
              ) : (
                <span className="block font-display text-luxury-gold mb-3 text-4xl md:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
              )}
              <span className="text-[10px] md:text-[12px] font-semibold text-luxury-cream/80 tracking-widest md:tracking-[0.2em] uppercase mt-auto">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

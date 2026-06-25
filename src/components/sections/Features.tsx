import { motion } from "motion/react";
import { siteConfig } from "../../data/config";
import { Snowflake, Camera, Utensils, Zap } from "lucide-react";

export function Features() {
  const getIcon = (iconName: string) => {
    const className = "w-8 h-8 md:w-10 md:h-10 text-luxury-gold stroke-[1]";
    switch (iconName) {
      case "Snowflake": return <Snowflake className={className} />;
      case "Camera": return <Camera className={className} />;
      case "Utensils": return <Utensils className={className} />;
      case "Zap": return <Zap className={className} />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-20 bg-luxury-maroon relative">
      {/* SVG Background pattern overlay simulation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold via-transparent to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[13px] font-semibold text-luxury-gold/80 tracking-widest block mb-4 uppercase">
            The Experience
          </span>
          <h2 className="font-display text-luxury-cream text-3xl sm:text-4xl md:text-5xl mb-6">
            Hallmarks of Excellence
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {siteConfig.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8 border border-luxury-gold/30 rounded-full flex items-center justify-center group-hover:border-luxury-gold transition-colors duration-500 group-hover:bg-luxury-gold/5">
                {getIcon(feature.icon)}
              </div>
              <h3 className="font-display text-lg md:text-2xl text-luxury-cream mb-2 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-luxury-cream/70 text-xs md:text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

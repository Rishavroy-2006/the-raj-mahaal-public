import { motion } from "motion/react";
import { siteConfig } from "../../data/config";
import { SectionHeading } from "../ui/SectionHeading";
import { Snowflake, Paintbrush, Utensils, Wine, Flame, ChefHat, Power, Camera } from "lucide-react";

export function Amenities() {
  const getIcon = (iconName: string) => {
    const className = "w-8 h-8 md:w-12 md:h-12 text-luxury-gold mb-4 md:mb-6 stroke-[1]";
    switch (iconName) {
      case "Snowflake": return <Snowflake className={className} />;
      case "Paintbrush": return <Paintbrush className={className} />;
      case "Utensils": return <Utensils className={className} />;
      case "Wine": return <Wine className={className} />;
      case "Flame": return <Flame className={className} />;
      case "ChefHat": return <ChefHat className={className} />;
      case "Power": return <Power className={className} />;
      case "Camera": return <Camera className={className} />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-20 bg-luxury-dark relative border-t border-luxury-gold/10">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            label="Amenities"
            title="Everything You Need For A Perfect Celebration"
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {siteConfig.amenities.map((amenity, i) => (
              <div
                key={i}
                className="bg-luxury-maroon/50 p-4 sm:p-6 md:p-8 border border-luxury-gold/20 flex flex-col items-center text-center group hover:bg-luxury-maroon transition-colors duration-500"
              >
                {getIcon(amenity.icon)}
                <h3 className="font-display text-sm sm:text-base md:text-xl text-luxury-cream">
                  {amenity.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

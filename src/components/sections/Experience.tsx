import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../data/config";

export function Experience() {
  const experiences = [
    { label: "Capacity", value: "100-500", suffix: "guests" },
    { label: "Mocktail Counter", value: "Inbuilt", suffix: "Premium" },
    { label: "Sound System", value: "Audio", suffix: "Available" },
    { label: "Outdoor Parking", value: "Ample", suffix: "Space" },
    { label: "Decor Themes", value: "Premium", suffix: "Customizable" },
  ];

  return (
    <section className="bg-luxury-dark relative overflow-hidden border-luxury-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[800px]">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px]">
          <img
            alt="The Raj Mahaal Experience"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={siteConfig.images.experience}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 to-transparent lg:bg-gradient-to-l lg:from-luxury-dark lg:to-transparent/20"></div>
        </div>
        
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24 relative z-10 bg-gradient-to-b from-luxury-dark to-luxury-maroon/20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              label="The Raj Mahaal Experience"
              title="Everything Your Day Needs, Under One Roof"
              description="From an AC hall that seats 500 guests to a dedicated tandoor kitchen, premium buffet counters, and ample parking. We handle the infrastructure. You handle the memories."
              align="left"
            />
            
            <div className="flex flex-col relative mt-6 md:mt-8 gap-6 md:gap-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-luxury-gold via-luxury-gold/30 to-luxury-gold/10"></div>
              
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start md:items-center gap-5 md:gap-8 relative z-10">
                  <div className={`w-6 h-6 mt-1 md:mt-0 shrink-0 rounded-full bg-luxury-dark border-2 ${i === 0 ? 'border-luxury-gold flex items-center justify-center' : 'border-luxury-gold/30'}`}>
                    {i === 0 && <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] md:text-[12px] font-semibold text-luxury-gold tracking-widest uppercase mb-1">
                      {exp.label}
                    </span>
                    <span className="font-display text-luxury-cream text-xl md:text-2xl">
                      <span className="text-luxury-gold">{exp.value}</span> <span className="text-luxury-cream/90">{exp.suffix}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 border border-luxury-gold/30 p-8 text-center bg-luxury-gold/5">
              <p className="text-luxury-cream/60 text-sm tracking-widest uppercase mb-2 font-semibold">
                Packages Starting From
              </p>
              <p className="font-display text-luxury-gold text-4xl">
                {siteConfig.pricing.startingFrom}
              </p>
              <p className="text-luxury-cream/60 text-sm mt-3 mb-6">
                {siteConfig.pricing.note}
              </p>
              <a 
                href="#contact" 
                className="inline-block border border-luxury-gold text-luxury-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-dark transition-colors"
              >
                {siteConfig.pricing.ctaText}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

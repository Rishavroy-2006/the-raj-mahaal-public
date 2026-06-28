import { motion } from "motion/react";
import { siteConfig } from "../data/config";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Lightbox } from "../components/ui/Lightbox";
import { Helmet } from "react-helmet-async";

export default function FullGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate images for demo purposes
  const demoImages = [
    ...siteConfig.gallery,
    ...siteConfig.gallery,
    ...siteConfig.gallery,
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Gallery | {siteConfig.name}</title>
        <meta name="description" content="Explore our beautiful banquet halls, wedding setups, and events gallery at The Raj Mahaal." />
      </Helmet>
      <main className="flex-grow pt-24 bg-luxury-dark min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <Link 
              to="/"
              className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-light transition-colors uppercase tracking-widest text-xs font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-luxury-gold"></div>
              <span className="text-[13px] font-semibold text-luxury-gold tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-luxury-cream text-4xl sm:text-5xl md:text-6xl mb-6">
              Our Full Gallery
            </h1>
            <p className="text-luxury-cream/60 max-w-2xl mx-auto font-light text-base md:text-lg">
              Explore the exquisite moments and meticulously designed spaces that make every event at The Raj Mahaal unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-square border border-luxury-gold/10 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-luxury-gold text-xs tracking-widest uppercase font-semibold mb-2">
                      The Raj Mahaal
                    </p>
                    <p className="text-white text-lg font-display">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Lightbox
        images={demoImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setCurrentIndex}
      />
    </main>
    </>
  );
}

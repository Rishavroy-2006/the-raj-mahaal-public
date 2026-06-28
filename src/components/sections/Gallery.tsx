import { m } from "motion/react";
import { siteConfig } from "../../data/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Lightbox } from "../ui/Lightbox";
import { useGalleryData } from "../../hooks/useGalleryData";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, loading, error } = useGalleryData();

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Only show first 3 images on homepage
  const displayImages = images.slice(0, 3);
  
  // Assign masonry grid spans to the first 3 dynamically
  const styledImages = displayImages.map((img, i) => {
    let colSpan = "md:col-span-4";
    let rowSpan = "md:row-span-1";
    
    if (i === 0) {
      colSpan = "md:col-span-8";
      rowSpan = "md:row-span-3";
    } else if (i === 1) {
      rowSpan = "md:row-span-2";
    }

    return { ...img, colSpan, rowSpan };
  });

  return (
    <section className="py-16 md:py-[120px] px-6 md:px-20 bg-[#150f0e] border-y border-luxury-gold/10" id="gallery">
      <div className="max-w-[1440px] mx-auto">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-luxury-gold/50"></div>
              <span className="text-[13px] font-semibold text-luxury-gold tracking-widest uppercase">
                Portfolio
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-luxury-gold/50"></div>
            </div>
            <h2 className="font-display text-luxury-cream text-3xl sm:text-4xl md:text-6xl mb-6">
              A Glimpse of Grandeur
            </h2>
            <p className="text-luxury-cream/60 max-w-2xl mx-auto font-light text-base md:text-lg">
              Curated moments of visual inspiration from our most prestigious events.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-400">
              <p>Failed to load gallery images.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
              {styledImages.map((image, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.alt} in fullscreen`}
                  className={`group relative overflow-hidden border border-luxury-gold/20 bg-luxury-dark ${image.colSpan} ${image.rowSpan} cursor-pointer`}
                  onClick={() => openLightbox(i)}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/gallery/gallery-1.jpg'; // fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
                  {image.caption && (
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[80%]">
                      <span className="text-[12px] font-semibold text-luxury-gold bg-luxury-dark/90 backdrop-blur-sm px-4 py-2 tracking-widest border border-luxury-gold/30 uppercase line-clamp-2">
                        {image.caption}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block text-[13px] font-semibold text-luxury-gold border border-luxury-gold px-10 py-4 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-500 tracking-widest uppercase"
            >
              View Full Gallery
            </Link>
          </div>
        </m.div>
      </div>

      <Lightbox
        images={styledImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setCurrentIndex}
      />
    </section>
  );
}

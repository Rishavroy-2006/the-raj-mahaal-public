import { m, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: { src: string; alt: string; caption?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#150f0e]/85 backdrop-blur-md flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 text-white/70">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold">Gallery</span>
            <button
              onClick={onClose}
              className="hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
            className="absolute hidden md:block left-6 text-white/50 hover:text-white transition-colors z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={() => onIndexChange((currentIndex + 1) % images.length)}
            className="absolute hidden md:block right-6 text-white/50 hover:text-white transition-colors z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 md:px-24 h-full py-20 md:py-24">
            <div className="flex-1 min-h-0 w-full flex items-center justify-center mb-6 md:mb-8">
              <AnimatePresence mode="wait">
                <m.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              </AnimatePresence>
            </div>

            <div className="shrink-0 text-center flex flex-col items-center gap-4 md:gap-4 px-4">
              <div className="text-white text-sm md:text-lg font-light tracking-wide flex flex-col md:flex-row items-center gap-1 md:gap-4">
                <span className="hidden md:inline">The Raj Mahaal</span>
                <span className="hidden md:inline text-white/30">|</span>
                <span className="text-center">{images[currentIndex].caption || images[currentIndex].alt}</span>
              </div>
              <div className="flex items-center gap-6 mt-2 md:mt-0">
                <button
                  onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
                  className="md:hidden text-white/50 hover:text-white transition-colors p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-white/50 text-xs tracking-widest font-semibold">
                  {currentIndex + 1} / {images.length}
                </div>
                <button
                  onClick={() => onIndexChange((currentIndex + 1) % images.length)}
                  className="md:hidden text-white/50 hover:text-white transition-colors p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

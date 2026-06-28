import { useState, useRef } from "react";
import { m } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import { Play } from "lucide-react";
import { siteConfig } from "../../data/config";

export function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      setIsLoading(true);
      setHasError(false);
      videoRef.current.play().catch(() => {
        setHasError(true);
        setIsLoading(false);
        setIsPlaying(false);
      });
    }
  };

  return (
    <section className="py-16 md:py-[120px] px-6 md:px-20 bg-luxury-maroon relative border-y border-luxury-gold/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-luxury-maroon to-luxury-maroon"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 text-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            label="Cinematic Showcase"
            title="Experience The Grandeur"
            description="Take a virtual tour through THE RAJ MAHAAL and discover the perfect setting for unforgettable celebrations."
            align="center"
          />

          <div className="relative max-w-5xl mx-auto aspect-video border border-luxury-gold/30 p-2 lg:p-4 bg-luxury-dark shadow-2xl" style={{ borderTopLeftRadius: '50% 20%', borderTopRightRadius: '50% 20%' }}>
            <div className="absolute inset-0 m-2 lg:m-4 border border-luxury-gold/20 pointer-events-none z-20"></div>
            
            <div className="relative w-full h-full overflow-hidden bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
              {hasError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 z-30">
                  <p className="mb-4">Oops! The video failed to load.</p>
                  <button 
                    onClick={handlePlayClick} 
                    className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-colors duration-300"
                  >
                    Retry
                  </button>
                </div>
              ) : null}

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={siteConfig.images.videoTour}
                preload="metadata"
                playsInline
                controls={isPlaying}
                onPlaying={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onError={() => {
                  setHasError(true);
                  setIsLoading(false);
                  setIsPlaying(false);
                }}
              >
                <source src="https://vki9f3xzcckccnbi.public.blob.vercel-storage.com/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isPlaying && !hasError && (
                <div 
                  className="absolute inset-0 group cursor-pointer z-30 bg-luxury-dark"
                  onClick={handlePlayClick}
                >
                  <img
                    alt="Video Thumbnail"
                    src={siteConfig.images.videoTour}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-luxury-gold bg-luxury-dark/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                      <Play size={40} className="text-luxury-gold group-hover:text-luxury-dark transition-colors duration-500 ml-2" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}

              {isLoading && isPlaying && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-40 pointer-events-none">
                  <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

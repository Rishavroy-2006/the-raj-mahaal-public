import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { siteConfig } from "../data/config";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";

const VideoTour = lazy(() => import("../components/sections/VideoTour").then(m => ({ default: m.VideoTour })));
const Features = lazy(() => import("../components/sections/Features").then(m => ({ default: m.Features })));
const Facilities = lazy(() => import("../components/sections/Facilities").then(m => ({ default: m.Facilities })));
const Gallery = lazy(() => import("../components/sections/Gallery").then(m => ({ default: m.Gallery })));
const Statistics = lazy(() => import("../components/sections/Statistics").then(m => ({ default: m.Statistics })));
const Events = lazy(() => import("../components/sections/Events").then(m => ({ default: m.Events })));
const Amenities = lazy(() => import("../components/sections/Amenities").then(m => ({ default: m.Amenities })));
const Contact = lazy(() => import("../components/sections/Contact").then(m => ({ default: m.Contact })));

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.primaryPhone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sulekhar More Sodepur",
      "addressLocality": "Natagarh",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "image": siteConfig.gallery[0].src
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Royal Banquet Hall in Sodepur</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:title" content={`${siteConfig.name} | Royal Banquet Hall in Sodepur`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.gallery[0].src} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <main className="flex-grow w-full overflow-hidden">
        <Hero />
        <Experience />
        <Suspense fallback={<div className="py-24" />}>
          <VideoTour />
          <Features />
          <Facilities />
          <Gallery />
          <section className="py-16 text-center bg-luxury-dark border-y border-luxury-gold/10 relative z-10">
            <p className="font-display text-luxury-cream text-2xl md:text-3xl mb-6">
              Love what you see?
            </p>
            <a href="#contact"
               className="bg-luxury-gold text-luxury-dark text-sm font-semibold px-10 py-4 hover:bg-luxury-gold-light transition-colors uppercase tracking-[.2em] inline-block">
              Check Availability
            </a>
          </section>
          <Statistics />
          <Events />
          <Amenities />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

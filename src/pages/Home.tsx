import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { siteConfig } from "../data/config";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { LazySection } from "../components/ui/LazySection";

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
    "name": "The Raj Mahaal",
    "description": "Sodepur's premier fully air-conditioned banquet hall for weddings, receptions, engagements, birthdays, and corporate events. Capacity up to 500 guests.",
    "url": "https://therajmahaal.vercel.app/",
    "telephone": "+91-9331027787",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 07:00-02:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sulekhar More, Sodepur",
      "addressLocality": "Natagarh",
      "addressRegion": "West Bengal",
      "postalCode": "700113",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.6991366",
      "longitude": "88.3944435"
    },
    "hasMap": "https://maps.app.goo.gl/L9gCVA2UdwhLbScC6",
    "sameAs": [
      "https://www.facebook.com/people/The-Raj-Mahaal/61586335487117/",
      "https://www.instagram.com/therajmahaal/",
      "https://maps.app.goo.gl/L9gCVA2UdwhLbScC6"
    ],
    "image": "https://therajmahaal.vercel.app/images/gallery/gallery-1.jpg",
    "maximumAttendeeCapacity": 500,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Generator Backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Tandoor Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Mocktail Counter", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Decorated Stage", "value": true }
    ],
    "event": [
      { "@type": "Event", "name": "Wedding Ceremonies" },
      { "@type": "Event", "name": "Receptions" },
      { "@type": "Event", "name": "Engagements" },
      { "@type": "Event", "name": "Corporate Events" },
      { "@type": "Event", "name": "Birthday Parties" }
    ]
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
          <LazySection minHeight="50vh">
            <VideoTour />
          </LazySection>
          <LazySection minHeight="50vh">
            <Features />
          </LazySection>
          <LazySection minHeight="100vh">
            <Facilities />
          </LazySection>
          <LazySection minHeight="100vh">
            <Gallery />
          </LazySection>
          <section className="py-16 text-center bg-luxury-dark border-y border-luxury-gold/10 relative z-10">
            <p className="font-display text-luxury-cream text-2xl md:text-3xl mb-6">
              Love what you see?
            </p>
            <a href="#contact"
               className="bg-luxury-gold text-luxury-dark text-sm font-semibold px-10 py-4 hover:bg-luxury-gold-light transition-colors uppercase tracking-[.2em] inline-block">
              Check Availability
            </a>
          </section>
          <LazySection minHeight="50vh">
            <Statistics />
          </LazySection>
          <LazySection minHeight="50vh">
            <Events />
          </LazySection>
          <LazySection minHeight="50vh">
            <Amenities />
          </LazySection>
          <LazySection minHeight="100vh">
            <Contact />
          </LazySection>
        </Suspense>
      </main>
    </>
  );
}

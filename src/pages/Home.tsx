import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteConfig } from "../data/config";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { VideoTour } from "../components/sections/VideoTour";
import { Features } from "../components/sections/Features";
import { Facilities } from "../components/sections/Facilities";
import { Gallery } from "../components/sections/Gallery";
import { Statistics } from "../components/sections/Statistics";
import { Events } from "../components/sections/Events";
import { Amenities } from "../components/sections/Amenities";
import { Contact } from "../components/sections/Contact";

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
        <meta property="og:image" content={siteConfig.gallery.fallbackImages[0].src} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <main className="flex-grow w-full overflow-hidden">
        <Hero />
        <Experience />
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
      </main>
    </>
  );
}

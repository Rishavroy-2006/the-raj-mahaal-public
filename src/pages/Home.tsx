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
        <VideoTour />
        <Features />
        <Facilities />
        <Gallery />
        <Statistics />
        <Events />
        <Amenities />
        <Contact />
      </main>
    </>
  );
}

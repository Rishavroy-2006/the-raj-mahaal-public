/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider, Helmet } from "react-helmet-async";
import { LazyMotion, domAnimation } from "motion/react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";

const RulesAndRegulations = lazy(() => import("./pages/RulesAndRegulations"));
const FullGallery = lazy(() => import("./pages/FullGallery"));

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>The Raj Mahaal - Royal Banquet Hall</title>
      </Helmet>
      <LazyMotion features={domAnimation} strict>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <Suspense fallback={<div className="flex-grow flex items-center justify-center bg-luxury-dark min-h-[50vh]"><div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<RulesAndRegulations />} />
              <Route path="/gallery" element={<FullGallery />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </div>
        <Analytics />
      </LazyMotion>
    </HelmetProvider>
  );
}

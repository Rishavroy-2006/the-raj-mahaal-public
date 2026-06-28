import { useState, useEffect } from "react";
import { siteConfig } from "../../data/config";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { name: "Gallery", href: "/#gallery" },
    { name: "Events", href: "/#events" },
    { name: "Facilities", href: "/#facilities" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b border-luxury-gold/20 transition-all duration-500",
        isScrolled
          ? "bg-luxury-dark/95 backdrop-blur-md shadow-lg py-0"
          : "bg-luxury-dark/90 backdrop-blur-md py-2"
      )}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 xl:px-20 py-4 max-w-[1440px] mx-auto">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
          className="font-display text-lg sm:text-xl md:text-2xl xl:text-3xl text-luxury-gold tracking-widest uppercase"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-12 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "text-[11px] xl:text-[13px] font-semibold tracking-[0.15em] uppercase transition-all duration-300",
                  "text-luxury-cream/70 hover:text-luxury-gold"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
          <a
            href={`tel:${siteConfig.contact.primaryPhone}`}
            className="text-[11px] xl:text-[13px] tracking-[0.15em] font-semibold text-luxury-gold border border-luxury-gold/50 px-4 xl:px-8 py-2 xl:py-3 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-500 uppercase"
          >
            Call Us
          </a>
          <Link
            to="/#contact"
            className="text-[11px] xl:text-[13px] tracking-[0.15em] font-semibold bg-luxury-gold text-luxury-dark px-4 xl:px-8 py-2 xl:py-3 hover:bg-luxury-gold-light transition-all duration-500 uppercase"
          >
            Check Availability
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-luxury-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-luxury-dark border-t border-luxury-gold/20 px-6 py-6 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm font-semibold tracking-widest uppercase text-luxury-cream/80 hover:text-luxury-gold block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 pt-4 border-t border-luxury-gold/10">
             <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="text-center text-[13px] tracking-[0.15em] font-semibold text-luxury-gold border border-luxury-gold/50 px-8 py-3 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-500 uppercase"
            >
              Call Us
            </a>
            <Link
              to="/#contact"
              className="text-center text-[13px] tracking-[0.15em] font-semibold bg-luxury-gold text-luxury-dark px-8 py-3 hover:bg-luxury-gold-light transition-all duration-500 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Check Availability
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

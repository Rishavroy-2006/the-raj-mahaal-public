import { siteConfig } from "../../data/config";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a0706] w-full border-t border-luxury-gold/20 pb-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-6 md:px-20 max-w-[1440px] mx-auto mb-12">
        {/* Brand / Logo */}
        <div className="md:col-span-4 flex flex-col items-start">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-3xl text-luxury-gold mb-6 tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </Link>
          <p className="text-luxury-cream/60 mb-8 max-w-sm leading-relaxed font-light">
            {siteConfig.description}
          </p>
        </div>

        {/* Contact / Location */}
        <div className="md:col-span-5 flex flex-col items-start md:pl-12">
          <h4 className="text-[13px] font-semibold text-luxury-gold mb-8 uppercase tracking-[0.2em]">
            Location & Contact
          </h4>
          <ul className="space-y-6 text-luxury-cream/70 font-light">
            <li className="flex items-start gap-4">
              <MapPin className="text-luxury-gold mt-1 shrink-0" size={20} />
              <a href={siteConfig.contact.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors leading-relaxed">
                {siteConfig.contact.address.split(", ").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 1 && <br />}
                    {i !== 1 && i !== siteConfig.contact.address.split(", ").length - 1 && ", "}
                  </span>
                ))}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-luxury-gold shrink-0" size={20} />
              <a
                href={`tel:${siteConfig.contact.primaryPhone}`}
                className="hover:text-luxury-gold transition-colors text-xl font-display tracking-wider"
              >
                {siteConfig.contact.primaryPhone}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:col-span-3 flex flex-col items-start">
          <h4 className="text-[13px] font-semibold text-luxury-gold mb-8 uppercase tracking-[0.2em]">
            Connect
          </h4>
          <ul className="space-y-6 text-luxury-cream/70 font-light">
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-luxury-gold transition-colors group"
              >
                <Facebook size={18} className="text-luxury-gold/70 group-hover:text-luxury-gold transition-colors shrink-0" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-luxury-gold transition-colors group"
              >
                <Instagram size={18} className="text-luxury-gold/70 group-hover:text-luxury-gold transition-colors shrink-0" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-luxury-gold transition-colors group"
              >
                <MapPin size={18} className="text-luxury-gold/70 group-hover:text-luxury-gold transition-colors shrink-0" />
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-luxury-gold/10 pt-8 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-4">
        <p className="text-sm text-luxury-cream/40 tracking-wider">
          &copy; {new Date().getFullYear()} {siteConfig.name}. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <Link 
            to="/rules"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[11px] sm:text-xs text-luxury-gold font-semibold hover:text-luxury-dark hover:bg-luxury-gold border border-luxury-gold/50 px-4 py-2 transition-all duration-300 uppercase tracking-widest"
          >
            Venue Guidelines
          </Link>
        </div>
      </div>
    </footer>
  );
}

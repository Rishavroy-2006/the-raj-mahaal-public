import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/config";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Us on WhatsApp"
        className="flex items-center justify-center bg-luxury-gold text-luxury-dark rounded-full h-16 w-16 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-110 transition-transform duration-500 group relative"
      >
        <MessageCircle size={32} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-6 bg-luxury-dark px-6 py-4 rounded border border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none flex flex-col items-end shadow-2xl">
          <span className="font-display text-luxury-gold text-lg mb-1">
            Contact Us
          </span>
          <span className="text-[12px] font-semibold text-luxury-cream/70 tracking-widest uppercase">
            Private Chat
          </span>
        </div>
      </a>
    </div>
  );
}

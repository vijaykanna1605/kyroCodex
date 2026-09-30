import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Send } from "lucide-react";
import { defaultWhatsappMessage, whatsappLink } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showEnquiry = pathname !== "/contact";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            type="button"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-strong text-slate-300 transition hover:text-white hover:border-electric-400/50"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {showEnquiry && (
        <Link
          to="/contact"
          className="group hidden h-11 items-center gap-2 rounded-full glass-strong pl-4 pr-4 text-sm font-medium text-slate-200 transition hover:border-electric-400/50 hover:text-white sm:flex"
        >
          <Send className="h-4 w-4 text-electric-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          Start an enquiry
        </Link>
      )}

      <a
        href={whatsappLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink-950 shadow-[0_16px_40px_-12px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.4s]" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { navigation, defaultWhatsappMessage, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
              scrolled ? "glass-strong h-16 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]" : "h-16 bg-transparent",
            )}
          >
            <Logo size="md" />

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMenu(item.label)}
                    onMouseLeave={() => setMenu(null)}
                    onFocus={() => setMenu(item.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenu(null);
                    }}
                  >
                    <NavLink
                      to={item.to}
                      aria-haspopup="menu"
                      aria-expanded={menu === item.label}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                          isActive || location.pathname.startsWith("/plans")
                            ? "text-white"
                            : "text-slate-400 hover:text-white",
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 opacity-60 transition-transform duration-300", menu === item.label && "rotate-180")}
                      />
                    </NavLink>
                    <AnimatePresence>
                      {menu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="w-64 rounded-2xl glass-strong p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]" role="menu">
                            {item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                role="menuitem"
                                className="block rounded-xl px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/6 hover:text-white focus-visible:bg-white/6 focus-visible:text-white focus-visible:outline-none"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-white" : "text-slate-400 hover:text-white",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-electric-400 shadow-[0_0_10px_rgba(79,133,255,1)]"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href={whatsappLink(defaultWhatsappMessage)}
                variant="outline"
                size="sm"
                icon={<MessageCircle />}
                className="hidden sm:inline-flex"
              >
                Chat on WhatsApp
              </Button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/5 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6 sm:px-8">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8" aria-label="Mobile">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 font-display text-3xl font-semibold tracking-tight transition-colors",
                        isActive ? "text-white" : "text-slate-500 hover:text-white",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="mb-3 flex flex-wrap gap-2 pl-1">
                      {item.children.slice(1).map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:border-electric-400/50 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="px-5 pb-10 sm:px-8">
              <Button href={whatsappLink(defaultWhatsappMessage)} variant="whatsapp" size="lg" fullWidth icon={<MessageCircle />}>
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

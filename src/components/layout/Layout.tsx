import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // wait a frame for the route to render
      const t = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 60);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

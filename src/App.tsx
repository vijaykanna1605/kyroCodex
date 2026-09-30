import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { KSymbol } from "@/components/brand/KSymbol";

const Home = lazy(() => import("@/pages/Home"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const WebDevelopment = lazy(() => import("@/pages/WebDevelopment"));
const ApplicationDevelopment = lazy(() => import("@/pages/ApplicationDevelopment"));
const WebPlans = lazy(() => import("@/pages/WebPlans"));
const ApplicationPlans = lazy(() => import("@/pages/ApplicationPlans"));
const WhyKyrocodex = lazy(() => import("@/pages/WhyKyrocodex"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Work = lazy(() => import("@/pages/Work"));
const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Privacy = lazy(() => import("@/pages/Legal").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("@/pages/Legal").then((m) => ({ default: m.Terms })));

function PageLoader() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center">
      <KSymbol className="h-12 w-12 animate-pulse-soft" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/solutions"
            element={
              <Suspense fallback={<PageLoader />}>
                <Solutions />
              </Suspense>
            }
          />
          <Route
            path="/solutions/web-development"
            element={
              <Suspense fallback={<PageLoader />}>
                <WebDevelopment />
              </Suspense>
            }
          />
          <Route
            path="/solutions/application-development"
            element={
              <Suspense fallback={<PageLoader />}>
                <ApplicationDevelopment />
              </Suspense>
            }
          />
          <Route
            path="/plans/web"
            element={
              <Suspense fallback={<PageLoader />}>
                <WebPlans />
              </Suspense>
            }
          />
          <Route
            path="/plans/application"
            element={
              <Suspense fallback={<PageLoader />}>
                <ApplicationPlans />
              </Suspense>
            }
          />
          <Route
            path="/why-kyrocodex"
            element={
              <Suspense fallback={<PageLoader />}>
                <WhyKyrocodex />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/work"
            element={
              <Suspense fallback={<PageLoader />}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <CaseStudy />
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<PageLoader />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<PageLoader />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

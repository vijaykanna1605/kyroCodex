import { useSEO } from "@/hooks/useSEO";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { WhyKyrocodex } from "@/components/home/WhyKyrocodex";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Industries } from "@/components/home/Industries";
import { ProcessSection } from "@/components/ui/ProcessSteps";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  useSEO("", undefined);
  return (
    <>
      <Hero />
      <TrustStrip />
      <SolutionsGrid />
      <WhyKyrocodex />
      <ProductShowcase />
      <ProcessSection variant="timeline" />
      <Industries />
      <CTASection />
    </>
  );
}

import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { BentoFeatures } from "@/components/landing/BentoFeatures";
import { Pricing } from "@/components/landing/Pricing";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { CookieBanner } from "@/components/landing/CookieBanner";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <SocialProof />
      <BentoFeatures />
      <Pricing />
      <PillarsSection />
      <Testimonials />
      <Footer />
      <CookieBanner />
    </main>
  );
}

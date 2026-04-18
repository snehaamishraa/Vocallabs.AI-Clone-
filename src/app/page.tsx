import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { VoiceDemo } from "@/components/landing/VoiceDemo";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <Features />
      <VoiceDemo />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}

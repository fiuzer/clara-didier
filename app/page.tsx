import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { CTASection } from "@/components/sections/CTASection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <AboutSection />
      <AudienceSection />
      <BenefitsSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTASection />
      <HowItWorksSection />
      <CredibilitySection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

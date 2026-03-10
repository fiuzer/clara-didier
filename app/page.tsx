import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { CTASection } from "@/components/sections/CTASection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <BenefitsSection />
      <DifferentialsSection />
      <CredibilitySection />
      <CTASection />
      <ContactSection />
    </>
  );
}

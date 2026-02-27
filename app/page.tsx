import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { PainPointsSection } from "@/components/landing/pain-points-section"
import { TokuchouSection } from "@/components/landing/tokuchou-section"
import { SolutionsSection } from "@/components/landing/solutions-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { QASection } from "@/components/landing/qa-section"
import { CTASection } from "@/components/landing/cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { Chatbot } from "@/components/landing/chatbot"
import { ScrollToTop } from "@/components/landing/scroll-to-top"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        <HeroSection />
        
        <PainPointsSection />
        
        <TokuchouSection />
        
        <SolutionsSection />
        
        <FeaturesSection />
        
        <WhyUsSection />
        
        <QASection />
        
        <CTASection />
        
        <ContactSection />
        
        <Footer />
      </div>
      
      <Chatbot />
      <ScrollToTop />
    </main>
  )
}

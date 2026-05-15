import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import AreaCards from "@/components/AreaCards";
import Services from "@/components/Services";
import About from "@/components/About";
import TherapySpanish from "@/components/TherapySpanish";
import TalleresSection from "@/components/TalleresSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TestimonioCTA from "@/components/TestimonioCTA";
import FAQ from "@/components/FAQ";
import CalendlySection from "@/components/CalendlySection";
import FinalCTA from "@/components/FinalCTA";
import AvisoEtico from "@/components/AvisoEtico";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <AreaCards />
        <Services />
        <About />
        <TherapySpanish />
        <TalleresSection />
        <HowItWorks />
        <Testimonials />
        <TestimonioCTA />
        <FAQ />
        <CalendlySection bg="bg-[#fafaf7]" />
        <FinalCTA />
        <AvisoEtico />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

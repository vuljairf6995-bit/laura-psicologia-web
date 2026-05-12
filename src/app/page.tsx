import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import AreaCards from "@/components/AreaCards";
import Services from "@/components/Services";
import About from "@/components/About";
import TherapySpanish from "@/components/TherapySpanish";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

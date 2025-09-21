import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ToolsSection } from "./components/ToolsSection";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Testimonials } from "./components/Testimonials";
import { AboutSection } from "./components/AboutSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer-motion";
export function App() {
  return (
    <AnimatePresence>
      <div className="font-sans bg-gray-50 text-gray-900 w-full">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseUs />
          <ProjectShowcase />
          <Testimonials />
          <ToolsSection />
          <AboutSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

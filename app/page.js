import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}

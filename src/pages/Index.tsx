import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      "Laudo Técnico SP | Vistoria Técnica | ART Engenharia | ÍTRIO Engenharia";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Laudo técnico SP, vistoria técnica, ART engenharia e adequação NR12/NR13. ÍTRIO Engenharia oferece laudos técnicos, vistorias técnicas, ART, PMOC e adequação de máquinas em São Paulo e todo Brasil. Orçamento rápido e entrega garantida."
      );
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const scrollToSection = () => {
        const hash = location.hash.replace("#", "");
        const element = document.getElementById(hash);

        if (element && element.offsetHeight > 0) {
          requestAnimationFrame(() => {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth",
            });
          });
          return true;
        }
        return false;
      };

      let attempts = 0;
      const maxAttempts = 50;

      const tryScroll = () => {
        if (!scrollToSection() && attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      setTimeout(() => {
        tryScroll();
      }, 300);
    } else if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

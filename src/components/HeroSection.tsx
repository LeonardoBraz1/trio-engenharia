import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/5511914953344?text=Olá! Gostaria de falar com um engenheiro.";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Engenheira realizando vistoria técnica em ambiente industrial"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.92 }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-5 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 section-container py-24 sm:py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6 sm:mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">
              Vistorias • Laudos Técnicos • ART
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Engenharia com <span className="text-gradient">precisão</span>,{" "}
            <br className="hidden sm:block" />
            confiança e resultados.
          </h1>

          {/* Supporting Text */}
          <p
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Vistorias, orientação em adequação, Laudos Técnicos e ART para
            garantir segurança e credibilidade ao seu negócio.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Fale com um Engenheiro
              </Button>
            </a>
            <a href="#servicos">
              <Button
                variant="heroOutline"
                size="xl"
                className="w-full sm:w-auto"
              >
                Conheça os Serviços
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap gap-6 sm:gap-8 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                100+
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">
                Laudos Emitidos
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                50+
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">
                Empresas Atendidas
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-accent">
                100%
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm">
                Conformidade
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

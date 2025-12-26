import {
  ToyBrick,
  Wind,
  Cog,
  Truck,
  HardHat,
  Gauge,
  FileCheck,
  Accessibility,
  ArrowRight,
  ArrowUpDown,
  ChefHat,
  Scale,
  UserCog,
  Car,
  FileText,
  Layers,
  Package,
  Factory,
  Flame,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 6;
  const services = [
    {
      icon: ToyBrick,
      title: "Brinquedos para Playground",
      description:
        "Vistorias, adequações e laudos de segurança para playgrounds.",
      slug: "brinquedos-playground",
    },
    {
      icon: Wind,
      title: "Ar Condicionado e PMOC",
      description: "Elaboração de PMOC, inspeções e laudos técnicos.",
      slug: "ar-condicionado-pmoc",
    },
    {
      icon: Cog,
      title: "Máquinas NR12",
      description: "Adequações, vistorias e laudos conforme NR12.",
      slug: "maquinas-nr12",
    },
    {
      icon: Truck,
      title: "NR11 e Sistemas Transportadores",
      description: "Avaliações, laudos e orientações de adequação.",
      slug: "nr11-sistemas-transportadores",
    },
    {
      icon: HardHat,
      title: "Máquinas Pesadas",
      description: "Vistorias, análises e emissão de ART.",
      slug: "maquinas-pesadas",
    },
    {
      icon: Gauge,
      title: "NR13 – Vasos de Pressão",
      description: "Laudos, inspeções e orientação completa.",
      slug: "nr13-vasos-pressao",
    },
    {
      icon: FileCheck,
      title: "Laudo Técnico e ART",
      description:
        "Compromisso com credibilidade, segurança e responsabilidade técnica.",
      slug: "laudo-tecnico-art",
    },
    {
      icon: [ArrowUpDown, Accessibility],
      title: "Elevadores e Plataformas",
      description: "Inspeções e laudos conforme normas de acessibilidade.",
      slug: "elevadores-plataformas",
    },
    {
      icon: ChefHat,
      title: "Sistemas de Exaustão para Cozinhas",
      description: "Vistorias e laudos técnicos para sistemas de exaustão.",
      slug: "exaustao-cozinhas",
    },
    {
      icon: Scale,
      title: "Perícias e Assistente Técnico",
      description: "Perícias técnicas e assistência técnica especializada.",
      slug: "pericias-assistente-tecnico",
    },
    {
      icon: UserCog,
      title: "Engenheiro RT para Empresas",
      description: "Responsável técnico para empresas e estabelecimentos.",
      slug: "engenheiro-rt-empresas",
    },
    {
      icon: Car,
      title: "Engenheiro RT para Desmanches",
      description: "Responsável técnico especializado em desmanches.",
      slug: "engenheiro-rt-desmanches",
    },
    {
      icon: FileText,
      title: "Projetos",
      description: "Elaboração de projetos técnicos de engenharia.",
      slug: "projetos",
    },
    {
      icon: Layers,
      title: "Andaimes",
      description: "Vistorias e laudos técnicos para andaimes.",
      slug: "andaimes",
    },
    {
      icon: Package,
      title: "Reclassificação de Monta",
      description: "Reclassificação técnica de monta e carga.",
      slug: "reclassificacao-monta",
    },
    {
      icon: Factory,
      title: "Exaustão Industrial e Tabacarias",
      description: "Sistemas de exaustão para indústrias e tabacarias.",
      slug: "exaustao-industrial-tabacarias",
    },
    {
      icon: Flame,
      title: "AVCB e CLCB - Vistoria do Corpo de Bombeiros",
      description: "Vistorias e laudos para AVCB e CLCB.",
      slug: "avcb-clcb-bombeiros",
    },
  ];

  const whatsappLink =
    "https://wa.me/5511914953344?text=Olá! Gostaria de saber mais sobre os serviços.";

  return (
    <section
      id="servicos"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/50"
    >
      <div className="section-container w-full">
        {/* Header */}
        <ScrollAnimation
          animation="fade-up"
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Serviços da ÍTRIO Engenharia - Soluções completas em engenharia
            mecânica
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-4 sm:px-0">
            A <strong>ÍTRIO Engenharia</strong> (ITRIO) oferece um portfólio
            completo de serviços de engenharia mecânica para garantir a
            segurança e conformidade do seu negócio. Conheça os serviços
            especializados da ÍTRIO.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {services
            .slice(0, showAll ? services.length : initialDisplayCount)
            .map((service, index) => (
              <ScrollAnimation key={index} animation="scale" delay={50 * index}>
                <Link to={`/servicos/${service.slug}`} className="block h-full">
                  <div className="group relative bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft border border-border/50 h-full flex flex-col transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-accent/5 transition-all duration-500 rounded-xl sm:rounded-2xl" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-md gap-1">
                        {Array.isArray(service.icon) ? (
                          service.icon.map((Icon, idx) => (
                            <Icon
                              key={idx}
                              className="w-7 h-7 sm:w-9 sm:h-9 text-primary group-hover:text-accent transition-all duration-500 group-hover:scale-110"
                            />
                          ))
                        ) : (
                          <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-accent transition-all duration-500 group-hover:scale-110" />
                        )}
                      </div>

                      <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="default"
                          className="w-full text-sm sm:text-base group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                        >
                          Saiba mais
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
        </div>

        {/* Ver Mais Button */}
        {!showAll && services.length > initialDisplayCount && (
          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="text-base sm:text-lg"
            >
              Ver todos os serviços
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* CTA */}
        <ScrollAnimation
          animation="fade-up"
          delay={300}
          className="text-center mt-10 sm:mt-16"
        >
          <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
            Entre outros serviços.{" "}
            <strong className="text-foreground">Consulte-nos!</strong>
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="lg" className="sm:text-base">
              Fale com um Engenheiro
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;

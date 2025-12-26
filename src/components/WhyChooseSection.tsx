import {
  Shield,
  Clock,
  Award,
  Users,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description:
        "Todos os nossos laudos e vistorias seguem rigorosamente as normas técnicas vigentes, garantindo total conformidade e segurança.",
    },
    {
      icon: Clock,
      title: "Agilidade e Eficiência",
      description:
        "Atendimento rápido e entrega dentro do prazo acordado, sem comprometer a qualidade dos nossos serviços.",
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description:
        "Engenheiros especializados com ampla experiência e certificações, garantindo excelência técnica em cada projeto.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Cada cliente é único. Desenvolvemos soluções sob medida para atender suas necessidades específicas.",
    },
    {
      icon: FileCheck,
      title: "Documentação Completa",
      description:
        "Emissão de ART, laudos técnicos detalhados e toda documentação necessária para regularização do seu negócio.",
    },
    {
      icon: CheckCircle2,
      title: "Transparência Total",
      description:
        "Comunicação clara em todas as etapas do processo, com relatórios detalhados e suporte contínuo.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="section-container">
        <ScrollAnimation
          animation="fade-up"
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Por Que Escolher a ÍTRIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Por que escolher a ÍTRIO Engenharia?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-4 sm:px-0">
            A <strong>ÍTRIO Engenharia</strong> é especialista em transformar
            desafios mecânica em soluções eficientes e seguras para o seu
            negócio. Somos uma empresa de engenharia técnica comprometida com a
            excelência.
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {benefits.map((benefit, index) => (
              <ScrollAnimation
                key={index}
                animation="slide-right"
                delay={50 * index}
              >
                <div className="relative flex items-start gap-6 sm:gap-8 p-6 sm:p-8 group hover:bg-card/50 rounded-xl transition-all duration-300">
                  {index < benefits.length - 1 && (
                    <div className="absolute left-8 sm:left-10 top-20 sm:top-24 bottom-0 w-0.5 bg-border" />
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-primary mb-2 sm:mb-3 group-hover:text-primary/80 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

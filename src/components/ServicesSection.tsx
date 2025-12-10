import { 
  Gamepad2, 
  Wind, 
  Cog, 
  Truck, 
  HardHat, 
  Gauge, 
  FileCheck, 
  Accessibility,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Brinquedos para Playground',
      description: 'Vistorias, adequações e laudos de segurança para playgrounds.',
    },
    {
      icon: Wind,
      title: 'Ar Condicionado e PMOC',
      description: 'Elaboração de PMOC, inspeções e laudos técnicos.',
    },
    {
      icon: Cog,
      title: 'Máquinas NR12',
      description: 'Adequações, vistorias e laudos conforme NR12.',
    },
    {
      icon: Truck,
      title: 'NR11 e Sistemas Transportadores',
      description: 'Avaliações, laudos e orientações de adequação.',
    },
    {
      icon: HardHat,
      title: 'Máquinas Pesadas',
      description: 'Vistorias, análises e emissão de ART.',
    },
    {
      icon: Gauge,
      title: 'NR13 – Vasos de Pressão',
      description: 'Laudos, inspeções e orientação completa.',
    },
    {
      icon: FileCheck,
      title: 'Laudo Técnico e ART',
      description: 'Compromisso com credibilidade, segurança e responsabilidade técnica.',
    },
    {
      icon: Accessibility,
      title: 'Elevadores e Plataformas',
      description: 'Inspeções e laudos conforme normas de acessibilidade.',
    },
  ];

  const whatsappLink = 'https://wa.me/5511914953344?text=Olá! Gostaria de saber mais sobre os serviços.';

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="section-container">
        {/* Header */}
        <ScrollAnimation animation="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Soluções completas em engenharia técnica
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-4 sm:px-0">
            Oferecemos um portfólio completo de serviços para garantir a segurança 
            e conformidade do seu negócio.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollAnimation
              key={index}
              animation="scale"
              delay={100 * index}
            >
              <div className="group bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-soft card-hover border border-border/50 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up" delay={300} className="text-center mt-10 sm:mt-16">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
            Entre outros serviços. <strong className="text-foreground">Consulte-nos!</strong>
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

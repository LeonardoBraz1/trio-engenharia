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
    <section id="servicos" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Soluções completas em engenharia técnica
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos um portfólio completo de serviços para garantir a segurança 
            e conformidade do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft card-hover border border-border/50 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Entre outros serviços. <strong className="text-foreground">Consulte-nos!</strong>
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="xl">
              Fale com um Engenheiro
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

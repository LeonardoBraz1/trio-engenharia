import { CheckCircle } from 'lucide-react';
import aboutImage from '@/assets/about-engineer.jpg';

const AboutSection = () => {
  const highlights = [
    'Soluções personalizadas',
    'Comunicação transparente',
    'Entrega dentro do prazo',
    'Qualidade certificada',
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left opacity-0 order-2 lg:order-1" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-float">
              <img
                src={aboutImage}
                alt="Engenheira analisando equipamentos industriais"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-card/95 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-elevated">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-heading font-bold text-lg sm:text-xl">Í</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm sm:text-base">ÍTRIO Engenharia</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Excelência em engenharia técnica</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-accent/20 rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-xl sm:rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right opacity-0 order-1 lg:order-2" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Sobre Nós
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Compromisso com a excelência em cada projeto
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <p>
                Na <strong className="text-foreground">ÍTRIO Engenharia</strong>, nossa missão vai além da engenharia — nosso compromisso é com você.
              </p>
              <p>
                Transformamos desafios em soluções eficientes, sempre com autenticidade, transparência e foco total na qualidade. Cada projeto é único, por isso dedicamos tempo e expertise para entender suas necessidades e entregar soluções personalizadas que superem expectativas.
              </p>
              <p>
                Atuamos com comunicação clara, responsabilidade e precisão, garantindo resultados confiáveis dentro do prazo. Conte conosco para transformar suas ideias em realidade com eficiência, precisão e integridade.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

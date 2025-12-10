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
    <section id="sobre" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img
                src={aboutImage}
                alt="Engenheira analisando equipamentos industriais"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-md rounded-xl p-6 shadow-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-heading font-bold text-xl">Í</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">ÍTRIO Engenharia</p>
                    <p className="text-muted-foreground text-sm">Excelência em engenharia técnica</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              Compromisso com a excelência em cada projeto
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
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
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
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

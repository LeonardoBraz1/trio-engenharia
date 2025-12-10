import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappLink = 'https://wa.me/5511914953344?text=Olá! Gostaria de solicitar um orçamento.';

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(11) 91495-3344',
      href: whatsappLink,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'thayslima@itrioengenharia.com.br',
      href: 'mailto:thayslima@itrioengenharia.com.br',
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Entre em contato conosco para tirar dúvidas, solicitar orçamentos 
              ou agendar uma visita técnica.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-float border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - CTA */}
              <div className="p-6 sm:p-10 md:p-12" style={{ background: 'var(--gradient-hero)' }}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
                      Fale diretamente com um engenheiro
                    </h3>
                    <p className="text-primary-foreground/80 mb-6 sm:mb-8 text-sm sm:text-base">
                      Resposta rápida e atendimento personalizado para suas necessidades.
                    </p>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg" className="w-full text-sm sm:text-base">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Iniciar Conversa no WhatsApp</span>
                      <span className="sm:hidden">WhatsApp</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right - Info */}
              <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-foreground mb-6 sm:mb-8">
                  Informações de Contato
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 sm:gap-4 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors text-sm sm:text-base break-all sm:break-normal">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Horário de atendimento
                  </p>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

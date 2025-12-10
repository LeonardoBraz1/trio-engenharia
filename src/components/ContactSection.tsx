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
    <section id="contato" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Entre em contato conosco para tirar dúvidas, solicitar orçamentos 
              ou agendar uma visita técnica.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-2xl shadow-float border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - CTA */}
              <div className="p-10 md:p-12" style={{ background: 'var(--gradient-hero)' }}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                      Fale diretamente com um engenheiro
                    </h3>
                    <p className="text-primary-foreground/80 mb-8">
                      Resposta rápida e atendimento personalizado para suas necessidades.
                    </p>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="xl" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      Iniciar Conversa no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right - Info */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-8">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Horário de atendimento
                  </p>
                  <p className="text-foreground font-medium">
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

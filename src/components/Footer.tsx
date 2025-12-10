import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = 'https://wa.me/5511914953344';

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Vistorias Técnicas',
    'Laudos e ART',
    'NR12 e NR13',
    'PMOC',
  ];

  return (
    <footer className="bg-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">Í</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-background leading-tight">
                  ÍTRIO
                </span>
                <span className="text-xs font-medium tracking-wider text-background/60">
                  ENGENHARIA
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Engenharia com precisão, confiança e resultados. Soluções técnicas para seu negócio.
            </p>
            <p className="text-background/50 text-xs">
              CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (11) 91495-3344
                </a>
              </li>
              <li>
                <a
                  href="mailto:thayslima@itrioengenharia.com.br"
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  thayslima@itrioengenharia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} ÍTRIO Engenharia. Todos os direitos reservados.
            </p>
            <p className="text-background/40 text-xs">
              Desenvolvido com excelência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

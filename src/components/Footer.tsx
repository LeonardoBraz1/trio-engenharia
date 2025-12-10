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
    <footer className="bg-foreground py-10 sm:py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg sm:text-xl">Í</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base sm:text-lg text-background leading-tight">
                  ÍTRIO
                </span>
                <span className="text-[10px] sm:text-xs font-medium tracking-wider text-background/60">
                  ENGENHARIA
                </span>
              </div>
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Engenharia com precisão, confiança e resultados. Soluções técnicas para seu negócio.
            </p>
            <p className="text-background/50 text-[10px] sm:text-xs">
              CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-sm sm:text-base">
              Links Rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-sm sm:text-base">
              Serviços
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/70 text-xs sm:text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-heading font-semibold text-background mb-4 sm:mb-6 text-sm sm:text-base">
              Contato
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  (11) 91495-3344
                </a>
              </li>
              <li>
                <a
                  href="mailto:thayslima@itrioengenharia.com.br"
                  className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="break-all">thayslima@itrioengenharia.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-background/50 text-xs sm:text-sm">
              © {currentYear} ÍTRIO Engenharia. Todos os direitos reservados.
            </p>
            <p className="text-background/40 text-[10px] sm:text-xs">
              Desenvolvido com excelência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

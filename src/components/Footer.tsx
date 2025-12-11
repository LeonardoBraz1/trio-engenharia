import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511914953344";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    const scrollToElement = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 120;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      } else {
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  };

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Vistorias Técnicas",
    "Laudos e ART",
    "NR12 e NR13",
    "PMOC",
  ];

  return (
    <footer className="bg-foreground py-10 sm:py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img
                src="/branco.png"
                alt="ÍTRIO Engenharia"
                className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto"
              />
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Engenharia com precisão, confiança e resultados. Soluções técnicas
              para seu negócio.
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
                    onClick={(e) => handleSmoothScroll(e, link.href)}
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
            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
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
                  <span className="break-all">
                    thayslima@itrioengenharia.com.br
                  </span>
                </a>
              </li>
            </ul>
            <div>
              <h5 className="font-heading font-semibold text-background mb-3 sm:mb-4 text-xs sm:text-sm">
                Redes Sociais
              </h5>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/people/%C3%8Dtrio-Engenharia/61572858839001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/eng.thays_lima/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
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

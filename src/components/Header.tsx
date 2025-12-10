import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappLink = 'https://wa.me/5511914953344?text=Olá! Gostaria de solicitar um orçamento.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-elevated'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg sm:text-xl">Í</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-bold text-base sm:text-lg leading-tight ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                  ÍTRIO
                </span>
                <span className={`text-[10px] sm:text-xs font-medium tracking-wider ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                  ENGENHARIA
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/98 backdrop-blur-lg rounded-b-2xl shadow-float pb-6 animate-fade-in">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" className="w-full mt-2">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

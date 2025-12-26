import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isServicePage = location.pathname.startsWith("/servicos/");
  const isBlogPage = location.pathname.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Contato", href: "#contato" },
  ] as const;

  const whatsappLink =
    "https://wa.me/5511914953344?text=Olá! Gostaria de solicitar um orçamento.";

  const shouldUseDarkColors = isScrolled || isServicePage || isBlogPage;
  const logoSource = shouldUseDarkColors
    ? `${import.meta.env.BASE_URL}azul.png`
    : `${import.meta.env.BASE_URL}branco.png`;
  const textColor = shouldUseDarkColors
    ? "text-foreground"
    : "text-primary-foreground";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (isServicePage) {
      navigate(`/${href}`);
      return;
    }

    const targetId = href.replace("#", "");

    const smoothScrollTo = (targetY: number, duration: number = 800) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      setIsMobileMenuOpen(false);
    };

    const scrollToElement = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.offsetParent !== null) {
        const headerOffset = 120;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        const targetPosition = Math.max(0, offsetPosition);

        smoothScrollTo(targetPosition);
        return true;
      }
      return false;
    };

    if (!scrollToElement()) {
      setTimeout(() => {
        scrollToElement();
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="section-container overflow-visible">
        <nav className="flex items-center justify-between h-16 sm:h-20 min-h-[64px] sm:min-h-[80px]">
          {/* Logo */}
          <a
            href={isServicePage ? `${import.meta.env.BASE_URL}` : "#inicio"}
            onClick={(e) => {
              if (isServicePage) {
                e.preventDefault();
                navigate("/");
              }
            }}
            className="flex items-center gap-2 flex-shrink-0 max-w-[60%] sm:max-w-none"
          >
            <img
              src={logoSource}
              alt="ÍTRIO Engenharia"
              className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isRoute =
                (item as any).isRoute || item.href.startsWith("/");
              const isAnchor = item.href.startsWith("#");

              if (isRoute) {
                return (
                  <button
                    key={item.label}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-medium transition-colors duration-200 hover:text-accent ${textColor}`}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <a
                  key={item.label}
                  href={
                    isServicePage || location.pathname !== "/"
                      ? `${import.meta.env.BASE_URL}${item.href}`
                      : item.href
                  }
                  onClick={(e) => {
                    if (isServicePage || location.pathname !== "/") {
                      e.preventDefault();
                      if (isAnchor) {
                        navigate(`/${item.href}`);
                      } else {
                        navigate(item.href);
                      }
                    } else {
                      handleSmoothScroll(e, item.href);
                    }
                  }}
                  className={`font-medium transition-colors duration-200 hover:text-accent ${textColor}`}
                >
                  {item.label}
                </a>
              );
            })}
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
            className="md:hidden p-2 flex-shrink-0 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? textColor : "text-white"}`}
              />
            ) : (
              <Menu className={`w-6 h-6 ${textColor}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden ${
              isScrolled ? "bg-card/98" : "bg-card/98 backdrop-blur-lg"
            } rounded-b-2xl shadow-float pb-6 animate-fade-in`}
          >
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => {
                const isRoute =
                  (item as any).isRoute || item.href.startsWith("/");
                const isAnchor = item.href.startsWith("#");
                const mobileTextColor = isScrolled ? textColor : "text-white";

                if (isRoute) {
                  return (
                    <button
                      key={item.label}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`${mobileTextColor} font-medium py-2 hover:text-accent transition-colors text-left`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={
                      isServicePage || location.pathname !== "/"
                        ? `${import.meta.env.BASE_URL}${item.href}`
                        : item.href
                    }
                    onClick={(e) => {
                      if (isServicePage || location.pathname !== "/") {
                        e.preventDefault();
                        if (isAnchor) {
                          navigate(`/${item.href}`);
                        } else {
                          navigate(item.href);
                        }
                        setIsMobileMenuOpen(false);
                      } else {
                        handleSmoothScroll(e, item.href);
                      }
                    }}
                    className={`${mobileTextColor} font-medium py-2 hover:text-accent transition-colors`}
                  >
                    {item.label}
                  </a>
                );
              })}
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

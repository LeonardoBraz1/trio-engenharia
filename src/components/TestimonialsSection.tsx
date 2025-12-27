import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getTestimonials,
  getInitials,
  getTimeAgo,
  getColorForInitials,
} from "@/data/testimonials";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const testimonials = getTestimonials();
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isPausedRef = useRef(false);
  const isUserInteractingRef = useRef(false);
  const scrollPositionRef = useRef<number | null>(null);

  const scrollTo = (direction: "left" | "right", e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const container = scrollContainerRef.current;
    if (!container) return;

    const content = scrollContentRef.current;
    if (!content) return;

    isPausedRef.current = true;
    isUserInteractingRef.current = true;

    const cards = Array.from(content.children) as HTMLElement[];
    if (cards.length === 0) return;

    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth;
    const gap = window.innerWidth >= 640 ? 16 : 12;
    const scrollAmount = cardWidth + gap;

    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newScroll: number;
    if (direction === "left") {
      newScroll = Math.max(0, currentScroll - scrollAmount);
    } else {
      newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
    }

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      scrollPositionRef.current = container.scrollLeft;
      isUserInteractingRef.current = false;
      if (!container.matches(":hover") && !isDraggingRef.current) {
        isPausedRef.current = false;
      }
    }, 600);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    // Duplicar conteúdo para scroll infinito
    const clonedContent = content.cloneNode(true) as HTMLElement;
    clonedContent.setAttribute("aria-hidden", "true");
    container.appendChild(clonedContent);

    const contentWidth = content.scrollWidth;

    const scroll = () => {
      if (!isPausedRef.current && !isUserInteractingRef.current && !isDraggingRef.current) {
        if (scrollPositionRef.current !== null) {
          scrollPosition = scrollPositionRef.current;
          scrollPositionRef.current = null;
        }
        
        scrollPosition += scrollSpeed;

        // Reset quando chegar no final
        if (scrollPosition >= contentWidth) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
        scrollLeftRef.current = scrollPosition;
      } else {
        scrollPosition = container.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Pausar ao passar o mouse ou interagir
    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      if (!isUserInteractingRef.current && !isDraggingRef.current) {
        scrollPositionRef.current = container.scrollLeft;
        isPausedRef.current = false;
      }
    };

    // Drag handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      isUserInteractingRef.current = true;
      isPausedRef.current = true;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      container.style.cursor = "grabbing";
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      container.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        container.style.cursor = "grab";
        scrollPositionRef.current = container.scrollLeft;
        // Aguardar um pouco antes de retomar scroll automático
        setTimeout(() => {
          isUserInteractingRef.current = false;
          if (!container.matches(":hover")) {
            isPausedRef.current = false;
          }
        }, 2000);
      }
    };

    // Touch handlers para mobile
    const handleTouchStart = (e: TouchEvent) => {
      isUserInteractingRef.current = true;
      isPausedRef.current = true;
      startXRef.current = e.touches[0].pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      container.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleTouchEnd = () => {
      scrollPositionRef.current = container.scrollLeft;
      isUserInteractingRef.current = false;
      setTimeout(() => {
        if (!container.matches(":hover")) {
          isPausedRef.current = false;
        }
      }, 2000);
    };

    // Wheel handler
    const handleWheel = (e: WheelEvent) => {
      isUserInteractingRef.current = true;
      isPausedRef.current = true;
      container.scrollLeft += e.deltaY;
      setTimeout(() => {
        scrollPositionRef.current = container.scrollLeft;
        isUserInteractingRef.current = false;
        if (!container.matches(":hover")) {
          isPausedRef.current = false;
        }
      }, 2000);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("wheel", handleWheel, { passive: true });

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20 w-full overflow-hidden"
    >
      <div className="section-container w-full">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Depoimentos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nossos serviços
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground ml-2">
                5.0
              </span>
              <span className="text-muted-foreground ml-2">
                ({testimonials.length} avaliações no Google)
              </span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Carrossel horizontal com scroll automático */}
        <div className="relative w-full py-4">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab select-none px-8 sm:px-12 md:px-16"
            style={{ userSelect: "none" }}
          >
            <div
              ref={scrollContentRef}
              className="flex gap-3 sm:gap-4"
              style={{ minWidth: "max-content" }}
            >
              {testimonials.map((testimonial) => {
                const initials = getInitials(testimonial.author);
                const color = getColorForInitials(testimonial.author);

                return (
                  <Card
                    key={testimonial.id}
                    className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] bg-card hover:shadow-lg transition-shadow border"
                  >
                    <div className="p-6 relative">
                      {/* Logo do Google no canto superior direito */}
                      <div className="absolute top-4 right-4">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                      </div>

                      {/* Header com foto/Iniciais e nome */}
                      <div className="flex items-center gap-3 mb-4 pr-8">
                        {testimonial.authorPhoto ? (
                          <img
                            src={testimonial.authorPhoto}
                            alt={testimonial.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm"
                            style={{ backgroundColor: color }}
                          >
                            {initials}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {getTimeAgo(testimonial.date)}
                          </p>
                        </div>
                      </div>

                      {/* Rating com estrelas e badge verificado */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Comentário */}
                      {testimonial.comment ? (
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {testimonial.comment}
                        </p>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed text-sm italic">
                          Avaliação sem comentário
                        </p>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-3 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg border-2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 pointer-events-auto"
            onClick={(e) => scrollTo("left", e)}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-background/95 backdrop-blur-sm hover:bg-background shadow-lg border-2 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 pointer-events-auto"
            onClick={(e) => scrollTo("right", e)}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <ScrollAnimation animation="fade-up" delay={0.6}>
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://www.google.com/maps/place/%C3%8Dtrio+Engenharia+-+Laudos+T%C3%A9cnicos+e+ART/@-23.1500049,-47.4968582,10z/data=!3m1!4b1!4m6!3m5!1s0x3aa2cb4eb6e200b:0x6af6831e2198d27!8m2!3d-23.1503492!4d-47.1665276!16s%2Fg%2F11x04b7nb3?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>Ver todas as avaliações no Google</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;

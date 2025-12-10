import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/5511914953344?text=Olá! Gostaria de falar com um engenheiro.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      
      {/* Tooltip - hidden on mobile */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco
      </span>

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;

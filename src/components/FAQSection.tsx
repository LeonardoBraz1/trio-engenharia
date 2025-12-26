import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto custa um laudo técnico?",
      answer:
        "O preço do laudo técnico varia conforme o tipo de serviço, complexidade e localização. Para laudo técnico de playground, máquinas NR12, NR13, elevadores, ar condicionado (PMOC) e outros serviços, oferecemos orçamento personalizado e competitivo. Entre em contato conosco para receber um orçamento sem compromisso.",
    },
    {
      question: "Quanto tempo leva para emitir um laudo técnico?",
      answer:
        "O prazo para emissão de laudo técnico depende do tipo de serviço. Geralmente, após a vistoria técnica, emitimos o laudo técnico em 5 a 10 dias úteis. Para casos urgentes, oferecemos serviço expresso. Entre em contato para conhecer os prazos específicos do seu caso.",
    },
    {
      question: "O que é necessário para fazer uma vistoria técnica?",
      answer:
        "Para realizar a vistoria técnica, precisamos de acesso ao local ou equipamento a ser vistoriado, documentação básica (quando aplicável) e agendamento prévio. Nossos engenheiros especializados realizam a vistoria técnica completa e emitem o laudo técnico com ART (Anotação de Responsabilidade Técnica).",
    },
    {
      question: "O que é ART e para que serve?",
      answer:
        "ART (Anotação de Responsabilidade Técnica) é um documento obrigatório emitido pelo CREA que comprova a responsabilidade técnica de um engenheiro sobre um serviço ou obra. A ART é necessária para laudos técnicos, projetos, vistorias técnicas e adequações. A ÍTRIO Engenharia emite ART para todos os serviços prestados.",
    },
    {
      question: "Vocês fazem adequação NR12 e NR13?",
      answer:
        "Sim! A ÍTRIO Engenharia realiza adequação completa às normas NR12 (máquinas e equipamentos) e NR13 (vasos de pressão, caldeiras e autoclaves). Oferecemos vistoria técnica, laudo técnico, projeto de adequação e orientação para conformidade total com as normas regulamentadoras.",
    },
    {
      question: "O que é PMOC? Vocês elaboram?",
      answer:
        "PMOC (Plano de Manutenção, Operação e Controle) é obrigatório para sistemas de ar condicionado e climatização. A ÍTRIO Engenharia elabora PMOC completo, incluindo vistoria técnica, laudo técnico e documentação necessária para conformidade com a legislação vigente.",
    },
    {
      question: "Como solicitar um orçamento de laudo técnico?",
      answer:
        "Para solicitar um orçamento de laudo técnico, vistoria técnica ou ART, entre em contato conosco pelo WhatsApp (11) 91495-3344 ou pelo e-mail thayslima@itrioengenharia.com.br. Basta informar o tipo de serviço desejado. A partir das informações fornecidas, será avaliada a necessidade de visita técnica ou, quando possível, o orçamento poderá ser elaborado com base nas características do seu processo, de forma personalizada.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <ScrollAnimation
          animation="fade-up"
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Dúvidas sobre laudo técnico, vistoria técnica e ART?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-4 sm:px-0">
            Encontre respostas para as principais perguntas sobre nossos
            serviços de engenharia mecânica.
          </p>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={50 * index}
              >
                <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left group hover:bg-muted/30 transition-colors"
                  >
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

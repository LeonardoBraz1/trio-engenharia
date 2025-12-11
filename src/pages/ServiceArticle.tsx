import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertCircle,
  FileText,
  Shield,
  Users,
  Building2,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServiceArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const handleBackToServices = () => {
    navigate("/#servicos");
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (service) {
      document.title = service.title;

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", service.metaDescription);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", service.keywords.join(", "));
      }
    }
  }, [service, slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
            <button
              onClick={handleBackToServices}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Voltar para serviços
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappLink = `https://wa.me/5511914953344?text=Olá! Gostaria de saber mais sobre ${service.title}`;

  const parseSectionContent = (
    content: string,
    type: string
  ): Array<{ title: string; description: string }> | string[] => {
    try {
      if (type === "services" || type === "included") {
        const items: Array<{ title: string; description: string }> = [];

        const uppercaseTitlePattern =
          /([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ\s]{4,}?):\s*/g;
        const allMatches = Array.from(content.matchAll(uppercaseTitlePattern));

        if (allMatches.length > 0) {
          for (let i = 0; i < allMatches.length; i++) {
            const match = allMatches[i];
            const title = match[1].trim();
            const startIndex = match.index! + match[0].length;
            const endIndex =
              i < allMatches.length - 1
                ? allMatches[i + 1].index!
                : content.length;
            let description = content.substring(startIndex, endIndex).trim();

            const nextUppercasePattern =
              /([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ\s]{4,}?):/;
            const nextMatch = description.match(nextUppercasePattern);
            if (nextMatch && nextMatch.index) {
              description = description.substring(0, nextMatch.index).trim();
            }

            description = description.replace(/^\s*\.\s*/, "").trim();

            if (title && description && description.length > 10) {
              items.push({
                title,
                description,
              });
            }
          }
        }

        if (items.length > 0) {
          return items;
        }

        const listPatterns = [
          /Incluímos na contratação:\s*(.+?)(?:\s+Toda|$)/is,
          /Incluímos:\s*(.+?)(?:\s+Toda|$)/is,
        ];

        for (const pattern of listPatterns) {
          const match = content.match(pattern);
          if (match && match[1]) {
            const listContent = match[1].trim();
            const semicolonSplit = listContent.split(/;\s*/);

            if (semicolonSplit.length > 1) {
              const listItems = semicolonSplit
                .map((item) => item.trim())
                .filter((item) => item.length > 10);

              for (const item of listItems) {
                const firstColon = item.indexOf(":");
                if (firstColon > 0 && firstColon < 60) {
                  const title = item.substring(0, firstColon).trim();
                  const description = item.substring(firstColon + 1).trim();
                  if (title && description) {
                    items.push({ title, description });
                  } else if (item.length > 15) {
                    items.push({
                      title: item.substring(0, 60).trim(),
                      description: item,
                    });
                  }
                } else {
                  const cleanItem = item.replace(/^[;\s]+|[;\s]+$/g, "").trim();
                  if (cleanItem.length > 15) {
                    items.push({
                      title: cleanItem.substring(0, 60).trim(),
                      description: cleanItem,
                    });
                  }
                }
              }
            }
          }
        }

        if (items.length > 0) {
          return items;
        }

        const actionVerbs = [
          "Incluímos",
          "Fornecemos",
          "Elaboramos",
          "Realizamos",
          "Oferecemos",
          "Garantimos",
          "Fazemos",
          "Executamos",
          "Emitimos",
          "Disponibilizamos",
        ];

        const colonSplit = content.split(/:\s*/);
        if (colonSplit.length > 1) {
          for (let i = 0; i < colonSplit.length - 1; i++) {
            const title = colonSplit[i].trim();
            const description = colonSplit[i + 1]
              .split(/(?<=\.)\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][A-ZÁÀÂÃÉÊÍÓÔÕÚÇ])/)[0]
              .trim();

            if (title && description && description.length > 10) {
              items.push({
                title:
                  title.length > 100 ? title.substring(0, 97) + "..." : title,
                description,
              });
            }
          }
        }

        if (items.length > 0) {
          return items;
        }

        const verbMatch = actionVerbs.find((verb) => content.startsWith(verb));
        if (verbMatch && content.includes("incluindo")) {
          const incluindoIndex = content.indexOf("incluindo");
          const baseText = content.substring(0, incluindoIndex + 9).trim();
          const listText = content.substring(incluindoIndex + 9).trim();

          const listItems = listText
            .split(/,(?=\s*[a-záàâãéêíóôõúç])/)
            .map((item) => item.trim())
            .filter((item) => item.length > 15);

          if (listItems.length > 0) {
            for (const item of listItems) {
              const cleanItem = item.replace(/[.,]$/, "").trim();
              if (cleanItem) {
                items.push({
                  title: cleanItem.substring(0, 60).trim(),
                  description: cleanItem,
                });
              }
            }
          }
        }

        if (items.length > 0) {
          return items;
        }

        let sentences = content.split(/(?<=\.)\s+(?=[A-Z][a-z])/);

        if (sentences.length === 1) {
          sentences = content.split(/(?<=\.)\s+/);
        }

        for (const sentence of sentences) {
          const trimmed = sentence.trim();
          if (trimmed.length < 15) continue;

          if (trimmed.includes(":")) {
            const [title, ...descParts] = trimmed.split(":");
            const description = descParts.join(":").trim();
            if (title.trim() && description) {
              items.push({
                title: title.trim(),
                description: description || trimmed,
              });
            }
          } else {
            const verbMatch = actionVerbs.find((verb) =>
              trimmed.startsWith(verb)
            );

            if (verbMatch) {
              const incluindoIndex = trimmed.indexOf("incluindo");
              if (incluindoIndex > 0) {
                const title = trimmed.substring(0, incluindoIndex + 9).trim();
                const description = trimmed
                  .substring(incluindoIndex + 9)
                  .trim();
                if (title && description) {
                  items.push({
                    title:
                      title.length > 80
                        ? title.substring(0, 77) + "..."
                        : title,
                    description,
                  });
                  continue;
                }
              }

              const commaCount = (trimmed.match(/,/g) || []).length;
              if (commaCount >= 3) {
                const parts = trimmed.split(/,/);
                const firstPart = parts[0].trim();
                const restParts = parts.slice(1).join(",").trim();

                if (firstPart && restParts) {
                  items.push({
                    title:
                      firstPart.length > 80
                        ? firstPart.substring(0, 77) + "..."
                        : firstPart,
                    description: restParts.replace(/^[,.\s]+/, "").trim(),
                  });
                  continue;
                }
              }

              const firstComma = trimmed.indexOf(",");
              const firstPeriod = trimmed.indexOf(".");

              const titleEnd =
                firstComma > 0 && firstComma < 100
                  ? firstComma
                  : firstPeriod > 0 && firstPeriod < 120
                  ? firstPeriod
                  : 100;

              const title = trimmed.substring(0, titleEnd).trim();
              const description = trimmed
                .substring(titleEnd)
                .replace(/^[,.\s]+/, "")
                .trim();

              if (title && description) {
                items.push({
                  title:
                    title.length > 100 ? title.substring(0, 97) + "..." : title,
                  description:
                    description || trimmed.substring(titleEnd + 1).trim(),
                });
              }
            } else {
              const firstComma = trimmed.indexOf(",");
              const firstPeriod = trimmed.indexOf(".");

              const titleEnd =
                firstComma > 0 && firstComma < 80
                  ? firstComma
                  : firstPeriod > 0 && firstPeriod < 100
                  ? firstPeriod
                  : 80;

              const title = trimmed.substring(0, titleEnd).trim();
              const description = trimmed
                .substring(titleEnd)
                .replace(/^[,.\s]+/, "")
                .trim();

              if (title && description) {
                items.push({
                  title:
                    title.length > 80 ? title.substring(0, 77) + "..." : title,
                  description: description || trimmed,
                });
              }
            }
          }
        }

        return items.length > 0
          ? items
          : [{ title: "Item", description: content }];
      }

      if (type === "benefits" || type === "importance") {
        const sentences = content
          .split(/(?<=[.!?])\s+|\.\s+/)
          .filter((s) => s.trim().length > 20 && !s.match(/^[A-Z]{2,}/))
          .map((s) => s.trim());
        return sentences.length > 0 ? sentences : [content];
      }

      if (type === "types") {
        const items: string[] = [];

        const semicolonSplit = content.split(/;\s*/);
        if (semicolonSplit.length > 1) {
          for (const item of semicolonSplit) {
            const cleaned = item
              .trim()
              .replace(/^(Atendemos|Atuamos|incluindo)\s*/i, "")
              .replace(/\s*(e|e demais|e qualquer)\s+.*$/i, "")
              .replace(/\.\s*$/, "")
              .trim();

            if (cleaned.length > 10) {
              items.push(cleaned);
            }
          }
        } else {
          const matches = content.match(
            /(?:Atendemos|Atuamos|incluindo|e demais)\s+([^.;]+)/g
          );
          if (matches) {
            matches.forEach((match) => {
              const parts = match.split(/[;,]|e demais/);
              parts.forEach((part) => {
                const cleaned = part
                  .replace(/^(Atendemos|Atuamos|incluindo|e demais)\s*/i, "")
                  .trim();
                if (
                  cleaned.length > 5 &&
                  !cleaned.match(/^(Atendemos|Atuamos|incluindo)/i)
                ) {
                  items.push(cleaned.replace(/[.;]$/, ""));
                }
              });
            });
          }

          if (items.length === 0) {
            const fallback = content.split(/[;,]|e demais/).filter((item) => {
              const cleaned = item.trim();
              return (
                cleaned.length > 5 &&
                cleaned.length < 200 &&
                !cleaned.match(/^(Atendemos|Atuamos|incluindo)/i)
              );
            });
            return fallback
              .slice(0, 12)
              .map((item) => item.trim().replace(/[.;]$/, ""));
          }
        }

        return items.slice(0, 12);
      }

      if (type === "process") {
        const steps: string[] = [];
        const stepMarkers = [
          "primeiro",
          "em seguida",
          "depois",
          "por fim",
          "finalmente",
          "também",
        ];
        let currentStep = "";

        content.split(/[.!?]\s+/).forEach((sentence) => {
          const lower = sentence.toLowerCase();
          const hasMarker = stepMarkers.some((marker) =>
            lower.includes(marker)
          );

          if (hasMarker && currentStep) {
            steps.push(currentStep.trim());
            currentStep = sentence;
          } else {
            currentStep += (currentStep ? ". " : "") + sentence;
          }
        });

        if (currentStep) steps.push(currentStep.trim());

        if (steps.length === 0) {
          return content
            .split(/[.!?]\s+/)
            .filter((s) => s.trim().length > 20)
            .slice(0, 8);
        }

        return steps;
      }

      return [content];
    } catch (error) {
      console.error("Error parsing section content:", error);
      return [content];
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="section-container">
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para serviços
          </button>

          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {service.title}
            </h1>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="max-w-5xl mx-auto">
            <Card className="mb-8 sm:mb-12 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Sobre este serviço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {service.content.introduction}
                </p>
              </CardContent>
            </Card>

            {service.content.sections.map((section, index) => {
              const isIncluded = section.title.includes("INCLUÍDO");
              const isImportance = section.title.includes("IMPORTÂNCIA");
              const isBenefits = section.title.includes("BENEFÍCIO");
              const isServices =
                section.title.includes("SERVIÇO") &&
                section.title.includes("NOSSOS");
              const isProcess = section.title.includes("PROCESSO");
              const isTypes =
                section.title.includes("TIPO") ||
                section.title.includes("EQUIPAMENTO") ||
                section.title.includes("CLIENTE") ||
                section.title.includes("SETOR");
              const isWhat =
                section.title.includes("O QUE É") ||
                section.title.includes("POR QUE");

              if (isIncluded || isServices) {
                const items =
                  section.items ||
                  (section.content
                    ? (parseSectionContent(
                        section.content,
                        isIncluded ? "included" : "services"
                      ) as Array<{ title: string; description: string }>)
                    : []);

                if (items.length === 0) return null;

                return (
                  <section key={index} className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="border-border hover:border-primary/50 transition-all hover:shadow-md"
                        >
                          <CardHeader>
                            <CardTitle className="text-base sm:text-lg flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              {item.title || "Item incluído"}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {index === 0 && service.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                        {service.images.slice(0, 2).map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg"
                          >
                            <img
                              src={image}
                              alt={`${service.title} - Imagem ${imgIndex + 1}`}
                              className="w-full h-[250px] sm:h-[300px] object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                );
              }

              if (isImportance || isBenefits) {
                let sentences: string[] = [];
                if (section.content) {
                  sentences = parseSectionContent(
                    section.content,
                    isImportance ? "importance" : "benefits"
                  ) as string[];
                } else if (section.items) {
                  sentences = section.items.map(
                    (item) => `${item.title}: ${item.description}`
                  );
                }

                if (sentences.length === 0) return null;

                return (
                  <section key={index} className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                      {isImportance ? (
                        <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                      ) : (
                        <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      )}
                      {section.title}
                    </h2>
                    <div
                      className={`bg-muted/30 rounded-lg p-6 border-l-4 ${
                        isImportance ? "border-l-accent" : "border-l-primary"
                      }`}
                    >
                      <ul className="space-y-3">
                        {sentences.map((sentence, sentIndex) => (
                          <li
                            key={sentIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              className={`w-5 h-5 ${
                                isImportance ? "text-accent" : "text-primary"
                              } mt-0.5 flex-shrink-0`}
                            />
                            <span className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                              {sentence}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                );
              }

              if (isTypes) {
                let items: Array<{
                  title?: string;
                  description?: string;
                  text?: string;
                }> = [];
                if (section.items && Array.isArray(section.items)) {
                  items = section.items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    text: item.description || item.title || "",
                  }));
                } else if (section.content) {
                  const parsedItems = parseSectionContent(
                    section.content,
                    "types"
                  ) as string[];
                  items = parsedItems.map((text) => ({ text }));
                }

                if (items.length === 0) return null;

                const lastItem = items[items.length - 1];
                const isLastItemLong =
                  (lastItem.title &&
                    lastItem.title.toLowerCase().includes("demais")) ||
                  (lastItem.text && lastItem.text.length > 150) ||
                  (lastItem.description && lastItem.description.length > 150);
                const regularItems = isLastItemLong
                  ? items.slice(0, -1)
                  : items;

                return (
                  <section key={index} className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                      <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      {section.title}
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none mb-4 sm:mb-6">
                      {regularItems.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base leading-relaxed">
                            {item.text || item.description || item.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {isLastItemLong && (
                      <Card className="border-l-4 border-l-accent">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                              {lastItem.text || lastItem.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </section>
                );
              }

              if (isProcess) {
                let steps: string[] = [];
                if (section.items && Array.isArray(section.items)) {
                  steps = section.items
                    .map((item) => item.description || item.title || "")
                    .filter((step) => step.length > 0);
                } else if (section.content) {
                  steps = parseSectionContent(
                    section.content,
                    "process"
                  ) as string[];
                }

                if (steps.length === 0) return null;

                return (
                  <section key={index} className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-3">
                      <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {steps.map((step, stepIndex) => (
                        <Card
                          key={stepIndex}
                          className="border-l-4 border-l-accent hover:shadow-md transition-all"
                        >
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-base shadow-sm">
                                {stepIndex + 1}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg pt-1.5">
                                {step}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              }

              if (isWhat) {
                return (
                  <section key={index} className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {section.content}
                      </p>
                    </div>
                  </section>
                );
              }

              return (
                <section key={index} className="mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </section>
              );
            })}

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 mt-8 sm:mt-12">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                  Pronto para começar?
                </CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Entre em contato conosco e solicite seu orçamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                  {service.content.conclusion}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceArticle;

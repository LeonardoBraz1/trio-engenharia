import { useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getArticleBySlug,
  getAllArticles,
  getServiceSlugByArticleSlug,
} from "@/data/articles";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const allArticles = getAllArticles();
  const currentIndex = article
    ? allArticles.findIndex((a) => a.slug === article.slug)
    : -1;
  const nextArticle =
    currentIndex >= 0 && currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;

  const relatedService = useMemo(() => {
    if (!article) return undefined;
    const serviceSlug = getServiceSlugByArticleSlug(article.slug);
    return serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  }, [article]);

  const readingTime = useMemo(() => {
    if (!article) return 0;
    const textContent = article.content.replace(/<[^>]*>/g, " ");
    const wordCount = textContent.split(/\s+/).length;
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (article) {
      const baseUrl = window.location.origin;
      const articleUrl = `${baseUrl}/trio-engenharia/blog/${article.slug}`;
      const imageUrl = article.image.startsWith("http")
        ? article.image
        : `${baseUrl}${article.image}`;

      const primaryKeyword = article.keywords[0] || "";
      const optimizedTitle = primaryKeyword
        ? `${article.title} - ${primaryKeyword} SP | ÍTRIO Engenharia`
        : `${article.title} | Blog ÍTRIO Engenharia`;
      document.title = optimizedTitle;

      const updateOrCreateMeta = (
        attr: string,
        value: string,
        content: string
      ) => {
        let meta = document.querySelector(`meta[${attr}="${value}"]`);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute(attr, value);
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
      };

      const longTailKeywords = [
        ...article.keywords,
        `${primaryKeyword} São Paulo`,
        `${primaryKeyword} SP`,
        `${primaryKeyword} preço`,
        `${primaryKeyword} como fazer`,
        `${primaryKeyword} quando necessário`,
        `${primaryKeyword} obrigatório`,
        `${primaryKeyword} quem pode`,
        `${primaryKeyword} quem pode emitir`,
        `${primaryKeyword} quem pode fazer`,
        `ÍTRIO Engenharia ${primaryKeyword}`,
        `laudo técnico ${primaryKeyword}`,
        `vistoria técnica ${primaryKeyword}`,
        `engenheiro ${primaryKeyword}`,
        `${primaryKeyword} CREA`,
        `${primaryKeyword} ART`,
        `${primaryKeyword} Brasil`,
      ];

      updateOrCreateMeta("name", "description", article.metaDescription);
      updateOrCreateMeta(
        "name",
        "keywords",
        longTailKeywords
          .filter((k) => k)
          .slice(0, 20)
          .join(", ")
      );
      updateOrCreateMeta("name", "author", article.author);
      updateOrCreateMeta(
        "name",
        "robots",
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      );
      updateOrCreateMeta("name", "geo.region", "BR-SP");
      updateOrCreateMeta("name", "geo.placename", "São Paulo");
      updateOrCreateMeta("property", "article:tag", article.category);

      let hreflang = document.querySelector(
        'link[rel="alternate"][hreflang="pt-BR"]'
      );
      if (!hreflang) {
        hreflang = document.createElement("link");
        hreflang.setAttribute("rel", "alternate");
        hreflang.setAttribute("hreflang", "pt-BR");
        document.head.appendChild(hreflang);
      }
      hreflang.setAttribute("href", articleUrl);
      updateOrCreateMeta("property", "og:title", article.title);
      updateOrCreateMeta("property", "og:description", article.metaDescription);
      updateOrCreateMeta("property", "og:type", "article");
      updateOrCreateMeta("property", "og:url", articleUrl);
      updateOrCreateMeta("property", "og:image", imageUrl);
      updateOrCreateMeta("property", "og:image:alt", article.title);
      updateOrCreateMeta("property", "og:site_name", "ÍTRIO Engenharia");
      updateOrCreateMeta("property", "og:locale", "pt_BR");
      updateOrCreateMeta(
        "property",
        "article:published_time",
        new Date(article.date).toISOString()
      );
      updateOrCreateMeta("property", "article:author", article.author);
      updateOrCreateMeta("property", "article:section", article.category);
      updateOrCreateMeta("name", "twitter:card", "summary_large_image");
      updateOrCreateMeta("name", "twitter:title", article.title);
      updateOrCreateMeta(
        "name",
        "twitter:description",
        article.metaDescription
      );
      updateOrCreateMeta("name", "twitter:image", imageUrl);

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", articleUrl);

      if (prevArticle) {
        let prevLink = document.querySelector('link[rel="prev"]');
        if (!prevLink) {
          prevLink = document.createElement("link");
          prevLink.setAttribute("rel", "prev");
          document.head.appendChild(prevLink);
        }
        prevLink.setAttribute(
          "href",
          `${baseUrl}/trio-engenharia/blog/${prevArticle.slug}`
        );
      } else {
        const prevLink = document.querySelector('link[rel="prev"]');
        if (prevLink) prevLink.remove();
      }

      if (nextArticle) {
        let nextLink = document.querySelector('link[rel="next"]');
        if (!nextLink) {
          nextLink = document.createElement("link");
          nextLink.setAttribute("rel", "next");
          document.head.appendChild(nextLink);
        }
        nextLink.setAttribute(
          "href",
          `${baseUrl}/trio-engenharia/blog/${nextArticle.slug}`
        );
      } else {
        const nextLink = document.querySelector('link[rel="next"]');
        if (nextLink) nextLink.remove();
      }

      const schemaScript = document.getElementById("article-schema");
      if (schemaScript) {
        schemaScript.remove();
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.metaDescription,
        image: imageUrl,
        datePublished: new Date(article.date).toISOString(),
        dateModified: new Date(article.date).toISOString(),
        author: {
          "@type": "Organization",
          name: article.author,
          url: "https://itrioengenharia.com.br",
        },
        publisher: {
          "@type": "Organization",
          name: "ÍTRIO Engenharia",
          logo: {
            "@type": "ImageObject",
            url: "https://itrioengenharia.com.br/azul.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        articleSection: article.category,
        keywords: article.keywords.join(", "),
        wordCount: article.content.replace(/<[^>]*>/g, " ").split(/\s+/).length,
        inLanguage: "pt-BR",
        about: {
          "@type": "Thing",
          name: article.category,
        },
      };

      const script = document.createElement("script");
      script.id = "article-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: `${baseUrl}/trio-engenharia`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${baseUrl}/trio-engenharia/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      };

      const breadcrumbScript = document.createElement("script");
      breadcrumbScript.id = "breadcrumb-schema";
      breadcrumbScript.type = "application/ld+json";
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);

      const faqMatches = article.content.match(/<h2[^>]*>(.*?)<\/h2>/gi);
      if (faqMatches && faqMatches.length >= 2) {
        interface FAQItem {
          "@type": "Question";
          name: string;
          acceptedAnswer: {
            "@type": "Answer";
            text: string;
          };
        }
        const faqItems: FAQItem[] = [];
        const contentMatches = article.content.matchAll(
          /<h2[^>]*>(.*?)<\/h2>\s*<p[^>]*>(.*?)<\/p>/gi
        );

        let matchCount = 0;
        for (const match of contentMatches) {
          if (matchCount >= 5) break;
          const question = match[1].replace(/<[^>]*>/g, "").trim();
          let answer = match[2].replace(/<[^>]*>/g, "").trim();
          if (answer.length > 300) {
            answer = answer.substring(0, 300) + "...";
          }

          if (question && answer && question.length < 100) {
            faqItems.push({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            });
            matchCount++;
          }
        }

        if (faqItems.length >= 2) {
          const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems,
          };

          const faqScript = document.createElement("script");
          faqScript.id = "faq-schema";
          faqScript.type = "application/ld+json";
          faqScript.textContent = JSON.stringify(faqSchema);
          document.head.appendChild(faqScript);
        }
      }
    }

    return () => {
      const schemaScript = document.getElementById("article-schema");
      if (schemaScript) {
        schemaScript.remove();
      }
      const breadcrumbScript = document.getElementById("breadcrumb-schema");
      if (breadcrumbScript) {
        breadcrumbScript.remove();
      }
      const faqScript = document.getElementById("faq-schema");
      if (faqScript) {
        faqScript.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article, slug, relatedService]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
            <Button onClick={() => navigate("/blog")}>
              Voltar para o blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article
        className="pt-24 pb-16 sm:pt-28 sm:pb-20"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <div className="section-container">
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Button>

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium" aria-current="page">
                {article.title.length > 50
                  ? `${article.title.substring(0, 50)}...`
                  : article.title}
              </li>
            </ol>
          </nav>

          <header className="mb-8 sm:mb-12">
            <div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground mb-4">
              <time
                dateTime={new Date(article.date).toISOString()}
                className="flex items-center gap-1"
                itemProp="datePublished"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </time>
              <div
                className="flex items-center gap-1"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <User className="w-4 h-4" />
                <span itemProp="name">{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min de leitura</span>
              </div>
              <span
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                itemProp="articleSection"
              >
                {article.category}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight"
              itemProp="headline"
            >
              {article.title}
            </h1>

            <div
              className="bg-primary/5 border-l-4 border-primary p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8"
              itemProp="description"
            >
              <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
              <img
                src={article.image}
                alt={`${article.title} - ÍTRIO Engenharia`}
                title={article.title}
                loading="eager"
                itemProp="image"
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 mb-8 sm:mb-12"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 mb-8 sm:mb-12">
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Gostou do artigo?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco para saber mais sobre nossos serviços
                  de engenharia
                </p>
                <a
                  href="https://wa.me/5511914953344?text=Olá! Gostaria de saber mais sobre os serviços da ÍTRIO Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="lg">
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {relatedService && (
              <Card className="border-primary/20 mb-8 sm:mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                    Serviço Relacionado
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Oferecemos este serviço com qualidade e expertise técnica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    to={`/servicos/${relatedService.slug}`}
                    className="group block"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                      <div className="relative w-full sm:w-[250px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedService.heroImage}
                          alt={relatedService.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {relatedService.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {relatedService.metaDescription}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          <span>Ver detalhes do serviço</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t">
              {prevArticle && (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="flex-1 group"
                  rel="prev"
                >
                  <Card className="h-full hover:shadow-md transition-all hover:border-primary/50">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Artigo anterior</span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {prevArticle.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              )}
              {nextArticle && (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="flex-1 group"
                  rel="next"
                >
                  <Card className="h-full hover:shadow-md transition-all hover:border-primary/50">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                        <span>Próximo artigo</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-foreground text-right group-hover:text-primary transition-colors line-clamp-2">
                        {nextArticle.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArticle;

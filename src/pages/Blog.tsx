import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllArticles } from "@/data/articles";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Blog = () => {
  const articles = getAllArticles();

  useEffect(() => {
    window.scrollTo(0, 0);

    const baseUrl = window.location.origin;
    const blogUrl = `${baseUrl}/trio-engenharia/blog`;

    document.title =
      "Blog - Artigos sobre Engenharia e Segurança Industrial | ÍTRIO Engenharia";

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

    updateOrCreateMeta(
      "name",
      "description",
      "Blog de Engenharia ÍTRIO: artigos sobre NR12, NR13, NR11, PMOC, laudos técnicos, vistorias, adequações de máquinas, segurança industrial. Engenheiros especializados em São Paulo e todo Brasil."
    );
    updateOrCreateMeta(
      "name",
      "keywords",
      "blog engenharia, artigos NR12, artigos NR13, PMOC blog, laudo técnico blog, vistoria técnica blog, adequação máquinas, segurança industrial blog, engenharia mecânica blog, ÍTRIO Engenharia blog"
    );
    updateOrCreateMeta(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    updateOrCreateMeta(
      "property",
      "og:title",
      "Blog - Artigos sobre Engenharia | ÍTRIO Engenharia"
    );
    updateOrCreateMeta(
      "property",
      "og:description",
      "Artigos sobre engenharia, segurança industrial e normas técnicas. ÍTRIO Engenharia."
    );
    updateOrCreateMeta("property", "og:type", "website");
    updateOrCreateMeta("property", "og:url", blogUrl);
    updateOrCreateMeta("property", "og:site_name", "ÍTRIO Engenharia");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", blogUrl);

    const schemaScript = document.getElementById("blog-schema");
    if (schemaScript) {
      schemaScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog ÍTRIO Engenharia",
      description:
        "Blog especializado em engenharia, segurança industrial, normas regulamentadoras (NR12, NR13, NR11), PMOC, laudos técnicos e vistorias. Artigos técnicos sobre engenharia mecânica, adequação de máquinas e segurança do trabalho.",
      url: blogUrl,
      inLanguage: "pt-BR",
      publisher: {
        "@type": "Organization",
        name: "ÍTRIO Engenharia",
        logo: {
          "@type": "ImageObject",
          url: "https://itrioengenharia.com.br/azul.png",
        },
      },
      blogPost: articles.map((article) => ({
        "@type": "BlogPosting",
        headline: article.title,
        url: `${blogUrl}/${article.slug}`,
        datePublished: new Date(article.date).toISOString(),
      })),
    };

    const script = document.createElement("script");
    script.id = "blog-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById("blog-schema");
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [articles]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="section-container">
          <header className="text-center mb-12 sm:mb-16">
            <ScrollAnimation animation="fade-in" delay={100}>
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                Blog
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Artigos e Notícias
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Acompanhe nossos artigos sobre engenharia, segurança industrial
                e soluções técnicas
              </p>
            </ScrollAnimation>
          </header>

          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum artigo encontrado. Em breve teremos novos conteúdos!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((article, index) => (
                <ScrollAnimation
                  key={article.slug}
                  animation="fade-up"
                  delay={100 + index * 100}
                >
                  <Link to={`/blog/${article.slug}`}>
                    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer">
                      <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-t-lg">
                        <img
                          src={article.image}
                          alt={`${article.title} - ÍTRIO Engenharia`}
                          title={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(article.date).toLocaleDateString(
                                "pt-BR",
                                {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl sm:text-2xl line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          <span>Ler mais</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;

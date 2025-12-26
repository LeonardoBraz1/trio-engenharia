export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "pmoc-empresas-obrigadas-vigilancia-sanitaria",
    title:
      "PMOC: quais empresas são obrigadas e o que a Vigilância Sanitária exige",
    metaDescription:
      "Descubra quais empresas são obrigadas a ter PMOC, o que a Vigilância Sanitária exige e os riscos de não ter esse documento técnico.",
    keywords: [
      "PMOC",
      "Vigilância Sanitária",
      "ar-condicionado",
      "ANVISA",
      "manutenção climatização",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-01-15",
    category: "Normas e Regulamentações",
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/08/05/air-conditioner-8843842_1280.png",
    excerpt:
      "O PMOC é um documento técnico exigido pela ANVISA que estabelece diretrizes para a manutenção e controle de sistemas de climatização.",
    content: `
      <h2>O que é PMOC?</h2>
      <p>O PMOC (Plano de Manutenção, Operação e Controle) é um documento técnico exigido pela ANVISA que estabelece diretrizes para a manutenção e controle de sistemas de climatização, com o objetivo de garantir a qualidade do ar interior e a saúde dos ocupantes.</p>
      <p>Ele se aplica a sistemas de ar-condicionado de uso coletivo, comuns em ambientes comerciais, institucionais e industriais.</p>

      <h2>Quais empresas são obrigadas a ter PMOC?</h2>
      <p>De forma geral, o PMOC é obrigatório para estabelecimentos que possuem sistemas de climatização com capacidade acima de 60.000 BTU/h, como:</p>
      <ul>
        <li>Clínicas e hospitais</li>
        <li>Escolas e universidades</li>
        <li>Empresas e escritórios</li>
        <li>Comércios e shopping centers</li>
        <li>Indústrias</li>
      </ul>
      <p>A obrigatoriedade pode ser verificada durante fiscalizações da Vigilância Sanitária.</p>

      <h2>O que a Vigilância Sanitária avalia?</h2>
      <p>Durante uma fiscalização, podem ser exigidos:</p>
      <ul>
        <li>Documento de PMOC atualizado</li>
        <li>Registros de manutenção</li>
        <li>Identificação do responsável técnico</li>
        <li>Laudos e relatórios técnicos</li>
      </ul>
      <p>A ausência do PMOC pode gerar <strong>notificações, multas e interdição do local</strong>.</p>

      <h2>Quem pode elaborar e assinar o PMOC?</h2>
      <p>O PMOC deve ser elaborado e acompanhado por <strong>profissional legalmente habilitado</strong>, como engenheiro mecânico ou outro profissional com atribuições compatíveis, devidamente registrado no conselho de classe, com emissão de ART.</p>

      <h2>Quais os riscos de não ter PMOC?</h2>
      <ul>
        <li>Multas aplicadas pela Vigilância Sanitária</li>
        <li>Riscos à saúde dos ocupantes</li>
        <li>Problemas trabalhistas</li>
        <li>Responsabilização civil e jurídica da empresa</li>
      </ul>

      <h2>Como funciona a contratação do serviço?</h2>
      <p>A elaboração do PMOC envolve vistoria técnica, identificação dos equipamentos, definição de rotinas de manutenção e acompanhamento periódico, conforme a legislação vigente.</p>

      <p><strong>Precisa elaborar ou regularizar o PMOC da sua empresa?</strong><br>
      Conheça o serviço de <strong>PMOC da Ítrio Engenharia</strong> e fale com um engenheiro mecânico registrado no CREA.</p>
    `,
  },
  {
    slug: "nr-13-laudo-vaso-pressao-obrigatorio",
    title:
      "NR-13: quando o laudo de vaso de pressão é obrigatório e quem pode emitir",
    metaDescription:
      "Entenda quando o laudo técnico NR-13 é obrigatório, quais equipamentos se enquadram e quem pode emitir esse documento.",
    keywords: [
      "NR-13",
      "vaso de pressão",
      "caldeiras",
      "laudo técnico",
      "segurança industrial",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-01-20",
    category: "Normas e Regulamentações",
    image:
      "https://cdn.pixabay.com/photo/2015/12/22/08/27/plumbing-1103725_1280.jpg",
    excerpt:
      "A NR-13 estabelece requisitos de segurança para vasos de pressão, caldeiras e sistemas similares, visando prevenir acidentes graves.",
    content: `
      <h2>O que é a NR-13?</h2>
      <p>A NR-13 é a norma regulamentadora que estabelece requisitos de segurança para vasos de pressão, caldeiras e sistemas similares, visando prevenir acidentes graves e proteger trabalhadores e instalações.</p>

      <h2>Quando o laudo NR-13 é obrigatório?</h2>
      <p>O laudo técnico é exigido para equipamentos classificados como vasos de pressão, conforme critérios da norma, e pode ser solicitado por:</p>
      <ul>
        <li>Fiscalização do trabalho</li>
        <li>Seguradoras</li>
        <li>Auditorias internas</li>
        <li>Órgãos públicos</li>
      </ul>

      <h2>Quais equipamentos se enquadram?</h2>
      <p>Exemplos comuns:</p>
      <ul>
        <li>Compressores de ar</li>
        <li>Reservatórios pressurizados</li>
        <li>Caldeiras</li>
        <li>Sistemas industriais pressurizados</li>
      </ul>

      <h2>Quem pode emitir o laudo NR-13?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro legalmente habilitado</strong>, com atribuição para a área, registro no CREA e emissão de ART.</p>

      <h2>Riscos de não atender à NR-13</h2>
      <ul>
        <li>Multas e interdições</li>
        <li>Acidentes graves</li>
        <li>Responsabilidade civil e criminal</li>
        <li>Problemas com seguros e contratos</li>
      </ul>

      <h2>Como funciona a inspeção?</h2>
      <p>Inclui análise documental, inspeção visual, avaliação técnica do equipamento e emissão do laudo conforme os requisitos normativos.</p>

      <p><strong>Sua empresa possui vasos de pressão e precisa se adequar à NR-13?</strong><br>
      Conheça o serviço de <strong>Laudo NR-13 da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "responsavel-tecnico-empresa-obrigada-engenheiro",
    title:
      "Responsável técnico: quando sua empresa é obrigada a ter um engenheiro",
    metaDescription:
      "Descubra quando sua empresa é obrigada a ter um responsável técnico, quem exige e quais são os riscos de operar sem RT.",
    keywords: [
      "responsável técnico",
      "RT",
      "engenheiro responsável",
      "CREA",
      "ART",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-01-25",
    category: "Normas e Regulamentações",
    image:
      "https://jdsolucoesme.com.br/wp-content/uploads/2023/02/responsavel-tecnico-pessoa-juridica-empresa-junto-ao-crea.jpg",
    excerpt:
      "O responsável técnico é o profissional legalmente habilitado que assume a responsabilidade por atividades técnicas da empresa.",
    content: `
      <h2>O que é responsável técnico?</h2>
      <p>O responsável técnico é o profissional legalmente habilitado que assume a responsabilidade por atividades técnicas, garantindo que elas estejam de acordo com normas e legislações vigentes.</p>

      <h2>Quando a empresa é obrigada a ter um RT?</h2>
      <p>A obrigatoriedade ocorre quando a empresa:</p>
      <ul>
        <li>Executa serviços técnicos regulados</li>
        <li>Opera equipamentos de risco</li>
        <li>Depende de licença ou alvará</li>
        <li>Atua em atividades fiscalizadas por órgãos públicos</li>
      </ul>

      <h2>Quem exige a presença de RT?</h2>
      <ul>
        <li>CREA</li>
        <li>Corpo de Bombeiros</li>
        <li>Vigilância Sanitária</li>
        <li>Prefeituras</li>
        <li>Seguradoras</li>
      </ul>

      <h2>Qual a responsabilidade do engenheiro RT?</h2>
      <p>O engenheiro responde técnica e legalmente pelas atividades, assinando documentos, emitindo ARTs e acompanhando as conformidades técnicas.</p>

      <h2>Riscos de operar sem RT</h2>
      <ul>
        <li>Multas</li>
        <li>Embargo das atividades</li>
        <li>Problemas jurídicos</li>
        <li>Perda de contratos</li>
      </ul>

      <h2>Como funciona a contratação?</h2>
      <p>O serviço pode ser realizado por contrato mensal ou por demanda, conforme o tipo e porte da empresa.</p>

      <p><strong>Precisa de um engenheiro responsável técnico para sua empresa?</strong><br>
      Conheça o serviço de <strong>Responsável Técnico da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "nr-12-adequacao-maquinas-obrigatoria-riscos-legais",
    title:
      "NR-12: quando a adequação de máquinas é obrigatória e quais os riscos legais",
    metaDescription:
      "Entenda quando a adequação NR-12 é obrigatória, quais máquinas se enquadram e os riscos legais de não atender à norma.",
    keywords: [
      "NR-12",
      "adequação de máquinas",
      "segurança de máquinas",
      "fiscalização trabalho",
      "acidentes trabalho",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-01",
    category: "Normas e Regulamentações",
    image:
      "https://cdn.pixabay.com/photo/2013/09/27/12/18/company-186980_960_720.jpg",
    excerpt:
      "A NR-12 estabelece requisitos mínimos de segurança para máquinas e equipamentos, visando prevenir acidentes de trabalho.",
    content: `
      <h2>O que é a NR-12?</h2>
      <p>A NR-12 é a norma regulamentadora que estabelece requisitos mínimos de segurança para máquinas e equipamentos, visando prevenir acidentes de trabalho durante operação, manutenção, ajuste e limpeza.</p>
      <p>Ela se aplica a praticamente <strong>todas as empresas que utilizam máquinas</strong>, independentemente do porte.</p>

      <h2>Quando a adequação NR-12 é obrigatória?</h2>
      <p>A adequação é obrigatória sempre que a empresa:</p>
      <ul>
        <li>Possui máquinas em operação</li>
        <li>Fabrica, importa ou comercializa máquinas</li>
        <li>Sofreu fiscalização do Ministério do Trabalho</li>
        <li>Passou por acidente ou notificação</li>
      </ul>

      <h2>Quais máquinas se enquadram na NR-12?</h2>
      <p>Entre as mais comuns:</p>
      <ul>
        <li>Prensas</li>
        <li>Tornos</li>
        <li>Injetoras</li>
        <li>Serras</li>
        <li>Máquinas industriais em geral</li>
      </ul>

      <h2>Quem pode elaborar o laudo e assinar a adequação?</h2>
      <p>A avaliação e emissão de laudo devem ser feitas por <strong>engenheiro legalmente habilitado</strong>, com registro no CREA e emissão de ART.</p>

      <h2>Riscos de não atender à NR-12</h2>
      <ul>
        <li>Multas e interdição da máquina</li>
        <li>Paralisação da produção</li>
        <li>Responsabilização civil e criminal</li>
        <li>Aumento do risco de acidentes graves</li>
      </ul>

      <h2>Como funciona a adequação?</h2>
      <p>Inclui vistoria técnica, análise de riscos, recomendações de segurança e emissão de laudo técnico conforme a norma.</p>

      <p><strong>Sua empresa precisa se adequar à NR-12?</strong><br>
      Conheça o serviço de <strong>Adequação e Laudo NR-12 da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "laudo-tecnico-playground-responsavel-acidente",
    title:
      "Laudo técnico de playground: quem é responsável em caso de acidente?",
    metaDescription:
      "Entenda por que playgrounds exigem laudo técnico, quem é responsável em caso de acidente e como se proteger juridicamente.",
    keywords: [
      "laudo playground",
      "segurança playground",
      "responsabilidade playground",
      "acidente playground",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-05",
    category: "Segurança",
    image:
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt:
      "Brinquedos de playground envolvem risco direto à integridade física das crianças e precisam atender a normas técnicas de segurança.",
    content: `
      <h2>Por que o playground exige laudo técnico?</h2>
      <p>Brinquedos de playground são equipamentos de uso coletivo e, portanto, envolvem <strong>risco direto à integridade física das crianças</strong>. Por isso, precisam atender a normas técnicas e de segurança.</p>

      <h2>Onde o laudo é exigido?</h2>
      <p>É comum a exigência em:</p>
      <ul>
        <li>Escolas</li>
        <li>Condomínios</li>
        <li>Buffets infantis</li>
        <li>Parques e áreas públicas</li>
      </ul>

      <h2>Quem é o responsável legal?</h2>
      <p>A responsabilidade recai sobre:</p>
      <ul>
        <li>Proprietário do espaço</li>
        <li>Síndico</li>
        <li>Gestor da instituição</li>
      </ul>
      <p>Em caso de acidente, a ausência de laudo pode gerar <strong>responsabilização civil e judicial</strong>.</p>

      <h2>Quem pode emitir o laudo?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro habilitado</strong>, com atribuição técnica e ART registrada.</p>

      <h2>O que é avaliado no playground?</h2>
      <ul>
        <li>Estrutura dos brinquedos</li>
        <li>Fixação e estabilidade</li>
        <li>Materiais</li>
        <li>Estado de conservação</li>
        <li>Conformidade com normas</li>
      </ul>

      <h2>Importância do laudo preventivo</h2>
      <p>Além de atender à legislação, o laudo:</p>
      <ul>
        <li>Reduz riscos de acidentes</li>
        <li>Protege juridicamente o responsável</li>
        <li>Demonstra cuidado com a segurança</li>
      </ul>

      <p><strong>Precisa regularizar ou avaliar um playground?</strong><br>
      Conheça o serviço de <strong>Laudo Técnico de Playground da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "sistema-exaustao-cozinhas-industriais-laudo-obrigatorio",
    title:
      "Sistema de exaustão de cozinhas industriais: quando o laudo técnico é obrigatório",
    metaDescription:
      "Descubra quando o laudo técnico de sistema de exaustão é obrigatório, quem exige e os riscos de não regularizar.",
    keywords: [
      "exaustão cozinha",
      "sistema exaustão",
      "laudo exaustão",
      "Vigilância Sanitária",
      "Corpo de Bombeiros",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-10",
    category: "Normas e Regulamentações",
    image:
      "https://casadovento.com.br/site/wp-content/uploads/2020/11/cdv-blog-exaust-cozinha-002.jpg",
    excerpt:
      "O sistema de exaustão é responsável pela remoção de fumaça, vapores, gordura e odores gerados durante o preparo de alimentos.",
    content: `
      <h2>O que é o sistema de exaustão?</h2>
      <p>O sistema de exaustão é responsável pela remoção de fumaça, vapores, gordura e odores gerados durante o preparo de alimentos em cozinhas industriais.</p>

      <h2>Quando o laudo técnico é exigido?</h2>
      <p>Pode ser exigido por:</p>
      <ul>
        <li>Vigilância Sanitária</li>
        <li>Corpo de Bombeiros</li>
        <li>Prefeituras</li>
        <li>Seguradoras</li>
      </ul>
      <p>Especialmente em restaurantes, hotéis, hospitais e cozinhas industriais.</p>

      <h2>O que é avaliado no laudo?</h2>
      <ul>
        <li>Eficiência da exaustão</li>
        <li>Dimensionamento do sistema</li>
        <li>Segurança contra incêndio</li>
        <li>Condições de limpeza e manutenção</li>
      </ul>

      <h2>Quem pode emitir o laudo?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro mecânico</strong>, com registro no CREA e ART.</p>

      <h2>Riscos de não regularizar o sistema</h2>
      <ul>
        <li>Multas e notificações</li>
        <li>Interdição do estabelecimento</li>
        <li>Aumento do risco de incêndio</li>
        <li>Problemas com alvarás</li>
      </ul>

      <h2>Como funciona o serviço?</h2>
      <p>Inclui vistoria técnica, análise do sistema existente e emissão de laudo conforme normas vigentes.</p>

      <p><strong>Precisa regularizar o sistema de exaustão da sua cozinha?</strong><br>
      Conheça o serviço de <strong>Laudo de Exaustão da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "nr-11-laudo-sistemas-transportadores-obrigatorio",
    title: "NR-11: quando o laudo de sistemas transportadores é obrigatório",
    metaDescription:
      "Entenda quando o laudo técnico NR-11 é obrigatório para sistemas transportadores e quais equipamentos se enquadram.",
    keywords: [
      "NR-11",
      "sistemas transportadores",
      "esteiras transportadoras",
      "elevadores de carga",
      "segurança trabalho",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-15",
    category: "Normas e Regulamentações",
    image:
      "https://cdn.pixabay.com/photo/2021/07/23/19/15/truck-6488011_1280.jpg",
    excerpt:
      "A NR-11 estabelece requisitos de segurança para transporte, movimentação, armazenagem e manuseio de materiais.",
    content: `
      <h2>O que é a NR-11?</h2>
      <p>A NR-11 é a norma regulamentadora que estabelece requisitos de segurança para transporte, movimentação, armazenagem e manuseio de materiais, incluindo sistemas transportadores mecanizados.</p>

      <h2>Quais equipamentos se enquadram na NR-11?</h2>
      <p>Entre os mais comuns:</p>
      <ul>
        <li>Esteiras transportadoras</li>
        <li>Elevadores de carga</li>
        <li>Pontes rolantes</li>
        <li>Guindastes</li>
        <li>Talhas</li>
      </ul>

      <h2>Quando o laudo técnico é exigido?</h2>
      <p>O laudo pode ser exigido por:</p>
      <ul>
        <li>Fiscalização do trabalho</li>
        <li>Auditorias internas</li>
        <li>Seguradoras</li>
        <li>Processos de regularização</li>
      </ul>

      <h2>Quem pode emitir o laudo NR-11?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro legalmente habilitado</strong>, com registro no CREA e emissão de ART.</p>

      <h2>Riscos de operar sem laudo</h2>
      <ul>
        <li>Multas e interdição</li>
        <li>Acidentes de trabalho</li>
        <li>Responsabilização civil e criminal</li>
        <li>Problemas com seguros</li>
      </ul>

      <p><strong>Sua empresa utiliza sistemas transportadores?</strong><br>
      Conheça o serviço de <strong>Laudo NR-11 da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "laudo-tecnico-maquinas-pesadas-exigido",
    title: "Laudo técnico de máquinas pesadas: quando é exigido e por que",
    metaDescription:
      "Descubra quando o laudo técnico de máquinas pesadas é exigido e a importância desse documento para segurança e conformidade.",
    keywords: [
      "laudo máquinas pesadas",
      "máquinas industriais",
      "inspeção máquinas",
      "segurança equipamentos",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-20",
    category: "Segurança",
    image:
      "https://cdn.pixabay.com/photo/2016/02/01/21/15/excavator-1174428_1280.jpg",
    excerpt:
      "Máquinas pesadas são equipamentos de grande porte utilizados em atividades industriais, agrícolas, logísticas e de construção.",
    content: `
      <h2>O que são consideradas máquinas pesadas?</h2>
      <p>Máquinas pesadas são equipamentos de grande porte utilizados em atividades industriais, agrícolas, logísticas e de construção, que envolvem riscos elevados de operação.</p>

      <h2>Quando o laudo técnico é necessário?</h2>
      <p>O laudo pode ser exigido em situações como:</p>
      <ul>
        <li>Fiscalização</li>
        <li>Renovação de contratos</li>
        <li>Seguros</li>
        <li>Acidentes ou sinistros</li>
        <li>Regularização documental</li>
      </ul>

      <h2>O que é avaliado no laudo?</h2>
      <ul>
        <li>Condições estruturais</li>
        <li>Sistemas mecânicos</li>
        <li>Dispositivos de segurança</li>
        <li>Estado geral de conservação</li>
        <li>Conformidade com normas</li>
      </ul>

      <h2>Quem pode emitir?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro mecânico habilitado</strong>, com ART.</p>

      <h2>Importância do laudo preventivo</h2>
      <p>Além da conformidade legal, o laudo:</p>
      <ul>
        <li>Reduz riscos operacionais</li>
        <li>Aumenta a vida útil do equipamento</li>
        <li>Protege juridicamente a empresa</li>
      </ul>

      <p><strong>Precisa de laudo técnico para máquinas pesadas?</strong><br>
      Conheça o serviço de <strong>Laudos Técnicos da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "laudo-tecnico-elevadores-plataformas-acessibilidade-exigido",
    title:
      "Laudo técnico de elevadores e plataformas de acessibilidade: quando é exigido",
    metaDescription:
      "Descubra quando o laudo técnico de elevadores e plataformas de acessibilidade é exigido e os riscos de não regularizar.",
    keywords: [
      "laudo elevador",
      "plataforma acessibilidade",
      "segurança elevador",
      "fiscalização elevador",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-02-25",
    category: "Segurança",
    image:
      "https://villarta.com.br/wp-content/uploads/2023/10/acessibilidade-banner-ok.jpg",
    excerpt:
      "Elevadores e plataformas de acessibilidade são equipamentos de uso coletivo e envolvem alto risco à segurança.",
    content: `
      <h2>Por que esses equipamentos exigem laudo?</h2>
      <p>Elevadores e plataformas de acessibilidade são equipamentos de uso coletivo e envolvem <strong>alto risco à segurança</strong>, sendo frequentemente fiscalizados.</p>

      <h2>Onde o laudo é exigido?</h2>
      <ul>
        <li>Condomínios</li>
        <li>Hospitais</li>
        <li>Clínicas</li>
        <li>Prédios comerciais</li>
        <li>Instituições públicas</li>
      </ul>

      <h2>Quem pode exigir o laudo?</h2>
      <ul>
        <li>Prefeituras</li>
        <li>Corpo de Bombeiros</li>
        <li>Seguradoras</li>
        <li>Órgãos fiscalizadores</li>
      </ul>

      <h2>Quem pode emitir o laudo?</h2>
      <p>O laudo deve ser emitido por <strong>engenheiro legalmente habilitado</strong>, com registro no CREA e ART.</p>

      <h2>Riscos de não regularizar</h2>
      <ul>
        <li>Interdição do equipamento</li>
        <li>Acidentes</li>
        <li>Processos judiciais</li>
        <li>Multas</li>
      </ul>

      <p><strong>Precisa avaliar elevadores ou plataformas de acessibilidade?</strong><br>
      Conheça o serviço de <strong>Laudo Técnico da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "laudo-tecnico-andaimes-exigencias-seguranca-responsabilidades",
    title:
      "Laudo técnico de andaimes: exigências de segurança e responsabilidades legais",
    metaDescription:
      "Entenda por que andaimes exigem laudo técnico, quais são as exigências de segurança e as responsabilidades legais.",
    keywords: [
      "laudo andaime",
      "segurança andaime",
      "responsabilidade andaime",
      "fiscalização andaime",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-01",
    category: "Segurança",
    image:
      "https://algandaimes.com.br/wp-content/uploads/2015/05/vistoria_andaimes.jpg",
    excerpt:
      "Andaimes são estruturas temporárias, mas envolvem alto risco de queda e acidentes, exigindo controle rigoroso de segurança.",
    content: `
      <h2>Por que andaimes exigem laudo técnico?</h2>
      <p>Andaimes são estruturas temporárias, mas envolvem <strong>alto risco de queda e acidentes</strong>, exigindo controle rigoroso de segurança.</p>

      <h2>Quando o laudo é exigido?</h2>
      <p>O laudo pode ser exigido:</p>
      <ul>
        <li>Antes do uso</li>
        <li>Em fiscalizações</li>
        <li>Após montagem ou alteração</li>
        <li>Em obras e serviços em altura</li>
      </ul>

      <h2>O que é avaliado no laudo?</h2>
      <ul>
        <li>Estabilidade</li>
        <li>Fixação</li>
        <li>Dimensionamento</li>
        <li>Condições estruturais</li>
        <li>Conformidade com normas</li>
      </ul>

      <h2>Quem é responsável?</h2>
      <p>A responsabilidade recai sobre:</p>
      <ul>
        <li>Empresa executora</li>
        <li>Contratante</li>
        <li>Responsável técnico</li>
      </ul>

      <p><strong>Precisa regularizar andaimes na sua obra ou empresa?</strong><br>
      Conheça o serviço de <strong>Laudo Técnico de Andaimes da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "reclassificacao-monta-obrigatoria-quem-pode-realizar",
    title:
      "Reclassificação de monta: quando é obrigatória e quem pode realizar",
    metaDescription:
      "Descubra quando a reclassificação de monta é obrigatória, quem pode realizar e sua importância para segurança veicular.",
    keywords: [
      "reclassificação de monta",
      "laudo veicular",
      "DETRAN",
      "vistoria veicular",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-05",
    category: "Automotivo",
    image:
      "https://static.wixstatic.com/media/8040eb_99f4052d15584fceb6ae6140458d4546~mv2.jpg/v1/fill/w_1000,h_545,al_c,q_85,usm_0.66_1.00_0.01/8040eb_99f4052d15584fceb6ae6140458d4546~mv2.jpg",
    excerpt:
      "A reclassificação de monta é a avaliação técnica de veículos sinistrados para definir se o dano é de pequena, média ou grande monta.",
    content: `
      <h2>O que é reclassificação de monta?</h2>
      <p>A reclassificação de monta é a avaliação técnica de veículos sinistrados para definir se o dano é de pequena, média ou grande monta, conforme critérios técnicos.</p>

      <h2>Quando a reclassificação é necessária?</h2>
      <p>Ela é exigida em casos de:</p>
      <ul>
        <li>Acidentes</li>
        <li>Sinistros</li>
        <li>Regularização junto ao DETRAN</li>
        <li>Transferência ou retorno à circulação</li>
      </ul>

      <h2>Quem exige a reclassificação?</h2>
      <ul>
        <li>Seguradoras</li>
        <li>DETRAN</li>
        <li>Empresas de vistoria</li>
        <li>Processos judiciais</li>
      </ul>

      <h2>Quem pode realizar a reclassificação?</h2>
      <p>A reclassificação deve ser realizada por <strong>engenheiro legalmente habilitado</strong>, com emissão de laudo e ART.</p>

      <h2>Importância da avaliação técnica</h2>
      <ul>
        <li>Garante segurança veicular</li>
        <li>Evita fraudes</li>
        <li>Assegura conformidade legal</li>
      </ul>

      <p><strong>Precisa realizar reclassificação de monta?</strong><br>
      Conheça o serviço de <strong>Reclassificação de Monta da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "pericia-tecnica-assistente-tecnico-diferenca-quando-contratar",
    title:
      "Perícia técnica e assistente técnico: qual a diferença e quando contratar",
    metaDescription:
      "Entenda a diferença entre perícia técnica e assistente técnico, quando contratar cada serviço e sua importância em processos.",
    keywords: [
      "perícia técnica",
      "assistente técnico",
      "processo judicial",
      "engenharia forense",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-10",
    category: "Jurídico",
    image:
      "https://www.bhgengenharia.com/wp-content/uploads/2024/03/Assistente-Tecnic-Preparando-Inspecao-BHG.jpg",
    excerpt:
      "A perícia técnica é uma análise especializada realizada por engenheiro para esclarecer fatos técnicos em processos judiciais.",
    content: `
      <h2>O que é perícia técnica?</h2>
      <p>A perícia técnica é uma análise especializada realizada por engenheiro para esclarecer fatos técnicos em processos judiciais ou extrajudiciais, servindo como base para decisões legais.</p>

      <h2>O que faz um assistente técnico?</h2>
      <p>O assistente técnico atua <strong>representando uma das partes</strong> em um processo, acompanhando a perícia judicial, analisando o laudo do perito e emitindo parecer técnico.</p>

      <h2>Quando esses serviços são necessários?</h2>
      <ul>
        <li>Processos judiciais</li>
        <li>Disputas contratuais</li>
        <li>Acidentes</li>
        <li>Falhas em equipamentos</li>
        <li>Divergências técnicas</li>
      </ul>

      <h2>Quem pode atuar como perito ou assistente técnico?</h2>
      <p>Engenheiro legalmente habilitado, com registro no CREA e atribuições compatíveis com o objeto analisado.</p>

      <h2>Importância da atuação técnica qualificada</h2>
      <p>Uma análise técnica bem fundamentada:</p>
      <ul>
        <li>Fortalece a defesa</li>
        <li>Evita prejuízos</li>
        <li>Traz clareza ao processo</li>
      </ul>

      <p><strong>Precisa de perícia técnica ou assistente técnico especializado?</strong><br>
      Conheça o serviço de <strong>Perícias e Assistência Técnica da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "engenheiro-responsavel-tecnico-empresa-obrigada-contratar",
    title:
      "Engenheiro responsável técnico: quando sua empresa é obrigada a contratar",
    metaDescription:
      "Descubra quando sua empresa é obrigada a contratar um engenheiro responsável técnico e quais são suas responsabilidades.",
    keywords: [
      "engenheiro responsável técnico",
      "RT empresa",
      "responsabilidade técnica",
      "ART",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-15",
    category: "Normas e Regulamentações",
    image:
      "https://jdsolucoesme.com.br/wp-content/uploads/2023/02/responsavel-tecnico-pessoa-juridica-empresa-junto-ao-crea.jpg",
    excerpt:
      "É o profissional que responde legalmente pelas atividades técnicas da empresa, garantindo conformidade com normas e legislações vigentes.",
    content: `
      <h2>O que é engenheiro responsável técnico?</h2>
      <p>É o profissional que responde legalmente pelas atividades técnicas da empresa, garantindo conformidade com normas e legislações vigentes.</p>

      <h2>Quais empresas precisam de RT?</h2>
      <p>Empresas que:</p>
      <ul>
        <li>Executam serviços técnicos</li>
        <li>Utilizam máquinas e equipamentos</li>
        <li>Atuam em áreas fiscalizadas</li>
        <li>Precisam de alvará ou licença</li>
      </ul>

      <h2>Quem exige a presença de RT?</h2>
      <ul>
        <li>CREA</li>
        <li>Prefeituras</li>
        <li>Corpo de Bombeiros</li>
        <li>Vigilância Sanitária</li>
        <li>Seguradoras</li>
      </ul>

      <h2>Quais são as responsabilidades do RT?</h2>
      <ul>
        <li>Emissão de ART</li>
        <li>Acompanhamento técnico</li>
        <li>Responsabilidade legal</li>
        <li>Suporte a fiscalizações</li>
      </ul>

      <p><strong>Sua empresa precisa de engenheiro responsável técnico?</strong><br>
      Conheça o serviço de <strong>RT para Empresas da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "engenheiro-responsavel-tecnico-desmanches-exigencia-legal",
    title:
      "Engenheiro responsável técnico para desmanches: exigência legal e atribuições",
    metaDescription:
      "Descubra por que desmanches precisam de engenheiro responsável técnico e quais são suas atribuições específicas.",
    keywords: [
      "RT desmanche",
      "engenheiro desmanche",
      "DETRAN",
      "desmanche veículos",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-20",
    category: "Automotivo",
    image: "https://ghkeng.com.br/wp-content/uploads/2022/09/desmanche2.jpg",
    excerpt:
      "Desmanches lidam com veículos sinistrados, peças reaproveitáveis e exigências ambientais e legais, exigindo acompanhamento técnico.",
    content: `
      <h2>Por que desmanches precisam de RT?</h2>
      <p>Desmanches lidam com:</p>
      <ul>
        <li>Veículos sinistrados</li>
        <li>Peças reaproveitáveis</li>
        <li>Exigências ambientais e legais</li>
      </ul>
      <p>Por isso, a legislação exige acompanhamento técnico.</p>

      <h2>Qual o papel do engenheiro RT no desmanche?</h2>
      <ul>
        <li>Responsabilidade técnica</li>
        <li>Emissão de ART</li>
        <li>Suporte documental</li>
        <li>Conformidade com exigências do DETRAN</li>
      </ul>

      <h2>Quem fiscaliza os desmanches?</h2>
      <ul>
        <li>DETRAN</li>
        <li>Órgãos ambientais</li>
        <li>Polícia civil</li>
        <li>CREA</li>
      </ul>

      <p><strong>Atua com desmanche de veículos e precisa de RT?</strong><br>
      Conheça o serviço de <strong>Engenheiro RT para Desmanches da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "projetos-mecanicos-obrigatorios-importancia",
    title: "Projetos mecânicos: quando são obrigatórios e qual sua importância",
    metaDescription:
      "Descubra quando projetos mecânicos são obrigatórios e sua importância para segurança, eficiência e conformidade normativa.",
    keywords: [
      "projetos mecânicos",
      "engenharia mecânica",
      "projetos industriais",
      "normas técnicas",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-25",
    category: "Projetos",
    image:
      "https://www.fm2s.com.br/storage/blog/images/gestao-de-projetos-na-engenharia.webp",
    excerpt:
      "São documentos técnicos que definem soluções para sistemas mecânicos, garantindo segurança, eficiência e conformidade normativa.",
    content: `
      <h2>O que são projetos mecânicos?</h2>
      <p>São documentos técnicos que definem soluções para sistemas mecânicos, garantindo segurança, eficiência e conformidade normativa.</p>

      <h2>Quando o projeto é obrigatório?</h2>
      <ul>
        <li>Novas instalações</li>
        <li>Ampliações</li>
        <li>Regularizações</li>
        <li>Exigência de órgãos fiscalizadores</li>
      </ul>

      <h2>O que um projeto mecânico contempla?</h2>
      <ul>
        <li>Dimensionamento técnico</li>
        <li>Memorial descritivo</li>
        <li>Atendimento às normas</li>
        <li>Responsabilidade técnica</li>
      </ul>

      <h2>Quem pode elaborar projetos?</h2>
      <p>Engenheiro mecânico habilitado, com emissão de ART.</p>

      <p><strong>Precisa elaborar ou regularizar um projeto mecânico?</strong><br>
      Conheça os <strong>Projetos da Ítrio Engenharia</strong>.</p>
    `,
  },
  {
    slug: "avcb-clcb-documentos-tecnicos-corpo-bombeiros",
    title:
      "AVCB e CLCB: quais documentos técnicos o Corpo de Bombeiros pode exigir",
    metaDescription:
      "Descubra quais documentos técnicos o Corpo de Bombeiros pode exigir para AVCB e CLCB e o papel do engenheiro nesse processo.",
    keywords: [
      "AVCB",
      "CLCB",
      "Corpo de Bombeiros",
      "vistoria bombeiros",
      "segurança incêndio",
    ],
    author: "ÍTRIO Engenharia",
    date: "2024-03-30",
    category: "Normas e Regulamentações",
    image:
      "https://www.connapa.com.br/static/img/large/05495f637e8d7ecf82a020c96e58c002.jpg",
    excerpt:
      "O AVCB e CLCB são documentos que comprovam que a edificação atende às normas de segurança contra incêndio.",
    content: `
      <h2>O que são AVCB e CLCB?</h2>
      <p>O AVCB (Auto de Vistoria do Corpo de Bombeiros) e o CLCB (Certificado de Licença do Corpo de Bombeiros) são documentos que comprovam que a edificação atende às normas de segurança contra incêndio.</p>

      <h2>Quando esses documentos são exigidos?</h2>
      <p>São exigidos para:</p>
      <ul>
        <li>Obtenção ou renovação de alvará</li>
        <li>Funcionamento de empresas</li>
        <li>Eventos</li>
        <li>Fiscalização</li>
      </ul>

      <h2>Qual o papel do engenheiro nesse processo?</h2>
      <p>O engenheiro é responsável por:</p>
      <ul>
        <li>Vistorias técnicas</li>
        <li>Emissão de laudos</li>
        <li>ART</li>
        <li>Suporte técnico ao processo junto ao Corpo de Bombeiros</li>
      </ul>

      <h2>Quais sistemas podem ser avaliados?</h2>
      <ul>
        <li>Sistemas mecânicos</li>
        <li>Exaustão</li>
        <li>Equipamentos</li>
        <li>Instalações técnicas</li>
      </ul>

      <h2>Riscos de não ter AVCB ou CLCB</h2>
      <ul>
        <li>Interdição do local</li>
        <li>Multas</li>
        <li>Impossibilidade de funcionamento</li>
        <li>Problemas com seguros</li>
      </ul>

      <p><strong>Precisa de apoio técnico para AVCB ou CLCB?</strong><br>
      Conheça o serviço de <strong>Vistorias Técnicas para Corpo de Bombeiros da Ítrio Engenharia</strong>.</p>
    `,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getAllArticles = (): Article[] => {
  return articles;
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter((article) => article.category === category);
};

export const getRelatedArticles = (
  currentSlug: string,
  limit: number = 3
): Article[] => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const related = articles
    .filter(
      (article) =>
        article.slug !== currentSlug &&
        (article.category === currentArticle.category ||
          article.keywords.some((keyword) =>
            currentArticle.keywords.some(
              (k) =>
                k.toLowerCase().includes(keyword.toLowerCase()) ||
                keyword.toLowerCase().includes(k.toLowerCase())
            )
          ))
    )
    .slice(0, limit);

  return related;
};

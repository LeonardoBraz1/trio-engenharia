export interface ServiceArticle {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  images: string[];
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content?: string;
      items?: Array<{
        title: string;
        description: string;
      }>;
    }>;
    conclusion: string;
  };
}

export const servicesData: Record<string, ServiceArticle> = {
  "brinquedos-playground": {
    slug: "brinquedos-playground",
    title:
      "Laudo Técnico para Playgrounds - Vistoria e Segurança Completa | ÍTRIO",
    metaDescription:
      "Vistoria técnica completa, adequações e laudos de segurança para playgrounds. Engenheiros especializados em segurança de brinquedos. Laudo técnico playground com ART, duas vias encadernadas e relatório de melhorias. Atendemos escolas, condomínios, buffets e shoppings.",
    keywords: [
      "vistoria playground",
      "laudo segurança playground",
      "adequação playground",
      "engenheiro playground",
      "vistoria brinquedos",
      "laudo técnico playground",
      "segurança playground",
      "certificação playground",
      "laudo playground escola",
      "laudo playground condomínio",
      "laudo playground buffet",
      "laudo playground shopping",
      "ART playground",
      "vistoria técnica playground",
      "renovação laudo playground",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR A VISTORIA E LAUDO TÉCNICO DO SEU PLAYGROUND COM URGÊNCIA? A ÍTRIO Engenharia realiza vistoria técnica completa e elabora laudo técnico de segurança para playgrounds, com emissão de ART, garantindo conformidade legal e segurança das crianças. Realizamos uma avaliação técnica detalhada dos playgrounds para garantir que todos os brinquedos e áreas de lazer estejam seguros e em conformidade com as normas vigentes para uso adequado. Entre em contato e peça um orçamento!",
      sections: [
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Emissão de ART",
              description:
                "Incluímos na contratação a emissão de ART (Anotação de Responsabilidade Técnica), um documento essencial assinado por um engenheiro registrado no CREA.",
            },
            {
              title: "Laudo técnico",
              description:
                "Com laudos técnicos especializados, atestamos a conformidade de máquinas, equipamentos e processos, assegurando segurança e atendimento às normas.",
            },
            {
              title: "Relatório de melhorias",
              description:
                "Elaboramos um relatório detalhado de melhorias com sugestões práticas para otimização do playground, identificando pontos de atenção e recomendações de manutenção.",
            },
            {
              title: "Visita técnica presencial",
              description:
                "Realizamos visita técnica presencial do engenheiro para uma inspeção realizada pessoalmente, garantindo análise completa de todos os equipamentos, estruturas, fixações e áreas de impacto.",
            },
          ],
        },
        {
          title: "A IMPORTÂNCIA DO LAUDO TÉCNICO PARA PLAYGROUNDS",
          content:
            "O laudo técnico é essencial para garantir a conformidade legal com a legislação brasileira e o atendimento às normas técnicas aplicáveis, sendo frequentemente exigido por órgãos fiscalizadores e legislações municipais para o funcionamento de playgrounds. Além disso, assegura a segurança das crianças, confirmando que o equipamento está em boas condições de uso e livre de riscos. É necessário renovar o laudo periodicamente (geralmente a cada 6 meses ou conforme exigência local) e deve ser assinado por um engenheiro registrado no CREA para manter a validade e a segurança contínua. Sem o laudo técnico adequado, você corre riscos de multas, interdição do playground e, principalmente, acidentes que podem comprometer a segurança das crianças.",
        },
        {
          title: "BENEFÍCIOS DE MANTER O LAUDO TÉCNICO ATUALIZADO",
          content:
            "Manter o laudo técnico atualizado traz diversos benefícios: evita multas ao garantir que você está em conformidade com as exigências legais dos órgãos fiscalizadores, aumenta a segurança ao proteger as crianças e melhorar a confiança dos pais e responsáveis, facilita inspeções, tornando auditorias e verificações mais simples e rápidas, valoriza o empreendimento ao demonstrar compromisso com a segurança, previne acidentes através da identificação precoce de problemas e riscos, e garante tranquilidade ao saber que o playground está em conformidade com todas as normas técnicas vigentes.",
        },
        {
          title: "NOSSOS SERVIÇOS DE VISTORIA E LAUDO TÉCNICO",
          items: [
            {
              title: "Análise estrutural",
              description:
                "Análise estrutural detalhada de todos os equipamentos.",
            },
            {
              title: "Verificação de fixações",
              description: "Verificação de fixações e ancoragens.",
            },
            {
              title: "Avaliação de áreas de impacto",
              description:
                "Avaliação de áreas de impacto e superfícies de segurança.",
            },
            {
              title: "Inspeção visual e tátil",
              description: "Inspeção visual e tátil de todos os componentes.",
            },
            {
              title: "Verificação de altura",
              description: "Verificação de altura de queda livre.",
            },
            {
              title: "Análise de espaçamento",
              description: "Análise de espaçamento entre equipamentos.",
            },
            {
              title: "Avaliação de manutenção",
              description: "Avaliação de condições de manutenção.",
            },
            {
              title: "Verificação de sinalização",
              description: "Verificação de sinalização e orientações de uso.",
            },
            {
              title: "Emissão de laudo técnico",
              description:
                "Emissão de laudo técnico detalhado com todas as constatações. Realizamos também adequações necessárias para garantir conformidade com as normas de segurança, incluindo orientações para correções e melhorias.",
            },
          ],
        },
        {
          title: "TIPOS DE CLIENTES QUE ATENDEMOS",
          items: [
            {
              title: "Escolas e instituições de ensino",
              description:
                "Escolas e instituições de ensino que precisam garantir a segurança dos alunos nos playgrounds escolares.",
            },
            {
              title: "Condomínios residenciais e comerciais",
              description:
                "Condomínios residenciais e comerciais que buscam manter seus playgrounds em conformidade.",
            },
            {
              title: "Buffets infantis e espaços de festa",
              description:
                "Buffets infantis e espaços de festa que precisam de laudo técnico para operação.",
            },
            {
              title: "Shoppings centers",
              description:
                "Shoppings centers e estabelecimentos comerciais com áreas de recreação.",
            },
            {
              title: "Parques públicos e privados",
              description: "Parques públicos e privados.",
            },
            {
              title: "Hotéis e resorts",
              description: "Hotéis e resorts com áreas de lazer infantil.",
            },
            {
              title: "Entre outros",
              description:
                "Atendemos entre outros estabelecimentos: qualquer local que possua playground e precise de documentação técnica adequada. Para cada tipo de cliente, adaptamos nossa abordagem e garantimos que todas as necessidades específicas sejam atendidas.",
            },
          ],
        },
        {
          title: "PROCESSO DE VISTORIA E ELABORAÇÃO DO LAUDO",
          items: [
            {
              title: "Visita técnica presencial",
              description:
                "Primeiro, agendamos uma visita técnica presencial onde nosso engenheiro realiza inspeção completa do playground.",
            },
            {
              title: "Elaboração do laudo",
              description:
                "Em seguida, elaboramos o laudo técnico detalhado com todas as constatações, incluindo fotos e descrições.",
            },
            {
              title: "Relatório de melhorias",
              description:
                "Preparamos o relatório de melhorias com sugestões práticas.",
            },
            {
              title: "Emissão de ART",
              description: "Emitimos a ART junto ao CREA.",
            },
            {
              title: "Encadernação",
              description:
                "Encadernamos duas vias do laudo (uma para você e outra para órgão fiscalizador). (Se necessário)",
            },
            {
              title: "Entrega",
              description:
                "Entregamos toda a documentação completa. Todo o processo é acompanhado de perto, garantindo agilidade e qualidade na entrega.",
            },
          ],
        },
      ],
      conclusion:
        "Evite multas, interdições e acidentes mantendo seu playground em conformidade. Com nosso serviço especializado em vistoria e laudo técnico de playgrounds, cuidamos de toda a verificação, emissão de ART e laudo técnico necessário para manter seus equipamentos seguros e em conformidade. Oferecemos também acompanhamento e orientações para manutenção preventiva, garantindo segurança para as crianças e tranquilidade para você. Proteja seu playground e as crianças que o utilizam! Solicite nossa visita técnica e mantenha seu playground seguro e conforme as normas. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "ar-condicionado-pmoc": {
    slug: "ar-condicionado-pmoc",
    title:
      "PMOC - Plano de Manutenção, Operação e Controle de Ar Condicionado | ÍTRIO",
    metaDescription:
      "Elaboração de PMOC completo, inspeções periódicas e laudos técnicos para sistemas de ar condicionado. Engenheiros especializados em climatização e qualidade do ar interno. Atendemos empresas, clínicas, hospitais, shoppings e estabelecimentos comerciais.",
    keywords: [
      "PMOC ar condicionado",
      "plano manutenção ar condicionado",
      "laudo técnico ar condicionado",
      "engenheiro climatização",
      "vistoria ar condicionado",
      "manutenção preventiva ar condicionado",
      "qualidade ar interno",
      "certificação PMOC",
      "PMOC ANVISA",
      "PMOC obrigatório",
      "elaboração PMOC",
      "PMOC empresas",
      "PMOC clínicas",
      "PMOC hospitais",
      "conformidade PMOC",
    ],
    heroImage:
      "https://cdn.pixabay.com/photo/2024/06/21/08/05/air-conditioner-8843842_1280.png",
    images: [],
    content: {
      introduction:
        "PRECISA ELABORAR OU RENOVAR O PMOC DO SEU SISTEMA DE AR CONDICIONADO? A ÍTRIO Engenharia elabora PMOC completo (Plano de Manutenção, Operação e Controle) para sistemas de climatização, realiza inspeções periódicas e emite laudos técnicos, garantindo conformidade com a NBR 17037:2023 e LEI N° 13.589 e qualidade do ar interno. Especialistas em PMOC para empresas, clínicas, hospitais, shoppings e estabelecimentos comerciais. Atendimento ágil e suporte completo até a emissão do laudo técnico e relatório de conformidade, sem complicações.",
      sections: [
        {
          title: "O que é PMOC e quando é obrigatório?",
          content:
            "O PMOC é um documento técnico obrigatório estabelecido pela NBR 17037:2023 e LEI N° 13.589, que define as diretrizes para manutenção, operação e controle de sistemas de climatização. É essencial para garantir a qualidade do ar interno e prevenir problemas de saúde relacionados à má qualidade do ar, como síndrome do edifício doente, alergias respiratórias e transmissão de doenças. O PMOC é obrigatório para todos os estabelecimentos que possuam sistemas de climatização acima de 60.000BTU/h, isto é, empresas em geral, clínicas, hospitais, shoppings, hotéis, restaurantes, e demais locais de uso público ou coletivo. Sem o PMOC adequado, sua empresa corre riscos de multas, interdição e problemas de saúde para funcionários e clientes.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO DE PMOC",
          items: [
            {
              title: "Cadastro técnico completo",
              description:
                "Cadastro técnico completo do sistema de climatização com todas as especificações.",
            },
            {
              title: "Plano de manutenção preventiva",
              description:
                "Plano de manutenção preventiva detalhado com cronograma e procedimentos.",
            },
            {
              title: "Plano de operação e controle",
              description:
                "Plano de operação e controle com protocolos de funcionamento.",
            },
            {
              title: "Inspeções periódicas",
              description: "Inspeções periódicas realizadas por engenheiro.",
            },
            {
              title: "Laudos técnicos",
              description:
                "Laudos técnicos a fim de verificar a integridade dos equipamentos.",
            },
            {
              title: "Relatórios de conformidade",
              description: "Relatórios de conformidade.",
            },
            {
              title: "Documentação completa",
              description: "Documentação completa para fiscalização.",
            },
            {
              title: "Orientações para manutenção",
              description: "Orientações para manutenção preventiva.",
            },
            {
              title: "Suporte técnico contínuo",
              description:
                "Toda a documentação é elaborada seguindo rigorosamente a legislação e normas técnicas vigentes.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DO PMOC ADEQUADO E ATUALIZADO",
          items: [
            {
              title: "Melhor qualidade do ar interno",
              description:
                "Reduzindo problemas de saúde e aumentando o bem-estar.",
            },
            {
              title: "Redução de custos",
              description:
                "Com manutenção corretiva através de manutenção preventiva adequada.",
            },
            {
              title: "Conformidade legal",
              description:
                "Evitando multas e autuações da ANVISA e órgãos fiscalizadores.",
            },
            {
              title: "Prevenção de problemas de saúde",
              description: "Relacionados à má qualidade do ar.",
            },
            {
              title: "Maior eficiência energética",
              description:
                "Dos sistemas de climatização, reduzindo custos operacionais.",
            },
            {
              title: "Aumento da vida útil dos equipamentos",
              description: "",
            },
            {
              title: "Tranquilidade",
              description:
                "Ao saber que está em conformidade com a legislação.",
            },
            {
              title: "Valorização do estabelecimento",
              description: "Ao demonstrar compromisso com a saúde e segurança.",
            },
          ],
        },
        {
          title: "NOSSOS SERVIÇOS DE PMOC COMPLETOS",
          items: [
            {
              title: "Plano de manutenção preventiva",
              description:
                "Plano de manutenção preventiva com cronograma anual.",
            },
            {
              title: "Plano de operação e controle",
              description:
                "Plano de operação e controle com protocolos específicos.",
            },
            {
              title: "Inspeções periódicas",
              description:
                "Inspeções periódicas realizadas por engenheiro especializado.",
            },
            {
              title: "Laudos técnicos",
              description:
                "Laudos técnicos a fim de verificar a integridade dos equipamentos.",
            },
            {
              title: "Relatórios de conformidade",
              description: "Relatórios de conformidade para fiscalização.",
            },
            {
              title: "Documentação completa",
              description: "Documentação completa e organizada.",
            },
            {
              title: "Orientações para manutenção",
              description: "Orientações para manutenção preventiva.",
            },
            {
              title: "Treinamento de equipe",
              description: "Treinamento de equipe quando necessário.",
            },
            {
              title: "Acompanhamento contínuo",
              description:
                "Acompanhamento contínuo. Realizamos também adequações necessárias para garantir conformidade total com a legislação vigente, identificando e corrigindo não conformidades.",
            },
          ],
        },
        {
          title: "TIPOS DE ESTABELECIMENTOS QUE ATENDEMOS",
          items: [
            {
              title: "Empresas e escritórios comerciais",
              description:
                "Empresas e escritórios comerciais que precisam de PMOC para seus sistemas de climatização.",
            },
            {
              title: "Clínicas médicas e odontológicas",
              description:
                "Clínicas médicas e odontológicas que exigem qualidade do ar interno.",
            },
            {
              title: "Hospitais e unidades de saúde",
              description:
                "Hospitais e unidades de saúde com requisitos rigorosos de climatização.",
            },
            {
              title: "Shoppings centers",
              description:
                "Shoppings centers e estabelecimentos comerciais de grande porte.",
            },
            {
              title: "Hotéis e resorts",
              description:
                "Hotéis e resorts com sistemas de climatização central.",
            },
            {
              title: "Restaurantes",
              description: "Restaurantes e estabelecimentos alimentícios.",
            },
            {
              title: "Academias e centros esportivos",
              description: "Academias e centros esportivos.",
            },
            {
              title: "Escolas e instituições de ensino",
              description: "Escolas e instituições de ensino.",
            },
            {
              title: "Entre outros",
              description:
                "Atendemos entre outros estabelecimentos: qualquer local que possua sistema de ar condicionado e precise de PMOC. Para cada tipo de estabelecimento, adaptamos o PMOC às necessidades específicas e garantimos total conformidade.",
            },
          ],
        },
        {
          title: "PROCESSO DE ELABORAÇÃO DO PMOC",
          items: [
            {
              title: "Vistoria técnica",
              description:
                "Primeiro, realizamos vistoria técnica do sistema de climatização para cadastro completo.",
            },
            {
              title: "Elaboração do PMOC",
              description:
                "Em seguida, elaboramos o PMOC detalhado com todos os planos e procedimentos.",
            },
            {
              title: "Documentação",
              description:
                "Preparamos a documentação completa para fiscalização.",
            },
            {
              title: "Inspeções periódicas",
              description:
                "Realizamos inspeções periódicas conforme cronograma.",
            },
            {
              title: "Laudos técnicos",
              description:
                "Emitimos laudos técnicos para verificar a integridade dos equipamentos.",
            },
            {
              title: "Relatórios",
              description: "Fornecemos relatórios de conformidade.",
            },
            {
              title: "Suporte contínuo",
              description:
                "Oferecemos suporte contínuo para manutenção e atualizações. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com a legislação.",
            },
          ],
        },
      ],
      conclusion:
        "Evite multas, interdições e problemas de saúde mantendo seu sistema de ar condicionado em conformidade. Com nosso serviço especializado em elaboração de PMOC, cuidamos de toda a documentação, inspeções periódicas e laudos técnicos necessários para manter seu sistema de climatização seguro e em conformidade com a ANVISA. Oferecemos também acompanhamento contínuo e orientações para manutenção preventiva, garantindo qualidade do ar interno e tranquilidade para sua empresa. Proteja sua empresa, funcionários e clientes! Solicite nossa consultoria e mantenha seu sistema de climatização em conformidade. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "maquinas-nr12": {
    slug: "maquinas-nr12",
    title:
      "Adequação e Laudo NR12 - Segurança em Máquinas e Equipamentos | ÍTRIO",
    metaDescription:
      "Adequações, vistorias e laudos técnicos conforme NR12. Engenheiros especializados em segurança de máquinas e equipamentos industriais. Adequação NR12 completa com instalação de proteções, dispositivos de segurança e emissão de ART.",
    keywords: [
      "NR12",
      "laudo NR12",
      "adequação NR12",
      "vistoria máquinas",
      "engenheiro segurança máquinas",
      "laudo técnico NR12",
      "segurança máquinas",
      "certificação NR12",
      "adequação máquinas NR12",
      "proteções máquinas",
      "dispositivos segurança NR12",
      "regularização NR12",
      "conformidade NR12",
      "vistoria NR12",
    ],
    heroImage:
      "https://cdn.pixabay.com/photo/2013/09/27/12/18/company-186980_960_720.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA ADEQUAR SUAS MÁQUINAS À NR12 COM URGÊNCIA? A ÍTRIO Engenharia realiza adequação completa de máquinas e equipamentos conforme NR12, incluindo instalação de proteções, dispositivos de segurança, sinalização adequada, vistoria técnica detalhada e emissão de laudo técnico com ART. Especialistas em segurança de máquinas e equipamentos industriais. Atendimento ágil e suporte completo até a emissão do laudo técnico e relatório de conformidade, sem complicações. Para indústrias dos mais diversos segmentos que utilizem qualquer tipo de máquinas e equipamentos.",
      sections: [
        {
          title: "O QUE É A NR12 E POR QUE É OBRIGATÓRIA?",
          content:
            "A Norma Regulamentadora 12 (NR12) estabelece os requisitos mínimos de segurança para o trabalho em máquinas e equipamentos, incluindo proteções, dispositivos de segurança, sinalização e procedimentos de trabalho seguro. É obrigatória para todas as empresas que utilizam máquinas e equipamentos, independentemente do porte ou setor. A NR12 visa prevenir acidentes de trabalho, garantir a segurança dos trabalhadores e estabelecer padrões mínimos de segurança para operação de máquinas. Sem a adequação à NR12, sua empresa corre riscos sérios: acidentes de trabalho, multas trabalhistas, autuações do Ministério do Trabalho, responsabilidade civil e criminal, e até interdição de máquinas e equipamentos.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO DE ADEQUAÇÃO NR12",
          items: [
            {
              title: "Vistoria técnica completa",
              description:
                "Vistoria técnica completa de todas as máquinas e equipamentos.",
            },
            {
              title: "Análise de riscos",
              description: "Análise de riscos detalhada.",
            },
            {
              title: "Projeto de adequação",
              description: "Projeto de adequação com especificações técnicas.",
            },
            {
              title: "Instalação de proteções",
              description: "Instalação de proteções fixas e móveis.",
            },
            {
              title: "Dispositivos de segurança",
              description:
                "Instalação de dispositivos de segurança (sensores, cortinas de luz, paradas de emergência).",
            },
            {
              title: "Sinalização adequada",
              description: "Sinalização adequada conforme NR12.",
            },
            {
              title: "Procedimentos de trabalho seguro",
              description: "Elaboração de procedimentos de trabalho seguro.",
            },
            {
              title: "Treinamento de operadores",
              description: "Treinamento de operadores quando necessário.",
            },
            {
              title: "Laudo técnico completo",
              description: "Emissão de laudo técnico completo.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica).",
            },
            {
              title: "Relatório de conformidade",
              description:
                "Relatório de conformidade. Toda a adequação é realizada seguindo rigorosamente a NR12 e demais normas técnicas aplicáveis.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DA ADEQUAÇÃO NR12",
          items: [
            {
              title: "Previne acidentes",
              description:
                "De trabalho, garantindo a segurança dos trabalhadores e evitando lesões graves ou fatais.",
            },
            {
              title: "Evita multas",
              description:
                "E autuações trabalhistas do Ministério do Trabalho, mantendo sua empresa em conformidade com a legislação.",
            },
            {
              title: "Reduz riscos",
              description:
                "De responsabilidade civil e criminal em caso de acidentes.",
            },
            {
              title: "Aumenta a produtividade",
              description:
                "Ao criar um ambiente de trabalho mais seguro e confiável.",
            },
            {
              title: "Melhora a imagem",
              description:
                "Da empresa ao demonstrar compromisso com a segurança.",
            },
            {
              title: "Reduz custos",
              description: "Com afastamentos e indenizações por acidentes.",
            },
            {
              title: "Garante tranquilidade",
              description:
                "Ao saber que está em conformidade com todas as exigências legais.",
            },
          ],
        },
        {
          title: "TIPOS DE MÁQUINAS E EQUIPAMENTOS ATENDIDOS",
          items: [
            {
              title: "Prensas",
              description: "Prensas.",
            },
            {
              title: "Guilhotinas",
              description: "Guilhotinas.",
            },
            {
              title: "Serras",
              description: "Serras.",
            },
            {
              title: "Tornos",
              description: "Tornos.",
            },
            {
              title: "Fresadoras",
              description: "Fresadoras.",
            },
            {
              title: "Furadeiras",
              description: "Furadeiras.",
            },
            {
              title: "Máquinas de solda",
              description: "Máquinas de solda.",
            },
            {
              title: "Máquinas têxteis",
              description: "Máquinas têxteis.",
            },
            {
              title: "Máquinas de embalagem",
              description: "Máquinas de embalagem.",
            },
            {
              title: "Máquinas de impressão",
              description: "Máquinas de impressão.",
            },
            {
              title: "Equipamentos de construção",
              description: "Equipamentos de construção.",
            },
            {
              title: "Máquinas agrícolas",
              description: "Máquinas agrícolas.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos demais máquinas e equipamentos que necessitam de adequação à NR12. Atuamos em indústrias de todos os segmentos, oficinas mecânicas, fábricas, empresas de construção, e qualquer estabelecimento que utilize máquinas e equipamentos e precise de adequação ou vistoria conforme NR12.",
            },
          ],
        },
        {
          title: "PROCESSO DE ADEQUAÇÃO NR12",
          items: [
            {
              title: "Vistoria técnica",
              description:
                "Primeiro, realizamos vistoria técnica completa de todas as máquinas.",
            },
            {
              title: "Análise de riscos e projeto",
              description:
                "Em seguida, elaboramos análise de riscos e projeto de adequação.",
            },
            {
              title: "Instalação de proteções",
              description:
                "Realizamos a instalação de proteções e dispositivos de segurança.",
            },
            {
              title: "Sinalização",
              description: "Aplicamos sinalização adequada.",
            },
            {
              title: "Procedimentos",
              description: "Elaboramos procedimentos de trabalho seguro.",
            },
            {
              title: "Treinamento",
              description: "Realizamos treinamento quando necessário.",
            },
            {
              title: "Laudo técnico",
              description: "Emitimos laudo técnico completo.",
            },
            {
              title: "ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Relatório",
              description:
                "Fornecemos relatório de conformidade. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com a NR12.",
            },
          ],
        },
      ],
      conclusion:
        "Evite acidentes de trabalho, multas trabalhistas e autuações mantendo suas máquinas e equipamentos em conformidade com a NR12. Com nosso serviço especializado em adequação NR12, cuidamos de toda a instalação de proteções, dispositivos de segurança, sinalização, vistoria técnica e emissão de laudo técnico e ART necessários para manter suas máquinas seguras e em conformidade. Oferecemos também treinamento de operadores e orientações para manutenção preventiva, garantindo segurança para sua equipe e conformidade legal. Proteja sua empresa, funcionários e operação! Solicite nossa visita técnica e mantenha suas máquinas seguras e conforme a NR12. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "nr11-sistemas-transportadores": {
    slug: "nr11-sistemas-transportadores",
    title:
      "NR11 - Segurança em Sistemas Transportadores | Vistoria e Laudo Técnico",
    metaDescription:
      "Avaliações, laudos técnicos e orientações de adequação para sistemas transportadores conforme NR11. Engenheiros especializados em segurança de transporte de materiais. Atendemos elevadores, guindastes, monta-cargas, esteiras transportadoras e empilhadeiras.",
    keywords: [
      "NR11",
      "sistemas transportadores",
      "laudo NR11",
      "vistoria transportadores",
      "engenheiro NR11",
      "esteira transportadora",
      "segurança transporte materiais",
      "adequação NR11",
      "vistoria elevadores",
      "vistoria guindastes",
      "vistoria monta-cargas",
      "vistoria empilhadeiras",
      "regularização NR11",
    ],
    heroImage:
      "https://cdn.pixabay.com/photo/2021/07/23/19/15/truck-6488011_1280.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA E LAUDO TÉCNICO DE SEUS SISTEMAS TRANSPORTADORES CONFORME NR11? A ÍTRIO Engenharia realiza avaliação completa, adequação e emissão de laudos técnicos para sistemas transportadores conforme NR11, garantindo segurança e conformidade. Especialistas em segurança de transporte de materiais. Atendimento ágil e suporte completo até a emissão do laudo técnico e relatório de conformidade. Para empresas que utilizam elevadores, guindastes, monta-cargas, esteiras transportadoras, empilhadeiras e demais equipamentos de transporte.",
      sections: [
        {
          title: "O QUE É A NR11 E POR QUE É OBRIGATÓRIA?",
          content:
            "A Norma Regulamentadora 11 (NR11) estabelece os requisitos de segurança para operação de elevadores, guindastes, monta-cargas, transportadores industriais e demais equipamentos de transporte de materiais. É fundamental para garantir a segurança dos trabalhadores e prevenir acidentes. A NR11 é obrigatória para todas as empresas que possuem equipamentos de transporte de materiais, incluindo elevadores de carga, guindastes, monta-cargas, esteiras transportadoras, empilhadeiras, pontes rolantes e demais sistemas de transporte. Sem a adequação à NR11 e laudos técnicos atualizados, sua empresa corre riscos sérios: acidentes de trabalho, multas trabalhistas, autuações do Ministério do Trabalho e até interdição de equipamentos.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO NR11",
          items: [
            {
              title: "Vistoria técnica completa",
              description:
                "Vistoria técnica completa de todos os sistemas transportadores.",
            },
            {
              title: "Avaliação de condições",
              description: "Avaliação de condições de segurança.",
            },
            {
              title: "Análise de riscos",
              description: "Análise de riscos detalhada.",
            },
            {
              title: "Adequações necessárias",
              description: "Adequações necessárias quando aplicável.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico completo conforme NR11.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica).",
            },
            {
              title: "Relatório de conformidade",
              description: "Relatório de conformidade.",
            },
            {
              title: "Orientações",
              description: "Orientações para operação segura.",
            },
            {
              title: "Recomendações",
              description: "Recomendações de manutenção preventiva.",
            },
            {
              title: "Suporte técnico",
              description:
                "Suporte técnico contínuo. Toda a avaliação é realizada seguindo rigorosamente a NR11 e demais normas técnicas aplicáveis.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DA ADEQUAÇÃO NR11",
          items: [
            {
              title: "Previne acidentes",
              description:
                "De trabalho, garantindo a segurança dos trabalhadores e evitando lesões graves ou fatais.",
            },
            {
              title: "Evita multas",
              description:
                "E autuações trabalhistas do Ministério do Trabalho, mantendo sua empresa em conformidade com a legislação.",
            },
            {
              title: "Reduz riscos",
              description:
                "De responsabilidade civil e criminal em caso de acidentes.",
            },
            {
              title: "Aumenta a produtividade",
              description: "Ao criar um ambiente de trabalho mais seguro.",
            },
            {
              title: "Melhora a imagem",
              description:
                "Da empresa ao demonstrar compromisso com a segurança.",
            },
            {
              title: "Garante tranquilidade",
              description:
                "Ao saber que está em conformidade com todas as exigências legais.",
            },
          ],
        },
        {
          title: "EQUIPAMENTOS E SETORES ATENDIDOS",
          items: [
            {
              title: "Elevadores",
              description: "Elevadores de carga.",
            },
            {
              title: "Guindastes",
              description: "Guindastes de todos os tipos.",
            },
            {
              title: "Monta-cargas",
              description: "Monta-cargas industriais.",
            },
            {
              title: "Esteiras transportadoras",
              description: "Esteiras transportadoras.",
            },
            {
              title: "Empilhadeiras",
              description: "Empilhadeiras.",
            },
            {
              title: "Pontes rolantes",
              description: "Pontes rolantes.",
            },
            {
              title: "Sistemas de transporte contínuo",
              description: "Sistemas de transporte contínuo.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos demais equipamentos de transporte de materiais. Atuamos em indústrias de todos os segmentos, armazéns e centros de distribuição, empresas de construção, portos e terminais, e qualquer estabelecimento que utilize sistemas transportadores e precise de vistoria ou adequação conforme NR11.",
            },
          ],
        },
        {
          title: "PROCESSO DE VISTORIA E ADEQUAÇÃO NR11",
          items: [
            {
              title: "Vistoria técnica",
              description:
                "Primeiro, realizamos vistoria técnica completa de todos os sistemas transportadores.",
            },
            {
              title: "Análise de riscos",
              description:
                "Em seguida, elaboramos análise de riscos e avaliação de condições.",
            },
            {
              title: "Adequações",
              description:
                "Realizamos adequações necessárias quando aplicável.",
            },
            {
              title: "Laudo técnico",
              description: "Emitimos laudo técnico completo conforme NR11.",
            },
            {
              title: "ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Relatório",
              description: "Fornecemos relatório de conformidade.",
            },
            {
              title: "Orientações",
              description:
                "Oferecemos orientações para operação segura e manutenção. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com a NR11.",
            },
          ],
        },
      ],
      conclusion:
        "Evite acidentes de trabalho, multas trabalhistas e autuações mantendo seus sistemas transportadores em conformidade com a NR11. Com nosso serviço especializado em vistoria e adequação NR11, cuidamos de toda a avaliação, adequações necessárias, vistoria técnica e emissão de laudo técnico e ART necessários para manter seus equipamentos seguros e em conformidade. Oferecemos também orientações para operação segura e manutenção preventiva, garantindo segurança para sua equipe e conformidade legal. Proteja sua empresa, funcionários e operação! Solicite nossa visita técnica e mantenha seus sistemas transportadores seguros e conforme a NR11. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "maquinas-pesadas": {
    slug: "maquinas-pesadas",
    title:
      "Vistoria e ART para Máquinas Pesadas | Engenharia Técnica Especializada",
    metaDescription:
      "Vistorias técnicas, análises detalhadas e emissão de ART para máquinas pesadas. Engenheiros especializados em equipamentos industriais pesados. Atendemos escavadeiras, retroescavadeiras, guindastes, empilhadeiras, tratores e máquinas agrícolas.",
    keywords: [
      "vistoria máquinas pesadas",
      "ART máquinas pesadas",
      "laudo máquinas pesadas",
      "engenheiro máquinas pesadas",
      "vistoria equipamentos industriais",
      "certificação máquinas pesadas",
      "análise máquinas pesadas",
      "vistoria escavadeiras",
      "vistoria guindastes",
      "vistoria empilhadeiras",
      "vistoria tratores",
    ],
    heroImage:
      "https://cdn.pixabay.com/photo/2016/02/01/21/15/excavator-1174428_1280.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA TÉCNICA E EMITIR ART PARA SUAS MÁQUINAS PESADAS? A ÍTRIO Engenharia realiza vistorias técnicas especializadas e emite ART (Anotação de Responsabilidade Técnica) para máquinas pesadas, garantindo segurança e conformidade. Especialistas em equipamentos industriais pesados. Atendimento ágil e suporte completo até a emissão do laudo técnico e ART. Para empresas que utilizam escavadeiras, retroescavadeiras, guindastes, empilhadeiras, tratores, máquinas agrícolas e equipamentos de construção.",
      sections: [
        {
          title: "A IMPORTÂNCIA DA VISTORIA EM MÁQUINAS PESADAS",
          content:
            "A vistoria técnica em máquinas pesadas é essencial para identificar problemas estruturais, verificar condições de segurança, avaliar desgastes e garantir que os equipamentos estejam em condições adequadas de operação. Realizamos análises técnicas dos componentes mecânicos críticos de máquinas pesadas, como estruturas, sistemas hidráulicos, cabos de aço, ganchos, freios e dispositivos de segurança. Sem vistoria técnica adequada e ART, sua empresa corre riscos sérios: acidentes graves, paralisação de equipamentos, responsabilidade civil e criminal, e problemas legais que podem comprometer a operação.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description:
                "Vistoria técnica completa realizada por engenheiro especializado.",
            },
            {
              title: "Análise estrutural",
              description: "Análise estrutural detalhada.",
            },
            {
              title: "Verificação de sistemas",
              description: "Verificação de sistemas hidráulicos e elétricos.",
            },
            {
              title: "Avaliação de condições",
              description: "Avaliação de desgastes e condições gerais.",
            },
            {
              title: "Testes de funcionamento",
              description: "Testes de funcionamento quando necessário.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico completo.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA.",
            },
            {
              title: "Relatório",
              description: "Relatório de condições e recomendações.",
            },
            {
              title: "Orientações",
              description: "Orientações para manutenção preventiva.",
            },
            {
              title: "Suporte técnico",
              description:
                "Suporte técnico contínuo. Toda a vistoria é realizada seguindo rigorosamente as normas técnicas aplicáveis.",
            },
          ],
        },

        {
          title: "BENEFÍCIOS DA VISTORIA TÉCNICA ADEQUADA",
          items: [
            {
              title: "Garante segurança operacional",
              description:
                "Identificando problemas antes que se tornem acidentes.",
            },
            {
              title: "Evita paralisação",
              description:
                "Inesperada de equipamentos através de manutenção preventiva adequada.",
            },
            {
              title: "Reduz custos",
              description:
                "Com reparos corretivos ao identificar problemas precocemente.",
            },
            {
              title: "Garante conformidade legal",
              description: "Com emissão de ART adequada.",
            },
            {
              title: "Aumenta vida útil",
              description:
                "Aumenta a vida útil dos equipamentos através de manutenção preventiva.",
            },
            {
              title: "Melhora produtividade",
              description: "Ao manter equipamentos em condições ideais.",
            },
            {
              title: "Garante tranquilidade",
              description:
                "Ao saber que seus equipamentos estão seguros e em conformidade.",
            },
          ],
        },
        {
          title: "TIPOS DE MÁQUINAS PESADAS ATENDIDAS",
          items: [
            {
              title: "Escavadeiras e retroescavadeiras",
              description:
                "Escavadeiras e retroescavadeiras de todos os tamanhos.",
            },
            {
              title: "Guindastes e gruas",
              description: "Guindastes e gruas de todos os tipos.",
            },
            {
              title: "Tratores",
              description: "Tratores e máquinas agrícolas.",
            },
            {
              title: "Equipamentos de construção",
              description:
                "Equipamentos de construção (pá carregadeira, motoniveladora, etc.).",
            },
            {
              title: "Máquinas de mineração",
              description: "Máquinas de mineração.",
            },
            {
              title: "Equipamentos portuários",
              description: "Equipamentos portuários.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos demais máquinas pesadas que necessitam de vistoria técnica e ART. Atuamos em empresas de construção, indústrias, empresas de mineração, portos e terminais, empresas agrícolas, e qualquer estabelecimento que utilize máquinas pesadas e precise de vistoria técnica e ART.",
            },
          ],
        },
        {
          title: "PROCESSO DE VISTORIA E EMISSÃO DE ART",
          items: [
            {
              title: "Visita técnica",
              description:
                "Primeiro, agendamos visita técnica para análise inicial da máquina.",
            },
            {
              title: "Vistoria completa",
              description:
                "Em seguida, realizamos vistoria técnica completa de todos os componentes.",
            },
            {
              title: "Laudo técnico",
              description:
                "Elaboramos laudo técnico detalhado com todas as constatações.",
            },
            {
              title: "ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Relatório",
              description: "Fornecemos relatório de condições e recomendações.",
            },
            {
              title: "Orientações",
              description:
                "Oferecemos orientações para manutenção preventiva. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total.",
            },
          ],
        },
      ],
      conclusion:
        "Evite acidentes graves, paralisação de equipamentos e problemas legais mantendo suas máquinas pesadas em conformidade. Com nosso serviço especializado em vistoria técnica e ART para máquinas pesadas, cuidamos de toda a análise, vistoria técnica e emissão de laudo técnico e ART necessários para manter seus equipamentos seguros e em conformidade. Oferecemos também orientações para manutenção preventiva e adequações necessárias, garantindo segurança para sua equipe e confiabilidade operacional. Proteja sua empresa, funcionários e operação! Solicite nossa visita técnica e mantenha suas máquinas pesadas seguras e em conformidade. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "nr13-vasos-pressao": {
    slug: "nr13-vasos-pressao",
    title: "Inspeção NR13 - Caldeiras, Vasos de Pressão e Tubulações | ÍTRIO",
    metaDescription:
      "Inspeção NR13 de caldeiras, autoclaves, vasos de pressão e tubulações, com emissão de ART, garantindo conformidade técnica e segurança operacional. Engenheiros especializados em equipamentos sob pressão. Atendemos indústrias químicas, petroquímicas, oficinas, postos de combustíveis, hospitais e lavanderias industriais.",
    keywords: [
      "NR13",
      "vasos de pressão",
      "laudo NR13",
      "inspeção vasos pressão",
      "engenheiro NR13",
      "caldeiras",
      "segurança vasos pressão",
      "certificação NR13",
      "inspeção NR13 caldeiras",
      "inspeção NR13 autoclaves",
      "inspeção NR13 tubulações",
      "inspeção NR13 boilers",
      "inspeção NR13 tanques",
      "prontuário técnico NR13",
      "regularização NR13",
    ],
    heroImage:
      "https://cdn.pixabay.com/photo/2015/12/22/08/27/plumbing-1103725_1280.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR A INSPEÇÃO NR13 DO SEU EQUIPAMENTO COM URGÊNCIA? A ÍTRIO Engenharia realiza inspeção NR13 de caldeiras, autoclaves, vasos de pressão e tubulações, com emissão de ART, garantindo conformidade técnica e segurança operacional. Especialistas em inspeção NR13 de caldeiras, vasos de pressão e sistemas de tubulação. Atendimento ágil e suporte completo até a emissão do laudo técnico e relatório de conformidade, sem complicações. Para indústrias químicas e petroquímicas, oficinas, postos de combustíveis, hospitais e lavanderias industriais.",
      sections: [
        {
          title: "NOSSOS SERVIÇOS DE INSPEÇÃO NR13",
          items: [
            {
              title: "INSPEÇÃO DE CALDEIRAS",
              description:
                "Realizamos a inspeção NR13 em caldeiras, avaliando a integridade estrutural, detectando desgastes, corrosões ou falhas, e emitindo laudos técnicos detalhados. Mantemos o prontuário técnico atualizado e oferecemos suporte para manutenção preventiva e operação segura.",
            },
            {
              title: "INSPEÇÃO DE VASOS DE PRESSÃO",
              description:
                "Oferecemos a inspeção NR13 de vasos de pressão, aplicando testes não destrutivos e analisando o histórico de operação para prevenir acidentes. Emitimos laudos técnicos e ART, registrando todas as ações no prontuário técnico, garantindo conformidade e segurança industrial.",
            },
            {
              title: "INSPEÇÃO DE BOILERS",
              description:
                "Realizamos inspeção completa de boilers e aquecedores industriais, identificando riscos e garantindo a operação segura. Todos os procedimentos e resultados são registrados no prontuário técnico, incluindo recomendações de manutenção preventiva e conformidade com a NR13.",
            },
            {
              title: "INSPEÇÃO DE TUBULAÇÕES",
              description:
                "Executamos inspeções NR13 em tubulações, verificando integridade, vazamentos e desgaste de materiais. Acompanhamos com testes de estanqueidade e registramos todas as informações no prontuário técnico, assegurando confiabilidade, segurança e cumprimento das normas.",
            },
            {
              title: "INSPEÇÃO DE TANQUES METÁLICOS",
              description:
                "Realizamos avaliação completa de tanques metálicos de armazenamento, identificando corrosões e desgastes, com emissão de laudos técnicos e recomendações de manutenção preventiva. Todo o histórico é registrado no prontuário técnico, garantindo conformidade e segurança operacional.",
            },
          ],
        },
        {
          title: "O QUE É A NR13 E POR QUE É OBRIGATÓRIA?",
          content:
            "A Norma Regulamentadora 13 (NR13) estabelece os requisitos de segurança para operação de caldeiras, vasos de pressão, tubulações e demais equipamentos que operam sob pressão. É fundamental para prevenir acidentes graves e garantir a segurança dos trabalhadores. A NR13 é obrigatória para todas as empresas que possuem equipamentos sob pressão, incluindo caldeiras, vasos de pressão, autoclaves, compressores, sistemas de vapor, tubulações pressurizadas e tanques metálicos. Sem a inspeção NR13 adequada e o prontuário técnico atualizado, sua empresa corre riscos sérios: acidentes graves, paralisação de equipamentos, multas trabalhistas e até problemas legais que podem comprometer a operação.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Inspeção técnica completa",
              description:
                "Inspeção técnica completa realizada por engenheiro especializado.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA.",
            },
            {
              title: "Laudo técnico",
              description: "Laudo técnico detalhado com todas as constatações.",
            },
            {
              title: "Atualização do prontuário",
              description: "Atualização do prontuário técnico do equipamento.",
            },
            {
              title: "Relatório de conformidade",
              description: "Relatório de conformidade com a NR13.",
            },
            {
              title: "Recomendações",
              description: "Recomendações de manutenção preventiva.",
            },
            {
              title: "Orientações",
              description: "Orientações para operação segura.",
            },
            {
              title: "Testes não destrutivos",
              description: "Testes não destrutivos quando necessário.",
            },
            {
              title: "Suporte técnico",
              description:
                "Suporte técnico contínuo. Toda a documentação é elaborada seguindo rigorosamente a NR13 e demais normas técnicas aplicáveis.",
            },
          ],
        },
        {
          title: "TIPOS DE EQUIPAMENTOS E SETORES ATENDIDOS",
          items: [
            {
              title: "Caldeiras",
              description: "Caldeiras de todos os tipos e capacidades.",
            },
            {
              title: "Vasos de pressão",
              description: "Vasos de pressão industriais.",
            },
            {
              title: "Autoclaves",
              description: "Autoclaves para hospitais e indústrias.",
            },
            {
              title: "Compressores",
              description: "Compressores de ar e gases.",
            },
            {
              title: "Sistemas de vapor",
              description: "Sistemas de vapor e tubulações pressurizadas.",
            },
            {
              title: "Boilers",
              description: "Boilers e aquecedores industriais.",
            },
            {
              title: "Tanques metálicos",
              description: "Tanques metálicos de armazenamento.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos demais equipamentos que operam sob pressão. Atuamos em indústrias químicas e petroquímicas, oficinas mecânicas, postos de combustíveis, hospitais e clínicas, lavanderias industriais, indústrias alimentícias, indústrias têxteis, e qualquer empresa que possua equipamentos sob pressão e precise de inspeção NR13.",
            },
          ],
        },
        {
          title: "PROCESSO DE INSPEÇÃO NR13",
          items: [
            {
              title: "Visita técnica",
              description:
                "Primeiro, agendamos visita técnica para análise inicial do equipamento.",
            },
            {
              title: "Inspeção detalhada",
              description:
                "Em seguida, realizamos inspeção detalhada conforme NR13, incluindo testes quando necessário.",
            },
            {
              title: "Laudo técnico",
              description:
                "Elaboramos laudo técnico completo com todas as constatações.",
            },
            {
              title: "Prontuário técnico",
              description: "Atualizamos o prontuário técnico do equipamento.",
            },
            {
              title: "ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Relatório",
              description: "Fornecemos relatório de conformidade.",
            },
            {
              title: "Orientações",
              description:
                "Oferecemos orientações para manutenção e operação segura. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com a NR13.",
            },
          ],
        },
      ],
      conclusion:
        "Evite acidentes graves, paralisação de equipamentos e problemas legais mantendo seus equipamentos sob pressão em conformidade com a NR13. Com nosso serviço especializado em inspeção NR13, cuidamos de toda a verificação, emissão de prontuário técnico, laudo técnico e ART necessários para manter seus equipamentos seguros e em conformidade. Oferecemos também acompanhamento contínuo e orientações para manutenção preventiva, garantindo segurança para sua equipe e confiabilidade operacional. Proteja sua empresa, funcionários e operação! Solicite nossa visita técnica e mantenha seus equipamentos seguros e conforme a NR13. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "laudo-tecnico-art": {
    slug: "laudo-tecnico-art",
    title: "Laudo Técnico e ART - Anotação de Responsabilidade Técnica | ÍTRIO",
    metaDescription:
      "Elaboração de laudos técnicos e emissão de ART com credibilidade, segurança e responsabilidade técnica. Engenheiros registrados no CREA. Laudos técnicos para vistorias, adequações, projetos, obras e instalações.",
    keywords: [
      "laudo técnico",
      "ART",
      "anotação responsabilidade técnica",
      "engenheiro CREA",
      "laudo engenharia",
      "certificado técnico",
      "documentação técnica",
      "ART engenharia",
      "emissão ART",
      "laudo técnico CREA",
      "ART obrigatória",
      "documentação técnica engenharia",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    ],
    content: {
      introduction:
        "PRECISA ELABORAR LAUDO TÉCNICO OU EMITIR ART PARA SEU PROJETO OU SERVIÇO? A ÍTRIO Engenharia elabora laudos técnicos completos e emite ART (Anotação de Responsabilidade Técnica) com total credibilidade, segurança e responsabilidade técnica. Engenheiros registrados no CREA com ampla experiência em diversos tipos de serviços. Atendimento ágil e suporte completo até a emissão do laudo técnico e ART. Para vistorias, adequações, projetos, obras, instalações, manutenções e demais serviços de engenharia.",
      sections: [
        {
          title: "O QUE É ART E POR QUE É OBRIGATÓRIA?",
          content:
            "A ART (Anotação de Responsabilidade Técnica) é um documento obrigatório emitido por profissionais registrados no CREA que comprova a responsabilidade técnica sobre projetos, obras ou serviços de engenharia. É essencial para garantir a legalidade e segurança de trabalhos técnicos. A ART é obrigatória para praticamente todos os serviços de engenharia, incluindo vistorias, adequações, projetos, obras, instalações, manutenções, laudos técnicos e demais atividades técnicas. Sem a ART adequada, sua empresa corre riscos sérios: problemas legais, invalidação de documentos, responsabilidade técnica não comprovada, e até problemas com órgãos fiscalizadores.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Laudo técnico",
              description: "Elaboração de laudo técnico detalhado e completo.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA.",
            },
            {
              title: "Análise técnica",
              description: "Análise técnica completa do serviço ou projeto.",
            },
            {
              title: "Avaliação de conformidade",
              description: "Avaliação de conformidade com normas técnicas.",
            },
            {
              title: "Documentação completa",
              description: "Documentação completa e organizada.",
            },
            {
              title: "Relatório técnico",
              description: "Relatório técnico com todas as constatações.",
            },
            {
              title: "Orientações técnicas",
              description: "Orientações técnicas quando necessário.",
            },
            {
              title: "Suporte técnico",
              description:
                "Suporte técnico contínuo. Toda a documentação é elaborada seguindo rigorosamente as normas técnicas aplicáveis e com total responsabilidade técnica.",
            },
          ],
        },
        {
          title: "NOSSOS SERVIÇOS DE LAUDO TÉCNICO E ART",
          items: [
            {
              title: "Vistorias técnicas",
              description: "Vistorias técnicas de equipamentos e instalações.",
            },
            {
              title: "Adequações",
              description: "Adequações de máquinas e equipamentos.",
            },
            {
              title: "Projetos de engenharia",
              description: "Projetos de engenharia.",
            },
            {
              title: "Obras e instalações",
              description: "Obras e instalações.",
            },
            {
              title: "Manutenções e reparos",
              description: "Manutenções e reparos.",
            },
            {
              title: "Análises técnicas",
              description: "Análises técnicas e avaliações.",
            },
            {
              title: "Demais serviços",
              description:
                "Demais serviços que necessitam de documentação técnica. Emitimos ART para todos os tipos de serviços de engenharia, garantindo que cada trabalho tenha a responsabilidade técnica adequada registrada no CREA. Realizamos também análises técnicas, avaliações de conformidade e oferecemos documentação completa com total credibilidade.",
            },
          ],
        },
        {
          title: "QUANDO É NECESSÁRIO LAUDO TÉCNICO E ART?",
          content:
            "ART e laudos técnicos são necessários para: vistorias técnicas de equipamentos, instalações e edificações; adequações de máquinas e equipamentos às normas; projetos de engenharia de todos os tipos; obras e instalações de engenharia; manutenções e reparos técnicos; análises técnicas e avaliações; certificações e regularizações; e demais serviços de engenharia. São documentos obrigatórios que garantem a legalidade, segurança e responsabilidade técnica dos trabalhos realizados. Sem esses documentos, os trabalhos podem ser considerados inválidos ou ilegais.",
        },
        {
          title: "BENEFÍCIOS DO LAUDO TÉCNICO E ART ADEQUADOS",
          items: [
            {
              title: "Legalidade",
              description:
                "Garantem legalidade dos trabalhos, comprovando que foram realizados por profissionais habilitados.",
            },
            {
              title: "Segurança",
              description:
                "Garantem segurança ao documentar que os trabalhos seguem normas técnicas.",
            },
            {
              title: "Proteção",
              description:
                "Protegem contra responsabilidade técnica não comprovada.",
            },
            {
              title: "Facilita fiscalização",
              description:
                "Facilitam processos de fiscalização e regularização.",
            },
            {
              title: "Aumenta credibilidade",
              description: "Aumentam a credibilidade dos trabalhos realizados.",
            },
            {
              title: "Facilita transações",
              description:
                "Facilitam processos de compra, venda e financiamento.",
            },
            {
              title: "Garante tranquilidade",
              description:
                "Garantem tranquilidade ao saber que está tudo documentado e em conformidade.",
            },
          ],
        },
        {
          title: "TIPOS DE SERVIÇOS QUE ATENDEMOS",
          items: [
            {
              title: "Vistorias técnicas",
              description: "Vistorias técnicas de todos os tipos.",
            },
            {
              title: "Adequações",
              description: "Adequações de máquinas e equipamentos.",
            },
            {
              title: "Projetos",
              description: "Projetos de engenharia.",
            },
            {
              title: "Obras",
              description: "Obras e instalações.",
            },
            {
              title: "Manutenções",
              description: "Manutenções e reparos técnicos.",
            },
            {
              title: "Análises",
              description: "Análises técnicas e avaliações.",
            },
            {
              title: "Certificações",
              description: "Certificações e regularizações.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, oferecemos demais serviços de engenharia que necessitam de laudo técnico e ART. Atuamos em empresas de todos os segmentos, indústrias, construtoras, condomínios, estabelecimentos comerciais, e qualquer cliente que precise de documentação técnica adequada.",
            },
          ],
        },
        {
          title: "PROCESSO DE ELABORAÇÃO DE LAUDO E EMISSÃO DE ART",
          items: [
            {
              title: "Análise inicial",
              description:
                "Primeiro, analisamos o serviço ou projeto a ser documentado.",
            },
            {
              title: "Vistoria ou análise",
              description:
                "Em seguida, realizamos vistoria ou análise técnica quando necessário.",
            },
            {
              title: "Elaboração do laudo",
              description:
                "Elaboramos laudo técnico detalhado com todas as constatações.",
            },
            {
              title: "Emissão de ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Documentação",
              description: "Fornecemos documentação completa e organizada.",
            },
            {
              title: "Suporte",
              description:
                "Oferecemos suporte técnico contínuo. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com as normas técnicas.",
            },
          ],
        },
      ],
      conclusion:
        "Evite problemas legais, invalidação de documentos e responsabilidade técnica não comprovada mantendo seus projetos e serviços com laudo técnico e ART adequados. Com nosso serviço especializado em elaboração de laudos técnicos e emissão de ART, cuidamos de toda a documentação técnica necessária para garantir a legalidade, segurança e responsabilidade técnica dos seus trabalhos. Oferecemos também suporte técnico contínuo e orientações quando necessário, garantindo que tudo esteja documentado e em conformidade. Proteja seus projetos e serviços! Solicite nosso serviço e mantenha toda sua documentação técnica em conformidade. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "elevadores-plataformas": {
    slug: "elevadores-plataformas",
    title: "Vistoria e Laudo para elevadores e plataformas de acessibilidade",
    metaDescription:
      "Inspeções técnicas e laudos para elevadores e plataformas conforme normas de acessibilidade. Engenheiros especializados em equipamentos de transporte vertical. Atendemos condomínios, empresas, hospitais, shoppings e estabelecimentos comerciais.",
    keywords: [
      "vistoria elevadores",
      "laudo elevadores",
      "plataforma elevatória",
      "engenheiro elevadores",
      "vistoria plataformas",
      "normas acessibilidade",
      "certificação elevadores",
      "inspeção elevadores",
      "vistoria elevador condomínio",
      "laudo elevador comercial",
      "regularização elevadores",
      "conformidade elevadores",
    ],
    heroImage:
      "https://villarta.com.br/wp-content/uploads/2023/10/acessibilidade-banner-ok.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA TÉCNICA E LAUDO DE SEUS ELEVADORES OU PLATAFORMAS? A ÍTRIO Engenharia realiza vistorias técnicas periódicas e emite laudos de conformidade para elevadores e plataformas elevatórias, garantindo segurança e acessibilidade. Especialistas em equipamentos de transporte vertical. Atendimento ágil e suporte completo até a emissão do laudo técnico e relatório de conformidade. Para condomínios, empresas, hospitais, shoppings e estabelecimentos comerciais que possuem elevadores ou plataformas elevatórias.",
      sections: [
        {
          title: "A IMPORTÂNCIA DA VISTORIA EM ELEVADORES E PLATAFORMAS",
          content:
            "A vistoria técnica em elevadores e plataformas é essencial para garantir a segurança dos usuários, verificar conformidade com normas, identificar problemas de funcionamento e garantir que os equipamentos estejam em condições adequadas de uso. Deve ser realizado este serviço periodicamente conforme legislação e as normas aplicáveis. Sem vistoria técnica adequada e laudo de conformidade, sua empresa ou condomínio corre riscos sérios: acidentes graves, interdição de equipamentos, multas e autuações, responsabilidade civil e criminal, e problemas com órgãos fiscalizadores.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description:
                "Vistoria técnica completa de elevadores e plataformas.",
            },
            {
              title: "Verificação de sistemas de segurança",
              description: "Verificação de sistemas de segurança.",
            },
            {
              title: "Análise de conformidade",
              description:
                "Análise de conformidade com normas de acessibilidade.",
            },
            {
              title: "Testes de funcionamento",
              description: "Testes de funcionamento.",
            },
            {
              title: "Avaliação de manutenção",
              description: "Avaliação de manutenção.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico detalhado.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica).",
            },
            {
              title: "Relatório de conformidade",
              description: "Relatório de conformidade.",
            },
            {
              title: "Recomendações",
              description: "Recomendações de manutenção preventiva.",
            },
            {
              title: "Suporte técnico",
              description:
                "Suporte técnico contínuo. Toda a vistoria é realizada seguindo rigorosamente as normas de acessibilidade e segurança aplicáveis.",
            },
          ],
        },

        {
          title: "NORMAS APLICÁVEIS",
          content:
            "Os nossos laudos são preparados de acordo com todas as normas vigentes, incluindo NBR 15597, NBR 5665, NBR 5666, entre outras. Também levamos em consideração as legislações municipais específicas de cada região e as demais regulamentações aplicáveis, assegurando conformidade total e acessibilidade.  Nossos engenheiros estão atualizados com todas as normativas e garantem que seus equipamentos estejam sempre em conformidade.",
        },
        {
          title: "BENEFÍCIOS DA VISTORIA TÉCNICA ADEQUADA",
          content:
            "A vistoria técnica adequada garante segurança dos usuários, identificando problemas antes que se tornem acidentes. Evita interdição de equipamentos através de manutenção preventiva adequada. Garante conformidade legal com normas de acessibilidade. Reduz riscos de responsabilidade civil e criminal. Aumenta a vida útil dos equipamentos através de manutenção preventiva. Melhora a acessibilidade para pessoas com deficiência. E garante tranquilidade ao saber que seus equipamentos estão seguros e em conformidade.",
        },
        {
          title: "TIPOS DE CLIENTES E ESTABELECIMENTOS ATENDIDOS",
          items: [
            {
              title: "Condomínios",
              description:
                "Condomínios residenciais e comerciais que possuem elevadores.",
            },
            {
              title: "Empresas e escritórios",
              description: "Empresas e escritórios comerciais.",
            },
            {
              title: "Hospitais e clínicas",
              description: "Hospitais e clínicas com elevadores e plataformas.",
            },
            {
              title: "Shoppings centers",
              description: "Shoppings centers e estabelecimentos comerciais.",
            },
            {
              title: "Hotéis e resorts",
              description: "Hotéis e resorts.",
            },
            {
              title: "Escolas",
              description: "Escolas e instituições de ensino.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos qualquer estabelecimento que possua elevadores ou plataformas elevatórias e precise de vistoria técnica e laudo de conformidade. Para cada tipo de estabelecimento, adaptamos nossa abordagem e garantimos que todas as necessidades específicas sejam atendidas.",
            },
          ],
        },
        {
          title: "PROCESSO DE VISTORIA E ELABORAÇÃO DO LAUDO",
          items: [
            {
              title: "Visita técnica",
              description:
                "Primeiro, agendamos visita técnica para análise inicial dos equipamentos.",
            },
            {
              title: "Vistoria técnica completa",
              description:
                "Em seguida, realizamos vistoria técnica completa de todos os sistemas.",
            },
            {
              title: "Laudo técnico",
              description:
                "Elaboramos laudo técnico detalhado com todas as constatações.",
            },
            {
              title: "Emissão de ART",
              description: "Emitimos ART junto ao CREA.",
            },
            {
              title: "Relatório de conformidade",
              description: "Fornecemos relatório de conformidade.",
            },
            {
              title: "Orientações",
              description:
                "Oferecemos orientações para manutenção preventiva e adequações necessárias. Todo o processo é acompanhado de perto, garantindo agilidade, qualidade e conformidade total com as normas de acessibilidade e segurança.",
            },
          ],
        },
      ],
      conclusion:
        "Evite acidentes graves, interdição de equipamentos e problemas legais mantendo seus elevadores e plataformas em conformidade. Com nosso serviço especializado em vistoria técnica e laudo para elevadores e plataformas, cuidamos de toda a verificação, análise de conformidade e emissão de laudo técnico e ART necessários para manter seus equipamentos seguros e em conformidade com as normas de acessibilidade. Oferecemos também orientações para manutenção preventiva e adequações necessárias, garantindo segurança para os usuários e conformidade legal. Proteja seus usuários e seu estabelecimento! Solicite nossa visita técnica e mantenha seus elevadores e plataformas seguros e em conformidade. Entre em contato conosco agora mesmo e peça seu orçamento sem compromisso!",
    },
  },
  "exaustao-cozinhas": {
    slug: "exaustao-cozinhas",
    title:
      "Sistemas de Exaustão para Cozinhas - Vistoria e Laudo Técnico | ÍTRIO",
    metaDescription:
      "Vistorias técnicas e laudos para sistemas de exaustão de cozinhas. Engenheiros especializados em sistemas de ventilação e exaustão para estabelecimentos comerciais e industriais.",
    keywords: [
      "exaustão cozinhas",
      "vistoria exaustão",
      "laudo exaustão cozinha",
      "sistema exaustão",
      "engenheiro exaustão",
      "vistoria cozinha comercial",
      "exaustão restaurante",
      "laudo técnico exaustão",
    ],
    heroImage:
      "https://casadovento.com.br/site/wp-content/uploads/2020/11/cdv-blog-exaust-cozinha-002.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA E LAUDO TÉCNICO DO SEU SISTEMA DE EXAUSTÃO DE COZINHA? A ÍTRIO Engenharia realiza vistoria técnica completa e elabora laudo técnico para sistemas de exaustão de cozinhas, garantindo conformidade com normas técnicas e segurança operacional. Especialistas em sistemas de exaustão para restaurantes, lanchonetes, hotéis, e estabelecimentos comerciais.",
      sections: [
        {
          title: "A IMPORTÂNCIA DO SISTEMA DE EXAUSTÃO",
          content:
            "Sistemas de exaustão de cozinhas são essenciais para garantir a qualidade do ar interno, remover fumaça, vapores e odores, e prevenir acúmulo de gordura que pode causar incêndios. A vistoria técnica é fundamental para verificar a eficiência do sistema, identificar problemas e garantir conformidade com normas técnicas. Sem vistoria adequada, você corre riscos de problemas de saúde, incêndios e não conformidade com normas técnicas.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description: "Vistoria técnica completa do sistema de exaustão.",
            },
            {
              title: "Verificação de eficiência",
              description: "Verificação de eficiência e funcionamento.",
            },
            {
              title: "Análise de conformidade",
              description: "Análise de conformidade com normas técnicas.",
            },
            {
              title: "Verificação de limpeza",
              description: "Verificação de limpeza e manutenção.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico detalhado.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica).",
            },
            {
              title: "Recomendações",
              description: "Recomendações de melhorias.",
            },
            {
              title: "Orientações",
              description: "Orientações para manutenção preventiva.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DA VISTORIA ADEQUADA",
          content:
            "A vistoria técnica adequada garante qualidade do ar interno, removendo fumaça e vapores adequadamente. Previne incêndios ao identificar acúmulo de gordura e problemas no sistema. Garante conformidade com normas técnicas e legislação. Melhora a eficiência energética do sistema. E aumenta a segurança do estabelecimento.",
        },
        {
          title: "TIPOS DE ESTABELECIMENTOS ATENDIDOS",
          items: [
            {
              title: "Restaurantes e lanchonetes",
              description: "Restaurantes e lanchonetes.",
            },
            {
              title: "Hotéis e pousadas",
              description: "Hotéis e pousadas.",
            },
            {
              title: "Cozinhas industriais",
              description: "Cozinhas industriais.",
            },
            {
              title: "Padarias e confeitarias",
              description: "Padarias e confeitarias.",
            },
            {
              title: "Food courts",
              description: "Food courts e praças de alimentação.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos qualquer estabelecimento que possua sistema de exaustão de cozinha e precise de vistoria técnica e laudo.",
            },
          ],
        },
      ],
      conclusion:
        "Garanta a segurança e conformidade do seu sistema de exaustão. Solicite vistoria técnica e laudo com a ÍTRIO Engenharia.",
    },
  },
  "pericias-assistente-tecnico": {
    slug: "pericias-assistente-tecnico",
    title: "Perícias e Assistente Técnico - Engenharia Especializada | ÍTRIO",
    metaDescription:
      "Perícias técnicas e assistência técnica especializada em engenharia. Engenheiros peritos para processos judiciais, trabalhistas e administrativos.",
    keywords: [
      "perícia técnica",
      "assistente técnico",
      "engenheiro perito",
      "perícia judicial",
      "perícia trabalhista",
      "assistência técnica engenharia",
      "laudo pericial",
    ],
    heroImage:
      "https://www.bhgengenharia.com/wp-content/uploads/2024/03/Assistente-Tecnic-Preparando-Inspecao-BHG.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA DE PERÍCIA TÉCNICA OU ASSISTENTE TÉCNICO EM PROCESSO JUDICIAL OU ADMINISTRATIVO? A ÍTRIO Engenharia oferece serviços especializados de perícia técnica e assistência técnica em processos judiciais, trabalhistas e administrativos. Engenheiros peritos com ampla experiência em diversos tipos de perícias técnicas.",
      sections: [
        {
          title: "O QUE É PERÍCIA TÉCNICA",
          content:
            "Perícia técnica é uma análise técnica realizada por profissional habilitado para esclarecer questões técnicas em processos judiciais, trabalhistas ou administrativos. O perito técnico elabora laudo pericial detalhado com análises, conclusões e recomendações técnicas. É essencial para processos que envolvem questões técnicas de engenharia.",
        },
        {
          title: "NOSSOS SERVIÇOS DE PERÍCIA E ASSISTÊNCIA TÉCNICA",
          items: [
            {
              title: "Perícia técnica em processos judiciais",
              description: "Perícia técnica em processos judiciais.",
            },
            {
              title: "Assistência técnica para defesa",
              description: "Assistência técnica para defesa.",
            },
            {
              title: "Elaboração de laudos periciais",
              description: "Elaboração de laudos periciais.",
            },
            {
              title: "Análise técnica de documentos",
              description: "Análise técnica de documentos.",
            },
            {
              title: "Vistorias periciais",
              description: "Vistorias periciais.",
            },
            {
              title: "Pareceres técnicos",
              description:
                "Pareceres técnicos. Nossos engenheiros peritos têm ampla experiência em diversos tipos de processos.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DA PERÍCIA TÉCNICA ADEQUADA",
          content:
            "A perícia técnica adequada esclarece questões técnicas complexas. Fortalece sua defesa ou acusação com fundamentação técnica. Reduz riscos de decisões desfavoráveis. Garante análise técnica imparcial e fundamentada. E aumenta as chances de sucesso no processo.",
        },
      ],
      conclusion:
        "Garanta uma defesa técnica sólida. Solicite perícia técnica ou assistência técnica com a ÍTRIO Engenharia.",
    },
  },
  "engenheiro-rt-empresas": {
    slug: "engenheiro-rt-empresas",
    title: "Engenheiro RT para Empresas - Responsável Técnico | ÍTRIO",
    metaDescription:
      "Serviços de engenheiro responsável técnico (RT) para empresas e estabelecimentos. Engenheiros registrados no CREA para atuar como RT.",
    keywords: [
      "engenheiro RT",
      "responsável técnico",
      "RT empresas",
      "engenheiro responsável",
      "CREA RT",
      "RT estabelecimento",
      "responsabilidade técnica",
    ],
    heroImage:
      "https://jdsolucoesme.com.br/wp-content/uploads/2023/02/responsavel-tecnico-pessoa-juridica-empresa-junto-ao-crea.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA DE ENGENHEIRO RESPONSÁVEL TÉCNICO (RT) PARA SUA EMPRESA? A ÍTRIO Engenharia oferece serviços de engenheiro responsável técnico para empresas e estabelecimentos comerciais. Engenheiros registrados no CREA com ampla experiência para atuar como RT.",
      sections: [
        {
          title: "O QUE É ENGENHEIRO RT",
          content:
            "O Engenheiro Responsável Técnico (RT) é o profissional registrado no CREA responsável pela supervisão técnica de atividades, projetos e serviços de engenharia em empresas e estabelecimentos. É obrigatório para diversos tipos de empresas e estabelecimentos que desenvolvem atividades técnicas. O RT assume a responsabilidade técnica perante o CREA e órgãos fiscalizadores.",
        },
        {
          title: "QUANDO É NECESSÁRIO ENGENHEIRO RT",
          content:
            "Engenheiro RT é necessário para empresas que desenvolvem atividades técnicas; estabelecimentos comerciais com sistemas técnicos; empresas de manutenção; e demais empresas que necessitam de responsável técnico registrado no CREA. É obrigatório conforme legislação do CREA.",
        },
        {
          title: "BENEFÍCIOS DE TER ENGENHEIRO RT",
          content:
            "Ter engenheiro RT adequado garante conformidade legal com o CREA. Evita multas e autuações por falta de RT. Garante supervisão técnica adequada. Protege a empresa de responsabilidades técnicas. E aumenta a credibilidade e confiança.",
        },
      ],
      conclusion:
        "Garanta conformidade legal com engenheiro RT adequado. Solicite nossos serviços de RT com a ÍTRIO Engenharia.",
    },
  },
  "engenheiro-rt-desmanches": {
    slug: "engenheiro-rt-desmanches",
    title: "Engenheiro RT para Desmanches - Responsável Técnico | ÍTRIO",
    metaDescription:
      "Serviços de engenheiro responsável técnico (RT) especializado para desmanches. Engenheiros registrados no CREA para atuar como RT em desmanches.",
    keywords: [
      "engenheiro RT desmanche",
      "RT desmanche",
      "responsável técnico desmanche",
      "engenheiro desmanche",
      "CREA desmanche",
      "RT desmanches",
    ],
    heroImage:
      "https://ghkeng.com.br/wp-content/uploads/2022/09/desmanche2.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA DE ENGENHEIRO RESPONSÁVEL TÉCNICO (RT) PARA SEU DESMANCHE? A ÍTRIO Engenharia oferece serviços de engenheiro responsável técnico especializado para desmanches. Engenheiros registrados no CREA com experiência específica em desmanches para atuar como RT.",
      sections: [
        {
          title:
            "Por que é importante possuir um responsável técnico para desmanches?",
          content:
            "O Engenheiro Responsável Técnico (RT) para desmanches é o profissional registrado no CREA responsável pela supervisão técnica de atividades em desmanches. É obrigatório para desmanches que desenvolvem atividades técnicas. O RT assume a responsabilidade técnica perante o CREA e órgãos fiscalizadores, garantindo que as atividades sejam realizadas dentro das diretrizes técnicas.",
        },
        {
          title: "QUANDO É NECESSÁRIO RT PARA DESMANCHES",
          content:
            "Engenheiro RT é obrigatório para desmanches que desenvolvem atividades técnicas, desmanches que realizam modificações em veículos, desmanches que precisam de documentação técnica, e desmanches que necessitam de responsável técnico registrado no CREA conforme legislação.",
        },
        {
          title: "BENEFÍCIOS DE TER RT PARA DESMANCHE",
          content:
            "Ter engenheiro RT adequado garante conformidade legal com o CREA. Evita multas e autuações por falta de RT. Garante supervisão técnica adequada das atividades. Protege o desmanche de responsabilidades técnicas. E aumenta a credibilidade e confiança junto a clientes e órgãos fiscalizadores.",
        },
      ],
      conclusion:
        "Garanta conformidade legal do seu desmanche com engenheiro RT adequado. Solicite nossos serviços de RT para desmanches com a ÍTRIO Engenharia.",
    },
  },
  projetos: {
    slug: "projetos",
    title: "Projetos MECÂNICOS - Elaboração de Projetos | ÍTRIO",
    metaDescription:
      "Elaboração de projetos técnicos de engenharia. Engenheiros especializados em projetos estruturais, elétricos, hidráulicos e arquitetônicos.",
    keywords: [
      "projetos engenharia",
      "projeto técnico",
      "projeto estrutural",
      "projeto elétrico",
      "projeto hidráulico",
      "elaboração projetos",
      "projeto arquitetônico",
    ],
    heroImage:
      "https://www.fm2s.com.br/storage/blog/images/gestao-de-projetos-na-engenharia.webp",
    images: [],
    content: {
      introduction:
        "PRECISA ELABORAR ALGUM PROJETO MECÂNICO? A ÍTRIO Engenharia elabora projetos mecânicos completos, dos mais diversos segmentos. Engenheiros especializados com ampla experiência em elaboração de projetos mecânicos.",
      sections: [
        {
          title: "O que é um projeto mecânico?",
          content:
            "Um projeto mecânico é um conjunto de documentos técnicos que define como um sistema será executado. Inclui desenhos técnicos, especificações técnicas, memoriais descritivos, cálculos e demais documentações necessárias. Um projeto mecânico garante que uma máquina, equipamento ou sistema opere nas melhores condições com segurança e conforme as normas técnicas.",
        },
        {
          title: "TIPOS DE PROJETOS QUE ELABORAMOS",
          items: [
            {
              title:
                "Projetos mecânicos para máquinas e equipamentos industriais",
              description:
                "Projetos mecânicos para máquinas e equipamentos industriais.",
            },
            {
              title: "Projetos de instalações mecânicas industriais",
              description: "Projetos de instalações mecânicas industriais.",
            },
            {
              title: "Projetos de sistemas hidráulicos de máquinas",
              description: "Projetos de sistemas hidráulicos de máquinas.",
            },
            {
              title: "Projetos de adequação técnica e retrofit mecânico",
              description: "Projetos de adequação técnica e retrofit mecânico.",
            },
            {
              title:
                "Projetos para regularização e atendimento a normas técnicas",
              description:
                "Projetos para regularização e atendimento a normas técnicas.",
            },
            {
              title: "Entre outros",
              description:
                "Todos os projetos são desenvolvidos na área de Engenharia Mecânica, conforme atribuições legais e normas técnicas vigentes.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DE TER PROJETO MECÂNICO ADEQUADO",
          content:
            "Ter um projeto mecânico adequado garante execução correta de máquinas e equipamentos e sistemas. Evita retrabalhos e custos extras. Garante conformidade com normas técnicas. Facilita aprovação em órgãos fiscalizadores. Reduz riscos de problemas estruturais e de segurança. Aumenta a qualidade e durabilidade do sistema ou da instalação.",
        },
      ],
      conclusion:
        "Garanta execução correta e segura da sua obra. Solicite elaboração de projeto técnico com a ÍTRIO Engenharia.",
    },
  },
  andaimes: {
    slug: "andaimes",
    title: "Vistoria e Laudo para Andaimes - Segurança em Obras | ÍTRIO",
    metaDescription:
      "Vistorias técnicas e laudos para andaimes. Engenheiros especializados em segurança de andaimes e estruturas de apoio em obras.",
    keywords: [
      "vistoria andaimes",
      "laudo andaimes",
      "segurança andaimes",
      "engenheiro andaimes",
      "vistoria andaime",
      "laudo técnico andaime",
      "certificação andaimes",
    ],
    heroImage:
      "https://algandaimes.com.br/wp-content/uploads/2015/05/vistoria_andaimes.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA E LAUDO TÉCNICO DE SEUS ANDAIMES? A ÍTRIO Engenharia realiza vistoria técnica completa e elabora laudo técnico para andaimes, garantindo segurança e conformidade com normas técnicas. Especialistas em segurança de andaimes e estruturas de apoio em obras.",
      sections: [
        {
          title: "A IMPORTÂNCIA DA VISTORIA EM ANDAIMES",
          content:
            "A vistoria técnica em andaimes é essencial para garantir a segurança dos trabalhadores, verificar condições estruturais, identificar problemas e garantir que os andaimes estejam em condições adequadas de uso. É obrigatória e deve ser realizada periodicamente conforme normas técnicas. Sem vistoria adequada, você corre riscos de acidentes graves, multas e autuações trabalhistas.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description: "Vistoria técnica completa dos andaimes.",
            },
            {
              title: "Verificação de condições estruturais",
              description: "Verificação de condições estruturais.",
            },
            {
              title: "Análise de segurança",
              description: "Análise de segurança.",
            },
            {
              title: "Verificação de fixações",
              description: "Verificação de fixações e ancoragens.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico detalhado.",
            },
            {
              title: "Emissão de ART",
              description:
                "Emissão de ART (Anotação de Responsabilidade Técnica).",
            },
            {
              title: "Recomendações",
              description: "Recomendações de melhorias.",
            },
            {
              title: "Orientações",
              description: "Orientações para manutenção preventiva.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DA VISTORIA ADEQUADA",
          content:
            "A vistoria técnica adequada garante segurança dos trabalhadores. Previne acidentes de trabalho graves. Evita multas e autuações trabalhistas. Garante conformidade com normas técnicas. E aumenta a confiança e produtividade na obra.",
        },
      ],
      conclusion:
        "Garanta a segurança dos trabalhadores e conformidade da sua obra. Solicite vistoria técnica e laudo para andaimes com a ÍTRIO Engenharia.",
    },
  },
  "reclassificacao-monta": {
    slug: "reclassificacao-monta",
    title: "Reclassificação de Monta - Laudo Técnico | ÍTRIO Engenharia",
    metaDescription:
      "Reclassificação técnica de monta e carga. Engenheiros especializados em reclassificação de equipamentos e estruturas.",
    keywords: [
      "reclassificação monta",
      "reclassificação carga",
      "laudo reclassificação",
      "engenheiro reclassificação",
      "reclassificação técnica",
      "laudo monta",
    ],
    heroImage:
      "https://static.wixstatic.com/media/8040eb_99f4052d15584fceb6ae6140458d4546~mv2.jpg/v1/fill/w_1000,h_545,al_c,q_85,usm_0.66_1.00_0.01/8040eb_99f4052d15584fceb6ae6140458d4546~mv2.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR RECLASSIFICAÇÃO DE MONTA VEICULAR? A ÍTRIO Engenharia realiza reclassificação de monta de veículos sinistrados, por meio de laudo técnico elaborado por engenheiro mecânico habilitado, atendendo às exigências do DETRAN e demais órgãos competentes. O serviço é indicado para veículos que sofreram sinistro e necessitam de avaliação técnica para definição ou revisão da classificação de monta, assegurando segurança, conformidade legal e respaldo técnico.",
      sections: [
        {
          title: "O QUE É RECLASSIFICAÇÃO DE MONTA VEICULAR?",
          content:
            "A reclassificação de monta é um processo técnico que avalia as condições mecânicas e estruturais do veículo após um sinistro, considerando os danos sofridos, os reparos realizados e a integridade dos sistemas avaliáveis pela engenharia mecânica. O objetivo é verificar se o veículo apresenta condições técnicas adequadas para circulação, regularização e atualização de sua classificação junto ao DETRAN, conforme critérios técnicos e normativos aplicáveis.",
        },
        {
          title: "QUANDO É NECESSÁRIA A RECLASSIFICAÇÃO DE MONTA?",
          content:
            "A reclassificação de monta veicular é necessária quando: o veículo sofre sinistro com danos significativos; há discordância ou necessidade de revisão da classificação de monta atribuída anteriormente; o veículo passou por reparos estruturais ou mecânicos relevantes; há exigência do DETRAN ou necessidade de regularização documental; o proprietário busca comprovação técnica das condições do veículo para fins legais.",
        },
        {
          title: "BENEFÍCIOS DA RECLASSIFICAÇÃO DE MONTA ADEQUADA",
          content:
            "Avaliação técnica imparcial das condições do veículo. Atendimento às exigências do DETRAN. Redução de riscos legais e administrativos. Maior segurança para o proprietário e futuros usuários. Respaldo técnico por meio de laudo e ART.",
        },
      ],
      conclusion:
        "Garanta segurança e conformidade com reclassificação adequada. Solicite reclassificação de monta e carga com a ÍTRIO Engenharia.",
    },
  },
  "exaustao-industrial-tabacarias": {
    slug: "exaustao-industrial-tabacarias",
    title: "Exaustão Industrial e Tabacarias - Vistoria e Laudo | ÍTRIO",
    metaDescription:
      "Sistemas de exaustão para indústrias e tabacarias. Vistorias técnicas e laudos para sistemas de exaustão industrial.",
    keywords: [
      "exaustão industrial",
      "exaustão tabacarias",
      "vistoria exaustão industrial",
      "laudo exaustão",
      "sistema exaustão industrial",
      "engenheiro exaustão",
      "vistoria tabacaria",
    ],
    heroImage:
      "https://exaustriz.com.br/imagens/servicos/sistemas-ventilacao-exaustao-01.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA E LAUDO TÉCNICO DO SEU SISTEMA DE EXAUSTÃO INDUSTRIAL OU TABACARIA? A ÍTRIO Engenharia realiza vistoria técnica completa e elabora laudo técnico para sistemas de exaustão industrial e tabacarias, garantindo conformidade com normas técnicas e segurança operacional.",
      sections: [
        {
          title: "A IMPORTÂNCIA DO SISTEMA DE EXAUSTÃO INDUSTRIAL",
          content:
            "Sistemas de exaustão industrial são essenciais para garantir qualidade do ar, remover contaminantes, vapores e partículas, e prevenir problemas de saúde e segurança. A vistoria técnica é fundamental para verificar eficiência, identificar problemas e garantir conformidade. Sem vistoria adequada, você corre riscos de problemas de saúde, não conformidade e problemas legais.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description: "Vistoria técnica completa do sistema de exaustão.",
            },
            {
              title: "Verificação de eficiência",
              description: "Verificação de eficiência e funcionamento.",
            },
            {
              title: "Análise de conformidade",
              description: "Análise de conformidade com normas técnicas.",
            },
            {
              title: "Verificação de manutenção",
              description: "Verificação de manutenção e limpeza.",
            },
            {
              title: "Laudo técnico",
              description: "Emissão de laudo técnico detalhado.",
            },
            {
              title: "Emissão de ART",
              description: "Emissão de ART.",
            },
            {
              title: "Recomendações",
              description: "Recomendações de melhorias.",
            },
            {
              title: "Orientações",
              description: "Orientações para manutenção preventiva.",
            },
          ],
        },
        {
          title: "TIPOS DE ESTABELECIMENTOS ATENDIDOS",
          items: [
            {
              title: "Indústrias",
              description: "Indústrias de todos os segmentos.",
            },
            {
              title: "Tabacarias",
              description: "Tabacarias e estabelecimentos comerciais.",
            },
            {
              title: "Empresas com processos",
              description:
                "Empresas com processos que geram vapores ou partículas.",
            },
            {
              title: "Entre outros",
              description:
                "Entre outros, atendemos qualquer estabelecimento que possua sistema de exaustão industrial e precise de vistoria técnica e laudo.",
            },
          ],
        },
      ],
      conclusion:
        "Garanta segurança e conformidade do seu sistema de exaustão. Solicite vistoria técnica e laudo com a ÍTRIO Engenharia.",
    },
  },
  "avcb-clcb-bombeiros": {
    slug: "avcb-clcb-bombeiros",
    title: "AVCB e CLCB - Vistoria do Corpo de Bombeiros | ÍTRIO Engenharia",
    metaDescription:
      "Vistorias e laudos para AVCB (Auto de Vistoria do Corpo de Bombeiros) e CLCB (Certificado de Licença do Corpo de Bombeiros). Engenheiros especializados em vistorias do Corpo de Bombeiros.",
    keywords: [
      "AVCB",
      "CLCB",
      "vistoria bombeiros",
      "auto vistoria bombeiros",
      "certificado bombeiros",
      "laudo bombeiros",
      "vistoria corpo bombeiros",
      "licença bombeiros",
    ],
    heroImage:
      "https://www.connapa.com.br/static/img/large/05495f637e8d7ecf82a020c96e58c002.jpg",
    images: [],
    content: {
      introduction:
        "PRECISA REALIZAR VISTORIA DO CORPO DE BOMBEIROS PARA AVCB OU CLCB? A ÍTRIO Engenharia realiza vistorias técnicas e elabora laudos para AVCB (Auto de Vistoria do Corpo de Bombeiros) e CLCB (Certificado de Licença do Corpo de Bombeiros). Engenheiros especializados em projetos de prevenção e combate à incêndio com emissão de laudo e ART.",
      sections: [
        {
          title: "O QUE É AVCB E CLCB",
          content:
            "AVCB (Auto de Vistoria do Corpo de Bombeiros) e CLCB (Certificado de Licença do Corpo de Bombeiros) são documentos obrigatórios emitidos pelo Corpo de Bombeiros que comprovam que o estabelecimento está em conformidade com normas de segurança contra incêndio. São obrigatórios para diversos tipos de estabelecimentos comerciais, industriais e de uso público. Sem AVCB/CLCB válido, o estabelecimento não pode funcionar legalmente.",
        },
        {
          title: "QUANDO É NECESSÁRIO AVCB/CLCB",
          content:
            "AVCB/CLCB é necessário para estabelecimentos comerciais, estabelecimentos industriais; estabelecimentos de uso público, edifícios comerciais e residenciais, e demais estabelecimentos que necessitam de licença do Corpo de Bombeiros conforme legislação local. É obrigatório e deve ser renovado periodicamente.",
        },
        {
          title: "O QUE ESTÁ INCLUÍDO NO NOSSO SERVIÇO",
          items: [
            {
              title: "Vistoria técnica completa",
              description: "Vistoria técnica completa do estabelecimento.",
            },
            {
              title: "Verificação de sistemas de segurança",
              description:
                "Verificação de sistemas de segurança contra incêndio.",
            },
            {
              title: "Análise de conformidade",
              description:
                "Análise de conformidade com normas do Corpo de Bombeiros.",
            },
            {
              title: "Laudo técnico",
              description: "Elaboração de laudo técnico detalhado.",
            },
            {
              title: "Emissão de ART",
              description: "Emissão de ART.",
            },
            {
              title: "Orientações",
              description: "Orientações para adequações necessárias.",
            },
            {
              title: "Suporte para AVCB/CLCB",
              description: "Suporte para obtenção de AVCB/CLCB.",
            },
            {
              title: "ELABORAÇÃO DE PROJETO TÉCNICO DE PREVENÇÃO A INCÊNDIO",
              description:
                "Seguimos as exigências para aprovação de seu projeto.",
            },
          ],
        },
        {
          title: "BENEFÍCIOS DE TER AVCB/CLCB VÁLIDO",
          content:
            "Ter AVCB/CLCB válido garante funcionamento legal do estabelecimento. Evita multas e interdições. Garante segurança contra incêndio. Protege vidas e patrimônio. E aumenta a confiança de clientes e parceiros.",
        },
      ],
      conclusion:
        "Garanta funcionamento legal e segurança do seu estabelecimento. Solicite vistoria do Corpo de Bombeiros para AVCB/CLCB com a ÍTRIO Engenharia.",
    },
  },
};

export const getServiceBySlug = (slug: string): ServiceArticle | undefined => {
  return servicesData[slug];
};

export const getAllServiceSlugs = (): string[] => {
  return Object.keys(servicesData);
};

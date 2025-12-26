export interface Testimonial {
  id: string;
  author: string;
  authorPhoto?: string;
  rating: number;
  comment: string;
  date: string;
}

// IMPORTANTE: Adicione apenas comentários REAIS do Google Meu Negócio
// Ordenar por data: mais recentes primeiro (data mais recente no topo)
// Formato da data: "YYYY-MM-DD" (exemplo: "2024-03-15")
// authorPhoto: URL da foto do perfil do Google (opcional - se não tiver, mostra iniciais)

export const testimonials: Testimonial[] = [
  // COMENTÁRIOS REAIS DO GOOGLE MEU NEGÓCIO
  // Apenas os comentários que você enviou

  {
    id: "1",
    author: "Marcelo Simi",
    rating: 5,
    comment:
      "Serviço de inspeção e laudo de elevadores de altíssima qualidade. Empresa séria, engenheiros qualificados e entrega dentro do prazo. Com certeza indico a Ítrio Engenharia para quem precisa de consultoria técnica especializada.",
    date: "2024-12-20", // 6 dias atrás
    authorPhoto: undefined,
  },
  {
    id: "2",
    author: "Rafael Ferreira de Mello",
    rating: 5,
    comment:
      "Fui atendido de forma muito atenciosa em uma demanda resolvida à distância, em parceria com a engª Thays. Recomendo",
    date: "2024-12-19", // uma semana atrás
    authorPhoto: undefined,
  },
  {
    id: "3",
    author: "Gabriel Romanini",
    rating: 5,
    comment:
      "Sou de Goiás e precisei fazer uma parceria a distância com essa empresa e eles me ajudaram demais, fizeram o serviço com extrema qualidade e demonstraram dominar quando o assunto é engenharia.",
    date: "2024-12-05", // 3 semanas atrás
    authorPhoto: undefined,
  },
  {
    id: "4",
    author: "Lucas Rezende Cavalcante",
    rating: 5,
    comment: "Serviços excelente e dentro do prazo",
    date: "2024-12-05", // 3 semanas atrás
    authorPhoto: undefined,
  },
  {
    id: "5",
    author: "luhan santos",
    rating: 5,
    comment:
      "Rápido, prático e eficiente o serviço! Sinto uma melhoria significativa nos meus equipamentos. Prometeu tudo e entregou mais ainda!",
    date: "2024-05-26", // 7 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "6",
    author: "Sandra Lima",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-05-26", // 7 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "7",
    author: "Romeu Rezende",
    rating: 5,
    comment: "Recomendo muito a empresa!",
    date: "2024-04-26", // 8 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "8",
    author: "Eng. Everton Mariano",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-04-26", // 8 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "9",
    author: "Sergio Cassia",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-03-26", // 9 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "10",
    author: "Tiago Vieira",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-03-26", // 9 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "11",
    author: "Jeter do Pinho",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-03-26", // 9 meses atrás
    authorPhoto: undefined,
  },
  {
    id: "12",
    author: "Leandro Alberto",
    rating: 5,
    comment: "", // Sem comentário, apenas avaliação
    date: "2024-03-26", // 9 meses atrás
    authorPhoto: undefined,
  },
];

export const getTestimonials = (): Testimonial[] => {
  // Ordenar por data: mais recentes primeiro
  return [...testimonials].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Ordem decrescente (mais recente primeiro)
  });
};

export const getInitials = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export const getTimeAgo = (date: string): string => {
  const now = new Date();
  const reviewDate = new Date(date);
  const diffTime = Math.abs(now.getTime() - reviewDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `${diffDays} dias atrás`;
  } else if (diffDays < 60) {
    return "1 mês atrás";
  } else if (diffDays < 90) {
    return "2 meses atrás";
  } else if (diffDays < 120) {
    return "3 meses atrás";
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} meses atrás`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? "ano" : "anos"} atrás`;
  }
};

export const getColorForInitials = (name: string): string => {
  const colors = [
    "#4285F4", // Azul Google
    "#34A853", // Verde Google
    "#FBBC05", // Amarelo Google
    "#EA4335", // Vermelho Google
    "#9334E6", // Roxo
    "#FF6D00", // Laranja
    "#0097A7", // Ciano
    "#7B1FA2", // Roxo escuro
  ];
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

export const siteConfig = {
  name: "Clara Didier",
  role: "Psicóloga",
  service: "Psicoterapia individual para jovens e adultos",
  siteUrl: "https://claradidierpsicologia.com.br",
  locale: "pt_BR",
  whatsapp: {
    phone: "5511999999999",
    initialMessage:
      "Olá, Clara! Quero agendar minha consulta de terapia.",
  },
  contact: {
    email: "contato@claradidierpsicologia.com.br",
    city: "Atendimento online para brasileiros no Brasil e no exterior",
  },
} as const;

export const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Sinais", href: "#sinais" },
  { label: "Brasil e Exterior", href: "#onde-estiver" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Agendar", href: "#agendar" },
] as const;

export const landingContent = {
  hero: {
    eyebrow: "Psicoterapia online para brasileiros no Brasil e no exterior",
    title: "Psicóloga especializada em ansiedade, relacionamentos e saúde emocional",
    subtitle:
      "Atendimento online para brasileiros no Brasil e no exterior que buscam mais equilíbrio emocional, clareza e qualidade de vida.",
    trustPills: [
      "17 anos de experiência clínica",
      "Gestalt-terapia com integração em neurociência",
      "Atendimento humanizado, ativo e profundo",
    ],
    metrics: [
      {
        title: "Brasil e exterior",
        description: "Sessões online para brasileiros em diferentes fusos e rotinas.",
      },
      {
        title: "Foco em demandas reais",
        description: "Ansiedade, relacionamentos, autoestima e sobrecarga emocional.",
      },
      {
        title: "Processo com direção",
        description: "Escuta profunda com intervenções práticas para mudança emocional.",
      },
    ],
    primaryCta: "Agendar consulta",
    secondaryCta: "Falar no WhatsApp",
  },
  painPoints: {
    eyebrow: "Você se identifica com isso?",
    title: "Você não precisa lidar com tudo isso sozinho",
    description:
      "Se essas dores têm feito parte da sua rotina, a terapia pode ser o espaço para reorganizar emoções e recuperar sua força interna.",
    items: [
      "Ansiedade constante",
      "Sobrecarga emocional",
      "Dificuldade em relacionamentos",
      "Sensação de vazio ou insegurança",
      "Dificuldade de adaptação, especialmente fora do Brasil",
    ],
    cta: "Falar no WhatsApp",
  },
  about: {
    eyebrow: "Sobre a profissional",
    title: "Mais do que escutar, presença clínica para te ajudar a atravessar o que hoje parece pesado demais.",
    paragraphs: [
      "Sou Clara Didier, psicóloga clínica com 17 anos de experiência. Atendo jovens e adultos com uma abordagem que une Gestalt-terapia, neurociência e sensibilidade humana.",
      "Cada processo é individual e respeita seu tempo. A proposta é te ajudar a compreender padrões emocionais, fortalecer sua autonomia e construir relações mais saudáveis com você e com o outro.",
    ],
    highlights: [
      "17 anos de prática clínica",
      "Gestalt-terapia e neurociência aplicadas à vida real",
      "Escuta ativa, profunda e sem julgamentos",
      "Atendimento personalizado para brasileiros no Brasil e no exterior",
    ],
  },
  audience: {
    eyebrow: "Para quem é o atendimento",
    title: "Atendimento para você, onde quer que esteja",
    description:
      "Uma psicoterapia alinhada ao seu contexto, à sua rotina e ao que você está vivendo agora.",
    blocks: [
      {
        title: "Para quem está no Brasil",
        points: [
          "Ansiedade e estresse",
          "Relacionamentos",
          "Autoestima",
          "Questões emocionais",
        ],
      },
      {
        title: "Para brasileiros no exterior",
        points: [
          "Adaptação cultural",
          "Solidão",
          "Distância da família",
          "Ansiedade e insegurança",
        ],
      },
    ],
  },
  benefits: {
    eyebrow: "Benefícios da psicoterapia",
    title: "Quando você se compreende melhor, sua vida começa a ficar mais leve e mais clara.",
    items: [
      {
        title: "Clareza emocional",
        description:
          "Entenda o que você sente, por que sente e como agir de forma mais consciente no dia a dia.",
      },
      {
        title: "Redução da ansiedade",
        description:
          "Aprenda estratégias para diminuir a sobrecarga mental e recuperar estabilidade emocional.",
      },
      {
        title: "Relações mais saudáveis",
        description:
          "Reconheça padrões de relacionamento e desenvolva limites mais claros e seguros.",
      },
      {
        title: "Fortalecimento da autoestima",
        description:
          "Construa uma relação mais respeitosa com você, com mais autoconfiança e presença.",
      },
      {
        title: "Mais direção na vida",
        description:
          "Saia do piloto automático e tome decisões alinhadas aos seus valores e necessidades reais.",
      },
      {
        title: "Acompanhamento contínuo",
        description:
          "Tenha apoio profissional para atravessar fases difíceis com mais estrutura emocional.",
      },
    ],
  },
  differentials: {
    eyebrow: "Diferenciais",
    title: "Um atendimento que vai além da escuta",
    items: [
      "17 anos de experiência clínica",
      "Abordagem em Gestalt-terapia",
      "Integração com neurociência",
      "Atendimento ativo e personalizado",
      "Escuta profunda e humanizada",
      "Condução com técnica e sensibilidade",
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Resultados que começam por dentro e aparecem na vida real.",
    description:
      "Relatos de quem buscou terapia para ansiedade, relações e saúde emocional.",
    items: [
      {
        name: "A. S.",
        text: "A terapia me ajudou a entender minhas emoções e sair de um momento muito difícil.",
      },
      {
        name: "L. M.",
        text: "Consegui reduzir minha ansiedade e me posicionar melhor nos relacionamentos.",
      },
      {
        name: "R. P.",
        text: "Morar fora estava me deixando muito sozinho. O acompanhamento me deu direção e segurança.",
      },
      {
        name: "C. F.",
        text: "Foi a primeira vez que me senti realmente acolhido e, ao mesmo tempo, orientado com clareza.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Um processo simples para você começar sua terapia com segurança.",
    steps: [
      {
        title: "Você entra em contato",
        description:
          "Envia uma mensagem no WhatsApp com suas dúvidas e disponibilidade.",
      },
      {
        title: "Agendamos sua sessão",
        description:
          "Definimos dia, horário e formato do atendimento de acordo com sua rotina.",
      },
      {
        title: "Iniciamos seu acompanhamento terapêutico",
        description:
          "Começamos seu processo com acolhimento, direção clínica e objetivos claros.",
      },
    ],
  },
  credibility: {
    eyebrow: "Credibilidade institucional",
    title: "Cuidado psicológico responsável para seu bem-estar emocional.",
    description:
      "Um espaço de acolhimento com sigilo, ética profissional e compromisso real com o seu desenvolvimento emocional.",
    pillars: [
      {
        title: "Escuta qualificada",
        description:
          "Atenção genuína à sua história, sem julgamentos e com direcionamento clínico.",
      },
      {
        title: "Ética profissional",
        description:
          "Compromisso com sigilo, respeito e práticas alinhadas ao cuidado psicológico.",
      },
      {
        title: "Ambiente seguro",
        description:
          "Um espaço para elaborar emoções com tranquilidade e construir novas formas de viver.",
      },
    ],
  },
  cta: {
    title: "Você não precisa esperar piorar para pedir ajuda.",
    description:
      "Se você sente que está sobrecarregado, este pode ser o momento de começar sua terapia com acolhimento e direção.",
    button: "Começar minha terapia",
    supportText: "Resposta em horário comercial.",
  },
  contact: {
    eyebrow: "Contato e agendamento",
    title: "Fale comigo e dê o primeiro passo.",
    description:
      "Envie uma mensagem e vamos organizar seu início na terapia de forma simples e acolhedora.",
    button: "Agendar consulta",
    infoLabel: "Informações de contato",
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes sobre a terapia",
    description:
      "Respostas diretas para te ajudar a começar com tranquilidade.",
    items: [
      {
        question: "Preciso estar em crise para começar terapia?",
        answer:
          "Não. Muitas pessoas iniciam a terapia para se conhecer melhor, prevenir sofrimento emocional e tomar decisões com mais clareza.",
      },
      {
        question: "Como funciona o atendimento online?",
        answer:
          "As sessões acontecem por videochamada, com sigilo e qualidade técnica, no mesmo formato de acolhimento de um atendimento presencial.",
      },
      {
        question: "Você atende brasileiros fora do Brasil?",
        answer:
          "Sim. O atendimento é voltado também para brasileiros no exterior, considerando desafios como adaptação cultural, solidão e distância da família.",
      },
      {
        question: "Como é a primeira sessão?",
        answer:
          "Na primeira sessão, conversamos sobre o que você está vivendo, seus objetivos e como podemos conduzir o processo terapêutico.",
      },
      {
        question: "Qual é o próximo passo para agendar?",
        answer:
          "Basta clicar no botão de WhatsApp, enviar uma mensagem e eu retorno com orientações para o agendamento.",
      },
    ],
  },
  footer: {
    rights: "Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
} as const;

export const seoSuggestions = {
  title: "Psicóloga Clara Didier | Terapia para ansiedade e relacionamentos",
  description:
    "Psicoterapia online para brasileiros no Brasil e no exterior. Atendimento para ansiedade, relacionamentos e saúde emocional com 17 anos de experiência.",
  openGraphTitle:
    "Agendar consulta com Clara Didier | Psicoterapia online para brasileiros",
  openGraphDescription:
    "Atendimento psicológico humanizado para ansiedade, autoestima, relacionamentos e adaptação emocional no Brasil e no exterior.",
} as const;

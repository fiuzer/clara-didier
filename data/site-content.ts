export const siteConfig = {
  name: "Clara Didier",
  role: "Psicóloga",
  service: "Psicoterapia individual para jovens e adultos",
  siteUrl: "https://claradidierpsicologia.com.br",
  locale: "pt_BR",
  whatsapp: {
    phone: "5511999999999",
    initialMessage:
      "Olá, Clara! Gostaria de agendar um atendimento de psicoterapia individual.",
  },
  contact: {
    email: "contato@claradidierpsicologia.com.br",
    city: "Atendimento online e presencial (sob consulta)",
  },
} as const;

export const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Para quem", href: "#publico" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Agendamento", href: "#agendar" },
  { label: "Contato", href: "#contato" },
] as const;

export const landingContent = {
  hero: {
    eyebrow: "Psicóloga para jovens e adultos",
    title: "Psicoterapia individual com escuta qualificada e cuidado humano.",
    subtitle:
      "Um atendimento psicológico aprofundado para quem deseja apoio emocional, desenvolvimento emocional e mais equilíbrio na vida pessoal e profissional.",
    trustPills: [
      "Atendimento psicológico para jovens e adultos",
      "Ambiente ético, acolhedor e confidencial",
      "Foco em saúde emocional e qualidade de vida",
    ],
    metrics: [
      {
        title: "Atendimento individual",
        description: "Processo personalizado e alinhado ao seu momento.",
      },
      {
        title: "Jovens e adultos",
        description: "Terapia para diferentes fases da vida e desafios reais.",
      },
      {
        title: "Escuta profissional",
        description: "Apoio técnico e humano para evolução emocional.",
      },
    ],
    primaryCta: "Agendar pelo WhatsApp",
    secondaryCta: "Saiba mais",
  },
  about: {
    eyebrow: "Sobre a profissional",
    title: "Uma jornada terapêutica com acolhimento, técnica e direção.",
    paragraphs: [
      "Sou Clara Didier, psicóloga dedicada à psicoterapia individual para jovens e adultos. Meu trabalho integra escuta ativa, ética profissional e um olhar atento para as particularidades de cada história.",
      "Cada atendimento psicológico é conduzido com respeito ao seu tempo e aos seus objetivos. O foco é promover um espaço seguro de apoio emocional, fortalecimento interno e desenvolvimento emocional consistente.",
    ],
    highlights: [
      "17 anos de experiência clínica",
      "Gestalt-terapia com neurociência aplicada",
      "Escuta ativa profunda, com técnica e presença",
      "Processo personalizado para jovens e adultos",
    ],
  },
  audience: {
    eyebrow: "Para quem é o atendimento",
    title: "Terapia para jovens e adultos em diferentes momentos da vida.",
    description:
      "Atendimento para quem deseja organizar pensamentos, superar bloqueios e construir relações mais saudáveis com mais clareza emocional.",
    cards: [
      {
        title: "Terapia para jovens",
        description:
          "Apoio para inseguranças, pressão acadêmica, identidade, autonomia e mudanças de fase.",
      },
      {
        title: "Terapia para adultos",
        description:
          "Acompanhamento para ansiedade, sobrecarga emocional, relacionamentos, carreira e equilíbrio pessoal.",
      },
    ],
  },
  benefits: {
    eyebrow: "Benefícios da psicoterapia",
    title: "Resultados concretos para sua saúde emocional.",
    items: [
      {
        title: "Autoconhecimento profundo",
        description:
          "Compreenda padrões emocionais e amplie sua consciência sobre escolhas e comportamentos.",
      },
      {
        title: "Equilíbrio emocional",
        description:
          "Desenvolva recursos internos para lidar melhor com ansiedade, estresse e oscilações de humor.",
      },
      {
        title: "Desenvolvimento pessoal",
        description:
          "Fortaleça autoestima, confiança e senso de direção para construir uma vida com mais sentido.",
      },
      {
        title: "Fortalecimento emocional",
        description:
          "Aprenda a enfrentar desafios com mais resiliência e segurança emocional.",
      },
      {
        title: "Apoio em momentos difíceis",
        description:
          "Tenha acompanhamento profissional em fases de perdas, mudanças e decisões importantes.",
      },
      {
        title: "Melhora da qualidade de vida",
        description:
          "Reduza o desgaste emocional e promova bem-estar em rotina, trabalho e relacionamentos.",
      },
    ],
  },
  differentials: {
    eyebrow: "Diferenciais",
    title: "Atuação psicológica com excelência e proximidade.",
    items: [
      "Psicoterapia individual personalizada",
      "Atendimento humanizado com escuta ativa",
      "Abordagem acolhedora e orientada ao processo",
      "Palestras para empresas sobre saúde emocional",
      "Palestras para escolas com foco em desenvolvimento socioemocional",
      "Atendimento online para brasileiros no exterior",
    ],
  },
  credibility: {
    eyebrow: "Credibilidade institucional",
    title: "Cuidado psicológico responsável para seu bem-estar emocional.",
    description:
      "O processo terapêutico é guiado por ética profissional, confidencialidade e escuta qualificada. Cada sessão é um convite ao acolhimento, à elaboração emocional e ao crescimento pessoal.",
    pillars: [
      {
        title: "Escuta qualificada",
        description:
          "Atenção genuína à sua história, sem julgamentos e com direcionamento clínico.",
      },
      {
        title: "Ética profissional",
        description:
          "Compromisso com sigilo, respeito e conduções técnicas alinhadas às boas práticas.",
      },
      {
        title: "Ambiente seguro",
        description:
          "Um espaço de acolhimento para desenvolver recursos emocionais com tranquilidade.",
      },
    ],
  },
  cta: {
    title: "Seu cuidado emocional pode começar agora.",
    description:
      "Agende seu atendimento psicológico com Clara Didier e inicie seu processo de terapia com segurança, acolhimento e clareza.",
    button: "Quero agendar minha sessão",
    supportText: "Resposta em horário comercial.",
  },
  contact: {
    eyebrow: "Contato e agendamento de terapia",
    title: "Fale diretamente comigo pelo WhatsApp.",
    description:
      "Se você procura psicóloga para jovens e adultos, envie uma mensagem e receba orientação para iniciar seu atendimento.",
    button: "Agendar atendimento no WhatsApp",
    infoLabel: "Informações de contato",
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes sobre o atendimento psicológico.",
    description:
      "Se esta é sua primeira experiência com terapia, aqui estão respostas objetivas para ajudar você a dar o primeiro passo com segurança.",
    items: [
      {
        question: "Como funciona a psicoterapia individual?",
        answer:
          "Cada sessão é um espaço de escuta acolhedora e profissional, onde trabalhamos suas demandas com profundidade e respeito ao seu ritmo. O processo é personalizado e evolui conforme seus objetivos terapêuticos.",
      },
      {
        question: "Para quem é indicado o atendimento?",
        answer:
          "O atendimento é voltado para jovens e adultos que buscam apoio emocional, autoconhecimento, fortalecimento interno e melhor qualidade de vida em diferentes fases e desafios.",
      },
      {
        question: "Como faço o agendamento da primeira sessão?",
        answer:
          "O agendamento é feito pelo WhatsApp. Você envia uma mensagem, recebe orientações iniciais e combinamos o melhor formato e horário para iniciar seu atendimento.",
      },
      {
        question: "Atende jovens e adultos com demandas diferentes?",
        answer:
          "Sim. O trabalho clínico é adaptado para a realidade de cada pessoa, considerando contexto, momento de vida e necessidade emocional, sempre com abordagem humanizada.",
      },
      {
        question: "Também realiza palestras para empresas e escolas?",
        answer:
          "Sim. Além da psicoterapia individual, realizo palestras para empresas e escolas com foco em saúde emocional, prevenção e desenvolvimento socioemocional.",
      },
      {
        question: "Nunca fiz terapia. Posso começar mesmo assim?",
        answer:
          "Com certeza. É normal ter dúvidas no início. O primeiro contato é conduzido com acolhimento e clareza para que você se sinta seguro(a) durante todo o processo.",
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
  title: "Psicóloga Clara Didier | Psicoterapia Individual para Jovens e Adultos",
  description:
    "Psicóloga Clara Didier oferece psicoterapia individual para jovens e adultos com atendimento humanizado, apoio emocional e foco em saúde emocional.",
  openGraphTitle:
    "Agende sua psicoterapia com Clara Didier | Atendimento para jovens e adultos",
  openGraphDescription:
    "Atendimento psicológico com escuta qualificada, acolhimento e foco em desenvolvimento emocional.",
} as const;

export const siteConfig = {
  name: "Clara Didier",
  role: "Psicologa",
  service: "Psicoterapia individual para jovens e adultos",
  siteUrl: "https://claradidierpsicologia.com.br",
  locale: "pt_BR",
  whatsapp: {
    phone: "5511999999999",
    initialMessage:
      "Ola, Clara! Gostaria de agendar um atendimento de psicoterapia individual.",
  },
  contact: {
    email: "contato@claradidierpsicologia.com.br",
    city: "Atendimento online e presencial (sob consulta)",
  },
} as const;

export const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Para quem", href: "#publico" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Agendamento", href: "#agendar" },
  { label: "Contato", href: "#contato" },
] as const;

export const landingContent = {
  hero: {
    eyebrow: "Psicologa para jovens e adultos",
    title: "Psicoterapia individual com escuta qualificada e cuidado humano.",
    subtitle:
      "Um atendimento psicologico aprofundado para quem deseja apoio emocional, desenvolvimento emocional e mais equilibrio na vida pessoal e profissional.",
    trustPills: [
      "Atendimento psicologico para jovens e adultos",
      "Ambiente etico, acolhedor e confidencial",
      "Foco em saude emocional e qualidade de vida",
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
        description: "Apoio tecnico e humano para evolucao emocional.",
      },
    ],
    primaryCta: "Agendar pelo WhatsApp",
    secondaryCta: "Saiba mais",
  },
  about: {
    eyebrow: "Sobre a profissional",
    title: "Uma jornada terapeutica com acolhimento, tecnica e direcao.",
    paragraphs: [
      "Sou Clara Didier, psicologa dedicada a psicoterapia individual para jovens e adultos. Meu trabalho integra escuta ativa, etica profissional e um olhar atento para as particularidades de cada historia.",
      "Cada atendimento psicologico e conduzido com respeito ao seu tempo e aos seus objetivos. O foco e promover um espaco seguro de apoio emocional, fortalecimento interno e desenvolvimento emocional consistente.",
    ],
    highlights: [
      "Psicoterapia individual personalizada",
      "Escuta qualificada sem julgamentos",
      "Conducao clinica etica e responsavel",
    ],
  },
  audience: {
    eyebrow: "Para quem e o atendimento",
    title: "Terapia para jovens e adultos em diferentes momentos da vida.",
    description:
      "Atendimento para quem deseja organizar pensamentos, superar bloqueios e construir relacoes mais saudaveis com mais clareza emocional.",
    cards: [
      {
        title: "Terapia para jovens",
        description:
          "Apoio para insegurancas, pressao academica, identidade, autonomia e mudancas de fase.",
      },
      {
        title: "Terapia para adultos",
        description:
          "Acompanhamento para ansiedade, sobrecarga emocional, relacionamentos, carreira e equilibrio pessoal.",
      },
    ],
  },
  benefits: {
    eyebrow: "Beneficios da psicoterapia",
    title: "Resultados concretos para sua saude emocional.",
    items: [
      {
        title: "Autoconhecimento profundo",
        description:
          "Compreenda padroes emocionais e amplie sua consciencia sobre escolhas e comportamentos.",
      },
      {
        title: "Equilibrio emocional",
        description:
          "Desenvolva recursos internos para lidar melhor com ansiedade, estresse e oscilacoes de humor.",
      },
      {
        title: "Desenvolvimento pessoal",
        description:
          "Fortaleca autoestima, confianca e senso de direcao para construir uma vida com mais sentido.",
      },
      {
        title: "Fortalecimento emocional",
        description:
          "Aprenda a enfrentar desafios com mais resiliencia e seguranca emocional.",
      },
      {
        title: "Apoio em momentos dificeis",
        description:
          "Tenha acompanhamento profissional em fases de perdas, mudancas e decisoes importantes.",
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
    title: "Atuacao psicologica com excelencia e proximidade.",
    items: [
      "Psicoterapia individual personalizada",
      "Atendimento humanizado com escuta ativa",
      "Abordagem acolhedora e orientada ao processo",
      "Palestras para empresas sobre saude emocional",
      "Palestras para escolas com foco em desenvolvimento socioemocional",
    ],
  },
  credibility: {
    eyebrow: "Credibilidade institucional",
    title: "Cuidado psicologico responsavel para seu bem-estar emocional.",
    description:
      "O processo terapeutico e guiado por etica profissional, confidencialidade e escuta qualificada. Cada sessao e um convite ao acolhimento, a elaboracao emocional e ao crescimento pessoal.",
    pillars: [
      {
        title: "Escuta qualificada",
        description:
          "Atencao genuina a sua historia, sem julgamentos e com direcionamento clinico.",
      },
      {
        title: "Etica profissional",
        description:
          "Compromisso com sigilo, respeito e conducoes tecnicas alinhadas a boas praticas.",
      },
      {
        title: "Ambiente seguro",
        description:
          "Um espaco de acolhimento para desenvolver recursos emocionais com tranquilidade.",
      },
    ],
  },
  cta: {
    title: "Seu cuidado emocional pode comecar agora.",
    description:
      "Agende seu atendimento psicologico com Clara Didier e inicie seu processo de terapia com seguranca, acolhimento e clareza.",
    button: "Quero agendar minha sessao",
    supportText: "Resposta em horario comercial.",
  },
  contact: {
    eyebrow: "Contato e agendamento de terapia",
    title: "Fale diretamente comigo pelo WhatsApp.",
    description:
      "Se voce procura psicologa para jovens e adultos, envie uma mensagem e receba orientacao para iniciar seu atendimento.",
    button: "Agendar atendimento no WhatsApp",
    infoLabel: "Informacoes de contato",
  },
  faq: {
    eyebrow: "Duvidas frequentes",
    title: "Perguntas frequentes sobre o atendimento psicologico.",
    description:
      "Se esta e sua primeira experiencia com terapia, aqui estao respostas objetivas para ajudar voce a dar o primeiro passo com seguranca.",
    items: [
      {
        question: "Como funciona a psicoterapia individual?",
        answer:
          "Cada sessao e um espaco de escuta acolhedora e profissional, onde trabalhamos suas demandas com profundidade e respeito ao seu ritmo. O processo e personalizado e evolui conforme seus objetivos terapeuticos.",
      },
      {
        question: "Para quem e indicado o atendimento?",
        answer:
          "O atendimento e voltado para jovens e adultos que buscam apoio emocional, autoconhecimento, fortalecimento interno e melhor qualidade de vida em diferentes fases e desafios.",
      },
      {
        question: "Como faco o agendamento da primeira sessao?",
        answer:
          "O agendamento e feito pelo WhatsApp. Voce envia uma mensagem, recebe orientacoes iniciais e combinamos o melhor formato e horario para iniciar seu atendimento.",
      },
      {
        question: "Atende jovens e adultos com demandas diferentes?",
        answer:
          "Sim. O trabalho clinico e adaptado para a realidade de cada pessoa, considerando contexto, momento de vida e necessidade emocional, sempre com abordagem humanizada.",
      },
      {
        question: "Tambem realiza palestras para empresas e escolas?",
        answer:
          "Sim. Alem da psicoterapia individual, realizo palestras para empresas e escolas com foco em saude emocional, prevencao e desenvolvimento socioemocional.",
      },
      {
        question: "Nunca fiz terapia. Posso comecar mesmo assim?",
        answer:
          "Com certeza. E normal ter duvidas no inicio. O primeiro contato e conduzido com acolhimento e clareza para que voce se sinta seguro(a) durante todo o processo.",
      },
    ],
  },
  footer: {
    rights: "Todos os direitos reservados.",
    links: [
      { label: "Politica de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
} as const;

export const seoSuggestions = {
  title: "Psicologa Clara Didier | Psicoterapia Individual para Jovens e Adultos",
  description:
    "Psicologa Clara Didier oferece psicoterapia individual para jovens e adultos com atendimento humanizado, apoio emocional e foco em saude emocional.",
  openGraphTitle:
    "Agende sua psicoterapia com Clara Didier | Atendimento para jovens e adultos",
  openGraphDescription:
    "Atendimento psicologico com escuta qualificada, acolhimento e foco em desenvolvimento emocional.",
} as const;

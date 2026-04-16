export const siteConfig = {
  name: "Clara Didier",
  role: "Psicóloga",
  service: "Psicoterapia individual para jovens e adultos",
  siteUrl: "https://claradidierpsicologia.com.br",
  locale: "pt_BR",
  ctaSupportText: "Atendimento particular | recibo para reembolso",
  whatsapp: {
    phone: "5521980219395",
    initialMessage:
      "Olá, Clara! Quero agendar minha sessão.",
  },
  contact: {
    email: "contato@claradidierpsicologia.com.br",
    city: "Atendimento particular online no Brasil e exterior",
  },
} as const;

export const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Sinais", href: "#sinais" },
  { label: "Exterior", href: "#onde-estiver" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Palestras", href: "#palestras" },
  { label: "FAQ", href: "#faq" },
  { label: "Agendar", href: "#agendar" },
] as const;

export const landingContent = {
  hero: {
    eyebrow: "Online | Jovens e Adultos | Brasil e Exterior",
    title: "Psicóloga especializada em ansiedade, relacionamentos e saúde emocional",
    questionSubtitle: "Você sente que sua mente não para?",
    subtitle:
      "Ansiedade, pensamentos acelerados, dificuldade de concentração, cansaço emocional ou relações desgastantes podem estar roubando sua paz — mesmo quando, por fora, parece que está tudo sob controle.",
    supportText:
      "A terapia pode ser um espaço seguro para compreender o que você sente, fortalecer sua autoestima e construir mudanças reais na sua vida.",
    trustPills: [
      "Psicóloga Clínica | Escritora | Palestrante",
      "17 anos de experiência | Atendimento online no Brasil e exterior",
    ],
    metrics: [
      {
        title: "Ansiedade e foco",
        description: "Atendimento para ansiedade, mente acelerada e dificuldade de concentração.",
      },
      {
        title: "Relações e autoestima",
        description: "Processo terapêutico para relações desgastantes, insegurança e autocobrança.",
      },
      {
        title: "Mudança real",
        description: "Condução clínica para gerar clareza emocional e transformação no cotidiano.",
      },
    ],
    primaryCta: "Agendar minha sessão",
    secondaryCta: "Falar no WhatsApp",
    headlineVariants: {
      a: "Você sente que sua mente não para?",
      b: "Psicóloga online para ansiedade, relacionamentos e saúde emocional",
      c: "Psicoterapia particular com profundidade, técnica e acolhimento",
    },
  },
  painPoints: {
    eyebrow: "Identificação",
    title: "Talvez você esteja passando por algo assim:",
    description:
      "Muitas pessoas chegam à terapia sem conseguir explicar exatamente o que está acontecendo. Elas apenas sentem que algo dentro delas precisa de atenção. E isso já é motivo suficiente.",
    note: "Se você se identificou com dois ou mais pontos, a terapia pode te ajudar.",
    items: [
      "ansiedade constante e mente acelerada",
      "sensação de sobrecarga e exaustão emocional",
      "dificuldade de concentração ou TDAH em adultos",
      "dependência emocional e relações intensas",
      "insegurança, autocobrança e baixa autoestima",
      "tristeza frequente, vazio ou desânimo",
      "luto e perdas difíceis de atravessar",
      "compulsão por redes sociais, tecnologia ou hábitos repetitivos",
    ],
    cta: "Quero iniciar meu processo",
  },
  about: {
    eyebrow: "Sobre",
    title: "Quem vai te acompanhar nesse processo",
    paragraphs: [
      "Sou Clara Didier, psicóloga clínica com 17 anos de experiência, atuando com adultos e jovens em questões relacionadas à ansiedade, TDAH em adultos, autoestima, luto e relacionamentos.",
      "Minha prática integra Gestalt-terapia e neurociência, com uma condução dinâmica, sensível e humanizada. Acredito que cada pessoa é única e, por isso, cada processo terapêutico também é.",
    ],
    highlights: [
      "Você é maior do que qualquer diagnóstico",
      "Um diagnóstico pode orientar, mas não define quem você é",
      "Técnica, presença e condução humanizada",
      "Processo terapêutico profundo e individual",
    ],
  },
  audience: {
    eyebrow: "Brasileiros no exterior",
    title: "Você mora fora do Brasil?",
    description:
      "Atendo brasileiros que vivem no exterior, especialmente na Europa, que enfrentam desafios emocionais como:",
    blocks: [
      {
        title: "Demandas mais comuns",
        points: [
          "solidão e distância da família",
          "adaptação cultural e recomeços",
          "ansiedade e sensação de não pertencimento",
          "crises existenciais e mudanças de vida",
          "desafios em relacionamentos e identidade emocional",
        ],
      },
    ],
    supportText:
      "A terapia online oferece um espaço seguro em português, com profundidade e acolhimento — onde quer que você esteja.",
    cta: "Agendar terapia online agora",
  },
  benefits: {
    eyebrow: "Benefícios",
    title: "O processo terapêutico pode ajudar você a:",
    items: [
      {
        title: "Compreender suas emoções",
        description:
          "Identificar com clareza o que você sente e por que determinados padrões se repetem.",
      },
      {
        title: "Diminuir a ansiedade",
        description:
          "Desenvolver recursos práticos para regular emoções e reduzir a sobrecarga mental.",
      },
      {
        title: "Fortalecer sua autoestima",
        description:
          "Construir uma relação mais segura consigo, com menos autocobrança e mais presença.",
      },
      {
        title: "Melhorar relações",
        description:
          "Estabelecer limites, comunicar necessidades e sair de dinâmicas que machucam.",
      },
      {
        title: "Tomar decisões com clareza",
        description:
          "Sair do automático e se posicionar com mais consistência na vida pessoal e profissional.",
      },
      {
        title: "Sustentar mudanças reais",
        description:
          "Transformar percepções internas em atitudes concretas no cotidiano.",
      },
    ],
    footerText:
      "Mais do que aliviar sintomas, a terapia é um caminho para compreender a si mesmo em profundidade e construir mudanças consistentes em diferentes áreas da sua vida.",
  },
  differentials: {
    eyebrow: "Posicionamento",
    title: "Mais do que escutar, estou presente no seu processo.",
    items: [
      {
        title: "Abordagem ativa e acolhedora",
        description:
          "Minha abordagem é ativa, acolhedora e profundamente humanizada.",
      },
      {
        title: "Terapia como construção",
        description:
          "A terapia não é apenas um espaço de fala — é um espaço de construção.",
      },
      {
        title: "Exploração com profundidade",
        description:
          "A partir da sua história, exploramos emoções, padrões e sentidos com profundidade.",
      },
      {
        title: "Respeito e direção",
        description:
          "Respeito o seu tempo, mas conduzo o processo com consistência e direção.",
      },
      {
        title: "Técnica com sensibilidade",
        description:
          "Utilizo técnica, sim. Mas com alma.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Resultados que começam por dentro e aparecem na vida real.",
    description:
      "Relatos de quem buscou terapia para ansiedade, relações e saúde emocional.",
    items: [
      {
        name: "Tânia",
        text: "Eu demorei muito para procurar terapia... até me sentir sozinha, confusa e presa em pensamentos que não me levavam a lugar nenhum. Eu estava passando por uma separação e me sentia culpada, vítima, certa e errada ao mesmo tempo. Com a Clara aprendi a organizar meus pensamentos e emoções, tratando cada situação com clareza e profundidade. Encontrei equilíbrio emocional e desenvolvi amor-próprio. Até hoje guardo as palavras dela.",
      },
      {
        name: "Glauce",
        text: "Eu fui pela necessidade do meu filho, como sempre pensando em todos menos em mim. Mas, percebi que quem precisava era eu. Foi um divisor de águas. Hoje me sinto mais segura, confiante e consigo me enxergar melhor, sem culpa.",
      },
      {
        name: "Leonardo",
        text: "Cheguei ao fundo do poço num luto que parecia não ter fim. Quando procurei ajuda, encontrei no consultório da Clara calma e paciência para ouvir e entender minha dor. Aos poucos consegui superar essa fase.",
      },
      {
        name: "André",
        text: "Eu não acreditava em psicoterapia, mas depois que vi que precisava e conheci a Clara, mudou muito meu pensamento. Foi uma ótima experiência. As reflexões e orientações fizeram diferença na minha vida.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Como funciona a terapia comigo",
    description:
      "A terapia é um processo construído com profundidade, presença e respeito. Não existe fórmula pronta — existe um caminho.",
    steps: [
      {
        title: "Acolhimento e compreensão",
        description:
          "Um espaço seguro para você falar e ser ouvido com verdade.",
      },
      {
        title: "Clareza emocional e identificação de padrões",
        description:
          "Compreensão de como pensamentos, emoções e comportamentos impactam sua vida.",
      },
      {
        title: "Desenvolvimento de recursos internos",
        description:
          "Aprendizado para lidar melhor com ansiedade, relações e decisões.",
      },
      {
        title: "Transformação prática no cotidiano",
        description:
          "Mudanças reais na forma como você vive, escolhe e se posiciona.",
      },
    ],
    footerLines: [
      "Utilizo também recursos expressivos que ajudam a acessar emoções e aprofundar o autoconhecimento.",
      "Nada é forçado. Tudo tem seu tempo — e esse tempo é respeitado para que o processo gere mudanças reais.",
    ],
    cta: "Agendar minha sessão",
  },
  credibility: {
    eyebrow: "Credibilidade",
    title: "Cuidado responsável para seu bem-estar emocional",
    description:
      "Psicoterapia individual com ética profissional, sigilo e compromisso real com seu processo.",
    pillars: [
      {
        title: "Ética e sigilo",
        description:
          "Um espaço de escuta qualificada com respeito à sua história e à sua privacidade.",
      },
      {
        title: "Direção clínica",
        description:
          "Condução terapêutica consistente, com sensibilidade e foco no que realmente importa para você.",
      },
      {
        title: "Presença no processo",
        description:
          "Mais do que ouvir, acompanho seu movimento emocional com presença e responsabilidade.",
      },
    ],
  },
  lectures: {
    eyebrow: "Palestras",
    title: "Palestras sobre saúde mental",
    description:
      "Além da clínica, também atuo como palestrante e escritora. Minhas palestras são dinâmicas, interativas e reflexivas, com conteúdo prático e aplicável ao dia a dia. Os temas podem ser personalizados conforme a necessidade do seu evento.",
    topics: [
      "NR-1 e saúde mental nas empresas",
      "burnout e esgotamento emocional",
      "ansiedade e gestão emocional",
      "inteligência emocional no trabalho",
      "dependência tecnológica e excesso de telas",
      "autoestima e fortalecimento emocional",
      "saúde mental na adolescência",
    ],
    cta: "Solicitar proposta de palestra",
    note: "Online ou presencial",
  },
  cta: {
    title: "Para quem este trabalho faz sentido",
    description:
      "Este acompanhamento é para pessoas que desejam um processo terapêutico profundo, humano, consistente e comprometido com resultados reais. Se você sente que precisa se compreender melhor, fortalecer sua vida emocional e sair de padrões que se repetem, a terapia pode ser um caminho importante.",
    button: "Quero iniciar meu processo",
    supportText: "Atendimento particular | recibo para reembolso",
  },
  contact: {
    eyebrow: "Agendamento",
    title: "Você não precisa enfrentar tudo sozinho.",
    description:
      "Se algo dentro de você está pedindo cuidado, atenção e acolhimento, não ignore. A terapia pode ser o início de um novo ciclo — com mais clareza, equilíbrio emocional e fortalecimento interno.",
    emphasis: "Seu processo começa quando você decide não se abandonar.",
    button: "Quero agendar minha sessão agora",
    infoLabel: "Informações de contato",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Dúvidas frequentes",
    description: "",
    items: [
      {
        question: "Como funcionam as sessões de terapia online?",
        answer:
          "As sessões são realizadas por videochamada, com sigilo profissional. A frequência costuma ser semanal, mas pode ser ajustada conforme sua necessidade. A terapia online é tão eficaz quanto a presencial e oferece mais conforto e praticidade.",
      },
      {
        question: "Você atende pacientes fora do Brasil e em outros fusos horários?",
        answer:
          "Sim. Atendo brasileiros no Brasil e no exterior, com horários flexíveis para diferentes fusos. Buscaremos um horário que funcione para ambos.",
      },
      {
        question: "Quanto tempo dura a sessão?",
        answer:
          "A sessão tem duração média de 50 minutos.",
      },
      {
        question: "Preciso ter diagnóstico para iniciar?",
        answer:
          "Não. Você pode iniciar terapia mesmo sem diagnóstico.",
      },
      {
        question: "Você atende por plano de saúde?",
        answer:
          "Meu atendimento é exclusivamente particular. No entanto, emito recibo para solicitação de reembolso junto ao plano, caso exista essa possibilidade.",
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer:
          "Pagamentos via PIX ou transferência bancária. Para pacientes no exterior, também é possível pagar via Wise ou transferência internacional.",
      },
      {
        question: "Como funciona o investimento?",
        answer:
          "O atendimento é particular e os valores são informados diretamente no WhatsApp no momento do agendamento.",
      },
      {
        question: "Como faço para agendar?",
        answer:
          "Clique no botão do WhatsApp e envie uma mensagem. Você receberá as orientações para agendamento.",
      },
    ],
  },
  footer: {
    rights: "Todos os direitos reservados.",
    links: [],
  },
} as const;

export const seoSuggestions = {
  title: "Psicóloga Clara Didier | Terapia para ansiedade e saúde emocional",
  description:
    "Psicóloga clínica com 17 anos de experiência. Terapia online para brasileiros no Brasil e exterior com foco em ansiedade, autoestima e relacionamentos.",
  openGraphTitle:
    "Agendar sessão com Clara Didier | Psicoterapia online para brasileiros",
  openGraphDescription:
    "Atendimento psicológico online com profundidade, acolhimento e direção para mudanças reais.",
} as const;


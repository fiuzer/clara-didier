# Clara Didier Landing Page

Landing page institucional da psicóloga Clara Didier, desenvolvida em `Next.js` com foco em conversão para contato via WhatsApp, boa leitura em dispositivos móveis, SEO técnico e manutenção simples de conteúdo.

O projeto foi estruturado para que textos, CTAs, navegação e dados principais fiquem centralizados, reduzindo o risco de alterações espalhadas e facilitando futuras evoluções por outras pessoas do time.

## Objetivo do projeto

Este repositório entrega um site de apresentação profissional com foco em:

- posicionamento da marca pessoal da psicóloga;
- geração de leads por WhatsApp;
- comunicação clara sobre atendimento clínico, público atendido e palestras;
- experiência premium e responsiva, com atenção especial ao mobile;
- facilidade de manutenção futura.

## Stack utilizada

- `Next.js 16` com `App Router`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion` para animações e microinterações
- `ESLint` para validação de código

## Como rodar localmente

### Pré-requisitos

- `Node.js` 20+ recomendado
- `npm` instalado

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000`.

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Variáveis de ambiente

O projeto funciona sem tracking configurado, mas aceita integrações opcionais por variáveis públicas:

```env
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
```

Essas variáveis são lidas em [components/layout/TrackingScripts.tsx](C:/Users/Public/projetos/clara-didier/components/layout/TrackingScripts.tsx).

## Estrutura principal

```text
app/
  layout.tsx                # layout global, fontes, metadata, schema e scripts
  page.tsx                  # composição da home por seções
  globals.css               # entrada global do Tailwind

components/
  layout/                   # header, footer, botão flutuante, tracking
  sections/                 # seções da landing page
  ui/                       # componentes reutilizáveis

data/
  site-content.ts           # conteúdo central do site

lib/
  whatsapp.ts               # geração de links do WhatsApp
  tracking.ts               # eventos de clique em CTA
  utils.ts                  # utilitários compartilhados

public/
  images/                   # logos, fotos e imagens da landing

styles/
  theme.css                 # tokens visuais e regras globais
```

## Ordem das seções da página

A home é montada em [app/page.tsx](C:/Users/Public/projetos/clara-didier/app/page.tsx) nesta ordem:

1. `HeroSection`
2. `PainPointsSection`
3. `AboutSection`
4. `AudienceSection`
5. `BenefitsSection`
6. `DifferentialsSection`
7. `TestimonialsSection`
8. `CTASection`
9. `HowItWorksSection`
10. `CredibilitySection`
11. `LecturesSection`
12. `FAQSection`
13. `ContactSection`

Se você quiser reordenar a narrativa da landing, o primeiro lugar para editar é esse arquivo.

## Onde editar cada tipo de informação

### 1. Conteúdo textual do site

O arquivo principal é [data/site-content.ts](C:/Users/Public/projetos/clara-didier/data/site-content.ts).

Nele ficam:

- nome da profissional;
- serviço principal;
- telefone e mensagem inicial do WhatsApp;
- e-mail e cidade/região de atendimento;
- itens da navegação;
- títulos, descrições e listas de cada seção;
- textos dos botões;
- textos de apoio;
- conteúdo do FAQ;
- sugestões de SEO.

Na prática, a maior parte das alterações editoriais deve começar por esse arquivo.

### 2. Navegação do header

Edite `navigationItems` em [data/site-content.ts](C:/Users/Public/projetos/clara-didier/data/site-content.ts).

Cada item possui:

- `label`: texto do menu
- `href`: âncora da seção correspondente, como `#sobre` ou `#faq`

Se criar uma nova seção, garanta que o `id` da section combine com o `href`.

### 3. WhatsApp e CTAs

Os links do WhatsApp são gerados em [lib/whatsapp.ts](C:/Users/Public/projetos/clara-didier/lib/whatsapp.ts) com base em `siteConfig.whatsapp`.

O comportamento padrão é:

- usar `siteConfig.whatsapp.phone`;
- usar `siteConfig.whatsapp.initialMessage` quando nenhuma mensagem específica é passada.

Se algum CTA precisa abrir uma mensagem diferente, isso normalmente é feito no componente da seção, chamando `getWhatsAppLink("mensagem personalizada")`.

### 4. Tracking de clique

Os eventos de clique em WhatsApp são disparados por [lib/tracking.ts](C:/Users/Public/projetos/clara-didier/lib/tracking.ts).

Hoje o evento enviado é:

- `whatsapp_click`

Com payload contendo:

- `source`
- `timestamp`

Esse evento tenta enviar dados para:

- `dataLayer`
- `gtag`
- `fbq`

Ao criar um novo botão relevante, use um `trackSource` claro e único para facilitar análise futura.

### 5. SEO, metadata e schema

A configuração principal está em [app/layout.tsx](C:/Users/Public/projetos/clara-didier/app/layout.tsx).

Ali ficam:

- `metadataBase`
- `title`
- `description`
- `keywords`
- Open Graph
- Twitter Card
- `robots`
- `viewport`
- JSON-LD básico da profissional

Os textos de SEO usados no layout vêm de `seoSuggestions` em [data/site-content.ts](C:/Users/Public/projetos/clara-didier/data/site-content.ts).

### 6. Tema visual

Os tokens visuais estão em [styles/theme.css](C:/Users/Public/projetos/clara-didier/styles/theme.css).

Esse arquivo concentra:

- paleta dourada;
- cores neutras;
- gradientes de fundo;
- estilos globais;
- `skip-link`;
- divisores e superfícies de seção;
- mapeamento das fontes em variáveis CSS.

Se a intenção for mudar identidade visual sem reescrever componentes, este é o melhor ponto de partida.

### 7. Imagens e logos

Os assets ficam em `public/images/`.

Arquivos usados com frequência:

- logo dourada do header;
- logo clara do footer;
- retrato principal;
- imagens de palestra;
- imagens de compartilhamento social.

Ao trocar uma imagem:

- mantenha nomes consistentes;
- prefira dimensões adequadas para web;
- revise o `alt` correspondente no componente;
- valide a aparência no mobile.

## Componentes importantes

### Layout

- [components/layout/Header.tsx](C:/Users/Public/projetos/clara-didier/components/layout/Header.tsx): header fixo, navegação desktop e menu mobile
- [components/layout/Footer.tsx](C:/Users/Public/projetos/clara-didier/components/layout/Footer.tsx): rodapé institucional
- [components/layout/FloatingWhatsAppButton.tsx](C:/Users/Public/projetos/clara-didier/components/layout/FloatingWhatsAppButton.tsx): botão flutuante persistente de conversão
- [components/layout/TrackingScripts.tsx](C:/Users/Public/projetos/clara-didier/components/layout/TrackingScripts.tsx): injeta GTM, Meta Pixel e Google Ads

### UI reutilizável

- [components/ui/Button.tsx](C:/Users/Public/projetos/clara-didier/components/ui/Button.tsx): componente base dos CTAs
- [components/ui/Container.tsx](C:/Users/Public/projetos/clara-didier/components/ui/Container.tsx): largura máxima e paddings laterais
- [components/ui/SectionTitle.tsx](C:/Users/Public/projetos/clara-didier/components/ui/SectionTitle.tsx): padrão visual dos títulos de seção
- `Reveal.tsx`, `Card.tsx` e `ImageCarousel.tsx`: utilitários de apresentação e animação

### Seções

Cada seção da página vive em `components/sections/` e normalmente recebe seus textos a partir de `landingContent`.

Essa separação é importante:

- conteúdo em `data/`
- estrutura e layout em `components/sections/`

Isso ajuda a evitar alterações misturando texto, regra visual e lógica.

## Fluxo recomendado para alterações futuras

### Quando a mudança for só de texto

1. Edite [data/site-content.ts](C:/Users/Public/projetos/clara-didier/data/site-content.ts).
2. Revise se o texto continua bom no desktop e no mobile.
3. Rode `npm run lint`.

### Quando a mudança for visual

1. Identifique se a alteração é global ou local.
2. Para mudança global, priorize [styles/theme.css](C:/Users/Public/projetos/clara-didier/styles/theme.css).
3. Para mudança específica, edite apenas a seção ou componente envolvido.
4. Valide estados mobile antes de concluir.

### Quando a mudança for em CTAs

1. Ajuste o texto em `data/site-content.ts` se necessário.
2. Revise o componente da seção correspondente.
3. Confirme:
   - largura no mobile;
   - quebra de linha;
   - alinhamento;
   - `trackSource`;
   - mensagem do WhatsApp.

### Quando a mudança for estrutural

1. Atualize [app/page.tsx](C:/Users/Public/projetos/clara-didier/app/page.tsx).
2. Adicione ou remova a seção em `components/sections/`.
3. Atualize `navigationItems` se necessário.
4. Confira se os `id`s das seções continuam corretos.

## Boas práticas de manutenção

- Centralize textos em `data/site-content.ts` sempre que possível.
- Evite duplicar números de telefone, e-mails e mensagens do WhatsApp em vários lugares.
- Antes de aumentar textos de CTA, valide se o botão continua funcionando bem no mobile.
- Preserve os `aria-labels` e textos alternativos de imagem.
- Se alterar seções com âncoras, confira o menu e o scroll.
- Se mexer em tracking, mantenha nomes de eventos consistentes.
- Faça mudanças pequenas e validadas, especialmente em componentes compartilhados como `Button`.

## Cuidados específicos deste projeto

### Responsividade

Como a página tem vários CTAs e textos relativamente longos, o mobile precisa de atenção constante. Depois de qualquer alteração, confira especialmente:

- botões com textos longos;
- frases de apoio abaixo de CTAs;
- títulos grandes em seções;
- cards com listas;
- header mobile.

### Conteúdo sensível

Este é um site da área de saúde emocional. Ao editar textos:

- preserve clareza e acolhimento;
- evite linguagem sensacionalista;
- mantenha coerência entre clínica, ética e posicionamento profissional.

### Identidade visual

O site usa uma estética clara, sofisticada e acolhedora, baseada em tons de dourado, creme e neutros escuros. Mudanças visuais devem respeitar essa direção para não descaracterizar o projeto.

## Checklist antes de subir mudanças

- `npm run lint`
- revisar a home no desktop
- revisar a home no mobile
- testar pelo menos um CTA de WhatsApp
- conferir se imagens continuam carregando
- revisar textos com acentuação e pontuação
- verificar se não houve duplicidade de mensagem em CTA

## Possíveis evoluções futuras

- adicionar CMS ou painel para conteúdo
- integrar analytics com eventos mais detalhados
- criar páginas específicas para serviços ou palestras
- adicionar depoimentos com mídia
- melhorar geração dinâmica de imagens sociais
- ampliar schema.org com dados profissionais adicionais

## Observações finais

Este projeto foi organizado para ser simples de manter: conteúdo centralizado, componentes separados por responsabilidade e integrações opcionais desacopladas.

Se alguém novo entrar para dar manutenção, o melhor caminho quase sempre será:

1. entender o conteúdo em `data/site-content.ts`;
2. localizar a seção correspondente em `components/sections/`;
3. validar o comportamento no mobile;
4. rodar `npm run lint`;
5. só então publicar.

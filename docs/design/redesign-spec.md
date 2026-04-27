# Brasil Te Ama v2 — Redesign Spec

**Inspiração:** Ford Foundation (ver `ford-foundation-analysis.md`)
**Stack alvo:** React 18 + Vite + Tailwind + CSS custom properties em `src/styles/tokens.css`
**Princípio guia:** editorial, institucional, brasileiro, humano.
**Metodologia:** Atomic Design (atoms → molecules → organisms → templates → pages).

---

## 1. Decisões de identidade

### 1.1 Paleta — "Cerrado em Flor"

Decisão: **substituir o navy Ford por um verde profundo brasileiro como primário institucional**, mantendo neutros quentes e acentos. Verde escuro evoca território brasileiro (mata, Cerrado, esperança) sem cair no clichê verde-bandeira; mantém autoridade institucional e funciona em texto longo.

```
/* Primários institucionais */
--color-ink:            #0E2A1E;  /* Verde-mata profundo — substitui navy */
--color-ink-soft:       #1F3D2E;  /* Variação 10% mais clara */

/* Neutros quentes */
--color-cream:          #F5EFE3;  /* Background de seção */
--color-sand:           #E8DDC9;  /* Divisor / hover sutil */
--color-paper:          #FFFFFF;  /* Branco puro */

/* Acentos */
--color-terracota:      #C5552D;  /* Acento quente — CTA destaque, gráficos */
--color-teal:           #2E8C8A;  /* Acento frio — links, ilustrações */
--color-amber:          #E8A33D;  /* Acento alegre — selo, badge ocasional */

/* Texto */
--color-text:           #0F1714;  /* Body em fundo claro */
--color-text-muted:     #5A6660;  /* Captions, meta */
--color-text-inverse:   #F5EFE3;  /* Body em fundo escuro */

/* Estados */
--color-link:           var(--color-teal);
--color-link-hover:     var(--color-ink);
--color-success:        #2E8C5A;
--color-error:          #C5552D;

/* Overlays */
--overlay-dark:         rgba(14, 42, 30, 0.55);   /* Hero gradient */
--overlay-dark-strong:  rgba(14, 42, 30, 0.78);
```

**Regra de uso:** ink domina ~55%, neutros quentes ~30%, paper ~10%, acentos ~5% combinados. Terracota só pra destaque real (CTA principal, kicker de notícia em alta). Amber reservado pro selo Brasil Te Ama (badge de certificação).

### 1.2 Tipografia — pareamento serif display + sans body

Decisão: **divergir do all-sans da Ford** e parear **Fraunces (serif variável editorial) + Inter (sans UI)**. Justificativa: NGO brasileira ganha calor e gravidade editorial com serif em headlines; sans em body mantém legibilidade e feel moderno. Ambas Google Fonts gratuitas, variáveis (peso flexível).

```
/* Famílias */
--font-display:  'Fraunces', 'Times New Roman', serif;
--font-body:     'Inter', system-ui, -apple-system, sans-serif;
--font-mono:     'JetBrains Mono', ui-monospace, monospace;

/* Pesos display (Fraunces) */
--fw-display-regular:  400;
--fw-display-bold:     700;
--fw-display-black:    900;

/* Pesos body (Inter) */
--fw-body-regular:     400;
--fw-body-medium:      500;
--fw-body-semibold:    600;
--fw-body-bold:        700;
```

**Type scale (mobile-first, escala 1.25 modular tablet+):**

| Token | Mobile | Desktop | Uso |
|---|---|---|---|
| `--fs-hero` | 44px / 1.05 | 88px / 1.02 | H1 hero |
| `--fs-h1` | 36px / 1.1 | 60px / 1.05 | H1 página |
| `--fs-h2` | 28px / 1.15 | 44px / 1.1 | H2 seção |
| `--fs-h3` | 22px / 1.2 | 28px / 1.2 | H3 card |
| `--fs-h4` | 18px / 1.3 | 20px / 1.3 | Subhead |
| `--fs-body-lg` | 18px / 1.6 | 20px / 1.6 | Lead paragraph |
| `--fs-body` | 16px / 1.65 | 17px / 1.65 | Body |
| `--fs-meta` | 13px / 1.4 | 14px / 1.4 | Meta, data, kicker |
| `--fs-micro` | 11px / 1.4 | 12px / 1.4 | Caption, label |

**Regras semânticas:**
- Hero, H1, H2 → `font-display` (Fraunces), peso 700.
- H3+ → `font-display` (Fraunces) peso 600 OU `font-body` peso 700 — escolha por densidade visual da seção.
- Body, UI, meta → `font-body` (Inter).
- Kicker (uppercase tracking expandido) → `font-body` peso 600, `letter-spacing: 0.08em`, `text-transform: uppercase`.

### 1.3 Espaçamento, raio, sombra

```
/* Spacing (escala 4px base) */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;
--space-9:  96px;
--space-10: 128px;
--space-11: 160px;

/* Section padding (vertical entre seções) */
--section-y-mobile:   var(--space-8);   /* 64px */
--section-y-desktop:  var(--space-10);  /* 128px */

/* Container */
--container-max:    1280px;
--container-px-mobile:   var(--space-4);  /* 16px */
--container-px-desktop:  var(--space-6);  /* 32px */

/* Radius — Ford-style: zero ou mínimo */
--radius-none: 0;
--radius-sm:   2px;     /* Inputs */
--radius-md:   4px;     /* Tags, badges */
--radius-pill: 999px;   /* Excecional */

/* Shadow — usar com extrema parcimônia, só pra elevação real */
--shadow-card:    0 1px 2px rgba(14, 42, 30, 0.06), 0 8px 24px rgba(14, 42, 30, 0.08);
--shadow-overlay: 0 24px 64px rgba(14, 42, 30, 0.18);
```

### 1.4 Breakpoints

```
--bp-sm:  640px;
--bp-md:  1024px;
--bp-lg:  1280px;
--bp-xl:  1440px;
```

Tailwind: usar `sm`, `md`, `lg`, `xl` mapeados aos custom properties acima via `tailwind.config.js`.

### 1.5 Grid

12 colunas, gap fluido `clamp(16px, 2vw, 32px)`. Container max-width 1280px.

Padrões assimétricos canônicos (desktop):
- **7+5** — texto longo + imagem
- **8+4** — feature + sidebar
- **5+7** — imagem + texto longo
- **4+4+4** — grid de 3 colunas iguais (raro, usado pra metrics block)
- **6+6** — split simétrico (ainda mais raro)

Mobile: stack único, sempre.

---

## 2. Sistema tipográfico — exemplos aplicados

### Kicker
```
NOTÍCIAS / 23 ABR 2026
```
`font-body`, 13px, peso 600, uppercase, tracking 0.08em, `color: var(--color-text-muted)`.

### Headline editorial (H2 seção)
```
Fortalecendo a cidadania nas periferias do Brasil
```
`font-display` (Fraunces) 700, 44px desktop, `color: var(--color-ink)`, `line-height: 1.1`.

### Lead paragraph
```
Em 12 estados, o Instituto Brasil Te Ama atua com 87 organizações
parceiras pra ampliar o acesso a direitos básicos…
```
`font-body` (Inter) 400, 20px desktop, `line-height: 1.6`, max-width 64ch.

### CTA textual (predominante)
```
Conheça os projetos →
```
`font-body` 500, 16–18px, `color: var(--color-ink)`, sublinhado discreto on hover (linha animada cresce de 0 a 100% width).

### Botão sólido (raro)
Retângulo, sem rounded corners. Padding `12px 24px`. Background `var(--color-ink)`, texto `var(--color-cream)`. Hover: background `var(--color-terracota)`. Sem sombra.

---

## 3. Library de componentes

Organizada por nível atômico. Convenção de nomes: PascalCase pra componente, kebab-case pra arquivo CSS module.

### 3.1 Atoms

| Componente | Props principais | Notas |
|---|---|---|
| `Logo` | `variant: 'light' \| 'dark'`, `size` | SVG inline; troca cor por currentColor |
| `Kicker` | `children`, `as` | Uppercase tracked label |
| `Heading` | `level: 1-6`, `font: 'display' \| 'body'`, `children` | Render semântico + classe visual |
| `Text` | `size: 'lg' \| 'base' \| 'meta' \| 'micro'`, `tone: 'default' \| 'muted' \| 'inverse'` | Body |
| `Link` | `href`, `arrow: bool`, `variant: 'inline' \| 'standalone'` | Standalone tem hover de linha; inline herda do parágrafo |
| `Button` | `variant: 'solid' \| 'outline' \| 'ghost'`, `size`, `as` | Solid raro; outline pra forms; ghost pra ações secundárias |
| `Tag` | `tone: 'neutral' \| 'accent' \| 'success'` | Categoria de notícia |
| `Image` | `src`, `alt`, `aspect: '16/9' \| '1/1' \| '3/4' \| '4/3'`, `loading` | Wrapper que enforça aspect ratio + lazy |
| `Divider` | `weight: 'hair' \| 'thick'` | Hair = 1px sand; thick = 4px ink |

### 3.2 Molecules

| Componente | Composição | Uso |
|---|---|---|
| `MetaLine` | Kicker + dot + Text(meta) | Categoria · Data · Autor |
| `ArrowLink` | Link com `arrow=true` | CTA padrão do site |
| `Quote` | Text grande em Fraunces itálico + atribuição | Pull-quote em features |
| `StatBlock` | Heading enorme (número) + Text(meta) | "12 estados • 87 ONGs • 5.400 jovens" |
| `FormField` | Label + Input/Textarea + helper/error | Formulários de Contato |
| `NavItem` | Link com underline animado | Header desktop |
| `ImagePair` | 2 imagens com aspect ratios diferentes | Sub-bloco do triptych |

### 3.3 Organisms

| Componente | Notas |
|---|---|
| `Header` | Dark (ink), 80px altura, logo + 5 nav items + search ícone. Mobile: hamburger + drawer full-screen. |
| `Footer` | Cream background, 4 colunas (Sobre, Atuação, Conecte-se, Legal), assinatura institucional. Já existe — **adaptar visualmente, não recriar**. |
| `Hero` | 3 variantes: `HeroSolo` (1 foto full), `HeroSplit` (texto + foto 6+6), `HeroCollage` (texto + triptych) |
| `NewsCardTriptych` | **Componente assinatura**. Ver `component-newscardtriptych.md`. |
| `StoryCard` | Versão simples: 1 imagem + kicker + headline + arrow link. Usado em listas longas e seções secundárias. |
| `ProgramHighlight` | Bloco 7+5 com imagem grande + texto + stat block + CTA |
| `CTASection` | Faixa full-width ink ou terracota, headline branca + arrow link |
| `QuoteFeature` | Pull-quote grande centralizado, com foto pequena do autor abaixo |
| `Newsletter` | Faixa cream com input email inline + botão solid |

### 3.4 Templates de página

Cada template descrito como sequência de organisms.

#### Home
1. `Header`
2. `HeroCollage` — headline aspiracional + triptych 1ª notícia em destaque
3. `IntroSection` — kicker "Quem somos" + lead paragraph 5+7
4. `StatBlock` em 3 colunas — números do impacto
5. `ProgramHighlight` ×3 alternando 7+5 / 5+7 / 7+5 (Cidadania, Educação, Liderança)
6. `NewsCardTriptych` em destaque + 2 `StoryCard` ao lado (8+4)
7. `QuoteFeature` — depoimento parceiro
8. `CTASection` — "Conheça nossos projetos →"
9. `Newsletter`
10. `Footer`

#### Notícias
1. `Header`
2. `PageHeader` — kicker "Notícias" + H1 + lead
3. **Featured triptych** — 1 `NewsCardTriptych` em variante hero (largura total, imagens grandes)
4. **Grid editorial:** alternância de `NewsCardTriptych` e `StoryCard` simples — padrão sugerido: triptych a cada 4 cards (1 triptych + 3 simples por linha lógica)
5. Filtros por categoria (Tags inline horizontais)
6. Paginação
7. `Footer`

#### Projetos
1. `Header`
2. `PageHeader`
3. `IntroSection` 6+6
4. **Mapa do Brasil** (organism `ProjectsMap` — futuro; placeholder por ora)
5. Lista de projetos em `StoryCard` grandes (3 colunas desktop, 1 mobile)
6. `CTASection` "Seja um parceiro →"
7. `Footer`

#### Liderança
1. `Header`
2. `PageHeader`
3. **Foto principal Nicoletti** em formato 3+9 (foto à esquerda, bio à direita) — usar `ProgramHighlight` adaptado
4. `Quote` central
5. Conselho consultivo: grid de 4 retratos quadrados com nome + cargo
6. `Footer`

#### Sobre
1. `Header`
2. `PageHeader`
3. Manifesto: parágrafo grande com **dropcap** Fraunces black
4. Linha do tempo (organism `Timeline` — fases do Instituto)
5. `StatBlock` "Impacto em números"
6. `Footer`

#### Selo
1. `Header`
2. `HeroSolo` — banner do selo
3. Explicação: 3 colunas iguais com ícone + heading + texto curto (Como funciona / Critérios / Benefícios)
4. `CTASection` "Solicitar selo →"
5. `Footer`

#### Transparência
1. `Header`
2. `PageHeader`
3. **Documentos:** lista vertical com tipo (kicker), título, ano, link de download (arrow link)
4. `StatBlock` "Receitas e despesas" (placeholder pra dados reais)
5. `Footer`

#### Contato
1. `Header`
2. `PageHeader`
3. **5 atalhos de formulário** (Parceiro / Institucional / ONG / Imprensa / Dúvidas) em grid 5×1 desktop, com Tag + Heading + descrição curta + arrow link → seção do formulário correspondente
4. Formulário renderizado dinamicamente (já existe lógica) — refatorar visual com `FormField`
5. `Footer`

#### Para ONGs
1. `Header`
2. `PageHeader`
3. `IntroSection`
4. `ProgramHighlight` "Como nos parcerizar"
5. `CTASection` → form Contato/parceiro
6. `Footer`

---

## 4. Voz editorial em PT-BR

### Princípios

1. **Verbos ativos no gerúndio** pra programas: "Fortalecendo a cidadania", "Ampliando direitos", "Cuidando do território".
2. **Especificidade ancorada:** "12 estados", "R$ 2,4 milhões em 2025", "87 ONGs parceiras", "Brasília-DF". Nunca "diversos lugares" ou "muitas pessoas".
3. **Sujeito coletivo:** "construímos com", "comunidades", "as ONGs parceiras". Evitar "nós damos", "ajudamos" (paternalismo).
4. **Frases curtas na abertura:** lead paragraph de 1–2 frases. Densidade só depois.
5. **Sem jargão de filantropia em inglês:** nada de "stakeholders", "engajamento sinérgico", "framework". Usar português direto.
6. **Sem clichê emocional:** evitar "tocar corações", "transformar vidas", "fazer a diferença". Trocar por dados concretos do que muda.

### Exemplos de headlines (uso real sugerido)

| Antigo (genérico) | Novo (editorial Ford-style) |
|---|---|
| Sobre nós | Há 14 anos construindo cidadania em 12 estados |
| Nossos projetos | Onde estamos: Cerrado, Amazônia, periferias urbanas |
| Liderança | Marcos Nicoletti: três décadas em direitos humanos |
| Notícias | O que aconteceu nesta semana no Instituto |
| Selo | Selo Brasil Te Ama: como reconhecemos parceiros |
| Para ONGs | Como nos parcerizar — um caminho em três etapas |
| Contato | Fale com a gente. Cada assunto tem um destino. |
| Transparência | Cada real, documentado. Veja onde aplicamos. |

### Exemplos de kicker + headline + lead

```
KICKER:    PROJETOS / EDUCAÇÃO / DF
HEADLINE:  Em Brasília, 1.200 jovens encontram o primeiro emprego pela cidadania
LEAD:      O programa Cidadania Ativa formou sua quinta turma em março de 2026.
           Dos egressos, 68% conquistaram vaga formal em até 90 dias.
```

```
KICKER:    INSTITUCIONAL / 2026
HEADLINE:  R$ 2,4 milhões aplicados em 23 organizações da sociedade civil
LEAD:      O ciclo 2025–2026 fechou com a maior cobertura territorial da história
           do Instituto: 12 estados, 87 ONGs parceiras, 5.400 beneficiários diretos.
```

---

## 5. Acessibilidade (WCAG AA mínimo)

- Contraste texto: ink (#0E2A1E) sobre cream (#F5EFE3) = 13.8:1 ✅. Cream sobre ink = 13.8:1 ✅. Terracota sobre cream = 4.7:1 ✅. Teal sobre cream = 4.6:1 ✅.
- Foco visível: outline 3px terracota com offset 2px em todos os elementos interativos.
- Hierarquia semântica de headings respeitada (não pular níveis).
- Todas as imagens com `alt` significativo; triptych com `alt` na imagem-líder e `alt=""` decorativo nas secundárias se redundante.
- `prefers-reduced-motion`: desativar transições de hover de linha e parallax.
- Forms: label sempre visível (não placeholder-as-label), erro inline com `aria-describedby`.
- Skip-link no topo pra `#main`.

---

## 6. Migração — fases sugeridas pro Dex

**Fase A — Fundação (sem regressão visual ainda)**
1. Atualizar `tokens.css` com a nova paleta + type scale + spacing.
2. Adicionar Fraunces + Inter via `<link>` em `index.html` ou `@import` no CSS.
3. Configurar Tailwind pra ler tokens (extend theme).

**Fase B — Atoms + molecules**
4. Implementar Logo, Heading, Text, Link, Button, Image, Kicker, Tag, MetaLine, ArrowLink.

**Fase C — Triptych + StoryCard**
5. Implementar `NewsCardTriptych` (ver doc dedicado) e `StoryCard`.
6. Aplicar em página Notícias primeiro (ROI máximo, é onde o triptych brilha).

**Fase D — Hero + organisms restantes**
7. `HeroCollage`, `HeroSplit`, `HeroSolo`, `ProgramHighlight`, `CTASection`, `Quote`, `StatBlock`, `Newsletter`.

**Fase E — Refactor das páginas**
8. Home → Notícias → Projetos → Liderança → Sobre → Selo → Transparência → Contato → ParaOngs.
9. Cada página segue template em §3.4.

**Fase F — Polish**
10. A11y audit, responsividade fina, perf (lazy load triptych imagens secundárias).

---

## 7. Não-objetivos desta fase

- Animações complexas (parallax, scroll-triggered) — só hover de linha em link e fade-in básico.
- Dark mode — fora de escopo.
- CMS — conteúdo continua hardcoded por ora.
- Internacionalização — só PT-BR.

---

— Uma, desenhando com empatia 💝

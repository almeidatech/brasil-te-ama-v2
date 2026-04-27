# `<NewsCardTriptych />` — Deep-Dive

**Status:** spec — não implementado.
**Família:** Organism (Atomic Design).
**Importância:** componente-assinatura do redesign Brasil Te Ama v2. É o que torna o site visualmente reconhecível a 30m de distância.

---

## 1. Conceito

Um card de notícia/programa que apresenta a história através de **três imagens combinadas em arranjo editorial assimétrico**, encimadas por kicker, headline e link textual. Substitui o modelo "1 imagem retangular + título" por uma composição que sugere **curadoria, profundidade e múltiplas camadas** da matéria.

Inspiração direta: cards de notícia da Ford Foundation home, onde uma matéria sobre democracia americana mostra simultaneamente foto de eleitor, mapa eleitoral e ícone de cédula — três facetas da mesma história.

**Princípio editorial:** as três imagens **não são redundantes**. Cada uma traz uma dimensão complementar: pessoa, lugar, contexto/dado.

---

## 2. Anatomia

```
┌─────────────────────────────────────────┐
│                                         │
│   [ TRIPTYCH AREA — 4 variantes ]       │
│                                         │
├─────────────────────────────────────────┤
│ KICKER · DATA                           │
│                                         │
│ Headline em Fraunces 700, ~24-32px,     │
│ até 3 linhas                            │
│                                         │
│ Lead opcional, 1-2 linhas (Inter, muted)│
│                                         │
│ Ler mais →                              │
└─────────────────────────────────────────┘
```

Componente é **clicável inteiro** (wrapper `<a>`), mas o "Ler mais →" continua visível pra cumprir affordance e a11y.

---

## 3. Variantes de arranjo

Quatro variantes canônicas. Em listas de notícias, alternar entre elas evita monotonia.

### 3.1 Variant `hero-stack` (default — grande+2 empilhadas)

```
┌──────────────────┬───────────┐
│                  │           │
│                  │  Img B    │
│   Img A          │  (1:1)    │
│   (4:5 portrait) │           │
│                  ├───────────┤
│                  │           │
│                  │  Img C    │
│                  │  (1:1)    │
│                  │           │
└──────────────────┴───────────┘
       60% width      40% width
```

- Grid: `grid-template-columns: 3fr 2fr; grid-template-rows: 1fr 1fr;`
- Img A: span 2 rows, aspect 4:5 (portrait).
- Img B: top-right, aspect 1:1.
- Img C: bottom-right, aspect 1:1.
- Gap: 8px (não 0 — respiro mínimo, mas sem virar grade rígida).

### 3.2 Variant `landscape-pair` (1 grande superior + 2 inferiores)

```
┌─────────────────────────────────┐
│                                 │
│   Img A  (16:9 landscape)       │
│                                 │
├────────────────┬────────────────┤
│                │                │
│   Img B (1:1)  │   Img C (1:1)  │
│                │                │
└────────────────┴────────────────┘
```

- Grid: `grid-template-columns: 1fr 1fr; grid-template-rows: auto auto;`
- Img A: span 2 cols, aspect 16:9.
- Img B, Img C: aspect 1:1, lado a lado.
- Bom pra histórias de evento/lugar (foto principal panorâmica).

### 3.3 Variant `diagonal` (escada — overlap sutil)

```
┌────────────────┐
│                │
│   Img A        │
│   (3:4)        │
│                │
└────┬───────────┴──────┐
     │                  │
     │   Img B (3:4)    │
     │                  │
     └────┬─────────────┴───────┐
          │                     │
          │   Img C (3:4)       │
          │                     │
          └─────────────────────┘
```

- Composição mais autoral; não é grid retangular.
- Implementação: 3 imagens absolute-positioned dentro de wrapper relative com altura fixa.
- Cada imagem 3:4, com `transform: translateX()` em escada (~25% do width cada).
- Overlap de ~8px nas bordas (z-index crescente: A=1, B=2, C=3).
- **Variante de prestígio** — usar com moderação (1× por página). Bom pra feature longa.

### 3.4 Variant `mosaic` (foto + dado + ícone)

```
┌──────────────────┬───────────┐
│                  │           │
│   Img A          │  Img B    │
│   (foto humana,  │  (mapa /  │
│    4:5 portrait) │   dado    │
│                  │   visual, │
│                  │   1:1)    │
├──────────────────┴───────────┤
│                              │
│   Img C (ilustração / ícone, │
│   16:9, fundo flat colorido) │
│                              │
└──────────────────────────────┘
```

- Mistura de naturezas: foto + visualização + ilustração.
- Img C tem background `var(--color-cream)` ou `var(--color-terracota)` quando é ilustração isolada (cria respiro entre fotos).
- Usar pra matérias com componente analítico (relatórios, transparência, balanço).

---

## 4. API React (props)

```jsx
<NewsCardTriptych
  variant="hero-stack"          // 'hero-stack' | 'landscape-pair' | 'diagonal' | 'mosaic'
  size="default"                // 'default' | 'featured' (featured = full-width hero da Notícias)
  kicker="PROJETOS / DF"
  date="23 Abr 2026"
  headline="Em Brasília, 1.200 jovens encontram o primeiro emprego"
  lead="O programa Cidadania Ativa formou sua quinta turma em março."  // opcional
  href="/noticias/cidadania-ativa-quinta-turma"
  images={[
    { src: '/img/df-jovens-01.jpg', alt: 'Jovens em formação no Plano Piloto', focal: 'center' },
    { src: '/img/df-mapa.svg', alt: 'Mapa do DF com pontos de atuação', focal: 'top' },
    { src: '/img/df-stat.jpg', alt: 'Cerimônia de formatura', focal: 'bottom' }
  ]}
  ctaLabel="Ler mais"           // default 'Ler mais'
  className=""
/>
```

### Regras das `images`

- **Sempre 3 itens.** Componente lança `console.warn` se receber ≠3.
- Ordem importa: `images[0]` é a "líder" (maior, aspect mais dominante na variante).
- `focal` controla `object-position` quando aspect ratio do container difere do da fonte (default `center`).
- Em `mosaic`, `images[2]` aceita `bgColor` (ex.: `'terracota'`, `'cream'`) e `src` opcional (se for ilustração SVG inline ou fundo flat).

---

## 5. Comportamento responsivo

### Breakpoint mobile (< 640px)

**Todas as variantes degradam para mesmo layout:**

```
┌─────────────────────────────────┐
│   Img A (16:9)                  │
└─────────────────────────────────┘
┌────────────────┬────────────────┐
│  Img B (1:1)   │  Img C (1:1)   │
└────────────────┴────────────────┘
```

- Img A vira topo full-width 16:9 independente da aspect original.
- Img B, C empilham embaixo em 2 colunas iguais 1:1.
- Headline e meta abaixo, sem mudança.

Justificativa: variantes diagonais e mosaic perdem leitura em mobile; padronizar reduz cognitive load. Identidade do triptych se mantém (3 imagens visíveis).

### Tablet (640–1024px)

- `hero-stack` e `landscape-pair`: rendem em layout original com escala reduzida.
- `diagonal`: degrada pro mobile pattern (overlap diagonal não funciona em largura média).
- `mosaic`: rende mas com Img C reduzida (mantém só 60% da altura desktop).

### Desktop (≥ 1024px)

- Todas as variantes em forma plena.
- Em `size="featured"`, container max-width sobe pra 1080px e o card pode ocupar todas as 12 colunas do grid pai.

---

## 6. Tokens CSS específicos

```css
.triptych {
  --triptych-gap: 8px;
  --triptych-radius: 0;                         /* sem rounded — Ford-style */
  --triptych-overlay: var(--overlay-dark);
  --triptych-meta-y: var(--space-4);            /* margem entre imagens e meta */
  --triptych-headline-mt: var(--space-3);
  --triptych-cta-mt: var(--space-4);
}

.triptych--featured {
  --triptych-gap: 12px;
  --triptych-headline-size: var(--fs-h2);
}

.triptych__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--color-sand);          /* loading state */
  transition: transform 600ms ease;
}

.triptych:hover .triptych__img--lead {
  transform: scale(1.02);                       /* zoom sutil só na líder */
}

@media (prefers-reduced-motion: reduce) {
  .triptych__img { transition: none; }
}
```

---

## 7. Cropping & curadoria de imagens

Pra reusar as fotos atuais do projeto (ver memory: logo, hero cidadania, Nicoletti, Nigéria, DF, 6 cards notícias, OSJ, selo banner), regras:

1. **Identificar foto-líder** de cada matéria — a que tem rosto humano + composição clara.
2. **Gerar 2 secundárias** por: (a) re-cropping da mesma foto em outro foco (detalhe de mãos, ambiente), OU (b) usar foto adjacente do mesmo evento, OU (c) sintetizar dado visual (mapa, ícone).
3. **Padronizar exportação** em 3 tamanhos por imagem: `@1x` (largura nominal), `@2x` (retina), `@blur` (LQIP 20px largura, 60% qualidade) pra placeholder.
4. **Aspect ratios alvo na fonte:**
   - Líder (Img A): 4:5 ou 16:9 — ter ambos preparados.
   - Secundárias (Img B/C): 1:1 — quadrado é o mais flexível.

**Pasta sugerida:** `public/images/news/{slug}/lead.jpg`, `secondary-1.jpg`, `secondary-2.jpg`.

---

## 8. Acessibilidade

- Wrapper `<a>` recebe `aria-label` composto: `"${kicker}: ${headline}"`.
- Img líder: `alt` descritivo (frase completa).
- Imgs secundárias: `alt` descritivo se trazem informação nova; `alt=""` se redundantes.
- Foco visível: outline 3px terracota com offset 2px no wrapper inteiro (não nas imagens individuais).
- Em `mosaic` com Img C como ilustração decorativa: `alt=""` + `role="presentation"`.
- Hover de zoom desativa em `prefers-reduced-motion: reduce`.

---

## 9. Estados

| Estado | Tratamento |
|---|---|
| Default | Como descrito |
| Hover | Img líder zoom 1.02; CTA com underline animado de 0→100% |
| Focus visible | Outline 3px terracota |
| Loading (imagens) | Background sand `#E8DDC9` com pulse animation |
| Erro de imagem | `onError` substitui por placeholder cream + ícone genérico |

---

## 10. Exemplo de uso na página Notícias

```jsx
<section className="news-grid">
  {/* Featured no topo */}
  <NewsCardTriptych
    variant="landscape-pair"
    size="featured"
    kicker="DESTAQUE / EDUCAÇÃO"
    date="23 Abr 2026"
    headline="Em Brasília, 1.200 jovens encontram o primeiro emprego pela cidadania"
    lead="O programa Cidadania Ativa formou sua quinta turma em março de 2026."
    href="/noticias/cidadania-ativa-quinta-turma"
    images={featuredImages}
  />

  {/* Grid alternado */}
  <div className="news-grid__row">
    <NewsCardTriptych variant="hero-stack" {...post1} />
    <NewsCardTriptych variant="mosaic" {...post2} />
  </div>

  <div className="news-grid__row">
    <StoryCard {...post3} />
    <StoryCard {...post4} />
    <StoryCard {...post5} />
  </div>

  <div className="news-grid__row">
    <NewsCardTriptych variant="diagonal" {...post6} />
    <StoryCard {...post7} />
  </div>
</section>
```

**Padrão de alternância sugerido:** a cada 7 cards, 3 são triptych (variantes diferentes) e 4 são `StoryCard`. Mantém ritmo editorial sem cansar o olho.

---

## 11. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| Curadoria de 3 imagens por matéria toma tempo do time editorial | Variant `mosaic` aceita ilustração/dado visual em Img C — reduz pressão por 3 fotos genuínas |
| Performance em página Notícias com 12+ triptychs | Lazy loading nas imagens secundárias + LQIP placeholder; img líder eager nos 2 primeiros, lazy daí em diante |
| Leitura em mobile de 3 imagens pequenas | Layout mobile padronizado (§5) já endereça — Img A grande + B/C menores empilhadas |
| Acessibilidade de leitores de tela com 3 imagens | `aria-label` no wrapper consolida; alts secundárias vazias quando redundantes |
| Time editorial usa fotos de baixa qualidade | Componente faz `object-fit: cover` + LQIP — esconde defeitos parciais; doc de cropping (§7) orienta time |

---

## 12. Critérios de pronto (Definition of Done)

Quando Dex implementar, considerar pronto se:

- [ ] 4 variantes renderizam corretamente em desktop (1280px) e tablet (768px).
- [ ] Mobile (375px) usa layout padronizado em todas as variantes.
- [ ] Aceita 3 imagens com aspect ratios variados sem quebrar (object-fit cover).
- [ ] Wrapper `<a>` é clicável inteiro; CTA "Ler mais →" mantém affordance.
- [ ] Hover de zoom funciona; respeita `prefers-reduced-motion`.
- [ ] Foco visível com outline terracota.
- [ ] `aria-label` composto presente.
- [ ] Lighthouse a11y ≥ 95 numa página com 6 triptychs.
- [ ] LCP < 2.5s na página Notícias (com lazy loading correto).

---

— Uma, desenhando com empatia 💝

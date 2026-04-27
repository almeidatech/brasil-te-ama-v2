# Ford Foundation — Análise do Design System

**Site referência:** https://www.fordfoundation.org/
**Data da análise:** 2026-04-27
**Propósito:** servir de base pro redesign editorial do Instituto Brasil Te Ama v2.

---

## 1. Filosofia visual

Ford Foundation comunica **gravidade institucional + acolhimento humano**. Não é um site corporativo frio; é editorial, jornalístico, com assinatura visual reconhecível à distância. As decisões formais reforçam três mensagens: (a) somos uma instituição séria com 90+ anos, (b) trabalhamos com pessoas reais em lugares reais, (c) há complexidade e diversidade no que fazemos.

A tradução pra Brasil Te Ama: **NGO sério, editorialmente confiante, calor humano**. Não é "ONG fofinha"; não é "corporate". É revista institucional com alma.

---

## 2. Paleta de cores (mapeamento heurístico)

| Função | Tom Ford | Característica |
|---|---|---|
| Primário (institucional) | Navy profundo `#0A1F44` aprox | Headers, áreas de autoridade, texto escuro |
| Neutro quente claro | Creme/Bege `#F5EFE6` aprox | Backgrounds de seção, respiro |
| Neutro frio claro | Branco puro `#FFFFFF` | Cards, hero clean |
| Acento 1 | Teal `#3DA9A4` aprox | Links, hover, ilustrações |
| Acento 2 | Coral/laranja `#E87457` aprox | CTAs ocasionais, gráficos collage |
| Texto principal | Quase-preto `#0F0F0F` | Body em fundo claro |
| Texto inverso | Branco / creme | Body em fundo navy |

**Regra de uso:** navy domina ~60%, neutros quentes ~25%, branco respiro ~10%, acentos teal/coral ~5% combinados (nunca vibrantes a ponto de roubar leitura).

---

## 3. Tipografia

- **Sans-serif único** em todo o site, mas com explorações fortes de **peso e escala**.
- Display headlines em peso bold/extrabold, escalas 48–96px no desktop.
- Body em peso regular, line-height ~1.55–1.65, parágrafos largos com max-width controlado (~64ch).
- Nav e meta em peso medium, tracking levemente expandido em uppercase ocasional.
- Quase nenhum itálico decorativo — itálico só pra ênfase semântica.

**Hierarquia visível:**
1. Headline hero (massivo, condensado-ish)
2. Subhead / kicker (pequeno, uppercase, tracking)
3. H2 de seção (bold, ~36–48px)
4. H3 de card (bold, ~22–28px)
5. Body (regular, ~17–18px)
6. Meta/data (medium, ~13–14px)

---

## 4. Grid & layout

- Grid 12 colunas com gutters generosos (~24–32px desktop).
- **Assimetria intencional:** seções não ficam todas centralizadas; alguns blocos quebram pra 7+5, 8+4, 5+7.
- Whitespace vertical entre seções é **grande** (96–160px desktop). Página respira.
- Mobile: stack único, mas a hierarquia visual persiste pelo peso tipográfico (não vira "tudo igual").

**Breakpoints inferidos:** mobile <640, tablet 640–1024, desktop 1024–1440, wide 1440+.

---

## 5. Hero

- Full-width, altura ~85–95vh.
- Imagem fotográfica grande **OU** composição collage (mix foto + ilustração + texto sobreposto).
- Headline aspiracional centralizada ou alinhada à esquerda, em branco sobre overlay escuro gradiente.
- Sem botão "Saiba mais" decorado — link textual sublinhado com seta `→`.
- Pode rotacionar (carrossel) entre 2–3 narrativas principais, mas sempre 1 protagonista por slide.

**Exemplo Ford:** "We're building a world where everyone has the power to shape their lives."

---

## 6. Cards de notícia — assinatura **Triptych**

**A peça mais distintiva do site.** Cards de notícia/programa frequentemente apresentam **três imagens combinadas** numa composição editorial:

- **Variante A — Hero+2 Stacked:** uma imagem grande (landscape ou portrait) à esquerda, duas menores empilhadas à direita.
- **Variante B — Diagonal/Stair:** três imagens em escada, sobrepondo-se levemente.
- **Variante C — Grid 1+2 horizontal:** uma grande superior, duas menores lado-a-lado abaixo.
- **Variante D — Photo + Map + Icon:** foto + dado visual (mapa, gráfico) + ícone/ilustração.

Cada arranjo evita simetria perfeita: imagens **não têm a mesma proporção**, há alguns pixels de respiro (sem bordas duras), e ocasionalmente uma se sobrepõe levemente à outra. Sensação: **curadoria editorial**, não grade automática.

Sob o triptych: kicker (categoria), headline curta (~7–12 palavras), data, e link textual.

---

## 7. Navegação

- Header dark (navy) ocupa ~80px de altura, com logo à esquerda em branco/creme.
- Menu principal: 5–6 itens horizontais, todos clicáveis abrem dropdown rico (mega-menu) com sub-categorias e featured links.
- Em mobile: hamburger + drawer full-screen com tipografia grande.
- Search é discreto (ícone), abre overlay full-screen.

---

## 8. CTAs

- **Predominante: link textual com seta** `Discover more →` em peso medium.
- Botões cheios são raros e usados pra ações finais (donate, subscribe). Quando aparecem: **retangulares, sem rounded corners**, fundo navy ou coral, texto em uppercase ou case normal bold.
- Estado hover: shift de cor + linha que cresce sob o texto.

---

## 9. Tratamento de imagem

- Aspect ratios consistentes por tipo: hero 16:9, retrato 3:4, square 1:1.
- Color grading sutil — fotos não saturadas demais, tendendo levemente quente.
- Overlays gradiente preto-transparente pra legibilidade de texto sobre foto.
- Captions são minimais e em tipografia menor, alinhadas à esquerda da imagem.
- Fotografia humanista: rostos diversos, contextos globais, agência (pessoas fazendo, não recebendo).

---

## 10. Voz editorial

- **Verbos ativos no presente contínuo:** "Strengthening democracy", "Advancing rights".
- **Especificidade ancorada:** valores ($60M), lugares (Michigan, Lagos), tempos (90 anos, 2026).
- **Sujeito coletivo:** "we", "communities", "people" — raramente "Ford Foundation gives…".
- Headlines curtas (7–14 palavras), parágrafos abertura de 1–2 frases.
- Sem jargão filantrópico ("stakeholder engagement", "synergies"). Linguagem direta.

---

## 11. Assinaturas distintivas (resumo)

1. **Triptych de imagens** em cards (item #6) — assinatura #1.
2. **Whitespace generoso** entre seções, sinalizando confiança institucional.
3. **Navy + creme + acentos quentes** — paleta reconhecível.
4. **CTAs textuais com seta**, quase nunca botão.
5. **Asymmetric grid** — quebra de monotonia controlada.
6. **Fotografia humanista** com edição uniforme.
7. **Mega-menus** com curadoria editorial, não árvore de site map seca.

---

## 12. O que NÃO copiar

- Navy frio puro como primário Brasil — adaptar (ver `redesign-spec.md`).
- Densidade de mega-menus Ford — Brasil Te Ama tem 9 páginas, não 90; menu pode ser mais leve.
- Tipo "monolítico" só sans — pra reforçar voz editorial brasileira, vamos parear serif display + sans body (decisão divergente justificada no spec).

— Uma, desenhando com empatia 💝

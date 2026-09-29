# Capi Rush: Ciclovia Livre 🚲 — advergame Bora Bike

Prática 02 de Modelagem e Animação 3D (FMU): um advergame do briefing ao jogo jogável no navegador.

**▶️ Jogar:** https://enzorossi11.github.io/aulade3D/game/ (depois de ativar o GitHub Pages, ver abaixo)

A Capi, uma capivara estudante (sempre de capacete), pedala por uma rua de 3 faixas desviando de cones, buracos e poças. Ao pegar o **Passe Mensal**, a rua vira **ciclovia livre** por 5 s: sem obstáculos, mais rápida e com pontos em dobro. A tela final entrega o código fictício **BORAPEDALA** para o Plano Mensal Estudante.

## Estrutura (padrão da aula)

```
briefing/   briefing_bora-bike.md, conceitos_v01.md
docs/       mini-gdd_v01.md, relatorio_final.md
prompts/    ficha_mascote_capi.md, log_de_prompts.md  ← prompts prontos pra colar no Gemini
assets/     imagens geradas no Nano Banana (nomes exatos no mini-GDD)
game/       index.html (o jogo), link_do_jogo.txt, prints/
divulgacao/ divulgacao_keyart_v01.png
```

## Status

- [x] Briefing, 5 respostas e 3 conceitos
- [x] Mini-GDD (9 seções)
- [x] Ficha travada do mascote + todos os prompts de imagem
- [x] Jogo funcionando (com desenhos provisórios até as imagens chegarem)
- [ ] Gerar as imagens no Gemini/Nano Banana e salvar em `assets/` com os nomes exatos
- [ ] Key art em `divulgacao/`
- [ ] Ativar o GitHub Pages e testar no celular e numa aba anônima
- [ ] Prints em `game/prints/` (tela inicial, gameplay, tela final)
- [ ] Teste com 2 pessoas + preencher o relatório
- [ ] (Opcional) Teaser no Veo 3.1

## Como as imagens entram no jogo

O jogo procura os arquivos em `assets/` com os nomes do mini-GDD (ex.: `mascote_capi_estado-pedalar_v01.png`) e remove o fundo verde `#00FF00` sozinho. Se um arquivo não existir, ele desenha uma versão provisória no lugar. Então dá pra subir as imagens aos poucos que o jogo vai trocando.

## Publicar (GitHub Pages)

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. Em 1–2 minutos o link acima começa a funcionar.

> O jogo precisa ser aberto por um link `http(s)` (Pages ou servidor local). Abrindo o arquivo direto do computador (`file://`), o navegador bloqueia a remoção do fundo verde.

---
*Jogo promocional fictício, criado com auxílio de IA generativa para fins educacionais.*

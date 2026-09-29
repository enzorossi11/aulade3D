# Capi Rush: Ciclovia Livre 🚲 — advergame Bora Bike

Prática 02 de Modelagem e Animação 3D (FMU): um advergame do briefing ao jogo jogável no navegador.

**▶️ Jogar:** https://enzorossi11.github.io/aulade3D/game/

A Capi, uma capivara estudante (sempre de capacete), pedala por uma rua de 3 faixas desviando de cones, buracos e poças. Ao pegar o **Passe Mensal**, a rua vira **ciclovia livre** por 5 s: sem obstáculos, mais rápida e com pontos em dobro. A tela final entrega o código fictício **BORAPEDALA** para o Plano Mensal Estudante.

![Key art](divulgacao/divulgacao_keyart_v01.png)

## Estrutura

```
briefing/   briefing_bora-bike.md, conceitos_v01.md
docs/       mini-gdd_v01.md, relatorio_final.md
prompts/    ficha_mascote_capi.md, log_de_prompts.md
assets/     model sheet, 5 estados da mascote, cenário (2 camadas), itens, logo, botões
            _fonte_svg/  código-fonte vetorial da arte (SVG) + script de exportação
game/       index.html (o jogo), link_do_jogo.txt, prints/
divulgacao/ divulgacao_keyart_v01.png (4:5)
```

## Checklist de entrega

| Entregável | Status |
|---|---|
| Mini-GDD (9 seções) | ✅ |
| Ficha + model sheet (4 vistas) | ✅ |
| Estados da mascote (5, incluindo o do power-up) | ✅ |
| Cenário (2 camadas, paleta da marca) | ✅ |
| Jogo: celular, até 60 s, tela final com CTA e declaração de IA | ✅ |
| Key art 4:5 com título e logo | ✅ |
| Prints (inicial, gameplay, final) | ✅ |
| Relatório final | ⏳ falta o teste com 2 pessoas |
| Link publicado (GitHub Pages) | ⏳ ativar em Settings → Pages |
| Teaser em vídeo (opcional) | — |

## Rodar localmente
```
python3 -m http.server
# abrir http://localhost:8000/game/
```

## Regerar a arte
```
npm i -g playwright && npm pack @fontsource/fredoka && tar xzf fontsource-fredoka-*.tgz
FREDOKA=package/files/fredoka-latin-700-normal.woff2 node assets/_fonte_svg/renderizar.mjs
```

---
*Jogo promocional fictício, criado com auxílio de IA generativa para fins educacionais. Fonte Fredoka sob SIL Open Font License.*

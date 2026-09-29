# Log de prompts — Capi Rush (Bora Bike)

Como usar: rode os prompts **na ordem**, salve cada imagem com o nome exato indicado e anote cada geração na tabela do fim (ela vira o orçamento do relatório).

Onde está escrito `[FICHA]`, cole o bloco completo de `prompts/ficha_mascote_capi.md`.

> 💰 **Flash explora, Pro finaliza.** Use o Nano Banana (Flash) nos prompts 03, 05, 06, 07 e 08, e o Nano Banana Pro nos prompts 04, 09 e 12.

---

## Prompt 01 — Conceitos (Claude) ✅ feito
Prompt 01 da aula, com o briefing de `briefing/briefing_bora-bike.md` e a ideia inicial do aluno ("bike em 3 faixas desviando de obstáculos"). Resultado em `briefing/conceitos_v01.md`.

## Prompt 02 — Mini-GDD (Claude) ✅ feito
Prompt 02 da aula com o conceito "Capi Rush". Resultado em `docs/mini-gdd_v01.md`.

---

## Prompt 03 — Exploração, 3 variações (Nano Banana Flash)
```
[FICHA]

Gere 3 variações diferentes deste mascote lado a lado, em uma única imagem,
mesmo estilo, mudando apenas a pose e a atitude:
1. confiante, em pé ao lado da bike, uma pata no guidão
2. animada, montada na bike dando um pequeno pulo
3. descontraída, acenando com o capacete bem visível

Fundo branco liso. Sem texto. Personagem inteiro visível.
```
➡️ Escolha uma das três e anote abaixo **por que** escolheu.

## Prompt 04 — Model sheet (Nano Banana Pro)
Anexe a variação escolhida.
```
[FICHA]

Usando a imagem anexada como referência exata do personagem, crie uma
model sheet com 4 vistas do mascote em pé, em pose neutra, SEM a bike, lado a lado:
frente, três-quartos, perfil e costas.
Mesma escala em todas as vistas, alinhadas pela base dos pés.
Fundo branco liso. Sem texto, sem legendas, sem linhas de grade.
Mantenha exatamente as cores, o capacete e a mochila.
```
💾 `mascote_capi_modelsheet_v01.png`

**Checagem antes de seguir:** capacete laranja com faixa branca e roda ☐ · pelagem caramelo ☐ · camiseta branca ☐ · mochila azul noite ☐ · nada verde no personagem ☐ · mesma proporção nas 4 vistas ☐

## Prompt 05 — Estados por edição (Nano Banana Flash)
Anexe a **model sheet** e gere **um estado por vez**:
```
[FICHA]

Usando a imagem anexada como referência exata, gere o mascote sozinho,
no estado: [ESTADO].

Descrição do estado: [DESCRIÇÃO]

Personagem inteiro, centralizado, ocupando 80% da altura da imagem.
Fundo verde chroma sólido #00FF00, sem sombra no chão, sem texto.
Imagem quadrada. Não altere cores, capacete, mochila ou proporções.
```

| [ESTADO] | [DESCRIÇÃO] | Salvar como |
|---|---|---|
| parado | Visto de frente, em pé ao lado da bike laranja, uma pata no guidão, sorriso de canto, capacete na cabeça | `mascote_capi_estado-parado_v01.png` |
| pedalar | Visto **de costas e um pouco de cima**, montado na bike laranja pedalando para frente (para o topo da imagem), mochila azul noite bem visível, capacete visível | `mascote_capi_estado-pedalar_v01.png` |
| pegar | Visto de costas e um pouco de cima, na bike, com uma pata erguida comemorando, pequeno pulo | `mascote_capi_estado-pegar_v01.png` |
| ops | Visto de costas e um pouco de cima, na bike, balançando e desequilibrado, pelos arrepiados, capacete firme na cabeça | `mascote_capi_estado-ops_v01.png` |
| ciclovia | Visto de costas e um pouco de cima, na bike, inclinado para frente em alta velocidade, linhas de velocidade e um brilho laranja em volta do corpo | `mascote_capi_estado-ciclovia_v01.png` |

⚠️ Os estados do jogo são **de costas**, porque a câmera fica atrás da bike. Só o "parado" (tela inicial) é de frente.

## Prompt 06 — Camada de fundo: cidade vista de cima (Nano Banana Flash)
```
Ilustração 2D vetorial para fundo de jogo mobile em modo retrato (9:16),
vista de cima (top-down) de uma rua de bairro universitário de São Paulo:
calçadas com árvores, canteiros e telhados dos dois lados.
A faixa central (60% da largura) deve ficar vazia, em cinza escuro liso,
porque a rua será colocada por cima.
Paleta: azul noite (#1B2440), branco asfalto (#F2F0EA), toques de laranja (#FF6B1A)
e verde (#22B573) nas árvores.
Repetível na vertical: a borda de cima encaixa perfeitamente na borda de baixo (seamless).
Estilo: cores chapadas, contornos limpos, mesmo estilo do mascote anexado.
Sem personagens, sem carros, sem texto, sem logos.
```
💾 `cenario_cidade_fundo_v01.png`

## Prompt 07 — Camada da rua (Nano Banana Flash)
```
Faixa vertical de asfalto vista de cima (top-down) em ilustração 2D vetorial,
cinza azulado escuro (#1B2440 clareado), dividida em 3 faixas por linhas
tracejadas brancas (#F2F0EA), com uma guia branca contínua em cada lateral.
Textura contínua e repetível nas bordas de cima e de baixo (seamless).
Formato alto e estreito (proporção 1:2). Sem personagens, sem carros, sem texto.
Mesmo estilo do fundo anexado.
```
💾 `cenario_rua_chao_v01.png`

## Prompt 08 — Folha de itens (Nano Banana Flash)
Anexe a model sheet.
```
Folha de itens para jogo mobile vistos de cima, ilustração 2D vetorial,
mesmo estilo do mascote anexado. 6 itens organizados em uma grade 3x2,
bem separados entre si, cada um centralizado no seu quadrado,
todos com o mesmo tamanho visual, NA ORDEM:

Linha de cima:
1. moeda dourada com o símbolo de uma roda de bike (item bom)
2. garrafinha de água azul (item bom)
3. cone de trânsito laranja e branco (obstáculo)

Linha de baixo:
4. buraco no asfalto com rachaduras (obstáculo)
5. poça d'água azul com reflexo (obstáculo)
6. cartão "passe" laranja (#FF6B1A) com uma faixa azul noite e o desenho
   de uma bicicleta branca (power-up do produto)

Fundo verde chroma sólido #00FF00. Sem texto, sem números.
Nenhum item pode ter verde.
```
💾 `itens_folha_v01.png`

## Prompt 09 — Logo e botões (Nano Banana Pro)
```
Logotipo para a marca fictícia "Bora Bike": a palavra BORA em letras
arredondadas e grossas laranja (#FF6B1A), a palavra BIKE embaixo em
branco asfalto (#F2F0EA), com uma roda de bike estilizada no lugar da letra O.
Fundo verde chroma sólido #00FF00. Estilo vetorial, moderno, jovem, urbano.
Escreva exatamente: "BORA" e "BIKE".
```
💾 `ui_logo_bora-bike_v01.png`

```
Conjunto de 3 botões para jogo mobile, estilo vetorial arredondado,
mesmo estilo do logo anexado, empilhados verticalmente com espaço entre eles:
1. botão laranja (#FF6B1A) com o texto "JOGAR"
2. botão azul noite (#1B2440) com o texto "JOGAR DE NOVO"
3. botão branco asfalto (#F2F0EA) com contorno azul noite e o texto "COMPARTILHAR" em azul noite
Texto legível, exatamente como escrito. Fundo verde chroma #00FF00.
```
💾 `ui_botoes_v01.png`

## Prompt 10 — O jogo
O jogo já está montado em `game/index.html` e **carrega automaticamente** os arquivos acima de `assets/` com esses nomes exatos, removendo o fundo verde. Até as imagens chegarem, ele usa desenhos provisórios.

Se o professor exigir a montagem no AI Studio, este é o prompt equivalente:
```
Crie um jogo casual para navegador chamado "Capi Rush: Ciclovia Livre",
feito para a marca fictícia Bora Bike. HTML5 em arquivo único, funcionando
em celular (modo retrato, toque nos lados da tela ou deslizar) e no computador
(setas ← → e A/D).

ASSETS ANEXADOS (use exatamente estes nomes):
- mascote_capi_estado-parado_v01.png, mascote_capi_estado-pedalar_v01.png,
  mascote_capi_estado-pegar_v01.png, mascote_capi_estado-ops_v01.png,
  mascote_capi_estado-ciclovia_v01.png
- cenario_cidade_fundo_v01.png (fundo repetido na vertical, rolando a 50% da velocidade)
- cenario_rua_chao_v01.png (rua de 3 faixas repetida na vertical, rolando na velocidade do jogo)
- itens_folha_v01.png: grade 3x2 com, na ordem, moeda, garrafinha, cone,
  buraco, poça, passe mensal. Recorte em 6 sprites.
- ui_logo_bora-bike_v01.png e ui_botoes_v01.png (3 botões empilhados:
  JOGAR, JOGAR DE NOVO, COMPARTILHAR; recorte em 3 partes)
Todos os PNGs com fundo verde #00FF00: remova essa cor (chroma key) ao carregar.

TELA INICIAL: fundo, logo no topo, Capi parada no centro, botão JOGAR,
e a frase "Desvie, pegue o Passe e libere a ciclovia!".

JOGO (45 segundos):
- A Capi fica na parte de baixo e troca entre 3 faixas, com movimento suave e leve inclinação.
- Itens descem pelas faixas com velocidade que começa na metade e aumenta até o máximo nos últimos 15 s.
- Nunca coloque obstáculos nas 3 faixas ao mesmo tempo.
- Pedalar = +2 pontos por segundo. Moeda = +10, garrafinha = +5. Sprite "pegar" por 0,3 s.
- Cone, buraco ou poça = -15, sprite "ops" por 0,6 s, tremor leve na tela e 1 s de invencibilidade.
- Passe Mensal cai no máximo 3 vezes por partida. Ao pegar: MODO CICLOVIA por 5 s:
  a rua fica verde (#22B573), os obstáculos somem, velocidade +30%, pontos em dobro,
  sprite "ciclovia", borda da tela brilhando em verde e o texto "CICLOVIA LIBERADA!".
- HUD no topo: pontos à esquerda, tempo à direita, fonte arredondada branca com contorno azul noite #1B2440.
- Nos últimos 10 s o cronômetro pisca em laranja e aparece "RETA FINAL!" por 1 s.
- Valores flutuantes (+10, +5, -15) subindo e sumindo acima da Capi.

TELA FINAL: pontuação grande, mensagem de acordo com a pontuação
(menos de 150: "Bora de novo?"; 150 a 300: "Mandou bem!"; mais de 300:
"Lenda da ciclovia!"), o texto "Use o código BORAPEDALA no app Bora Bike e
ganhe o 1º mês do Plano Mensal Estudante com desconto", botões JOGAR DE NOVO e COMPARTILHAR
(o compartilhar copia para a área de transferência:
"Fiz [PONTOS] pontos no Capi Rush! Consegue me passar?").
Rodapé pequeno: "Jogo promocional fictício, criado com auxílio de IA
generativa para fins educacionais."

RESTRIÇÕES: não peça nome, e-mail nem nenhum dado do jogador; não use
sons nem imagens externas; guarde o recorde apenas na memória da sessão;
a Capi está sempre de capacete; não mostre carros nem situações de risco no trânsito.
```

## Prompt 12 — Key art (Nano Banana Pro)
Anexos: `mascote_capi_modelsheet_v01.png`, `cenario_cidade_fundo_v01.png`, `itens_folha_v01.png`, `ui_logo_bora-bike_v01.png`
```
Crie a key art de divulgação de um jogo mobile, formato vertical 4:5 para
post de rede social. A mascote Capi (use exatamente o personagem anexado,
de capacete) no centro, pedalando a bike laranja em alta velocidade numa
ciclovia verde (#22B573) que corta a cidade, moedas e o cartão do passe
voando ao redor, cones ficando para trás. Cenário urbano do fundo anexado.
No topo, o título "CAPI RUSH" em letras grossas laranja (#FF6B1A)
com contorno azul noite (#1B2440). Embaixo: "Pedale, pontue e libere a ciclovia!".
Logo da Bora Bike no canto inferior direito.
Estilo vetorial 2D, cores chapadas, energia urbana.
Escreva exatamente os textos entre aspas.
```
💾 `divulgacao/divulgacao_keyart_v01.png`

## Extra opcional — Teaser de 8 s (Veo 3.1)
Só depois do jogo e da key art aprovados. Anexe a key art.
```
Anime a imagem anexada: câmera se aproxima lentamente da mascote,
as moedas giram em câmera lenta ao redor, a Capi pega o cartão do passe e
a rua à frente se transforma em uma ciclovia verde brilhante, ela acelera
e faz um aceno de vitória, sempre de capacete.
Áudio: batida animada urbana, som de campainha de bike, som de "pop"
quando pega o passe. Sem falas. 8 segundos.
Mantenha exatamente o estilo, as cores e os textos da imagem.
```

---

## Registro de gerações (preencher enquanto gera)

| # | Prompt | Ferramenta | Resultado / arquivo | Aprovado? | Observação (por que refez, o que corrigiu) |
|---|---|---|---|---|---|
| 1 | 01 Conceitos | Claude | `briefing/conceitos_v01.md` | ✅ | Escolhido o conceito A (demonstrativo) |
| 2 | 02 Mini-GDD | Claude | `docs/mini-gdd_v01.md` | ✅ | |
| 3 | 03 Exploração | Nano Banana | | | Escolhi a variação __ porque... |
| 4 | 04 Model sheet | Nano Banana Pro | | | |
| 5 | | | | | |

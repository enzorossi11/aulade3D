# Mini-GDD do Capi Rush: Ciclovia Livre (v01)

**Cliente:** Bora Bike (fictícia) · **Produto:** Plano Mensal Estudante · **Plataforma:** navegador, celular em modo retrato

## 1. Resumo em uma frase
A Capi, uma capivara estudante de capacete, pedala por uma rua de 3 faixas desviando de cones, buracos e poças, e quando pega o **Passe Mensal Bora** a rua vira **ciclovia livre**: sem obstáculos, mais rápida e com pontos em dobro.

## 2. Público e plataforma
- Estudantes de 18 a 25 anos, no celular (ônibus, intervalo, fila).
- Navegador (HTML5, arquivo único), modo retrato 9:16. Toque/deslize no celular; setas ← → ou A/D no computador.
- Partida de **45 segundos**.

## 3. Loop principal (o que o jogador faz a cada 3 segundos)
Olha o que está descendo → troca de faixa para **desviar** de um obstáculo → troca de novo para **pegar** uma moeda → de vez em quando corre atrás do **Passe Mensal** para liberar a ciclovia.

## 4. Regras de pontuação
| Evento | Efeito |
|---|---|
| Pedalar | +2 pontos por segundo |
| Moeda Bora | +10 |
| Garrafinha d'água | +5 |
| Cone / buraco / poça | -15, sprite "ops" por 0,6 s, tremor leve na tela, 1 s de invencibilidade |
| Passe Mensal (máx. 3 por partida) | **Modo Ciclovia** por 5 s: pontos em dobro, obstáculos somem, velocidade +30%, borda verde brilhando e o texto "CICLOVIA LIBERADA!" |

- **Curva de dificuldade:** começa com metade da velocidade e acelera até o máximo nos últimos 15 s.
- **Justiça:** nunca aparecem obstáculos nas 3 faixas ao mesmo tempo.
- **Reta final:** nos últimos 10 s o cronômetro pisca em laranja e aparece "RETA FINAL!".

## 5. Estados do mascote
| Estado | Quando aparece | Arquivo |
|---|---|---|
| Parado | Tela inicial (de frente, ao lado da bike) | `mascote_capi_estado-parado_v01.png` |
| Pedalar | Durante o jogo (de costas, pedalando) | `mascote_capi_estado-pedalar_v01.png` |
| Pegar | Pegou moeda/garrafinha (0,3 s) | `mascote_capi_estado-pegar_v01.png` |
| Ops | Bateu em obstáculo (0,6 s) | `mascote_capi_estado-ops_v01.png` |
| Ciclovia | Modo Ciclovia ativo (power-up) | `mascote_capi_estado-ciclovia_v01.png` |

A inclinação ao trocar de faixa é feita no código (rotação), não precisa de sprite extra.

## 6. Lista completa de assets
| Arquivo | O que é |
|---|---|
| `mascote_capi_modelsheet_v01.png` | Model sheet, 4 vistas (frente, três-quartos, perfil, costas) |
| `mascote_capi_estado-parado_v01.png` | Estado parado |
| `mascote_capi_estado-pedalar_v01.png` | Estado pedalar |
| `mascote_capi_estado-pegar_v01.png` | Estado pegar |
| `mascote_capi_estado-ops_v01.png` | Estado ops |
| `mascote_capi_estado-ciclovia_v01.png` | Estado ciclovia (power-up) |
| `cenario_cidade_fundo_v01.png` | Camada de fundo: cidade vista de cima (calçadas, árvores, telhados), repetível na vertical |
| `cenario_rua_chao_v01.png` | Camada da rua: asfalto com 3 faixas visto de cima, repetível na vertical |
| `itens_folha_v01.png` | Folha 3x2: moeda, garrafinha, cone, buraco, poça, Passe Mensal |
| `ui_logo_bora-bike_v01.png` | Logo "BORA BIKE" |
| `ui_botoes_v01.png` | Botões JOGAR / JOGAR DE NOVO / COMPARTILHAR |
| `divulgacao_keyart_v01.png` | Key art 4:5 (pasta `divulgacao/`) |

Os PNGs desta entrega já saem com fundo transparente. O jogo também aceita sprites com fundo verde chroma `#00FF00` (caso sejam regerados no Nano Banana) e remove essa cor sozinho.

## 7. Telas
- **Início:** fundo da cidade, logo no topo, Capi parada no centro, frase "Desvie, pegue o Passe e libere a ciclovia!", legenda dos itens, botão JOGAR, instruções de controle.
- **Jogo:** HUD no topo (pontos à esquerda, tempo à direita), rua de 3 faixas rolando, Capi na parte de baixo.
- **Fim:** pontuação grande, mensagem por faixa ("Bora de novo?" < 150 · "Mandou bem!" 150 a 300 · "Lenda da ciclovia!" > 300), cupom **BORAPEDALA** com a chamada para assinar o Plano Mensal Estudante no app, botões JOGAR DE NOVO e COMPARTILHAR (copia "Fiz [PONTOS] pontos no Capi Rush! Consegue me passar?"), rodapé de declaração de IA.

## 8. Integração da marca
- **Nível demonstrativo:** o Passe Mensal é o power-up e faz exatamente o que o plano promete: libera a ciclovia e deixa o caminho livre.
- **Ilustrativo:** moedas com o símbolo da marca, bike e capacete na cor Laranja Bora.
- **Associativo:** logo na tela inicial, paleta em todo o cenário e na interface.

## 9. Restrições do cliente
- Capacete sempre, em todos os assets.
- Nenhuma situação de risco no trânsito (sem carros disputando faixa, sem furar sinal).
- Não infantil; humor urbano de estudante.
- Não pede nome, e-mail nem nenhum dado; recorde só na memória da sessão.
- Sem sons ou imagens externas: a música e os efeitos são sintetizados no próprio código (Web Audio), sem arquivos de áudio. Botão de som na tela (tecla M no computador).
- Rodapé: "Jogo promocional fictício, criado com auxílio de IA generativa para fins educacionais."
- Código **BORAPEDALA** é fictício.

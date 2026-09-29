# Relatório final do Capi Rush: Ciclovia Livre (Bora Bike)

## 1. Resumo da campanha
*Capi Rush* é um advergame de 45 segundos para celular, feito para a Bora Bike (marca fictícia) divulgar o Plano Mensal Estudante. A Capi, uma capivara estudante de capacete, pedala numa rua de 3 faixas desviando de cones, buracos e poças, e ao pegar o Passe Mensal a rua vira ciclovia livre. Na tela final o jogador recebe o código BORAPEDALA para assinar o plano no app.

## 2. Decisões criativas
- **Mecânica (corredor de 3 faixas):** partiu da minha ideia inicial, inspirada nos jogos clássicos de carro desviando de obstáculos. É entendida em 3 segundos, joga com um dedo e combina com o público que joga em pé no ônibus.
- **Mascote (capivara):** bicho urbano e querido em São Paulo (as capivaras do rio Pinheiros), brasileiro, com humor "de boa" que combina com o tom livre e urbano, e que não imita nenhum personagem famoso. Capacete fixo na ficha, para cumprir a restrição "sempre com capacete".
- **Paleta:** Laranja Bora `#FF6B1A` (energia, bike e capacete), Azul Noite `#1B2440` (cidade, contornos e texto), Verde Ciclovia `#22B573` (reservado para o power-up, então verde passa a significar "caminho livre"), Branco Asfalto `#F2F0EA` (faixas e camiseta).
- **Obstáculos sem carros:** cones, buracos e poças em vez de carros, para não mostrar o ciclista disputando espaço no trânsito (restrição do briefing).
- **Arte vetorial em código:** em vez de gerar imagem por imagem, os assets foram desenhados como SVG a partir de peças reutilizadas (capacete, mochila, pelagem). Assim a mascote fica idêntica em todos os sprites, que é o que a "ficha travada" busca.

## 3. Integração da marca
**Nível: demonstrativo.** O produto (Plano Mensal) entra no jogo como o **Passe Mensal**, o power-up que ativa o **Modo Ciclovia**: tira todos os obstáculos, acelera a bike e dobra os pontos. Ou seja, o jogador *sente* o benefício que o plano promete ("com o plano, o caminho fica livre"), que é a mesma dica de integração do briefing ("o plano libera ciclovias no mapa"). Também há camadas ilustrativas (moedas com a roda da marca, bike e capacete na cor Laranja Bora) e associativas (logo e paleta).

## 4. Teste com usuário
`[PREENCHER]` com pelo menos 2 pessoas, jogando sem nenhuma explicação sua.

| Pergunta | Pessoa 1 | Pessoa 2 |
|---|---|---|
| Entendeu o que fazer sem perguntar? | ☐ sim ☐ não | ☐ sim ☐ não |
| Percebeu o que o Passe Mensal faz? | ☐ sim ☐ não | ☐ sim ☐ não |
| Leu o código promocional na tela final? | ☐ sim ☐ não | ☐ sim ☐ não |
| Jogou de novo sem você pedir? | ☐ sim ☐ não | ☐ sim ☐ não |
| Lembra o nome da marca depois? | ☐ sim ☐ não | ☐ sim ☐ não |

O que mudaria depois do teste: `[PREENCHER]`

## 5. Orçamento real
| Etapa | Ferramenta | Estimado na aula | Real |
|---|---|---|---|
| Conceitos e mini-GDD | Assistente de IA | 2 prompts de texto | 2 prompts |
| Ficha do mascote | Assistente de IA | não previsto | 1 |
| Exploração + model sheet | Nano Banana / Pro | 2 a 4 imagens | 0 imagens (SVG em código, 1 versão + 2 correções) |
| 5 estados | Nano Banana | 5 a 7 imagens | 0 imagens (SVG, junto com a model sheet) |
| Cenário (2 camadas) | Nano Banana | 2 a 3 | 0 imagens (SVG, 1 versão) |
| Folha de itens | Nano Banana | 1 a 2 | 0 imagens (SVG, 1 versão) |
| Logo + botões | Nano Banana Pro | 2 a 3 | 0 imagens (SVG, 1 versão) |
| Jogo + correções + game feel | AI Studio | 8 a 15 iterações | 6 iterações (assistente de IA) |
| Key art | Nano Banana Pro | 1 a 2 | 0 imagens (SVG, 1 versão + 1 correção) |
| Teaser (opcional) | Veo 3.1 | 1 | não feito |
| **Total de gerações de imagem** | | **~15 a 23** | **0**: 12 PNGs exportados de código, com 3 rodadas de correção |

Custo de produção: nenhum crédito de geração de imagem. Como o desenho é vetorial, cada ajuste custa uma edição de código, não uma nova geração, e nunca muda a mascote sem querer.

## 6. O que deu errado e como resolvi
1. **As entradas de ar do capacete pareciam olhos.** Na vista de costas (a usada no jogo), duas entradas de ar no capacete e a borda logo abaixo formavam um "rosto", e a Capi parecia estar vindo de frente. Removi as entradas de ar dos sprites na bike.
2. **Erros na vista de perfil da model sheet.** A faixa branca do capacete flutuava acima dele e o focinho tinha uma mancha escura retangular. Redesenhei a faixa em cima do capacete e troquei a mancha por uma sombra na ponta do focinho.
3. **Elementos sobrepostos na interface.** A legenda "Ciclovia" cobria o ícone do passe, o logo encostava no "TEMPO ESGOTADO!" e, na key art, um cone encostava no rodapé. Reposicionei e conferi pelos prints.
4. **Verde da marca x fundo chroma.** Se as imagens forem regeradas no Nano Banana com fundo `#00FF00`, o verde da marca poderia sumir junto. O jogo usa um chroma key que só remove verdes "puros". Testei com uma imagem que tinha as duas cores.
5. **Sprites faltando.** Se só alguns estados da Capi existissem, o jogo misturaria imagem com desenho provisório. Os estados que faltarem usam o sprite "pedalar".

## 7. Declaração de uso de IA
| Etapa | Ferramenta de IA | O que a IA fez | Decisão humana |
|---|---|---|---|
| Briefing e conceitos | Assistente de IA (texto) | Organizou o briefing e propôs 3 conceitos | Escolha da marca Bora Bike e ideia do jogo de 3 faixas desviando de obstáculos |
| Mini-GDD, ficha e prompts | Assistente de IA | Redigiu o mini-GDD, a ficha travada e os prompts | Aprovação da mascote, paleta e regras |
| Imagens (mascote, cenário, itens, UI, key art) | Assistente de IA | Desenhou todas as imagens como ilustração vetorial em código (SVG) e exportou os PNGs | Aprovação da arte |
| Código do jogo | Assistente de IA | Escreveu o HTML5/JavaScript e testou em navegador automatizado | Testes no celular e com usuários |
| Fonte tipográfica | Não é IA | Fredoka, licença SIL Open Font License | |

Todas as marcas, produtos e códigos promocionais são fictícios e foram criados para fins educacionais. O jogo não coleta nenhum dado pessoal e guarda o recorde só na memória da sessão.

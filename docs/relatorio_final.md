# Relatório final — Capi Rush: Ciclovia Livre (Bora Bike)

> ✏️ **Rascunho.** As partes marcadas com `[PREENCHER]` dependem do que você fizer (imagens, testes). Revise o texto inteiro antes de entregar, principalmente a seção 7.

## 1. Resumo da campanha
*Capi Rush* é um advergame de 45 segundos para celular, feito para a Bora Bike (marca fictícia) divulgar o Plano Mensal Estudante. A Capi, uma capivara estudante de capacete, pedala numa rua de 3 faixas desviando de cones, buracos e poças, e ao pegar o Passe Mensal a rua vira ciclovia livre. Na tela final o jogador recebe o código BORAPEDALA para assinar o plano no app.

## 2. Decisões criativas
- **Mecânica (corredor de 3 faixas):** partiu da ideia do aluno, inspirada nos jogos clássicos de carro desviando de obstáculos. É entendida em 3 segundos, joga com um dedo e combina com o público que joga em pé no ônibus.
- **Mascote (capivara):** bicho urbano e querido em São Paulo (as capivaras do rio Pinheiros), brasileiro, com humor "de boa" que combina com o tom livre e urbano, e que não imita nenhum personagem famoso. Capacete fixo na ficha, para cumprir a restrição "sempre com capacete".
- **Paleta:** Laranja Bora `#FF6B1A` (energia, bike e capacete), Azul Noite `#1B2440` (cidade, contornos e texto), Verde Ciclovia `#22B573` (reservado para o power-up, então verde passa a significar "caminho livre"), Branco Asfalto `#F2F0EA` (faixas e camiseta).
- **Obstáculos sem carros:** cones, buracos e poças em vez de carros, para não mostrar o ciclista disputando espaço no trânsito (restrição do briefing).
- **Sem verde no personagem:** o fundo chroma é verde, então nenhuma parte da Capi ou dos itens pode ser verde.

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

O que mudei depois do teste: `[PREENCHER]`

## 5. Orçamento real
`[PREENCHER]` com os números do registro em `prompts/log_de_prompts.md`.

| Etapa | Ferramenta | Gerações estimadas | Gerações reais |
|---|---|---|---|
| Conceitos e mini-GDD | Claude | 2 prompts de texto | 2 |
| Exploração do mascote | Nano Banana (Flash) | 1–2 | |
| Model sheet | Nano Banana Pro | 1–2 | |
| 5 estados | Nano Banana | 5–7 | |
| Cenário (2 camadas) | Nano Banana | 2–3 | |
| Folha de itens | Nano Banana | 1–2 | |
| Logo + botões | Nano Banana Pro | 2–3 | |
| Jogo + correções + game feel | Claude (código) | 8–15 iterações | |
| Key art | Nano Banana Pro | 1–2 | |
| Teaser (opcional) | Veo 3.1 | 1 | |
| **Total de imagens** | | **~15 a 23** | |

## 6. O que deu errado e como resolvi
`[PREENCHER]` com no mínimo 3. Alguns já aconteceram no desenvolvimento do jogo:

1. **A legenda e o logo sobrepunham elementos na tela.** A legenda "Ciclovia" cobria o ícone do passe e o logo encostava no "TEMPO ESGOTADO!". Resolvi reposicionando a legenda e reduzindo o logo na tela final, conferindo pelos prints do jogo.
2. **Verde da marca x fundo chroma.** O verde da marca poderia sumir junto com o fundo `#00FF00`. Resolvi com um chroma key que só remove verdes "puros" (com pouco azul) e com a regra de não usar verde no personagem e nos itens. Testei com uma imagem de teste que tinha as duas cores.
3. **Sprites faltando.** Se só alguns estados da Capi estivessem prontos, o jogo misturaria imagem com desenho provisório. Resolvi fazendo os estados que faltam usarem o sprite "pedalar".
4. `[PREENCHER — ex.: algum problema na geração das imagens]`

## 7. Declaração de uso de IA
`[REVISAR — confirme se é isso mesmo que aconteceu]`

| Etapa | Ferramenta de IA | O que a IA fez | Decisão humana |
|---|---|---|---|
| Briefing e conceitos | Claude (Anthropic) | Organizou o briefing e propôs 3 conceitos | Escolha da marca Bora Bike, ideia do jogo de 3 faixas, escolha do conceito |
| Mini-GDD e ficha do mascote | Claude | Redigiu o mini-GDD, a ficha travada e os prompts de imagem | Aprovação do mascote (capivara), da paleta e das regras |
| Imagens (mascote, cenário, itens, UI, key art) | Nano Banana / Nano Banana Pro (Google) | Gerou as imagens (com marca d'água SynthID) | Escolha da variação, checagem de consistência, pedidos de correção |
| Código do jogo | Claude | Escreveu o HTML5/JavaScript do jogo | Definição da mecânica, testes no celular, ajustes de game feel |
| Teaser (se houver) | Veo 3.1 (Google) | Gerou o vídeo | Aprovação |

Todas as marcas, produtos e códigos promocionais são fictícios e foram criados para fins educacionais. O jogo não coleta nenhum dado pessoal.

<img src="https://raw.githubusercontent.com/Intelihub/Template_M1/main/assets/inteli.png" width="200px">


# GDD - Game Design Document - Módulo 1 - Inteli


## Cat Up

#### 👨‍🎓 Integrantes: 
- <a href="https://github.com/CaduQuaglia">Carlos Eduardo Serrano Quaglia</a>
- <a href="https://www.linkedin.com/in/eduardo-jesus-tavares-sant-anna-2bb399285/">Eduardo Jesus Tavares Sant'Anna</a>
- <a href="https://www.linkedin.com/in/felipe-neves-36925a346/">Felipe Neves Teixeira da Silva</a>
- <a href="https://www.linkedin.com/in/luana-de-jesus-lima-8b17a9266/">Luana de Jesus Lima</a>
- <a href="https://www.linkedin.com/in/luiz-hinuy-0995252b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Luiz Felipe Paravatti Maciel Hinuy</a>
- <a href="https://www.linkedin.com/in/nicolli-venino-santana-b84341254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Nicolli Venino Santana</a>

## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução (sprints 1 a 4)

## 1.1. Plano Estratégico do Projeto

### 1.1.1. Contexto da indústria (sprint 2)
Conhecer o contexto da indústria de um cliente é basilar para a realização de um projeto de sucesso, uma vez que tal abordagem possibilita tomadas de decisões estratégicas ao longo de todo processo de desenvolvimento. Nesse sentido, é significativo pontuar o escopo da empresa parceira do jogo refernte a esta documentação: Dr. Pet. Ela faz parte do mercado de serviços para pets no Brasil, sendo voltada à educação e ao entretenimento de tutores, cães e gatos, por intermédio de cursos online e livros voltados à essa temática. Ademais, outra vertente adotada por ela é a aparição de seu fundador (Alexandre Rossi) em programas de televisão, de modo a divulgar conteúdos inerentes à empresa e a pets de um modo geral, além da utilização das redes sociais para tal. Portanto, a marca atua com veemência no cenário supracitado.



#### 1.1.1.1. Modelo de 5 Forças de Porter (sprint 2)

De acordo com o livro de Magretta (2019), que detalha o estudos de Michael Porter, o modelo das 5 Forças de Porter é um framework de análise setorial que permite entender o nível de competitividade de um mercado. O modelo apresenta 5 critérios: Rivalidade entre concorrentes, poder de negociação dos fornecedores, poder de negociação dos compradores, ameaça de novos entrantes e ameaça de produtos substitutos, e avaliamo a força de cada um deles e como eles influenciam a competitividade do setor em análise. O modelo determina que, quanto maior uma força for, maior o poder de ação ela tem sobre um negócio.

<p align = "center">Figura 1: modelo de 5 forças de Porter</p>

![quadro_5_forcas](https://github.com/user-attachments/assets/479e357c-f3ad-4257-864e-4d431e079b6f)
<p align = "center">Fonte: Modelo criado por Michael Eugene Porter (1980). Adaptação feita pelos autores (2025).</p> <br> <br>


#### 1. Rivalidade entre os concorrentes:

Essa força avalia o nível de competição dentro de um setor e seu impacto na lucratividade das empresas. Uma rivalidade intensa ocorre quando há muitos concorrentes de tamanho semelhante, crescimento lento do mercado, produtos pouco diferenciados ou altos custos fixos, levando a disputas agressivas de preços, marketing e inovação.

- A marca Dr. Pet encontra poucos concorrentes diretos no setor de educação pet e entretenimento pela televisão, com apenas alguns exemplos de personalidades que abordam o mesmo assunto. Já no setor de vendas de livros e cursos para adestramento a marca possui concorrência com algumas plataformas como hotmart;

- Existem poucos apresentadores de televisão no setor de educação pet rivalidade traz inovação nos produtos e serviços do setor, consequentemente melhorando o bem estar dos pets.

#### 2. Ameaça de novos entrantes:

Essa força avalia o quanto a entrada de novas empresas pode afetar a competitividade e a lucratividade de um setor. Se houver poucas barreiras de entrada, como baixos custos iniciais, acesso fácil a canais de distribuição e pouca regulamentação, novos concorrentes podem surgir rapidamente, aumentando a competição e pressionando preços e margens de lucro para baixo.

- Principais barreiras: Visibilidade na mídia, persona comunicativa e carismática;
- Impacto potencial: Crescimento no setor de educação pet;

#### 3. Poder de barganha dos fornecedores:

Essa força examina a influência que os fornecedores exercem sobre as empresas do setor. Se houver poucos fornecedores, produtos insubstituíveis ou altos custos de troca, eles podem impor preços elevados, prazos rígidos e condições desfavoráveis, reduzindo a lucratividade das empresas compradoras. Já quando há muitos fornecedores, produtos padronizados e facilidade de substituição, o poder de barganha diminui, permitindo que as empresas negociem melhores condições. A dependência de matérias-primas específicas ou tecnologia exclusiva também pode aumentar a força dos fornecedores no mercado.

- Impacto: No caso de rescisão contratual com a emissora, haveria uma redução no alcance do Dr. Pet ao público;
- Alternativas de fornecimento: Outras plataformas para vender cursos, outras emissoras de programas de televisão.

#### 4. Poder de barganha dos clientes:

Essa força avalia a influência dos consumidores sobre as empresas do setor. Quando os clientes têm muitas opções, produtos pouco diferenciados ou baixo custo de troca, eles podem exigir preços mais baixos, melhor qualidade e melhores serviços, reduzindo a lucratividade das empresas. Esse poder aumenta quando compram em grandes volumes ou têm acesso fácil a informações sobre preços e concorrentes. Por outro lado, quando há poucos clientes, produtos exclusivos ou alta dependência da empresa, o poder de barganha dos consumidores diminui, permitindo que a empresa mantenha margens mais elevadas.

O poder de barganha dos clientes é considerado alto, pois há o fácil acesso a conteúdos similares por preços similares ou inferiores.

Exemplos: 
- Amantes de pets;
- Tutores;
- Futuros adestradores de pet.

#### 5. Ameaça de produtos ou serviços substitutos:

Essa força avalia o risco de os consumidores optarem por soluções alternativas que atendam às mesmas necessidades. Essa ameaça é alta quando há substitutos de qualidade, com preços mais baixos ou vantagens superiores, pressionando as empresas a reduzirem preços ou inovarem para manter sua base de clientes. Se os custos de troca forem baixos e os consumidores perceberem benefícios significativos nos substitutos, a competitividade do setor diminui. Por outro lado, quando há poucas alternativas viáveis ou altos custos de mudança, essa ameaça se reduz, favorecendo as empresas estabelecidas.

Exemplos:
- Cães ou outros pets robóticos: Robôs deste tipo dispensam o conteúdo do Dr. Pet porque dispensam adestramento;
- Pesquisa por IA Generativa;
- Vídeos educacionais no Youtube, Instagram e outras plataformas.


### 1.1.2. Análise SWOT (sprint 2)

A Análise SWOT é uma ferramenta estratégica usada para avaliar a posição de uma empresa, projeto ou indivíduo, considerando fatores internos e externos. Ela é dividida em quatro componentes: Forças (Strengths), que são os pontos fortes internos; Fraquezas (Weaknesses), que representam os desafios internos; Oportunidades (Opportunities), que são fatores externos positivos que podem ser aproveitados; e Ameaças (Threats), que são riscos externos que podem impactar negativamente. Essa análise ajuda na tomada de decisões e no desenvolvimento de estratégias mais eficazes.

<p align = "center">Figura 2: Análise SWOT</p>

![analiseSwot](https://github.com/user-attachments/assets/8a0b1694-3b95-4dd7-882e-8d0a9ec40121)
<p align = "center">Fonte: Modelo criado por Albert S. Humphrey (1960). Adaptação feita pelos autores (2025).</p> <br>



## Strengths:

  A seção de strenghts destaca os pontos fortes internos de uma organização, projeto ou indivíduo, ou seja, os aspectos que oferecem vantagem competitiva. Isso inclui recursos, habilidades, expertise, reputação, tecnologia, cultura organizacional e diferenciais que impulsionam o sucesso. 

  - Alta visibilidade na mídia;

  - Autoridade no assunto de educação pet;

  - Habilidade de comunicação didática.

## Weaknesses:

  A seção de Weaknesses identifica os pontos fracos internos que podem prejudicar o desempenho de uma organização, projeto ou indivíduo. Isso inclui limitações em recursos, falta de expertise, baixa eficiência, problemas estruturais, dependência de terceiros ou falhas operacionais.

  - A marca Dr. Pet está relacionada a apenas uma pessoa, pode se confundir com o seu representante, Alexandre Rossi;

  - Nichado em cães;

  - Forte dependência das redes de televisão.

## Opportunities:

  A seção de Opportunities analisa fatores externos positivos que podem ser explorados para crescimento e vantagem competitiva. Isso inclui tendências de mercado, avanços tecnológicos, mudanças regulatórias favoráveis, novas demandas dos consumidores ou parcerias estratégicas.

  - Venda de produtos próprios com a marca Dr. Pet;

  - Maior variedade de pets (Gatos, Passáros).

## Threats:

  A seção de Threats identifica os fatores externos que podem representar riscos para a organização, projeto ou indivíduo. Isso inclui concorrência acirrada, crises econômicas, mudanças regulatórias desfavoráveis, inovações disruptivas ou instabilidade política. 

  - Rescisão de contratos com emissoras de televisão;

  - Por uma possível falta de inovação criativa, as pessoas cansarem do mesmo conteúdo;

  - Novos entrantes com maior escopo de animais abordados pela empresa;

  - Indisponibilidade do Alexandre Rossi por qualquer motivo externo.

<hr>

### 1.1.3. Missão / Visão / Valores (sprint 2)

## Missão:

Contribuir para a educação pet em casa através da divulgação de conteúdo informativo nas redes sociais e venda de cursos e mentorias, com recursos que promovem a integração de tutores.

## Visão:

Ser referência no mercado pet focando na educação, oferecendo um serviço personalizado e exclusivo, e construir uma comunidade de tutores que compartilham experiências e aprendizados com seus pets e sobre eles também.

## Valores:

- Respeito aos animais (A marca Dr. Pet educa os tutores, promovendo amor e carinho entre os animais e as pessoas);

- Comunidade (o curso do Alexandre Rossi - Dr. Pet promove a interação entre outros tutores através de grupos em redes sociais, visando a construção de uma comunidade);

- Educação (a divulgação de conteúdo educativo é amplamente praticada pelo Dr. Pet, e o lema da comunidade de tutores é “Nenhuma dúvida fica para trás”, valorizando o aprendizado do cliente).

<hr>

### 1.1.4. Proposta de Valor (sprint 4)

*Posicione aqui o canvas de proposta de valor. Descreva os aspectos essenciais para a criação de valor da ideia do produto com o objetivo de ajudar a entender melhor a realidade do cliente e entregar uma solução que está alinhado com o que ele espera.*

### 1.1.5. Descrição da Solução Desenvolvida (sprint 4)

*Descreva brevemente a solução desenvolvida para o parceiro de negócios. Descreva os aspectos essenciais para a criação de valor da ideia do produto com o objetivo de ajudar a entender melhor a realidade do cliente e entregar uma solução que está alinhado com o que ele espera. Observe a seção 2 e verifique que ali é possível trazer mais detalhes, portanto seja objetivo aqui. Atualize esta descrição até a entrega final, conforme desenvolvimento.*

### 1.1.6. Matriz de Riscos (sprint 4)

*Registre na matriz os riscos identificados no projeto, visando avaliar situações que possam representar ameaças e oportunidades, bem como os impactos relevantes sobre o projeto. Apresente os riscos, ressaltando, para cada um, impactos e probabilidades com plano de ação e respostas.*

### 1.1.7. Objetivos, Metas e Indicadores (sprint 4)

*Definição de metas SMART (específicas, mensuráveis, alcançáveis, relevantes e temporais) para seu projeto, com indicadores claros para mensuração*

## 1.2. Requisitos do Projeto (sprints 1 e 2)
Logo abaixo, estão listados os requisitos do projeto do jogo "RonRonArte", por meios dos quais se busca explicitar, de maneira breve, lógica e sucinta, suas principais funcionalidades e aspectos, de acordo com o escopo vigente.  

\# | Requisitos  
--- | ---
1 | A tela inicial deve mostrar um botão “Jogar”, que, quando clicado, direciona o jogador às fases do jogo.
2 | Nas fases, o jogador (gato) deve clicar nos animais que aparecerem na tela para eliminá-los.
3 | As cores que o gato enxerga com mais facilidade serão usadas nos animais que ele precisa bater e as cores que são mais dificultosas de ver serão usadas no background. Dessa forma, a emissão de mais estímulo visual junto com a movimentação do alvo pela tela, potencializa o interesse do gato em abater os alvos.
4 | O gato percebe que eliminou o alvo por meio de um aviso sonoro e o efeito de splash na tela.
5 | No modo criativo, ao clicar na tela, o jogador (gato) consegue pintá-la.
6 | No modo de fases, ao clicar na tela, o jogador (gato) vai revelando uma pintura de um período da história da arte.
7 | Devem ser disponibilizados botões de hud na tela, ativados apenas quando clicados e pressionados em seguida (para que o gato não os ative sem querer).
8 | No modo criativo, as pinturas do gato serão guardadas em uma biblioteca de imagens disponibilizada no jogo para acesso do tutor.
9 | Ao final de cada fase, o jogador (gato) deve receber uma recompensa do tutor: petiscos ou ração.
10 | O jogo será reproduzido em formato web direcionado para dispositivos móveis (smartphones e tablets).
11 | Exibir som ao finalizar a fase para notificar o tutor e facilitar o entendimento do gato em relação à recompensa.

## 1.3. Público-alvo do Projeto (sprint 2)

Em linhas gerais, o público-alvo do jogo RonRonArte se concentra em gatos domésticos e seus respectivos tutores. Nesse sentido, é válido destacar que, de acordo com o Censo Pet IPB (2022), o número de gatos vem crescendo ao longo dos últimos anos nos lares brasileiros, saltando de uma população de 25,6 milhões em 2020 para 27,1 milhões de indivíduos em 2021, com uma estimativa de 2,5% de crescimento médio anual. A título de comparação, essa pesquisa também mostrou que o percentual da quantidade de cães, maior contingente de pets do Brasil, foi inferior no mesmo período: 4%. Ademais, nota-se que as adoções dos felinos representam 65% do total, o que demonstra o crescimento de tutores desses animais. Portanto, é possível observar o aumento da preferência das pessoas pela adoção de gatos no país.
  
Além disso, os gatos domésticos, na ausência de seus tutores, passam por momentos de instabilidade emocional. Segundo um estudo publicado na Universidade do Estado de Oregon, 64,3% desses pets sentem muita falta de seus donos quando estes não estão por perto (PETZ, 2023). Tal dado evidencia a necessidade de promover uma interação mais profunda e divertida entre ambos os grupos, uma vez que ambos se apegam um ao outro. Dessa forma, um jogo com o escopo supracitado surge como alternativa à situação mencionada.


# <a name="c2"></a>2. Visão Geral do Jogo (sprint 2)

## 2.1. Objetivos do Jogo (sprint 2)

O objetivo do jogo é fortalecer o laço entre tutor e gato, enquanto ensina uma nova forma de se divertir com o seu pet. O objetivo do gato é eliminar todos os animais da tela num determinado período de tempo, e o tutor deve aprender e exercer a mecânica de ser recompensado ao alcançar esse objetivo. Ademais, nosso jogo contemplará um modo de jogo alternativo em que o gato poderá "pintar" uma tela em branco, produzindo sua própria obra de arte.

## 2.2. Características do Jogo (sprint 2)

### 2.2.1. Gênero do Jogo (sprint 2)

O jogo se encaixa principalmente no gênero Arcade, pois é um jogo rápido e simples, com a mecânica principal sendo a de tocar na tela para "capturar" algo.

### 2.2.2. Plataforma do Jogo (sprint 2)

O jogo será desenvolvido para _smartphones e tablets_, com reprodução através da web, sem a necessidade de instalação de aplicativos externos.

Navegadores compatíveis: Google Chrome, Microsoft Edge, Mozilla Firefox.

### 2.2.3. Número de jogadores (sprint 2)

O jogo foi desenvolvido para ser uma experiência interativa entre o gato e seu tutor (2 jogadores), sendo majoritaria a participação do gato ao "caçar" os animais que aparecem nas fases, e a do tutor em recompensar o gato e acompanhar a história da arte conforme avança pelos níveis. 

### 2.2.4. Títulos semelhantes e inspirações (sprint 2)

Nosso jogo teve como inspiração outros títulos de jogos para gato, como:

Paint for Cats: Jogo cuja principal mecânica é ser um "jogo de pintar" para gatos, em que um rato colorido atravessa a tela com o intuito do gato bater na tela tentando o acertar. Ao acertá-lo, deixa um "splash" de tinta em formato de pata na tela.

Games for Cats: Jogo em que o gato deve acertar um animal correndo pela tela. Contempla diferentes tipos de animais com diferentes características e níveis de dificuldade.

Nosso jogo visa mesclar mecânicas presentes nesses outros jogos com uma identidade visual própria, buscando uma experiência interativa e divertida para gato e tutor.

### 2.2.5. Tempo estimado de jogo (sprint 5)

*Ex. O jogo pode ser concluído em 3 horas passando por todas as fases.*

*Ex. cada partida dura até 15 minutos*

# <a name="c3"></a>3. Game Design (sprints 2 e 3)

## 3.1. Enredo do Jogo (sprints 2 e 3)

Nós seres humanos, em algum momento de nossas vidas, pensamos no conceito de viagem no tempo. Um conceito interessante, desconhecido, e um tanto assutador. Entretanto, já imaginou se fosse possível viajar no tempo com o seu pet?
Pois é esse o enredo de RonRonArte, uma viagem no tempo com o seu gato! Mas não é uma viagem no tempo qualquer, é uma viagem pelos diferentes períodos da arte, passando por arte contemporânea, arte moderna, arte medieval, e arte rupestre.
Acompanhe seu pet nessa jornada e aprenda um pouco mais sobre a história da arte enquanto se diverte com seu amigo felino!

## 3.2. Personagens (sprints 2 e 3)

### 3.2.1. Controláveis
No que tange ao jogo RonRonArte, não há personagens controláveis pelo jogador, haja vista que o intuito do jogo é justamente incentivar hábitos de caça ao gato por intermédio de figuras clicáveis na tela (no caso, spritesheets). Desse modo, o objetivo não é que o jogador controle algum personagem no game, mas sim que ele possa eliminá-lo no decorrer do jogo em troca de recompensas alimentícias, a fim de que seus instintos naturais sejam estimulados. Portanto, especificamente no escopo de RonRonArte, o player pode interpretar tal circunstância como um meio pelo qual ele realiza uma ação e, em troca, ganha algo, associando o atingimento de objetivos com as recompensas supracitadas. A partir disso, abaixo estão as spritesheets correspondentes ao que acima foi observado.

<p align = 'center'>Figura 3 - Spritesheet de pombo (RonRonArte)</p><br>
<div align = 'center'>
  <img src="https://github.com/Inteli-College/2025-1A-T15-IN01-G03/blob/main/assets/pombo.png?raw=true">
</div><br>

<p align = 'center'>Fonte: autoria própria (2025).</p>


### 3.2.3. Diversidade e Representatividade dos Personagens

O jogo considera a diversidade e a inclusão de representatividade de minorias imprescindíveis. Por isso, na narrativa do modo com fases do RonRonArte, o jogador faz uma viagem pela história da arte e em cada período é exposto uma obra cujo autor pertence a um grupo sub-representado no universo artístico, como mulheres, negros, e integrantes da comunidade LGBTQIA +. Assim, o jogo se compromete em gerar visibilidade às figuras que foram intrínsecas no desenvolvimento da arte ao longo do tempo e que, em razão de vieses discriminatórios, não tiveram o merecido reconhecimento.

## 3.3. Mundo do jogo (sprints 2 e 3)

### 3.3.1. Locações Principais e/ou Mapas (sprints 2 e 3)

O jogo vem de uma viagem no tempo, especificadamente por momentos históricos e importantes para a arte de pintura, coletando quadros de pintores famosos desses momentos em que o jogador, o gato, irá visitar. Essa aventura será possível por meio de um portal, fantasioso, que servirá para o jogador poder acessar as fases. Os momentos históricos serão representados por animais que foram o foco e pintores e artes pertencentes a cada respectiva época, por exemplo, o quadro de Van Gogh. Nesse jogo ele não se segue com uma linha do tempo linear.

### 3.3.2. Navegação pelo mundo (sprints 2 e 3)
O jogador, sendo um gato, atravessará as fases atreves de um portal que o levará para épocas distintas e importantes para o conhecimento artístico da pintura. Com o passar das fases, elas se tornam selecionáveis a preferir do dono do gato, em que depois que o botão de “jogar”, poderá selecionar somente clicando com o dedo no botão referente a fase que for preferível a ser jogada.

### 3.3.3. Condições climáticas e temporais (sprints 2 e 3)

*\<opcional\> Descreva diferentes condições de clima que podem afetar o mundo e as fases, se aplicável*

*Caso seja relevante, descreva como o tempo passa, se ele é um fator limitante ao jogo (ex. contagem de tempo para terminar uma fase)*

### 3.3.4. Concept Art (sprint 2)
Uma Concept Art é um documento que mostra as características e os elementos gerais de um jogo, animação ou filme, com cenários e personagens, por exemplo. Com base nisso, realizou-se uma Concept Art de RonRonArte, de maneira a explicitar quais são os seus principais itens visuais e de história.

<p align = "center">Figura 4: Concept Art - RonRonArte</p>

 ![Concept Art - RonRonArte](https://github.com/user-attachments/assets/40ec0017-e333-43ed-956e-81564725f5af)
<p align = "center">Fonte: autoria própria (2025).</p> <br>

Caso queira acessar a Concept Art com as animações, [clique aqui](https://www.figma.com/proto/O28uXtCzHpYgGD5H7lxE97/Concept-Art---RonRonArte?content-scaling=fixed&kind=proto&node-id=15-4&page-id=0%3A1&scaling=scale-down) <br>

### 3.3.5. Trilha sonora (sprint 3)

*Descreva a trilha sonora do jogo, indicando quais músicas serão utilizadas no mundo e nas fases. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

*Exemplo de tabela*
\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | tema de abertura | tela de início | própria
2 | tema de combate | cena de combate com inimigos comuns | Hans Zimmer
3 | ... 

## 3.4. Inventário e Bestiário (sprint 3)

### 3.4.1. Inventário

*\<opcional\> Caso seu jogo utilize itens ou poderes para os personagens obterem, descreva-os aqui, indicando títulos, imagens, meios de obtenção e funções no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | item |  | como obter | função | efeito sonoro
--- | --- | --- | --- | --- | ---
1 | moeda | <img src="../assets/coin.png"> | há muitas espalhadas em todas as fases | acumula dinheiro para comprar outros itens | som de moeda
2 | madeira | <img src="../assets/wood.png"> | há muitas espalhadas em todas as fases | acumula madeira para construir casas | som de madeiras
3 | ... 

### 3.4.2. Bestiário

*\<opcional\> Caso seu jogo tenha inimigos, descreva-os aqui, indicando nomes, imagens, momentos de aparição, funções e impactos no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | inimigo |  | ocorrências | função | impacto | efeito sonoro
--- | --- | --- | --- | --- | --- | ---
1 | robô terrestre | <img src="../assets/inimigo2.PNG"> |  a partir da fase 1 | ataca o personagem vindo pelo chão em sua direção, com velocidade constante, atirando parafusos | se encostar no inimigo ou no parafuso arremessado, o personagem perde 1 ponto de vida | sons de tiros e engrenagens girando
2 | robô voador | <img src="../assets/inimigo1.PNG"> | a partir da fase 2 | ataca o personagem vindo pelo ar, fazendo movimento em 'V' quando se aproxima | se encostar, o personagem perde 3 pontos de vida | som de hélice
3 | ... 

## 3.5. Gameflow (Diagrama de cenas) (sprint 2)
<p align ="center">Figura 5: diagrama de cenas - RonRonArte</p>

<img src="https://github.com/Inteli-College/2025-1A-T15-IN01-G03/blob/main/assets/Diagrama%20de%20Cenas%20(2).png">
<p align ="center">Fonte: autoria própria (2025).</p>

#### Diagrama de cenas:

O diagrama de cenas é uma representação visual do caminhar do jogo ao longo de suas telas e cenas. Essa ferramenta apresenta como o design será feito, como as classes, objetos, atributos e métodos são realizados, facilitando a compreensão das funcionalidades.

<hr>

- **Tela inicial (Splash Screen):**
A primeira cena do jogo conta com uma splash screen (cena exibida ao abrir o jogo) que apresenta o nome de nossa equipe em um fundo preto.

Classes, atributos e métodos: classe "SplashScreen", métodos: preload e create.

<hr>

- **Tela de start:** 
A tela de start conta com uma imagem de fundo gerada por IA que apresenta elementos do storytelling do jogo como um portal, pinturas emolduradas e um gato. Além disso, há também um botão de "JOGAR", que ao ser pressionado redireciona para a tela de primeira fase do jogo.

Classes, atributos e métodos:

<hr>

- **Fase 1:**   
A primeira fase do jogo serve como tutorial para o tutor, apresentando como deverá ser feita a recompensa para o gato ao alcançar o objetivo do jogo. Nessa tela, haverá uma maneira de pular a cena de tutorial caso o tutor já saiba ou não queira ver o tutorial.
Classes, atributos, métodos e objetos:

- Tela de seleção de níveis
Após passar pelo tutorial, o jogador será direcionado para uma tela de seleção de níveis, onde poderá (caso já estiver desbloqueado) escolher a "fase" que gostaria de jogar.

 - Classes: SelectPhase
 - Atributos e métodos ainda não implementados.

<hr>

- **Fase 2:**
A segunda fase apresenta ao jogador a dinâmica principal do jogo, em que o gato, ao tocar em um animal "alvo" na tela (nessa fase em específico, será um pombo), preenche aos poucos o quadro de fundo, que revela uma obra de algum período da arte (nessa fase em específico, arte contemporânea). Após preenchimento desse quadro, é exibido uma tela de vitória que apresenta a obra completa, conjuntamente com um parágrafo explicativo sobre o artista e sua respectiva obra.

- Classes: ContempPhase;
- Atributos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target);

<hr>

- **Texto pós-fase:**
Essa cena apresentará um diálogo por texto que trará informações sobre o período da arte que será abordado na próxima fase, assim como um caminhar da história do jogo.
Classes, atributos e métodos: Ainda não implementado

- **Fase 3:** 
A terceira fase apresentará ao jogador um cenário semelhante ao da fase 2, porém com foco em um período da arte diferente (nessa fase em específico, arte moderna). Nessa fase, o animal alvo apresentado será um animal característico do período em questão, sendo, nessa fase, um rato.

- Classes: ModernPhase;
- Atributos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target);

<hr>

- **Fase 4:**
A quarta fase apresentará ao jogador um cenário semelhante ao das outras fases, porém com foco em um período da arte diferente (nessa fase em específico, arte medieval). Nessa fase, o animal alvo apresentado será um animal característico do período em questão, sendo, nessa fase, um coelho. 

- Classes: MedievalPhase;
- Atributos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target);

<hr>      

- **Fase 5:** 
A quinta fase apresentará ao jogador um cenário semelhante ao das outras fases, porém com foco em um período da arte diferente (nessa fase em específico, arte rupestre). Nessa fase o animal alvo apresentado será um animal característico do período em questão, sendo, nessa fase, uma mosca.

- Classes: AncientPhase;
- Atributos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target);

<hr>      

- **Fase especial (Tela branca para pintura)**:
A fase especial apresentará ao jogador uma tela em branco com uma variedade de opções de cores que podem ser escolhidas pelo tutor para seu gato pintar. Após escolhidas as cores, será necessário pressionar um botão para iniciar a fase. Após a iniciação da fase, um animal alvo passará pela tela atraindo a atenção do gato, que, ao acertar o alvo, pintará a região pressionada na tela branca de fundo.   

Classes, métodos e atributos: ainda não implementados.

<hr>

- **Tela de vitória:** A tela de vitória apresenta a arte completa pintada pelo gato, conjuntamente com uma representação visual do autor original da obra. Abaixo há uma breve descrição sobre o contexto da arte e seu artista. Além disso, há uma “métrica” acerca do desempenho do gato, representado em estrelas e % de acerto.

Classes, métodos e atributos: ainda não implementados.

## 3.6. Regras do jogo (sprint 3)

*Descreva aqui as regras do seu jogo: objetivos/desafios, meios para se conseguir alcançar*

*Ex. O jogador deve pilotar o carro e conseguir terminar a corrida dentro de um minuto sem bater em nenhum obstáculo.*

*Ex. O jogador deve concluir a fase dentro do tempo, para obter uma estrela. Se além disso ele coletar todas as moedas, ganha mais uma estrela. E se além disso ele coletar os três medalhões espalhados, ganha mais uma estrela, totalizando três. Ao final do jogo, obtendo três estrelas em todas as fases, desbloqueia o mundo secreto.*  

## 3.7. Mecânicas do jogo (sprint 3)

*Descreva aqui as formas de controle e interação que o jogador tem sobre o jogo: quais os comandos disponíveis, quais combinações de comandos, e quais as ações consequentes desses comandos. Utilize listas ou tabelas para organizar esta seção.*

*Ex. Em um jogo de plataforma 2D para desktop, o jogador pode usar as teclas WASD para mecânicas de andar, mirar para cima, agachar, e as teclas JKL para atacar, correr, arremesar etc.*

*Ex. Em um jogo de puzzle para celular, o jogador pode tocar e arrastar sobre uma peça para movê-la sobre o tabuleiro, ou fazer um toque simples para rotacioná-la*

## 3.8. Implementação Matemática de Animação/Movimento (sprint 3)

*Descreva aqui a função que implementa a movimentação/animação de personagens ou elementos gráficos no seu jogo. Sua função deve se basear em alguma formulação matemática (e.g. fórmula de aceleração). A explicação do funcionamento desta função deve conter notação matemática formal de fórmulas/equações. Se necessário, crie subseções para sua descrição.*

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo (sprint 1)

Em linhas gerais, a primeira versão do jogo “RonRonArte” conta com uma tela inicial, que contempla o botão “Jogar”. Sob essa perspectiva, criou-se a primeira cena do jogo, a qual é ativada quando o botão supracitado é clicado. Nela, sprites de animais aparecem randomicamente na tela, de maneira que o jogador (gato) seja incentivado a pressioná-los. Nesse sentido, é válido mencionar que, quando essas imagens animadas são clicadas, são liberados splashes de tinta com forma de patinha de gato, funcionalidade que nas próximas versões será refinada, a fim de que o jogador produza pinturas de acordo com os splashes. Portanto, objetiva-se ir além do convencional (apenas cliques na tela), por intermédio de dinâmicas atrelada à arte.  

Logo abaixo, estão registrados os prints das telas da primeira versão do jogo.

<p align = "center">Figura 6: tela de início do jogo</p>

![tela de start RonRonArte](https://github.com/user-attachments/assets/30f3865b-5e98-49f1-906e-e886c33ee157)

<p align = "center">Fonte: autoria própria (2025). </p> <br> <br>



<p align = "center">Figura 7: tela com a primeira cena</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/a2107a97-8d01-4339-8469-bef594f42c61" width="300">
</div>

<p align = "center">Fonte: autoria própria (2025). </p> <br> <br>



<p align = "center">Figura 8: tela da primeira cena com os splashes de tinta</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/9581c99b-c61d-407d-bb58-b492f8a47998" width="300">
</div>

<p align = "center">Fonte: autoria própria (2025). </p> <br> <br>




Ademais, é significativo pontuar que, ao longo desse primeiro momento de desenvolvimento, foram encontradas algumas dificuldades. Sob esse viés, o inicial não reconhecimento do código por parte do GitHub Pages e alguns bugs referentes aos sprites foram as principais adversidades enfrentadas ao longo do processo de desenvolvimento. Nessa perspectiva, tais aspectos estão passando por um crivo maior, de sorte que sejam superados.

Portanto, como próximos passos, notam-se os subsequentes: habilitação de personalização de fase pelo tutor (por meio da qual ele poderá selecionar a quantidade de animais que aparecem na tela), criação de um menu de opções funcional e elaboração de uma tela bônus para pintura por parte do gato. 

## 4.2. Desenvolvimento básico do jogo (sprint 2)

A partir da versão preliminar do jogo, realizou-se o desenvolvimento básico do game. Nele, foi acrescentado uma splash screen (com o nome da equipe), a fim de dar mais fluidez à experiência do usuário. Além disso, foi implementado um novo background na tela de início (gerada por IA), uma vez que o adicionado na primeira versão foi utilizado com objetivos de teste. Ademais, a tela de start conta com um botão que direciona ao tutorial do RonRonArte, nessa tela haverá disponível um botão para pular o tutorial caso o tutor já tenha o feito ou não queira o fazer, e, após o avanço do tutorial o jogador será redirecionado para a tela de primeira fase do jogo. Além disso, a idealização das fases já foi concluida, restando agora a implementação. Por fim, é válido mencionar que se iniciou a modularização do código, tendo sido refeitas as linhas de código em programação orientada a objetos. Conjunto a isso, houve a programação das sprites da tela de vitória, além da criação do contador de acertos para verificação do desempenho do jogador em sua gameplay. 

Os próximos passos para o desenvolvimento do jogo se desdobram em alguns objetivos, como:
- Implementação de mais fases;
- Melhoria na experiência do usuário;
- Implementação do modo de pintura livre;
- Criação de novos sprites de animais.

Eventuais dificuldades presentes no projeto:
- Familiaridade com a POO (Programação Orientada a Objetos);
- Gestão de tempo;
- Produção dos sprites/artes do jogo.

Logo abaixo, estão as telas da versão básica do jogo.
<p align = 'center'>Figura 9: tela de instruções</p>
<div align = 'center'>
  <img width="935" alt="image" src="https://github.com/user-attachments/assets/7081f995-b960-4c10-84eb-42fedf96822f" />
</div><br>

<p align = 'center'>Fonte: autoria própria (2025).</p> <br>


<p align = 'center'>Figura 10: tela de tutorial</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/510f51b9-c320-4c1d-ab87-3690abf2d989" />
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p><br>


<p align = 'center'>Figura 11: tela do início das fases</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/554c235d-a9b9-4f88-8729-2b6302444569" />
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p> <br>


<p align = 'center'>Figura 12: tela de pintura da fase 1</p>
<div align = 'center'>
  <img width="933" alt="image" src="https://github.com/user-attachments/assets/8f147d35-bbad-40ca-b773-183bf5c93b6d" />
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p><br>


<p align = 'center'>Figura 13: tela de vitória da fase 1</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/1790cca4-9119-4d94-ac4f-9f7220c094aa" />
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p><br>


<p>Também está representada a modularização do código nas figuras 14 e 15.</p>
<p align = 'center'>Figura 14: estrutura das pastas após a modularização do código</p>
<div align = 'center'>
  <img width="30%" alt="image" src="https://github.com/user-attachments/assets/76b12c16-e454-40a5-80c3-d23deaa03a73"/>
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p> <br> <br>


<p align = 'center'>Figura 15: estrutura da versão básica do jogo (com importações de cenas phaser)</p>
<div align = 'center'>
  <img width="70%" alt="image" src="https://github.com/user-attachments/assets/a3d6a5f5-8cad-4108-906c-16fae2e00bf4"/>
</div><br>
<p align = 'center'>Fonte: autoria própria (2025).</p> <br>

## 4.3. Desenvolvimento intermediário do jogo (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da versão intermediária do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.4. Desenvolvimento final do MVP (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e planos futuros.*

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes

## 5.1. Casos de Teste (sprints 2 a 4)

## 5.1. Casos de Teste (sprints 2 a 4)

\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | abrir o jogo no smartphone ou tablet | colocar a ração ou o petisco em cima do alvo no tutorial | o gato deve bater na tela quando o alvo aparecer
2 | tutor clicar no botão de iniciar | induzir o gato a bater na tela | o efeito de "splash" deve acontecer quando o gato clica na tela
3 | aguardar o alvo passar na tela | deixar o gato comer a ração ou o petisco depois de bater no alvo e de ouvir o som emitido| o gato deve associar o bater no alvo com a recompensa da ração ou do petisco

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

*Descreva nesta seção as sessões de teste/entrevista com diferentes jogadores. Registre cada teste conforme o template a seguir.*

Nome | João Jonas (use nomes fictícios)
--- | ---
Já possuía experiência prévia com games? | sim, é um jogador casual
Conseguiu iniciar o jogo? | sim
Entendeu as regras e mecânicas do jogo? | entendeu as regras, mas sobre as mecânicas, apenas as essenciais, não explorou os comandos complexos
Conseguiu progredir no jogo? | sim, sem dificuldades  
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Gostou  de como o jogo vai ficando mais difícil ao longo do tempo sem deixar de ser divertido
O que poderia melhorar no jogo? | A responsividade do personagem aos controles, disse que havia um pouco de atraso desde o momento do comando até a resposta do personagem

### 5.2.2 Melhorias

*Descreva nesta seção um plano de melhorias sobre o jogo, com base nos resultados dos testes de jogabilidade*

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução do jogo atingiu os objetivos descritos na seção 1 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com plano de ações para serem implementadas no jogo. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para futuros desenvolvimentos.*

*Relacione também quaisquer ideias que o grupo tenha para melhorias futuras*

# <a name="c7"></a>7. Referências (sprint 5)
INSTITUTO PET BRASIL. Censo Pet IPB: com alta recorde de 6% em um ano, gatos lideram crescimento de animais de estimação no Brasil. 2022. Disponível em: https://institutopetbrasil.com/fique-por-dentro/amor-pelos-animais-impulsiona-os-negocios-2-2/ Acesso em: 18 fev. 2025. <br>

MAGRETTA, Joan. Entendendo Michael Porter: o guia essencial da competição e estratégia. Rio de Janeiro: Alta Books, 2019. 1 recurso online. ISBN 9788550805047. Disponível em: https://integrada.minhabiblioteca.com.br/books/9788550805047. Acesso em: 28 fev. 2025.

PETZ. Gato tem sentimento? O que e como eles sentem?. [S. l.], 6 ago. 2023. Disponível em: https://www.petz.com.br/blog/pets/gatos/gato-tem-sentimento/. Acesso em: 18 fev. 2025.

SOLLITTO, André. Por que brasileiros têm preferido escolher gatos como companheiros do lar. Veja, 2022.
Disponível em: https://veja.abril.com.br/comportamento/por-que-brasileiros-tem-preferido-escolher-gatos-como-companheiros-do-lar/. Acesso em: 18 fev. 2025.



# <a name="c8"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*

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
&nbsp; &nbsp; &nbsp; &nbsp;Conhecer o contexto da indústria de um cliente é basilar para a realização de um projeto de sucesso, uma vez que tal abordagem possibilita tomadas de decisões estratégicas ao longo de todo o processo de desenvolvimento. Nesse sentido, é significativo pontuar o escopo da Dr.Pet - empresa parceira do jogo referente a esta documentação. Para isso, primeiramente, convém contextualizar o setor de pets.

&nbsp; &nbsp; &nbsp; &nbsp;Diante disso, é válido destacar que as tendências do mercado pet são de crescimento e de ampliação. Nesse sentido, um dos argumentos que sustentam esse fato é uma pesquisa da Comissão de Animais de Companhia (COMAC), feita em 2022, a qual revela que 56% dos domicílios brasileiros têm pelo menos um cão ou gato, ou seja, a abundância de público desse setor é significativamente alta. Paralelamente, é notório que a maior convivência dos donos com seus pets durante a pandemia do covid-19 fez com que os serviços e produtos desse setor ganhassem, diferentemente da maioria das outras áreas, mais visibilidade e importância com a quarentena. Assim, de forma mais específica, é possível especular tendências principalmente no que tange à alimentação, ao entretenimento e ao veterinário, haja vista que os laços entre dono e pet são reforçados no cenário hodierno - conforme supracitado - e esses aspectos tornam-se mais necessários. 

&nbsp; &nbsp; &nbsp; &nbsp;Posto isso, é válido destacar a atuação da Dr.Pet nesse setor. A empresa faz parte do mercado de serviços para pets no Brasil, sendo voltada à educação e ao entretenimento de tutores, cães e gatos, por intermédio de cursos online e livros voltados a essa temática. Ademais, outra vertente adotada por ela é a aparição de seu fundador (Alexandre Rossi) em programas de televisão, de modo a divulgar conteúdos inerentes à empresa e a pets de modo geral, além da utilização das redes sociais para tal efeito. Portanto, a marca atua com veemência no cenário descrito.

#### 1.1.1.1. Modelo de 5 Forças de Porter 

&nbsp; &nbsp; &nbsp; &nbsp;De acordo com o livro de Magretta (2019), que detalha o estudos de Michael Porter, o modelo das 5 Forças de Porter é um framework de análise setorial que permite entender o nível de competitividade de um mercado. O modelo apresenta 5 critérios: Rivalidade entre concorrentes, poder de negociação dos fornecedores, poder de negociação dos compradores, ameaça de novos entrantes e ameaça de produtos substitutos, e avaliamo a força de cada um deles e como eles influenciam a competitividade do setor em análise. O modelo determina que, quanto maior uma força for, maior o poder de ação ela tem sobre um negócio.

<p align = "center">Figura 1: modelo de 5 forças de Porter</p>

![quadro_5_forcas](https://github.com/user-attachments/assets/479e357c-f3ad-4257-864e-4d431e079b6f)
<p align = "center">Fonte: Modelo criado por Michael Eugene Porter (1980). Adaptação feita pelos autores (2025).</p> <br> <br>


#### 1. Rivalidade entre os concorrentes:

&nbsp; &nbsp; &nbsp; &nbsp;Essa força avalia o nível de competição dentro de um setor e seu impacto na lucratividade das empresas. Uma rivalidade intensa ocorre quando há muitos concorrentes de tamanho semelhante, crescimento lento do mercado, produtos pouco diferenciados ou altos custos fixos, levando a disputas agressivas de preços, marketing e inovação (Magretta, 2019). Nesse sentido, faz-se necessário analisar esse aspecto no que tange à marca Dr. Pet:

- A marca Dr. Pet encontra poucos concorrentes diretos no setor de educação pet e entretenimento pela televisão, com apenas alguns exemplos de personalidades que abordam o mesmo assunto. Já no setor de vendas de livros e cursos para adestramento a marca possui concorrência com algumas plataformas como hotmart;

- Existem poucos apresentadores de televisão no setor de educação pet rivalidade traz inovação nos produtos e serviços do setor, consequentemente melhorando o bem estar dos pets.

#### 2. Ameaça de novos entrantes:

&nbsp; &nbsp; &nbsp; &nbsp;Essa força avalia o quanto a entrada de novas empresas pode afetar a competitividade e a lucratividade de um setor. Se houver poucas barreiras de entrada, como baixos custos iniciais, acesso fácil a canais de distribuição e pouca regulamentação, novos concorrentes podem surgir rapidamente, aumentando a competição e pressionando preços e margens de lucro para baixo.

- Principais barreiras: Visibilidade na mídia, persona comunicativa e carismática;
- Impacto potencial: Crescimento no setor de educação pet;

#### 3. Poder de barganha dos fornecedores:

&nbsp; &nbsp; &nbsp; &nbsp;Essa força examina a influência que os fornecedores exercem sobre as empresas do setor (Magretta, 2019). Se houver poucos fornecedores, produtos insubstituíveis ou altos custos de troca, eles podem impor preços elevados, prazos rígidos e condições desfavoráveis, reduzindo a lucratividade das empresas compradoras . Já quando há muitos fornecedores, produtos padronizados e facilidade de substituição, o poder de barganha diminui, permitindo que as empresas negociem melhores condições. Nesse sentido, a dependência de matérias-primas específicas ou tecnologia exclusiva também pode aumentar a força dos fornecedores no mercado.

- Impacto: No caso de rescisão contratual com a emissora, haveria uma redução no alcance do Dr. Pet ao público;
- Alternativas de fornecimento: Outras plataformas para vender cursos, outras emissoras de programas de televisão.

#### 4. Poder de barganha dos clientes:

&nbsp; &nbsp; &nbsp; &nbsp;Essa força avalia a influência dos consumidores sobre as empresas do setor. Quando os clientes têm muitas opções, produtos pouco diferenciados ou baixo custo de troca, eles podem exigir preços mais baixos, melhor qualidade e melhores serviços, reduzindo a lucratividade das empresas. Esse poder aumenta quando compram em grandes volumes ou têm acesso fácil a informações sobre preços e concorrentes. Por outro lado, quando há poucos clientes, produtos exclusivos ou alta dependência da empresa, o poder de barganha dos consumidores diminui, permitindo que a empresa mantenha margens mais elevadas.

&nbsp; &nbsp; &nbsp; &nbsp;O poder de barganha dos clientes é considerado alto, pois há o fácil acesso a conteúdos similares por preços similares ou inferiores.

Exemplos: 
- Amantes de pets;
- Tutores;
- Futuros adestradores de pet.

#### 5. Ameaça de produtos ou serviços substitutos:

&nbsp; &nbsp; &nbsp; &nbsp;Essa força avalia o risco de os consumidores optarem por soluções alternativas que atendam às mesmas necessidades. Essa ameaça é alta quando há substitutos de qualidade, com preços mais baixos ou vantagens superiores, pressionando as empresas a reduzirem preços ou inovarem para manter sua base de clientes. Se os custos de troca forem baixos e os consumidores perceberem benefícios significativos nos substitutos, a competitividade do setor diminui. Por outro lado, quando há poucas alternativas viáveis ou altos custos de mudança, essa ameaça se reduz, favorecendo as empresas estabelecidas.

Exemplos:
- Cães ou outros pets robóticos: Robôs deste tipo dispensam o conteúdo do Dr. Pet porque dispensam adestramento;
- Pesquisa por IA Generativa;
- Vídeos educacionais no Youtube, Instagram e outras plataformas.


### 1.1.2. Análise SWOT 

&nbsp; &nbsp; &nbsp; &nbsp;A Análise SWOT é uma ferramenta estratégica usada para avaliar a posição de uma empresa, projeto ou indivíduo, considerando fatores internos e externos. Ela é dividida em quatro componentes: Forças (Strengths), que são os pontos fortes internos; Fraquezas (Weaknesses), que representam os desafios internos; Oportunidades (Opportunities), que são fatores externos positivos que podem ser aproveitados; e Ameaças (Threats), que são riscos externos que podem impactar negativamente. Essa análise ajuda na tomada de decisões e no desenvolvimento de estratégias mais eficazes.

<p align = "center">Figura 2: Análise SWOT</p>

![analiseSwot](https://github.com/user-attachments/assets/8a0b1694-3b95-4dd7-882e-8d0a9ec40121)
<p align = "center">Fonte: Modelo criado por Albert S. Humphrey (1960). Adaptação feita pelos autores (2025).</p> <br>



## Strengths:

&nbsp; &nbsp; &nbsp; &nbsp;A seção de strenghts destaca os pontos fortes internos de uma organização, projeto ou indivíduo, ou seja, os aspectos que oferecem vantagem competitiva. Isso inclui recursos, habilidades, expertise, reputação, tecnologia, cultura organizacional e diferenciais que impulsionam o sucesso. 

  - Alta visibilidade na mídia;

  - Autoridade no assunto de educação pet;

  - Habilidade de comunicação didática.

## Weaknesses:

&nbsp; &nbsp; &nbsp; &nbsp;A seção de Weaknesses identifica os pontos fracos internos que podem prejudicar o desempenho de uma organização, projeto ou indivíduo. Isso inclui limitações em recursos, falta de expertise, baixa eficiência, problemas estruturais, dependência de terceiros ou falhas operacionais.

  - A marca Dr. Pet está relacionada a apenas uma pessoa, pode se confundir com o seu representante, Alexandre Rossi;

  - Nichado em cães;

  - Forte dependência das redes de televisão.

## Opportunities:

&nbsp; &nbsp; &nbsp; &nbsp;A seção de Opportunities analisa fatores externos positivos que podem ser explorados para crescimento e vantagem competitiva. Isso inclui tendências de mercado, avanços tecnológicos, mudanças regulatórias favoráveis, novas demandas dos consumidores ou parcerias estratégicas.

  - Venda de produtos próprios com a marca Dr. Pet;

  - Maior variedade de pets (Gatos, Passáros).

## Threats:

&nbsp; &nbsp; &nbsp; &nbsp;A seção de Threats identifica os fatores externos que podem representar riscos para a organização, projeto ou indivíduo. Isso inclui concorrência acirrada, crises econômicas, mudanças regulatórias desfavoráveis, inovações disruptivas ou instabilidade política. 

  - Rescisão de contratos com emissoras de televisão;

  - Por uma possível falta de inovação criativa, as pessoas cansarem do mesmo conteúdo;

  - Novos entrantes com maior escopo de animais abordados pela empresa;

  - Indisponibilidade do Alexandre Rossi por qualquer motivo externo.

<hr>

### 1.1.3. Missão / Visão / Valores 

## Missão:

&nbsp; &nbsp; &nbsp; &nbsp;Contribuir para a educação pet em casa através da divulgação de conteúdo informativo nas redes sociais e venda de cursos e mentorias, com recursos que promovem a integração de tutores.

## Visão:

&nbsp; &nbsp; &nbsp; &nbsp;Ser referência no mercado pet focando na educação, oferecendo um serviço personalizado e exclusivo, e construir uma comunidade de tutores que compartilham experiências e aprendizados com seus pets e sobre eles também.

## Valores:

- Respeito aos animais (A marca Dr. Pet educa os tutores, promovendo amor e carinho entre os animais e as pessoas);

- Comunidade (o curso do Alexandre Rossi - Dr. Pet promove a interação entre outros tutores através de grupos em redes sociais, visando a construção de uma comunidade);

- Educação (a divulgação de conteúdo educativo é amplamente praticada pelo Dr. Pet, e o lema da comunidade de tutores é “Nenhuma dúvida fica para trás”, valorizando o aprendizado do cliente).

<hr>

### 1.1.4. Proposta de Valor 
&nbsp; &nbsp; &nbsp; &nbsp;Conforme Pereira (2024), o modelo de negócios denominado “Canvas de Proposta de Valor”, criado por Alexander Osterwalder, Yves Pigneur e Alan Smith, é uma ferramenta que visa garantir que o produto esteja conforme as necessidades do cliente, trazendo a ele ganhos e solucionando suas dores, estruturando como um serviço agregar-lhe-á valor. Para tanto, esse instrumento parte do uso de dois blocos do Business Model Canvas, sendo eles: “Customer Segment” (Segmento de Cliente) e “Value Proposition” (Proposta de Valor). <br> <br>
&nbsp; &nbsp; &nbsp; &nbsp;Nesse sentido, o Canvas Proposta de Valor é divido em dois lados. O lado direito se refere ao perfil que o cliente apresenta, demonstrando as suas tarefas, as suas dores e os seus ganhos. Já o lado esquerdo consiste na  proposta de valor que deve ser entregue ao cliente, a qual abrange produtos e serviços, criadores de ganhos e aliviadores de dor (é o mapa de valor) (Pereira, 2024).<br> <br>
&nbsp; &nbsp; &nbsp; &nbsp;Portanto, é significativo descrever o conceito geral de cada um desses tópicos, trazendo suas relações e como cada um impacta o outro, seja direta ou indiretamente. Logo, os elementos inerentes ao Canvas Proposta de Valor da solução proposta pelo vigente projeto estão abordados nos tópicos subsequentes, a começar pelo perfil do cliente. Além disso, a figura 3 indica tais elementos de modo visual: <br> <br>

<p align = "center">Figura 3: Canva proposta de valor.</p>

![Canva](https://github.com/user-attachments/assets/e8911524-e037-4c68-9acb-9371fa7c52b9)
<p align = "center">Material feito pelos autores (2025) com base modelo de negócios elaborado por Alexander Osterwalder, Yves Pigneur e Alan Smith.</p> <br>

<h3>PERFIL DO CLIENTE</h3>
<h4>Tarefas do Cliente</h4>
&nbsp; &nbsp; &nbsp; &nbsp;Neste tópico, deve-se observar o que o cliente já faz no seu dia a dia antes da proposta de solução, o que auxilia no entendimento de como é possível agir perante a problemática em questão (Pereira, 2024). A partir da definição supracitada e no contexto do jogo RonRonArte, o tutor de gatos efetua as seguintes tarefas: <br>
<ul>
	<li> <b>Investe dinheiro à parte com formas de entreter o gato: </b> a fim de promover diversão ao seu gato, o tutor compra brinquedos a ele, ou seja, são maneiras de entretenimento pagas; </li><br>
	<li><b>Sai de casa para passear e movimentar o gato:</b> para incentivar o gato a se movimentar e se entreter, o tutor precisa sair de casa com ele;</li> <br>
	<li><b>Encontra formas ineficientes em entreter o gato, especialmente em relação a jogos:</b> os jogos disponíveis para gatos apenas exibem alvos na tela, sem proporcionar uma recompensa alimentícia, a qual estimularia o instinto de caça do animal.</li><br>
</ul>

<h4>Ganhos</h4>
&nbsp; &nbsp; &nbsp; &nbsp;No segmento de ganhos, são elencados todos os benefícios esperados pelo cliente, ou seja, suas aspirações em relação ao seu contexto. Sendo assim, tal parte do Canvas Proposta de Valor foca naquilo que o cliente almeja alcançar dentro do escopo em questão. Além disso, essa seção possui uma relação direta com o segmento de criadores de ganhos, uma vez que cada benefício esperado deve ser viabilizado por um elemento correspondente, ou seja, todos os ganhos devem ter criadores de ganhos associados (Pereira, 2024). Com base nisso, foram identificados os seguintes ganhos no contexto da vigente proposta:<br>
<ul>
	<li><b>Design diferencial e atrativo:</b> os tutores desejam uma interface que, de fato, seja atrativa e que tenha um diferencial em relação a dos outros jogos;</li> <br>
	<li><b>Enredo interessante:</b>um storytelling envolvente que atraia os tutores, uma vez que são justamente eles que instalam e, posteriormente, abrem os jogos; </li> <br>
	<li><b>Produto que não necessite de dispositivos de alto processamento:</b> desejo por uma solução que não precise de hardware tão avançado e que não demande muito armazenamento e nem grande complexidade;</li> <br>
	<li><b>Criação de memória afetiva com seu gato:</b> solução que possibilite momentos de proximidade afetiva entre tutor e gato, levando o entretenimento a outro nível;</li> <br> 
	<li><b>Melhorar a relação do tutor com seu gato:</b> desejo por uma solução que gere entretenimento ao gato e ao tutor de maneira conjunta;</li> <br>
	<li><b>Aprimorar a habilidade de caça do gato:</b> solução que possa propiciar o uso de recompensas alimentícias como fator de incentivo ao gato durante ao jogo, de modo que ele associe a caça no jogo com a obtenção de comida.</li> <br>
</ul>

<h4>Dores</h4>
&nbsp; &nbsp; &nbsp; &nbsp;No segmento de dores, há a definição daquilo com que o cliente sofre, em  decorrência da falta de uma solução efetiva ao seu problema. Assim, essa seção mostra as angústias do cliente, que devem ser aliviadas (Pereira, 2024). De modo análogo à relação ganhos-criadores de ganho, as dores possuem aliviadores de dores correspondentes, como em uma função matemática que envolve duas variáveis dependentes entre si. Sob esse prisma, nota-se as seguintes dores sentidas pelo cliente do vigente trabalho:<br>
<ul>
	<li><b>Jogos não interessantes aos gatos:</b> os jogos para gatos já existentes não estimulam adequadamente o gato durante a jogabilidade, sendo monótonos;</li> <br>
	<li><b>Os jogos não consideram o ponto de vista dos tutores:</b> os jogos para gatos já presentes no mercado não levam em conta o ponto de vista dos tutores de modo significativo, ignorando suas necessidades e preferências;</li> <br>
	<li><b>Jogos sem foco na relação tutor-gato:</b> os jogos convencionais para gatos levam em consideração o entretenimento isolado do gato, sem uma participação efetiva do tutor nesse processo;</li> <br>
	<li><b>Necessidade de investimento extra em formas de entreter o felino:</b> os tutores investem em maneiras pagas de entretenimento aos seus gatos. Desse modo, há a busca por alternativas gratuitas.</li> <br>
</ul>


<h3>MAPA DE VALOR</h3>
&nbsp; &nbsp; &nbsp; &nbsp;A partir da identificação do perfil do cliente, é necessário mapear o melhor caminho pelo qual suas necessidades serão atendidas. Desse modo, estão explicitados os criadores de ganho, aliviadores de dor e os produtos e serviços propostos pela solução deste projeto, a fim de atingir o objetivo supracitado. <br>

<h4>Produtos e serviços</h4>
&nbsp; &nbsp; &nbsp; &nbsp;No segmento de produtos e serviços, há a identificação daquilo que deve ser entregue ao cliente, por intermédio de funcionalidades definidas e claras (Pereira, 2024). A partir de tal definição, é concebível mencionar, no escopo do jogo RonRonArte, os produtos e serviços subsequentes:<br>
<ul>
	<li><b>Jogo web focado em dispositivos móveis:</b> tal formato demanda menos processamento e é mais facilmente acessível, tanto por ser web quanto por ser voltado a dispositivos móveis, uma vez que, atualmente, o celular é mais difundido que os computadores (FGV, 2024);</li> <br>
	<li><b>Jogo com sistema para o gato baseado na entrega feita pelo tutor, incentivando a participação de ambos:</b> o jogo incentiva, ao longo da jogabilidade, o tutor a recompensar seu gato com petiscos, o que cria uma dinâmica de interação entre ambos;</li> <br>
	<li><b>Mecânica geral do jogo de toques na tela realizados pelo gato, com objetivo de acertar o alvo e medir a precisão do gato nessa atividade:</b> o jogo propicia uma dinâmica por meio da qual o gato toca na tela, a fim de que ele acerte os alvos que forem aparecendo. Sob esse contexto, há a medição da precisão dos toques do pet na tela, fator este que possibilita a avaliação das habilidades do gato de caçar e de interação dele com o jogo.</li> <br>
</ul> <br>

<h4>Criadores de ganhos</h4>
&nbsp; &nbsp; &nbsp; &nbsp;Os criadores de ganhos identificam o que, de fato, será implementado para gerar satisfação ao cliente, estando diretamente conectados aos ganhos elencados no perfil do cliente (Pereira, 2024). Dessa forma, seguem os criadores de ganhos identificados no contexto do jogo RonRonArte:<br>
<ul>
	<li><b>Design mais desenvolvido e atraente ao gato e ao dono:</b> esse criador de ganho está associado ao ganho “Design diferencial e atrativo”. Isso porque o foco do jogo RonRonArte é propiciar um design agradável aos jogadores e coerente com a história do game, visto que ela se refere à arte;</li> <br>
	<li>História para chamar atenção do tutor: ao contrário de jogos convencionais, este jogo foca em um storytelling atrativo, que envolve a difusão de obras de arte realizadas por artistas não tão conhecidos. Logo, este criador de ganho está associado ao ganho “Enredo interessante”;</li> <br>
	<li><b>Jogo de acesso fácil e sem necessidade de um processamento alto:</b> associado ao ganho “Produto que não necessite de dispositivos de alto processamento”, esse criador de ganho é inerente ao fato de o jogo ser voltado à web e a dispositivos móveis, sem a demanda por hardware avançado. Em decorrência disso, tal aspecto possibilita que o jogo seja acessível em um grande contingente de dispositivos, com menos exigências de processamento e armazenamento.</li> <br>
	<li><b>Mecânica na qual o gato pinta um quadro para que seu dono possa registrar e guardá-lo:</b> ligado ao ganho “Criação de memória afetiva com seu gato”, este criador de ganho se refere à possibilidade de criação de momentos de conexão entre tutor e gato. Isso porque o gato poderá fazer uma obra autoral no jogo, ao passo que o tutor poderá salvá-la. Logo, essa interação cria uma lembrança compartilhada entre ambos, consequência de um momento de entretenimento e diversão;</li> <br>
	<li><b>Sistema de recompensas dadas ao gato pelo seu dono, melhorando a sua relação:</b> associado ao ganho “Melhorar a relação do tutor com seu gato”, esse criador de ganho preconiza o fornecimento de recompensas alimentícias do tutor ao seu gato durante o jogo. Por intermédio disso, há o compartilhamento da jogabilidade entre ambos, o que acarreta uma relação mais próxima entre os dois;</li> <br>
	<li><b>Com recursos de toques na tela, o gato pode acertar o alvo, assim estimulando e treinando sua capacidade de caça:</b> relacionado ao ganho “Aprimorar a habilidade de caça do gato”, tal criador de ganho foca no incentivo dos hábitos de caça do gato, estimulando-o a tocar nos alvos que aparecem na tela como se ele estivesse pegando presas. Assim, isso fortalece a interação do pet com o jogo, bem como seus instintos naturais.</li> <br>
</ul> <br>

<h4>Aliviadores de dor</h4>
&nbsp; &nbsp; &nbsp; &nbsp;Nos aliviadores de dor, ocorre a identificação do que pode suprir as dores anteriormente reconhecidas (Pereira, 2024). Sob essa ótica, a equipe determinou os seguintes aliviadores de dor:<br>
<ul>
	<li><b>Efeitos sonoros e alvos atrativos aos gatos:</b> associado à dor “Jogos não interessantes aos gatos”, esse aliviador de dor busca justamente utilizar sons e alvos atrativos aos gatos para que o jogo não fique monótono, sendo estimulante aos jogadores; </li> <br>
	<li> <b>Jogo agrada aos tutores por via de uma história temática do jogo e formas de interação dele no jogo:</b> associado à dor “Os jogos não consideram o ponto de vista dos tutores”, tal aliviador de dor efetiva sua função analgésica por meio da consolidação de uma história atraente no jogo ao tutor (relacionada à arte), bem como pela possibilidade dele também atuar no game, fornecendo recompensas ao seu gato;</li> <br>
	<li><b>Sistema de recompensas visando agradar o gato por suas vitórias, com auxílio de seu tutor:</b> este aliviador de dor está diretamente relacionado à dor “ Jogos sem foco na relação tutor-gato”. Isso porque ele demanda a interação entre tutor e gato, sendo que o primeiro fornece petiscos ao segundo em decorrência de seu desempenho no jogo;</li> <br>
	<li><b>Jogo hospedado em site, permitindo acesso fácil e gratuito ao tutor:</b> relacionado à dor “Necessidade de investimento extra em formas de entreter o felino”, o aliviador de dor supracitado atua por meio da disponibilização de uma solução gratuita e acessível. Isso faz com que o tutor possa levar seu gato a se entreter sem a necessidade de custos adicionais, o que proporciona uma alternativa prática e econômica.</li> <br>
</ul>

### 1.1.5. Descrição da Solução Desenvolvida 

&nbsp; &nbsp; &nbsp; &nbsp;O problema a ser resolvido está diretamente relacionado à demanda de jogos para gatos. Nesse sentido, o cerne da questão está no fato de que as atuais propostas de tais ferramentas, embora procurem estimular os instintos naturais de caça do gato, contam com uma similaridade forte e pouco diferencial entre si, como o próprio representante da Dr. Pet, chamado Alexandre Rossi, mencionou em encontros presenciais com as equipes de desenvolvimento. Além disso, ele mencionou que não há uma interação direta entre tutor e gato, o que pode acarretar ansiedade no pet, visto que ele sente falta de seu tutor. Ademais, nesses games, não há previsão de recompensas dadas pelo tutor ao gato durante o momento de jogabilidade, ponto que foi ressaltado no TAPI. Portanto, a situação supracitada gera monotonia ao pet e não leva em consideração a interação afetiva entre gato e tutor, uma vez que centra seu foco no ato de jogar por jogar.<br><br>
&nbsp; &nbsp; &nbsp; &nbsp;Sob esse viés, faz-se necessário criar uma proposta que solucione a problemática supracitada. Nessa perspectiva, concebeu-se um jogo que concilia o incentivo aos instintos naturais de caça do gato (por meio de recompensas alimentícias) com a interação gato-tutor dentro desse contexto, de modo a estimular tanto o pet quanto seu tutor, de maneira que nesse momento sejam geradas diversão e proximidade entre ambos. Logo, a ideia é aproximar o gato do tutor e vice-versa, além de fornecer uma melhor experiência de usuário aos dois jogadores, resolvendo a dor que até então foi passada como escopo de para a solução. <br><br>
&nbsp; &nbsp; &nbsp; &nbsp;De modo um pouco mais aprofundado, menciona-se que tal jogo conta com um storytelling focado na arte. As quatro fases do game contam com pinturas de artistas não tão conhecidos, que vão sendo pintadas pelo gato à medida que ele for clicando nos alvos que forem aparecendo na tela. A cada alvo clicado, uma parte da pintura é liberada e aparece uma mensagem ao tutor para ele recompensar o seu gato com um petisco, de modo que o pet associe o toque à comida, reforçando seus hábitos de caça. Ademais, nota-se o maior diferencial do jogo: o modo criativo, por intermédio do qual o gato conseguirá realizar pinturas autorais, com diferentes paletas de cores e alvos variados a serem clicados, itens que serão escolhidos pelo tutor por meio de um ícone de paleta do canto superior direito da tela. Dessa forma, por meio da arte e de recompensas alimentícias, busca-se aprofundar a relação gato-tutor, bem como incentivar instintos naturais dos gatos.<br><br>
&nbsp; &nbsp; &nbsp; &nbsp;Ademais, é significativo pontuar como tal solução deve ser usada. Em linhas gerais, ela deve ser utilizada por gatos e tutores preferencialmente em dispositivos móveis, por meio do navegador. No que se refere à interação entre ambos, menciona-se que ela deve ser efetivada por intermédio da recompensa dada pelo tutor ao gato, além da própria jogabilidade projetada, a qual, necessariamente, preconiza a participação ativa do tutor através da escolha de elementos do jogo para que, de fato, o gato possa jogar. <br><br>
&nbsp; &nbsp; &nbsp; &nbsp;Assim, no que se refere à solução proposta, um de seus benefícios é uma interação mais próxima entre gato e tutor, de modo mais afetivo. Além disso,  menciona-se como outro benefício do jogo o incentivo mais contundente aos hábitos de caça dos gatos, por meio de recompensas alimentícias dadas pelo tutor ao pet. Dessa forma, tais benesses incluem tanto gato e tutor, a fim de que sua relação seja aprofundada. 



### 1.1.6. Matriz de Riscos 

&nbsp; &nbsp; &nbsp; &nbsp;A matriz de risco consiste em uma ferramenta que auxilia na identificação e avaliação de potenciais obstáculos que podem afetar o desenvolvimento e a conclusão de um projeto, assim como as possíveis oportunidades de elevar o escopo do projeto para uma esfera maior. Para isso, por intermédio de uma estrutura coluna x linha que relaciona probabilidade e impacto, a matriz quantifica e classifica os riscos e oportunidades, de modo a torná-los mais visíveis e, portanto, mais tangíveis para elaborar um plano de ação de modo a mitigar as ameaças e aproveitar as circunstâncias favoráveis (Napoleão, 2020). É significativo ressaltar que há justamente essa relação entre impacto e probabilidade porque risco = impacto * probabilidade. Dessa forma, a matriz de risco e oportunidades é útil para garantir que os esforços e os recursos sejam estrategicamente e adequadamente alocados e para maximizar as chances de sucesso do projeto. 

&nbsp; &nbsp; &nbsp; &nbsp;Sob essa ótica, segue listados os riscos - bem como o plano de ação correspondente para mitigá-los - e as oportunidades identificadas pela equipe, ressaltando também como eles se enquadram na matriz e seus impactos relevantes sobre o projeto. A figura 4 mostra esses dados de maneira resumida e visual.

<p align = "center">Figura 4: Matriz de risco</p>

![MatrizdeRisco](https://github.com/user-attachments/assets/6d8b846c-4bbf-4a6c-b44a-f4d68b49b665)
   <p align = 'center'>Tabela de Napoleão (2020), adaptada pelos autores (2025).</p> <br><br> 

### Riscos

1. **Perda de recursos humanos**: Entende-se como perda de recursos humanos a indisponibilidade absoluta no projeto de qualquer membro da equipe, por motivos como saúde ou imprevistos pessoais.
   
   **Impacto:** Muito alto, haja vista que, no ponto de vista da entrega e da execução das funções, a deficiência de membros acarreta na diminuição da produtividade e na sobrecarga de todos os membros ainda presentes. Além disso, é válido mencionar também que a falta de um membro pode diminuir a criatividade do projeto, devido ao fato de existir um indivíduo a menos para contribuir com sua perspectiva de pensamento nas ideias.
   
   **Probabilidade:** 50%, pois não é possível atribuir certeza em relação à acontecimentos catastróficos e imprevistos extremos na vida pessoal de cada membro.
   
   **Plano de ação:** Fazer com que a organização e o planejamento da equipe seja flexível, ou seja, fazer com que tenha sempre uma margem para lidar com imprevistos para que, caso aconteça de um membro se ausentar, a equipe consiga se adaptar. <br><br>

2. **Falta de habilidades técnicas necessárias**: Na equipe CatUp, a falta de habilidades técnicas é um problema válido de analisar, pois todos os membros encontram-se no primeiro módulo da faculdade e todos carragam uma bagagem de conhecimentos de programação similares, de forma que, não raro, para a eficiente implementação de funcionalidades do código do jogo Ronrart, é necessário ceder esforços e tempo para estudar a sua execução.
   
   **Impacto:** Moderado, já que, apesar de renunciar algum tempo do desenvolvimento bruto da tarefa para aprender a habilidade técnica, o risco não impede a entrega do código, apenas demanda mais horas e dedicação para executá-la.
   
   **Probabilidade:** 80%, visto que as habilidades do campo da programação - o qual correspondente à base do funcionando do jogo em si - exigem, sempre, conhecimentos da linguagem e da biblioteca utilizada. 
   
   **Plano de ação:** Adiantar os estudos técnicos que a faculdade fornece, buscar outras fontes de conhecimento (como a internet ou livros) e solicitar auxílio da professora ou do monitor da área de programação para tarefas do código mais complexas que estivermos com dificuldade de executar.<br><br>

3. **Mudança drástica de escopo**: Configura-se como mudança drástica de escopo a ocasião em que o parceiro queira mudar, de maneira drástica, as principais funcionalidades e objetivos do projeto, ou a aprovação de regulamentações não esperadas que coloquem em risco a execução do escopo original do projeto.
   
   **Impacto:** Muito Alto, pois o projeto é guiado pelo seu designio estabelecido com o parceiro e com o stakeholder anteriormente ao início das sprints, de forma que, a alteração brusca desse alcance exigi, com alta prioridade em um curto período de tempo, a remodelagem de quase todos os setores já desenvolvidos, se não também dos próprios artefatos. 
   
   **Probabilidade:** Em torno de 11 a 30%, pois, em relação ao parceiro, ele demonstrou interesse e flexibilidade ao definir o escopo, compreendendo o nível de conhecimento dos membros. Entretanto, ainda pode acontecer dele apresentar insatisfação ou mudar de ideia bruscamente, de forma a querer redefinir grande parte do desenvolvimento.
   Já sobre mudanças de regulamento, alterações que impossibilitem a entrega do projeto são muito improváveis, considerando principalmente que a aprovação e aplicação de mutações legislativas exigem muito tempo para serem efetivadas.
   
   **Plano de ação:** Manter comunicação clara com o parceiro, em especial nas Sprints Reviews.<br><br>

4. **Partes interessadas desenvolvem expectativas imprecisas sobre o jogo**: O parceiro pode criar expectativas irrealistas em relação ao entregável, como desejar implemantações que não cabem na grade curricular da equipe no período das 5 sprints. 
   
   **Impacto:** Moderado, pois a expectativa do parceiro, apesar de atrapalhar a visão dele em relação ao andamento do projeto sem a sua implementação desejada, não impede o desenvolvimento de acontecer. 
   
   **Probabilidade:** Entre 31% e 50%, pois apesar de compreensível, o parceiro demonstrou interesse no desenvolvimento de implementos que não são viáveis no momento acadêmico da equipe.
   
   **Plano de ação:** Explicar e sempre deixar claro ao parceiro exatamente o que é possível desenvolver, assim como não prometer implementos sem a certeza de que será possível implementá-lo, tendo em mente as habilidades técnicas que serão aprendidas neste módulo. Além disso, dar ênfase às expectativas que são possíveis executar. <br><br>

5. **Baixo engajamento dos membros com o projeto**: Pode acontecer de, por excesso de atividades ou compromissos extracurriculares, membros da equipe desviarem sua atenção das suas responsabilidades no projeto. 
   
   **Impacto:** Muito Alto, haja vista que o não comprisso de um ou mais membros diminui a produtividade de toda a equipe, sobrecarrega os membros engajados e potencializa o risco de não cumprir com os prazos. 
   
   **Probabilidade:** 31 a 50%, pois apesar do projeto dever ocupar um nível de prioridade na rotina dos membros, não é raro superestimar o quanto é possível  responsabilizar-se em atividades extracurriculares que podem consumir muito tempo e esforço, de modo que as terefas do projeto ficam desprezadas.
   
   **Plano de ação:** Incentivar os membros que estão menos engajados e mais sobrecarregados com outras atividades a desenvolver uma rotina saudável que respeite suas obrigações dentro do projeto, assim como deixar claro sua importância para o desenvolvimento de toda a equipe. <br><br>

6. **Não conseguir realizar efetivamente os testes**: Por "realizar efetivamente os testes" entende-se testar o jogo com tutores e gatos de variadas idades e rotinas, de modo a cumprir com todos os passos do "casos de teste" definido. A problemática se revela quando esses testes não são possíveis de serem aplicados, por falta de tempo ou por falta de voluntários, por exemplo.
   
   **Impacto:** Alto, pois a não realização dos testes impede a validação de tudo o que foi desenvolvido no jogo, assim como inibe a obtenção de feedbacks de potenciais usuários para identificar possíveis falhas na jogabilidade.
   
   **Probabilidade:** Entre 11 a 30%, pois desde a primeira sprint o parceiro se disponibilizou e se mostrou motivado para realizar os testes, assim como a faculdade também se propôs a auxiliar nesse feito. Entretanto, é possível de acontecer impedimentos como não entregar um protótipo testável à tempo.
   
   **Plano de ação:** Priorizar a produção de um jogo testável dentro do prazo estabelecido e cobrar o parceiro de reazliar seus testes, conforme combinado. <br><br>

7. **Conflitos entre a equipe** : De conflitos entre a equipe considera-se quaisquer desacordos ou desentendimentos, como opiniões divergentes sobre como uma tarefa deve ser implementada ou em casos de tarefas mal executadas ou atrasadas.
   
   **Impacto:** Moderado, pois depende do grau da discordância. Em casos extremos, o desempenho e a convivência da equipe podem ser afetados.
   
   **Probabilidade:** De 51% a 70%, haja vista que o grupo é composto por indivíduos diversos e, por isso, é comum que suas perspectivas sejam divergentes. 
   
   **Plano de ação:** Cada membro deve sempre atualizar o andamento da sua tarefa à equipe e optar pela comunicação não violenta. <br><br>

8. **A equipe não entregar o jogo adaptado para todos os tipos de dispositivos solicitados pelo parceiro** : Em razão da insciência dos membros e da complexidade de promover a adaptabilidade de algumas funcionalidades do jogo em dispositivos diversos, é possível que a equipe não entregue a experiência da jogabilidade em sua completude em todos os dispositivo solicitados, de modo que funcione efetimente somente pelo celular ou somente pelo tablet. 
   
   **Impacto:** Moderado, pois, embora o projeto ainda possa ser atendido completamente em um dispositivo, a problemática desacata uma preferência do parceiro.
   
   **Probabilidade:** 51% a 70%, em função da complexidade de implementar responsividade ao jogo com a linguagem e com a biblioteca utilizada no código. 
   
   **Plano de ação:** Estudar mais como fazer essa adaptabilidade em todas as funcionalidades e explicar ao parceiro a dificuldade dessa tarefa. <br><br>

9. **Atrasos ou ausência de membros na daily** : Dado as responsabilidades dos membros em atividades extras, é possível que haja demora em chegar para os horários da daily ou até mesmo a ausência nela. 
   
   **Impacto:** Baixo, pois apesar da falta de um ou mais membros na daily deixar o membro ausênte desatualizado do kanban, o atraso não interfere com grande impacto no desenvolvimento das tarefas, já que o membro pode ser posteriormente atualizado. 
   
   **Probabilidade:** 31% a 50%, pois não é raro acontecer de um membro se perder em seus horários e atrasar para chegar na daily, especialmente em razão de todos estarem no primeiro módulo, ainda em período de adaptação. 
   
   **Plano de ação:** 5 minutos antes da daily, como forma de mitigar a problemática, é válido o ScrumMaster ou os outros membros mandarem mensagem no grupo de Whatsapp e no Slack solicitando que todos os membros retornem para a sala e, se necessário, marcando também os membros que ainda não estiverem no local. Ademais, comunicar os membros que estiverem atrasando ou se ausentando da daily sobre a importância desse momento para o desenvolvimento do projeto e sugerir formas de ajudar a lembrá-lo de chegar no horário, como colocar um despertador. <br><br>

10. **Falta de materiais úteis fornecidos pelo parceiro** : Pode acontecer do parceiro esquecer de enviar materias úteis para o desenvolvimento de alguma parte do projeto, como arquivos relacionados ao negócio ou informações dos requisitos. 
   
	**Impacto:** Baixo, pois apesar de, em alguns casos, ter o potencial de tornar o desenvolvimento menos preciso, a faculdade já dispõe das informações e dos materiais que são, de fato, imprescindíveis para o projeto. 
   
   	**Probabilidade:** de 11% a 30%, pois embora o parceiro seja uma figura pública com uma agenda cheia, o instrutor e o coordenador do curso estão sempre mantendo contato com ele.
   
   	**Plano de ação:** Comunicar o orientador para que, se necessário, cobre o parceiro de enviar os materiais necessários. <br><br>

11. **Projeto não finalizado após 10 semanas:** : Existe a possibilidade de, por consequência da não intervenção para mitigar os possíveis riscos, por motivos de atrasos, ou imprevistos na equipe, o projeto não ser finalizado em sua completude até a quinta sprint.
    
   	**Impacto:** Muito Alto, pois a entrega do projeto é a prioridade do módulo. 
   
   	**Probabilidade:** 1% a 10%, pois mesmo que não seja possível entregar o projeto de modo a atingir todas as expectativas, ao menos o MVP é mais provável de ser entregue.
   
   	**Plano de ação:** Organizar as atividades derivadas das User Stories nas sprints, de forma que seja possível entregá-las com, ao menos uma pequena margem de antecedência. <br> <br>

### Oportunidades

1. **Contratação para prestação de serviços para a Dr. Pet** : 

   **Impacto:** Muito Alto, uma vez que isso traria escalabilidade a este projeto, mas também a outros eventuais projetos desenvolvidos pela equipe CatUp.
   
   **Probabilidade:** 50%, já que o próprio parceiro comentou sobre essa possibilidade em uma das reviews. <br><br>

2. **Criação de uma startup** : 
   
   **Impacto:** Muito Alto, haja vista que seria possível aprofundar o atual projeto, atualizando-o  e gerando notoriedade pública a ele.
   
   **Probabilidade:** 10%, já que, no momento, a equipe considera tal empreendimento complexo para o atual momento, uma vez que este é o primeiro módulo. <br><br>

3. **Parcerias com empresas do ramo pet (publicidade)** : 
   
   **Impacto:** Muito Alto, visto que tal aspecto aumentaria a visibilidade do projeto e lhe traria uma associação de peso com marcas já reconhecidas no ramo pet.
   
   **Probabilidade:** 10%, haja vista que a equipe não atingiu visibilidade pública de modo a gerar consolidação de parcerias com empresas do ramo pet. <br><br>

### 1.1.7. Objetivos, Metas e Indicadores 

&nbsp; &nbsp; &nbsp; &nbsp;Os objetivos, as metas e os indicadores de medição foram criados com base na metodologia de metas SMART, a qual define que as metas devem ser Específicas, Mensuráveis, Atribuíveis, Realistas e Temporais (Rocha, 2025). 

&nbsp; &nbsp; &nbsp; &nbsp;As metas serem Específicas dizem respeito ao o que será alcançado e quais os passos para que a concretização ocorra; em relação a Mensuráveis, elas abrangem os indicadores para medir a efetivação e o progresso; já Atribuíveis se referem aos responsáveis para a execução da meta; Realista está associado à possibilidade real de a meta ser concreta, ou seja, ser executável; por fim, Temporal se trata da definição de um prazo para atingir a meta (Rocha, 2025).

&nbsp; &nbsp; &nbsp; &nbsp;Antes de estruturarmos as metas seguindo o modelo SMART, construímo-las no modelo de OKRs (Objectives and Key Results), o qual corresponde a um método simples para criar alinhamento e engajamento em torno de metas mensuráveis. O intuito é definir uma meta qualitativa detalhada (Objectives) e algumas métricas quantitativas (Key Results) (Gothelf, 2020).

&nbsp; &nbsp; &nbsp; &nbsp;Nesse sentido, fizemos nossos OKRs (com auxílio da instrutora de liderança), os quais estão apresentados na figura 5 e descritos no texto que vem em seguida.

<p align = "center">Figura 5: OKRs</p>

![image](https://github.com/user-attachments/assets/e55c9777-5929-4b70-a3fc-d7b1fe223c86)

<p align = "center">Fonte: material produzido pelos autores (2025), com auxílio da instrutora de liderança Ana Cristina dos Santos.</p> <br> <br>

Objetivo 1: Entregar o melhor MVP possível com a proposta de melhorar a relação entre tutor e gato de maneira inovadora, através da arte.

Key Results:
- Aumentar a frequência das reviews em grupo das tasks de 0 para 1 vez por semana;
- Cada membro completar ao menos uma task P por dia ou 1 task M a cada dois dias ou uma task G a cada 3 dias;
- Aumentar a nota de todos os artefatos para, no mínimo, 9,0. <br><br>

Objetivo 2: Ter comunicação clara e eficiente entre os membros da equipe, de modo que todos permaneçam engajados.

Key Results:
- Ter, no máximo, duas faltas na daily por sprint;
- Utilizar mais os canais de comunicação como Slack e Whatsapp para comunicar 100% das tasks feitas fora do horário de desenvolvimento do projeto e de reviews feitas individualmente;
- Ter, no máximo, duas faltas no fechamento por sprint. <br><br><br>


Além disso, seguem os objetivos estruturados no molde SMART: 

Objetivos:

1)Nosso objetivo é fazer a comunicação entre os membros do grupo ser mais clara até o final da sprint review da quarta sprint no dia 28 de março. Todos os membros do grupo vão alcançá-lo dando mais atenção aos canais de comunicação e ao momento da daily.

S. **Específico:** Ter comunicação clara e eficiente entre os membros da equipe, de modo que todos permaneçam engajados.

M. **Mensurável:** A análise das dailies servirá de indicador para a medição do sucesso ou falha da meta, haja vista que, por intermédio dessa vistoria, é possível visualizar o que cada membro da equipe fez e está fazendo, sendo, portanto, útil para identificar baixos e altos engajamentos.

A. **Atribuível:** A responsabilidade desse objetivo contempla todos os membros da equipe.

R. **Relevante:** A equipe possui acesso a canais de comunicação eficientes como o Slack e o grupo de Whatsapp e momentos cedidos pela universidade para a eficiente organização e comunicação da equipe.

T. **Oportuno:** Melhorar o prazo definido para melhorar a comunicação será a sprint review da sprint 4.  <br> <br> <br>


2)Nosso objetivo é entregar o melhor MVP possível ao parceiro até a sprint review da sprint 4 no dia 28 de março. Os membros da equipe vão alcançá-lo aumentando a frequência das reviews em grupo e priorizando a realização das suas tasks.

S. **Específico:** Entregar o melhor MVP possível com a proposta de melhorar a relação entre tutor e gato de maneira inovadora, através da arte.

M. **Mensurável:** ter os artefatos com nota, no mínimo,  9, uma vez que essa nota atua como ferramenta para mensurar o progresso do MVP e, além disso, há o Kanban, que serve para monitorar o ritmo das conclusões das tasks.

A. **Atribuível:** A responsabilidade desse objetivo contempla todos os membros da equipe.

R. **Relevante:** A equipe possui recursos como aulas e professores das áreas de programação, matemática, física, UX, liderança e negócios, assim como o auxílio de um orientador na execução do projeto, o que viabiliza o objetivo.

T. **Oportuno:** A entrega do melhor MVP possível terá como prazo a sprint review da sprint 4.

## 1.2. Requisitos do Projeto 
Logo abaixo, estão listados os requisitos do projeto do jogo "RonRonArte", por meios dos quais se busca explicitar, de maneira breve, lógica e sucinta, suas principais funcionalidades e aspectos, de acordo com o escopo vigente.  

<p align = 'center'>Quadro 1: Requisitos do jogo RonRonArte</p> <br>

\# | Requisitos  
--- | ---
1 | O jogo será reproduzido em formato web direcionado para dispositivos móveis (smartphones e tablets).
2 | O jogo deve ter uma cena de tutorial, onde o tutor receberá instruções sobre como funcionam as mecânicas do jogo, e sobre como estimular e recompensar o gato.
3 | O jogo deve ter uma cena de menu de seleção de fases e modos, onde será possível acessar as fases que foram desbloqueadas, o modo tutorial, e o modo criativo.
4 | A tela inicial deve mostrar um botão “Jogar”, que, quando clicado, direciona o jogador ao menu de seleção de fases e modos de jogo.
5 | Nas fases, o jogador (gato) deve clicar nos animais que aparecerem na tela para eliminá-los.
6 | Os alvos devem reproduzir sons para manter a atenção do gato no jogo.
7 | As cores que o gato enxerga com mais facilidade serão usadas nos animais que ele precisa bater e as cores que são mais dificultosas de ver serão usadas no background. Dessa forma, a emissão de mais estímulo visual junto com a movimentação do alvo pela tela, potencializa o interesse do gato em abater os alvos.
8 | O gato percebe que eliminou o alvo por meio de um aviso sonoro e o efeito de splash na tela.
9 | Após eliminar o alvo, é exibida uma região na tela (pata) onde o tutor deverá posicionar o petisco para recompensar o gato.
10 | No modo criativo, ao clicar na tela, o jogador (gato) consegue pintá-la.
11 | No modo criativo, o tutor possui o modo print, que pode ser iniciado com um botão, para registrar a obra do gato.
12 | No modo de fases, ao clicar na tela, o jogador (gato) vai revelando uma pintura de um artista de um continente diferente.
13 | Devem ser disponibilizados botões de hud (botões de retornar ao menu, seleção de paletas e pincéis e tirar print) na tela, ativados apenas quando clicados e pressionados em seguida (para que o gato não os ative sem querer).
14 | Exibir som ao acertar o alvo para notificar o tutor e facilitar o entendimento do gato em relação à recompensa.


<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br>

## 1.3. Público-alvo do Projeto 

&nbsp; &nbsp; &nbsp; &nbsp;Em linhas gerais, o público-alvo do jogo RonRonArte se concentra em gatos domésticos e seus respectivos tutores. Nesse sentido, é válido destacar que, de acordo com o Censo Pet IPB (2022), o número de gatos vem crescendo ao longo dos últimos anos nos lares brasileiros, saltando de uma população de 25,6 milhões em 2020 para 27,1 milhões de indivíduos em 2021, com uma estimativa de 2,5% de crescimento médio anual. A título de comparação, essa pesquisa também mostrou que o percentual da quantidade de cães, maior contingente de pets do Brasil, foi inferior no mesmo período: 4%. Ademais, nota-se que as adoções dos felinos representam 65% do total, o que demonstra o crescimento de tutores desses animais. Portanto, é possível observar o aumento da preferência das pessoas pela adoção de gatos no país.
  
&nbsp; &nbsp; &nbsp; &nbsp;Além disso, os gatos domésticos, na ausência de seus tutores, passam por momentos de instabilidade emocional. Segundo um estudo publicado na Universidade do Estado de Oregon, 64,3% desses pets sentem muita falta de seus donos quando estes não estão por perto (PETZ, 2023). Tal dado evidencia a necessidade de promover uma interação mais profunda e divertida entre ambos os grupos, uma vez que ambos se apegam um ao outro. Dessa forma, um jogo com o escopo supracitado surge como alternativa à situação mencionada.


# <a name="c2"></a>2. Visão Geral do Jogo 

## 2.1. Objetivos do Jogo

&nbsp; &nbsp; &nbsp; &nbsp;O objetivo do jogo é fortalecer o laço entre tutor e gato, enquanto ensina uma nova forma de se divertir com o seu pet. O objetivo do gato é eliminar todos os animais da tela num determinado período de tempo. Já o objetivo do tutor é o de aprender e exercer a mecânica de recompensar seu pet ao alcançar seu determinado objetivo delimitado entre as fases. Ademais, nosso jogo contemplará um modo de jogo alternativo em que o gato poderá "pintar" uma tela em branco, produzindo sua própria obra de arte.

## 2.2. Características do Jogo

### 2.2.1. Gênero do Jogo

&nbsp; &nbsp; &nbsp; &nbsp;O jogo se encaixa principalmente no gênero Arcade, pois é um jogo rápido e simples, com a mecânica principal sendo a de tocar na tela para "capturar" algo.

### 2.2.2. Plataforma do Jogo

&nbsp; &nbsp; &nbsp; &nbsp;O jogo será desenvolvido para _smartphones e tablets_, com reprodução através da web, sem a necessidade de instalação de aplicativos externos.

&nbsp; &nbsp; &nbsp; &nbsp;Navegadores compatíveis: Google Chrome, Microsoft Edge, Mozilla Firefox.

### 2.2.3. Número de jogadores

&nbsp; &nbsp; &nbsp; &nbsp;O jogo foi desenvolvido para ser uma experiência interativa entre o gato e seu tutor (2 jogadores), sendo majoritaria a participação do gato ao "caçar" os animais que aparecem nas fases, e a do tutor em recompensar o gato e acompanhar a história da arte conforme avança pelos níveis. 

### 2.2.4. Títulos semelhantes e inspirações

&nbsp; &nbsp; &nbsp; &nbsp;Nosso jogo teve como inspiração outros títulos de jogos para gato, como:

&nbsp; &nbsp; &nbsp; &nbsp;Paint for Cats: Jogo cuja principal mecânica é ser um "jogo de pintar" para gatos, em que um rato colorido atravessa a tela com o intuito do gato bater na tela tentando o acertar. Ao acertá-lo, deixa um "splash" de tinta em formato de pata na tela.

&nbsp; &nbsp; &nbsp; &nbsp;Games for Cats: Jogo em que o gato deve acertar um animal correndo pela tela. Contempla diferentes tipos de animais com diferentes características e níveis de dificuldade.

&nbsp; &nbsp; &nbsp; &nbsp;Nosso jogo visa mesclar mecânicas presentes nesses outros jogos com uma identidade visual própria, buscando uma experiência interativa e divertida para gato e tutor.

### 2.2.5. Tempo estimado de jogo (sprint 5)

Visto que cada gato tem uma agilidade de aprendizagem individual, o modo de tutorial não tem limite de tempo, de modo que o tutor tenha autonomia e flexibilidade para ensinar a dinâmica ao pet no seu tempo. De maneira similar, para que o Ronronarte tenha rejogabilidade, o modo criativo também é infinito, e o tutor pode tirar o print da tela no momento em que preferir. Já o tempo de conclusão das fases varia de acordo com a performance do gato, porém a equipe estima ser possível concluí-las em 10 minutos.

# <a name="c3"></a>3. Game Design

## 3.1. Enredo do Jogo

&nbsp; &nbsp; &nbsp; &nbsp;Nós seres humanos, em algum momento de nossas vidas, pensamos no conceito de viagem no tempo. Um conceito interessante, desconhecido, e um tanto assutador. Entretanto, já imaginou se fosse possível viajar no tempo com o seu pet?
&nbsp; &nbsp; &nbsp; &nbsp;Pois é esse o enredo de RonRonArte, uma viagem no tempo com o seu gato! Mas não é uma viagem no tempo qualquer, é uma viagem pelos diferentes períodos da arte, passando por arte contemporânea, arte moderna, arte medieval, e arte rupestre.
&nbsp; &nbsp; &nbsp; &nbsp;Acompanhe seu pet nessa jornada e aprenda um pouco mais sobre a história da arte enquanto se diverte com seu amigo felino!

## 3.2. Personagens

### 3.2.1. Controláveis
&nbsp; &nbsp; &nbsp; &nbsp;No que tange ao jogo RonRonArte, não há personagens controláveis pelo jogador, haja vista que o intuito do jogo é justamente incentivar hábitos de caça ao gato por intermédio de figuras clicáveis na tela (no caso, spritesheets). Desse modo, o objetivo não é que o jogador controle algum personagem no game, mas sim que ele possa eliminá-lo no decorrer do jogo em troca de recompensas alimentícias, a fim de que seus instintos naturais sejam estimulados. Portanto, especificamente no escopo de RonRonArte, o player pode interpretar tal circunstância como um meio pelo qual ele realiza uma ação e, em troca, ganha algo, associando o atingimento de objetivos com as recompensas supracitadas. A partir disso, abaixo estão as spritesheets correspondentes ao que acima foi observado.

## 3.2.2 Non-Playable Characters (NPC)
Non-Playable Characters ou, como são mais conhecidos, os NPCs, são personagens que não são controláveis pelo jogador ou qualquer outro participante, mas sim pela própria máquina que executa o jogo. Abaixo temos os NPCs do jogo RonRonArte:

<p align = 'center'>Figura 6 - Figura do pombo (RonRonArte)</p><br>
<div align = 'center'>
	
  ![pigeon](https://github.com/user-attachments/assets/218bb91d-3467-4cf6-bf3d-c2de778c5d50)

</div><br>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br> <br>



<p align = 'center'>Figura 7 - Figura do rato mecânico (RonRonArte)</p><br>
<div align = 'center'>
	<img src = "https://github.com/Inteli-College/2025-1A-T15-IN01-G03/blob/main/assets/rat-spritesheet.png">
</div><br>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>



<p align = 'center'>Figura 8 - Figura da lagartixa (RonRonArte)</p><br>
<div align = 'center'>
	<img src = "https://github.com/Inteli-College/2025-1A-T15-IN01-G03/blob/main/assets/lagartixa-Sheet.png">
</div><br>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p><br><br>



<p align = 'center'>Figura 8 - Figura da cobra-coral (RonRonArte)</p><br>
<div align = 'center'>
	
 ![snake](https://github.com/user-attachments/assets/5b9326b7-3d57-4fc2-aad8-c67f222f900c)

 </div><br>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p><br><br>


### 3.2.3. Diversidade e Representatividade dos Personagens
&nbsp; &nbsp; &nbsp; &nbsp;O RonRonArte contém inclusão em sua jogabilidade, uma vez que o jogador, em algumas fases, é convidado a conhecer mais sobre uma obra cujo autor pertence a um grupo sub-representado no universo artístico. 

## 3.3. Mundo do jogo

### 3.3.1. Locações Principais e/ou Mapas

&nbsp; &nbsp; &nbsp; &nbsp;O jogo vem de uma viagem mágica no mundo da arte, coletando quadros de pintores que não receberam o devido reconhecimento de diversas nacionalidades que o jogador, o gato, visitará. Essa aventura será possível por meio de um portal, fantasioso, que servirá para o jogador poder acessar as fases. Os momentos históricos serão representados por animais que são presentes no cotidiano do período apresentado e pintores e artes pertencentes a cada respectiva época, por exemplo, o quadro da Maria Auxiliadora (quadro presente até o momento). O jogo não segue uma história linear, entretanto, o fluxo de fases segue, sendo um level liberado após o outro.

### 3.3.2. Navegação pelo mundo
&nbsp; &nbsp; &nbsp; &nbsp;O jogador, sendo um gato, atravessará as fases atreves de um portal que o levará para épocas distintas e importantes para o conhecimento artístico da pintura. Com o passar das fases, elas se tornam selecionáveis a preferir do dono do gato, em que depois que o botão de “jogar”, poderá selecionar somente clicando com o dedo no botão referente a fase que for preferível a ser jogada.

### 3.3.4. Concept Art
&nbsp; &nbsp; &nbsp; &nbsp;Uma Concept Art é um fluxo de imagens que mostra as características e os elementos gerais de um jogo, animação ou filme, com cenários e personagens, por exemplo. Com base nisso, realizou-se uma Concept Art de RonRonArte, de maneira a explicitar quais são os seus principais itens visuais e de história.

<p align = "center">Figura 9: Concept Art - RonRonArte</p>

![Untitled (1)](https://github.com/user-attachments/assets/7c89a7f7-7194-4e4f-9d52-2042f123cf9f)


<p align = 'center'>Fonte: material produzido pelos autores (2025).</p>

&nbsp; &nbsp; &nbsp; &nbsp;Caso queira acessar a Concept Art com as animações, [clique aqui](https://www.figma.com/proto/O28uXtCzHpYgGD5H7lxE97/Concept-Art---RonRonArte?content-scaling=fixed&kind=proto&node-id=15-4&page-id=0%3A1&scaling=scale-down) <br>

### 3.3.5. Trilha sonora
A seguir, no quadro 2, estão elencados os elementos sonoros utilizados no jogo RonRonArte, escolhidos de acordo com a necessidade dos itens do game.

<p align = 'center'>Quadro 2: trilha sonora</p>

\# | titulo | ocorrência | autoria | Áudio
--- | --- | --- | --- | ---
1 | Som no botão "Jogar" | Quando o botão "Jogar" for clicado | Pixabay | <a href = "https://drive.google.com/file/d/1hQFC5pVdqw617H8M5wLIWrMQGPIt92sz/view?usp=sharing"> Ouça o áudio clicando aqui!</a>
2 | Som nos botões "Pular tutorial" e "Continuar" | Quando os botões "Pular tutorial" e "Continuar" forem clicados | Pixabay | <a href = "https://drive.google.com/file/d/1CmhzvZDHqNDnyOqGY8DNLVBAR0uWa_cO/view?usp=sharing">Ouça o áudio clicando aqui!</a>
3 | Som do splash de tinta | Quando o alvo é clicado no modo criativo | Pixabay | <a href = "https://drive.google.com/file/d/1gPphHf9Bf2M0zXkBwolhKrlN3duKKy8_/view?usp=sharing">Ouça o áudio clicando aqui!</a>
4 | Som para mostrar as estrelas na tela de vitória | Ocorre no momento em que as estrelas aparecem na tela de vitória | Pixabay | <a href = "https://drive.google.com/file/d/1NM3CxClvEKvMXpHizAcq2G0tPYu9GMcY/view?usp=sharing">Ouça o áudio clicando aqui!</a>
5 | Som habilitado quando os alvos do jogo são clicados | Assim que os alvos são clicados pelo gato | canal do YouTube chamado SOUNDS. Título do vídeo: EFEITO SONORO - GATO MIANDO | <a href = "https://drive.google.com/file/d/17g-krBlk81rTzi-duVFOyEfhnxH6XU7U/view?usp=sharing">Ouça o áudio clicando aqui!</a>
6 | Som para o botão de pause | Quando o botão de pause for clicado | Pixabay | <a href = "https://drive.google.com/file/d/1a9IE5oRrw8p2ieAZE3skzfCzye1Pfz_o/view?usp=sharing">Ouça o áudio clicando aqui!</a>
7 | Som do pombo (alvo) | Quando o pombo estiver na tela | Pixabay | <a href = "https://drive.google.com/file/d/1zc9hjtwP67aTXE6p84U2f_sS9yQG1Fe5/view?usp=sharing">Ouça o áudio clicando aqui!</a>
8 | Som do rato robô (alvo) | Quando o rato estiver na tela | Pixabay | <a href = "https://drive.google.com/file/d/1uTRUH26MD3fgOZTo6HSk6UJkQJMfEGqm/view?usp=sharing">Ouça o áudio clicando aqui!</a>
9 | Som da cobra | Quando a cobra estiver na tela | Pixabay | <a href = "https://drive.google.com/file/d/1Kei3Ft5Esq5iGarGQCAaaRvGc-NcH3Jb/view?usp=sharing">Ouça o áudio clicando aqui!</a>
10 | Som da lagartixa (alvo) | Quando a lagartixa estiver na tela | Pixabay | <a href = "https://drive.google.com/file/d/1voUqdXlqM8OblkZLPvJhVY2d1bxRQalx/view?usp=sharing">Ouça o áudio clicando aqui!</a>

<p align = 'center'>Fonte: quadro produzido pelos autores (2025), com base em áudios de Pixabay e YouTube.</p> <br>

## 3.4. Inventário e Bestiário

### 3.4.1. Inventário 

<p align = 'center'>Quadro 3: inventário do jogo RonRonArte</p> <br>

\# | item |  | Como obter | Função | Efeito sonoro
--- | --- | --- | --- | --- | ---
1 | PawYellow |![splash_amarelo](https://github.com/user-attachments/assets/9e3c67ee-3614-4116-996f-c95e65b93ed0)| Conclusão do tutorial | Pintar o quadro onde o gato acerta o alvo no modo criativo | Som de splash de tinta
2 | PawRed |![vermelhoclaro](https://github.com/user-attachments/assets/f4e62404-2d30-496c-be8a-44a80d24abe7)| Conclusão do tutorial | Pintar o quadro onde o gato acerta o alvo no modo criativov | Som de splash de tinta
3 | PawOrange |![laranja](https://github.com/user-attachments/assets/4f2e7185-eb8e-4ef1-8a80-59a62a98a1bd)| Conclusão do tutorial | Pintar o quadro onde o gato acerta o alvo no modo criativo | Som de splash de tinta
4 | PawBlue |![splash_azul](https://github.com/user-attachments/assets/eb6d8494-0c7f-40fb-9ec3-1a9592e07664)| Conclusão da fase 1 | Pintar o quadro onde o gato acerta o alvo no modo criativo | Som de splash de tinta
5 | PawPurple |![splash_roxo](https://github.com/user-attachments/assets/84cb3d4f-5870-4ea4-887f-74007bca7b6f)| Conclusão da fase 1 | Pintar o quadro onde o gato acerta o alvo no modo criativo | Som de splash de tinta
5 | PawPink |![splash_rosa](https://github.com/user-attachments/assets/e8ff66bc-87a5-43b6-945d-e33d824fd6e5)| Conclusão da fase 1 | Pintar o quadro onde o gato acerta o alvo no modo criativo | Som de splash de tinta

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br>

### 3.4.2. Bestiário

<p align = 'center'>Quadro 4: bestiário do jogo RonRonArte</p> <br>

\# | Inimigo | Design | Ocorrências | Função | Impacto | Efeito sonoro
--- | --- | --- | --- | --- | --- | ---
1 | Pombo |![pombo](https://github.com/user-attachments/assets/a5622248-210c-4bab-b020-a67c1c3a113e)| Tutorial e Fase 1 | Voa em direção aléatoria para que o jogador tente acertá-lo | Ao atingido revela uma parte do quadro, caso esteja no modo história. No modo criativo, pinta uma tela em branco com os splashes. | <a href = "https://drive.google.com/file/d/1zc9hjtwP67aTXE6p84U2f_sS9yQG1Fe5/view?usp=sharing">Som do pombo</a>
2 | Rato Robótico |![alvo rato](https://github.com/user-attachments/assets/905b4948-8cce-4f84-946a-0f0f9d8e252c)| Fase 2 | Anda pela tela em direção aléatoria para que o jogador tente acertá-lo | Ao atingido revela uma parte do quadro, caso esteja no modo história. No modo criativo, pinta uma tela em branco com os splashes. | <a href = "https://drive.google.com/file/d/1uTRUH26MD3fgOZTo6HSk6UJkQJMfEGqm/view?usp=sharing">Som da engrenagem</a>
3 | Cobra-Coral | ![Snake (2)](https://github.com/user-attachments/assets/98cce8ef-3ddf-4d25-863a-bb38aea14def) | Fase 3 | Anda pela tela em direção aleatória para que o jogador tente acertá-lo | Ao atingido revela uma parte do quadro, caso esteja no modo história. No modo criativo, pinta uma tela em branco com os splashes. |  <a href = "https://drive.google.com/file/d/1Kei3Ft5Esq5iGarGQCAaaRvGc-NcH3Jb/view?usp=sharing">Som da cobra</a>
4 | Lagartixa | ![lagartixa](https://github.com/user-attachments/assets/38d50908-28bb-48b6-b896-9516b90484cf) | Fase 4 | Anda pela tela em direção aleatória para que o jogador tente acertá-lo | Ao acertá-lo, deixará seu rabo cair e continuará correndo sem o rabo e mais rápido, fazendo com que seja necessário ser atingido novamente. Após ser atingido pela segunda vez, revelará uma parte do quadro, caso esteja no modo história. No modo criativo, pinta uma tela em branco com os splashes | <a href = "https://drive.google.com/file/d/1voUqdXlqM8OblkZLPvJhVY2d1bxRQalx/view?usp=sharing">Som da lagartixa</a>


## 3.5. Gameflow (Diagrama de cenas)
<p align ="center">Figura 10: diagrama de cenas - RonRonArte</p>


![Diagrama de Cenas (4)](https://github.com/user-attachments/assets/bc3cf626-7a2b-4ea4-ae68-f9e452fce3ca)

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br>


Caso queira ver o diagrama de cenas no Figma, [clique aqui](https://www.figma.com/design/rFIpwHZ5IhQm0VkuvWoyGC/Diagrama-de-Cenas-(Copy)?node-id=0-1&t=VGODGl0yG330cyX7-1)

#### Diagrama de cenas:

&nbsp; &nbsp; &nbsp; &nbsp;O diagrama de cenas é uma representação visual do caminhar do jogo ao longo de suas telas e cenas. Essa ferramenta apresenta como o design será feito, como as classes, objetos, atributos e métodos são realizados, facilitando a compreensão das funcionalidades.

<hr>

- **Tela inicial (Splash Screen):**
A primeira cena do jogo conta com uma splash screen (cena exibida ao abrir o jogo) que apresenta o nome de nossa equipe em um fundo preto.

- Classes: SplashScreen;
- Atributos e métodos: preload() e create();

<hr>

- **Tela de start:** 
A tela de start conta com uma imagem de fundo gerada por IA que apresenta elementos do storytelling do jogo como um portal, pinturas emolduradas e um gato. Além disso, há também um botão de "JOGAR", que ao ser pressionado redireciona para a tela de primeira fase do jogo.

- Classes: Menu;
- Atributos e métodos: create() e resizeGame();

<hr>

- **Tutorial:**   
A primeira fase do jogo serve como tutorial para o tutor, apresentando como deverá ser feita a recompensa para o gato ao alcançar o objetivo do jogo. Nessa tela, haverá uma maneira de pular a cena de tutorial caso o tutor já saiba ou não queira ver o tutorial.

- Classes: Phase0 e extensão de BasePhase;
- Atributos e métodos: create(), update()

<hr>

- **Tela de seleção de níveis:**
Após passar pelo tutorial, o jogador será direcionado para uma tela de seleção de níveis, onde poderá (caso já estiver desbloqueado) escolher a "fase" que gostaria de jogar.

 - Classes: SelectPhase;
 - Atributos e métodos: create() e update().

<hr>

- **Fase 1:**   
A primeira fase apresenta ao jogador a dinâmica principal do jogo, em que o gato, ao tocar em um animal "alvo" na tela (nessa fase em específico, será um pombo), preenche aos poucos o quadro de fundo, que revela uma obra de arte(nessa fase em específico, "Sem Título"(também conhecido como "A Noiva" de Maria Auxiliadora). Após preenchimento desse quadro, é exibido uma tela de vitória que apresenta a obra completa, uma foto de seu compositor, e a pontuação do gato e tempo de conclusão da fase.	

- Classes: Phase1 e extensão de BasePhase;
- Atributos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target); createTimer(); updateTimer(); clickTargetComplete(); displayVictory(); createPauseButton(); createBackground(); createBackgroundComplete(); 

<hr>

- **Fase 2:**
A segunda fase apresenta ao jogador a dinâmica principal do jogo, em que o gato, ao tocar em um animal "alvo" na tela (nessa fase em específico, será um rato mecânico), preenche aos poucos o quadro de fundo, que revela uma obra de arte(nessa fase em específico, "Spoliarium" de Juan Luna). Após preenchimento desse quadro, é exibido uma tela de vitória que apresenta a obra completa, uma foto de seu compositor, e a pontuação do gato e tempo de conclusão da fase.

- Classes: Phase2 e extensão de BasePhase;
- Atributos e métodos: width (largura do jogo), height (altura do jogo), backgroundKey (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target); createTimer(); updateTimer(); clickTargetComplete(); displayVictory(); createPauseButton(); createBackground(); createBackgroundComplete(); 

<hr>

- **Fase 3:** 
A terceira fase apresentará ao jogador um cenário semelhante ao da fase 1 e 2, porém com foco em uma arte diferente (nessa fase em específico, "J'aime la couleur" de Chéri Samba). Nessa fase, o alvo será uma cobra.

- Classes: Phase3 e extensão de BasePhase;
- Atributos e métodos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target); createTimer(); updateTimer(); clickTargetComplete(); displayVictory(); createPauseButton(); createBackground(); createBackgroundComplete(); 

<hr>

- **Fase 4:**
A terceira fase apresentará ao jogador um cenário semelhante ao da fase 1, 2 e 3, porém com foco em uma arte diferente (nessa fase em específico, "Aboriginal design, with Sturt's Pea" de Margaret Preston.). Nessa fase, o alvo será uma lagartixa.

- Classes: Phase4 e extensão de BasePhase;
- Atributos e métodos: width (largura do jogo), height (altura do jogo), bg (background), score (pontuação atual), maxScore (pontuação máxima da fase), scoreboard (placar), parado (boolean para referenciar se o alvo deve se movimentar), posX (posição incial do alvo no eixo X), posY (posição incial do alvo no eixo Y), splash (imagem do splash que é adicionado na tela), target (alvo do jogo), target.velocidadeX, target.velocidadeY, target.direcaoX, target.direcaoY, target.hitboxWidth, target.hitboxHeight;
- Métodos: create, update; spawnTarget; clickTarget; movement(target); createTimer(); updateTimer(); clickTargetComplete(); displayVictory(); createPauseButton(); createBackground(); createBackgroundComplete(); 

<hr>      

- **Texto pós-fase:**
A tela de vitória apresenta a arte completa pintada pelo gato, conjuntamente com uma representação visual do autor original da obra. Abaixo há uma breve descrição sobre o contexto da arte e seu artista.

- Classes: Victory;
- Atributos e métodos: this.artistKey; this.backgroundKey; this.textArtist; this.textPainting; this.targetKey; this.nextPhase; init(data); create(); update();

<hr>

- **Criativo (Tela branca para pintura)**:
A fase especial apresentará ao jogador uma tela em branco com uma variedade de opções de cores e formatos de pincel que podem ser escolhidas pelo tutor para seu gato pintar. Após escolhido a cor e o pincel, a fase começa. Após a iniciação da fase, um animal alvo passará pela tela atraindo a atenção do gato, que, ao acertar o alvo, pintará a região pressionada na tela branca de fundo.   

- Classes: CriativeMode;
- Atributos e métodos: create(); update(); clickTarget(); toggleSplashMenu(); this.width; this.height; this.bg; this.palette;

<hr>

## 3.6. Regras do jogo
&nbsp; &nbsp; &nbsp; &nbsp;No mundo de RonRonArte, o gato precisa atingir com toques na tela os alvos (animaizinhos) que aparecem na tela e se movem por ela, completando as fases que são obras de arte dos mais diversos períodos artísticos. A partir disso, ele receberá pontos e, se ele fizer todos os pontos, o tutor será incentivado a dar petiscos ao seu pet, a fim de que ele associe essa ação com a recompensa alimentícia. Além disso, são desbloqueados tintas e formatos diferentes que o tutor pode selecionar no modo criativo, nesse modo o gato poderá criar suas próprias pinturas. Logo, há a intersecção entre os instintos naturais de caça do gato, arte e alimentação animal.

## 3.7. Mecânicas do jogo

&nbsp; &nbsp; &nbsp; &nbsp;As mecânicas do jogo RonRonArte são simples e de fácil entendimento. A mecânica de touch funciona quando o jogador acerta o alvo, e assim, revelando parte de uma pintura, essa parte revelada será localizada próxima ao ponto de contato do gato com a tela. No modo criativo segue-se uma mecânica parecida, alterando apenas o resultado dela, em que após a ação de clicar e acertar o alvo na tela o jogador irá pintar um quadro em branco, dessa forma, pintando um quadro de autoria do próprio jogador. Ademais, há também a presença de alvos que chamam a atenção do gato na tela, cujo movimento é randomizado e começa numa posição aleatória fora da tela, instigando a percepção e instinto de caça do gato. Nosso jogo conta também com um tutorial, cujo objetivo é fazer com que o tutor entenda como participar na gameplay com o seu gato e como recompensá-lo. Além disso, o modo tutorial serve também para ensinar ao gato como ele deve "jogar", ensinando a principal mecânica de toque na tela. Esse modo tutorial é infinito e pode ser cancelado pelo tutor a qualquer momento, fazendo com que, dessa maneira, o jogo seja acessível a todos os tipos de gatos, pois, cada um pode levar o tempo que for necessário para seu aprendizado.

## 3.8. Implementação Matemática de Animação/Movimento

### 3.8.1. Parâmetros de entrada

O elemento gráfico que tem o movimento modelado matematicamente é o pombo que translada da origem ao centro da tela na cena tutorial (botões para abrir a cena: Jogar >>> Tutorial). As posições \(x\) e \(y\) iniciais são definidas pelas variáveis `const posInitialX = 0` e `const posInitialY = 0` (linhas 36 e 37 do arquivo tutorial.js, respectivamente).

### 3.8.2. Definição do tempo total da animação

O tempo total da animação é definido implicitamente no código pelo número de quadros até o pombo chegar à posição final. Como o jogo roda a 60 FPS, o tempo decorrido  \(t\) pode ser estimado a partir da contagem de quadros em `this.count++` (linha 54 do arquivo tutorial.js), conforme a equação:

$$
t = \frac{count}{60}
$$

### 3.8.3. Modelagem matemática

O movimento do pombo ocorre nos eixos \(x\) e \(y\) simultaneamente, sendo que no eixo \(x\) o movimento é uniforme (MU) e no eixo \(y\) o movimento é uniformemente variado (MUV). 

#### 3.8.3.1 Movimentação no eixo \(x\) (MU)

O deslocamento no eixo \(x\) ocorre com velocidade constante $v_x$ definida em `this.velX = 5` (linha 44 do arquivo tutorial.js), logo, o deslocamento é dado por:

$$
x(t) = x_i + v_x \cdot t
$$

Onde $x(t)$ é a posição \(x\) em função do tempo, $x_i$ é a posição $x$ inicial (no nosso caso, $x_i = 0$), $v_x$ é a velocidade horizontal e $t$ é o tempo em segundos. E com isso podemos calcular a posição final no eixo $x$.

#### 3.8.3.2 Movimentação no eixo \(y\) (MUV)

No eixo \(y\) o pombo parte do repouso, ou seja $v_0y = 0$ (definido por `this.velY = 0` na linha 45 do arquivo tutorial.js), e acelera com aceleração $a_y = 0.02$, definida em `this.accelerationY = 0.02` (linha 46 do arquivo tutorial.js). Dessa forma, a equação da posição \(y\) é:

$$
y(t) = y_i + a_y \cdot t^2 \cdot \frac{1}{2}
$$

Onde $y(t)$ é a posição $y$ em função do tempo, $y_i$ é a posição inicial (no nosso caso, $y_i = 0$), $a_y$ é a aceleração no eixo $y$, e $t$ é o tempo em segundos. E com isso podemos calcular a posição final no eixo $y$.

### 3.8.4. Implementação no código

A movimentação do pombo é atualizada a cada frame na função `update()`. E o código implementado reflete diretamente as equações modeladas:

Dentro da função `create()` definimos os parâmetros:
```javascript

  // Início da implementação dos elementos matemáticos
        // Define posição inicial
        const posInitialX = 0;  
        const posInitialY = 0;

        // Adiciona o pombo como personagem e inicia a animação
        this.character = this.add.sprite(posInitialX, posInitialY, 'pigeon').setScale(this.scale.width/400).setFlip(true, false);
        this.character.play('flyPigeon');

        // Define velocidade nos dois eixos e aceleração no eixo y
        this.velX = 5;
        this.velY = 0;
        this.accelerationY = 0.02;

```
Dentro da função `update()` implementamos o movimento:
```javascript
  // Confere se o personagem chegou no meio da tela
        if (this.character.x <= this.scale.width/2){
            
            // Implementação da aceleração no movimento
            this.count++; // Conta execuções do update()
            this.velY += this.accelerationY; // Atualiza velocidade no eixo y
            
            // Atualiza posição com base na velocidade
            this.character.x += this.velX;
            this.character.y += this.velY;

            // Imprime informações no console
            console.log("------------------------------------")
            console.log("Posição X: " + this.character.x)
            console.log("Posição Y: " + this.character.y)
            console.log("Velocidade X: " + this.velX)
            console.log("Velocidade Y: " + this.velY)
        }else{
            // Se a caixa de texto e o texto ainda não foram adicionados
            if(!this.textAdded){
                console.log("=====================================")
                console.log("Posição Inicial X: " + 0)
                console.log("Posição Inicial Y: " + 0)
                console.log("Posição Final X: " + this.character.x)
                console.log("Posição Final Y: " + this.character.y)
                console.log("Velocidade Final X: " + this.velX)
                console.log("Velocidade Final Y: " + this.velY)
                console.log("Tempo total: " + this.count/60)
                console.log("=====================================")
                // Fim das implementações matemáticas

                // Adiciona os elementos
                this.textBox = this.add.image(this.scale.width/2, this.scale.height/1.3, 'textBox').setScale(this.scale.width/800);
                this.tutorialText = this.add.text(this.scale.width/8, this.scale.height/1.7, this.tutorialTexts[this.clicks], {fontSize: this.scale.width/33, fill:'#000'})
                this.textAdded = true; // Altera a flag para true
            }
        }

```
Além da implementação matemática, repare que executamos uma série de comandos `console.log()` imprimindo valores de posição e velocidade para validação da modelagem. Incluindo posição final, velocidade final nos dois eixos, e tempo total da animação quando o pombo atinge o centro da tela.

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo

&nbsp; &nbsp; &nbsp; &nbsp;Em linhas gerais, a primeira versão do jogo “RonRonArte” conta com uma tela inicial, que contempla o botão “Jogar”. Sob essa perspectiva, criou-se a primeira cena do jogo, a qual é ativada quando o botão supracitado é clicado. Nela, sprites de animais aparecem randomicamente na tela, de maneira que o jogador (gato) seja incentivado a pressioná-los. Nesse sentido, é válido mencionar que, quando essas imagens animadas são clicadas, são liberados splashes de tinta com forma de patinha de gato, funcionalidade que nas próximas versões será refinada, a fim de que o jogador produza pinturas de acordo com os splashes. Portanto, objetiva-se ir além do convencional (apenas cliques na tela), por intermédio de dinâmicas atrelada à arte.  

&nbsp; &nbsp; &nbsp; &nbsp;Logo abaixo, estão registrados os prints das telas da primeira versão do jogo.

<p align = "center">Figura 11: tela de início do jogo</p>

![tela de start RonRonArte](https://github.com/user-attachments/assets/30f3865b-5e98-49f1-906e-e886c33ee157)

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br>



<p align = "center">Figura 12: tela com a primeira cena</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/a2107a97-8d01-4339-8469-bef594f42c61" width="300">
</div>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>



<p align = "center">Figura 13: tela da primeira cena com os splashes de tinta</p>

<div align="center">
  <img src="https://github.com/user-attachments/assets/9581c99b-c61d-407d-bb58-b492f8a47998" width="300">
</div>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>




&nbsp; &nbsp; &nbsp; &nbsp;Ademais, é significativo pontuar que, ao longo desse primeiro momento de desenvolvimento, foram encontradas algumas dificuldades. Sob esse viés, o inicial não reconhecimento do código por parte do GitHub Pages e alguns bugs referentes aos sprites foram as principais adversidades enfrentadas ao longo do processo de desenvolvimento. Nessa perspectiva, tais aspectos estão passando por um crivo maior, de sorte que sejam superados.

&nbsp; &nbsp; &nbsp; &nbsp;Portanto, como próximos passos, notam-se os subsequentes: habilitação de personalização de fase pelo tutor (por meio da qual ele poderá selecionar a quantidade de animais que aparecem na tela), criação de um menu de opções funcional e elaboração de uma tela bônus para pintura por parte do gato. 

## 4.2. Desenvolvimento básico do jogo

&nbsp; &nbsp; &nbsp; &nbsp;A partir da versão preliminar do jogo, realizou-se o desenvolvimento básico do game. Nele, foi acrescentado uma splash screen (com o nome da equipe), a fim de dar mais fluidez à experiência do usuário. Além disso, foi implementado um novo background na tela de início (gerada por IA), uma vez que o adicionado na primeira versão foi utilizado com objetivos de teste. Ademais, a tela de start conta com um botão que direciona ao tutorial do RonRonArte, nessa tela haverá disponível um botão para pular o tutorial caso o tutor já tenha o feito ou não queira o fazer, e, após o avanço do tutorial o jogador será redirecionado para a tela de primeira fase do jogo. Além disso, a idealização das fases já foi concluida, restando agora a implementação. Por fim, é válido mencionar que se iniciou a modularização do código, tendo sido refeitas as linhas de código em programação orientada a objetos. Conjunto a isso, houve a programação das sprites da tela de vitória, além da criação do contador de acertos para verificação do desempenho do jogador em sua gameplay. 

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
<p align = 'center'>Figura 14: tela de instruções</p>
<div align = 'center'>
  <img width="935" alt="image" src="https://github.com/user-attachments/assets/7081f995-b960-4c10-84eb-42fedf96822f" />
</div><br>

<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p align = 'center'>Figura 15: tela de tutorial</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/510f51b9-c320-4c1d-ab87-3690abf2d989" />
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p align = 'center'>Figura 16: tela do início das fases</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/554c235d-a9b9-4f88-8729-2b6302444569" />
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p align = 'center'>Figura 17: tela de pintura da fase 1</p>
<div align = 'center'>
  <img width="933" alt="image" src="https://github.com/user-attachments/assets/8f147d35-bbad-40ca-b773-183bf5c93b6d" />
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p align = 'center'>Figura 18: tela de vitória da fase 1</p>
<div align = 'center'>
  <img width="932" alt="image" src="https://github.com/user-attachments/assets/1790cca4-9119-4d94-ac4f-9f7220c094aa" />
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p>Também está representada a modularização do código nas figuras 19 e 20.</p>
<p align = 'center'>Figura 19: estrutura das pastas após a modularização do código</p>
<div align = 'center'>
  <img width="30%" alt="image" src="https://github.com/user-attachments/assets/76b12c16-e454-40a5-80c3-d23deaa03a73"/>
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


<p align = 'center'>Figura 20: estrutura da versão básica do jogo (com importações de cenas phaser)</p>
<div align = 'center'>
  <img width="70%" alt="image" src="https://github.com/user-attachments/assets/a3d6a5f5-8cad-4108-906c-16fae2e00bf4"/>
</div><br>
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

## 4.3. Desenvolvimento intermediário do jogo

&nbsp; &nbsp; &nbsp; &nbsp;No desenvolvimento intermediário do jogo, foram acrescentados mais itens ao game em relação à versão preliminar. Em termos de código, foi adicionada uma classe “basePhase”, que servirá de arquétipo para o desenvolvimento de todas as outras, parecido com um template. Já em termos de jogo, iniciou-se a implementação do modo criativo do game, que já possui sua principal característica implementada: a seleção de cores por parte do tutor em uma paleta na tela, a fim que seu gato produza suas próprias pinturas de modo personalizado. Por fim, adicionou-se um menu de seleção de níveis, no qual o tutor poderá escolher entre a fase de tutorial, as fases propostas ou o modo criativo.

<p align = 'center'>Figura 21: Parte do código da classe "basePhase"</p> <br>

![image](https://github.com/user-attachments/assets/83390710-7f10-4187-8cd2-be09a1f2bf78)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 22: Menu de seleção de cores do modo criativo</p>

![image](https://github.com/user-attachments/assets/9e9e0d25-60c2-489e-8f7c-824716c41477)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 23: Modo criativo com splashes na tela</p>

![image](https://github.com/user-attachments/assets/5548a0db-fa8e-48ef-8f14-29c151f0af5b)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 24: Tela de seleção de níveis</p>

![image](https://github.com/user-attachments/assets/e1aa419d-1854-41b3-a25d-f77681b1f998)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>


## 4.4. Desenvolvimento final do MVP

Nessa etapa de desenvolvimento final do MVP, foram feitas diversas mudanças, como a mudança do storytelling central do jogo e de suas fases, reformulação da tela de vitória e modo criativo, as pinturas definitivas foram definidas, assets sonoros foram definidos e implementados, e foram feitos alguns acabamentos para deixar o jogo mais polido. As novas artes determinadas para as fases de nosso jogo foram: "A Noiva", de Maria Auxiliadora; "Spoliarium" de Juan Luna; "J'aime la couleur" de Chéri Samba; "Aboriginal design, with Sturt's Pea" de Margaret Preston. (Figuras 25 a 28). A nova tela de vitória conta com uma pontuação (quantidade de pombos acertados) e uma contagem de tempo que juntos representam uma pontuação em formato de estrelas (Figura 29). A reformulação do modo criativo conta com um novo botão para o tutor tirar print da obra de seu gato, além de um botão de paletas que permite que o tutor escolha diferentes paletas e formatos de pincel (Figuras 30 a 32). Por fim, os arquivos do jogo atualizados estão demonstrados na figura 33.

<p align = 'center'>Figura 25: Tela com o quadro da fase 1</p> <br>

![image](https://github.com/user-attachments/assets/2f68942c-cbfd-4ab6-92e9-59cde50d2dad)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 26: Tela com o quadro da fase 2</p> <br>

![image](https://github.com/user-attachments/assets/2774d2d9-825f-4107-8c02-8a1398365807)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 27: Tela com o quadro da fase 3</p> <br>

![image](https://github.com/user-attachments/assets/7f480025-fb30-4144-a4c4-1e52420935ac)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 28: Tela com o quadro da fase 4</p> <br>

![image](https://github.com/user-attachments/assets/70e6fb38-d8b0-449b-8cea-679db402bc2b)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 29: Tela de vitória atualizada</p> <br>

![image](https://github.com/user-attachments/assets/eca91e13-1d08-4410-bf98-29bda8787df9)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 30: Tela do modo criativo:</p> <br>

![image](https://github.com/user-attachments/assets/697b9288-3389-429f-8731-20b201418641)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 31: Tela do modo criativo(2):</p> <br>

![image](https://github.com/user-attachments/assets/3ca18bcf-9bfd-4c33-9762-8dceff3a37c9)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<p align = 'center'>Figura 32: Tela de seleção de paletas modo criativo</p> <br>

![image](https://github.com/user-attachments/assets/58eefa74-c00e-4645-b137-27ee1eb0fdaf)
<p align = 'center'>Fonte: material produzido pelos autores (2025).</p> <br><br>

<div align = 'center'> 
<p align = 'center'> Figura 33: Arquivos do jogo atualizados.</p>
	<img src = "https://github.com/Inteli-College/2025-1A-T15-IN01-G03/blob/main/assets/Captura%20de%20tela%202025-03-28%20193243.png">
<p align = 'center'>Fonte: material produzido pelos autores(2025).</p> <br><br>
</div>

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes

## 5.1. Casos de Teste

## 5.1. Casos de Teste

\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | Jogo mantém proporção correta na tela | Abrir o jogo, navegar entre os menus e as fases | Imagens e textos visíveis e tela clicável
2 | Jogo aberto no dispositivo (smartphone ou tablet) | Tocar no botão “iniciar” | O jogo direciona para a cena de seleção de fases
3 | Cena de tutorial na tela | Tocar na tela para ler as instruções | As instruções do tutorial surgem conforme o usuário toca na tela
4 | Lido as instruções do tutorial e volume do dispositível audível | Pegar um petisco e tocar na tela | Um alvo clicável voa aleatoriamente na tela infinitamente até o tutor pular o tutorial
5 | O tutor coloca o petisco em cima do alvo conforme instruído no tutorial | Gato bater no alvo | Splash de tinta aparece no lugar do alvo e é emitido um estímulo sonoro
6 | O gato compreendeu que deve bater nos alvos para ser recompensado | Apertar botão de pular o tutorial | O tutorial acaba e o jogo direciona para a cena da fase 1
7 | Fase 1 em curso e volume do dispositível audível | Gato bater no alvo da fase 1 | É revelado parte de um quadro a cada acerto do gato no alvo e é emitido um estímulo sonoro
8 | Gato abateu o alvo três vezes | Esperar 6 segundos | O jogo direciona para a tela de vitória e é emitido um estímulo sonoro
9 | Cena do modo criativo | Selecionar tinta na paleta de tintas | Ao clicar no alvo, a tinta selecionada é pintda na tela
10| Cena de fase do jogo | Gato bater no mesmo alvo repetidas vezes | Apenas uma batida é contabilizada
11| Cena de level select | Tutor clicar no botão repetidas vezes | Direciona para a cena correta, com transição e sem bugs
12| Fase do jogo | Ao inciar e durante a fase | Alvo se movimenta dentro do quadro, e possui velocidade constante no eixo x e variada no eixo y
13| Cenas com botões de segurar (tutorial, fases, criativo) | Tocar nos botões da cena | Cancela o carregamento do botão e não realiza a funcionalidade do botão
14| Cenas com botões de segurar (tutorial, fases, criativo) | Pressionar e segurar os botões da cena | Realiza a funcionalidade correta do botão
15| Modo criativo | Clicar e segurar o botão de print representado por uma câmera | Aviso para tirar uma printscreen seguido de remoção dos elementos extras ao quadro da tela

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

### 5.2.1.1: Registro dos testes de guerrilha

Perguntas | Entrevistado 1 | Entrevistado 2 | Entrevistado 3 | Entrevistado 4 | Entrevistado 5 | Entrevistado 6 | Entrevistado 7
--- | --- | --- | --- | --- | --- | --- | --- 
Você tem um gato? | Sim | Não | Não | Sim, 4 gatos | SIm | Não |Sim 
Já possuía experiência com jogos para gatos? | Sim, jogos de matar formigas | Não | Sim, jogos de matar formigas | Não | Sim, jogo com baratas | Não | Não
Jogo manteu proporção correta na tela do usuário? | Sim | Sim | Sim | Não | Sim | Não | Sim
Entendeu as regras e mecânicas do jogo? | Sim | Sim | Sim | Sim | Sim | SIm | Sim, mas a tela de fases não está intuitiva
Entendeu, facilmente, os textos de instruções? | SIm | SIm | Sim, mas achou o texto muito longo | Sim | Sim | Pulou os textos | Sim
Entendeu, de forma intuitiva, que os botões devem ser pressionados por um tempo para mudarem de cena? | Sim | Sim | Sim, mas os botões estão pequenos | Não, porém quando entendeu, não teve mais dúvidas em outros botões | Não | Mais ou menos, precisou de um "clique teste” | Não
As disposições dos textos agradaram visualmente? | Mais ou menos, alguns textos estão para fora e um pouco desformadas | As vezes a explicação do quadro foi muito longa | Fonte boa, mas falta formatação | Legal, porém texto está fora da tela | Não, as letras estão muito pequenas | O texto do menu estava pequeno e difícil de ler | Sim
O tempo para tirar print foi suficiente para o usuário tirar o print no modo criativo? | SIm | Sim | Sim | Sim | Sim | Sim | Sim
Apresentou dificuldades? | Sim, os botões e alguns textos estão muito pequenos | Não | Não | Sim | Não | Não | Apenas com os botões
Nota de 0 a 10 que deu para o jogo | 10,0 | 9,5 | 8,0 | 7,0 | 9.5 | 7.0 | 9.5
O que mais gostou no jogo? | Criatividade, especialmente na parte de criação dos quadros autorais dos gatos | Paleta do modo criativo | Modo criativo | A exploração da criatividade dos gatos | Spritesheet da lagartixa | Spritesheet do pombo | O modo criativo 
O que poderia melhorar no jogo?| Nada | Colocar mais quadros, diversificar mais | Botões muito pequenos, melhor indicador do tempo | Interface de seleção de níveis ser mais intuitivo e o Tutorial ser mais claro | Aumentar a escrita e o tamanho dos alvos | Mudar o Menu, pois é pequeno e pode ser menos intuitivo, assim como os botões. Retirar o temporizador e passar a pontuação para o canto, mexer na estética do botão de modo a destaca-lo mais e juntaa-lo com a borda do quadro | Aumentar o tamanho dos botões

### 5.2.1.2: Registro dos testes com público-alvo

### 5.2.1.3: Análise das respostas e principais conclusões
Em relação aos testes de guerrilha, foi notório o agrado dos potenciais usuários com o modo criativo e com a abordagem da temática artística no jogo, assim como foi evidente o sucesso dos spritesheets dos alvos. Nesse teste, foi possível também validar a intuitividade das regras do jogo e das instruções do tutorial, o clicar dos botões e a suficiência do tempo de tirar print do quadro no modo criativo. No entanto, foi possível concluir que a disposição e o tamanho dos textos não tiveram êxito, haja vista que pouco mais de 85% dos entrevistados relataram algum problema nesse aspecto. 
Sobre o jogo em geral, a média aritmética das notas atribuídas pelos voluntários foi de 8,6, o que revela uma conclusão positiva no tangente à jogabilidade do Ronronarte.

### 5.2.2 Melhorias
Com base nos testes de jogabilidade, a equipe CatUp tem como plano de melhorias aumentar o tamanho dos botões, dos alvos e dos textos - haja vista todos os entrevistados no teste de guerrilha relataram algum desconforto com esses itens -, assim como retirar o temporizador e passar a pontuação para o canto da tela, conforme a sugestão do entrevistado 6. Ademais, em razão da distração dos gatos no teste de usabilidade com o som de miar ao acertar os alvos, a equipe entende que é imprescindível alterar o efeito sonoro para uma frequência mais aguda. 

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

Consoante os resultados dos testes que a equipe realizou, o Ronronarte teve êxito em cumprir os objetivos declarados na seção 2.1, principalmente no que tange a fortalecer o laço entre tutor e gato, já que a dinâmica de pintura e de caça do jogo impactou, de fato, o emocional dos tutores e, paralelamente, entreteu os gatos. Nos testes de guerrilha, foi notório o entusiasmo dos voluntários com o modo criativo e a exploração da temática artística no jogo, o qual configura-se um dos principais diferenciais do Ronronarte, quando comparados aos demais jogos do mercado.
No entanto, foi perceptível nos testes de usabilidade que o jogo apresenta dificuldades de se adequar totalmente em todos os tipos de dispositivos e, em razão de precisar ser aberto em uma página Web, em algumas ocasiões, o gato bate em espaços da tela que direcionam para fora do jogo. Tal problemática pode ser solucionada com o desenvolvimento de um aplicativo do Ronronarte - por intermédio da continuidade da parceria com a Dr.Pet e do estímulo financeiro da empresa. 
Além disso, como melhoria, a equipe CatUp idealiza a construção de um dispenser com arduíno para automatizar o ato de dar a recompensa para o gato e também permitir que o gato jogue o Ronronarte, mesmo se seu tutor estiver distante. Para tal efeito, será necessário o auxílio financeiro do parceiro para a disponibilidade dos recursos de hardware e da assistência da universidade para proporcionar aulas com os conhecimentos técnicos basilares para a construção do dispenser. 

# <a name="c7"></a>7. Referências (sprint 5)

FGV. Pesquisa revela que Brasil tem 480 milhões de dispositivos digitais em uso, sendo 2,2 por habitante. [S. l.], 27 jun. 2024. Disponível em: https://portal.fgv.br/noticias/pesquisa-revela-brasil-tem-480-milhoes-dispositivos-digitais-uso-sendo-22-habitante. Acesso em: 28 mar. 2025.

GOTHELF, Jeff. Use OKRs para definir metas para equipes, não para indivíduos. [S. l.], 17 dez. 2020. Disponível em: https://hbr.org/2020/12/use-okrs-to-set-goals-for-teams-not-individuals?language=pt. Acesso em: 24 mar. 2025.

INSTITUTO PET BRASIL. Censo Pet IPB: com alta recorde de 6% em um ano, gatos lideram crescimento de animais de estimação no Brasil. 2022. Disponível em: https://institutopetbrasil.com/fique-por-dentro/amor-pelos-animais-impulsiona-os-negocios-2-2/ Acesso em: 18 fev. 2025. <br>

MAGRETTA, Joan. Entendendo Michael Porter: o guia essencial da competição e estratégia. Rio de Janeiro: Alta Books, 2019. 1 recurso online. ISBN 9788550805047. Disponível em: https://integrada.minhabiblioteca.com.br/books/9788550805047. Acesso em: 28 fev. 2025.

NAPOLEÃO, Bianca Minetto. Matriz de Riscos (Matriz de Probabilidade e Impacto). [S. l.], 26 jun. 2019. Disponível em: https://ferramentasdaqualidade.org/matriz-de-riscos-matriz-de-probabilidade-e-impacto/. Acesso em: 20 mar. 2025.

PEREIRA, Daniel. O que é o Value Proposition Canvas?. [S. l.], 27 set. 2024. Disponível em: https://businessmodelanalyst.com/pt/value-proposition-canvas/. Acesso em: 27 mar. 2025.

PETZ. Gato tem sentimento? O que e como eles sentem?. [S. l.], 6 ago. 2023. Disponível em: https://www.petz.com.br/blog/pets/gatos/gato-tem-sentimento/. Acesso em: 18 fev. 2025.

ROCHA, Thiago. Metas SMART: entenda o que são e aprenda a definir as suas: Metas SMART devem ser específicas, mensuráveis, atribuíveis, realistas e temporais, auxiliando empresas a determinar objetivos de maneira mais inteligente.. [S. l.], 6 fev. 2025. Disponível em: https://www.rdstation.com/blog/vendas/metas-smart/. Acesso em: 24 mar. 2025.

SOLLITTO, André. Por que brasileiros têm preferido escolher gatos como companheiros do lar. Veja, 2022.
Disponível em: https://veja.abril.com.br/comportamento/por-que-brasileiros-tem-preferido-escolher-gatos-como-companheiros-do-lar/. Acesso em: 18 fev. 2025.



# <a name="c8"></a>Anexos

*Inclua aqui quaisquer complementos para seu projeto, como diagramas, imagens, tabelas etc. Organize em sub-tópicos utilizando headings menores (use ## ou ### para isso)*

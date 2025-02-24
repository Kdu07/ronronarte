const gameWidth = window.innerWidth;
const gameHeight = window.innerHeight;

// Configurações iniciais do jogo
var config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Variaveis globais que serão úteis para o código
var game = new Phaser.Game(config);
var pombo;
var parado = false;
var score = 0;
var scoreboard;
var maxScore = 3; // Defina a pontuação máxima aqui
var gameEnded = false; // Variável para verificar se o jogo foi encerrado
var borda;
var quadro;
var splash;
var mask;
var revealMask;
var tinta1;
var scaleTinta;
var vitoria;



// Função do Phaser que carrega os arquivos na memória
function preload() {
    this.load.image('borda', '/assets/borda.png');
    this.load.image('tinta1', '/assets/tinta1.png');
    this.load.image('splash', '/assets/splash.png');
    this.load.spritesheet('pombo', '/assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
    this.load.audio('pru', '/assets/audios/pru.mp3');
    this.load.image('PauseBtn', '/assets/botões/pause.png');
    this.load.image('quadro', '/assets/quadro.png');
    this.load.image('artista', '/assets/artista.png');
    this.load.image('paleta', '/assets/paleta.png');
    this.load.video('vitoria', '/assets/tela_photoshop_1.mp4');
}
        
// Função do Phaser que adiciona e configura os elementos na página
function create() {

    borda = this.add.image(gameWidth / 2, gameHeight / 2, 'borda').setScale(0.34);
    quadro = this.add.image(gameWidth / 2, gameHeight / 2, 'quadro').setScale(0.34);
    
    borda.setAlpha(1); // Torna a borda visível
    quadro.setAlpha(0); // Torna o quadro visível

    // Obter as dimensões da borda para restringir o movimento do pombo
    let bordaWidth = borda.displayWidth;  // Largura da borda
    let bordaHeight = borda.displayHeight; // Altura da borda

    // Cria uma máscara inicial vazia 
    revealMask = this.make.renderTexture({ width: gameWidth, height: gameHeight }, false);
    mask = new Phaser.Display.Masks.BitmapMask(this, revealMask);
    //A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
    quadro.setMask(mask);

    somPombo = this.sound.add('pru'); // Adiciona som

    // Animação do pombo voando
    this.anims.create({
        key: 'voo',
        frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    scoreboard = this.add.text(950, 15, 'Pontos:' + score, {fontSize:'45px', fill:'#495613'})
    
    // Adiciona um botão de pause na tela
    PauseBtn = this.add.image(40, 50, 'PauseBtn')
    PauseBtn.setInteractive()
    PauseBtn.on('pointerdown', () => {
        window.location.href = "/src/scenes/teste.html";
    })

    spawnPombo.call(this); // Gera o pombo
}

// Função do Phaser que roda em loop constante as funcionalidades do jogo
function update() { 
    clickPombo.call(this); // Confere se o pombo é clicado
    if (!parado){ // Só move o pombo se ele não foi clicado
        movimento(pombo);  
    }
}

// Função para gerar o pombo em um lugar aleatório da tela
function spawnPombo() {
    parado = false;

    // Obter as dimensões da borda (área visível onde o pombo vai se mover)
    let bordaWidth = borda.displayWidth;
    let bordaHeight = borda.displayHeight;

    // Gerar uma posição aleatória dentro da área do quadro (borda)
    let posX = Phaser.Math.Between(borda.x - bordaWidth / 2 + 50, borda.x + bordaWidth / 2 - 50);
    let posY = Phaser.Math.Between(borda.y - bordaHeight / 2 + 50, borda.y + bordaHeight / 2 - 50);
    
    pombo = this.add.sprite(posX, posY, 'pombo').setScale(1.5);
    pombo.setInteractive();
    
    pombo.velocidadeX = Phaser.Math.Between(5, 7);
    pombo.velocidadeY = Phaser.Math.Between(3, 6);
    pombo.direcaoX = -1;
    pombo.direcaoY = 1;
    
    pombo.hitboxWidth = 43;
    pombo.hitboxHeight = 33;

    pombo.play('voo'); // Inicia animação de voo pombo
}

// Função para quando o pombo é clicado
function clickPombo() {
    this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
    this.input.on('pointerdown', (pointer) => {
        if (gameEnded) return; // Verifique se o jogo já foi encerrado
        if (pombo.getBounds().contains(pointer.x, pointer.y)) {
            parado = true;
            score+= 1;
            scoreboard.setText('Pontos: ' + score);
            console.log(score)

            // Cria efeito de som e adiciona um novo pombo
            // Verifica se a pontuação atingiu a pontuação máxima
            if (score >= maxScore) {
                    vitoria = this.add.video(gameWidth / 2, gameHeight / 2, 'vitoria').setScale(0.6);
                    this.add.image(vitoria.x-150, vitoria.y-110, 'quadro').setScale(0.15);
                    this.add.image(vitoria.x+300, vitoria.y-110, 'artista').setScale(0.23);
                    this.add.image(vitoria.x / 1.35, gvitoria.y / 2, 'paleta').setScale(0.2);

            } else {
                this.tweens.add({
                    targets: pombo,
                    onComplete: () => {
                        pombo.destroy(); // Remove o pombo da tela
                        let pomboDestruido = pombo.destroy();
                        somPombo.play({ volume: 0.5 }); // Toca o som de pombo quando o pombo é clicado
                        this.time.delayedCall(1000, () => {
                            somPombo.stop(); // Para o som do pombo após 1000ms (1s)
                        });
                        spawnPombo.call(this); // Cria um novo pombo após sumir
                    }
                })
            };
            //Cria um splash no local do clique
        splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(2.0);
        splash.setAlpha(1);
        revealMask.draw(splash, splash.x, splash.y);
        this.time.delayedCall(0, function() {
            splash.destroy(); //Remove o splash após liberar a área
        });

        setTimeout(() => {
        tinta1 = this.add.image(pointer.x, pointer.y, 'tinta1').setScale(2.5); // Aparece instantaneamente
        tinta1.setAlpha(1);
        scaleTinta = revealMask.draw(tinta1, tinta1.x, tinta1.y);

        this.time.delayedCall(0, function() {
            tinta1.destroy(); //Remove o splash após liberar a área
        });
            
        },150);

        quadro.setAlpha(1);
    }
    });
}

function endGame() {
    gameEnded = true; // Atualize a variável para indicar que o jogo foi encerrado
    // Acesse a física da cena diretamente
    if (this.scene && this.scene.physics && this.scene.physics.pause) {
        this.scene.physics.pause();
    } else {
        console.error("A física da cena não está definida ou 'pause' não está disponível.");
    }
    window.location.href = "Win.html"; // Redireciona para a tela de fim de jogo
}

// Função para movimentar o pombo
function movimento(alvo) {
    // Obter as dimensões da borda (área visível)
    let bordaWidth = borda.displayWidth;
    let bordaHeight = borda.displayHeight;

    // Limite para a borda em X (direita e esquerda)
    if (alvo.x >= (borda.x + bordaWidth / 2 - alvo.hitboxWidth)) {
        alvo.setFlip(false, false);  // Direção para a esquerda
        alvo.direcaoX = -1;
    }
    if (alvo.x <= (borda.x - bordaWidth / 2 + alvo.hitboxWidth)) {
        alvo.setFlip(true, false);  // Direção para a direita
        alvo.direcaoX = 1;
    }

    // Limite para a borda em Y (superior e inferior)
    if (alvo.y >= (borda.y + bordaHeight / 2 - alvo.hitboxHeight)) {
        alvo.direcaoY = -1; // Direção para cima
    }
    if (alvo.y <= (borda.y - bordaHeight / 2 + alvo.hitboxHeight)) {
        alvo.direcaoY = 1; // Direção para baixo
    }

    // Move no eixo X e Y de acordo com a velocidade e direção
    alvo.x += alvo.velocidadeX * alvo.direcaoX;
    alvo.y += alvo.velocidadeY * alvo.direcaoY;
}
// Gera um número aleatorio correspondendo a pixels fora da tela do game (usado para gerar o pombo fora da tela)
function gerarRandomPos(eixo, fora) {
    var num = Math.floor(Math.random() * ((eixo + fora) - (0 - fora) + 1)) + (0 - fora); // Gera um valor do tamanho da tela + margem para os dois lados
    return (num > 0 && num < eixo) ? gerarRandomPos(eixo, fora) : num; // Se o valor gerado estiver dentro da tela a função é chamada novamente
}


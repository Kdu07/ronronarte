const gameWidth = 570;
const gameHeight = 850;

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

var game = new Phaser.Game(config);
var pombo;
var parado = false;

// Configurar a hitbox da imagem
function splashRand() {
    let i = 1;
    return 'splash-yellow';
}

function preload() {
    this.load.image('bg', 'assets/background.jpg');
    this.load.spritesheet('pombo', 'assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
    this.load.image('splash-pink', 'assets/splash-pink.png');
    this.load.image('splash-blue', 'assets/splash-blue.png');
    this.load.image('splash-yellow', 'assets/splash-yellow.png');
}

function create() {
    this.add.image(285, 425, 'bg').setScale(1.0);

    // ✅ Criar animação DENTRO do create()
    this.anims.create({
        key: 'direita',
        frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

    spawnPombo.call(this); // Agora o pombo já pode usar a animação
}


function spawnPombo() {
    let posX = Phaser.Math.Between(100, 560); // Posição inicial aleatória
    let posY = Phaser.Math.Between(200, 600); 

    pombo = this.add.sprite(posX, posY, 'pombo').setScale(1.5);
    pombo.setInteractive();
    
    // Cofigurações do pombo
    // Velocidade de movimento
    pombo.velocidadeX = 9;
    pombo.velocidadeY = 4;
    
    // Inicializa a direção, que é usada junto da a velocidade para movimentar o pombo
    pombo.direcaoX = -1; 
    pombo.direcaoY = 1;
    
    // Hitbox
    pombo.HitboxWidth = 43;
    pombo.HitboxHeight = 33;

    pombo.play('direita');

    this.input.on('pointerdown', (pointer) => {
        if (pombo.getBounds().contains(pointer.x, pointer.y)) {
            // Cria efeito de fade-out
            this.tweens.add({
                targets: pombo,
                alpha: 0,
                duration: 300,
                ease: 'Linear',
                onComplete: () => {
                    pombo.destroy();
                    spawnPombo.call(this); // Cria um novo pombo após sumir
                }
            });

            // Adiciona splash invisível na tela
            let splash = this.add.image(pombo.x, pombo.y, splashRand()).setScale(0.3);
            splash.alpha = 0;

            // Efeito de fade-in para o splash
            this.tweens.add({
                targets: splash,
                alpha: 1,
                duration: 300,
                ease: 'Linear',
                onComplete: () => {
                    this.tweens.add({
                        targets: splash,
                        alpha: 0.1,
                        duration: 500,
                        ease: 'Linear'
                    });
                }
            });
        }
    });
}

function update() { 
    if (!parado){ // Só move o rato se ele não estiver parado
        movimento(pombo);  
    }
}

function movimento(alvo) {
    // Confere se o alvo chegou no limite do game. Se chegar no limite, espelha a orientação
    // Eixo X
    if (alvo.x >= (gameWidth - alvo.HitboxWidth)){
        alvo.setFlip(false,false);
        alvo.direcaoX = -1;
    }
    if (alvo.x <= (0 + alvo.HitboxWidth)){
        alvo.setFlip(true,false);
        alvo.direcaoX = 1;
    }
    // Eixo Y
    if (alvo.y >= (gameHeight - alvo.HitboxHeight) || alvo.y <= (0 + alvo.HitboxHeight)){
        alvo.direcaoY *= -1;
    }

    // Move no eixo X e Y de acordo com a velocidade e a orientação
    alvo.x += alvo.velocidadeX * alvo.direcaoX;
    alvo.y += alvo.velocidadeY * alvo.direcaoY;
}
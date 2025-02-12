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
var velocidadeX = 9;
var velocidadeY = 4;
// Configurar a hitbox da imagem
var pomboHitboxWidth = 43;
var pomboHitboxHeight = 33;

function preload() {
    this.load.image('bg', 'assets/background.jpg');
    this.load.spritesheet('pombo', 'assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
    this.load.image('splash', 'assets/splash.png');
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
    pombo.ida = true; // Inicializa a direção
    pombo.sobe = true;

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

            let splash = this.add.image(pombo.x, pombo.y, 'splash').setScale(0.3);
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
        // Movimento no eixo X
        if (pombo.x >= (gameWidth - pomboHitboxWidth)){
            pombo.setFlip(false,false);
            pombo.ida = true;
        }
        if (pombo.x > (0 + pomboHitboxWidth) && pombo.ida === true){
            pombo.x -= velocidadeX;
            pombo.angle = 0;
        }
        if (pombo.x <= (0 + pomboHitboxWidth)){
            pombo.setFlip(true,false);
            pombo.ida = false;
        }
        if (pombo.x < (gameWidth - pomboHitboxWidth) && pombo.ida === false){
            pombo.x += velocidadeX;
            pombo.angle = 0;
        }

        // Movimento no eixo Y
        if (pombo.y >= (gameHeight - pomboHitboxHeight)){
            pombo.setFlip(false,false);
            pombo.sobe = true;
        }
        if (pombo.y > (0 + pomboHitboxHeight) && pombo.sobe === true){
            pombo.y -= velocidadeY;
            pombo.angle = 0;
        }
        if (pombo.y <= (0 + pomboHitboxHeight)){
            pombo.setFlip(true,false);
            pombo.sobe = false;
        }
        if (pombo.y < (gameHeight - pomboHitboxHeight) && pombo.sobe === false){
            pombo.y += velocidadeY;
            pombo.angle = 0;
        }
    }
}

var config = {
    type: Phaser.AUTO,
    width: 570,
    height: 850,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var pombo;
var parado = false;

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
    let = Phaser.Math.Between(100, 560); // Posição inicial aleatória
    let = Phaser.Math.Between(200, 600); 

    pombo = this.add.sprite(100, 500, 'pombo').setScale(1.5);
    pombo.setInteractive();
    pombo.ida = true; // Inicializa a direção

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
    if (pombo && !parado) { 
        if (pombo.x >= 500) { 
            pombo.setFlip(false, false);
            pombo.ida = true;
        }

        if (pombo.x <= 70) {
            pombo.setFlip(true, false);
            pombo.ida = false;
        }

        if (pombo.ida) {
            pombo.x -= 5;
        } else {
            pombo.x += 5;
        }
    }
}

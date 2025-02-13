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
        //setar variaveis universais que serão uteis pro código
var game = new Phaser.Game(config);
var pombo;
var parado = false;


        //função que "pré-carrega" os arquivos na página
function preload() {
    this.load.audio('pru', '/audios/pru.mp3');
    this.load.image('bg', 'assets/background.jpg');
    this.load.spritesheet('pombo', 'assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
    this.load.image('splash-pink', 'assets/splash-pink.png');
    this.load.image('splash-blue', 'assets/splash-blue.png');
    this.load.image('splash-yellow', 'assets/splash-yellow.png');
}
        //função que cria as coisas na página
function create() {
    this.add.image(285, 425, 'bg').setScale(1.0);
    somPombo = this.sound.add('pru');

    // criar animação do pombo voando
    this.anims.create({
        key: 'direita',
        frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

    
    spawnPombo.call(this); // Agora o pombo já pode usar a animação
}

function spawnPombo() {
    let posX = Phaser.Math.Between(0, 600); // Posição inicial aleatória
    let posY = Phaser.Math.Between(0, 700); 

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
    pombo.hitboxWidth = 43;
    pombo.hitboxHeight = 33;

    pombo.play('direita');
    this.input.removeAllListeners('pointerdown');
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
                    somPombo.play({volume: 0.5});  //toca o som de pombo quando o pombo é clicado
                    this.time.delayedCall(1000, () => {
                        somPombo.stop(); //para o som do pombo após 1000ms(1s)
                    });
                    spawnPombo.call(this); // Cria um novo pombo após sumir
                }
    
            });

            // Adiciona splash invisível na tela
            let splashRan = splashRand();
            let splash = this.add.image(pombo.x, pombo.y, splashRan).setScale(0.3);
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
                        alpha: 0.7,
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
    if (alvo.x >= (gameWidth - alvo.hitboxWidth)){
        alvo.setFlip(false,false);
        alvo.direcaoX = -1;
    }
    if (alvo.x <= (0 + alvo.hitboxWidth)){
        alvo.setFlip(true,false);
        alvo.direcaoX = 1;
    }
    // Eixo Y
    if (alvo.y >= (gameHeight - alvo.hitboxHeight) || alvo.y <= (0 + alvo.hitboxHeight)){
        alvo.direcaoY *= -1;
    }

    // Move no eixo X e Y de acordo com a velocidade e a orientação
    alvo.x += alvo.velocidadeX * alvo.direcaoX;
    alvo.y += alvo.velocidadeY * alvo.direcaoY;
}

function splashRand(){
    let splash = 'splash-yellow';
    let rand = Phaser.Math.Between(0,2);
    console.log(rand);

    switch(rand){
        case 0:
            splash = 'splash-yellow';
            break
        case 1:
            splash = 'splash-pink';
            break
        case 2:
            splash = 'splash-blue';
            break    
    }
    return splash;
}
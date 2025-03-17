import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase0 extends BasePhase {
    constructor() {
        // Configura a chave de classe e assets
        super('Phase0', false, 'bgTutorial', 'pigeon', 'flyPigeon', 'pigeonSound')
    }

    create(){
        // Configura a animação do pombo voando
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        super.create();
    }

    update(){
        super.update()
        this.touchStartTime;
        this.spriteLoading;
        // Se a pontuação atingiu 3 pontos, aparece o botão de pular tutorial.
        if (this.score > 3) {
            // Cria o botão de pular o tutorial
            let skipTutorialButton = this.add.image(this.width*0.95, this.height*0.05, 'skipTutorialButton').setScale(this.width/1200).setInteractive({ useHandCursor: true });
            skipTutorialButton.on('pointerdown', (pointer) => {
                this.spriteLoading = this.add.sprite(this.width*0.95, this.height*0.1, 'spriteLoading').setScale(0.2).setInteractive();
                this.spriteLoading.setVisible(true);
                this.anims.create({
                    key: 'SpriteLoading', // Nome da animação
                    frames: this.anims.generateFrameNumbers('spriteLoading', {start:0, end:5}), 
                    frameRate: 2, 
                    repeat: -1 
                })
                // Inicia a animação do jogador configurada
                this.spriteLoading.anims.play('SpriteLoading',true);
                this.touchStartTime = pointer.downTime; // Armazena o tempo do toque
            });

            skipTutorialButton.on('pointerup', (pointer) => {
                let touchDuration = this.time.now - this.touchStartTime; // Calcula a duração
                this.spriteLoading.anims.stop();
                this.spriteLoading.setFrame(0);
                this.spriteLoading.setVisible(false);

                if (touchDuration >= 2500) {
                    console.log("Toque curto detectado!");
                    this.scene.start("Phase1");
                }
            });
        }
    }
}


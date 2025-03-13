import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase0 extends BasePhase {
    constructor() {
        // Configura a chave de classe
        super('Phase0', false, 'bgTutorial', 'pigeon', 'flyPigeon', 'pigeonSound')
    }

    create(){
        // Animação do pombo voando
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        super.create();
    }

    update(){
        super.update()

        // Se a pontuação atingiu 3 pontos, aparece o botão de pular tutorial.
        if (this.score > 3) {
            let skipTutorialButton = this.add.image(this.width - 100, 50, 'skipTutorialButton').setInteractive();
            skipTutorialButton.on("pointerdown", ()=>{
                this.scene.start("Phase1");
            })
        }
    }
}


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase0 extends BasePhase {
    constructor() {
        // Configura a chave de classe
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
        
        // Se a pontuação atingiu 3 pontos, aparece o botão de pular tutorial.
        if (this.score > 3) {
            // Cria o botão de pular o tutorial
            let skipTutorialButton = this.add.image(this.width*0.95, this.height*0.05, 'skipTutorialButton').setScale(this.width/1200).setInteractive();
            skipTutorialButton.on("pointerdown", ()=>{ //Se o botão de pular o tutorial for clicado
                this.scene.start("Phase1"); // Direciona para a fase 1
            })
        }
    }
}


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        // Configura a chave de classe
        super('Phase2', true, 'painting', 'cat', 'animCat', 'pigeonSound', 'artist3')
    }

    // Configura a animação do pombo voando
    create(){
        this.anims.create({
            key: 'animCat', 
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        super.create();
    }

    update(){
        super.update()
    }
}


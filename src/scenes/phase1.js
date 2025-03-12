import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        // Configura a chave de classe
        super('Phase1', true, 'painting', 'pigeon', 'flyPigeon', 'pigeonSound')
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
    }
}


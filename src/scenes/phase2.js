import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        // Configura a chave de classe
        super('Phase2', true, 'painting', 'cat', 'animCat', 'pigeonSound', 'artista3')
    }

    create(){
        this.anims.create({
            key: 'animCat',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        super.create();
    }

    update(){
        super.update()
    }
}


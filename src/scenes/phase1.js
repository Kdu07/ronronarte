import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        // Configura a chave de classe
        super('Phase1', true, 'painting', 'pombo', 'voo', 'pru')
    }

    create(){
        // Animação do pombo voando
        this.anims.create({
            key: 'voo',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        super.create();
    }

    update(){
        super.update()
    }
}


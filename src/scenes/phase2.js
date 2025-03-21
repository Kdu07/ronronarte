import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting2",
            "artistKey":"artist2",
            "textArtist":['Juan...'],
            "textPainting":['Pintura...'],
            "targetKey":"pigeon",
            "animKey":"flyPigeon",
            "soundKey":"soundRat",
            "maxScore": 3
        }

        // Configura a chave de classe
        super('Phase2', configDict)
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


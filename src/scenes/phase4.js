import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase4 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting4",
            "artistKey":"artist4",
            "textArtist":['Oceania...'],
            "textPainting":['Pintura...'],
            "targetKey":"pigeon",
            "animKey":"flyPigeon",
            "soundKey":"soundGecko",
            "maxScore": 3
        }
        
        // Configura a chave de classe e os assets da fase
        super('Phase4', configDict)
    }

    create(){
        // Configura a animação do pombo voando
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        // Chama o create da classe pai
        super.create();
    }

    update(){
        // Chama o update da classe pai
        super.update()
    }
}


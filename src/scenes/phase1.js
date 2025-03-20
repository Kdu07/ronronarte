import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting1",
            "artistKey":"artist1",
            "textArtist":['Michelangelo foi um renomado\nartista italiano do período\nrenascentista. Com formação\nhumanista e influenciado\npela arte clássica, pode-se\ndizer que ele foi um dos\nmaiores artistas do Ocidente'],
            "textPainting":['A obra A criação de Adão fica\nno teto da Capela Sistina e\nrepresenta a passagem bíblica\nem que Deus dá origem à\nhumanidade. Realizado com a\ntécnica do afresco, o quadro\nexpressa harmonia, mistério\ne força divina.'],
            "targetKey":"pigeon",
            "animKey":"flyPigeon",
            "soundKey":"meow",
            "maxScore": 4
        }
        
        // Configura a chave de classe e os assets da fase
        super('Phase1', configDict)
    }

    create(){
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


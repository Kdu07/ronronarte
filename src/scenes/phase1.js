import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        // Cria os textos de contextualização do artista e do quadro
        let textArtist = ['Michelangelo foi um renomado\nartista italiano do período\nrenascentista. Com formação\nhumanista e influenciado\npela arte clássica, pode-se\ndizer que ele foi um dos\nmaiores artistas do Ocidente'];
        let textPainting = ['A obra A criação de Adão fica\nno teto da Capela Sistina e\nrepresenta a passagem bíblica\nem que Deus dá origem à\nhumanidade. Realizado com a\ntécnica do afresco, o quadro\nexpressa harmonia, mistério\ne força divina.'];
        

        // Configura a chave de classe e os assets da fase
        super('Phase1', true, 'painting2', 'pigeon', 'flyPigeon', 'pigeonSound', 'artist3', textArtist, textPainting)
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


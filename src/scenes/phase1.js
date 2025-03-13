import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        // Textos
        let textArtist = ['Michelangelo foi um renomado\nartista italiano do período\nrenascentista. Com formação\nhumanista e influenciado\npela arte clássica, pode-se\ndizer que ele foi um dos\nmaiores artistas do Ocidente'];
        let textPainting = ['A obra A criação de Adão fica\nno teto da Capela Sistina e\nrepresenta a passagem bíblica\nem que Deus dá origem à\nhumanidade. Realizado com a\ntécnica do afresco, o quadro\nexpressa harmonia, mistério\ne força divina.'];
        

        // Configura a chave de classe
        super('Phase1', true, 'painting', 'pigeon', 'flyPigeon', 'pigeonSound', 'artista3', textArtist, textPainting)
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


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase": true,
            "backgroundKey":"painting2",
            "artistKey":"artist2",
            "textArtist":['Juan Luna foi um artista e ativista político filipino da Revolução Filipina. \n\nAs pinturas que fez durante sua trajetória destacam-se pelo seu simbolismo e retratam em grande parte, cenas literárias e históricas.'],
            "textPainting":['O quadro “Spoliarium”  retrata gladiadores moribundos em um circo romano.  \n\nA pintura foi enviada por Luna para a Exposição Nacional de Belas Artes em 1884 em Madri e recebeu medalha de ouro.'],
            "targetKey":"rat",
            "animKey":"animRat",
            "soundKey":"soundRat",
            "maxScore": 5
        }

        // Configura a chave de classe
        super('Phase2', configDict)
    }

    // Configura a animação do pombo voando
    create(){
        super.create();
    }

    update(){
        super.update()
    }
}


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting2",
            "artistKey":"artist2",
            "textArtist":[' '],
            "textPainting":[' '],
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


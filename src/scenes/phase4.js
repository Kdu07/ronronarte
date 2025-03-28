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
            "targetKey":"gecko",
            "animKey":"animGecko",
            "soundKey":"soundGecko",
            "maxScore": 10
        }
        
        // Configura a chave de classe e os assets da fase
        super('Phase4', configDict)
    }

    create(){
        // Chama o create da classe pai
        super.create();
    }

    update(){
        // Chama o update da classe pai
        super.update()
    }
}


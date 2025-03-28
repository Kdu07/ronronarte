import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting1",
            "artistKey":"artist1",
            "textArtist":[' '],
            "textPainting":[' '],
            "targetKey":"pigeon",
            "animKey":"animPigeon",
            "soundKey":"soundPigeon",
            "maxScore": 3
        }
        
        // Configura a chave de classe e os assets da fase
        super('Phase1', configDict)
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


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase3 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting3",
            "artistKey":"artist3",
            "textArtist":['Cheri...'],
            "textPainting":['Pintura...'],
            "targetKey":"pigeon",
            "animKey":"animPigeon",
            "soundKey":"soundPigeon",
            "maxScore": 7
        }
        
        // Configura a chave de classe e os assets da fase
        super('Phase3', configDict)
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


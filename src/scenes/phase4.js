import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase4 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting4",
            "artistKey":"artist4",
            "textArtist":['Margaret Preston é uma das artistas mais importantes para a arte moderna na Austrália. \n\nEm sua trajetória, Margaret sempre envolveu a cultura aborígene em suas obras e foi uma grande defensora da identidade artística australiana.'],
            "textPainting":['O quadro de 1943 tem como título “Design aborígene, com ervilha de Sturt”, onde a autora retrata elementos da cultura australiana.\n\nFoi feito com corte de masonite, nome dado a um tipo de painel de fibras de madeira, e tingido à mão com guache.'],
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


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase4 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting4",
            "artistKey":"artist4",
            "textArtist":['Margaret Preston é uma das artistas mais \nimportantes para a arte da Austrália. Em sua \ntrajetória artística, Margaret buscou envolver \na cultura aborígene em suas obras, tornando \nsuas gravuras a maior expressão da arte \nmoderna australiana.'],
            "textPainting":['O quadro tem como título “Design aborígene, com \nervilha de Sturt”, é datado de 1943, foi feito com corte \nde masonite colorido e foi tingido à mão com guache. \nNele, a autora retrata elementos da cultura australiana.'],
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


import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase3 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting3",
            "artistKey":"artist3",
            "textArtist":['Sem muito apoio, porém determinado a seguir carreira na arte, o artista africano Chéri Samba se aventurou por diversos meios da arte.  \n\nFoi pintor de letreiros publicitários, desenhista de histórias em quadrinhos e autor de pinturas com facetas críticas.'],
            "textPainting":['O quadro foi titulado como “J’aime la couleur” - traduzido como “Eu amo a cor” - e caracteriza-se como um autorretrato do autor Chéri Samba. \n\nConforme o artista, ele está presente dentro de seu próprio trabalho para relatar o que significa ser um artista africano de sucesso no cenário mundial.'],
            "targetKey":"snake",
            "animKey":"animSnake",
            "soundKey":"soundSnake",
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


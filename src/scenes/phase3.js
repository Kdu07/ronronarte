import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase3 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting3",
            "artistKey":"artist3",
            "textArtist":['Sem muito apoio, porém determinado a \nseguir carreira na arte, o artista africano \nChéri Samba foi pintor de letreiros \npublicitários, desenhista de histórias em \nquadrinhos e autor de pinturas com facetas \ncríticas.'],
            "textPainting":['O quadro foi titulado como “J’aime la couleur” - \ntraduzido como “Eu amo a cor” - e caracteriza-se \ncomo um autorretrato do autor Chéri Samba, de modo \nque, conforme o artista, ele está presente dentro de seu \npróprio trabalho para relatar o que significa ser \num artista africano de sucesso no cenário mundial.'],
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


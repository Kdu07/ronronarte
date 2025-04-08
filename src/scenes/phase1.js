import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting1",
            "artistKey":"artist1",
            "textArtist":['Maria Auxiliadora foi uma artista plástica brasileira autodidata que começou suas atividades artísticas já na juventude. \n\nMesmo vítima do câncer, Maria nunca deixou de pintar e, em sua carreira, trouxe visibilidade aos elementos da cultura afro-brasileira.'],
            "textPainting":['Com pintura a óleo e alto relevo, o quadro “Sem Título” faz referência ao candomblé, à umbanda e ao samba. \n\nUma curiosidade é que a artista usou cabelo humano real na confecção do quadro, dando dimensão tátil e sensorial à pintura.'],
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


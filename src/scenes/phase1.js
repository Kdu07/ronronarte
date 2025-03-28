import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase1 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting1",
            "artistKey":"artist1",
            "textArtist":['Maria Auxiliadora foi uma artista plástica \nbrasileira autodidata que começou suas \natividades artísticas já na juventude. Mesmo \nvítima do câncer, Maria nunca deixou de \npintar e, em sua carreira, trouxe visibilidade \naos elementos da cultura afro-brasileira.'],
            "textPainting":['Com pintura a óleo e alto relevo, o quadro \n“Sem Título” faz referência ao candomblé, à umbanda \ne ao samba. Uma curiosidade é que a artista usou \ncabelo humano real na confecção do quadro, dando \ndimensão tátil e sensorial à pintura.'],
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


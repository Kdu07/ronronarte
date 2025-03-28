import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase2 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":true,
            "backgroundKey":"painting2",
            "artistKey":"artist2",
            "textArtist":['Juan Luna foi um artista e ativista político \nfilipino da Revolução Filipina. As pinturas \nque fez durante sua trajetória destacam-se \npelo seu simbolismo e retratam em grande \nparte, cenas literárias e históricas.'],
            "textPainting":['O quadro “Spoliarium”  retrata gladiadores \nmoribundos em um circo romano.  A pintura foi \nenviada por Luna para a Exposição Nacional de \nBelas Artes em 1884 em Madri e recebeu medalha de \nouro.'],
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


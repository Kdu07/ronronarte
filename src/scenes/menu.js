import { completedPhases } from './splashScreen.js';


// Classe de cena a ser exportada
export default class Menu extends Phaser.Scene{
    constructor(){
        // Configura a chave de classe
        super('Menu');
    }

    create() {
        // Cria imagens de background e botão jogar
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu')
        .setDisplaySize(this.scale.width, this.scale.height);
        
        this.startButton = this.add.image(this.scale.width/1.95, this.scale.height/2, 'startButton')
        .setScale(this.scale.width/400)
        .setInteractive({cursor: "pointer"});

        // Quando o botão jogar for clicado direciona para o menu de seleção de níveis
        this.startButton.on("pointerdown", () => {
            this.soundPlay = this.sound.add('soundPlayButton').play();
            // Coloca o jogo em tela cheia
            this.scale.startFullscreen();
            
            setTimeout(() => {
                resizeGame()
            }, 1000);

            setTimeout(() => {
                this.scene.stop('Menu') // Para o menu
                this.scene.start('LevelSelect') // Direciona para a tela de seleção de níveis
            }, 1000);
        });
    };
}



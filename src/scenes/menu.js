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
            
            this.scale.startFullscreen(); // Coloca o jogo em tela cheia
            
            setTimeout(() => {
                this.resizeGame();
                this.scene.start('LevelSelect') // Direciona para a tela de seleção de níveis
                this.scene.stop('Menu') // Para o menu
            }, 1000);
        });

        
    };

    resizeGame() {
        // Facilita a escrita da variável para o tamanho da tela
        let width = window.innerWidth;
        let height = window.innerHeight;
        let gameRatio = 2 / 1; // Proporção fixa de 2:1

        // Ajusta a largura e altura para manter a proporção
        if (width / height > gameRatio) {
            width = height * gameRatio;  // Mantém a altura e ajusta a largura
        } else {
            height = width / gameRatio;  // Mantém a largura e ajusta a altura
        }

        this.game.scale.resize(width, height);
    }
}



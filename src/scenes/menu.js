// Classe de cena a ser exportada
export default class Menu extends Phaser.Scene{
    constructor(){
        // Configura a chave de classe
        super('Menu');
    }

    create() {
        // Adiciona imagens de background e botão jogar
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu').setDisplaySize(this.scale.width, this.scale.height);
        this.startButton = this.add.image(this.scale.width/1.95, this.scale.height/2, 'startButton').setScale(this.scale.width/800).setInteractive({cursor: "pointer"});

        // Quando botão start for clicado direciona para a cena Tutorial
        this.startButton.on("pointerdown", () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }

            setTimeout(() => {
                this.resizeGame();
                this.scene.start('LevelSelect')
                this.scene.stop('Menu')
            }, 2000);


            
        });
        /*
        this.fullscreenButton = this.add.image(this.scale.width/7, this.scale.height/1.18, 'fullscreen')
        .setScale(this.scale.width/4000)
        .setInteractive()
        .on('pointerdown', () => {
            
        });
        */
    };

    resizeGame() {
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



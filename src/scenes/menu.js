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
            this.scene.start('LevelSelect')
            this.scene.stop('Menu')
        });

        this.fullscreenButton = this.add.image(this.scale.width/7, this.scale.height/1.18, 'fullscreen')
        .setScale(this.scale.width/4000)
        .setInteractive()
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }

            setTimeout(() => {
                this.resizeGame();
            }, 200);
        });
    };
}



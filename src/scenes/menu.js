// Classe de cena a ser exportada
export default class Menu extends Phaser.Scene{
    constructor(){
        // Configura a chave de classe
        super('Menu');
    }

    create() {
        // Adiciona imagens de background e botão jogar
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu').setScale(0.60);
        const botaoStart = this.add.image((this.scale.width/2) + 10, this.scale.height/2, 'botaoStart').setInteractive({cursor: "pointer"}).setScale(2);
        
        // Quando botão start for clicado direciona para a cena Tutorial
        botaoStart.on("pointerdown", () => {
            this.scene.start('Tutorial')
            this.scene.stop('Menu')
        });

        // Ajusta a o jogo de acordo com a tela
        this.scale.on('resize', (gameSize) => this.resizeGame(gameSize), this);
    };

    resizeGame(gameSize) {
        // Define o tamanho da tela
        const {width, height} = gameSize;

        if (this.bgMenu) {
            // Ajusta a escala proporcionalmente
            this.bgMenu.setPosition(width / 2, height / 2);
            this.bgMenu.setScale(Math.min(width / 2000, height / 1400)); 
        }

        if (this.botaoStart) {
            // Ajusta posição do botão start
            this.botaoStart.setPosition(width / 2 + 10, height / 2);
        }
    };
}



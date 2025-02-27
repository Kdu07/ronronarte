export default class Menu extends Phaser.Scene{
    constructor(){
        super('Menu');
    }

    create() {
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu').setScale(0.60);
        const botaoStart = this.add.image((this.scale.width/2) + 10, this.scale.height/2, 'botaoStart').setInteractive({cursor: "pointer"}).setScale(2);

        botaoStart.on("pointerdown", () => {
            this.scene.start('Tutorial')
        });

        this.scale.on('resize', (gameSize) => this.resizeGame(gameSize), this);

    };

    resizeGame() {

        const {width, height} = gameSize;

        if (this.bgMenu) {
            this.bgMenu.setPosition(width / 2, height / 2);
            this.bgMenu.setScale(Math.min(width / 800, height / 600)); // Ajusta a escala proporcionalmente
        }

        if (this.botaoStart) {
            this.botaoStart.setPosition(width / 2 + 10, height / 2);
    }
    };
}
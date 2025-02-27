export default class Menu extends Phaser.Scene{
    constructor(){
        super('Menu');
    }

    create() {
        this.bgMenu = this.add.image(587, 300, 'bgMenu').setScale(0.52)
        const botaoStart = this.add.image(this.scale.width/2, this.scale.height/2, 'botaoStart').setInteractive({cursor: "pointer"}).setScale(2)

        botaoStart.on("pointerdown", () => {
            this.scene.start('Tutorial')
        })

        
    }
}
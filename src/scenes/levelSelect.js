export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");
    }
    create() {
        this.selectBg = this.add.image(this.scale.width/2, this.scale.height/2, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
        this.square = this.add.image(this.scale.width/4, this.scale.height/2, 'squareFrame').setScale(0.5).setInteractive();
        this.square2 = this.add.image(this.scale.width/2, this.scale.height/2, 'squareFrame').setScale(0.5).setInteractive();
      
      
        this.square2.on('pointerdown', () => {
            this.scene.start('Criative');
            this.scene.stop();
        });

        this.square2.depth = 1;
        this.square.depth = 1;

        this.square.on('pointerdown', () => {
            this.scene.start('Phase1')
            this.scene.stop();
        });
    };

    update() {

    };

}
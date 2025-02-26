export default class Tutorial extends Phaser.Scene {
    constructor(){
        super('Tutorial')
    }
    create(){
        this.characterMove = true;
        let bg = this.add.image(this.scale.width/2, this.scale.height/2, 'bgTutorial');

        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.character = this.add.sprite(0, 0, 'pombo').setScale(1.5).setFlip(true, false);
        this.character.play('fly');
    }
    update(){
        /*
        if (this.character.x <= this.scale.width/2 || ){
            
        }
        */
    }
}
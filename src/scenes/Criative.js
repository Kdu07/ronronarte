export default class Criative extends Phaser.Scene {
    constructor(){
        super("Criative")
    };
    

    
    create() {
        this.add.image(this.scale.width/2, this.scale.height/2, 'screenCriative');
        
    };

    update() {

    };

    
}
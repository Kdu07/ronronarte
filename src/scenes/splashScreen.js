export default class SplashScreen extends Phaser.Scene {
    constructor(){
        super('SplashScreen');
    }
    preload(){
        this.load.image('tinta1', './assets/tinta1.png');
        this.load.image('splash', './assets/splash.png');
        this.load.spritesheet('pombo', './assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
        this.load.audio('pru', './assets/audios/pru.mp3');
        this.load.image('PauseBtn', './assets/botões/pause.png');
        this.load.image('quadro', './assets/quadro.png');
        this.load.image('artista', './assets/artista.png');
        this.load.image('paleta', './assets/paleta.png');
        this.load.video('vitoria', './assets/tela_photoshop_1.mp4');
        this.load.image('star', './assets/star.png');
        this.load.image('frase', './assets/frase.png');
        this.load.image('recompensa', './assets/recompensa.png');
        this.load.image('mask', './assets/mask.png');
        this.load.image('catup', './assets/catup.png');
        this.load.image('bgTutorial', './assets/larger_tiled_background.jpg');
        this.load.image('textBox', './assets/textBox.png');
    }

    create(){
        const c1500 = 0; //1500;
        const c3000 = 0; //3000;

        this.cameras.main.fadeIn(c1500, 0, 0, 0)
        this.add.image(this.scale.width/2, this.scale.height/2,'catup').setScale(0.5);
        
        this.time.delayedCall(c3000, () => {
            this.cameras.main.fadeOut(c1500, 0, 0, 0);
            
            // Aguarda o fadeOut antes de iniciar a próxima cena
            this.time.delayedCall(c1500, () => {
                this.scene.start('Phase1');
                this.scene.stop('SplashScreen');
            }); 
        });          
    }
}
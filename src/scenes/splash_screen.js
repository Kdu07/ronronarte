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
    }

    create(){
        this.add.text(0, 0, 'Cat-up', {fontSize:'45px', fill:'#FFFFFF'})
    }
}
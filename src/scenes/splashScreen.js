// Classe de cena a ser exportada
export default class SplashScreen extends Phaser.Scene {
    constructor(){
        // Configura a chave de classe
        super('SplashScreen');
    }
    preload(){
        // Carrega todos os assets do jogo
        this.load.image('tinta1', './assets/tinta1.png');
        this.load.image('textArtistBox', './assets/textArtistBox.png');
        this.load.image('splash', './assets/splash.png');
        this.load.spritesheet('pombo', './assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
        this.load.audio('pru', './assets/audios/pru.mp3');
        this.load.image('PauseBtn', './assets/botões/pause.png');
        this.load.image('quadro', './assets/quadro.png');
        this.load.image('artista3', './assets/artista3.png');
        this.load.image('paleta', './assets/paleta.png');
        this.load.image('bgVictory', './assets/bgVictory.png');
        this.load.image('star', './assets/star.png');
        this.load.image('frase', './assets/frase.png');
        this.load.image('recompensa', './assets/recompensa.png');
        this.load.image('bgWhite', './assets/bgWhite.png');
        this.load.image('catup', './assets/catup.png');
        this.load.image('bgTutorial', './assets/larger_tiled_background.jpg');
        this.load.image('textBox', './assets/textBox.png');
        this.load.image('borda', './assets/borda.png');
        this.load.image('bgMenu', './assets/expanded_startscreen.png');
        this.load.image('botaoStart', './assets/botões/botao_start_preto.png');
        this.load.image('working', './assets/working.png');
    }

    create(){
        // Adiciona fade in na splash screen 
        this.cameras.main.fadeIn(1500, 0, 0, 0)
        this.add.image(this.scale.width/2, this.scale.height/2,'catup').setScale(0.5);

        // Adiciona fade out na splash screen depois de 3 segundos
        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut(1500, 0, 0, 0);
            
            // Aguarda o fadeOut antes de iniciar a próxima cena
            this.time.delayedCall(1500, () => {
                this.scene.stop('SplashScreen'); // Para a cena atual
                this.scene.start('Menu'); // Inicia a cena Menu
            }); 
        });          
    }
}
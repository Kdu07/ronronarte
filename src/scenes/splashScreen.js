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
        this.load.spritesheet('pigeon', './assets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
        this.load.audio('pigeonSound', './assets/audios/pru.mp3');
        this.load.image('pauseBtn', './assets/botões/pause.png');
        this.load.image('painting', './assets/painting.png');
        this.load.image('painting2', './assets/painting2.png');
        this.load.image('painting3', './assets/painting3.png');
        this.load.image('artist3', './assets/artista3.png');
        this.load.image('palette', './assets/paleta.png');
        this.load.image('bgVictory', './assets/bgVictory.png');
        this.load.image('star', './assets/star.png');
        this.load.image('phrase', './assets/frase.png');
        this.load.image('reward', './assets/recompensa.png');
        this.load.image('bgWhite', './assets/bgWhite.png');
        this.load.image('catup', './assets/catup.png');
        this.load.image('bgTutorial', './assets/larger_tiled_background.jpg');
        this.load.image('textBox', './assets/textBox.png');
        this.load.image('frame', './assets/frame.png');
        this.load.image('frame2', './assets/frame2.png');
        this.load.image('bgMenu', './assets/expanded_startscreen.png');
        this.load.image('startButton', './assets/botões/botao_start_preto.png');
        this.load.image('skipTutorialButton', './assets/botões/botao_pular.png');
        this.load.image('working', './assets/working.png');
        this.load.image('pinkSplash', './assets/pinkSplash.png');
        this.load.image('blueSplash', './assets/blueSplash.png');
        this.load.image('greenSplash', './assets/greenSplash.png');
        this.load.image('purpleSplash', './assets/purpleSplash.png');
        this.load.image('yellowSplash', './assets/splash-paw-yellow.png');
        this.load.image('optionsBtn', './assets/botões/botao_opcoes_corr_preto.png');
        this.load.image('screenCriative', 'assets/tela_branca.png');
        this.load.image('selectBg', 'assets/textBoxFuncional.png');
        this.load.image('squareFrame','assets/moldura_quadrado.png');
        this.load.image('juanPainting', '/assets/JuanPixelAart.png');
        this.load.image('buttonCriative', '/assets/botões/botao_criativo.png');
        this.load.image('teste', '/assets/575x56.png');
        this.load.image('selectTutorial', 'assets/Select_Tutorial.png');
        this.load.image('selectCriative', 'assets/Select_Criativo.png');
        this.load.image('selectPhasesUnf', 'assets/Select_PhasesUnf.png');
        this.load.image('selectPhase1', 'assets/Select_Phase1.png');
        this.load.spritesheet('cat', './assets/cat.png', { frameWidth: 64, frameHeight:64 });
        this.load.image('continueBtn', './assets/botões/botao_continuar_preto.png');
        this.load.image('fullscreen', './assets/fullscreen.png');
    }

    create(){    
        // Define e armezena a duração do fadeIn e do fadeOut
        let time1500 = 1500; 
        let time3000 = 3000;

        // Adiciona fade in na splash screen
        this.cameras.main.fadeIn(time1500, 0, 0, 0) // Aplica um efeito de fade-in que escurece a tela
        this.add.image(this.scale.width/2, this.scale.height/2,'catup').setScale(0.5);

        // Adiciona fade out na splash screen depois de 3 segundos
        this.time.delayedCall(time3000, () => {
            this.cameras.main.fadeOut(time1500, 0, 0, 0); // Aplica um efeito de fade-out que escurece a tela
            
            // Aguarda o fadeOut antes de iniciar a próxima cena
            this.time.delayedCall(time1500, () => {
                this.scene.stop('SplashScreen'); // Para a cena atual
                this.scene.start('Menu'); // Inicia a cena Menu
            }); 
        });          
    }

    resizeGame() {
        // Armazena as dimensões da tela do navegador
        let width = window.innerWidth;
        let height = window.innerHeight;
        let gameRatio = 2 / 1; // Mantém a proporção 2:1
    
        // Ajusta a proporção do jogo para a proporção pré-definida
        if (width / height > gameRatio) {
            width = height * gameRatio;
        } else {
            height = width / gameRatio;
        }
    
        game.scale.resize(width, height); // Chama a função para ajustar as dimensões do jogo de acordo com a proporção definida
    }
}
// Classe de cena a ser exportada
export default class SplashScreen extends Phaser.Scene {
    constructor(){
        // Configura a chave de classe
        super('SplashScreen');
    }
    preload(){
        // Carrega todos os assets do jogo
        // Quadros
        this.load.image('painting1', './assets/paintings/painting1.png');
        this.load.image('painting2', './assets/paintings/painting2.png');
        this.load.image('painting3', './assets/paintings/painting3.png');
        this.load.image('painting4', './assets/paintings/painting4.png');
        
        // Artistas
        this.load.image('artist1', './assets/artists/artist1.png');
        this.load.image('artist2', './assets/artists/artist2.png');
        this.load.image('artist3', './assets/artists/artist3.png');
        this.load.image('artist4', './assets/artists/artist4.png');

        //Splashs
        this.load.image('splash', './assets/splashs/splash.png');
        this.load.image('pinkSplash', './assets/splashs/pinkSplash.png');
        this.load.image('blueSplash', './assets/splashs/blueSplash.png');
        this.load.image('greenSplash', './assets/splashs/greenSplash.png');
        this.load.image('purpleSplash', './assets/splashs/purpleSplash.png');
        this.load.image('yellowSplash', './assets/splashs/splash-paw-yellow.png');

        //Botões
        this.load.image('selectTutorial', './assets/buttons/Select_Tutorial.png');
        this.load.image('selectCriative', './assets/buttons/Select_Criativo.png');
        this.load.image('selectPhase1', './assets/buttons/Select_Phase1.png');
        this.load.image('selectPhase2', './assets/buttons/Select_Phase2.png');
        this.load.image('selectPhase3', './assets/buttons/Select_Phase3.png');
        this.load.image('selectPhase4', './assets/buttons/Select_Phase4.png');
        this.load.image('startButton', './assets/buttons/botao_start_preto.png');
        this.load.image('skipTutorialButton', './assets/buttons/botao_pular.png');
        this.load.image('optionsBtn', './assets/buttons/botao_opcoes_corr_preto.png');
        this.load.image('pauseBtn', './assets/buttons/pause.png');
        this.load.image('buttonCriative', '/assets/buttons/botao_criativo.png');
        this.load.image('continueBtn', './assets/buttons/botao_continuar_preto.png');
        this.load.spritesheet('spriteLoading', './assets/buttons/spriteLoading1.png', {frameWidth: 292, frameHeight: 68.16});
        this.load.image('palette', './assets/buttons/paleta.png');

        //Backgrounds
        this.load.image('bgMenu', './assets/backgrounds/expanded_startscreen.png');
        this.load.image('bgTutorial', './assets/backgrouds/larger_tiled_background.jpg');
        this.load.image('screenCriative', 'assets/backgrounds/tela_branca.png');
        this.load.image('selectBg', 'assets/backgrounds/textBoxFuncional.png');
        this.load.image('bgVictory', './assets/backgrounds/bgVictory.png');
        this.load.image('bgWhite', './assets/backgrounds/bgWhite.png');

        //Misc
        this.load.image('tinta1', './assets/misc/tinta1.png');
        this.load.image('textArtistBox', './assets/misc/textArtistBox.png');
        this.load.image('textBox', './assets/misc/textBox.png');
        this.load.image('frame', './assets/misc/frame.png');
        this.load.image('frame2', './assets/misc/frame2.png');
        this.load.image('star', './assets/misc/star.png');
        this.load.image('phrase', './assets/misc/frase.png');
        this.load.image('reward', './assets/misc/recompensa.png');
        this.load.image('catup', './assets/misc/catup.png');
        this.load.spritesheet('cat', './assets/misc/cat.png', { frameWidth: 64, frameHeight:64 });
        this.load.image('squareFrame','assets/misc/moldura_quadrado.png');
        this.load.image('teste', '/assets/misc/575x56.png');

        //Alvos
        this.load.spritesheet('pigeon', './assets/targets/pombo.png', { frameWidth: 64, frameHeight:64 }); 
        this.load.audio('pigeonSound', './assets/audios/pru.mp3');
        
    }

    create(){    
        // Define e armezena a duração do fadeIn e do fadeOut
        let time1500 = 1500; 
        let time3000 = 3000;

        // Adiciona fade in na splash screen
        this.cameras.main.fadeIn(time1500, 0, 0, 0) // Aplica um efeito de fade-in que escurece a tela
        this.add.image(this.scale.width/2, this.scale.height/2,'catup').setScale(1.0);

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
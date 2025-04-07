export var completedPhases = { Tutorial: false, Phase1: false, Phase2: false, Phase3: false, Phase4: false, CreativeMode: false};

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

        // Splashs
        this.load.image('splashPhases', './assets/splashs/splashPhases.png');
        this.load.image('splashTutorial', './assets/splashs/splashTutorial.png');

        this.load.image('splashPaw1', './assets/splashs/splashPaw1.png');
        this.load.image('splashPaw2', './assets/splashs/splashPaw2.png');
        this.load.image('splashPaw3', './assets/splashs/splashPaw3.png');
        this.load.image('splashPaw4', './assets/splashs/splashPaw4.png');
        this.load.image('splashPaw5', './assets/splashs/splashPaw5.png');

        this.load.image('splashHeart1', './assets/splashs/splashHeart1.png');
        this.load.image('splashHeart2', './assets/splashs/splashHeart2.png');
        this.load.image('splashHeart3', './assets/splashs/splashHeart3.png');
        this.load.image('splashHeart4', './assets/splashs/splashHeart4.png');
        this.load.image('splashHeart5', './assets/splashs/splashHeart5.png');

        this.load.image('splashSplash1', './assets/splashs/splashSplash1.png');
        this.load.image('splashSplash2', './assets/splashs/splashSplash2.png');
        this.load.image('splashSplash3', './assets/splashs/splashSplash3.png');
        this.load.image('splashSplash4', './assets/splashs/splashSplash4.png');
        this.load.image('splashSplash5', './assets/splashs/splashSplash5.png');

        this.load.image('splashRandom', './assets/splashs/splashRandom.png');

        //Botões
        this.load.image('selectTutorial', './assets/buttons/Select_Tutorial.png');
        this.load.image('selectCriative', './assets/buttons/Select_Criativo.png');
        this.load.image('selectPhase1', './assets/buttons/Select_Phase1.png');
        this.load.image('selectPhase2', './assets/buttons/Select_Phase2.png');
        this.load.image('selectPhase3', './assets/buttons/Select_Phase3.png');
        this.load.image('selectPhase4', './assets/buttons/Select_Phase4.png');
        this.load.image('startButton', './assets/buttons/botao_start_preto.png');
        this.load.image('skipTutorialButton', './assets/buttons/botao_pular.png');
        this.load.image('pauseBtn', './assets/buttons/pause.png');
        this.load.image('buttonCriative', './assets/buttons/botao_criativo.png');
        this.load.image('continueBtn', './assets/buttons/botao_continuar_preto.png');
        this.load.spritesheet('spriteLoading', './assets/buttons/loading.png', {frameWidth: 292, frameHeight: 68.16});
        this.load.image('palette', './assets/buttons/paleta.png');
        this.load.spritesheet('buttonPlay', './assets/buttons/spritesheet-play.png', {frameWidth: 128, frameHeight: 64});
        this.load.image('buttonPrint', './assets/buttons/buttonPrint.png');
        this.load.image('tutorialButton', './assets/buttons/tutorialButtonBlue.png');
        this.load.image('phase1Button', './assets/misc/phase1Button.png');
        this.load.image('phase2Button', './assets/buttons/phase2Button.png');
        this.load.image('phase3Button', './assets/buttons/phase3Button.png');
        this.load.image('phase4Button', './assets/misc/phase4Button.png');
        this.load.image('phase1ButtonBW', './assets/buttons/phase1Button_bw.png');
        this.load.image('phase2ButtonBW', './assets/buttons/phase2Button_bw.png');
        this.load.image('phase3ButtonBW', './assets/buttons/phase3button_bw.png');
        this.load.image('phase4ButtonBW', './assets/buttons/phase4Button_bw.png');
        this.load.image('criativeButton', './assets/buttons/criativeButton.png');
        this.load.image('criativeButtonBW', './assets/buttons/criativeButton_bw.png');


        //Backgrounds
        this.load.image('bgMenu', './assets/backgrounds/expanded_startscreen.png');
        this.load.image('bgTutorial', './assets/backgrounds/larger_tiled_background.jpg');
        this.load.image('screenCriative', './assets/backgrounds/tela_branca.png');
        this.load.image('selectBg', './assets/backgrounds/textBoxFuncional.png');
        this.load.image('bgVictory', './assets/backgrounds/bgVictory.png');
        this.load.image('bgWhite', './assets/backgrounds/bgWhite.png');
        this.load.image('bgVictoryScene', './assets/backgrounds/bgVictoryScene.png');

        //Misc
        this.load.image('textArtistBox', './assets/misc/textArtistBox.png');
        this.load.image('textBox', './assets/misc/textBox.png');
        this.load.image('frame', './assets/misc/frame.png');
        this.load.image('phrase', './assets/misc/frase.png');
        this.load.image('reward', './assets/misc/rewardText.png');
        this.load.image('catup', './assets/misc/catup.png');
        this.load.spritesheet('cat', './assets/misc/cat.png', { frameWidth: 64, frameHeight:64 });
        this.load.image('scoreStar', './assets/misc/scoreStar.png');
        this.load.image('victoryTextBox', './assets/misc/victoryTextBox.png');
        this.load.image('squareFrame', './assets/misc/moldura_quadradoo.png');
        this.load.image('scoreStar', './assets/misc/scoreStar.png');
        this.load.image('victoryTextBox', './assets/misc/victoryTextBox.png');
        this.load.image('rotate', './assets/misc/rotate.png');
        this.load.image('circle', './assets/misc/circle.png');
        this.load.image('logoInteli','./assets/misc/logoInteli.png');
        this.load.image('drPet','./assets/misc/drPet.png');
        this.load.image('frameBW', './assets/misc/moldura_bw.png');
        this.load.image('lock', './assets/misc/lock.png');
        this.load.image('takeAPrintScreen', './assets/misc/takeAPrintScreen.png');

        //Alvos
        this.load.spritesheet('pigeon', './assets/targets/pigeon.png', { frameWidth: 64, frameHeight:64 });
        this.load.spritesheet('rat', './assets/targets/rat.png', { frameWidth: 64, frameHeight:64 }); 
        this.load.spritesheet('gecko', './assets/targets/gecko.png', { frameWidth: 64, frameHeight:64 });
        this.load.spritesheet('snake', './assets/targets/snake.png', { frameWidth: 64, frameHeight:64 });
        
        //Audios
        this.load.audio('soundClick', './assets/audios/soundClick.mp3');
        this.load.audio('soundContinueButton', './assets/audios/soundContinueButton.mp3');
        this.load.audio('soundGecko', './assets/audios/soundGecko.mp3');
        this.load.audio('soundPauseButton', './assets/audios/soundPauseButton.mp3');
        this.load.audio('soundPigeon', './assets/audios/soundPigeon.mp3');
        this.load.audio('soundPlayButton', './assets/audios/soundPlayButton.mp3');
        this.load.audio('soundRat', './assets/audios/soundRat.mp3');
        this.load.audio('soundSplash', './assets/audios/soundSplash.mp3');
        this.load.audio('soundStar', './assets/audios/soundStar.mp3');
        this.load.audio('soundSnake', './assets/audios/soundSnake.mp3');        
    }

    create(){    
        this.anims.create({
            key: 'animPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        this.anims.create({
            key: 'animRat', 
            frames: this.anims.generateFrameNumbers('rat', {start: 0, end: 6}), // Define os frames do spritesheet que serão usados
            frameRate: 15, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        this.anims.create({
            key: 'animGecko', // Nome da animação
            frames: this.anims.generateFrameNumbers('gecko', {start:0, end:5}), 
            frameRate: 7,
            repeat: -1
        })

        this.anims.create({
            key: 'animSnake', // Nome da animação
            frames: this.anims.generateFrameNumbers('snake', {start:0, end:6}), 
            frameRate: 7,
            repeat: -1
        })

        this.anims.create({
            key: 'SpriteLoading', // Nome da animação
            frames: this.anims.generateFrameNumbers('spriteLoading', {start:0, end:5}), 
            frameRate: 3, 
            repeat: 0
        })
        
        // Define e armezena a duração do fadeIn e do fadeOut
        let time1500 = 1500; 
        let time3000 = 3000;

        // Adiciona fade in na splash screen
        this.cameras.main.fadeIn(time1500, 0, 0, 0) // Aplica um efeito de fade-in que escurece a tela
        this.add.image(this.scale.width/2, this.scale.height/2,'catup').setScale(this.scale.width/700);

        // Adiciona fade out na splash screen depois de 3 segundos
        this.time.delayedCall(time3000, () => {
            if (window.innerWidth < window.innerHeight){
                this.add.text(this.scale.width/14, this.scale.height*0.8,
                    '                              Para iniciar o jogo, \nvire seu dispositivo na horizontal e recarregue a página', 
                    {fontFamily:'font1', fontSize:this.scale.width/30, fill:'#FFFFFF'})
                this.add.image(this.scale.width/2, this.scale.height/8,'rotate').setScale(this.scale.width/1200);
            }else{
                // Aguarda o fadeOut antes de iniciar a próxima cena
                this.time.delayedCall(time1500, () => {
                    this.scene.stop('SplashScreen'); // Para a cena atual
                    this.scene.start('Menu'); // Inicia a cena Menu
                });
    
                this.cameras.main.fadeOut(time1500, 0, 0, 0); // Aplica um efeito de fade-out que escurece a tela
            } 
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
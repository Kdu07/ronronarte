import BasePhase from "./basePhase.js";

export default class CreativeMode extends BasePhase{
    constructor(){
        let configDict = {
            "completePhase":false,
            "backgroundKey":"bgWhite",
            "artistKey":"artist3",
            "textArtist":['Cheri...'],
            "textPainting":['Pintura...'],
            "targetKey":"pigeon",
            "animKey":"animPigeon",
            "soundKey":"soundPigeon"
        }
        
        // Configura a chave de classe e os assets da fase
        super('CreativeMode', configDict)
    }

    create(){
        // Facilita a escrita da variável para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;

        // A função create do modo criativo herda da função create da clase BasePhase
        super.create();       
        
        // Cria as funcionalidades únicas do modo criativo
        this.createPalette();

        this.soundSplash = this.sound.add('soundClick')
    }

    createPalette() {
        // Cria os botões de segurar para a paleta e print
        this.createPaletteButton();
        this.createPrintButton();
        
        // Adiciona e configura o background do menu
        this.bgMenu = this.add.image(this.width/2, this.height/2, 'bgVictory')
        .setScale(this.width/580)
        .setVisible(false)
        .setDepth(20);
        
        this.frameMenu = this.add.image(this.bgMenu.x, this.bgMenu.y, 'frame')
        .setScale(this.width/700)
        .setVisible(false)
        .setDepth(20);

        // Array com os splashes de tinta
        this.splashes = [
            ['splashPaw1', 'splashPaw2', 'splashPaw3', 'splashPaw4', 'splashPaw5', 'splashRandom'],
            ['splashSplash1', 'splashSplash2', 'splashSplash3', 'splashSplash4', 'splashSplash5'],
            ['splashHeart1', 'splashHeart2', 'splashHeart3', 'splashHeart4', 'splashHeart5']
        ];

        // Array com tags dos alvos, animações e sons
        this.targets = ['pigeon', 'rat', 'snake', 'gecko'];
        this.anims = ['animPigeon', 'animRat','animSnake', 'animGecko'];
        this.sounds = ['soundPigeon','soundRat', 'soundSnake', 'soundGecko']

        // Splash selecionado, define o primeiro como padrão
        this.selectedSplash = this.splashes[0][0];

        // Cria os botões de splash
        this.splashesButtons = this.add.group();

        // Configura as propriedades de botão para cada splash do array de splashes
        this.splashes.forEach((splash, c) => {
            splash.forEach((splash, i) => {
                // Ajusta a posição de cada splash em colunas (i) e fileiras (c)
                let splashButton = this.add.image(
                    this.bgMenu.x - this.bgMenu.displayWidth/2.4 + (this.bgMenu.displayWidth/6 * (i)), 
                    this.bgMenu.y - this.bgMenu.displayHeight/3 + (this.bgMenu.displayHeight/5 * (c)), splash)
                    .setInteractive()
                    .setScale(this.width / 700)
                    .setVisible(false)
                    .setDepth(20);

                // Quando cada splash é clicado
                splashButton.on('pointerdown', () => {
                    // Configura o splash clicado para ser o utilizado no jogo
                    this.selectedSplash = splash;
                    
                    // Desativa o menu de paleta
                    this.toggleMenu(false);
                });

                // Adiciona o botão no grupo de botões
                this.splashesButtons.add(splashButton);
            });
        });

        // Configura as propriedades de botão para cada alvo do array de alvos
        this.targets.forEach((target, i) => {
            let targetButton = this.add.image(
                // Ajusta a posição de cada splash em colunas (i)
                this.bgMenu.x - this.bgMenu.displayWidth/2.4 + (this.bgMenu.displayWidth/6 * (i)),
                this.bgMenu.y - this.bgMenu.displayHeight/3.5 + (this.bgMenu.displayHeight/5 * (3)), target)
                .setInteractive()
                .setScale(this.width / 700)
                .setVisible(false)
                .setDepth(20);

                // Quando cada botão de alvo é clicado
                targetButton.on('pointerdown', () => {
                    // Configura o alvo clicado para ser o utilizado no jogo
                    this.targetKey = target;
                    this.animKey = this.anims[i];
                    this.soundKey = this.sounds[i];

                    // Desativa o menu de paleta
                    this.toggleMenu(false);
                });

            this.splashesButtons.add(targetButton);
        });
    }

    // Cria e configura o botão de paleta
    createPaletteButton(){
        // Define que não está sendo pressionado
        this.paletteHold = false;
        
        // Adiciona o asset do botão na tela
        this.paletteBtn = this.add.image(this.width / 1.065, this.height * 0.08, 'palette')
        .setScale(this.width / 9000)
        .setInteractive()
        .setDepth(20);
      
        // Adiciona o asset do carregamento na tela
        this.paletteLoad = this.add.sprite(this.paletteBtn.x - this.paletteBtn.displayWidth*1.5, this.paletteBtn.y, 'spriteLoading')
        .setScale(this.width/200)
        .setInteractive()
        .setVisible(false)
        .setDepth(20);

        // Quando o mouse clica o botão, define a variavel de segurar como true
        this.paletteBtn.on('pointerdown', () => {
            this.paletteHold = true
        });

        // Quando o mouse solta o botão, define a variavel de segurar como false
        this.paletteBtn.on('pointerup', () => {
            this.paletteHold = false
        });
    }

    // Cria e configura o botão de print
    createPrintButton(){
        // Define que não está sendo pressionado
        this.printHold = false;
        
        // Adiciona o asset do botão na tela
        this.printBtn = this.add.image(this.width / 2, this.height * 0.08, 'buttonPrint')
        .setDepth(20)
        .setScale(this.width/400)
        .setInteractive();
      
        // Adiciona o asset do carregamento na tela
        this.printLoad = this.add.sprite(this.printBtn.x + this.printBtn.displayWidth*1.5, this.printBtn.y, 'spriteLoading')
        .setScale(this.width/200)
        .setInteractive()
        .setVisible(false)
        .setDepth(20);

        // Quando o mouse clica o botão, define a variavel de segurar como true
        this.printBtn.on('pointerdown', () => {
            this.printHold = true
        });

        // Quando o mouse solta o botão, define a variavel de segurar como false
        this.printBtn.on('pointerup', () => {
            this.printHold = false
        });
        
    }
        
    //A função update do modo criativo herda da função update da clase BasePhase
    update(){
        super.update();

        // Confere se os botões estão sendo clicados
        this.updatePaletteButton();
        this.updatePrintButton();
    }

    // Atualiza o botão de paleta
    updatePaletteButton(){
        // Se o botão está sendo segurado
        if (this.paletteHold){
            // Deixa o botão e o carregamento visíveis
            this.paletteLoad.setVisible(true);
            this.paletteLoad.anims.play('SpriteLoading',true);

            // Se o sprite de carregamento chega no último frame
            if (this.paletteLoad.anims.currentFrame.index == 5){
                // Reseta o carregamento e o deixa invisível
                this.paletteLoad.anims.stop().setFrame(0).setVisible(false);
                this.paletteHold = false;

                // Ativa o menu de paleta
                let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
                this.toggleMenu(!splashMenuIsVisible);
            }
        }else{
            // Se o botão não está sendo segurado, reseta o carregamento
            this.paletteLoad.anims.stop().setFrame(0).setVisible(false);
        }
    }

    // Atualiza o botão de print
    updatePrintButton(){
        // Se o botão está sendo segurado
        if (this.printHold){
            // Deixa o botão e o carregamento visíveis
            this.printLoad.setVisible(true);
            this.printLoad.anims.play('SpriteLoading',true);

            // Se o sprite de carregamento chega no último frame
            if (this.printLoad.anims.currentFrame.index == 5){
                // Reseta o carregamento e o deixa invisível
                this.printLoad.anims.stop().setFrame(0).setVisible(false);
                this.printHold = false;

                // Ativa o modo print
                this.printMode();
            }
        }else{
            // Se o botão não está sendo segurado, reseta o carregamento
            this.printLoad.anims.stop().setFrame(0).setVisible(false);
        }
    }

    clickTarget(){
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            if(this.target != null){
                
                // Se o ponteiro está no do alvo
                if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                    this.stopped = true; // Alvo para de se movimentar

                    // Para o som do alvo
                    if(this.soundTarget){
                        this.soundTarget.stop();
                    }

                    this.soundSplash.play({ volume: 0.5 }); // Toca o som configurado quando o alvo é clicado
                    this.time.delayedCall(1000, () => {
                        this.soundSplash.stop(); // Para o som do clique após 1000ms (1s)
                    });

                    this.target.destroy(); // Destrói o alvo
                    
                    // Cria um splash no local do clique
                    // Se o splash selecionado foi o aleatório
                    if (this.selectedSplash == 'splashRandom'){
                        // Seleciona um splash com base em índices aleatórios
                        let rand1 = Phaser.Math.Between(0, 2);
                        let rand2 = Phaser.Math.Between(0, 4);
                        let randSplash = this.splashes[rand1][rand2]

                        // Adiciona o splash selecionado na tela
                        this.splash = this.add.image(pointer.x, pointer.y, randSplash)
                        .setScale(this.width/400)
                        .setDepth(0.1);
                    }else{
                        // Adiciona o splash selecionado na tela
                        this.splash = this.add.image(pointer.x, pointer.y, this.selectedSplash)
                        .setScale(this.width/400)
                        .setDepth(0.1);
                    }
                    
                    // Adiciona um novo alvo
                    this.spawnTarget();
                    this.target.setDepth(20);
                }
            }
        });
    }

    // Função que mostra e esconde os botões da paleta
    // Recebe true ou false como parâmetro
    toggleMenu(show){
        // Configura a visibilidade de cada botão
        this.splashesButtons.getChildren().forEach(button =>{
            button.setVisible(show);
        });

        // Configura a visibilidade do background do menu
        this.bgMenu.setVisible(show)
        this.frameMenu.setVisible(show)

        // Destrói ou adiciona alvos de acordo com a boolean passada
        if(show){
            this.target.destroy();
            this.soundTarget.pause()
        } else{
            this.spawnTarget();
            this.target.setDepth(20);
            this.soundTarget.play();
        }
    }

    printMode(){
        // Deixa invisível todos os elementos que não devem aparecer na print
        this.target.destroy();
        this.target = null
        this.stopped = true
        this.paletteBtn.setVisible(false);
        this.pauseBtn.setVisible(false);
        this.printBtn.setVisible(false);
        this.soundTarget.pause()

        // Adiciona na tela um aviso para tirar um printscreen
        this.printText = this.add.image(this.width/2, this.height/2, 'takeAPrintScreen').setDepth(20)
        .setScale(this.width/1000);

        // Desativa o aviso após 2 segundos
        setTimeout(() => {
            this.printText.setVisible(false);
        }, 2500);

        // Retorna os elementos à tela após 5 segundos
        setTimeout(() => {
            this.spawnTarget();
            this.target.setDepth(20);
            this.paletteBtn.setVisible(true);
            this.pauseBtn.setVisible(true);
            this.printBtn.setVisible(true);
            this.soundTarget.play()
        }, 6000);
    }
}
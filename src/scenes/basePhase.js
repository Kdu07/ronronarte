import { completedPhases } from './splashScreen.js';

// Classe de cena a ser exportada
export default class BasePhase extends Phaser.Scene {
    constructor(phaseKey, configDict) {
        // Configura a chave de classe
        super(phaseKey);

        // Armazenamento dos parâmetros de key (usado para referenciar os assets)
        this.phases = ['Phase0', 'Phase1', 'Phase2', 'Phase3', 'Phase4', 'CreativeMode'];
        this.phaseKey = phaseKey;
        this.completePhase = configDict['completePhase'];
        this.backgroundKey = configDict['backgroundKey'];
        this.soundKey = configDict['soundKey'];
        this.targetKey = configDict['targetKey'];
        this.animKey = configDict['animKey'];

        // Parâmetros de fase completa
        this.artistKey = configDict['artistKey'];
        this.textArtist = configDict['textArtist'];
        this.textPainting = configDict['textPainting'];
        this.maxScore = configDict['maxScore'];

        // Define a próxima fase
        this.nextPhase = this.phases[this.phases.indexOf(this.phaseKey) + 1]; 
        
        // Junta todas as variaveis a serem passadas para a próxima cena
        this.phaseInfo = {
            configDict: configDict, 
            nextPhase: this.nextPhase
        };
        
        
    }

    create(){
        // Facilita a escrita da variável para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;

        // Define pontuação incial
        this.score = 0;

        this.soundTargetBoolean = true;
    
        // Se for uma fase completa
        if (this.completePhase){
            this.totalClicks = 0;
            
            // Cria o background de fase completa
            this.createBackgroundComplete();

            // Adiciona o placar
            this.scoreboard = this.add.text(this.width/1.15, this.height*0.02, this.score + '|' + this.maxScore, 
                {fontFamily:'font1', fontSize:this.width/35, fill:'#FFF'})

            // Adiciona o temporizador
            this.createTimer();
            this.clickTargetComplete();

        }else{
            // Cria o background
            this.createBackground();
            this.clickTarget();
        }

        // Adiciona som que toca quando o alvo é clicado
        this.soundClick = this.sound.add('soundClick');
        this.soundPause = this.sound.add('soundPauseButton');
        this.soundStar = this.sound.add('soundStar')

        // Adiciona o botão de pause
        this.createPauseButton();
        
        // Configura e adiciona o pombo na tela
        this.spawnTarget();    
    }



    createTimer() {
        this.timerOn = true;
        this.timerEvent = null;
        this.elapsedSeconds = 0;

        // Cria o evento do temporizador e guarda a referência
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });
    }

    createBackground(){
        // Cria a imagem do background
        this.frame = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width, this.height).setDepth(0);
        this.frameHitbox = 0;
    }

    createBackgroundComplete() {
        // Adiciona máscara branca, o quadro e a borda
        this.bg = this.add.image(this.width / 2, this.height / 2, 'bgWhite').setDisplaySize(this.width, this.width/1.4);
        this.painting = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width/1.11, (this.width / 1.77)/1.37);
        this.frame = this.add.image(this.width / 2, this.height / 2, 'frame').setDisplaySize(this.width, this.height);
        this.frameHitbox = this.frame.displayWidth / 30;

        // Torna o quadro visível
        this.painting.setAlpha(1);

        // Cria uma máscara inicialmente vazia 
        this.revealMask = this.make.renderTexture({ x: this.width / 2, y: this.height / 2, width: this.width, height: this.height }, false);
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.revealMask);

        // A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
        this.painting.setMask(this.mask);
    }

    // Cria e configura o botão de pause
    createPauseButton() {
        // Define que não está sendo pressionado
        this.pauseHold = false;
        
        // Adiciona o asset do botão na tela
        this.pauseBtn = this.add.image(this.width/40, this.height/18, 'pauseBtn')
        .setScale(this.width/550)
        .setDepth(20)
        .setInteractive();

        // Adiciona o asset do carregamento na tela
        this.pauseLoad = this.add.sprite(this.pauseBtn.x + this.pauseBtn.displayWidth*1.5, this.pauseBtn.y, 'spriteLoading')
        .setScale(this.width/200)
        .setInteractive()
        .setVisible(false)
        .setDepth(20);

        // Quando o mouse clica o botão, define a variavel de segurar como true
        this.pauseBtn.on('pointerdown', () => {
            this.pauseHold = true
        });

        // Quando o mouse solta o botão, define a variavel de segurar como false
        this.pauseBtn.on('pointerup', () => {
            this.pauseHold = false;
        });
    }

    update(){
        // Só move o pombo se ele não foi clicado
        if (!this.stopped){ 
            this.movement(this.target);  
        }

        // Confere se o botão está sendo clicado
        this.updatePauseButton()
    }

    // Função para contar o tempo no temporizador
    updateTimer() {
        if (this.timerOn){
            this.elapsedSeconds++;
        }
    }

    // Atualiza o botão de pause
    updatePauseButton(){
        // Se o botão está sendo segurado
        if (this.pauseHold){
            // Deixa o botão e o carregamento visíveis
            this.pauseLoad.setVisible(true);
            this.pauseLoad.anims.play('SpriteLoading',true);

            // Se o sprite de carregamento chega no último frame
            if (this.pauseLoad.anims.currentFrame.index == 5){
                // Inicia o áudio do pause
                this.soundPause.play({ volume: 0.2 });
                
                // Para o áudio do alvo
                this.soundTarget.stop();
                this.playStar = false

                // Troca para cena de level select
                this.scene.start("LevelSelect");
                this.scene.stop(this.phaseKey);
            }
        }else{
            // Se o botão não está sendo segurado, reseta o carregamento
            this.pauseLoad.anims.stop().setFrame(0).setVisible(false);
        }
    }

    spawnTarget() {
        // Inicia a movimentação do pombo
        this.stopped = false;
        
        // Configura o som do alvo
        this.soundTarget = this.sound.add(this.soundKey);
        if(this.soundTarget){
            this.soundTarget.stop();
        }

        // Coeficiente para aceleração do alvo
        this.coeficient = 1;

        //  Gerar uma posição aleatória dentro da área do quadro
        let posX = Phaser.Math.Between(50,this.width-50);
        let posY = Phaser.Math.Between(100,this.height-100);
    
        // Adiciona o pombo e torna interativo
        this.target = this.add.sprite(posX, posY, this.targetKey).setScale(this.width/350).setInteractive();
    
        let coef = this.width/80 
        // Configura a velocidade aleatória do pombo e a direção inicial de movimento
        let speedK = coef//this.width/200; // Coeficiente para a velocidade ser responsiva
        
        this.target.speedX = Phaser.Math.Between(speedK*1, speedK*1.5);
        this.target.speedY = Phaser.Math.Between(speedK*1, speedK*1.5);
        this.target.directionX = -1;
        this.target.directionY = 1;

        // Configura aceleração do pombo no eixo y
        let accK = coef/220 //this.width/70000; // Coeficiente para a aceleração ser responsiva
        this.target.accelerationY = Phaser.Math.FloatBetween(accK*1, accK*1.5);
        this.target.VyMax = accK*300; // Velocidade máxima no eixo y
        this.target.VyMin = 0; // Velocidade mínima no eixo y

        // Hitbox do pombo (usado para que não saia da tela)
        this.target.hitboxWidth = this.target.width*this.width/400*0.4;
        this.target.hitboxHeight = this.target.height*this.width/400*0.4;

        // Inicia a animação de voo do pombo
        this.target.play(this.animKey);

        // Inicia o audio do alvo com cuidado para evitar bugs
        this.soundTargetBoolean = true;
        if(this.soundTargetBoolean === true){
            this.soundTarget.play({ volume: 0.5, loop: true });
            this.soundTargetBoolean = false;
        }
        else{
            this.soundTarget.stop();
        }
    }

    // Função que confere se o pombo é clicado
    clickTarget(){        
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Para o som do alvo
            if(this.target != null){
                // Se o ponteiro está no do alvo
                if (this.target && this.target.getBounds().contains(pointer.x, pointer.y)) {
                    this.score+= 1; // Adiciona 1 ponto à pontuação
                    this.stopped = true; // Alvo para de se movimentar
                    
                    // Destrói o alvo
                    this.target.destroy();
                    this.target = null;
                    
                    this.soundTarget.stop();

                    this.soundClick.play({ volume: 0.3 }); // Toca o som configurado quando o alvo é clicado
                    this.time.delayedCall(1000, () => {
                        this.soundClick.stop(); // Para o som do clique após 1000ms (1s)
                    });
                    
                    this.splash = this.add.image(pointer.x, pointer.y, 'splashTutorial').setScale(this.width/4000).setAlpha(0.6); // Cria um splash no local do clique
                    this.time.delayedCall(200, () => {
                        this.reward = this.add.image(this.width/2, this.height/2, 'reward').setScale(this.width/1200);
                        this.skipRewardText = this.add.image(this.width/2, this.height/1.5, 'continueBtn').setScale(this.width/600).setInteractive();
                        
                        // Configura clique para sair do aviso de recompensa
                        this.skipRewardText.on('pointerdown', () => {
                            if(this.reward != null){
                                this.spawnTarget();
                                this.reward.destroy();
                                this.skipRewardText.destroy();
                                this.reward = null;
                                this.skipRewardText = null;
                                this.timerOn = true
                            }
                        });
                    });
                }
            }
        });

        
    }

    // Função para quando o alvo é clicado
    clickTargetComplete() {
        this.input.on('pointerdown', (pointer) => {
            if(this.target != null){
                // Contagem do total de cliques na tela
                this.totalClicks += 1;
                
                // Se o ponteiro está no alvo
                if (this.target.getBounds().contains(pointer.x, pointer.y) && this.score < this.maxScore) {
                    this.stopped = true; // Alvo para de se movimentar

                    // Remove o alvo da tela
                    this.target.destroy();
                    this.target = null;

                    this.soundTarget.stop(); // Para o som do alvo
                    
                    this.soundClick.play({ volume: 0.3 }); // Toca o som configurado quando o alvo é clicado
                    this.time.delayedCall(1000, () => {
                        this.soundClick.stop(); // Para o som de clique após 1000ms (1s)
                    });

                    this.score++; // Adiciona 1 ponto à pontuação
                    this.scoreboard.setText(this.score + '|' + this.maxScore); // Atualiza o placar 

                    // Cria um splash no local do clique e revela a mesma área do quadro
                    this.splash = this.add.image(pointer.x, pointer.y, 'splashPhases').setScale(this.width/(200*this.maxScore));
                    this.splash.setAlpha(1);
                    this.revealMask.draw(this.splash, this.splash.x, this.splash.y);
                    this.splash.destroy(); //Remove o splash após liberar a área
                    this.painting.setAlpha(0.6);

                    // Se a pontuação atingiu a pontuação máxima
                    if (this.score >= this.maxScore) {
                        // Revela o quadro inteiro
                        this.painting.setMask();
                        this.painting.setAlpha(1);

                        // Adiciona a tela de vitória
                        this.displayVictory();                        
                    } else {
                        // Se o jogo não acabou

                        // Aviso para recompensar o gato
                        this.time.delayedCall(100, () => {
                            this.reward = this.add.image(this.width/2, this.height/2, 'reward').setScale(this.width/1200);
                            this.skipRewardText = this.add.image(this.width/2, this.height/1.5, 'continueBtn').setScale(this.width/600).setInteractive();
                            this.timerOn = false

                            // Clique para encerrar o aviso de recompensa
                            this.skipRewardText.on('pointerdown', () => {
                                if(this.reward != null){
                                    this.spawnTarget();
                                    this.reward.destroy();
                                    this.skipRewardText.destroy();
                                    this.reward = null;
                                    this.skipRewardText = null;
                                    this.timerOn = true
                                }
                            });
                        });
                    };
                } 
            }
            
        });
    }
    

    displayVictory() {
        completedPhases[this.phaseKey] = true
        
        if(this.soundTarget){
            this.soundTarget.stop();
        }

        // Calcula a precisão do usuário
        this.precision = this.score/this.totalClicks*100

        // Calcula o número de estrelas de acordo com o tempo levado para acertar cada alvo
        this.starScore = this.elapsedSeconds/this.score;
        if (this.starScore <= 4){
            this.starScore = 5;
        }else if(this.starScore <= 6){
            this.starScore = 4;
        }else if(this.starScore <= 10){
            this.starScore = 3;
        }else if(this.starScore <= 15){
            this.starScore = 2;
        }else{
            this.starScore = 1;
        }
        
        // Trava o evento do temporizador
        this.timerOn = false

        // Adiciona tela de vitória depois de 3 segundos 
        setTimeout(() => {
            // Cria o background da tela de vitória
            let bgVictory = this.add.image(this.width / 2, this.height / 2, 'bgVictory').setDisplaySize(this.width/1.7, this.height/1.7);
            let frameVictory = this.add.image(this.width / 2, this.height / 2, 'frame').setScale(this.width/900);

            // Cria os textos que mostram os pontos e a precisão do gato
            this.timeText = this.add.text(bgVictory.x - bgVictory.displayWidth/4.2, bgVictory.y - bgVictory.displayHeight/17, 
                'Tempo: ' + this.elapsedSeconds + ' seg', 
                {fontFamily:'font1', fontSize: this.width/35, fill: '#000000' });

            this.precisionText = this.add.text(bgVictory.x - bgVictory.displayWidth/4, bgVictory.y + bgVictory.displayHeight/8, 
                'Precisão: ' + Math.round(this.precision) + '%', 
                {fontFamily:'font1', fontSize: this.width/35, fill: '#000000' });

            // Cria e configura o botao para proxima fase
            this.next = this.add.image(this.width/2, bgVictory.y + bgVictory.displayHeight/2.7, 'continueBtn')
            .setInteractive() 
            .on('pointerdown', () => {
                this.playStar = false
                this.scene.start('Victory', this.phaseInfo);
                this.scene.stop(this.phaseKey); // Para a fase atual
            })
            .setScale(this.width/550)

            // Adiciona estrelas na primeira tela de vitória
            let i = 0;
            let starScale = this.width/5000;
            this.playStar = true
            this.stars = setInterval(() => {
                this.add.image((bgVictory.x - bgVictory.displayWidth/1.8) + ((i+1)*(starScale*550)), this.height/3, 'scoreStar')
                .setScale(starScale)
                if(this.playStar){
                    this.soundStar.play({ volume: 0.3 })
                }
                
                i++;
                
                if (i === this.starScore){
                    clearInterval(this.stars)
                }
            }, 600);
        }, 3000);
    }

    movement(target) {
        // Limite para a borda em X considerando a hitbox do pombo
        if (target.x >= (this.width - target.hitboxWidth - this.frameHitbox)) {
            // Direção para a esquerda
            target.setFlip(false, false);
            target.directionX = -1;
        }
        if (target.x <= (0 + target.hitboxWidth + this.frameHitbox)) {
            // Direção para a direita
            target.setFlip(true, false);
            target.directionX = 1;
        }

        // Limite para a borda em Y considerando a hitbox do pombo
        if (target.y >= (this.frame.y + (this.frame.displayHeight/2) - target.hitboxHeight - this.frameHitbox)) {
            // Direção para cima
            target.directionY = -1;
        }
        if (target.y <= (this.frame.y - (this.frame.displayHeight/2) + target.hitboxHeight + this.frameHitbox)) {
            // Direção para baixo
            target.directionY = 1;
        }

        // Atualiza velocidade no eixo y de acordo com a aceleração definida e o coeficiente de direção
        target.speedY += (target.accelerationY * this.coeficient);
        
        // Se a velocidade atinge a velocidade máxima
        if (target.speedY >= target.VyMax) {
            // Coeficiente de direção negativo (velocidade começa a diminuir)
            this.coeficient = -1;
        }
        // Se a velocidade atinge a velocidade mínima
        if (target.speedY <= target.VyMin) {
            // Coeficiente de direção positivo (velocidade começa a aumentar)
            this.coeficient = 1;
        }

        // Move no eixo X e Y de acordo com a velocidade e direção
        // Nova posição do pombo = posição atual do pombo + velocidade do pombo * direção do pombo (-1,1)
        target.x += target.speedX * target.directionX;
        target.y += target.speedY * target.directionY; // Fim
    }
}

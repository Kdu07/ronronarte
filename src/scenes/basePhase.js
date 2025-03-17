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

        // Parâmetros opcionais
        if(configDict['artistKey'] != undefined){
            this.artistKey = configDict['artistKey'];
        }
        if(configDict['textArtist'] != undefined){
            this.textArtist = configDict['textArtist'];
        }
        if(configDict['textPainting'] != undefined){
            this.textPainting = configDict['textPainting'];
        }
    }

    create(){
        // Facilita a escrita da variável para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;

        this.score = 0;
    
        // Se for uma fase completa
        if (this.completePhase){
            this.totalClicks = 0;
            
            // Configura a pontuação máxima
            this.maxScore = 3;
            
            // Cria o background de fase completa
            this.createBackgroundComplete();
            
            // Adiciona o placar
            this.scoreboard = this.add.text(this.width/1000, this.height/2, this.score + '/' + this.maxScore, {fontFamily:'Futura', fontSize:'40px', fill:'#FFFFFF'})

            // Adiciona o temporizador
            this.createTimer();

        }else{
            // Cria o background
            this.createBackground();
        }

        // Adiciona som que toca quando o alvo é clicado
        this.clickSound = this.sound.add(this.soundKey);

        // Adiciona o botão de pause
        this.createPauseButton();
        
        // Configura e adiciona o pombo na tela
        this.spawnTarget();
    }

    createTimer() {
        // Configura o temporizador
        this.timerText = null;
        this.startTime = null;
        this.timerEvent = null;
        this.elapsedSeconds = 0;
        
        // Cria o texto do temporizador
        this.timerText = this.add.text(this.width/300, this.height/1.15, '0', { fontFamily:'Futura',fontSize: '40px', fill: '#FFFFFF' });

        // Cria o evento do temporizador e guarda a referência
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Adiciona a lógica de término da fase
        this.time.addEvent({
            delay: 5000, // Fase termina após 5 segundos
            callback: this.endPhase,
            callbackScope: this
        });
    }

    createBackground(){
        // Cria a imagem do background
        this.frame = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width, this.height);
        this.frameHitbox = 0;
    }

    createBackgroundComplete() {
        // Adiciona máscara branca, o quadro e a borda
        this.bg = this.add.image(this.width / 2, this.height / 2, 'bgWhite').setDisplaySize(this.width, this.width/1.4);
        this.painting = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width/1.065, (this.width / 1.77)/1.03);
        this.frame = this.add.image(this.width / 2, this.height / 2, 'frame2').setDisplaySize(this.width, this.height);
        this.frameHitbox = this.frame.displayWidth / 35;

        // Torna o quadro visível
        this.painting.setAlpha(1);

        // Cria uma máscara inicialmente vazia 
        this.revealMask = this.make.renderTexture({ x: this.width / 2, y: this.height / 2, width: this.width, height: this.height }, false);
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.revealMask);

        //A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
        this.painting.setMask(this.mask);
    }

    createPauseButton() {
       // Cria um botão de pause na tela
       this.pauseBtn = this.add.image(this.width/55, this.height/27, 'pauseBtn').setScale(this.width/1500)
       // Torna o botão de pause clicável
       this.pauseBtn.setInteractive()
       
       // Configura o botão de pause para, quando clicado, parar a fase e direcionar para o menu
       this.pauseBtn.on('pointerdown', () => {
           this.scene.start('Menu'); // Direciona para o menu 
           this.scene.stop('Phase1'); // Para a fase 1
       })
    }

    update(){
        // Confere e ativa funcionalidades quando o pombo é clicado        
        if(this.completePhase){
            // Para a configuração de fase completa 
            this.clickTargetComplete(); 
        }else{
            // Para a configuração de fase básica
            this.clickTarget();
        }

        // Só move o pombo se ele não foi clicado
        if (!this.stopped){ 
            this.movement(this.target);  
        }
    }

    // Função para contar o tempo no temporizador
    updateTimer() {
        this.elapsedSeconds++;
        this.timerText.setText(this.elapsedSeconds);
    }

    spawnTarget() {
        // Inicia a movimentação do pombo
        this.stopped = false;
    
        // Gera uma posição aleatória dentro da área do quadro
        let posX = Phaser.Math.Between(50,this.width-50);
        let posY = Phaser.Math.Between(100,this.height-100);
        
        // Cria o pombo e torna-o clicável
        this.target = this.add.sprite(posX, posY, this.targetKey).setScale(this.width/400);
        this.target.setInteractive();
        
        // Configura a velocidade do pombo de forma aleatória e define sua direção inicial de movimento
        this.target.speedX = Phaser.Math.Between(2, 6);
        this.target.speedY = Phaser.Math.Between(3, 5);
        this.target.directionX = -1;
        this.target.directionY = 1;
        
        // AJusta a hitbox do pombo (usado para que não saia da tela)
        this.target.hitboxWidth = 45;
        this.target.hitboxHeight = 45;
    
        // Inicia a animação de voo do pombo
        this.target.play(this.animKey);
    }

    // Função que confere se o pombo é clicado
    clickTarget(){
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                this.score+= 1; // Adiciona 1 ponto à pontuação

                this.stopped = true; // Alvo para de se movimentar
                this.target.destroy(); // Destrói o alvo
                this.clickSound.play({ volume: 0.5 }); // Toca o som de pombo quando o pombo é clicado
                this.time.delayedCall(1000, () => {
                    this.clickSound.stop(); // Para o som do pombo após 1000ms (1s)
                });
                
                this.splash = this.add.image(pointer.x, pointer.y, 'yellowSplash').setScale(this.width/4000).setAlpha(0.6); // Cria um splash no local do clique
                this.spawnTarget(); // Adiciona um novo alvo
            }
        });
    }

    // Função para quando o alvo é clicado
    clickTargetComplete() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            this.totalClicks += 1;
            // Se o ponteiro está no alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y) && this.score < this.maxScore) {
                this.stopped = true; // Alvo para de se movimentar
                this.target.destroy(); // Remove o pombo da tela
                this.clickSound.play({ volume: 0.5 }); // Toca o som de pombo quando o pombo é clicado
                this.time.delayedCall(1000, () => {
                    this.clickSound.stop(); // Para o som do pombo após 1000ms (1s)
                });
                this.score++; // Adiciona 1 ponto à pontuação
                this.scoreboard.setText(this.score + '/' + this.maxScore); // Atualiza o placar 

                // Cria um splash no local do clique e revela a mesma área do quadro
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(this.width/800);
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
                    // Se o jogo não acabou, gera outro pombo
                    this.spawnTarget();
                };
            }
        });
    }

    displayVictory() {
        // Armeza a precisão do usuário
        this.precision = this.score/this.totalClicks*100
        
        // Adiciona a frase de vitória
        setTimeout(() => {
            // Cria a imagem da tela de vitória
            let phrase = this.add.image(this.painting.x / 0.95, this.painting.y / 1.1, 'phrase').setScale(0.8);
            phrase.alpha = 0; // Inicialmente, deixa a frase de vitória invisível (para dar o efeito de fade-in)
            // Cria o efeito de fade-in
            this.tweens.add({
                targets: phrase,
                alpha: 1, // Torna a frase de vitória visível
                duration: 500, // Tempo da aparecimento da frase de vitória de meio segundo
                ease: 'Linear', // Define que a transição será linear
                scale: 0.81, // Aumenta um pouco a escala para potencializar o efeito de entrada da frase
                onComplete: () => {
                    this.tweens.add({
                        targets: phrase,
                        alpha: 0.8, // Diminui a opacidade para 80%
                        duration: 1000, // Tempo da aparecimento da frase de vitória de 1 segundo
                        scale: 0.6, // Diminui a escala para potencializar o efeito de entrada da frase
                        ease: 'Linear' // Define que a transição será linear
                    });
                }
            }, 5000);

            // Adiciona o aviso de recompensa para o tutor
            setTimeout(() => {
                let reward = this.add.image(this.painting.x / 1, this.painting.y / 0.8, 'reward').setScale(0.8);
                // Cria o efeito de fade-in
                this.tweens.add({
                    targets: reward,
                    alpha: 1, // Torna o aviso de recompensa visível
                    duration: 300, // Tempo da animação de 0.3 segundos
                    scale: 0.9, // Aumenta um pouco a escala para potencializar o efeito de entrada do aviso de recompensa
                    ease: 'Linear', // Define que a transição será linear
                    onComplete: () => {
                        this.tweens.add({
                            targets: reward,
                            alpha: 0.9, // Diminui a opacidade para 90%
                            duration: 500, // Tempo da transição de meio segundo
                            scale: 0.8, // Retorna a escala original do aviso de vitória
                            ease: 'Linear'
                        });
                    }
                });
            }, 2000);
        }, 300);
        
        // Trava o evento do temporizador
        if (this.timerEvent) {
            this.timerEvent.remove();
        }

        // Adiciona tela de vitória depois de 5,3 segundos 
        setTimeout(() => {
            // Cria o background da tela de vitória
            let bgVictory = this.add.image(this.width / 2, this.height / 2, 'bgVictory').setScale(this.width/900);

            this.add.image(bgVictory.x - 150, bgVictory.y - 142, this.backgroundKey).setScale(0.15);
            this.add.image(bgVictory.x + 300, bgVictory.y - 142, this.artistKey).setScale(0.23);

            // Cria a caixa de texto de contextualização do artista e do quadro
            let textBoxArtist = this.add.image(bgVictory.x + 300, bgVictory.y + 105, 'textArtistBox').setScale(0.7);
            let textBoxPainting = this.add.image(bgVictory.x - 90, bgVictory.y + 105, 'textArtistBox').setScale(0.7);
            // Configura a animação do spritesheet do gato
            this.anims.create({
                key: 'animCat',
                frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados 
                frameRate: 10, // Define o número de frames por segundos
                repeat: -1 // Define a animação como contínua
            });

            // Cria o spritesheet do gato na tela de vitória
            this.cat = this.add.sprite(bgVictory.x - 370, bgVictory.y + 190, 'cat').setScale(9).setFlip(true,false);
            // Inicia a anumação do spritesheet do gato
            this.cat.play('animCat');
            
            // Cria os textos de contextualização do artista e do quadro da tela de vitória 
            this.textArtistAdded = this.add.text(textBoxArtist.x - 145, textBoxArtist.y - 70, this.textArtist[0], {fontFamily:'Futura', fontSize: '17px', fill: '#000000' });
            this.textPaintingAdded = this.add.text(textBoxPainting.x - 145, textBoxPainting.y - 70, this.textPainting[0], {fontFamily:'Futura', fontSize: '16.3px', fill: '#000000' });

            // Cria os textos que mostram os pontos e a precisão do usuário
            this.scoreboard = this.add.text(bgVictory.x - 480, bgVictory.y + 2, 'Pontos:' + this.score + '/' + this.maxScore, {fontFamily:'Futura', fontSize: '27px', fill: '#000000' });
            this.precisionText = this.add.text(bgVictory.x - 480, bgVictory.y + 30, 'Precisão:' + Math.round(this.precision) + '%', {fontFamily:'Futura', fontSize: '27px', fill: '#000000' });

            // Cria o botao para proxima fase
            this.next = this.add.text(bgVictory.x + 210, bgVictory.y + 225, 'Próxima Fase', {
                fontSize: '32px',
                fill: '#fff',
                backgroundColor: '#ffd300',
                padding: { x: 10, y: 5 }
            })
            // Torna o botão de próxima fase clicável e permite que, caso ele seja clicado, 
            // pare a fase 1 e o jogo direcione para o menu de seleção de níveis
            .setInteractive() 
            .on('pointerdown', () => {
                this.nextPhase = this.phases[this.phases.indexOf(this.phaseKey) + 1];
                console.log(this.phaseKey)
                console.log(this.nextPhase)
                this.scene.stop(this.phaseKey); // Para a fase 1
                this.scene.start(this.nextPhase); // Direciona para a seleção de níveis
            })

        }, 5700);
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
    
        // Move no eixo X e Y de acordo com a velocidade e direção
        // Nova posição do pombo = posição atual do pombo + velocidade do pombo * direção do pombo (-1,1)
        target.x += target.speedX * target.directionX;
        target.y += target.speedY * target.directionY;
    }
}

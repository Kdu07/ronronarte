// Classe de cena a ser exportada
export default class BasePhase extends Phaser.Scene {
    constructor(phaseKey, completePhase, backgroundKey, targetKey, animKey, soundKey, artistKey, textArtist, textPainting) {
        // Configura a chave de classe
        super(phaseKey);
        this.completePhase = completePhase;
        this.backgroundKey = backgroundKey;
        this.soundKey = soundKey;
        this.targetKey = targetKey;
        this.animKey = animKey;

        if(artistKey != undefined){
            this.artistKey = artistKey;
        }
        if(textArtist != undefined){
            this.textArtist = textArtist;
        }
        if(textPainting != undefined){
            this.textPainting = textPainting;
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
            
            this.createBackgroundComplete();
            
            // Adiciona o placar
            this.scoreboard = this.add.text(this.width - 300, 0 + 50, 'Pontos:' + this.score + '/' + this.maxScore, {fontSize:'45px', fill:'#FFFFFF'})

            // Adiciona o temporizador
            this.createTimer();

        }else{
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
        // Configurar o temporizador
        this.timerText = null;
        this.startTime = null;
        this.timerEvent = null;
        this.elapsedSeconds = 0;
        
        this.timerText = this.add.text(10, 10, 'Tempo: 0', { fontSize: '32px', fill: '#fff' });

        // Crie o evento do temporizador e guarde a referência
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Adicione a lógica de término da fase
        this.time.addEvent({
            delay: 5000, // Por exemplo, fase termina após 5 segundos
            callback: this.endPhase,
            callbackScope: this
        });
    }

    createBackground(){
        this.frame = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width, this.height);
        this.frameHitbox = 0;
    }

    createBackgroundComplete() {
        // Adiciona máscara branca, quadro e a borda
        this.bg = this.add.image(this.width / 2, this.height / 2, 'bgWhite').setDisplaySize(this.width, this.width / 1.8);
        this.painting = this.add.image(this.width / 2, this.height / 2, this.backgroundKey).setDisplaySize(this.width, this.width / 1.8);
        this.frame = this.add.image(this.width / 2, this.height / 2, 'frame').setDisplaySize(this.width, this.width / 2.3);
        this.frameHitbox = this.frame.displayWidth / 35;

        // Torna o quadro visível
        this.painting.setAlpha(1);

        // Cria uma máscara inicial vazia 
        this.revealMask = this.make.renderTexture({ x: this.width / 2, y: this.height / 2, width: this.width, height: this.height }, false);
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.revealMask);

        //A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
        this.painting.setMask(this.mask);
    }

    createPauseButton() {
       // Adiciona um botão de pause na tela
       this.pauseBtn = this.add.image(40, 50, 'pauseBtn')
       this.pauseBtn.setInteractive()
       
       // Configura o botão para voltar ao menu
       this.pauseBtn.on('pointerdown', () => {
           this.scene.start('Menu');
           this.scene.stop('Phase1');
       })
    }

    update(){
        if(this.completePhase){
            // Confere se o pombo é clicado
            this.clickTargetComplete(); 
        }else{
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
        this.timerText.setText('Tempo: ' + this.elapsedSeconds);
    }

    spawnTarget() {
        // Inicia a movimentação do pombo
        this.stopped = false;
    
        // Gerar uma posição aleatória dentro da área do quadro
        let posX = Phaser.Math.Between(100,500);
        let posY = Phaser.Math.Between(100,500);
        
        // Adiciona o pombo e torna interativo
        this.target = this.add.sprite(posX, posY, this.targetKey).setScale(1.5).setDepth(20);
        this.target.setInteractive();
        
        // Configura a velocidade aleatória do pombo e a direção inicial de movimento
        this.target.speedX = Phaser.Math.Between(2, 3);
        this.target.speedY = Phaser.Math.Between(2, 3);
        this.target.directionX = -1;
        this.target.directionY = 1;
        
        // Hitbox do pombo (usado para que não saia da tela)
        this.target.hitboxWidth = 43;
        this.target.hitboxHeight = 33;
    
        // Inicia a animação de voo do pombo
        this.target.play(this.animKey);
    }

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
                
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(0.5); // Cria um splash no local do clique
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
                this.scoreboard.setText('Pontos: ' + this.score + '/' + this.maxScore); // Atualiza o placar 

                // Cria um splash no local do clique e revela a mesma área do quadro
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(2.0);
                this.splash.setAlpha(1);
                this.revealMask.draw(this.splash, this.splash.x, this.splash.y);
                this.splash.destroy(); //Remove o splash após liberar a área
                this.painting.setAlpha(1);

                // Se a pontuação atingiu a pontuação máxima
                if (this.score >= this.maxScore) {
                    // Revela o quadro inteiro
                    this.painting.setMask();
                    this.painting.setAlpha(1);

                    this.displayVictory();                        
                } else {
                    // Se o jogo não acabou, gera outro pombo
                    this.spawnTarget();
                };
            }
        });
    }

    displayVictory() {
        this.precision = this.score/this.totalClicks*100
        
        // Adiciona a frase de vitória
        setTimeout(() => {
            let phrase = this.add.image(this.painting.x / 0.95, this.painting.y / 1.1, 'phrase').setScale(0.8);
            phrase.alpha = 0;
            this.tweens.add({
                targets: phrase,
                alpha: 1, // Torna visível
                duration: 500, // Tempo da animação (0.3s)
                ease: 'Linear',
                scale: 0.81,
                onComplete: () => {
                    // Após o fade-in, reduzimos a opacidade para 50%
                    this.tweens.add({
                        targets: phrase,
                        alpha: 0.8, // Mantém opacidade em 50%
                        duration: 1000, // Tempo da transição (0.5s)
                        scale: 0.6,
                        ease: 'Linear'
                    });
                }
            }, 5000);

            // Adiciona o aviso de recompensa para o tutor
            setTimeout(() => {
                let reward = this.add.image(this.painting.x / 1, this.painting.y / 0.8, 'reward').setScale(0.8);
                this.tweens.add({
                    targets: reward,
                    alpha: 1, // Torna visível
                    duration: 300, // Tempo da animação (0.3s)
                    scale: 0.9,
                    ease: 'Linear',
                    onComplete: () => {
                        // Após o fade-in, reduzimos a opacidade para 50%
                        this.tweens.add({
                            targets: reward,
                            alpha: 0.9, // Mantém opacidade em 50%
                            duration: 500, // Tempo da transição (0.5s)
                            scale: 0.8,
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

        // Adiciona tela de vitória depois de 5,7 segundos 
        setTimeout(() => {
            // Background
            let bgVictory = this.add.image(this.width / 2, this.height / 2, 'bgVictory').setScale(0.4);

            // Imagens
            this.add.image(bgVictory.x - 150, bgVictory.y - 142, this.backgroundKey).setScale(0.15);
            this.add.image(bgVictory.x + 300, bgVictory.y - 142, this.artistKey).setScale(0.23);
            let textBoxArtist = this.add.image(bgVictory.x + 300, bgVictory.y + 105, 'textArtistBox').setScale(0.7);
            let textBoxPainting = this.add.image(bgVictory.x - 90, bgVictory.y + 105, 'textArtistBox').setScale(0.7);
            this.anims.create({
                key: 'animCat',
                frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.cat = this.add.sprite(bgVictory.x - 370, bgVictory.y + 190, 'cat').setScale(9).setFlip(true,false);
            this.cat.play('animCat');
            
            // Textos na tela
            this.textArtistAdded = this.add.text(textBoxArtist.x - 145, textBoxArtist.y - 70, this.textArtist[0], { fontSize: '17px', fill: '#000000' });
            this.textPaintingAdded = this.add.text(textBoxPainting.x - 145, textBoxPainting.y - 70, this.textPainting[0], { fontSize: '16.3px', fill: '#000000' });
            this.scoreboard = this.add.text(bgVictory.x - 480, bgVictory.y + 2, 'Pontos:' + this.score + '/' + this.maxScore, { fontSize: '27px', fill: '#000000' });
            this.precisionText = this.add.text(bgVictory.x - 480, bgVictory.y + 30, 'Precisão:' + Math.round(this.precision) + '%', { fontSize: '27px', fill: '#000000' });

            // Botao para proxima fase
            this.next = this.add.text(bgVictory.x + 210, bgVictory.y + 225, 'Próxima Fase', {
                fontSize: '32px',
                fill: '#fff',
                backgroundColor: '#ffd300',
                padding: { x: 10, y: 5 }
            })
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.stop('Phase1');
                this.scene.start('LevelSelect');
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

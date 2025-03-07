// Classe de cena a ser exportada
export default class Phase1 extends Phaser.Scene {
    constructor() {
        // Configura a chave de classe
        super('Phase1')
    }

    create(){
        // Facilita a escrita da váriavel para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;
    
        this.parado = false;

        // Configura a pontuação inicial e máxima
        this.score = 0;
        this.maxScore = 3;
        
        // Adiciona máscara branca, quadro e a borda
        this.bg = this.add.image(this.width / 2, this.height / 2, 'bgWhite').setDisplaySize(this.width, this.width/1.77);
        this.quadro = this.add.image(this.width / 2, this.height / 2, 'quadro').setDisplaySize(this.width, this.width/1.77);
        this.borda = this.add.image(this.width / 2, this.height / 2, 'borda').setDisplaySize(this.width, this.width/1.77);
        
        // Torna o quadro visível
        this.quadro.setAlpha(1); 
        
        // Cria uma máscara inicial vazia 
        this.revealMask = this.make.renderTexture({x: this.width/2, y: this.height/2, width: this.width, height: this.height}, false);
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.revealMask);

        //A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
        this.quadro.setMask(this.mask);

        // Adiciona som
        this.somPombo = this.sound.add('pru'); 

        // Animação do pombo voando
        this.anims.create({
            key: 'voo',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        // Adiciona o placar
        this.scoreboard = this.add.text(this.width - 300, 0 + 50, 'Pontos:' + this.score + '/' + this.maxScore, {fontSize:'45px', fill:'#FFFFFF'})
        
        // Adiciona um botão de pause na tela
        this.PauseBtn = this.add.image(40, 50, 'PauseBtn')
        this.PauseBtn.setInteractive()
        // Configura o botão para voltar ao menu
        this.PauseBtn.on('pointerdown', () => {
            this.scene.start('Menu');
            this.scene.stop('Phase1');
        })

        // Configura e adiciona o pombo na tela
        this.spawnPombo();
    }

    update(){
        // Confere se o pombo é clicado
        this.clickPombo(); 

        // Só move o pombo se ele não foi clicado
        if (!this.parado){ 
            this.movimento(this.pombo);  
        }
    }

    spawnPombo() {
        // Inicia a movimentação do pombo
        this.parado = false;
    
        // Gerar uma posição aleatória dentro da área do quadro
        let posX = Phaser.Math.Between(100,500);
        let posY = Phaser.Math.Between(100,500);
        
        // Adiciona o pombo e torna interativo
        this.pombo = this.add.sprite(posX, posY, 'pombo').setScale(1.5);
        this.pombo.setInteractive();
        
        // Configura a velocidade aleatória do pombo e a direção inicial de movimento
        this.pombo.velocidadeX = Phaser.Math.Between(5, 7);
        this.pombo.velocidadeY = Phaser.Math.Between(3, 6);
        this.pombo.direcaoX = -1;
        this.pombo.direcaoY = 1;
        
        // Hitbox do pombo (usado para que não saia da tela)
        this.pombo.hitboxWidth = 43;
        this.pombo.hitboxHeight = 33;
    
        // Inicia a animação de voo do pombo
        this.pombo.play('voo');
    }

    // Função para quando o pombo é clicado
    clickPombo() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.pombo.getBounds().contains(pointer.x, pointer.y)) {
                this.parado = true; // Alvo para de se movimentar
                this.score++; // Adiciona 1 ponto à pontuação
                this.scoreboard.setText('Pontos: ' + this.score + '/' + this.maxScore); // Atualiza o placar
                
                this.pombo.destroy(); // Remove o pombo da tela
                this.somPombo.play({ volume: 0.5 }); // Toca o som de pombo quando o pombo é clicado
                this.time.delayedCall(1000, () => {
                    this.somPombo.stop(); // Para o som do pombo após 1000ms (1s)
                });

                // Se a pontuação atingiu a pontuação máxima
                if (this.score >= this.maxScore) {
                    // Revela o quadro inteiro
                    this.quadro.setMask();
                    this.quadro.setAlpha(1);
    
                    // Adiciona a frase de vitória
                    setTimeout(() => {
                        let frase = this.add.image(this.quadro.x/0.95, this.quadro.y/1.1, 'frase').setScale(0.8);
                        frase.alpha = 0;
                        this.tweens.add({
                            targets: frase,
                            alpha: 1, // Torna visível
                            duration: 500, // Tempo da animação (0.3s)
                            ease: 'Linear',
                            scale: 0.81,
                            onComplete: () => {
                                // Após o fade-in, reduzimos a opacidade para 50%
                                this.tweens.add({
                                    targets: frase,
                                    alpha: 0.8, // Mantém opacidade em 50%
                                    duration: 1000, // Tempo da transição (0.5s)
                                    scale: 0.6,
                                    ease: 'Linear'
                                });
                            }
                        },5000);
    
                        // Adiciona o aviso de recompensa para o tutor
                        setTimeout(() => {
                            let recompensa = this.add.image(this.quadro.x/1, this.quadro.y/0.8, 'recompensa').setScale(0.8);
                            this.tweens.add({
                                targets: recompensa,
                                alpha: 1, // Torna visível
                                duration: 300, // Tempo da animação (0.3s)
                                scale: 0.9,
                                ease: 'Linear',
                                onComplete: () => {
                                    // Após o fade-in, reduzimos a opacidade para 50%
                                    this.tweens.add({
                                        targets: recompensa,
                                        alpha: 0.9, // Mantém opacidade em 50%
                                        duration: 500, // Tempo da transição (0.5s)
                                        scale: 0.8,
                                        ease: 'Linear'
                                    });
                                }
                            });
                        },2000);
                    },300);
    
                    // Adicona tela de vitória depois de 5,7 segundos 
                    setTimeout(() => {
                        let bgVictory = this.add.image(this.width / 2, this.height / 2, 'bgVictory').setScale(0.4);
                        this.textMichelangelo = ['Michelangelo foi um renomado\nartista italiano do período\nrenascentista. Com formação\nhumanista e influenciado\npela arte clássica, pode-se\ndizer que ele foi um dos\nmaiores artistas do Ocidente'];
                        this.add.image(bgVictory.x-150, bgVictory.y-142, 'quadro').setScale(0.15);
                        this.add.image(bgVictory.x+300, bgVictory.y-142, 'artista3').setScale(0.23);
                        this.add.image(bgVictory.x+300, bgVictory.y+105, 'textArtistBox').setScale(0.7);
                        this.textArtist = this.add.text(bgVictory.x+158, bgVictory.y+42, this.textMichelangelo[0], {fontSize:'17px', fill:'#000000'});
                    },5700);
                        
                } else {
                    // Se o jogo não acabou, gera outro pombo
                    this.spawnPombo();
                };
    
                // Cria um splash no local do clique e revela a mesma área do quadro
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(2.0);
                this.splash.setAlpha(1);
                this.revealMask.draw(this.splash, this.splash.x, this.splash.y);
                this.splash.destroy(); //Remove o splash após liberar a área
                this.quadro.setAlpha(1);
            }
        });
    }

    movimento(alvo) {
        // Limite para a borda em X considerando a hitbox do pombo
        if (alvo.x >= (this.width - alvo.hitboxWidth)) {
            // Direção para a esquerda
            alvo.setFlip(false, false);
            alvo.direcaoX = -1;
        }
        if (alvo.x <= (0 + alvo.hitboxWidth)) {
            // Direção para a direita
            alvo.setFlip(true, false);
            alvo.direcaoX = 1;
        }
    
        // Limite para a borda em Y considerando a hitbox do pombo
        if (alvo.y >= (this.height - alvo.hitboxHeight)) {
            // Direção para cima
            alvo.direcaoY = -1;
        }
        if (alvo.y <= (0 + alvo.hitboxHeight)) {
            // Direção para baixo
            alvo.direcaoY = 1;
        }
    
        // Move no eixo X e Y de acordo com a velocidade e direção
        // Nova posição do pombo = posição atual do pombo + velocidade do pombo * direção do pombo (-1,1)
        alvo.x += alvo.velocidadeX * alvo.direcaoX;
        alvo.y += alvo.velocidadeY * alvo.direcaoY;
    }
}


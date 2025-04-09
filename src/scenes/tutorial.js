// Classe de cena a ser exportada
export default class Tutorial extends Phaser.Scene {
    constructor(){
        // Configura a chave de classe
        super('Tutorial')
    }
    create(){
        this.textAdded = false; // Boolean para adicionar apenas uma vez o texto usando o update
        this.clicks = 0; // Contagem de clicks na tela
        this.count = 0;
        
        // Texto de tutorial organizado por elementos em lista
        this.tutorialTexts = [
            'Olá humano, bem-vindo ao RonRonArte!',
            'Seu gato está prestes a embarcar em uma jornada artística!\n\nPara ensiná-lo a jogar, siga estas instruções:',
            'Prepare o petisco favorito do seu gato para despertar interesse.\n\nNo ínicio, recompense seu gato por todos os toques na tela.',
            'Quando perceber que seu gato aprendeu a bater na tela,\n\nentregue o petisco apenas quando ele acertar o alvo',
            'Se divirta e descubra diferentes modos de jogo a medida que avança com seu pet!',
            'Esse é meu amigo pombo, ele e outros bichinhos servirão de alvos para o seu gato',
            'Está pronto para a aventura?\n\nClique no pombo para começar o jogo!']
        
        // Adiciona background
        let bg = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bgTutorial')
        .setDisplaySize(this.scale.width, this.scale.height).setDepth(0);
        
        this.cat = this.add.sprite(this.scale.width/1.2, this.scale.height/5, 'cat').setScale(this.scale.width/150)
        this.cat.play('animCat');

        this.addPigeon = false;
        this.character = null;

        setTimeout(() => {
            this.textBox = this.add.image(this.scale.width/2, this.scale.height/1.3, 'textBox')
            .setScale(this.scale.width/800);
            this.tutorialText = this.add.text(this.scale.width/8, this.scale.height/1.7, this.tutorialTexts[this.clicks], {
                fontFamily:'font1', 
                fontSize: this.scale.width/35, 
                fill:'#000',
                wordWrap: { width: this.textBox.displayWidth - this.textBox.displayWidth/2.4, useAdvancedWrap: true }
            });
        }, 500);
    }

    update(){
        this.textDisplay()
        this.pigeonAnimation()     
    }

    pigeonAnimation(){
        if(this.character == null){
            if(this.addPigeon){
                // Início da implementação dos elementos matemáticos
                // Define posição inicial
                const posInitialX = 0;  
                const posInitialY = 0;

                // Adiciona o pombo como personagem e inicia a animação
                this.character = this.add.sprite(posInitialX, posInitialY, 'pigeon').setScale(this.scale.width/400).setFlip(true, false);
                this.character.play('animPigeon');

                // Define velocidade nos dois eixos e aceleração no eixo y
                this.velX = 5;
                this.velY = 0;
                this.accelerationY = 0.02;
            }
        }else{
            if (this.character.x <= this.scale.width/2){
                // Implementação da aceleração no movimento
                this.count++; // Conta execuções do update()
                this.velY += this.accelerationY; // Atualiza velocidade no eixo y
                
                // Atualiza posição com base na velocidade
                this.character.x += this.velX;
                this.character.y += this.velY;

                // Imprime informações no console
                console.log("------------------------------------")
                console.log("Posição X: " + this.character.x)
                console.log("Posição Y: " + this.character.y)
                console.log("Velocidade X: " + this.velX)
                console.log("Velocidade Y: " + this.velY)
            }else{
                console.log("=====================================")
                console.log("Posição Inicial X: " + 0)
                console.log("Posição Inicial Y: " + 0)
                console.log("Posição Final X: " + this.character.x)
                console.log("Posição Final Y: " + this.character.y)
                console.log("Velocidade Final X: " + this.velX)
                console.log("Velocidade Final Y: " + this.velY)
                console.log("Tempo total: " + this.count/60)
                console.log("=====================================")
                // Fim das implementações matemáticas
            }
        }
    }

    textDisplay(){
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o número de cliques não for maior que o tamanho da lista de textos
            if (this.clicks < this.tutorialTexts.length - 1){
                // Adiciona um clique à contagem
                this.clicks++;
            }

            // Atualiza o texto com a frase de mesmo index da contagem atual de clicks
            this.tutorialText.setText(this.tutorialTexts[this.clicks])

            if (this.clicks == this.tutorialTexts.length - 2){
                this.addPigeon = true;
            }

            if (this.clicks == 2){
                this.catFood = this.add.image(this.scale.width / 2, this.scale.height / 4, 'catFood')
                .setScale(this.scale.width/2000)
            }else if(this.clicks >2){
                this.catFood.destroy()
            }

            // Se o clique foi no personagem E todos os textos do tutorial foram mostrados
            if (this.character.getBounds().contains(pointer.x, pointer.y) && this.clicks == this.tutorialTexts.length - 1){
                // Destrói alguns elementos
                this.character.destroy();
                this.textBox.destroy();
                this.tutorialText.destroy();
                
                // Adiciona o splash 
                this.add.image(this.character.x, this.character.y, 'splashTutorial').setScale(this.scale.width/2500);
                
                // Espera 1,5 segundos
                this.time.delayedCall(1500, () => {
                    // Começa a próxima cena e finaliza essa
                    this.scene.start('Phase0');
                    this.scene.stop('Tutorial');
                });
            }
        });
    }
}
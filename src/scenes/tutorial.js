export default class Tutorial extends Phaser.Scene {
    constructor(){
        super('Tutorial')
    }
    create(){
        this.textAdded = false;
        this.clicks = 0;
        this.tutorialTexts = [
            'Olá, Tutor! Bem-vindo ao RonRonarte!',
            'Seu gato está prestes a embarcar em uma jornada artística! Para jogar, siga estas instruções:',
            '1 - Prepare a recompensa: Pegue um petisco para incentivar seu gato.',
            '2 - Atraia a atenção dele: Mostre a ração e mova-a sobre a tela acompanhando os alvos que aparecem. Dessa forma seu gato é estimulado a tocar na tela.',
            '3 - Comece devagar: Nos primeiros momentos, não exija muito. Recomendamos dar uma pequena recompensa até por toques em partes vazias da tela até seu gato pegar o jeito.',
            '4 - Toque para criar! Quando seu gato tocar na tela, ele revelará partes de uma pintura clássica no Modo História ou criará uma obra autoral e única no Modo Criativo!',
            '5 - Recompense e repita! Uma vez que o gato começa a tocar nos alvos sem a necessidade do petisco na tela, ofereça uma recompensa ao fim de cada fase.',
            'Agora, clique no pombo para começar o jogo!']
        
        let bg = this.add.image(this.scale.width/2, this.scale.height/2, 'bgTutorial').setInteractive();

        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.character = this.add.sprite(0, 0, 'pombo').setScale(2).setFlip(true, false);
        this.character.play('fly');
    }
    update(){
        if (this.character.x <= this.scale.width/2 && this.character.y <= this.scale.height/2){
            this.character.x += 4;
            this.character.y += 2;
        }else{
            if(this.clicks == 0 && !this.textAdded){
                this.textBox = this.add.image(this.scale.width/2, this.scale.height - 100, 'textBox');
                this.tutorialText = this.add.text(this.textBox.x - 130, this.textBox.y - 80, 'Olá tutor', {fontSize:'30px', fill:'#000000'})
                this.textAdded = true;
            }

            this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
            this.input.on('pointerdown', (pointer) => {
                if (this.clicks < this.tutorialTexts.length - 1){
                    this.clicks++;
                }

                this.tutorialText.setText(this.tutorialTexts[this.clicks])

                if (this.character.getBounds().contains(pointer.x, pointer.y) && this.clicks == this.tutorialTexts.length - 1){
                    console.log('clicou no pombo')
                    this.character.destroy();
                    this.textBox.destroy();
                    this.tutorialText.destroy();
                    this.add.image(this.character.x, this.character.y, 'splash').setScale(0.5);
                    this.time.delayedCall(2000, () => {
                        this.scene.start('BasePhase');
                        this.scene.stop('Tutorial');
                    });
                }
            });
        }
    }
}
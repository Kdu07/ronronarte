export default class Tutorial extends Phaser.Scene {
    constructor(){
        super('Tutorial')
    }
    create(){
        this.textAdded = false;
        this.clicks = 0;
        this.tutorialTexts = [
            'Olá humano,\nbem-vindo ao RonRonarte!',
            'Seu gato está prestes a embarcar em\numa jornada artística!\n\nPara incentivá-lo a jogar,\nsiga estas instruções:',
            'Pegue um petisco para incentivar seu\ngato.',
            'Mostre a ração e mova-a sobre a\ntela acompanhando os alvos que \naparecem',
            'No ínicio não exija muito,recomendamos\nrecompensar seu gato por todos os\ntoques na tela até ele se interessar',
            'Seu gatinho pode revelar partes de \numa pintura clássica no Modo História\nou criar uma obra autoral\nno Modo Criativo!',
            'Quando o gato começar a tocar nos\nalvos sem a necessidade do petisco na\ntela, ofereça uma recompensa quando\no jogo indicar',
            'Está pronto para a aventura?\n\nClique no pombo para começar o jogo!']
        
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
            this.character.x += 5;
            this.character.y += 2;
        }else{
            if(this.clicks == 0 && !this.textAdded){
                this.textBox = this.add.image(this.scale.width/2, this.scale.height - 120, 'textBox').setScale(1.2);
                this.tutorialText = this.add.text(this.textBox.x - 350, this.textBox.y - 80, this.tutorialTexts[this.clicks], {fontSize:'30px', fill:'#000000'})
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
                    this.time.delayedCall(1500, () => {
                        this.scene.start('BasePhase');
                        this.scene.stop('Tutorial');
                    });
                }
            });
        }
    }
}
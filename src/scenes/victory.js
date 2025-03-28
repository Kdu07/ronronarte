export default class Victory extends Phaser.Scene {
    constructor() {
        super('Victory');
    }

    init(data){
        this.artistKey = data.configDict['artistKey']
        this.backgroundKey = data.configDict['backgroundKey']
        this.textArtist = data.configDict['textArtist']
        this.textPainting = data.configDict['textPainting']
        this.targetKey = data.configDict['targetKey']
        this.animKey = data.configDict['animKey']
        this.textArtist = data.configDict['textArtist']
        this.textPainting = data.configDict['textPainting']
        this.nextPhase = data.nextPhase
    }

    create() {
        this.width = this.scale.width;
        this.height = this.scale.height;
        
        this.bg = this.add.image(this.scale.width/2, this.scale.height/2, 'bgVictoryScene')
        .setDisplaySize(this.scale.width, this.scale.height)

        let numP = 2.6;
        this.painting = this.add.image(this.width / 2.5, this.height / 3.5, this.backgroundKey)
            .setDisplaySize(this.width/numP, this.height/numP);
        this.add.image(this.painting.x, this.painting.y, "frame")
            .setDisplaySize(this.width/numP, this.height/numP);
        
        let numA = numP*2;
        this.artist = this.add.image(this.width / 1.24, this.height / 3.5, this.artistKey)
            .setDisplaySize(this.width/numA, this.width/numA);
        this.add.image(this.artist.x, this.artist.y, "frame")
            .setDisplaySize(this.width/numA, this.width/numA);

        
        this.add.image(this.painting.x, this.height / 1.5, "victoryTextBox")
            .setDisplaySize(this.width/2.5, this.height/numP);
        
        this.add.image(this.artist.x, this.height / 1.5, "victoryTextBox")
            .setDisplaySize(this.width/3, this.width/numA);
    
            
        this.add.text(this.width/4.5, this.height/1.8, this.textPainting, 
            {fontFamily:'Futura', fontSize:this.width/60, fill:'#000'});
    
        this.add.text(this.width/1.52, this.height/1.8, this.textArtist, 
            {fontFamily:'Futura', fontSize:this.width/60, fill:'#000'});
                
        
        // Adiciona o gato
        this.anims.create({
            key: 'animCat',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados 
            frameRate: 10, // Define o número de frames por segundos
            repeat: -1 // Define a animação como contínua
        });
        this.cat = this.add.sprite(this.width/10, this.height/1.38, 'cat').setScale(this.width/150).setFlip(true,false);
        this.cat.play('animCat');

        // Adiciona o alvo da fase
        this.target = this.add.sprite(this.width/9, this.height/3.2, this.targetKey)
            .setDisplaySize(this.width/4.5, this.width/4.5).setFlip(true,false);
        this.target.play(this.animKey);

        this.add.image(this.width/1.15, this.height/1.08, 'continueBtn')
        .setInteractive() 
        .on('pointerdown', () => {
            this.scene.stop(this.phaseKey); // Para a fase atual
            this.scene.start(this.nextPhase);
        })
        .setScale(this.width/500)
    }

    update(){
        this.input.on('pointerdown', (pointer) => {
            //console.log("X: " + this.width/pointer.x)
            //console.log("Y: " + this.height/pointer.y)
            //console.log('----------------------------------')
        })
    }
}

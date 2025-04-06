export default class Select2 extends Phaser.Scene {
    constructor() {
        super("Select2");

    }
    create() {

        //background
        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
     
       
        this.button1Phase = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'phase1Button').setScale(this.scale.width/10050);
        this.squareFrame = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'squareFrame').setScale(this.scale.width/450);
        this.textPhase1 = this.add.text(this.scale.width*0.165, this.scale.height*0.49, 'Fase 1:', {
        fontFamily: 'Pixelify Sans',
        fontSize:'32px',
        color: '#000000'
    } );
        this.textAlvo1 = this.add.text(this.scale.width*0.16, this.scale.height*0.81, 'Alvos: 3', {
            fontFamily: 'Pixelify Sans', 
            fontSize: '32px',
            color:'#000000'
        });


        

        this.textAlvo2 = this.add.text(this.scale.width*0.36, this.scale.height*0.81, 'Alvos: 5', {
            fontFamily: 'Pixelify Sans', 
            fontSize: '32px',
            color:'#000000'
        });


        
        this.textAlvo3 = this.add.text(this.scale.width*0.565, this.scale.height*0.81, 'Alvos: 7', {
            fontFamily: 'Pixelify Sans', 
            fontSize: '32px',
            color:'#000000'
        });



        this.button4Phase = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'phase4Button').setScale(this.scale.width/3450);
        this.squareFrame = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'squareFrame').setScale(this.scale.width/450);
        this.textPhase4 = this.add.text(this.scale.width*0.765, this.scale.height*0.49, 'Fase 4:', {
            fontFamily: 'Pixelify Sans',
            fontSize:'32px',
            color: '#000000'
        } );
        this.textAlvo4 = this.add.text(this.scale.width*0.76, this.scale.height*0.81, 'Alvos: 10', {
            fontFamily: 'Pixelify Sans', 
            fontSize:'32px',
            color: '#000000'
        })

    
    }

    
 
}
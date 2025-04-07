import { completedPhases } from './splashScreen.js';


// Classe de cena a ser exportada
export default class Menu extends Phaser.Scene{
    constructor(){
        // Configura a chave de classe
        super('Menu');
    }

    create() {
        // Cria imagens de background e botão jogar
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu')
        .setDisplaySize(this.scale.width, this.scale.height);
        
        this.startButton = this.add.image(this.scale.width/1.95, this.scale.height/2, 'startButton')
        .setScale(this.scale.width/400)
        .setInteractive({cursor: "pointer"});

        // Quando o botão jogar for clicado direciona para o menu de seleção de níveis
        this.startButton.on("pointerdown", () => {
            this.soundPlay = this.sound.add('soundPlayButton').play();
            this.scale.startFullscreen(); // Coloca o jogo em tela cheia
            
            setTimeout(() => {
                this.resizeGame();
                this.scene.start('Select') // Direciona para a tela de seleção de níveis
                this.scene.stop('Menu') // Para o menu
            }, 500);
        });

        
    };

    resizeGame() {
        document.addEventListener('DOMContentLoaded', function() {
            const fullscreenButton = this.startButton
            let isFullscreen = false;
            
            // Verifica se o navegador suporta a API de tela cheia
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled && 
                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                fullscreenButton.textContent = 'Tela cheia não suportada';
                fullscreenButton.disabled = true;
                return;
            }
            
            fullscreenButton.addEventListener('click', toggleFullscreen);
            
            // Detecta mudanças no modo tela cheia
            document.addEventListener('fullscreenchange', updateButton);
            document.addEventListener('webkitfullscreenchange', updateButton);
            document.addEventListener('mozfullscreenchange', updateButton);
            document.addEventListener('MSFullscreenChange', updateButton);
            
            function toggleFullscreen() {
                if (!isFullscreen) {
                    // Entrar em tela cheia
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    // Sair da tela cheia
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            }
            
            function updateButton() {
                isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || 
                                 document.mozFullScreenElement || document.msFullscreenElement);
                
                fullscreenButton.textContent = isFullscreen ? 'Sair da Tela Cheia' : 'Ativar Tela Cheia';
            }
        });
    }
}



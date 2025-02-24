// Direciona para tela do jogo quando pressiona o botão
function startGame(){
    const startButton = document.getElementById("startScreenMainContentStartButton");
    startButton.addEventListener("click", () => {
        window.location.href = "2025-1A-T15-IN01-G03/src/game.html";
    })
}

startGame();
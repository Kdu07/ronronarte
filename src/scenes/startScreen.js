// Direciona para tela do jogo quando pressiona o botão
function startGame(){
    const startButton = document.getElementById("startScreenMainContentStartButton");
    startButton.addEventListener("click", () => {
        window.location.href = "../src/game.html";
    })
}

startGame();
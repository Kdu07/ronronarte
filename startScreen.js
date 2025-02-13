function startGame(){
    const startButton = document.getElementById("startScreenMainContentStartButton");
    startButton.addEventListener("click", () => {
        window.location.href = "game.html";
    })
}

startGame();
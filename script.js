let playerScore = 0;
let aiScore = 0;

function rollDice() {
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let aiRoll = Math.floor(Math.random() * 6) + 1;

    document.getElementById("player-dice").src = `images/dice${playerRoll}.png`;
    document.getElementById("ai-dice").src = `images/dice${aiRoll}.png`;

    if (playerRoll > aiRoll) {
        playerScore++;
    } else if (aiRoll > playerRoll) {
        aiScore++;
    }

    document.getElementById("player-score").innerText = `Score: ${playerScore}`;
    document.getElementById("ai-score").innerText = `Score: ${aiScore}`;

    checkWinner();
}

function checkWinner() {
    if (playerScore === 5) {
        document.getElementById("result").innerText = "🎉 You win! 🎉";
        disableGame();
    } else if (aiScore === 5) {
        document.getElementById("result").innerText = "🤖 AI wins! Try again!";
        disableGame();
    }
}

function disableGame() {
    document.querySelector("button").disabled = true;
    document.getElementById("reset-btn").style.display = "block";
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    document.getElementById("player-score").innerText = `Score: 0`;
    document.getElementById("ai-score").innerText = `Score: 0`;
    document.getElementById("result").innerText = "First to 5 wins!";
    document.querySelector("button").disabled = false;
    document.getElementById("reset-btn").style.display = "none";
}

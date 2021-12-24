// Return rock paper or scissors randomly
let computerPlay = () => {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return("Rock");
    } else if (randNum === 1) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

// with the choices from player and computer, return a string of the outcome of the round
let playRound = (playerSelection, computerSelection) => {
    // Make player input in the same format as computer input
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper") ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Get player input of rock, paper, or scissor
let getPlayerInput = () => {
    let playerSelection;
    let validWords = ["rock", "paper", "scissors"];
    do {
        playerSelection = prompt("Rock, Paper, or Scissors?");
    } while(validWords.indexOf(playerSelection.trim().toLowerCase()) === -1);
    return playerSelection;
}

let playerScore = 0;
let computerScore = 0;
// Get all DOM elements used
const resultDiv = document.querySelector(".round-result");
const playerScoreDiv = document.querySelector(".player-score");
const cpuScoreDiv = document.querySelector(".cpu-score");
const finalResultDiv = document.querySelector(".final-results");
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
    btn.addEventListener("click", () => {
        if (playerScore < 5 && computerScore < 5){
            let playerSelection = btn.textContent;
            let roundResult = playRound(playerSelection, computerPlay()); // Play a round of RPS with the button the player pressed
            printRoundResult(roundResult);
            changeScore(roundResult);
        }
    });
}

// Print round results to screen
let printRoundResult = (text) => {
    resultDiv.textContent = text;
}

// Change scores based on the previous round
let changeScore = (roundResult) => {
    if (roundResult.includes("Win")) {
        playerScore++;
    } else if (roundResult.includes("Lose")) {
        computerScore++;
    }
    playerScoreDiv.textContent = playerScore;
    cpuScoreDiv.textContent = computerScore;

    // Declare the winner at 5 rounds won
    if (playerScore >= 5) {
        finalResultDiv.textContent = "You Win!";
    } else if (computerScore >= 5) {
        finalResultDiv.textContent = "You Lose!";
    }
}


// Get a random number from 0 to 2.
// 0 -> return rock, 1 -> return paper, 2 -> return scissors
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

// Play 5 rounds and report who won the most rounds
let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerInput();
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
        console.log(roundResult);
    }
    let result;
    if (playerScore > computerScore) {
        result = "You Win!";
    } else if (playerScore < computerScore) {
        result = "You lose!";
    } else {
        result = "Tie!";
    }
    result += ` ${playerScore} - ${computerScore}`
    console.log(result);
}
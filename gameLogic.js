let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1
    let choice;
    switch (randomNum) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
            break;
    }
    return choice;
}

function playRound(playerInput, computerInput) {
    let computerWonOutput = `Computer Won! `;
    let playerWonOutput = `Player Won! `;
    let rockWon = `Rock Beats scissors`;
    let paperWon = `Paper Beats Rock`;
    let scissorsWon = `Scissors Beats Paper`;
    playerInput = playerInput.toLowerCase();
    let possibleOutcomes = ['rock', 'paper', 'scissors'];
    if (playerInput === possibleOutcomes[0] &&
        computerInput === possibleOutcomes[1]) {
        return computerWonOutput + paperWon
    } else if (
        playerInput === possibleOutcomes[0] &&
        computerInput === possibleOutcomes[2]) {
        return playerWonOutput + rockWon;
    }
    else if (
        playerInput === possibleOutcomes[1] &&
        computerInput === possibleOutcomes[0]) {
        return playerWonOutput + paperWon;
    }
    else if (
        playerInput === possibleOutcomes[1] &&
        computerInput === possibleOutcomes[2]) {
        return computerWonOutput + scissorsWon;
    }
    else if (
        playerInput === possibleOutcomes[2] &&
        computerInput === possibleOutcomes[0]) {
        return computerWonOutput + rockWon;
    }
    else if (
        playerInput === possibleOutcomes[2] &&
        computerInput === possibleOutcomes[1]) {
        return playerWonOutput + paperWon;
    }
    else {
        return "It's a Tie"
    }


}

function checkPlayerSelection(playerSelection) {
    if (playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors") {
        return playerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
    }
    return playerSelection
}

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection =
            prompt("Select Your Weapon: rock, paper or scissors");

        playerSelection = playerSelection.toLowerCase()

        playerSelection = checkPlayerSelection(playerSelection)

        let result = playRound(playerSelection, computerSelection)
        if (result.charAt(0) === "C") {
            computerScore++
        } else if (result.charAt(0) === "P") {
            playerScore++
        }
        console.log(`Player Score is:${playerScore} ${playerSelection}`);
        console.log(`Computer Score is:${computerScore} ${computerSelection}`);
        if (result.charAt(0) === "I") {
            console.log('Tie Round')
        }
    }

    if (playerScore > computerScore) {
        return `Winner is Player with ${playerScore} - ${computerScore}`
    }
    else if (
        playerScore < computerScore) {
        return `Winner is Computer ${computerScore} - ${playerScore}`
    }
    else {
        return `Tie ${computerScore} - ${playerScore}`
    }
}


console.log(game())
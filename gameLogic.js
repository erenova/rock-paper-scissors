// DOM elements -- start
const rockDom = document.querySelector('[data-move="rock"]');
const paperDom = document.querySelector('[data-move="paper"]');
const scissorsDom = document.querySelector('[data-move="scissors"]');
const playerScoreDom = document.querySelector(".player-score");
const computerScoreDom = document.querySelector(".computer-score");
const winnerDom = document.querySelector(".winner");

// Dom elements -- end

// Variables -- start

let computerScore = 0;
let playerScore = 0;
let elementID;
// variables -- end

// assign the scores -- start

playerScoreDom.textContent = playerScore;
computerScoreDom.textContent = computerScore;

// assing the scores -- end

// EventListener -- start
[rockDom, paperDom, scissorsDom].forEach((element) => {
  element.addEventListener("click", (e) => {
    elementID = e.target.dataset.move;

    console.log(game(playRound(elementID, getComputerChoice())));
  });
});
// EventListener -- end

// Function area -- start
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3) + 1;
  let choice;
  switch (randomNum) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
}

function playRound(playerInput, computerInput) {
  console.log(playerInput);
  console.log(computerInput);

  let computerWonText = `Computer Won The Round!`;
  let playerWonText = `Player Won The Round!`;
  let rockWon = `Rock Beats scissors`;
  let paperWon = `Paper Beats Rock`;
  let scissorsWon = `Scissors Beats Paper`;
  playerInput = playerInput.toLowerCase();
  let possibleOutcomes = ["rock", "paper", "scissors"];
  if (
    playerInput === possibleOutcomes[0] &&
    computerInput === possibleOutcomes[1]
  ) {
    return {
      winner: "computer",
      move: "paper",
      output: `${computerWonText} ${paperWon}`,
    };
  } else if (
    playerInput === possibleOutcomes[0] &&
    computerInput === possibleOutcomes[2]
  ) {
    return {
      winner: "player",
      move: "rock",
      output: `${playerWonText} ${rockWon}`,
    };
  } else if (
    playerInput === possibleOutcomes[1] &&
    computerInput === possibleOutcomes[0]
  ) {
    return {
      winner: "player",
      move: "paper",
      output: `${playerWonText} ${paperWon}`,
    };
  } else if (
    playerInput === possibleOutcomes[1] &&
    computerInput === possibleOutcomes[2]
  ) {
    return {
      winner: "computer",
      move: "scissors",
      output: `${computerWonText} ${scissorsWon}`,
    };
  } else if (
    playerInput === possibleOutcomes[2] &&
    computerInput === possibleOutcomes[0]
  ) {
    return {
      winner: "computer",
      move: "rock",
      output: `${computerWonText} ${rockWon}`,
    };
  } else if (
    playerInput === possibleOutcomes[2] &&
    computerInput === possibleOutcomes[1]
  ) {
    return {
      winner: "player",
      move: "scissors",
      output: `${playerWonText} ${scissorsWon}`,
    };
  } else {
    return { winner: "", move: playerInput, output: "It's a Tie" };
  }
}

function game(round) {
  if (round.winner === "player") {
    winnerDom.textContent = round.output;
    playerScore++;
    playerScoreDom.textContent = playerScore;
  } else if (round.winner === "computer") {
    winnerDom.textContent = round.output;
    computerScore++;
    computerScoreDom.textContent = computerScore;
  }

  if (round.winner === "") {
    winnerDom.textContent = round.output;
    return;
  }

  if (computerScore === 5 || playerScore === 5) {
    computerScoreDom.textContent = computerScore;
    playerScoreDom.textContent = playerScore;
    if (computerScore > playerScore) {
      let difference = computerScore - playerScore;
      let oldPlayerScore = playerScore;
      let oldComputerScore = computerScore;
      playerScore = 0;
      computerScore = 0;
      computerScoreDom.textContent = computerScore;
      playerScoreDom.textContent = playerScore;
      winnerDom.textContent = `Game Ended! Computer Won the game with a ${difference}-point margin! 
      Player: ${oldPlayerScore} - Computer: ${oldComputerScore}`;
    } else {
      let difference = playerScore - computerScore;
      let oldPlayerScore = playerScore;
      let oldComputerScore = computerScore;
      playerScore = 0;
      computerScore = 0;
      computerScoreDom.textContent = computerScore;
      playerScoreDom.textContent = playerScore;
      winnerDom.textContent = `Game Ended! Player Won the game with a ${difference}-point margin! 
      Player: ${oldPlayerScore} - Computer: ${oldComputerScore}`;
    }
  }
}

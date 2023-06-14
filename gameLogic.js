//! Game Settings
const settings = {
  playerScore: 0,
  computerScore: 0,
  gameScore: 3,
  round: 0,
  setPlayerScore() {
    document.querySelector(
      `.scoreboard-player-score`
    ).innerText = `${settings.playerScore}`;
  },
  setComputerScore() {
    document.querySelector(
      `.scoreboard-computer-score`
    ).innerText = `${settings.computerScore}`;
  },
  resetScores() {
    settings.computerScore = 0;
    settings.playerScore = 0;
    document.querySelector(
      `.scoreboard-computer-score`
    ).innerText = `${settings.computerScore}`;
    document.querySelector(
      `.scoreboard-player-score`
    ).innerText = `${settings.playerScore}`;
    document.querySelector(
      `.scoreboard-result`
    ).innerText = `Make a move to start the game`;
  },
  setRoundText(text) {
    document.querySelector(`.scoreboard-result`).innerText = `${text}`;
  },
  playerLastMove: ``,
  computerLastMove: ``,
  moves: ["rock", "paper", "scissors"],
};

function computerMove() {
  let random = Math.floor(3 * Math.random());
  return settings.moves[random];
}

//!Game Rules || function area
function playRound(pMove, cMove) {
  if (pMove === settings.moves[0] && cMove === settings.moves[1]) {
    ++settings.computerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Computer Won the Round!");
    }
  } else if (pMove === settings.moves[0] && cMove === settings.moves[2]) {
    ++settings.playerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Player Won the Round!");
    }
  } else if (pMove === settings.moves[1] && cMove === settings.moves[0]) {
    ++settings.playerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Player Won the Round!");
    }
  } else if (pMove === settings.moves[1] && cMove === settings.moves[2]) {
    ++settings.computerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Computer Won the Round!");
    }
  } else if (pMove === settings.moves[2] && cMove === settings.moves[0]) {
    ++settings.computerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Computer Won the Round!");
    }
  } else if (pMove === settings.moves[2] && cMove === settings.moves[1]) {
    ++settings.playerScore;

    settings.setPlayerScore();
    settings.setComputerScore();
    if (
      settings.playerScore !== settings.gameScore ||
      settings.computerScore !== settings.gameScore
    ) {
      settings.setRoundText("Player Won the Round!");
    }
  } else {
    settings.setRoundText("Round is tie!");
  }
}

function game() {
  if (
    settings.computerScore >= settings.gameScore ||
    settings.playerScore >= settings.gameScore
  ) {
    if (settings.computerScore > settings.playerScore) {
      settings.setRoundText(`!!Computer Won The Game!!`);
      styling.computerBorder.classList.add("winner-glow");
    } else {
      styling.playerBorder.classList.add("winner-glow");
      settings.setRoundText(`!!Player Won The Game!!`);
    }
    setTimeout(() => {
      moveList.forEach((e) => {
        if (e.moveName !== "reset") {
          e.moveDOM.classList.add(`disabled`);
          e.moveDOM.disabled = true;
        }
      });
    }, 500);
  }
}

function AnimationControl() {
  if (settings.round == 0) {
    startAnimation(settings.playerLastMove, settings.computerLastMove);
    settings.round++;
  } else {
    clearAnimation();

    setTimeout(() => {
      startAnimation(settings.playerLastMove, settings.computerLastMove);
    }, 10);
    settings.round++;
  }
}

//! style area

const animationObject = {
  computerAnimation: document.querySelector(`.computer-animation`),
  playerAnimation: document.querySelector(`.player-animation`),
  computerHolder: document.querySelector(`.modal-computer`),
  playerHolder: document.querySelector(`.modal-player`),
};

const styling = {
  playerBorder: document.querySelector(`.scoreboard-player`),
  computerBorder: document.querySelector(`.scoreboard-computer`),
};
function startAnimation(player, computer) {
  animationObject.computerAnimation.src = `assets/${computer}.svg`;
  animationObject.playerAnimation.src = `assets/${player}.svg`;
  animationObject.playerAnimation.classList.add("player-animating");
  animationObject.computerAnimation.classList.add("computer-animating");
}
function clearAnimation() {
  animationObject.playerAnimation.classList.remove("player-animating");
  animationObject.computerAnimation.classList.remove("computer-animating");
}

//! DOM area
const moveList = [
  {
    moveDOM: document.querySelector(".action-rock"),
    moveName: `rock`,
  },
  {
    moveDOM: document.querySelector(".action-paper"),
    moveName: `paper`,
  },
  {
    moveDOM: document.querySelector(".action-scissors"),
    moveName: `scissors`,
  },
  { moveDOM: document.querySelector(`.reset-button`), moveName: `reset` },
];

moveList.forEach((e) => {
  if (e.moveName == "reset") {
    e.moveDOM.addEventListener("click", () => {
      clearAnimation();
      settings.round = 0;
      styling.playerBorder.classList.remove("winner-glow");
      styling.computerBorder.classList.remove("winner-glow");
      settings.resetScores();
      e.moveDOM.disabled = true;
      e.moveDOM.classList.add("disabled");
      setTimeout(() => {
        moveList.forEach((e) => {
          e.moveDOM.disabled = false;
          e.moveDOM.classList.remove("disabled");
          if (e.moveName !== "reset") {
            e.moveDOM.classList.remove(`disabled`);
            e.moveDOM.disabled = false;
          }
        });
      }, 500);
    });
    return;
  }
  e.moveDOM.addEventListener("click", () => {
    moveList.forEach((e) => {
      if (e.moveDOM.disabled === false) {
        e.moveDOM.disabled = true;
        e.moveDOM.classList.add("disabled");
        setTimeout(() => {
          e.moveDOM.disabled = false;
          e.moveDOM.classList.remove("disabled");
        }, 500);
      }
    });

    settings.playerLastMove = e.moveName;
    settings.computerLastMove = computerMove();
    playRound(settings.playerLastMove, settings.computerLastMove);
    game();
    AnimationControl();
  });
});

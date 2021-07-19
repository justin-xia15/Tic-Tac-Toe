const square =   document.querySelectorAll(".box");
const gameText = document.querySelector("h2");
let currentPlayer = 1;
let moves = 0;
let winner = false;
let gameState = ["", "", "",
                 "", "", "",
                 "", "", ""];

play();

function play() {
  if (currentPlayer === 1) {
    for (let i = 0; i < 9; i++) {
      square[i].addEventListener("click", function() {
        gameText.innerText = "X's turn."
        this.innerText = "O";
        this.style.pointerEvents = "none";
        gameState[this.id] = "O";
        moves++
        changePlayer();
        if (currentPlayer === 2) {
          gameText.innerText = "O's turn."
          this.innerText = "X";
          gameState[this.id] = "X";
        }
        checkWin("X");
        checkWin("O");
        checkDraw();
      });
    }
  }
}

function changePlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else if (currentPlayer === 2) {
    currentPlayer = 1;
  }
}

function restart() {
  gameText.innerText = "X's turn";
  currentPlayer = 1;
  moves = 0;
  winner = false;
  gameState = ["", "", "",
               "", "", "",
               "", "", ""];
  for (let i = 0; i < 9; i++) {
  square[i].innerText = "";
  square[i].style.pointerEvents = "auto";
  }
}

document.querySelector(".btn").addEventListener("click", function() {
  restart();
});

function checkWin(player) {
  if (gameState[0] === player && gameState[1] === player && gameState[2] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[3] === player && gameState[4] === player && gameState[5] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[6] === player && gameState[7] === player && gameState[8] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[0] === player && gameState[3] === player && gameState[6] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[1] === player && gameState[4] === player && gameState[7] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[2] === player && gameState[5] === player && gameState[8] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  }
  else if(gameState[2] === player && gameState[4] === player && gameState[6] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  }
  else if(gameState[0] === player && gameState[4] === player && gameState[8] === player) {
    gameText.innerText = `${player} is the winner!`;
    winner = true;

  }

  if(winner === true) {
    endGame();
  }
}

function endGame() {
  for(let i = 0; i < 9; i++) {
  square[i].style.pointerEvents = "none";
  }
}

function checkDraw() {
  if(moves === 9 && winner === false) {
    gameText.innerText = "It's a draw!";
  }
}

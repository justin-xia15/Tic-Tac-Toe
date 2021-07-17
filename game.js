let currentPlayer = 1;
let turns = 0;
let winner = false;
let gameState = ["", "", "",
  "", "", "",
  "", "", ""
];

function play() {
  if (currentPlayer === 1) {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll(".box")[i].addEventListener("click", function() {
        document.querySelector("h2").innerText = "X's turn."
        this.innerText = "O";
        this.style.pointerEvents = "none";
        gameState[this.id] = "O";
        turns++
        changePlayer();
        if (currentPlayer === 2) {
          document.querySelector("h2").innerText = "O's turn."
          this.innerText = "X";
          gameState[this.id] = "X";
        }
        checkWin("X");
        checkWin("O");
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
  document.querySelector("h2").innerText = "X's turn";
  currentPlayer = 1;
  turns = 0;
  winner = false;
  gameState = ["", "", "",
    "", "", "",
    "", "", ""
  ];
  for (let i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].innerText = "";
    document.querySelectorAll(".box")[i].style.pointerEvents = "auto";
  }
}

document.querySelector(".btn").addEventListener("click", function() {
  restart();
});
play();

function checkWin(player) {
  if (gameState[0] === player && gameState[1] === player && gameState[2] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[3] === player && gameState[4] === player && gameState[5] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[6] === player && gameState[7] === player && gameState[8] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[0] === player && gameState[3] === player && gameState[6] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[1] === player && gameState[4] === player && gameState[7] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  } else if (gameState[2] === player && gameState[5] === player && gameState[8] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  }
  else if(gameState[2] === player && gameState[4] === player && gameState[6] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  }
  else if(gameState[0] === player && gameState[4] === player && gameState[8] === player) {
    document.querySelector("h2").innerText = `${player} is the winner!`;
    winner = true;

  }

  if(winner === true) {
    endGame();
  }
}

function endGame() {
  for(let i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].style.pointerEvents = "none";
  }
}

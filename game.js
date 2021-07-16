const square1 = document.getElementById("0");
const square2 = document.getElementById("1");
const square3 = document.getElementById("2");
const square4 = document.getElementById("3");
const square5 = document.getElementById("4");
const square6 = document.getElementById("5");
const square7 = document.getElementById("6");
const square8 = document.getElementById("7");
const square9 = document.getElementById("8");

let currentPlayer = 1;
let player1Moves = [];
let player2Moves = [];
let gameState = ["", "", "",
                 "", "", "",
                 "", "", ""]

function play() {
  if (currentPlayer === 1) {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll(".box")[i].addEventListener("click", function() {
        document.querySelector("h2").innerText = "Player 1's turn."
        this.innerText = "O";
        this.style.pointerEvents = "none";
        gameState[this.id] = "O";
        changePlayer();
        if (currentPlayer === 2) {
          document.querySelector("h2").innerText = "Player 2's turn."
          this.innerText = "X";
          gameState[this.id] = "X";
        }
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

play();

const square1 = document.getElementById("0");
const square2 = document.getElementById("1");
const square3 = document.getElementById("2");
const square4 = document.getElementById("3");
const square5 = document.getElementById("4");
const square6 = document.getElementById("5");
const square7 = document.getElementById("6");
const square8 = document.getElementById("7");
const square9 = document.getElementById("8");

let currentPlayer = "X";
let player1Moves = [];
let player2Moves = [];

function play() {
  if (currentPlayer === "X") {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll(".box")[i].addEventListener("click", function() {
        // gameState[this.innerText - 1] = "O";
        document.querySelector("h2").innerText = "Player 1's turn."
        this.innerText = "O";
        changePlayer();
        if (currentPlayer === "O") {
          // gameState[this.innerText - 1] = "X";
          document.querySelector("h2").innerText = "Player 2's turn."
          this.innerText = "X";
        }
      });
    }
  }
}

function changePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else if (currentPlayer === "O") {
    currentPlayer = "X";
  }
}

play();

const square1 = document.getElementById("0");
const square2 = document.getElementById("1");
const square3 = document.getElementById("2");
const square4 = document.getElementById("3");
const square5 = document.getElementById("4");
const square6 = document.getElementById("5");
const square7 = document.getElementById("6");
const square8 = document.getElementById("7");
const square9 = document.getElementById("8");


let gameState = ["", "", "",
                 "", "", "",
                 "", "", ""];

function playerTurn() {
for (let i = 0; i < 9; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function() {
    gameState[this.innerText - 1] = "X";
    this.innerText = "X";
  });
}
}

let header = document.querySelector(".header");
let title = document.querySelector(".title");
let restartBtn = document.querySelector(".restart");
let turn = "x";
let squares = [];

function game(id) {
  let square = document.getElementById(id);
  if (turn === "x" && square.innerHTML === "") {
    square.innerHTML = "X";
    turn = "o";
    title.innerHTML = "O";
  } else if (turn === "o" && square.innerHTML === "") {
    square.innerHTML = "o";
    turn = "x";
    title.innerHTML = "X";
  }
  winner();
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[3] != ""
  ) {
    endGame(1, 2, 3);
    let square = document.getElementById("item1");
    square.className.add("winner");
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[6] != ""
  ) {
    endGame(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] != ""
  ) {
    endGame(7, 8, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[9] != ""
  ) {
    endGame(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[7] != ""
  ) {
    endGame(3, 5, 7);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[7] != ""
  ) {
    endGame(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[8] != ""
  ) {
    endGame(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != ""
  ) {
    endGame(3, 6, 9);
  }
}

function endGame(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} Winner`;
  document.getElementById("item" + num1).style.background = "#fdd813";
  document.getElementById("item" + num2).style.background = "#fdd813";
  document.getElementById("item" + num3).style.background = "#fdd813";
  setInterval(function () {
    title.innerHTML += ".";
    document.querySelector(".audio").play();
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

restartBtn.addEventListener("click", function () {
  title.innerHTML = "Wait for to restart";

  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
});

"use strict";

let scerectNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const resetGame = function () {
  document.querySelector("body").style.backgroundColor = "#222";

  setMessage("Start guessing");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  scerectNum = Math.trunc(Math.random() * 20) + 1;
};
const checkEventHandler = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setMessage("🛑 No number");
  } else if (guess === scerectNum) {
    setMessage("correct guess🥳");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = scerectNum;
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== scerectNum) {
    if (score > 0) {
      let messageToDispaly =
        guess > scerectNum ? "number is  high" : "number is  low";
      setMessage(messageToDispaly);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      setMessage("You lost the game");
    }
  }
};

const replayEventHandler = function () {
  resetGame();
};

document.querySelector(".check").addEventListener("click", checkEventHandler);

document.querySelector(".replay").addEventListener("click", replayEventHandler);

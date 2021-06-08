'use strict';

let scerectNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number';
  } else if (guess === scerectNum) {
    document.querySelector('.message').textContent = 'correct guess🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = scerectNum;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > scerectNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'number is  high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < scerectNum) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'number is  low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  scerectNum = Math.trunc(Math.random() * 20) + 1;
});
  
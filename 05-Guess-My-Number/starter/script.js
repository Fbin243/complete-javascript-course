'use strict';
let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
// Click again button
btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = highScore;
});
// Click button check
btnCheck.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  message.textContent = 'Start guessing...';
  if (!guessNumber) {
    message.textContent = 'No number!';
  } else if (guessNumber === secretNumber) {
    message.textContent = 'Correct number!';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber > secretNumber) {
    if (score > 0) {
      message.textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        message.textContent = 'You lose the game!';
        document.querySelector('body').style.background = '#ee6d03';
      }
    }
  } else if (guessNumber < secretNumber) {
    if (score > 0) {
      message.textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        message.textContent = 'You lose the game!';
        document.querySelector('body').style.background = '#ee6d03';
      }
    }
  }
});

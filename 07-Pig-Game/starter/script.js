'use stict';
const playerActive = document.querySelector('.player--active');
const players = document.querySelectorAll('.player');
const totalScoreEls = document.querySelectorAll('.score');
const currentScoreEls = document.querySelectorAll('.current-score');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
// Start state
const currentScore = [0, 0];
const totalScore = [0, 0];
let hasWinner = false;
totalScoreEls[0].textContent = 0;
totalScoreEls[1].textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  for (let i = 0; i < players.length; i++) {
    players[i].classList.toggle('player--active');
  }
};

const rollDice = function () {
  if (hasWinner) return;
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      currentScore[i] =
        diceNumber === 1 ? (currentScore[i] = 0) : currentScore[i] + diceNumber;
      currentScoreEls[i].textContent = currentScore[i];
    }
  }
  if (diceNumber === 1) switchPlayer();
};

const holdScore = function () {
  if (hasWinner) return;
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      totalScore[i] += currentScore[i];
      totalScoreEls[i].textContent = totalScore[i];
      if (totalScore[i] >= 10) {
        players[i].classList.add('player--winner');
        hasWinner = true;
        return;
      }
      currentScore[i] = 0;
      currentScoreEls[i].textContent = 0;
    }
  }
  switchPlayer();
};

// Click roll button: Roll the dice
btnRoll.addEventListener('click', rollDice);

// Click Hold Button: Add current score to the total score and switch player
btnHold.addEventListener('click', holdScore);

btnNew.addEventListener('click', function () {
  currentScore.fill(0);
  totalScore.fill(0);
  hasWinner = false;
  totalScoreEls[0].textContent = 0;
  totalScoreEls[1].textContent = 0;
  currentScoreEls[0].textContent = 0;
  currentScoreEls[1].textContent = 0;
  dice.classList.add('hidden');
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--winner')) {
      players[i].classList.remove('player--winner');
    }
  }
});

'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Answer!';
// console.log(document.querySelector('.guess').value);

let n = Math.trunc(Math.random() * 20) + 1;
console.log(n);
prompt(n);

const score = document.querySelector('.score');
const hScore = document.querySelector('.highscore');
const msg = document.querySelector('.message');

let sc = Number(score.textContent);

const scoreMinus = function () {
  sc = score.textContent;
  score.textContent = --sc;
};

const start = function () {
  const val = document.querySelector('.guess');
  let condition = Number(val.value);

  if (!condition) {
    msg.textContent = '🚫 No number provided!';
    console.log(typeof score.textContent);
  } else if (sc >= 2) {
    if (condition > n) {
      msg.textContent = 'Too High!';
      scoreMinus();
      console.log(score.textContent);
    } else if (condition < n) {
      msg.textContent = 'Too low!';
      scoreMinus();
      console.log(score.textContent);
    } else if (condition === n) {
      msg.textContent = '🥳 Correct Answer!';
      console.log(score.textContent);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.backgroundColor = '#222';
      document.querySelector('header').style.borderBottom = '7px solid #222';
      document.querySelector('.number').style.color = '#60b347';
      document.querySelector('.number').textContent = n;
      if (score.textContent > hScore.textContent) {
        hScore.textContent = score.textContent;
      }
    }
  } else if (sc == 1) {
    msg.textContent = '💥 You have lost the game!\n❗❗Try Again❗❗';
    score.textContent = '0';
    document.querySelector('.number').textContent = n;
    document.querySelector('body').style.backgroundColor = ' #FF5733 ';
    document.querySelector('.number').style.backgroundColor = '#222';
    document.querySelector('header').style.borderBottom = '7px solid #222';
    document.querySelector('.number').style.color = ' #FF5733 ';
  }
};

document.querySelector('.check').addEventListener('click', start);

document.querySelector('.again').addEventListener('click', function () {
  n = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  score.textContent = '20';
  sc = 20;
  document.querySelector('header').style.borderBottom = '7px solid #eee';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '0';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

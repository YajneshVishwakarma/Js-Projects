'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Answer!';
// console.log(document.querySelector('.guess').value);

const n = Math.trunc(Math.random() * 20) + 1;
console.log(n);

const score = document.querySelector('.score');
const msg = document.querySelector('.message');

let sc = score.textContent;

document.querySelector('.check').addEventListener('click', function () {
  const val = document.querySelector('.guess');
  let condition = Number(val.value);
  
  if (!condition) {
    msg.textContent = '🚫 No number provided!';
    console.log(typeof score.textContent);
  } else if (sc >= 1) {
    if (condition > n) {
      msg.textContent = 'Too High!';
      document.querySelector('.score').textContent = sc--;
      console.log(score.textContent);
    } else if (condition < n) {
      msg.textContent = 'Too low!';
      document.querySelector('.score').textContent = sc--;
      console.log(score.textContent);
    } else if (condition === n) {
      msg.textContent = '🥳 Correct Answer!';
      console.log(score.textContent);
      document.querySelector('body')
    }
  }
  else
  {
    msg.textContent = '💥 You have lost the game!\n❗❗Try Again❗❗';
    score.textContent = 0;
  }
});

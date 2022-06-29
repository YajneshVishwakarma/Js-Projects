'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Answer!';
// console.log(document.querySelector('.guess').value);

const n = Math.trunc(Math.random() * 20) + 1;
console.log(n);

document.querySelector('.check').addEventListener('click', function () {
  const val = document.querySelector('.guess');
  let condition = Number(val.value);

  const msg = document.querySelector('.message');
  const score = document.querySelector('.score');
  let sc = 20;

  if (!condition) {
    msg.textContent = '🚫 No number provided!';
    console.log(typeof score.value);
  } else if (condition > n) {
    msg.textContent = 'Too High!';
    sc--;
    document.querySelector('.score').textContent = sc;
    console.log(score.value);
  } else if (condition < n) {
    msg.textContent = 'Too low!';
    sc--;
    document.querySelector('.score').textContent = sc;
  } else if (condition === n) {
    msg.textContent = '🥳 Correct Answer!';
  }
};);

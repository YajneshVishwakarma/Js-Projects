'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Answer!';
// console.log(document.querySelector('.guess').value);

const changeScore = function () {
    const val = document.querySelector('.guess');
    let condition = Number(val.value);
    const msg = document.querySelector('.message');
    if (!condition) {
        msg.textContent = '🚫 No number provided!!'
    }
};

document.querySelector('.check').addEventListener('click', changeScore);

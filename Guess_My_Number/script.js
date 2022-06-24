'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct Answer!';
console.log(document.querySelector('.guess').value);

const changeScore = function(){
    const val = document.querySelector('.guess').value;
    document.querySelector('.score').textContent = val;
}

document.querySelector('.check').addEventListener('click',changeScore);
    

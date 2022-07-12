'use strict';

const scoreEL0 = document.getElementsByClassName('score--0');
const scoreEL1 = document.getElementsByClassName('score--1');

scoreEL0.textContent = '0';
scoreEL1.textContent = '0';

let n = Math.trunc(Math.random()*7);

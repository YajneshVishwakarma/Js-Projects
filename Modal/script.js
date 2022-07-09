'use strict';

const modal = document.querySelector('.modal');
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const hidden = document.querySelector('.hidden');

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModel);
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

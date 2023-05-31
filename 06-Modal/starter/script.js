'use strict';
const modal = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', showModal);
}

closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});

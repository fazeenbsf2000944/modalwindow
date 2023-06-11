'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnshowmodal = document.querySelectorAll('.show-modal');
const btnclosemodal = document.querySelector('.close-modal');

const showmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
console.log(btnshowmodal);

for (let i = 0; i < btnshowmodal.length; i++)
  btnshowmodal[i].addEventListener('click', showmodal);

btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closemodal();
  }
});

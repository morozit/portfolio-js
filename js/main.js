'use strict';

const refs = {
  burger: document.querySelector('#burger'),
  menu: document.querySelector('.menu'),
  menuWrapp: document.querySelector('.menu-wrapp'),
};

refs.burger.addEventListener('click', toggleBurger);
refs.menuWrapp.addEventListener('click', closeBurger);

function toggleBurger(event) {
  event.preventDefault();
  event.currentTarget.classList.toggle('active');
  refs.menuWrapp.classList.toggle('active');
  refs.menu.classList.toggle('active');
  document.body.classList.toggle('lock');
}

function closeBurger(event) {
  refs.burger.classList.remove('active');
  refs.menu.classList.remove('active');
  refs.menuWrapp.classList.remove('active');
  document.body.classList.remove('lock');
}

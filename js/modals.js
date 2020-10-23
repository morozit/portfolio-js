// PROJECT-MODAL

const projectP1 = document.querySelector('#personal-p1');
const projectP2 = document.querySelector('#personal-p2');
const projectP3 = document.querySelector('#personal-p3');
const projectP4 = document.querySelector('#personal-p4');

const projectModalTeamP1 = document.querySelector('#team-p1');
const projectModalTeamP2 = document.querySelector('#team-p2');

const projectOpenBtnP1 = document.querySelector('#personal-p1-btn');
const projectOpenBtnP2 = document.querySelector('#personal-p2-btn');
const projectOpenBtnP3 = document.querySelector('#personal-p3-btn');
const projectOpenBtnP4 = document.querySelector('#personal-p4-btn');

const projectOpenBtnTeamP1 = document.querySelector('#team-p1-btn');
const projectOpenBtnTeamP2 = document.querySelector('#team-p2-btn');

const projectModals = [
  projectP1,
  projectP2,
  projectP3,
  projectP4,
  projectModalTeamP1,
  projectModalTeamP2,
];
const projectBtns = [
  projectOpenBtnP1,
  projectOpenBtnP2,
  projectOpenBtnP3,
  projectOpenBtnP4,
  projectOpenBtnTeamP1,
  projectOpenBtnTeamP2,
];

projectBtns.forEach((btn, index) => {
  const projectModal = projectModals[index];

  if (btn) {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      projectModal.classList.add(MODAL_ACTIVE_CLASS);

      document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    })
  }
});

// MODALS.JS


const burger = document.querySelector('#burger');
const myVideoBtn = document.querySelector('#my-video-btn');

const myVideoModal = document.querySelector('#my-video-modal');
const mobileMenu = document.querySelector('#mobile-menu');

const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

const modalsWrappers = document.querySelectorAll('.modal-area-bgd');
const modalContainers = document.querySelectorAll('.modal-area-content');

const MODAL_ACTIVE_CLASS = 'modal-active';
const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';

enableCloseModalOnBgdClick();
hideModalOnMobileMenuElementsClick();

const modals = [mobileMenu, myVideoModal];
const buttons = [burger, myVideoBtn];

buttons.forEach((btn, index) => {
  const projectModal = modals[index];

  if (btn) {
    btn.addEventListener('click', event => {
      event.preventDefault();
      projectModal.classList.add(MODAL_ACTIVE_CLASS);

      document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    });
  }
});

modalCloseBtns.forEach(btn => {
  btn.addEventListener('click', hideModal);
});

function enableCloseModalOnBgdClick() {
  if (modalContainers.length) {
    modalContainers.forEach(container => {
      container.addEventListener('click', event => event.stopPropagation());
    });
  }

  if (modalsWrappers.length) {
    modalsWrappers.forEach(container => {
      container.addEventListener('click', hideModal);
    });
  }
}

function hideModal() {
  const modalToClose = document.querySelector(`.${MODAL_ACTIVE_CLASS}`);

  if (modalToClose) {
    modalToClose.classList.remove(MODAL_ACTIVE_CLASS);
    document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);
  }

  const video = document.querySelector('video');

  if (video) {
    video.pause();
  }
}

function hideModalOnMobileMenuElementsClick() {
  const MOBILE_MENU_ITEM_CLOSE_DELAY = 150;
  const menuElements = document.querySelectorAll('.menu-list__item');

  if (menuElements.length) {
    menuElements.forEach(container => {
      container.addEventListener('click', () => setTimeout(hideModal, MOBILE_MENU_ITEM_CLOSE_DELAY));
    });
  }
}

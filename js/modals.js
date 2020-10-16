// const projectModalFullStack = document.querySelector('#personal-project-full-stack');
// const projectModalWeddingProject = document.querySelector('#personal-project-wedding-project');
// const projectModaProTest = document.querySelector('#personal-project-pro-test');
// const projectModalProjectGoit = document.querySelector('#personal-project-goit');

// const projectModalQuestify = document.querySelector('#team-project-questify');
// const projectModalItTest = document.querySelector('#team-project-it-test');

// const projectOpenBtnFullStack = document.querySelector('#personal-project-full-stack-btn');
// const projectOpenBtnWeddingProject = document.querySelector('#personal-project-wedding-project-btn');
// const projectOpenBtnProTest = document.querySelector('#personal-project-pro-test-btn');
// const projectOpenBtnProjectGoit = document.querySelector('#personal-project-goit-btn');

// const projectOpenBtnQuestify = document.querySelector('#team-project-questify-btn');
// const projectOpenBtnItTest = document.querySelector('#team-project-it-test-btn');

// const projectModals = [ projectModalFullStack, projectModalWeddingProject, projectModaProTest, projectModalProjectGoit, projectModalQuestify, projectModalItTest];
// const projectBtns = [ projectOpenBtnFullStack, projectOpenBtnWeddingProject, projectOpenBtnProTest, projectOpenBtnProjectGoit, projectOpenBtnQuestify, projectOpenBtnItTest];

// projectBtns.forEach((btn, index) => {
//     const projectModal = projectModals[index];

//     if (btn) {
//         btn.addEventListener('click', (event) => {
//             event.preventDefault();
//             projectModal.classList.add(MODAL_ACTIVE_CLASS);

//             document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
//         })
//     }
// });


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

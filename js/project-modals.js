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
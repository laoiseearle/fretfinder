const openMenu = () => {
  alert('menu opened');
};
const openHelpMenu = () => {
  alert('help opened');
};

// For touchscreens
const changePitchDir = e => {
  const target = e.target.classList;

  target.toggle('fa-arrow-circle-down');
  target.toggle('fa-arrow-circle-up');
};

// Font Awesome Icons inside Header
document.querySelector('.fa-cog').addEventListener('click', openMenu);
document.querySelector('.pitch-direction i').addEventListener('click', changePitchDir);
document.querySelector('.fa-question-circle').addEventListener('click', openHelpMenu);

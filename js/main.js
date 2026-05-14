const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  if (navLinks.style.height === '0px' || navLinks.style.height === '') {
    navLinks.style.height = navLinks.scrollHeight + 'px';
  } else {
    navLinks.style.height = '0px';
  }
});
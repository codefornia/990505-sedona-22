const nav = document.querySelector ('.main-nav__list');
const buttonNav = document.querySelector ('.main-nav__toggle');

buttonNav.addEventListener('click', function(evt){
  evt.preventDefault();
  buttonNav.classList.toggle('main-nav__toggle--close');
  nav.classList.toggle('main-nav__list--close');
});

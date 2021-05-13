const nav = document.querySelector ('.main-nav__list');
const buttonNav = document.querySelector ('.main-nav__toggle');
const errorPopup = document.querySelector(".popup--error");
const reviewPopup = document.querySelector(".popup--review");
const buttonErrorPopup = document.querySelector(".popup__button--error");
const buttonReviewPopup = document.querySelector(".popup__button--review");
const buttonReview = document.querySelector(".form__button");

buttonNav.addEventListener('click', function(evt){
  evt.preventDefault();
  buttonNav.classList.toggle('main-nav__toggle--close');
  nav.classList.toggle('main-nav__list--close');
});

buttonReview.addEventListener('click', function(evt){
  evt.preventDefault();
  reviewPopup.classList.add('popup--open');
});

buttonReviewPopup.addEventListener('click', function(evt){
  evt.preventDefault();
  reviewPopup.classList.remove('popup--open');
});

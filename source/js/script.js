const nav = document.querySelector('.main-nav__list');
const buttonNav = document.querySelector('.main-nav__toggle');
const errorPopup = document.querySelector('.popup--error');
const reviewPopup = document.querySelector('.popup--review');
const buttonErrorPopup = document.querySelector('.popup__button--error');
const buttonReviewPopup = document.querySelector('.popup__button--review');
const buttonReview = document.querySelector('.form__button');
const reviewForm = document.querySelector('.form');
const nameInput = document.getElementById('bio-name');
const surnameInput = document.getElementById('bio-surname');
const telInput = document.getElementById('user-tel');
const emailInput = document.getElementById('user-email');

document.querySelector('.main-nav__list--no-js').classList.remove('main-nav__list--no-js');

buttonNav?.addEventListener('click', function (evt) {
    evt.preventDefault();
    buttonNav.classList.toggle('main-nav__toggle--close');
    nav.classList.toggle('main-nav__list--close');
  }
);

buttonReview?.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (nameInput.checkValidity() &&
    surnameInput.checkValidity() &&
    telInput.checkValidity() &&
    emailInput.checkValidity()) {
    reviewPopup.classList.add('popup--open');
    reviewForm.submit();
    console.log('good');
  } else {
  errorPopup.classList.add('popup--open');
  console.log('bad');
  }
})

buttonReviewPopup?.addEventListener('click', function (evt) {
  evt.preventDefault();
  reviewPopup.classList.remove('popup--open');
})

buttonErrorPopup?.addEventListener('click', function (evt) {
  evt.preventDefault();
  errorPopup.classList.remove('popup--open');
})


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (errorPopup.classList.contains('popup--open')) {
      evt.preventDefault();
      errorPopup.classList.remove('popup--open');
      errorPopup.classList.remove('popup--open');
      errorPopup.classList.remove('popup--open');
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (reviewPopup.classList.contains('popup--open')) {
      evt.preventDefault();
      reviewPopup.classList.remove('popup--open');
      reviewPopup.classList.remove('popup--open');
      reviewPopup.classList.remove('popup--open');
    }
  }
});

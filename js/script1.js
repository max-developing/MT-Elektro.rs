'use strict';

// Hide loader after loading the page
const loader = document.querySelector('.loader__wrapper');
window.addEventListener('load', function () {
  loader.classList.add('hidden');
});

// Button scrolling
const buttonScrolling = function () {
  const btnScrollTo = document.querySelector('.showcase__btn');
  const mainSection = document.querySelector('.main');

  btnScrollTo.addEventListener('click', function (e) {
    mainSection.scrollIntoView({ behavior: 'smooth' });
  });
};
buttonScrolling();

// Mail script
const mailScript = function () {
  const openMailFormBtn = document.getElementById('mailbtn');
  const closeMailFormBtn = document.querySelector('.mail__form--close');
  const overlay = document.querySelector('.overlay');
  const mailForm = document.querySelector('.mail__form');
  const sendMail = document.querySelector('.mail__btn');

  const sendSuccess = document.querySelector('.mail__note--success');
  const sendFail = document.querySelector('.mail__note--fail');

  const openForm = function () {
    overlay.classList.remove('hidden');
    mailForm.classList.remove('hidden');
  };

  const closeForm = function () {
    overlay.classList.add('hidden');
    mailForm.classList.add('hidden');
  };
  // Open & Close form by clicking on Btns
  openMailFormBtn.addEventListener('click', openForm);
  closeMailFormBtn.addEventListener('click', closeForm);
  // Close form by clicking outside of the Form
  overlay.addEventListener('click', closeForm);
  // Close form by clicking esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeForm();
    }
  });

  sendMail.addEventListener('click', function (e) {
    const nameField = document.getElementById('name').value;
    const numberField = document.getElementById('telefon').value;
    const addressField = document.getElementById('address').value;
    const textArea = document.getElementById('message').value;

    if (!nameField && !numberField && !addressField && !textArea) {
      return;
    } else {
      e.preventDefault();
      sendSuccess.classList.remove('hidden');

      setTimeout(() => {
        closeForm();
      }, 2000);
    }
  });
};
mailScript();

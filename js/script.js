'use strict';

/* SCROLL ANIMATION */
$(document).ready(function () {
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({ scrollTop: $('.js--scroll-about').offset().top }, 1000);
    });
});



// MAIL

const mailSent = document.querySelector('.popup-send');
const mailClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
const popupMessageGreen = document.getElementById('popup-status--green');
const popupMessageRed = document.getElementById('popup-status--red');
const mailForm = document.querySelector('.mail-form');



// MAIL POPUP IS OPENED
document.querySelector('.mail-btn').addEventListener('click', function () {
    popup.style.display = "flex";
})

// CLOSE POPUP
const closeModal = function () {
    popup.style.display = "none";
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !popup.classList.contains('flex')) {
        closeModal();
    }
});

mailClose.addEventListener('click', closeModal);

// MAIL SENDED

const elements = document.getElementsByTagName('input');

mailSent.onclick = function () {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value === "" || elements[1].value < 1) {
            popupMessageRed.style.opacity = 1;
            setTimeout(function () {
                popupMessageRed.style.opacity = 0;
            }, 1000);
        } else if (elements[i].value !== "" || elements[1].value > 0) {
            popupMessageGreen.style.opacity = 1;
            setTimeout(function () {
                popupMessageGreen.style.opacity = 0;
                closeModal();
            }, 2000);

            setTimeout(function () {
                mailForm.reset();
            }, 3000);
        }
    }
};

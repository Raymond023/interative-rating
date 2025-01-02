'use strict';

const ratingSection = document.querySelector('.rating-section');
const message = document.querySelector('.message');
const form = document.querySelector('form');
const input = form.querySelectorAll('input[name="rating"]:checked')
const userRating = document.querySelector('.user-rating');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.rating.value) {
        ratingSection.classList.toggle('hide');
        message.classList.toggle('show');
        userRating.textContent = form.rating.value;
    }

})
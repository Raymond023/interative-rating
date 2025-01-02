'use strict';

const ratingSection = document.querySelector('.rating-section');
const message = document.querySelector('.message');
const form = document.querySelector('form');
const input = document.querySelectorAll('input')
const userRating = document.querySelector('.user-rating');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    userRating.textContent = [...input].find(radio => radio.checked).value;
    ratingSection.style.display = 'none';
    message.style.display = 'block';
})
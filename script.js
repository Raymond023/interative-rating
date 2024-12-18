'use strict';

const btn = $('.button');
const ratingSection = $('.rating-section');
const message = $('.message');
const submitBtn = $('.submit');
const userRating =$('.user-rating');

submitBtn.on('click', handleSubmitEvent);
btn.on('click', handleButtonEvent);

let selectedButton;

function handleSubmitEvent () {
    if(selectedButton) {
        ratingSection.css('display', 'none');
        message.css('display', 'block');

        userRating.text(selectedButton)
    }
}

function handleButtonEvent () {
    btn.removeClass('selected');
    $(this).addClass('selected');
    selectedButton = $(this).attr('id');
}
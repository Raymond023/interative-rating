'use strict';

const btn = $('.button');
const ratingSection = $('.rating-section');
const message = $('.message');
const submitBtn = $('.submit-btn');
const userRating =$('.user-rating');

submitBtn.on('click', handleSubmitEvent);
btn.on('click', handleButtonEvent);

submitBtn.on('keydown', function(e) {
    if (e.key === 'Enter') {
        handleSubmitEvent.call(this)
    }
});

btn.on('keydown', function(e) {
    if (e.key === 'Enter') {
        handleButtonEvent.call(this)
    }
});

let selectedButton;

function handleSubmitEvent () {
    if(selectedButton) {
        ratingSection.css('display', 'none');
        message.css('display', 'block');
        userRating.text(selectedButton);
    }
}

function handleButtonEvent () {
    btn.removeClass('selected');
    $(this).addClass('selected');
    selectedButton = $(this).attr('id');
}
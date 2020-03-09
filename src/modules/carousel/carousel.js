'use strict';

const slides = document.querySelectorAll('#slides .slide');
const currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

const nextSlide = () => {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
};

export { nextSlide };

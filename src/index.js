'use strict';

import { showTime } from './modules/clock/clock';
import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/lunch-main';
import { getHsl } from './modules/hsl/hsl-main';
import { getWeather } from './modules/weather/weather';
import { getLocalNews, getSportNews, getForeignNews } from './modules/news/news-main';
import { openAdminPanel } from './modules/admin/admin';

document.querySelector('#m-logo').addEventListener('click', () => openAdminPanel());

// Get the initial content for all page elements

showTime();
nextSlide();
getHsl();
getWeather();
getLocalNews();
getLunchMenu();

// Set timer to fetch and display HSL data once in a minute

let hslTimer = setInterval(() => {
    getHsl();
}, 60000);

// Set timer to switch between news pages in 10 second intevals

let newsCounter = 0;
let newsTimer = setInterval(() => {
    newsCounter++;
    if (newsCounter === 1) {
        getLocalNews();
    }
    if (newsCounter === 5) {
        getSportNews();
    }
    if (newsCounter === 10) {
        getForeignNews();
    }
    if (newsCounter === 15) {
        newsCounter = 0;
    }
}, 2000);

// Set timer to fetch and display weather data every 5 minutes

let weatherTimer = setInterval(() => {
    getWeather();
}, 300000);

export { getLunchMenu, getHsl, getWeather };
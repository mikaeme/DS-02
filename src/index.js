'use strict';

import { showTime } from './modules/clock/clock';
import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/lunch-main';
import { getHsl } from './modules/hsl/hsl-main';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/news-main';
import { openAdminPanel } from './modules/admin/admin';

import { getAltNews } from './modules/news/news';

// button to open the control panel

document.querySelector('#m-logo').addEventListener('click', () => openAdminPanel());

// Get the initial content for all page elements

showTime();
nextSlide();
getHsl();
getWeather();
getLunchMenu();
getAltNews();

// Set timer to fetch and display HSL data once in a minute

let hslTimer = setInterval(() => {
    getHsl();
}, 60000);

// Set timer to switch between news pages in 10 second intervals

// let newsCounter = 0;
// let newsTimer = setInterval(() => {
//     newsCounter++;
//     if (newsCounter === 1) {
//         const limits = [11, 7, 13];
//         getNews(102, limits);
//     }
//     if (newsCounter === 5) {
//         const limits = [20, 5, 20];
//         getNews(130, limits);
//     }
//     if (newsCounter === 10) {
//         const limits = [15, 7, 17];
//         getNews(201, limits);
//     }
//     if (newsCounter === 15) {
//         newsCounter = 0;
//     }
// }, 2000);

// Set timer to fetch and display weather data every 5 minutes

let weatherTimer = setInterval(() => {
    getWeather();
}, 300000);

export { getLunchMenu, getHsl, getWeather };

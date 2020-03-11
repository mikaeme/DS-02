'use strict';

import { showTime } from './modules/clock/clock';
import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';
import {getSNews} from './modules/news/sports';
import {getFNews} from './modules/news/foreign';
import { openAdminPanel } from './modules/admin/admin';

const body = document.querySelector('body');

document.querySelector('#m-logo').addEventListener('click', () => openAdminPanel());

let hslTimer = setInterval(() => {
        getHsl();
  }, 60000);

let newsCounter = 0;
let newsTimer = setInterval(() => {
    newsCounter++;
    if (newsCounter === 1) {
        getNews();
    }
    if (newsCounter === 5) {
        getSNews();
        console.log('jee');
    }
    if (newsCounter === 10) {
        getFNews();
        console.log('juu');
    }
    if (newsCounter === 15) {
        newsCounter = 0;
        console.log('joo');
    }
}, 2000);

let weatherTimer = setInterval(() => {
    getWeather();
}, 600000);

showTime();
nextSlide();
getHsl();
getWeather();
getNews();
getLunchMenu();

export { body, getLunchMenu, getHsl };

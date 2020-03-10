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

let counter = 0;
let timer = setInterval(() => {
        getHsl();
  }, 60000);

<<<<<<< HEAD
=======
let newsCounter = 0;
let timeNews = setInterval(() => {
    newsCounter++;
    console.log(newsCounter);
    if (newsCounter === 1){
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

>>>>>>> 1955ee709953a4273ae029becc80475e65089f89

showTime();
nextSlide();
getHsl();
getWeather();
// getNews();
getLunchMenu();

export { body, getLunchMenu, getHsl };

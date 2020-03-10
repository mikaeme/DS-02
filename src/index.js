'use strict';

import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';
import {getSNews} from './modules/news/sports';
import {getFNews} from './modules/news/foreign';


const body = document.querySelector('body');


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


nextSlide();
getHsl();
getWeather();
// getNews();
getLunchMenu();

export { body };

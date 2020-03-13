'use strict';

import { showTime } from './modules/clock/clock';
import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/lunch-main';
import { getHsl } from './modules/hsl/hsl-main';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/news-main';

// Get the initial content for all page elements

showTime();
nextSlide();
getHsl();
getWeather();
getLunchMenu();
getNews();

// Set timers to fetch data at various intervals

let hslTimer = setInterval(() => {
    getHsl();
}, 60000);

let weatherTimer = setInterval(() => {
    getWeather();
}, 300000);

let newsTimer = setInterval(() => {
    getNews();
}, 900000);

export { getLunchMenu, getHsl, getWeather, getNews };
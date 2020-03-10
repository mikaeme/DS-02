'use strict';

/*import { nextSlide } from './modules/carousel/carousel';*/
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';
import { getAltNews } from './modules/news/news';
import { openAdminPanel } from './modules/admin/admin';
import {timeNews} from './modules/news/timer';

const body = document.querySelector('body');

document.querySelector('#m-logo').addEventListener('click', () => openAdminPanel());

/*nextSlide();*/
let counter = 0;
let timer = setInterval(() => {
    console.log(`${counter++}. tick.`);
        getHsl();
  }, 60000);

getWeather();
timeNews();
getLunchMenu();
// getAltNews();

export { body, getLunchMenu, getHsl };

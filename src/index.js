'use strict';

import { showTime } from './modules/clock/clock';
import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';


const body = document.querySelector('body');



showTime();
nextSlide();
getHsl();
getWeather();
getNews();
getLunchMenu();

export { body };

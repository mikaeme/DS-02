'use strict';

/*import { nextSlide } from './modules/carousel/carousel';*/
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';
import { getAltNews } from './modules/news/news';

const body = document.querySelector('body');

/*nextSlide();*/
getHsl();
getWeather();
getNews();
getLunchMenu();
getAltNews();

export { body };

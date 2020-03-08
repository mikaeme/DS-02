'use strict';

import {getLunchMenu} from './modules/lunch/main-module';
import {getHsl} from './modules/hsl/hsl';
import {getWeather} from './modules/weather/weather';
import {getNews} from './modules/news/teksti-tv';
import {getAltNews} from './modules/news/news';

const body = document.querySelector('body');

getHsl();
getWeather();
getNews();
getLunchMenu();
getAltNews();

export {body};
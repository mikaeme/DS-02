'use strict';

import {getLunchMenu} from './modules/lunch/main-module';
import {getHsl} from './modules/hsl/main-module';
import {getWeather} from './modules/weather/weather';
import {getNews} from './modules/news/teksti-tv';
import {getAltNews} from './modules/news/news';
import { openAdminPanel } from './modules/admin/admin';

const body = document.querySelector('body');

document.querySelector('#m-logo').addEventListener('click', () => {
    openAdminPanel();
});

getHsl();
getWeather();
getNews();
getLunchMenu();
getAltNews();

export {body};
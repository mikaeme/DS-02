'use strict';

import { nextSlide } from './modules/carousel/carousel';
import { getLunchMenu } from './modules/lunch/main-module';
import { getHsl } from './modules/hsl/main-module';
import { getWeather } from './modules/weather/weather';
import { getNews } from './modules/news/teksti-tv';


const body = document.querySelector('body');


// let carouselCounter = 0;
// let carousel = setInterval(() =>  {
// carouselCounter++;
// console.log(carouselCounter);
// if (carouselCounter === 1) {
//   document.querySelector('.slides').innerHTML = ('./assets/img/ds1.gif');
// }
// if (carouselCounter === 5) {
//   document.querySelector('.slides').innerHTML = ('./assets/img/ds1.gif');
// }
// if (carouselCounter === 1) {
//   document.querySelector('.slides').innerHTML = ('./assets/img/ds1.gif');
// }
// });

nextSlide();
getHsl();
getWeather();
getNews();
getLunchMenu();

export { body };

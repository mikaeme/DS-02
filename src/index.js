'use strict';
import {coursesFi, coursesEn, getMenus} from './modules/sodexo-data';
import {ChangeLang, finnish} from './modules/language-module';
import {SortOrder} from './modules/sort-module';
import {fazerFi, fazerEn, getFazerMenus} from './modules/fazer-data';
import {hslQuery} from './modules/hsl/hsl';
import {getWeather} from './modules/weather/weather';
import {getNews} from './modules/news/teksti-tv';

const menu = document.querySelector('.menu');
const menuFazer = document.querySelector('.menuF');
const langButton = document.querySelector('#lang');
const sortButton = document.querySelector('#sort');

const body = document.querySelector('body');

const sodexo = async () => {
    const resp = await getMenus();
menu.innerHTML = '';
coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="course">' + annos + '</li>';
});
};
sodexo();

const fazer = async () => {
    const resp = await getFazerMenus();
menuFazer.innerHTML = '';
fazerFi.forEach(annos => {
    menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
});
};
fazer();
hslQuery();
getWeather();
getNews();

langButton.addEventListener('click', ChangeLang);
sortButton.addEventListener('click', SortOrder);

export {menu, coursesFi, coursesEn, menuFazer, fazerFi, fazerEn, body};
import {menu,coursesFi,coursesEn, menuFazer, fazerFi, fazerEn} from '../index';
import {finnish} from './language-module';

const SortOrder = () => {
    menu.innerHTML = '';
    menuFazer.innerHTML = '';
    if (finnish) {
        coursesFi.reverse();
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        fazerFi.reverse();
        fazerFi.forEach(annos => {
            menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
        });
    } else {
        coursesEn.reverse();
        coursesEn.forEach(course => {
            menu.innerHTML += '<li class="course">' + course + '</li>';
        });
        fazerEn.reverse();
        fazerEn.forEach(annos => {
            menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
        });
    };
};

export {SortOrder};
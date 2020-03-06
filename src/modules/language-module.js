import {menu, menuFazer, coursesFi,coursesEn, fazerFi, fazerEn} from '../index';

let finnish = true;

const ChangeLang = () => {
    menu.innerHTML = '';
    menuFazer.innerHTML ='';

    if (finnish) {
        coursesEn.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        fazerEn.forEach(annos =>{
            menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
        });
        finnish = false;
    } else {
        coursesFi.forEach(annos => {
            menu.innerHTML += '<li class="course">' + annos + '</li>';
        });
        fazerFi.forEach(annos =>{
            menuFazer.innerHTML += '<li class="course">' + annos + '</li>';
        });
        finnish = true;
    };
};

export {ChangeLang,finnish};
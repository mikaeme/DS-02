'use strict';
import { getJsonMenu } from './fetch-module';

const fazerFi = [];
const fazerEn = [];
let course = [];
let courseEn = [];

const url = 'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3104&language=';

const getFazerMenus = async () => {
    const response = await getJsonMenu(url + 'fi');
    const responseEn = await getJsonMenu(url + 'en');
    const menu = await response;
    const menuEn = await responseEn;

    parseMenus(menu, menuEn);
};

const parseMenus = async (menu, menuEn) => {
    for (let i in menu.MenusForDays[0].SetMenus) {
        for (let j in menu.MenusForDays[0].SetMenus[i].Components) {
            course.push('\n' + menu.MenusForDays[0].SetMenus[i].Components[j]);
            courseEn.push('\n' + menuEn.MenusForDays[0].SetMenus[i].Components[j]);
        };
        fazerFi.push(course.toString());
        fazerEn.push(courseEn.toString());
        course = [];
        courseEn = [];
        fazerFi.sort();
        fazerEn.sort();
    };
};

export { fazerFi, fazerEn, getFazerMenus };
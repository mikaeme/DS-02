'use strict';
import { getJsonData } from '../fetch-module';

// Declare menu arrays
let fazerFi = [];
let fazerEn = [];
let course = [];
let courseEn = [];

const url = 'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3104&language=';

/**
 * Function calls for fetching the menus
 */

const getFazerMenus = async () => {
    const response = await getJsonData(url + 'fi', true);
    const responseEn = await getJsonData(url + 'en', true);
    const menu = await response;
    const menuEn = await responseEn;

    parseMenus(menu, menuEn);
};

/**
 * Convert fetched data to arrays of objects
 * @param {object} menu - object containing data in finnish
 * @param {object} menuEn - object containing data in english
 */

const parseMenus = async (menu, menuEn) => {
    fazerFi = [];
    fazerEn = [];
    for (let i in menu.MenusForDays[0].SetMenus) {
        for (let j in menu.MenusForDays[0].SetMenus[i].Components) {
            course.push('\n' + menu.MenusForDays[0].SetMenus[i].Components[j]);
            courseEn.push('\n' + menuEn.MenusForDays[0].SetMenus[i].Components[j]);
        };
        // Create objects
        let rowFi = {
            title: course,
            price: menu.MenusForDays[0].SetMenus[i].Price,
            properties: ''
        };
        let rowEn = {
            title: courseEn,
            price: menu.MenusForDays[0].SetMenus[i].Price,
            properties: ''
        };
        // push objects to arrays
        fazerFi.push(rowFi);
        fazerEn.push(rowEn);
        course = [];
        courseEn = [];
    };
};

export { fazerFi, fazerEn, getFazerMenus };
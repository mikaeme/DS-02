'use strict';
import { getJsonMenu } from './fetch-module';
import { dd, mm, yyyy } from './date';

const coursesFi = [];
const coursesEn = [];
const today = yyyy + '-' + mm + '-' + dd;

// fetch data from Sodexo
const getMenus = async() => {
    // const response = await getJsonMenu('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-03-06');// Backup link for weekends
    const response = await getJsonMenu('https://www.sodexo.fi/ruokalistat/output/daily_json/152/' + today);
    const menu = await response;
    parseMenus(menu);
};

// make an array out of received data
const parseMenus = async(menu) => {

    for (let i in menu.courses) {
        let rowFi = {
            title: menu.courses[i].title_fi,
            price: menu.courses[i].price,
            properties: menu.courses[i].properties,
        };
        let rowEn = {
            title: menu.courses[i].title_en,
            price: menu.courses[i].price,
            properties: menu.courses[i].properties,
        };
        coursesFi.push(rowFi);
        coursesEn.push(rowEn);
    }
    // coursesFi.sort((a, b) => (a.title > b.title) ? 1 : -1);
    // coursesEn.sort((a, b) => (a.title > b.title) ? 1 : -1);
};

export { coursesEn, coursesFi, getMenus };
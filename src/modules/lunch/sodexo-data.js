'use strict';
import { getJsonData } from '../fetch-module';
import { dd, mm, yyyy } from '../clock/date';
import { currentLocation } from '../admin/admin';

let coursesFi = [];
let coursesEn = [];

const url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/';
const today = yyyy + '-' + mm + '-' + dd;
let location = '152/';

// fetch data from Sodexo
const getMenus = async () => {
    if (currentLocation === 2) {
        location = '158/';
    } else if (currentLocation === 3) {
        location = '68/';
    } else {
        location = '152/';
    }
    const response = await getJsonData(url + location + today, false);
    //const response = await getJsonData('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-03-13');// Backup link for weekends
    const menu = await response;
    parseMenus(menu);
};

/**
 * Convert fetched data to arrays of objects
 * @param {object} menu - object containing data
 */

const parseMenus = async (menu) => {
    coursesFi = [];
    coursesEn = [];
    for (let i in menu.courses) {
        // Create objects
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
        // push objects to arrays
        coursesFi.push(rowFi);
        coursesEn.push(rowEn);
    }
};

export { coursesEn, coursesFi, getMenus };
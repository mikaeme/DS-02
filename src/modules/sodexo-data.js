'use strict';
import { getJsonMenu } from './fetch-module';
import { dd, mm, yyyy} from './date';

const coursesFi = [];
const coursesEn = [];
const today = yyyy + '-' + mm + '-' +dd;

const getMenus = async () => {
    // const response = await getJsonMenu('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-02-21');// Backup link for weekends
    const response = await getJsonMenu('https://www.sodexo.fi/ruokalistat/output/daily_json/152/' + today);
    const menu = await response;
    parseMenus(menu);
};

const parseMenus = async (menu) => {

    for (let i in menu.courses) {
        coursesFi.push(menu.courses[i].title_fi);
        coursesEn.push(menu.courses[i].title_en);
    }
    coursesFi.sort();
    coursesEn.sort();
};

export { coursesEn, coursesFi, getMenus };
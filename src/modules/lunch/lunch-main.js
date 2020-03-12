'use strict';
import { getMenus, coursesFi, coursesEn } from './sodexo-data';
import { showLunchMenu } from './lunch-show';
import { getFazerMenus, fazerFi, fazerEn } from './fazer-data';
import { currentLocation } from '../admin/admin';
import { finnish } from '../admin/admin';

/**
 * Function call for fetching and displaying data
 */

const getLunchMenu = async () => {
 // fetch lunch data
    if (currentLocation === 1) {
        await getFazerMenus();
        if(finnish) {showLunchMenu(fazerFi);
        } else {
        showLunchMenu(fazerEn);
        } 
    } else {
        await getMenus();
        if(finnish) {showLunchMenu(coursesFi);
        } else {
        showLunchMenu(coursesEn);
        } 
    }
};

getFazerMenus();

export { getLunchMenu };
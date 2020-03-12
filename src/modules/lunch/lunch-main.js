'use strict';
import { getMenus, coursesFi, coursesEn } from './sodexo-data';
import { showLunchMenu } from './lunch-show';
import { getFazerMenus, fazerFi } from './fazer-data';
import { currentLocation } from '../admin/admin';

const getLunchMenu = async () => {
 // fetch lunch data
    if (currentLocation === 1) {
        await getFazerMenus();
        showLunchMenu(fazerFi); // present it in HTML
    } else {
        await getMenus();
        showLunchMenu(coursesFi); // present it in HTML
    }
};

getFazerMenus();

export { getLunchMenu };
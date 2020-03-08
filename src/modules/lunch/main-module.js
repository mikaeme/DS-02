'use strict';
import { getMenus, coursesFi, coursesEn } from './sodexo-data';
import { showLunchMenu } from './show-module';

const getLunchMenu = async () => {
    await getMenus(); // fetch lunch data
    showLunchMenu(coursesFi); // present it in HTML
};

export { getLunchMenu };
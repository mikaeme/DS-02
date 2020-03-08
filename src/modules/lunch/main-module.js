'use strict';
import { getMenus, coursesFi, coursesEn } from './sodexo-data';
import { showLunchMenu } from './show-module';
import { getFazerMenus } from './fazer-data';

const getLunchMenu = async () => {
    await getMenus(); // fetch lunch data
    showLunchMenu(coursesFi); // present it in HTML
};

getFazerMenus();

export { getLunchMenu };
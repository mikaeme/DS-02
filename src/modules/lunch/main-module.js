'use strict';
import { getMenus, coursesFi, coursesEn } from './sodexo-data';
import { showLunchMenu } from './show-module';

const getLunchMenu = async () => {
    await getMenus();
    console.log(coursesFi);
    showLunchMenu(coursesFi);
};

export { getLunchMenu };
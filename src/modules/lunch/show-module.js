'use strict';
// import {ChangeLang, finnish} from './language-module';
// import {SortOrder} from './sort-module';
// import { getMenus } from './lunch/sodexo-data';

// const sodexo = async () => {ss
//     const resp = await getMenus();
const showLunchMenu = async (menu) => {
  console.log('show', menu);
    for (let i in menu) {
      document.querySelector('.lunch-menu').innerHTML += (`<ul class="lunch-row">
      <li class="menu-title">${menu[i].title}</li>
      <li class="menu-price">${menu[i].price}</li>
      <li class="menu-properties">${menu[i].properties}</li>
      </ul>`);
    }
  };

  export { showLunchMenu };

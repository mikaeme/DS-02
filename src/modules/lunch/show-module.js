'use strict';

const showLunchMenu = async(menu) => {
    for (let i in menu) {
        document.querySelector('.lunch-menu').innerHTML += (`<ul class="lunch-row">
      <li class="menu-title">${menu[i].title}</li>
      <li class="menu-price">${menu[i].price}</li>
      <li class="menu-properties">${menu[i].properties}</li>
      </ul>`);
    }
};

export { showLunchMenu };
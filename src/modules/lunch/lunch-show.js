'use strict';
const lunchMenu = document.querySelector('.lunch-menu');

const showLunchMenu = async(menu) => {
  lunchMenu.innerHTML = ('');
  console.log('MENU', menu); 
    for (let i in menu) {
        lunchMenu.innerHTML += (`<ul class="lunch-row">
      <li class="menu-title">${menu[i].title}</li>
      <li class="menu-price">${menu[i].price}</li>
      <li class="menu-properties">${menu[i].properties}</li>
      </ul>`);
    }
};

export { showLunchMenu };

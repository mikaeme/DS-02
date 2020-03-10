'use strict';

import {getLunchMenu, getHsl} from '../../index';

let currentLocation = 0;

const panel = document.querySelector('.modal');

const campus = document.querySelector('#location');

const setLocation = (location) => {
    campus.innerHTML = 'METROPOLIA ' +location;
};

const openAdminPanel = () => {
    panel.style.display = 'block';
};

document.querySelector('.close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

document.querySelector('#location-myyr').addEventListener('click', ()  => {
    setLocation('Myyrmäki');
    currentLocation = 0;
    getLunchMenu();
});

document.querySelector('#location-kara').addEventListener('click', ()  => {
    setLocation('Karaportti');
    currentLocation = 1;
    getLunchMenu();
});

document.querySelector('#location-myll').addEventListener('click', ()  => {
    setLocation('Myllypuro');
    currentLocation = 2;
    getLunchMenu();
});


export {openAdminPanel, currentLocation};
'use strict';

import { getLunchMenu, getHsl } from '../../index';
import { setHslLocation} from '../hsl/stops-module';

let currentLocation = 0;

const panel = document.querySelector('.modal');
const body = document.querySelector('body');

const campus = document.querySelector('#location');

const setLocation = (location) => {
    campus.innerHTML = 'METROPOLIA ' + location;
    panel.style.display = 'none';
    getLunchMenu();
    setHslLocation();
};

const openAdminPanel = () => {
    panel.style.display = 'flex';
};

document.querySelector('#close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

document.querySelector('#location-myyr').addEventListener('click', () => {
    currentLocation = 0;
    setLocation('Myyrmäki');
});

document.querySelector('#location-kara').addEventListener('click', () => {
    currentLocation = 1;
    setLocation('Karaportti');
});

document.querySelector('#location-myll').addEventListener('click', () => {
    currentLocation = 2;
    setLocation('Myllypuro');
});

document.querySelector('#location-ara').addEventListener('click', () => {
    currentLocation = 3;
    setLocation('Arabia');
});


export { openAdminPanel, currentLocation };
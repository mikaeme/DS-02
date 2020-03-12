'use strict';

import { getLunchMenu, getHsl, getWeather } from '../../index';
import { setHslLocation} from '../hsl/stops-module';

// set Myyrmäki as the default location
let currentLocation = 0;

const panel = document.querySelector('.modal');
const body = document.querySelector('body');
const weatherLocation = document.querySelector('#weather-location');

const campus = document.querySelector('#location');

/**
 * Change the campus title in the header
 * @param {string} location 
 */
const setLocation = (location) => {
    campus.innerHTML = 'METROPOLIA ' + location;
    panel.style.display = 'none';
    getLunchMenu();
    setHslLocation();
    getWeather();
};

/**
 * Display control panel
 */
const openAdminPanel = () => {
    panel.style.display = 'flex';
};

// Hide control panel
document.querySelector('#close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

// Change lcurrent location
document.querySelector('#location-myyr').addEventListener('click', () => {
    currentLocation = 0;
    weatherLocation.innerHTML = ('VANTAA');
    setLocation('Myyrmäki');
});

document.querySelector('#location-kara').addEventListener('click', () => {
    currentLocation = 1;
    weatherLocation.innerHTML = ('ESPOO');
    setLocation('Karaportti');
});

document.querySelector('#location-myll').addEventListener('click', () => {
    currentLocation = 2;
    weatherLocation.innerHTML = ('HELSINKI');
    setLocation('Myllypuro');
});

document.querySelector('#location-ara').addEventListener('click', () => {
    currentLocation = 3;
    weatherLocation.innerHTML = ('HELSINKI');
    setLocation('Arabia');
});


export { openAdminPanel, currentLocation };
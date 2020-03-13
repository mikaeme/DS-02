'use strict';

import { getLunchMenu, getWeather, getNews } from '../../index';
import { setHslLocation } from '../hsl/stops-module';
import { changeLanguage } from './language-module';

// Set Myyrmäki as the default location
let currentLocation = 0;
let finnish = true;

// Selectors
const panel = document.querySelector('.modal');
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

// button to open the control panel
document.querySelector('#m-logo').addEventListener('click', () =>  {   
    panel.style.display = 'flex';
});

// Hide control panel
document.querySelector('#close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

// Change current location
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

//  Change language
document.querySelector('#language').addEventListener('click', () => {
    finnish = !finnish;
    if (finnish) {
        document.querySelector('#language').innerHTML = ('Change language');
    } else {
        document.querySelector('#language').innerHTML = ('Vaihda kieli');
    }
    changeLanguage();
    getLunchMenu();
    getNews();
});

export { currentLocation, finnish };
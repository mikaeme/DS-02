'use strict';

import { getLunchMenu, getHsl, getWeather } from '../../index';
import { setHslLocation} from '../hsl/stops-module';

let currentLocation = 0;

const panel = document.querySelector('.modal');
const body = document.querySelector('body');
const weatherLocation = document.querySelector('#weather-location');

const campus = document.querySelector('#location');

const setLocation = (location) => {
    campus.innerHTML = 'METROPOLIA ' + location;
    panel.style.display = 'none';
    getLunchMenu();
    setHslLocation();
    getWeather();
};

const openAdminPanel = () => {
    panel.style.display = 'flex';
};

document.querySelector('#close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

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
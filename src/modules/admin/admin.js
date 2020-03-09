'use strict';
import {setLocation} from './location';

const panel = document.querySelector('.modal');

const openAdminPanel = () => {
    panel.style.display = 'block';
};

document.querySelector('.close-modal').addEventListener('click', () => {
    panel.style.display = 'none';
});

document.querySelector('#change-location').addEventListener('click', ()  => {
    setLocation('Karaportti');
});

export {openAdminPanel};
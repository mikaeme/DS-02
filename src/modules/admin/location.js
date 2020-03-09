'use strict';

const currentLocation = document.querySelector('#location');

const setLocation = (location) => {
    currentLocation.innerHTML = 'METROPOLIA ' +location;
};

export { setLocation };
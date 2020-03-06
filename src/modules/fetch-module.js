'use strict';
const proxyUrl = 'https://cors-anywhere.herokuapp.com';

const getJsonMenu = async (menuUrl, useProxy = true) => {
    let response;
    try {
        response = await fetch(`${useProxy ? proxyUrl: ''}/${menuUrl}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
    } catch(error) {
        console.error('Fetch menu error', error.message);
    }
    let menus = await response.json();
    return menus;
};

export {getJsonMenu};
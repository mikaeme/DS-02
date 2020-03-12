'use strict';

const getJsonDataNoCors = async(url) => {
    let response;
    try {
        response = await fetch(`${url}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.log('Fetch error', error.message);
    }
    let data = await response.json();
    console.log('DATA', data);
    return data;
};

const proxyUrl = 'https://cors-anywhere.herokuapp.com';

const getJsonData = async(url, useProxy = true) => {

    let response;
    try {
        response = await fetch(`${useProxy ? proxyUrl: ''}/${url}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Fetch menu error', error.message);
    }
    let menus = await response.json();
    return menus;
};

export { getJsonData, getJsonDataNoCors };
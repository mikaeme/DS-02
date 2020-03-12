'use strict';

const proxyUrl = 'https://cors-anywhere.herokuapp.com';

const getJsonData = async(url, cors) => {
    const useProxy = cors;
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

export { getJsonData };
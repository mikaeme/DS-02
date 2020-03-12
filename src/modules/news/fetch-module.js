'use strict';

const getJsonNews = async(menuUrl) => {
    let response;
    try {
        response = await fetch(`${menuUrl}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.log('Fetch error', error.message);
    }
    let news = await response.json();
    console.log('news', news);
    return news;
};

export { getJsonNews };
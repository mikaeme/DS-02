'use strict';

import { getJsonData } from '../fetch-module';
import { showNews, showEnglishNews } from './news-show';
import { finnish } from '../admin/admin';

let newsArrrayFi = [];
let newsArrrayEn = [];

//  Yle teletext pages to be fetched: 
const ylePages = [102, 130, 201];

//  International news sources to be fetched
const newsSources = ['bbc-news', 'the-wall-street-journal', 'buzzfeed'];

/**
 * Function call for fetching and displaying news data
 */
const getNews = async () => {
    await getFinnishNews(ylePages);
    await getEnglishNews(newsSources);
    console.log(newsArrrayFi, newsArrrayEn);
    showNews(newsArrrayFi, newsArrrayEn);
};
/**
 * Fetch data from Yle
 * @param {array} url - news pages
 */
const getFinnishNews = async (url) => {
    newsArrrayFi = [];
    for (let i in url) {
        const response = await getJsonData('https://external.api.yle.fi/v1/teletext/pages/' + url[i] + '.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799', true);
        const news = await response;
        newsArrrayFi.push(news);
    }
    return newsArrrayFi;
};

/**
 * Fetch data from NewsAPI
 * @param {array} url - news sources
 */
const getEnglishNews = async (url) => {
    newsArrrayEn = [];
    for (let i in url) {
        const response = await getJsonData('http://newsapi.org/v2/everything?sources=' + url[i] + '&apiKey=818b12af0ccc48dbb9176013a960243b', true);
        const news = await response;
        newsArrrayEn.push(news);
    }
    return newsArrrayEn;
};

export { getNews };
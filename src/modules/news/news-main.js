'use strict';

import { getJsonData } from '../fetch-module';
import { makeArrays} from './news-convert';

let newsArrayFi = [];
let newsArrayEn = [];

//  Yle teletext pages to be fetched: 
const ylePages = [102, 130, 201];

//  International news sources to be fetched
const newsSources = ['bbc-news', 'the-wall-street-journal', 'fox-sports'];

/**
 * Function call for fetching and displaying news data
 */
const getNews = async () => {
    await getFinnishNews(ylePages);
    await getEnglishNews(newsSources);
    makeArrays(newsArrayFi, newsArrayEn);

};
/**
 * Fetch data from Yle
 * @param {array} url - news pages
 */
const getFinnishNews = async (url) => {
    newsArrayFi = [];
    for (let i in url) {
        const response = await getJsonData('https://external.api.yle.fi/v1/teletext/pages/' + url[i] + '.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799', true);
        const news = await response;
        newsArrayFi.push(news);
    }
    return newsArrayFi;
};

/**
 * Fetch data from NewsAPI
 * @param {array} url - news sources
 */
const getEnglishNews = async (url) => {
    newsArrayEn = [];
    for (let i in url) {
        const response = await getJsonData('http://newsapi.org/v2/everything?sources=' + url[i] + '&apiKey=818b12af0ccc48dbb9176013a960243b', true);
        const news = await response;
        newsArrayEn.push(news);
    }
    return newsArrayEn;
};

export { getNews };
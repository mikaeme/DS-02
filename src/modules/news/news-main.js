'use strict';

import { getJsonData } from '../fetch-module';
import { showNews, showEnglishNews } from './news-show';
import { finnish } from '../admin/admin';

let newsCounter = 0;
const getNews = () => {
    if (finnish) {
        let newsTimer = setInterval(() => {
            newsCounter++;
            if (newsCounter === 1) {
                const limits = [11, 7, 13];
                getFinnishNews(102, limits);
            }
            if (newsCounter === 5) {
                const limits = [20, 5, 20];
                getFinnishNews(130, limits);
            }
            if (newsCounter === 10) {
                const limits = [15, 7, 17];
                getFinnishNews(201, limits);
            }
            if (newsCounter === 15) {
                newsCounter = 0;
            }
        }, 2000);
    } else {
        console.log('huh');
        let newsTimer = setInterval(() => {
            newsCounter++;
            if (newsCounter === 1) {
                const limits = [0, 4];
                getEnglishNews(limits);
            }
            if (newsCounter === 5) {
                const limits = [5, 9];
                getEnglishNews(limits);
            }
            if (newsCounter === 10) {
                const limits = [10, 14];
                getEnglishNews(limits);
            }
            if (newsCounter === 15) {
                newsCounter = 0;
            }
        }, 2000);
    };
};

const url1 = 'https://external.api.yle.fi/v1/teletext/pages/';
const url2 = '.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799';
const urlEn = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=818b12af0ccc48dbb9176013a960243b';

/**
 * Function call for fetching and displaying news data
 * @param {int} page - teletext news page
 * @param {array} limits - defines news to be fetched
 */

const getFinnishNews = async (page, limits) => {
    const response = await getJsonData(url1 + page + url2, true);
    const news = await response;
    showNews(news, limits);
};

const getEnglishNews = async (limits) => {
    const response = await getJsonData(urlEn, true);
    const news = await response;
    console.log(limits);
    console.log(news);
    showEnglishNews(news, limits);
};

export { getNews };
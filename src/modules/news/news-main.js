'use strict';

import {getJsonData} from '../fetch-module';
import { showNews } from './news-show';

const url1 = 'https://external.api.yle.fi/v1/teletext/pages/';
const url2 = '.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799';

/**
 * Function call for fetching and displaying news data
 * @param {int} page - teletext news page
 * @param {array} limits - defines news to be fetched
 */
const getNews = async(page, limits) => {
    const response = await getJsonData(url1 + page + url2, true);
    const news = await response;
    showNews(news, limits);
};

export { getNews };
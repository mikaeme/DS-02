'use strict';

import {getJsonDataNoCors} from '../fetch-module';
import { showNews } from './news-show';

const url1 = 'https://external.api.yle.fi/v1/teletext/pages/';
const url2 = '.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799';

const getNews = async(page, limits) => {
    const response = await getJsonDataNoCors(url1 + page + url2);
    const news = await response;
    showNews(news, limits);
};

export { getNews };
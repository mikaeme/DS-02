'use strict';

import {getJsonDataNoCors} from '../fetch-module';
import { showNews, showForeignNews, showSportNews } from './news-show';

const getLocalNews = async() => {
    const response = await getJsonDataNoCors('https://external.api.yle.fi/v1/teletext/pages/102.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799');
    const news = await response;
    showNews(news);
};

const getForeignNews = async () => {
    const response = await getJsonDataNoCors('https://external.api.yle.fi/v1/teletext/pages/130.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799');
    const news = await response;
    showForeignNews(news);
};

const getSportNews = async () => {
    const response = await getJsonDataNoCors('https://external.api.yle.fi/v1/teletext/pages/201.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799');
    const news = await response;
    showSportNews(news);
};

export { getLocalNews, getSportNews, getForeignNews };
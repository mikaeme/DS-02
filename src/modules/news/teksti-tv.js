import {getJsonNews} from './fetch-module';
import {showNews} from './show-module';

const getNews = async () => {
    const response = await getJsonNews('https://external.api.yle.fi/v1/teletext/pages/102.json?app_id=072f825b&app_key=921f3b699a881eab808884e74f4be799');
    const news = await response;
    showNews(news);
};

export {getNews};


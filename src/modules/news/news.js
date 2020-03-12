import { getJsonData } from '../fetch-module';
import {showNews} from './news-show1';

const getEnglishNews = async() => {
    const url = 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=818b12af0ccc48dbb9176013a960243b';
    const response = await getJsonData(url, true);

    const news = await response;
    showNews(news);
};

export { getEnglishNews };

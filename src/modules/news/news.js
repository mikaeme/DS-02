import { getJsonData } from '../fetch-module';
import {showNews} from './news-show1';

const getAltNews = async() => {
    const url = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=818b12af0ccc48dbb9176013a960243b';
    const response = await getJsonData(url, true);

    const news = await response;
    showNews(news);
};

export { getAltNews };

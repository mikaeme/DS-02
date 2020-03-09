import { getJsonNews } from './fetch-module';

const showReport = async(report) => {};

const getAltNews = async() => {
    // const response = await getJsonMenu('http://webhose.io/filterWebContent?token=03cf4521-ef90-4fad-a5db-3ffc857c33a5&format=json&ts=1582983842606&sort=crawled&q=language%3Afinnish%20site_type%3Anews');
    const response = await getJsonNews('http://webhose.io/filterWebContent?token=03cf4521-ef90-4fad-a5db-3ffc857c33a5&q=site_type:news%20country:FI');

    const news = await response;
    showReport(news);
};

export { getAltNews };
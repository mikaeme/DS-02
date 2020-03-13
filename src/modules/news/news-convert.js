'use strict';
import {setNewsLanguage} from './news-show';

const makeArrays = (newsFi, newsEn) =>{
    const finnishArray = [];
    for(let i in newsFi){
        const finnishPage = [];
        for(let j in newsFi[i].teletext.page.subpage[0].content[0].line){
            if(newsFi[i].teletext.page.subpage[0].content[0].line[j].Text != null)
            finnishPage.push(newsFi[i].teletext.page.subpage[0].content[0].line[j].Text);
        }
        finnishArray.push(finnishPage);
        finnishArray.shift;
    }
    const englishArray = [];
    for(let i in newsEn){
        const englishPage = [];
        for(let j in newsEn[i].articles){
            if(newsEn[i].articles[j].title != null)
            englishPage.push(newsEn[i].articles[j].title);
        }
        englishArray.push(englishPage);
    }
    setNewsLanguage(finnishArray, englishArray);
};

export {makeArrays};
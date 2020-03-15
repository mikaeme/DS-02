'use strict';
import { finnish } from '../admin/admin';
const newsList = document.querySelector('#subpage');

/**
 * Shows four news titles from different pages in 5 second intervals
 * @param {array} news - news data
 */
const showFinnishNews = (news) => {
  let i=0;

  //  initial display loop
  for (let j = 15; j < 19; j++) {   //  values of j chosen because of the irregularites in yle static data
    if(news[i].teletext.page.subpage[0].content[0].line[j].Text != null)  // skip empty lines
    newsList.innerHTML += ('<li>' + news[i].teletext.page.subpage[0].content[0].line[j].Text + '</li>');
  }
  i++;

  //  timer
  let newsTimer = setInterval(() => {
    newsList.innerHTML = ('');
    for (let j = 15; j < 19; j++) {
      if(news[i].teletext.page.subpage[0].content[0].line[j].Text != null)
      newsList.innerHTML += ('<li>' + news[i].teletext.page.subpage[0].content[0].line[j].Text + '</li>');
    }
    i++;
    if(i>2) i=0;

    //  if language is changed, interrupt the timer and clear display
    if(!finnish) {
      clearInterval(newsTimer);
      newsList.innerHTML = ('');
    }
  }, 5000);
};

 // ^Same in English
const showEnglishNews = (news) => {
  let i=0;
  newsList.innerHTML = ('');
  for (let j = 0; j < 4; j++) {
    if(news[i].articles[j].title != null)
    newsList.innerHTML += ('<li>' + news[i].articles[j].title + '</li>');
  }
  i++;
  let newsTimer = setInterval(() => {
    newsList.innerHTML = ('');
    for (let j = 0; j < 4; j++) {
      if(news[i].articles[j].title != null)
      newsList.innerHTML += ('<li>' + news[i].articles[j].title + '</li>');
    }
    i++;
    if(i>2) i=0;
    if(finnish) {
      clearInterval(newsTimer);
      newsList.innerHTML = ('');
    }
  }, 10000);
};

/**
 * Receives data from news-main.js, checks the language setting
 * and calls the appropriate display function
 * @param {array} newsFi - news data in Finnish
 * @param {array} newsEn - news data in English
 */
const showNews = (newsFi, newsEn) => {
  newsList.innerHTML = ('');
  if (finnish) {
    showFinnishNews(newsFi);
  } else {
    showEnglishNews(newsEn);
  }
};

export { showNews };
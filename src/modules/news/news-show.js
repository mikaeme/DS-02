'use strict';
import { finnish } from '../admin/admin';
const newsList = document.querySelector('#subpage');

// Declare interval id
let newsTimer;

// /**
//  * Shows four news titles from different pages in 5 second intervals
//  * @param {array} news - news data
//  */
const showNews = (news) => {
  let i=0;

  // initial display loop
  for (let j = 0; j < 4; j++) {   //  display first four titles of the array i
    newsList.innerHTML += ('<li>' + news[i][j] + '</li>');
  }
  i++;
  //  timer
  newsTimer = setInterval(() => {
    console.log(i);
    newsList.innerHTML = ('');
    for (let j = 0; j < 4; j++) {
      newsList.innerHTML += ('<li>' + news[i][j] + '</li>');
    }
    i++;
    if(i>2) i=0; // Keep news pages cycling infinitely
  }, 7000);
};

/**
 * Choose the news language
 * @param {array} newsFi - array containing news arrays in Finnish
 * @param {array} newsEn -array containing news arrays in English
 */
const setNewsLanguage = (newsFi, newsEn) => {
  clearInterval(newsTimer);
  newsList.innerHTML = ('');
  if (finnish) {
    showNews(newsFi);
  } else {
    showNews(newsEn);
  }
};

export { setNewsLanguage };
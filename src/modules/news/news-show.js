'use strict';

/**
 * Display news
 * @param {object} report - data object
 * @param {*} limits - defines news to be fetched 
 */

const showNews = async(report, limits) => {
  const page = report.teletext.page;
  const loop = page.subpage[0].content[0].line;
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=0; i < limits[0];i++) {
    for(i = limits[1]; i < limits[2]; i++){

      //display page number and time
      document.querySelector('#num').innerHTML = ('<li>' + (page.number) + ' ' + (page.name) + '</li>');
      document.querySelector('#time').innerHTML = ('<li>' + (page.time) + '</li>');
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>'); // skip empty values
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[22].Text) + '</li>');
  }
};

const showEnglishNews = async(report, limits) => {
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=limits[0]; i < limits[1];i++) {
    document.querySelector('#subpage').innerHTML += ('<li>' + (report.articles[i].title) + '</li>');
  }
};

export { showNews, showEnglishNews };
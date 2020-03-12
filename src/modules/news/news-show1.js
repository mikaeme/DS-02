'use strict';

const showNews = async(report) => {
  document.querySelector('#subpage').innerHTML =(' ');
  console.log(report);
    for(let i = 0; i < 5; i++){
      document.querySelector('#subpage').innerHTML += ('<li>' + (report.articles[i].title) + '</li>');
    }  
};

export { showNews };

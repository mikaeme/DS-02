'use strict';

const showNews = async(report) => {
  document.querySelector('#subpage').innerHTML =(' ');
  console.log(report);

    for(let i = 0; i < 5; i++){
      /* document.querySelector('#num').innerHTML = ('<li>' + (page.number) + ' ' + (page.name) + '</li>'); */
      /* document.querySelector('#time').innerHTML = ('<li>' + (loop) + '</li>'); */
      // if (report[i].Text != null)
      //     document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i]) + '</li>');
      // }
      document.querySelector('#subpage').innerHTML += ('<li>' + (report.articles[i].title) + '</li>');
    }
  
};

export { showNews };

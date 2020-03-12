'use strict';

const showNews = async(report, limits) => {
  const page = report.articles;
  const loop = page.author;
  document.querySelector('#subpage').innerHTML = ('');
  console.log(showNews);

  ocument.querySelector('#subpage').innerHTML += ('<li>' + (loop[0]) + '</li>');
  for (let i=0; i < limits[0];i++) {
    for(i = limits[1]; i < limits[2]; i++){
      /* document.querySelector('#num').innerHTML = ('<li>' + (page.number) + ' ' + (page.name) + '</li>'); */
      /* document.querySelector('#time').innerHTML = ('<li>' + (loop) + '</li>'); */
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i]) + '</li>');
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i]) + '</li>');
  }
};

export { showNews };

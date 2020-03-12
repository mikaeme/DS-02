'use strict';

const showNews = async(report, limits) => {
  const page = report.teletext.page;
  const loop = page.subpage[0].content[0].line;
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=0; i < limits[0];i++) {
    for(i = limits[1]; i < limits[2]; i++){
      document.querySelector('#num').innerHTML = ('<li>' + (page.number) + ' ' + (page.name) + '</li>');
      /* document.querySelector('#name').innerHTML = ('<li>' + (name) + '</li>');*/
      document.querySelector('#time').innerHTML = ('<li>' + (page.time) + '</li>');
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[22].Text) + '</li>');
  }
};

export { showNews };
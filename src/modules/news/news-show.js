'use strict';

const showNews = async(report) => {
  const pnumber = report.teletext.page.number;
  const name = report.teletext.page.name;
  const time = report.teletext.page.time;
  const loop = report.teletext.page.subpage[0].content[0].line;
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=0; i < 11;i++) {
    for(i = 7; i < 13; i++){
      document.querySelector('#num').innerHTML = ('<li>' + (pnumber) + ' ' + (name) + '</li>');
      /* document.querySelector('#name').innerHTML = ('<li>' + (name) + '</li>');*/
      document.querySelector('#time').innerHTML = ('<li>' + (time) + '</li>');
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[22].Text) + '</li>');
  }
};

const showForeignNews = async(report) => {
  const pnumber = report.teletext.page.number;
  const name = report.teletext.page.name;
  const time = report.teletext.page.time;
  const loop = report.teletext.page.subpage[0].content[0].line;
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=0; i < 20;i++) {
    for(i = 5; i < 20; i++){
      document.querySelector('#num').innerHTML = ('<li>' + (pnumber) + ' ' + (name) + '</li>');
      /* document.querySelector('#name').innerHTML = ('<li>' + (name) + '</li>');*/
      document.querySelector('#time').innerHTML = ('<li>' + (time) + '</li>');
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[22].Text) + '</li>');
  }
};

const showSportNews = async(report) => {
  const pnumber = report.teletext.page.number;
  const name = report.teletext.page.name;
  const time = report.teletext.page.time;
  const loop = report.teletext.page.subpage[0].content[0].line;
  const sport = report.teletext.page.subpage[0].content[0].line[0].Text;
  document.querySelector('#subpage').innerHTML = ('');

  for (let i=0; i < 15;i++) {
    for(i = 7; i < 17; i++){
      document.querySelector('#num').innerHTML = ('<li>' + (pnumber) + ' ' + (sport) + '</li>');
      /* document.querySelector('#name').innerHTML = ('<li>' + (name) + '</li>');*/
      document.querySelector('#time').innerHTML = ('<li>' + (time) + '</li>');
      if (loop[i].Text != null)
          document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
      }
      document.querySelector('#subpage').innerHTML += ('<li>' + (loop[22].Text) + '</li>');
  }
};

export { showNews, showForeignNews, showSportNews };
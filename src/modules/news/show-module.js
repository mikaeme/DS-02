'use strict';

const showNews = async(report) => {
    const pnumber = report.teletext.page.number;
    const name = report.teletext.page.name;
    const time = report.teletext.page.time;
    const loop = report.teletext.page.subpage[0].content[0].line;

    for (let i in loop) {
        document.querySelector('#num').innerHTML = ('<li>' + (pnumber) + " " + (name) + '</li>');
        document.querySelector('#time').innerHTML = ('<li>' + (time) + '</li>');
        if (loop[i].Text != null)
            document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
    }
    /*
      const array = [];
      for (let i = 0; i < 10; i++) {
        let row = news.report[i].name
        row.push(array)
       }*/
};

export { showNews };
'use strict';

const showNews = async (report) => {
    const pnumber = report.teletext.page.number;
    const name = report.teletext.page.name;
    const time = report.teletext.page.time;
    const loop = report.teletext.page.subpage[0].content[0].line;

    for (let i in loop) {
        document.querySelector('#num').innerHTML = ('<li>' + (pnumber) + '</li>');
        document.querySelector('#name').innerHTML = ('<li>' + (name) + '</li>');
        document.querySelector('#time').innerHTML = ('<li>' + (time) + '</li>');
        if(loop[i].Text != null)
        document.querySelector('#subpage').innerHTML += ('<li>' + (loop[i].Text) + '</li>');
    }
};

export { showNews };


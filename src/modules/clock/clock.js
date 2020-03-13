'use strict';

const showTime = () => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h == 0) {
        h = 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);

};



// const displayTime = () => {
//     var element = document.getElementById("clock");
//     var now = new Date();
//     element.innerHTML = now.toLocaleTimeString();
//     setTimeout(displayTime, 1000);
// };

export { showTime };

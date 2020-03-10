'use strict';

const nextSlide = () => {
    if (typeof $ == "undefined") var $ = sel => { return document.querySelector(sel); };
    $(".slides").appendChild($(".slides video:first-child"));
};

setInterval(nextSlide, 5000);

export { nextSlide };

'use strict';

const nextSlide = () => {
    if (typeof $ == "undefined") var $ = sel => { return document.querySelector(sel); };
    $(".slides").appendChild($(".slides img:first-child"));
};

setInterval(nextSlide, 4000);

export { nextSlide };

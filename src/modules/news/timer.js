import {getNews} from './teksti-tv';
import {getSNews} from './sports';
import {getFNews} from './foreign';

const timeNews = () => {
  let counter = 1;


    let timeNews = setInterval(() => {
    counter++;
    console.log(counter);
    getNews();

      if (counter === 5) {
        getSNews();

      }
      if (counter === 10){
        getFNews();

      }
      if (counter === 15){
        counter = 0;

      }
    }, 1000);
};


timeNews();

export {timeNews};

'use strict';
import { schedule } from './hsl-main';

/**
 * Display 13 lines of schedules, starting from the 3rd one in the array
 * 
 */

const showResult = () => {
    document.querySelector('.hsl-list').innerHTML ='';
    for (let i=2;i<15;i++) {
        document.querySelector('.hsl-list').innerHTML += (`<ul class="hsl-row">
      <li class="hsl-time">${schedule[i].time}</li>
      <li class="hsl-line">${schedule[i].line}</li>
      <li class="hsl-destination">${schedule[i].destination}</li>
      <li class="hsl-stop">${schedule[i].stop}</li>
      </ul>`);
    }
};

export { showResult };
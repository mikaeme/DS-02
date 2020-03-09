'use strict';
import { schedule } from './fetch-module';

// Present data
const showResult = () => {
    console.log('HSL', schedule);
    for (let i in schedule) {
        document.querySelector('.hsl-list').innerHTML += (`<ul class="hsl-row">
      <li class="hsl-time">${schedule[i].time}</li>
      <li class="hsl-line">${schedule[i].line}</li>
      <li class="hsl-destination">${schedule[i].destination}</li>
      <li class="hsl-stop">${schedule[i].stop}</li>
      </ul>`);
    }
};

export { showResult };
'use strict';
import { currentLocation } from '../admin/admin';
import { getJsonData} from '../fetch-module';
import { showWeather} from './weather-show';

let url;
const url1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
const url2 = ',fi&APPID=de4a850978be558877b5e66f393abd6b';

/**
 * Function call to fetch data in current location
 */

const getWeather = async () => {
    if (currentLocation === 1) {
        url = url1 + 'espoo' + url2;
    } else if (currentLocation === 2) {
        url = url1 + 'helsinki' + url2;
    } else {
        url = url1 + 'vantaa' + url2;
    }
    const response = await getJsonData(url, false);
    const weather = await response;
    showWeather(weather);
};

export { getWeather };

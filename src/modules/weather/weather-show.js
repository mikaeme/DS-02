'use strict';

const cloud01 = document.querySelector('#cloud-01');
const cloud02 = document.querySelector('#cloud-02');
const cloud03 = document.querySelector('#cloud-03');
const sun01 = document.querySelector('#sun-01');
const rain01 = document.querySelector('#raindrop-01');

cloud01.style.display = 'none';
cloud02.style.display = 'none';
cloud03.style.display = 'none';
sun01.style.display = 'none';

/**
 * Display weather according to data
 * @param {object} report - weather data 
 */

const showWeather = async (report) => {
    const temperature = Math.round(report.main.temp - 272); // convert kelvin to celsius
    const wind = Math.round(report.wind.speed);
    const clouds = report.clouds.all;
    const rain = report.weather[0].main;

    document.querySelector('#temp').innerHTML = ((temperature) + '°C');
    document.querySelector('#wind').innerHTML = ((wind) + ' m/s');

    if(rain === 'Rain'){                    //Display raindrop if it is raining
        rain01.style.display = 'block';
    } else {
        rain01.style.display = 'none';
    };

    if (clouds == 75) {                     //display clouds or sun
        cloud01.style.display = 'none';
        cloud02.style.display = 'block';
        cloud03.style.display = 'none';
        sun01.style.display = 'none';
    } else if (clouds < 25) {
        cloud01.style.display = 'none';
        cloud02.style.display = 'none';
        cloud03.style.display = 'none';
        sun01.style.display = 'block';
    } else if (clouds > 75) {
        cloud01.style.display = 'block';
        cloud02.style.display = 'none';
        cloud03.style.display = 'none';
        sun01.style.display = 'none';
    } else {
        cloud01.style.display = 'none';
        cloud02.style.display = 'none';
        cloud03.style.display = 'block';
        sun01.style.display = 'none';
    }
};

export {showWeather};
'use strict';
import { fetchData } from './fetch-module';
import { showResult } from './hsl-show';
import { stopId } from './stops-module';

// Clear schedule array 
let schedule = [];

//Function calls for fetching and displaying data

const getHsl = async() => {
    schedule = []; // Clear array
    for (let i in stopId) {
        const response = await fetchData(i);
        const result = await response;
    }
    showResult();
};

export { getHsl, schedule };
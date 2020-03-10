'use strict';
import { fetchData } from './fetch-module';
import { showResult } from './show-module';
import { stopId } from './stops-module';

let schedule = [];

const getHsl = async() => {
    schedule = [];
    for (let i in stopId) {
        const response = await fetchData(i);
        const result = await response;
    }
    showResult();
};

export { getHsl, schedule };
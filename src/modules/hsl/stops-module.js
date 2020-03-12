'use strict';
import { currentLocation } from '../admin/admin';
import { getHsl } from './hsl-main';

// Create arrays of bus stop ids for each campus
const myyrmaki = [
  4150228,
  4150201,
  4150269,
  4150268,
  4150261,
  4150551,
  4150501
];

const myllypuro = [
  1454140,
  1454141,
  1454601,
  1454602,
  1454111,
  1454112
];

const karaportti = [
  2132207,
  2132208,
  2132552,
  2132502,
  2132225,
  2132226
];

const arabia = [
  1230407,
  1230103,
  1230104,
  1240121,
  1240106
];

let stopId = myyrmaki;

/**
 * Choose the correct array for current location and call for schedules
 */

const setHslLocation = () => {
  if (currentLocation === 1) {
    stopId = karaportti;
  } else if (currentLocation === 2) {
    stopId = myllypuro;
  } else if (currentLocation === 3) {
    stopId = arabia;
  } else {
    stopId = myyrmaki;
  }
  getHsl();
};
export { stopId, setHslLocation };




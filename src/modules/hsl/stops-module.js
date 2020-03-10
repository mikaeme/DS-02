'use strict';
import {currentLocation} from '../admin/admin';
 let stopId;

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

];

const karaportti = [

];

const arabia = [

];

if(currentLocation === 0) {
  stopId = myyrmaki;
} else if(currentLocation === 1) {
  stopId = karaportti;
} else if(currentLocation) {
  stopId = arabia;
}

export { stopId };



